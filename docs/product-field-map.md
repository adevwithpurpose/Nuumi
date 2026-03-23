# Nuumipet Product Field Map

This file defines the local source-of-truth schema used before product data is pushed into Shopify.

## Required Local Fields Per Product

### Identity

- `product_title`
- `handle`
- `source_url`
- `source_capture_date`
- `extraction_status`
- `review_status`
- `product_category`
- `vendor`
- `template_target`

### Commerce Core

- `price`
- `compare_at_price`
- `shopify_status`
- `tags`
- `seo_title`
- `seo_description`

### Hero And Purchase Flow

- `hero_eyebrow`
- `hero_badge_primary`
- `hero_badge_secondary`
- `hero_subtitle`
- `hero_description`
- `hero_bullets`
- `pack_heading`
- `pack_options`
- `cta_label`
- `cta_note`
- `shipping_note`
- `guarantee_note`
- `payment_note`

### Trust And Storytelling

- `trust_strip_items`
- `feature_grid_heading`
- `feature_grid_intro`
- `feature_grid_items`
- `story_heading`
- `story_intro`
- `story_benefits`
- `comparison_heading`
- `comparison_intro`
- `comparison_features`
- `guarantee_heading`
- `guarantee_body`

### Authority And Objection Handling

- `expert_badge`
- `expert_quote`
- `expert_name`
- `expert_credentials`
- `faq_items`

### Media And Operations

- `media_inventory`
- `alt_text_requirements`
- `required_metafields`
- `app_placeholders_later`
- `compliance_review_notes`
- `missing_information`

## Mapping Guidance

- Product-specific copy belongs in local product docs first, then gets mapped into template JSON settings or metafields.
- Shared layout decisions belong in shared Liquid sections and CSS, not in product records.
- Review and subscription features must be represented only as future placeholders, not implemented logic.

## Recommended Metafields

Use product metafields for structured product-specific content where it reduces template duplication:

- `custom.subtitle`
- `custom.badge_primary`
- `custom.badge_secondary`
- `custom.hero_bullets`
- `custom.trust_strip_items`
- `custom.feature_grid_items`
- `custom.story_benefits`
- `custom.comparison_features`
- `custom.expert_quote`
- `custom.product_faq`
- `custom.guarantee_copy`

## Binary Acceptance Targets

- Each product doc contains every required field heading from this file.
- Each structured list field is present even if values are marked provisional.
- Compliance-sensitive claims are isolated under `compliance_review_notes` and not silently merged into approved copy.
