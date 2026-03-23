import { readFile } from 'node:fs/promises';
import path from 'node:path';

const STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || 'evsedm-j1.myshopify.com';
const ADMIN_TOKEN = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
const API_VERSION = process.env.SHOPIFY_ADMIN_API_VERSION || '2025-01';

const PRODUCT_CONFIGS = [
  {
    key: 'enercanis',
    payloadPath: path.resolve('scripts', 'shopify-products', 'enercanis.productset.json'),
  },
  {
    key: 'byebark',
    payloadPath: path.resolve('scripts', 'shopify-products', 'byebark.productset.json'),
  },
  {
    key: 'calmicollar',
    payloadPath: path.resolve('scripts', 'shopify-products', 'calmicollar.productset.json'),
  },
  {
    key: 'pawpoint',
    payloadPath: path.resolve('scripts', 'shopify-products', 'pawpoint.productset.json'),
  },
  {
    key: 'bundle',
    payloadPath: path.resolve('scripts', 'shopify-products', 'bundle.productset.json'),
  },
];

const PRODUCT_SET_MUTATION = `#graphql
  mutation ProductSet($input: ProductSetInput!, $synchronous: Boolean!) {
    productSet(input: $input, synchronous: $synchronous) {
      product {
        id
        title
        handle
        templateSuffix
        status
      }
      productSetOperation {
        id
        status
        userErrors {
          code
          field
          message
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`;

async function loadPayload(payloadPath) {
  const fileContent = await readFile(payloadPath, 'utf8');
  return JSON.parse(fileContent);
}

async function callAdminApi(query, variables) {
  const response = await fetch(`https://${STORE_DOMAIN}/admin/api/${API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': ADMIN_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Admin API request failed: ${response.status} ${response.statusText}\n${body}`);
  }

  return response.json();
}

function parseArgs(argv) {
  const productArg = argv.find((arg) => arg.startsWith('--product='));
  const dryRun = argv.includes('--dry-run');
  return {
    productKey: productArg ? productArg.split('=')[1] : null,
    dryRun,
  };
}

async function main() {
  const { productKey, dryRun } = parseArgs(process.argv.slice(2));

  if (!ADMIN_TOKEN && !dryRun) {
    throw new Error('Missing SHOPIFY_ADMIN_ACCESS_TOKEN. Add an Admin API token before creating products.');
  }

  const targets = productKey
    ? PRODUCT_CONFIGS.filter((item) => item.key === productKey)
    : PRODUCT_CONFIGS;

  if (targets.length === 0) {
    throw new Error(`Unknown product key: ${productKey}`);
  }

  for (const target of targets) {
    const payload = await loadPayload(target.payloadPath);
    const variables = {
      input: payload.input,
      synchronous: true,
    };

    if (dryRun) {
      console.log(`DRY RUN ${target.key}`);
      console.log(JSON.stringify(variables, null, 2));
      continue;
    }

    const result = await callAdminApi(PRODUCT_SET_MUTATION, variables);
    console.log(JSON.stringify({ product: target.key, result }, null, 2));
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
