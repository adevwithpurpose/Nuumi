---
phase: 02-homepage-sections
plan: 02-02
subsystem: homepage
tags: [hero, announcement-bar, liquid, blocks]
requires: [02-01]
provides: [hero-section, announcement-bar]
affects: [templates/index.json]
tech-stack: [Liquid, CSS, Shopify JSON templates]
key-files: [sections/nuumi-announcement-bar.liquid, sections/nuumi-home-hero.liquid, assets/nuumi-home.css, templates/index.json]
decisions:
  - use-blocks-for-hero-bullets: Refactored hero to use blocks for bullets instead of fixed settings for better merchant flexibility.
  - blue-led-announcement: Used #0A1B32 as the default brand blue for the announcement bar to establish immediate trust.
metrics:
  duration: 15m
  completed_date: "2026-03-18"
---

# Phase 02 Plan 02: Hero and Announcement Sections Summary

## Summary
Implemented the brand-foundational Hero and Announcement sections. The Hero section was refactored for authority-first centered layout with block-based merchant editability for value propositions. The Announcement bar provides a blue-led conversion point at the top of every page.

## Key Changes

### 1. Announcement Bar (`sections/nuumi-announcement-bar.liquid`)
- Created a new section with a blue-led background (#0A1B32).
- Configurable text and link.
- Center-aligned typography using `nuumi-base.css` tokens.

### 2. Authority-First Hero (`sections/nuumi-home-hero.liquid`, `assets/nuumi-home.css`)
- Refactored the hero section to be centered on both mobile and desktop.
- Converted bullet points to a block-based structure (`bullet` blocks) for easier merchant editing.
- Applied the premium gold CTA styling (`.nuumi-button--gold`) with a shine effect.
- Optimized performance by setting `loading: 'eager'` on the primary hero image.

### 3. Homepage Integration (`templates/index.json`)
- Integrated the new sections into the homepage template.
- Positioned the announcement bar at the very top.
- Replaced the default `image_banner` with the new `nuumi_home_hero`.
- Configured default placeholder content focused on "Authority and trust".

## Deviations from Plan
- **Refactor vs Create:** The plan mentioned "Refactor `sections/nuumi-home-hero.liquid`", but the file did not exist in the current working state (or was not detected correctly). It was created/re-implemented to meet all requirements.

## Self-Check: PASSED
- [x] Announcement bar created and styled.
- [x] Hero section refactored for centered layout and block-based bullets.
- [x] `index.json` updated with correct section types and order.
- [x] Gold CTA button applied.
