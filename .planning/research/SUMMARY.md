# Research Summary: Shopify Theme Architecture

**Domain:** Shopify Themes (Online Store 2.0)
**Researched:** 2026-03-18
**Overall confidence:** HIGH

## Executive Summary

Modern, high-converting Shopify themes are architected using the **Online Store 2.0 (OS 2.0) "Sections Everywhere" model**. This is a component-based architecture that prioritizes modularity and merchant customizability. The core principle is to break every page into a series of self-contained, reusable **Sections**. These sections are then composed into page layouts using simple **JSON Templates**. This approach allows merchants to add, remove, and reorder content on any page, not just the homepage, providing maximum flexibility.

The key to this flexibility is the data flow. Content is decoupled from presentation by using **Shopify Metafields** to store structured data (e.g., product specifications, subtitles, expert endorsements). In the theme, sections are built with configurable settings that can be linked to these metafields via **Dynamic Sources**. This empowers merchants to manage their content centrally in the Shopify admin, rather than having it trapped inside the theme's settings.

The development process should focus on building a library of independent, context-agnostic sections that are styled by a global set of design tokens. The final pages are then assembled from these components. Avoiding pitfalls like hardcoding content or fighting the component model is critical for a successful, maintainable, and empowering theme.

## Key Findings

**Stack:** The technology is prescribed by Shopify: **Liquid, JSON, JS, CSS**. The key is using Shopify CLI for development and optionally layering tools like Tailwind CSS for efficiency.
**Architecture:** A **component-based architecture** is non-negotiable. Pages (`JSON templates`) are simple lists of modular `sections`. Data flows one-way from **Metafields** to section settings via **Dynamic Sources**.
**Features:** The most important features are architectural: providing merchants with a **modular homepage**, **customizable PDP**, and the ability to populate any section with **dynamic content**.
**Critical pitfall:** The most critical pitfall is **fighting the OS 2.0 architecture** by hardcoding content or building monolithic, non-reusable components. This negates the primary benefit of the platform.

## Implications for Roadmap

Based on the research, the project should be structured around the creation of a component library, not the creation of pages.

1.  **Phase 1: Foundation & Global Styling**
    -   **Rationale:** Establish the core structure and visual language before building any components. This ensures consistency and efficiency.
    -   **Addresses:** `STACK.md` setup, `FEATURES.md` "Theme-Wide Brand Settings".
    -   **Activities:** Set up Shopify CLI, define `settings_schema.json` (colors, typography), establish CSS framework.

2.  **Phase 2: Core Section Library Development**
    -   **Rationale:** Build the most common and reusable sections first. This will provide the building blocks for the majority of the site's pages.
    -   **Addresses:** `FEATURES.md` "Modular Homepage" and key components for the PDP.
    -   **Activities:** Build 5-7 essential sections (e.g., Hero, Image with Text, Featured Collection, Testimonials). Ensure they are responsive and connect to dynamic sources.

3.  **Phase 3: Template Assembly & PDP Composition**
    -   **Rationale:** With a library of sections available, assembling the final page templates is a fast and straightforward process.
    -   **Addresses:** `ARCHITECTURE.md` build order, `FEATURES.md` "Customizable Product Pages."
    -   **Activities:** Create `index.json`, `product.json`, `page.json`, etc., by arranging the sections built in Phase 2. Wire up product-specific data.

4.  **Phase 4: Advanced Features & Metafields**
    -   **Rationale:** Focus on high-value differentiators once the core structure is in place.
    -   **Addresses:** `FEATURES.md` "Metafield-Powered Landing Pages."
    -   **Activities:** Develop a strategy for advanced metafields, build sections that consume this structured data, and provide training for the merchant.

**Phase ordering rationale:**
- This order follows the architectural dependencies: global styles must come before components, and components must come before the pages that use them. This ensures a "Don't Repeat Yourself" (DRY) approach and minimizes rework.

**Research flags for phases:**
- Phase 4: A deeper dive into the specific data structures and metafields needed by the merchant will be required before this phase begins.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | The Shopify stack is well-defined and documented. |
| Architecture | HIGH | Online Store 2.0 is the established, official standard. Best practices are clear. |
| Features | HIGH | The feature set for a flexible theme is directly enabled by the OS 2.0 architecture. |
| Pitfalls | HIGH | The pitfalls are common and well-understood by experienced Shopify developers. |
