# Nuumipet Storefront Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Dawn-based Nuumipet Shopify theme with a custom homepage and one reusable, high-converting product page system that the client can edit in Shopify Theme Editor.

**Architecture:** Start from a clean Dawn theme and add a small set of Nuumipet-specific sections, snippets, assets, and templates rather than over-customizing Dawn core files everywhere. Use section settings, blocks, and product metafields to keep content editable while preserving a consistent premium design system across homepage and PDP surfaces.

**Tech Stack:** Shopify Dawn, Liquid, JSON templates, CSS, vanilla JavaScript, Shopify CLI, Shopify Theme Editor, GitHub.

---

## File Structure Map

### New theme files expected

- Create: `layout/theme.liquid`
- Create: `templates/index.json`
- Create: `templates/product.json`
- Create: `templates/page.json`
- Create: `sections/nuumi-home-hero.liquid`
- Create: `sections/nuumi-trust-strip.liquid`
- Create: `sections/nuumi-featured-products.liquid`
- Create: `sections/nuumi-expert-spotlight.liquid`
- Create: `sections/nuumi-benefits-story.liquid`
- Create: `sections/nuumi-proof-grid.liquid`
- Create: `sections/nuumi-faq.liquid`
- Create: `sections/nuumi-product-hero.liquid`
- Create: `sections/nuumi-sticky-atc.liquid`
- Create: `sections/nuumi-product-story.liquid`
- Create: `sections/nuumi-product-benefits.liquid`
- Create: `sections/nuumi-product-proof.liquid`
- Create: `sections/nuumi-risk-free.liquid`
- Create: `snippets/nuumi-icons.liquid`
- Create: `snippets/nuumi-rating-stars.liquid`
- Create: `snippets/nuumi-badge-list.liquid`
- Create: `assets/nuumi-base.css`
- Create: `assets/nuumi-home.css`
- Create: `assets/nuumi-product.css`
- Create: `assets/nuumi-home.js`
- Create: `assets/nuumi-product.js`
- Create: `config/settings_schema.json`
- Create: `config/settings_data.json.example`
- Create: `locales/en.default.json`
- Create: `README.md`

### Product data and content support

- Create: `docs/content-model.md`
- Create: `docs/reference-map.md`

### Metafields to define in Shopify admin

- Product metafields for:
  - subtitle
  - bullet list
  - trust note
  - expert quote
  - ingredients or key features
  - FAQ source data
  - badge text

### Reference files to inspect during implementation

- Read: `D:/antigravity/Projects/Nuumipet/brief.md`
- Read: `D:/antigravity/Projects/Nuumipet/design-ideas-study/Initial loom transcript.txt`
- Read: `D:/antigravity/Projects/amanotte/sections/velo-product-hero.liquid`
- Read: `D:/antigravity/Projects/amanotte/sections/velo-sticky-atc.liquid`
- Read: `D:/antigravity/Projects/amanotte/sections/velo-trust-strip.liquid`

---

## Chunk 1: Theme Foundation

### Task 1: Initialize Dawn and project scaffolding

**Files:**
- Create: `README.md`
- Create: `docs/content-model.md`
- Create: `docs/reference-map.md`
- Modify: `config/settings_schema.json`
- Create: `config/settings_data.json.example`

- [ ] **Step 1: Initialize the theme from Dawn**

Run: `shopify theme init`

- [ ] **Step 2: Verify the base theme files exist**

Run: `shopify theme check`
Expected: theme structure exists and check completes without fatal errors.

- [ ] **Step 3: Add project documentation files**

Write:
- `README.md` with local setup, branch workflow, and theme push rules
- `docs/content-model.md` with editable content fields
- `docs/reference-map.md` mapping each saved inspiration file to intended Nuumipet sections

- [ ] **Step 4: Add Nuumipet global settings**

Modify `config/settings_schema.json` to include:
- brand color controls
- type scale choices
- CTA style controls
- trust color scheme choices
- spacing tokens used by Nuumipet sections

- [ ] **Step 5: Add an example settings data file for safe onboarding**

Create `config/settings_data.json.example` with documented placeholders only.

- [ ] **Step 6: Run theme validation again**

Run: `shopify theme check`
Expected: PASS or only known Dawn warnings with no blocking schema issues.

- [ ] **Step 7: Commit foundation docs and settings**

```bash
git add README.md docs/content-model.md docs/reference-map.md config/settings_schema.json config/settings_data.json.example
git commit -m "docs: add Nuumipet storefront foundation"
```

### Task 2: Establish Nuumipet design system assets

**Files:**
- Create: `assets/nuumi-base.css`
- Create: `snippets/nuumi-icons.liquid`
- Create: `snippets/nuumi-rating-stars.liquid`
- Create: `snippets/nuumi-badge-list.liquid`
- Modify: `layout/theme.liquid`

- [ ] **Step 1: Write the failing theme integration check**

Run: `shopify theme check`
Expected: current theme has no Nuumipet assets/snippets yet.

- [ ] **Step 2: Create the base CSS file**

