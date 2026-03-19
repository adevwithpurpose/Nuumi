---
phase: 02-homepage-sections
plan: 02-04
subsystem: homepage
tags: [featured-products, expert-spotlight, editorial, product-grid]
requires: [02-03]
provides: [featured-products-section, expert-spotlight-section]
affects: [sections/nuumi-featured-products.liquid, sections/nuumi-expert-spotlight.liquid, assets/nuumi-home.css, templates/index.json]
tech-stack: [Liquid, CSS, Shopify JSON templates]
key-files: [sections/nuumi-featured-products.liquid, sections/nuumi-expert-spotlight.liquid, assets/nuumi-home.css, templates/index.json]
decisions:
  - keep-five-products-visible: implemented a five-card launch grid directly in the homepage flow
  - use-editorial-authority-panel: expert section uses a dark, quote-led split layout instead of a generic testimonial card
metrics:
  duration: 18m
  completed_date: "2026-03-18"
---

# Phase 02 Plan 04: Featured Products and Expert Spotlight Summary

## Summary
Implemented the homepage product showcase and the expert-led authority section. The product grid keeps all five launch products visible with stronger merchandising and trust cues, while the expert spotlight adds a more premium editorial layer that reinforces clinical credibility.

## Key Changes

### 1. Product Showcase (`sections/nuumi-featured-products.liquid`, `assets/nuumi-home.css`)
- Created a block-based featured products section that supports five merchant-editable product cards.
- Added title/price fallback behavior so cards can use Shopify product data when available while still supporting placeholder overrides during setup.
- Rendered `nuumi-rating-stars` inside each card to add lightweight social proof.
- Styled the grid as a polished launch collection rather than a generic collection shelf.

### 2. Expert Spotlight (`sections/nuumi-expert-spotlight.liquid`, `assets/nuumi-home.css`)
- Implemented a split editorial section with image, heading, quote, name, role, and supporting proof points.
- Used a dark navy background with gold-accent details to make the authority section feel more deliberate and premium.
- Kept proof points block-based so the merchant can update supporting claims in the Theme Editor.

### 3. Homepage Integration (`templates/index.json`)
- Added `nuumi_featured_products` and `nuumi_expert_spotlight` to the homepage flow.
- Seeded placeholder content for all five planned products and a placeholder expert profile for Dr. Sarah Jenkins.
- Positioned both sections after the proof grid to maintain a trust-first narrative down the page.

## Deviations from Plan
- Used placeholder override content rather than real product references because the project is still in placeholder mode pending final merchant assets and product data hookup.

## Self-Check: PASSED
- [x] `sections/nuumi-featured-products.liquid` exists and uses `product_card` blocks.
- [x] `sections/nuumi-featured-products.liquid` renders `nuumi-rating-stars`.
- [x] `sections/nuumi-expert-spotlight.liquid` exists.
- [x] `templates/index.json` includes `nuumi_expert_spotlight` and `nuumi_featured_products`.
