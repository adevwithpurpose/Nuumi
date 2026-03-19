# Nuumipet Theme

Nuumipet is a custom Shopify Dawn-based storefront for a lean pet wellness brand. This repo is no longer a stock Dawn starter; it now contains a custom homepage system, a reusable PDP system, and the first round of merchant-enablement work for Theme Editor control.

## Current state

- Homepage: custom Nuumi section stack is implemented
- PDP: custom Nuumi product-page stack is implemented
- Phase 4: merchant-enablement work is in progress
- Live Shopify preview and Theme Editor QA still require Shopify auth

## Implemented custom systems

### Homepage

- `sections/nuumi-announcement-bar.liquid`
- `sections/nuumi-home-hero.liquid`
- `sections/nuumi-trust-strip.liquid`
- `sections/nuumi-proof-grid.liquid`
- `sections/nuumi-featured-products.liquid`
- `sections/nuumi-expert-spotlight.liquid`
- `sections/nuumi-benefits-story.liquid`
- `sections/nuumi-faq.liquid`
- `templates/index.json`

### PDP

- `sections/nuumi-main-product.liquid`
- `sections/nuumi-pdp-trust-strip.liquid`
- `sections/nuumi-pdp-guarantee.liquid`
- `sections/nuumi-pdp-story.liquid`
- `sections/nuumi-pdp-comparison.liquid`
- `sections/nuumi-pdp-expert.liquid`
- `sections/nuumi-pdp-faq.liquid`
- `templates/product.json`

### Shared styling

- `assets/nuumi-base.css`
- `assets/nuumi-home.css`
- `assets/nuumi-pdp.css`
- `snippets/nuumi-icons.liquid`
- `snippets/nuumi-rating-stars.liquid`

## Merchant-editable controls

The theme currently supports merchant editing through section settings/blocks for the homepage and PDP stack.

Recent global controls added in Theme Editor:

- Nuumi brand colors in `config/settings_schema.json`
- Global Nuumi announcement settings in `config/settings_schema.json`
- Theme-level CSS variable wiring in `layout/theme.liquid`

## Planning docs

The current source of truth for project planning is under `.planning/`.

- `.planning/PROJECT.md`
- `.planning/ROADMAP.md`
- `.planning/REQUIREMENTS.md`
- `.planning/STATE.md`

Phase slice summaries live under:

- `.planning/phases/02-homepage-sections/`
- `.planning/phases/03-pdp-sections/`

## Remaining work

Primary remaining items:

- complete Phase 4 merchant enablement
- run live Shopify/theme-editor QA
- verify Shopify CLI workflow and GitHub/store connection
- decide whether to expose additional global controls for typography and button treatment

## Local workflow notes

- Dawn remains the base theme architecture
- Custom Nuumi work should preserve Shopify section/block editability
- `.planning/` reflects the manual workflow after removal of the old GSD wrappers
- `config/settings_data.json` is tracked and must stay valid Shopify JSON

## Reference docs

- `brief.md`
- `docs/workflow-guide.md`
- `docs/reference-map.md`
- `docs/product-data.md`
- `release-notes.md`