Include:
- blue-tinted neutral palette tokens
- fluid spacing tokens
- typography variables
- button, badge, trust-chip, and section rhythm rules

- [ ] **Step 3: Create reusable snippets**

Add:
- `snippets/nuumi-icons.liquid`
- `snippets/nuumi-rating-stars.liquid`
- `snippets/nuumi-badge-list.liquid`

- [ ] **Step 4: Load the base design system in the theme layout**

Modify `layout/theme.liquid` to load `nuumi-base.css` and any required global assets.

- [ ] **Step 5: Run theme check**

Run: `shopify theme check`
Expected: PASS with no missing asset or snippet references.

- [ ] **Step 6: Commit the design system base**

```bash
git add layout/theme.liquid assets/nuumi-base.css snippets/nuumi-icons.liquid snippets/nuumi-rating-stars.liquid snippets/nuumi-badge-list.liquid
git commit -m "feat: add Nuumipet design system foundation"
```

---

## Chunk 2: Homepage System

### Task 3: Build the homepage hero and trust layer

**Files:**
- Create: `sections/nuumi-home-hero.liquid`
- Create: `sections/nuumi-trust-strip.liquid`
- Create: `assets/nuumi-home.css`
- Create: `assets/nuumi-home.js`
- Modify: `templates/index.json`

- [ ] **Step 1: Write the failing homepage structure target**

Define desired `templates/index.json` order with placeholder section types.

- [ ] **Step 2: Create `nuumi-home-hero` section**

Add settings for:
- eyebrow
- heading
- subheading
- CTA text/link
- secondary CTA
- hero image
- proof chips
- product callout
- mobile image behavior

- [ ] **Step 3: Create `nuumi-trust-strip` section**

Support repeatable trust blocks with icon, title, and short subtitle.

- [ ] **Step 4: Add homepage-specific CSS/JS**

Implement hero layout, trust strip behavior, and mobile spacing behavior.

- [ ] **Step 5: Wire the sections into `templates/index.json`**

Place hero first and trust strip second.

- [ ] **Step 6: Run local preview and inspect the homepage**

Run: `shopify theme dev --store <store-name>`
Expected: homepage renders with the new section order and editable controls visible in Theme Editor.

- [ ] **Step 7: Commit hero and trust layer**

```bash
git add sections/nuumi-home-hero.liquid sections/nuumi-trust-strip.liquid assets/nuumi-home.css assets/nuumi-home.js templates/index.json
git commit -m "feat: add homepage hero and trust sections"
```

### Task 4: Build the product showcase and authority content sections

**Files:**
- Create: `sections/nuumi-featured-products.liquid`
- Create: `sections/nuumi-expert-spotlight.liquid`
- Create: `sections/nuumi-benefits-story.liquid`
- Create: `sections/nuumi-proof-grid.liquid`
- Create: `sections/nuumi-faq.liquid`
- Modify: `templates/index.json`

- [ ] **Step 1: Create the featured products section**

Support manual product selection for all five launch products, plus card badge and CTA controls.

- [ ] **Step 2: Create the expert spotlight section**

Add settings for expert image, name, role, quote, supporting bullets, and CTA.

- [ ] **Step 3: Create the benefits and proof sections**

Add:
- `nuumi-benefits-story`
- `nuumi-proof-grid`
- `nuumi-faq`

- [ ] **Step 4: Extend the homepage template order**

Arrange sections in final homepage flow:
- hero
- trust strip
- featured products
- expert spotlight
- benefits story
- proof grid
- faq

- [ ] **Step 5: Verify Theme Editor editability**

Check that merchants can add, remove, and reorder intended blocks without breaking the layout.

- [ ] **Step 6: Run theme validation**

Run: `shopify theme check`
Expected: PASS with no invalid schema or missing references.

- [ ] **Step 7: Commit the homepage system**

```bash
git add sections/nuumi-featured-products.liquid sections/nuumi-expert-spotlight.liquid sections/nuumi-benefits-story.liquid sections/nuumi-proof-grid.liquid sections/nuumi-faq.liquid templates/index.json
git commit -m "feat: build Nuumipet homepage section system"
```

---

## Chunk 3: Product Page System

### Task 5: Build the reusable product hero

**Files:**
- Create: `sections/nuumi-product-hero.liquid`
- Create: `assets/nuumi-product.css`
- Create: `assets/nuumi-product.js`
- Modify: `templates/product.json`

- [ ] **Step 1: Inspect the architectural references before implementation**

Read:
- `D:/antigravity/Projects/amanotte/sections/velo-product-hero.liquid`
- `D:/antigravity/Projects/amanotte/sections/velo-sticky-atc.liquid`

- [ ] **Step 2: Create the product hero section**

Support:
- media gallery
- title and subtitle
- review stars
- bullet list
- trust note
- quantity option presentation for `1`, `3`, `6`
- one-time vs subscribe-and-save UI shell
- add-to-cart CTA

- [ ] **Step 3: Connect product-specific content to dynamic sources**

Use section settings and product metafields for subtitle, bullets, trust note, and badges.

- [ ] **Step 4: Add PDP CSS and JS**

