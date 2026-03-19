---
phase: 02-homepage-sections
plan: 02-05
subsystem: homepage
tags: [benefits, faq, footer, conversion-finish]
requires: [02-04]
provides: [benefits-section, faq-section, branded-footer]
affects: [sections/nuumi-benefits-story.liquid, sections/nuumi-faq.liquid, sections/footer.liquid, assets/nuumi-home.css, templates/index.json]
tech-stack: [Liquid, CSS, Shopify JSON templates]
key-files: [sections/nuumi-benefits-story.liquid, sections/nuumi-faq.liquid, sections/footer.liquid, assets/nuumi-home.css, templates/index.json]
decisions:
  - use-editorial-benefits-cards: benefits section leans visual and narrative instead of generic icon rows
  - keep-faq-native: FAQ uses details/summary for accessibility and lower maintenance
metrics:
  duration: 20m
  completed_date: "2026-03-18"
---

# Phase 02 Plan 05: Benefits, FAQ, and Footer Summary

## Summary
Completed the homepage storytelling and closing conversion layer with a benefits section, an accessible FAQ, and a branded footer refinement. This turns the homepage into a more complete trust-first journey from hero to close.

## Key Changes

### 1. Benefits Story (`sections/nuumi-benefits-story.liquid`, `assets/nuumi-home.css`)
- Added a three-card editorial benefits section with imagery/icon fallbacks, eyebrow text, and supporting copy.
- Styled it to feel cleaner and more premium than a default feature grid.

### 2. FAQ (`sections/nuumi-faq.liquid`, `assets/nuumi-home.css`)
- Implemented a block-based FAQ section using native `details` and `summary` elements.
- Kept the visuals minimal and trust-oriented so the section feels calm rather than busy.

### 3. Footer + Homepage Assembly (`sections/footer.liquid`, `templates/index.json`)
- Refined the Dawn footer with Nuumi-specific styling, darker atmosphere, and a stronger newsletter prompt.
- Added the benefits story and FAQ sections into the homepage order so the flow now extends from awareness through reassurance and final signup.

## Deviations from Plan
- Footer work was implemented as a focused brand layer on top of Dawn's existing footer instead of a full custom rebuild. This preserves more Shopify compatibility while still achieving the requested Nuumi look.

## Self-Check: PASSED
- [x] `sections/nuumi-benefits-story.liquid` exists.
- [x] `sections/nuumi-faq.liquid` includes `<details>`.
- [x] `templates/index.json` includes `nuumi_benefits_story` and `nuumi_faq`.
- [x] Footer now loads `nuumi-home.css` and includes Nuumi-specific intro content.
