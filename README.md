# Nuumipet Theme

Nuumipet is a custom Shopify Dawn-based storefront for a lean pet wellness brand. This repo is no longer a stock Dawn starter; it now contains a custom homepage system, a reusable PDP system, and the first round of merchant-enablement work for Theme Editor control.

## Current state

- Homepage: custom Nuumi section stack is implemented
- PDP: custom Nuumi product-page stack is implemented, including the EnerCanis rollout work in progress
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
- `templates/product.enercanis.json`

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
- keep `docs/products/enercanis.md` aligned with the live EnerCanis rollout notes
- treat `templates/product.enercanis.json` as the locked reference baseline for future product pages

## GitHub & Deployment Workflow (Source of Truth)

**CRITICAL DEPLOYMENT Rule:** The `main` branch in this repository represents the absolute Source of Truth for the live Shopify Theme preview.
Any push to `main` will automatically trigger Shopify's GitHub integration and immediately reflect changes on the storefront.

### The Correct Version

- **Active Branch:** `main`
- **Active Framework:** Custom Nuumi stack built on Dawn architecture.

### Known Traps (Local Skeletons)

**WARNING:** There is a dormant, raw directory sitting locally (`Nuumipet V1/` and `_legacy_backup/`) that contains a stock Shopify "Skeleton" `hello-world` theme.
- **Do not track these.** They are explicitly included in `.gitignore`.
- If they are accidentally committed, the Shopify integration will panic and deploy a blank HTML `Hello World` skeleton instead of the Nuumi architecture. Always verify `git status` before a `git add .` to ensure nothing from these nested raw folders sneaks in.

## Local workflow notes

- Custom Nuumi work should preserve Shopify section/block editability.
- `config/settings_data.json` is intentionally tracked and must stay valid Shopify JSON so color schemes and configurations cleanly deploy via the git sync.
- Use targeted git adds (e.g. `git add assets/nuumi-home.css`) instead of aggressive blanket stages when possible.

## Reference docs

- `brief.md`
- `docs/workflow-guide.md`
- `docs/reference-map.md`
- `docs/product-data.md`
- `release-notes.md`
