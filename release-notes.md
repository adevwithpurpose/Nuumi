# Nuumipet Release Notes

## 2026-03-18

### Homepage build complete

- Replaced generic Dawn homepage composition with a custom Nuumi homepage stack in `templates/index.json`
- Added custom homepage sections:
  - `sections/nuumi-announcement-bar.liquid`
  - `sections/nuumi-home-hero.liquid`
  - `sections/nuumi-trust-strip.liquid`
  - `sections/nuumi-proof-grid.liquid`
  - `sections/nuumi-featured-products.liquid`
  - `sections/nuumi-expert-spotlight.liquid`
  - `sections/nuumi-benefits-story.liquid`
  - `sections/nuumi-faq.liquid`
- Added homepage-specific styling in `assets/nuumi-home.css`

### PDP system complete

- Replaced the default Dawn product flow with a custom Nuumi PDP stack in `templates/product.json`
- Added custom PDP sections:
  - `sections/nuumi-main-product.liquid`
  - `sections/nuumi-pdp-trust-strip.liquid`
  - `sections/nuumi-pdp-guarantee.liquid`
  - `sections/nuumi-pdp-story.liquid`
  - `sections/nuumi-pdp-comparison.liquid`
  - `sections/nuumi-pdp-expert.liquid`
  - `sections/nuumi-pdp-faq.liquid`
- Added PDP-specific styling in `assets/nuumi-pdp.css`
- Fixed early PDP integration issues in `sections/nuumi-main-product.liquid` around `variant_images` setup and icon snippet references

### EnerCanis rollout updates

- Added and iterated the custom EnerCanis PDP template in `templates/product.enercanis.json`
- Added the EnerCanis hero CRO updates: subscription toggle, bundle savings, dynamic pricing, and compact trust row
- Added the EnerCanis how-to-use section and restored the ingredient/efficacy section in the live template
- Built and refined the EnerCanis expert section with merchant-editable Instagram link support for Dr. Sara Ranocchi
- Added supporting PDP polish across agitation, timeline, transparency, social proof, FAQ, and related styling

### Shared design system work

- Added shared brand styling in `assets/nuumi-base.css`
- Standardized icon usage through `snippets/nuumi-icons.liquid`
- Added rating snippet support via `snippets/nuumi-rating-stars.liquid`

### Merchant-enablement progress

- Added global Nuumi brand color settings in `config/settings_schema.json`
- Added matching defaults in `config/settings_data.json`
- Wired Nuumi color tokens through `layout/theme.liquid`
- Added global Nuumi announcement settings and updated `sections/nuumi-announcement-bar.liquid` to use them by default
- Removed leftover default Dawn filler sections from `templates/product.json` so the PDP editor better reflects the actual Nuumi build

### Planning and documentation sync

- Updated `.planning/ROADMAP.md` to reflect completed homepage and PDP phases
- Updated `.planning/REQUIREMENTS.md` and `.planning/STATE.md` to match the implemented codebase
- Replaced the stock Dawn `README.md` with Nuumipet-specific project documentation
- Updated `docs/reference-map.md` to point at the real custom homepage and PDP files

### Remaining work

- Live Shopify/theme-editor QA once auth is available
- Final merchant-enablement pass for any additional global controls
- Shopify CLI and GitHub/store integration verification
