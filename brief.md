# Nuumipet Brief

## Project Summary

Nuumipet is a new Shopify storefront for a lean pet-health e-commerce brand. The client wants a premium, clean, high-converting store that feels trustworthy and modern, with all key content editable in Shopify Theme Editor and a local-development-to-GitHub workflow.

The immediate goal is to build:
- a custom homepage
- one approved product detail page system for the first product
- a reusable PDP framework that can later be duplicated for the remaining products

## Approved Direction

- Base theme: Shopify `Dawn`, heavily customized
- Design direction: PetLab-style authority and trust, but cleaner, calmer, and more premium
- Brand feel: blue-led, clinical-but-friendly, mobile-first, with stronger visual polish than the source references
- Store model: lean storefront with only five products, all visible from the homepage

## Client Requirements

### Homepage
- Build a homepage from scratch; current store is placeholder-only
- Use `https://thepetlabco.com/` as general inspiration for authority, hero energy, expert section, and FAQ structure
- Do not copy category-heavy architecture because Nuumipet will launch with only five products
- Make all five products visible on the homepage
- Include expert-led trust content and proof-building sections
- Keep the experience lean and easy to scan

### Product Pages
- Build one product page first and use it as the approval baseline for the rest
- Above the fold should be similar to:
  - `https://funnels-build.thisisatestsiteonly.com/1efef29f-0d50-4911-897e-b86a970a2d4a/pdp-ec-nv3`
- Remaining PDP sections should visually lean toward:
  - `https://funnels-build.thisisatestsiteonly.com/b7ae061e-d35b-43ad-8ff5-200b7c38d448/pdp-byebark`
- Reuse one consistent above-the-fold format across physical products
- Expected above-the-fold content:
  - gallery on the left
  - headline and subheadline
  - bullet points
  - quantity selection for `1`, `3`, `6`
  - one-time purchase and subscribe-and-save choices
- One product is digital and will need a lighter variation later

### Editing and Workflow
- Theme must support local development first, then GitHub sync to the store
- Key homepage and PDP content must remain editable in Shopify Theme Editor
- The client should be able to update settings, copy, imagery, badges, FAQs, and merchandising without code changes

## Reference Material Saved Locally

All initial references are stored in `D:/antigravity/Projects/Nuumipet/design-ideas-study/`:

- `Petlab_homepage_inpiration.png`
- `Product_above_fold_inspiration.png`
- `Color_and_product_page_vibe_Inspiration.png`
- `Initial loom transcript.txt`

## Research Findings Driving the Direction

### Visual/UI Inspiration
- The strongest direction is not a direct PetLab clone; it is PetLab authority plus cleaner premium restraint
- Better external cues come from premium subscription-first pet wellness brands such as Native Pet and Arterra-style PDP clarity
- Stronger design should avoid generic card-heavy layouts and instead use better spacing, cleaner hierarchy, and more deliberate trust framing


## Recommended Experience Framework

### Homepage Framework
- announcement or offer bar
- authority-first hero
- trust strip
- all-products showcase
- expert section
- product or brand benefits section
- proof/trust badges section
- FAQ
- footer or email capture

### First PDP Framework
- above-the-fold conversion section using the approved reference pattern
- mobile sticky CTA
- trust or guarantee strip
- benefit storytelling sections
- expert endorsement or science-backed section
- product comparison or proof section where relevant
- FAQ
- repeated trust cues near purchase moments

## Theme Principles

- Keep content editable; keep structure controlled
- Use sections for page-level units and blocks for repeatable content items
- Favor product metafields and dynamic sources for product-specific proof, bullets, ingredients, and FAQs
- Do not rely on `config/settings_data.json` for durable code changes
- Stay mobile-first throughout

## Open Inputs Still Expected From Client

- final Nuumipet logo
- finalized product copy and product-specific information
- any expert assets, certifications, badges, or guarantee language
- final brand email and support details

## Current Progress (Updated Mar 16, 2026)

- **Homepage Design & Build:** Restructured `index.json` to feature the new, premium PetLab-inspired flow, replacing generic Dawn components with bespoke `nuumi-*` sections (Hero, Featured Products, Expert Spotlight, Proof Grid, etc.).
- **Vibe Evolution:** Integrated deeper clinical blues, soft pinks, and aggressive gold CTAs with custom hover micro-animations into `nuumi-base.css` and `nuumi-home.css`.
- **Theme Configuration:** Manually mapped five brand-new color schemes into both `settings_schema.json` and `settings_data.json` to correctly render the UI and eliminate Shopify preview errors.
- **Data Scraping & Seeding:** Scraped reference URLs using `crawl4ai` and extracted product data for 4 main products, drafting a 5th bundle item. This dummy data is now safely stored in `docs/product-data.md` and currently populates the homepage placeholders.

## Phase 1 Deliverables

- [x] project brief
- [x] implementation plan
- [x] homepage design/build framework
- [ ] first reusable PDP design/build framework
- [ ] editable Dawn-based theme architecture for later rollout across remaining products
