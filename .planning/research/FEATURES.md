# Feature Landscape

**Domain:** Shopify Themes (Online Store 2.0)
**Researched:** 2026-03-18

## Table Stakes

These are features that modern Shopify merchants expect out-of-the-box from a flexible, high-converting theme. They are less about specific UI elements and more about the capability for customization.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| **Modular Homepage** | Merchants expect full control over their homepage layout. OS 2.0's "sections everywhere" makes this a standard feature. | Medium | Requires building a library of diverse, reusable sections (e.g., Hero, Featured Products, Testimonials, Image with Text). |
| **Customizable Product Pages (PDP)** | The ability to add, remove, and reorder sections on the PDP is crucial for targeted merchandising and storytelling. | Medium | Involves breaking the traditional PDP into sections (e.g., Product Info, Media Gallery, Cross-sells, Reviews). |
| **Customizable Static Pages** | Merchants need to create rich landing pages and content pages (About Us, Contact) without developer help. | Low | Achieved by creating a default `page.json` template that allows merchants to add any of the theme's sections. |
| **Theme-Wide Brand Settings** | Centralized control over colors, typography, logos, and favicons is a fundamental expectation. | Low | Implemented in the `settings_schema.json` file. |
| **Dynamic Content Population** | Merchants expect to link theme elements to their product data or custom content (metafields) without touching code. | Medium | Requires architecting sections to use dynamic sources and training the merchant on how to use metafields. |

## Differentiators

Features that set a theme apart by providing deeper flexibility or solving common e-commerce problems elegantly.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **Pre-built "Content Blocks"** | Providing a rich set of blocks within sections (e.g., icon + text, star rating, buttons) empowers merchants to build more diverse layouts. | Medium | Instead of a simple "text block," offer a "content block" with multiple, toggleable elements. |
| **Section-Level Layout Controls** | Allowing merchants to change layouts within a section (e.g., image left/right, grid columns) provides significant flexibility. | Medium | Implemented using `select` settings in the section schema that add CSS classes to control layout. |
| **Metafield-Powered Landing Pages** | Create generic templates that are entirely powered by page-level metafields. This allows for creating unique, structured layouts for campaigns or special content. | High | Requires a well-defined metafield strategy and sections that are built to consume this structured data. |
| **Performance-First Components** | Building all sections with a focus on performance (lazy loading images, deferred scripts, efficient Liquid) is a major selling point. | Medium | Requires diligent development practices and performance testing throughout the build. |

## Anti-Features

Features to explicitly NOT build, as they go against the flexible and maintainable architecture.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|--------------------|
| **Page-Specific Sections** | Creating a section that only works on one page (e.g., a "Homepage Hero"). | This violates the principle of reusability. It's brittle and creates code duplication. | Build a generic "Hero" section that can be used on any page. Let the merchant configure its content and placement. |
| **Hardcoded Content** | Embedding text, links, or images directly in Liquid files. | It makes the theme impossible for the merchant to update without code changes. | Expose all content as settings and blocks in the section's schema. Connect them to dynamic sources where possible. |
| **Massive, Monolithic Sections** | A single section file that tries to do too many things with complex `if/else` logic based on settings. | This becomes a maintenance nightmare and is confusing for merchants to configure. | Break it down into smaller, more focused sections or use blocks to handle variations within a section. |

## MVP Recommendation

A successful MVP theme should prioritize the "Table Stakes" to provide a solid, flexible foundation.

1.  **Modular Homepage:** Build 5-6 core sections (Hero, Rich Text, Image with Text, Featured Collection, Testimonials).
2.  **Theme-Wide Brand Settings:** Establish the global style controls.
3.  **Customizable Product Pages:** Create a default `product.json` with modular sections for the description, gallery, and recommendations.
4.  **One Differentiator:** Implement **Section-Level Layout Controls** for the initial set of sections to showcase the theme's flexibility.
