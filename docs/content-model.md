# Nuumipet Content Model

## Theme Editor Principle

Merchants should control content, imagery, visible proof, and section ordering where appropriate. Developers should retain control over markup structure, interaction behavior, accessibility patterns, and the shared Nuumipet visual system.

## Homepage Section Map

### `sections/nuumi-home-hero.liquid`
- Settings: `eyebrow`, `heading`, `subheading`, `button_label`, `button_link`, `secondary_button_label`, `secondary_button_link`, `image`, `callout_label`, `callout_title`, `callout_text`, `bg_color`
- Blocks: `badge` with `icon`, `custom_icon`, `text`
- Purpose: first-screen authority, primary CTAs, high-trust proof chips

### `sections/nuumi-trust-strip.liquid`
- Settings: `bg_color`, `text_color`, `marquee_speed`
- Blocks: `trust` with `icon`, `custom_icon`, `title`
- Purpose: compact repeated trust framing immediately below hero

### `sections/nuumi-featured-products.liquid`
- Settings: `eyebrow`, `heading`, `intro`, `button_label`, `button_link`
- Blocks: `product_card` with `product`, `badge_text`, `summary`, `rating_label`, `review_count`, `button_label`, `button_link`, `placeholder_title`, `placeholder_price`
- Purpose: feature all five launch products with merchant-editable merchandising copy

### `sections/nuumi-expert-spotlight.liquid`
- Settings: `eyebrow`, `heading`, `body`, `image`, `quote`, `name`, `role`, `button_label`, `button_link`
- Blocks: `proof_point` with `icon`, `text`
- Purpose: expert-led trust and proof above mid-page

### `sections/nuumi-benefits-story.liquid`
- Settings: `eyebrow`, `heading`, `intro`, `image`
- Blocks: `benefit` with `icon`, `eyebrow`, `title`, `text`
- Purpose: explain brand/benefit story with modular cards

### `sections/nuumi-proof-grid.liquid`
- Settings: `eyebrow`, `heading`, `intro`
- Blocks: `proof_card` with `icon`, `eyebrow`, `title`, `text`, `image`
- Purpose: guarantees, proof, logistics, and trust assets

### `sections/nuumi-faq.liquid`
- Settings: `eyebrow`, `heading`, `intro`
- Blocks: `faq` with `question`, `answer`
- Purpose: pre-PDP objection handling on the homepage

## PDP Section Map

### `sections/nuumi-product-hero.liquid`
- Settings: `badge_1`, `badge_2`, `subtitle`, `description`, `trust_note`, `rating_label`, `review_count`, `bullet_1` to `bullet_4`, `purchase_heading`, `one_time_label`, `one_time_note`, `subscribe_label`, `subscribe_note`, `quantity_heading`, `qty_one_label`, `qty_one_note`, `qty_three_label`, `qty_three_note`, `qty_six_label`, `qty_six_note`, `footer_trust_1`, `footer_trust_2`
- Dynamic-source friendly fields: `subtitle`, `trust_note`, `bullet_1` to `bullet_4`, `badge_1`, `badge_2`
- Runtime behavior: gallery switching, quantity pack selection (`1`, `3`, `6`), one-time vs subscribe UI shell, variant button selection, add-to-cart form

### `sections/nuumi-sticky-atc.liquid`
- No merchant settings required in the current build
- Runtime behavior: mobile sticky CTA appears after the main buy box scrolls out of view and scrolls the customer back to the hero purchase form

### `sections/nuumi-product-story.liquid`
- Settings: `eyebrow`, `heading`, `body`, `image`
- Blocks: `story_card` with `eyebrow`, `title`, `text`
- Purpose: problem/solution storytelling immediately after the hero

### `sections/nuumi-product-benefits.liquid`
- Settings: `eyebrow`, `heading`, `intro`
- Blocks: `benefit` with `icon`, `eyebrow`, `title`, `text`
- Purpose: explain the product's main benefits in scannable cards

### `sections/nuumi-product-proof.liquid`
- Settings: `eyebrow`, `heading`, `intro`, `quote`, `expert_name`, `expert_role`, `image`, `check_1` to `check_3`
- Blocks: `proof_card` with `eyebrow`, `title`, `text`, `image`
- Purpose: expert endorsement plus modular proof assets

### `sections/nuumi-risk-free.liquid`
- Settings: `eyebrow`, `heading`, `intro`
- Blocks:
  - `risk_card` with `icon`, `eyebrow`, `title`, `text`
  - `faq` with `question`, `answer`
- Purpose: risk reversal, support clarity, and final practical questions

## Recommended Product Metafields

Use these metafields to connect real product-specific content as the catalog matures:

- `custom.subtitle`
- `custom.badge_text`
- `custom.trust_note`
- `custom.hero_bullets`
- `custom.expert_quote`
- `custom.ingredients_or_features`
- `custom.product_faq`

## Review Defaults in This Build

- `templates/index.json` now uses the full Nuumipet homepage order and placeholder-safe links for product cards
- `templates/product.json` now uses the custom Nuumipet PDP order instead of Dawn defaults
- The current PDP defaults are designed to make one first product reviewable quickly, even before final merchant copy and metafields are fully loaded
