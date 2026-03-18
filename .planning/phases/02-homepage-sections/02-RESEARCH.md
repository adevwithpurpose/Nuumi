# Phase 2: Homepage Sections - Research

**Researched:** 2026-03-18
**Domain:** Shopify Dawn Theme, Liquid, CSS, Modular Section Architecture
**Confidence:** HIGH

## Summary

The Phase 2: Homepage Sections research focuses on building a premium, authority-first storefront using Shopify's Dawn theme as a foundation. The goal is to maximize merchant editability through the Shopify Theme Editor while maintaining a PetLab-style "clinical-but-friendly" aesthetic.

**Primary recommendation:** Use a **Block-Based Modular Architecture** for all repeatable elements (Hero bullets, trust icons, product cards, FAQ rows, expert proof points). This ensures that non-technical merchants can easily add, remove, and reorder content without touching code. Standardize on the "Nuumi-Branded Snippets" (`nuumi-icons`, `nuumi-badge-list`, `nuumi-rating-stars`) for visual consistency and high-quality iconography across all sections.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **Hero Section:** Centered text with aggressive gold CTA button. Authority-first hero image.
- **Announcement Bar:** Standard height, blue-led, single-line offer text.
- **Trust Strip:** Clean, multi-column row with small icons/badges below the hero.
- **Proof Grid:** Grid layout of badges, certifications, or trust cues (guarantees).
- **Expert Spotlight:** Image, credentials, and powerful quote/endorsement.
- **Showcase:** Grid display of all five core products (name, price, primary benefit).
- **Benefits Section:** Storytelling section with clean spacing and high-quality imagery.
- **FAQ:** Accordion-style for authority and trust building.
- **Footer/Email Capture:** Simple, clean with prominent email signup.

### OpenCode's Discretion
- Choice of specific icon library (SVG-based recommended).
- Micro-animations and hover effects (e.g., gold CTA hover states).
- Precise padding and margin settings for section layout.

### Deferred Ideas (OUT OF SCOPE)
- Product Detail Page (PDP) sections — Phase 3.
- Category-heavy architecture — Out of Scope.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| HOME-01 | Authority-first hero section | `nuumi-home-hero.liquid` (needs bullet-to-block refinement) |
| HOME-02 | Trust strip section | `nuumi-trust-strip.liquid` (uses marquee effect for "live" feel) |
| HOME-03 | All-products showcase section | `nuumi-featured-products.liquid` (block-based product cards) |
| HOME-04 | Expert section | `nuumi-expert-spotlight.liquid` (editorial layout with quotes) |
| HOME-05 | Product or brand benefits section | `nuumi-benefits-story.liquid` (3-column storytelling layout) |
| HOME-06 | Proof/trust badges section | `nuumi-proof-grid.liquid` (grid of badges/guarantees) |
| HOME-07 | FAQ section | `nuumi-faq.liquid` (accordion-style using Dawn components) |
| HOME-08 | Footer or email capture section | Use `footer.liquid` with custom Nuumi CSS overrides |
| HOME-09 | Announcement or offer bar | Use `announcement-bar.liquid` with Nuumi "blue-led" styles |
</phase_requirements>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Shopify Liquid | 2.0 | Theme Templating | Standard Shopify OS 2.0 language. |
| Dawn Theme | 13.0.0+ | Theme Foundation | The "blessed" Shopify base for performant, clean themes. |
| Nuumi Icons | Snippet | Iconography | Custom SVGs for Pet health (paw, science, shield). |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|--------------|
| `nuumi-badge-list` | Snippet | trust badges | Repeatable icons with small labels. |
| `nuumi-rating-stars`| Snippet | star ratings | All product and trust cue sections. |

**Installation:**
N/A (All snippets and CSS files already integrated in the theme structure).

## Architecture Patterns

### Recommended Project Structure
```
sections/
├── nuumi-home-hero.liquid         # Hero with block-based bullets
├── nuumi-trust-strip.liquid        # Marquee trust icons
├── nuumi-featured-products.liquid # Product showcase grid
├── nuumi-expert-spotlight.liquid  # Editorial expert section
├── nuumi-benefits-story.liquid    # Brand storytelling
├── nuumi-proof-grid.liquid        # Certification/Guarantee grid
└── nuumi-faq.liquid               # Accordion FAQ
snippets/
├── nuumi-icons.liquid             # Centralized SVG registry
├── nuumi-badge-list.liquid        # Modular badge component
└── nuumi-rating-stars.liquid      # Reusable star rating component
assets/
├── nuumi-base.css                 # Brand tokens (Font Trio, Colors)
└── nuumi-home.css                 # Homepage section styles
```

