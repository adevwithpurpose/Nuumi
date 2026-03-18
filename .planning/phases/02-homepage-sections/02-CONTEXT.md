# Phase 2: Homepage Sections - Context

**Gathered:** 2026-03-18
**Status:** Ready for planning

<domain>
## Phase Boundary

Build all modular and editable sections for the main homepage, focusing on a premium PetLab-style authority, clean trust-building sections, and a lean storefront model.

</domain>

<decisions>
## Implementation Decisions

### Hero Section (HOME-01, HOME-09)
- **Announcement Bar:** Standard height, blue-led, with single-line offer text.
- **Hero Layout:** Full-width or boxed, with a large authority-first hero image.
- **Content Alignment:** Centered text with aggressive gold CTA button.
- **Headline:** Focus on "Pet-health authority" and "Trustworthy wellness."

### Trust & Proof Sections (HOME-02, HOME-06, HOME-04)
- **Trust Strip:** A clean, multi-column row with small icons/badges immediately below the hero.
- **Proof Grid:** Grid layout of badges, certifications, or trust cues (guarantees).
- **Expert Spotlight:** A dedicated section with an expert image, credentials, and a powerful quote/endorsement.

### Product Showcase (HOME-03, HOME-05)
- **Showcase:** A grid display of all five core products, clearly showing name, price, and primary benefit.
- **Benefits Section:** A storytelling section using clean spacing and high-quality imagery to communicate brand/product benefits.

### Informational & Conversion (HOME-07, HOME-08)
- **FAQ:** An accordion-style section for authority and trust building.
- **Footer/Email Capture:** Simple, clean footer with a prominent email signup and social links.

### OpenCode's Discretion
- Choice of specific icon library (e.g., SVG-based, theme-internal).
- Micro-animations and hover effects (e.g., gold CTA hover states).
- Precise padding and margin settings for section layout.

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `snippets/nuumi-badge-list.liquid`: Possible trust badge component from root (to be migrated/re-implemented).
- `snippets/nuumi-rating-stars.liquid`: Possible star rating component from root (to be migrated/re-implemented).

### Established Patterns
- Dawn's standard section settings (using Liquid schema for full editability).
- Metafields/Metaobjects as dynamic sources (to be used in next phases).

### Integration Points
- `templates/index.json`: The main entry point for homepage assembly.

</code_context>

<specifics>
## Specific Ideas
- "Authority and trust, but cleaner, calmer, and more premium than PetLab."
- "Blue-led, clinical-but-friendly, mobile-first."

</specifics>

<deferred>
## Deferred Ideas
- Product Detail Page (PDP) sections — Phase 3.
- Category-heavy architecture — Out of Scope.

</deferred>

---

*Phase: 02-homepage-sections*
*Context gathered: 2026-03-18*