Implement responsive gallery behavior, active state logic, and mobile stacking.

- [ ] **Step 5: Insert the hero into `templates/product.json`**

Set the new product hero as the first product section.

- [ ] **Step 6: Verify on desktop and mobile preview**

Run: `shopify theme dev --store <store-name>`
Expected: hero matches the approved structure and remains usable on mobile.

- [ ] **Step 7: Commit the PDP hero**

```bash
git add sections/nuumi-product-hero.liquid assets/nuumi-product.css assets/nuumi-product.js templates/product.json
git commit -m "feat: add Nuumipet product hero"
```

### Task 6: Build the sticky ATC and lower-page trust sections

**Files:**
- Create: `sections/nuumi-sticky-atc.liquid`
- Create: `sections/nuumi-product-story.liquid`
- Create: `sections/nuumi-product-benefits.liquid`
- Create: `sections/nuumi-product-proof.liquid`
- Create: `sections/nuumi-risk-free.liquid`
- Modify: `templates/product.json`

- [ ] **Step 1: Create the sticky mobile ATC section**

Follow the reference architecture but adapt naming, styling, and copy structure for Nuumipet.

- [ ] **Step 2: Create the lower PDP storytelling sections**

Add sections for:
- story/problem-solution
- benefits/features
- proof/testimonials/expert
- guarantee or risk-free policy

- [ ] **Step 3: Extend `templates/product.json`**

Add the sections after the product hero in a clean purchase-supporting order.

- [ ] **Step 4: Verify Theme Editor controls**

Check block limits, reordering behavior, and dynamic source compatibility.

- [ ] **Step 5: Validate mobile sticky behavior manually**

Confirm the sticky ATC appears at the correct scroll threshold and does not obscure critical content.

- [ ] **Step 6: Run theme check**

Run: `shopify theme check`
Expected: PASS with no invalid schema or reference issues.

- [ ] **Step 7: Commit the PDP section system**

```bash
git add sections/nuumi-sticky-atc.liquid sections/nuumi-product-story.liquid sections/nuumi-product-benefits.liquid sections/nuumi-product-proof.liquid sections/nuumi-risk-free.liquid templates/product.json
git commit -m "feat: add reusable Nuumipet PDP sections"
```

---

## Chunk 4: Final Assembly, Content Modeling, and Verification

### Task 7: Prepare product content model and first-product configuration

**Files:**
- Modify: `docs/content-model.md`
- Modify: `templates/product.json`
- Modify: `templates/index.json`
- Modify: `locales/en.default.json`

- [ ] **Step 1: Document all merchant-editable fields**

Add exact mapping for homepage and PDP settings, blocks, and metafields in `docs/content-model.md`.

- [ ] **Step 2: Configure the first product page template**

Set defaults for the first product so the client can review a near-final structure quickly.

- [ ] **Step 3: Configure homepage defaults**

Set defaults to feature all five products and the primary trust sections.

- [ ] **Step 4: Add any missing merchant-facing labels to locale files**

Keep editor labels readable and consistent.

- [ ] **Step 5: Verify all defaults in local preview**

Expected: a coherent homepage and one first-product PDP are reviewable without manual code edits.

- [ ] **Step 6: Commit content modeling changes**

```bash
git add docs/content-model.md templates/index.json templates/product.json locales/en.default.json
git commit -m "chore: configure Nuumipet review defaults"
```

### Task 8: Run full verification and prepare handoff

**Files:**
- Modify: `README.md`
- Modify: `docs/reference-map.md`

- [ ] **Step 1: Run theme validation**

Run: `shopify theme check`
Expected: PASS.

- [ ] **Step 2: Run local theme preview**

Run: `shopify theme dev --store <store-name>`
Expected: homepage and first PDP render without blocking Liquid or JS issues.

- [ ] **Step 3: Perform manual QA on desktop and mobile**

Verify:
- hero hierarchy
- trust strip readability
- product card spacing
- PDP gallery behavior
- quantity selector clarity
- sticky ATC behavior
- FAQ accordion behavior

- [ ] **Step 4: Update project onboarding docs**

Document the local workflow, theme push workflow, and the rule to avoid committing live merchant settings.

- [ ] **Step 5: Prepare GitHub handoff notes**

Add branch strategy and deployment notes to `README.md`.

- [ ] **Step 6: Commit final verification updates**

```bash
git add README.md docs/reference-map.md
git commit -m "docs: finalize Nuumipet storefront handoff notes"
```

---

## Notes for the Implementer

- Use `nuumi-` as the custom prefix for sections, snippets, assets, and JS hooks.
- Reuse Amanotte only for architectural ideas, not visual cloning.
- Keep content editable in Theme Editor wherever a merchant would reasonably expect control.
- Prefer dynamic sources and metafields over hardcoded product-specific copy.
- Do not commit `config/settings_data.json` from a live store.
- Keep Phase 1 focused on homepage plus one reusable PDP; do not expand into collections, app flows, or extra templates unless the brief changes.

Plan complete and saved to `docs/superpowers/plans/2026-03-15-nuumipet-storefront.md`. Ready to execute?