### Pattern 1: Block-Based Content Loops
**What:** Use the `blocks` schema to allow merchants to manage repeated content.
**When to use:** Bullets, badges, FAQ items, product grids.
**Example (Liquid Schema):**
```liquid
"blocks": [
  {
    "type": "bullet",
    "name": "Bullet Point",
    "settings": [
      { "type": "text", "id": "text", "label": "Text", "default": "Vet-Informed Formulas" }
    ]
  }
]
```

### Anti-Patterns to Avoid
- **Hardcoding counts:** Never use `bullet_1`, `bullet_2` settings in the schema. Use `for block in section.blocks` instead.
- **In-Section Styles for Globals:** Don't redefine colors/fonts in every section. Use `nuumi-base.css` CSS variables (tokens).

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Accordions | Custom JS | `<details>/<summary>` | Native browser support, better for SEO and accessibility. |
| Image Sizing | Static `src` | `image_tag` + `widths` | Dawn handles lazy-loading and responsive sizes automatically. |
| LCP Delay | Lazy Loading | `fetchpriority: high` | The Hero image MUST be eager-loaded for high performance. |

**Key insight:** Customization should focus on **CSS and Layout**, not on rebuilding core Shopify Theme engine functionalities.

## Common Pitfalls

### Pitfall 1: Breaking the Live Editor
**What goes wrong:** Blocks don't highlight when clicked in the theme editor.
**How to avoid:** Always include `{{ block.shopify_attributes }}` on the outer element of every block loop.

### Pitfall 2: Performance Regressions (LCP)
**What goes wrong:** Large hero images causing a slow PageSpeed score.
**How to avoid:** Use `loading: 'eager'` for the hero and ensure `sizes="100vw"` (or appropriate width) is set correctly.

## Code Examples

### Standardizing the Gold CTA
Apply the following to conversion buttons in sections:

```css
/* In nuumi-home.css */
.nuumi-button--gold {
  background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
  color: #000;
  font-weight: 800;
  box-shadow: 0 0.8rem 2rem rgba(245, 158, 11, 0.4);
}
.nuumi-button--gold:hover {
  transform: translateY(-2px);
  box-shadow: 0 1.2rem 2.8rem rgba(245, 158, 11, 0.5);
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Multi-file CSS | `base.css` + Sections | OS 2.0 | Easier management, better caching. |
| Custom Icon Fonts | Inline SVGs | 2023+ | Faster load, zero render blocking, pixel perfect. |

## Open Questions

1. **Specific Font Licenses:** Confirm all Google Fonts listed in `nuumi-base.css` (DM Serif Display, Plus Jakarta Sans) are approved for use.
   - Recommendation: They are free/open source, Proceed with confidence.
2. **Gold CTA Color Code:** The context mentions "aggressive gold". Is `#F59E0B` (Amber) aggressive enough, or should we use a metallic `#D4AF37`?
   - Recommendation: Use a gradient for a "premium shine" effect as seen in PetLab.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Cypress (End-to-End) |
| Config file | `cypress.config.js` |
| Quick run command | `npx cypress run --spec "cypress/e2e/homepage.cy.js"` |
| Full suite command | `npx cypress run` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| HOME-01 | Hero CTA is gold and clickable | E2E | `cypress run ...` | ❌ Wave 0 |
| HOME-02 | Trust Strip marquee is visible | Visual | `cypress run ...` | ❌ Wave 0 |
| HOME-07 | FAQ rows expand on click | UI | `cypress run ...` | ❌ Wave 0 |

### Wave 0 Gaps
- [ ] `cypress/e2e/homepage.cy.js` — Core functional tests for all 9 sections.
- [ ] `cypress/support/commands.js` — Custom commands for Shopify-specific interactions.
- [ ] Framework install: `npm install cypress --save-dev`

## Sources

### Primary (HIGH confidence)
- Dawn Theme Documentation - Official Shopify patterns.
- Nuumi codebase (`nuumi-base.css`, `nuumi-home-hero.liquid`) - Current implementation patterns.

### Secondary (MEDIUM confidence)
- PetLab Store Study - Authority/Trust patterns.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Built on Dawn.
- Architecture: HIGH - Block-based schema is standard.
- Pitfalls: HIGH - Common LCP and Editor issues are well-known.

**Research date:** 2026-03-18
**Valid until:** 2026-04-18
