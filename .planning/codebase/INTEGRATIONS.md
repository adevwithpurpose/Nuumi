# External Integrations

**Analysis Date:** 2026-03-18

## APIs & External Services

**Internal (Shopify AJAX API):**
- **Shopify**: The theme makes extensive use of Shopify's own frontend APIs for various functionalities. These are not external integrations but are the primary way the theme interacts with the platform.
  - **Usage**:
    - Predictive Search (`/search/suggest`)
    - Add to Cart (`/cart/add.js`)
    - Update Cart (`/cart/update.js`, `/cart/change.js`)
    - Fetching product/section data via section rendering API.
  - **SDK/Client**: Native browser `fetch()` API.
  - **Auth**: Handled by the user's Shopify session.

**Third-Party:**
- **None detected**: There are no visible API calls to external third-party services (like analytics, ERPs, or social media platforms) within the theme's source code. Integrations of this nature are likely handled by Shopify Apps, which inject scripts into the store at runtime and are not part of this codebase.

## Data Storage

**Databases:**
- **Shopify Platform**: All data (products, customers, orders, etc.) is stored and managed by Shopify. The theme accesses this data via Liquid objects and the Shopify API.

**File Storage:**
- **Shopify CDN**: All theme assets (`.js`, `.css`, images) are hosted on Shopify's Content Delivery Network.

**Caching:**
- **Shopify**: Caching is handled by the Shopify platform.

## Authentication & Identity

**Auth Provider:**
- **Shopify Customer Accounts**: Authentication is handled entirely by Shopify's built-in customer account system. The theme provides the frontend interface (`templates/customers/login.liquid`, `templates/customers/register.liquid`, etc.) for this system.

## Monitoring & Observability

**Error Tracking:**
- **None detected**: No integration with services like Sentry, Bugsnag, or Datadog is visible in the codebase.

**Logs:**
- **Shopify Platform**: Any server-side logging is handled by Shopify. Client-side logs would be directed to the browser's console.

## CI/CD & Deployment

**Hosting:**
- **Shopify Platform**: The theme is hosted exclusively on Shopify.

**CI Pipeline:**
- **None detected**: There are no configuration files for CI/CD services like GitHub Actions, CircleCI, or Travis CI. Deployment is typically done via the Shopify CLI or by uploading a theme zip file.

## Environment Configuration

**Required env vars:**
- **Not applicable**: This theme does not use a `.env` file. Configuration is managed through the Shopify Theme Editor.

**Secrets location:**
- **Not applicable**: No secrets or API keys are stored in the theme codebase. They would be stored within Shopify App configurations or Shopify's own secure settings.

## Webhooks & Callbacks

**Incoming:**
- **Not applicable**: The theme itself does not expose any endpoints to receive webhooks. This is handled by the Shopify platform or Shopify Apps.

**Outgoing:**
- **None detected**: The theme does not appear to be making any outgoing webhook calls.

---

*Integration audit: 2026-03-18*
