# Architecture Patterns

**Domain:** Shopify Themes (Online Store 2.0)
**Researched:** 2026-03-18

## Recommended Architecture

The recommended architecture for modern Shopify themes is the **Online Store 2.0 (OS 2.0) "Sections Everywhere" model**. This is a component-based architecture that emphasizes modularity, reusability, and merchant customizability.

The core principle is to break down every page into a series of configurable, re-orderable **Sections**. The page layout itself is defined by a simple JSON template file that references these sections. Data is injected into these components dynamically, allowing merchants to customize content without touching code.

![Shopify OS 2.0 Architecture Diagram](https://shopify.dev/assets/themes/architecture-a5519184b2383748cfc9a405788e0f5290b3b48227f29884566f120894b914d9.svg)
*(Source: Shopify Developer Documentation)*

### Component Boundaries

| Component | Responsibility | Communicates With |
|-----------|----------------|-------------------|
| **JSON Templates** (`/templates/*.json`) | Defines the list and default order of sections for a specific page type (e.g., product, collection). Acts as the top-level container. | Renders Sections into the main `{{ content_for_layout }}` of the `theme.liquid` layout file. |
| **Sections** (`/sections/*.liquid`) | Self-contained, reusable UI components (e.g., "Featured Products," "Image with Text"). Defines its own schema for settings and blocks. The primary building block of the theme. | Renders its own Liquid/HTML/CSS/JS. Can render Blocks and Snippets. Accesses global objects and data passed from its settings. |
| **Blocks** (Defined in a Section's schema) | Repeatable or selectable sub-components within a Section (e.g., a "Slide" in a "Slideshow" section). Blocks have their own settings. | Rendered by their parent Section. Cannot exist independently. |
| **Snippets** (`/snippets/*.liquid`) | Small, reusable Liquid code partials. Used for logic that's repeated across multiple sections or for breaking down complex section code. Not directly configurable by the merchant. | Included by Sections or Layout files. |
| **Layout** (`/layout/theme.liquid`) | The main theme wrapper. Contains the `<html>`, `<head>`, and `<body>` tags. Renders the content from JSON templates via `{{ content_for_layout }}`. | Renders global elements like headers and footers (often as sections), and the content from the active template. |

### Data Flow

Data flow is designed for maximum merchant flexibility, moving from Shopify's data layer to the theme components via the Theme Editor interface.

1.  **Data Source**: Data originates from Shopify's core objects (`product`, `collection`, etc.) or, more importantly, from **Metafields**. Metafields are custom data fields that merchants can define and attach to products, variants, collections, pages, or the store itself (brand assets).

2.  **Merchant Configuration**: In the Shopify Theme Editor, the merchant configures a Section or Block. For each setting (e.g., a text field for a heading), they can either enter static text or connect a **Dynamic Source**.

3.  **Dynamic Source Connection**: When a merchant connects a dynamic source, they are mapping a setting directly to a specific Metafield or a Shopify object attribute (e.g., connecting a "Product Subtitle" setting to a "product.subtitle" metafield).

4.  **Rendering**:
    *   The theme's Liquid code accesses the value via the `settings` object (e.g., `section.settings.subtitle`).
    *   Shopify's rendering engine populates this `settings` object with the value from the connected dynamic source.
    *   The component simply renders the data it receives, agnostic of whether it was entered statically or linked dynamically.

This one-way data flow (`Shopify Admin -> Metafields -> Theme Editor -> Section/Block Setting -> Liquid Render`) decouples the presentation layer from the data layer, which is the cornerstone of the OS 2.0 architecture.

## Patterns to Follow

### Pattern 1: Build for Composition, Not Pages
**What:** Design sections as standalone, context-agnostic components. A "Featured Product" section should not assume it will only be used on the homepage. It should be placeable on any page and work correctly.
**When:** Always. This is the core philosophy of OS 2.0.
**Example:**
```liquid
{% comment %}
  A "Featured Product" section should let the merchant *pick* a product
  via a `product` setting, not just assume it should render `product`.
{% endcomment %}

{% schema %}
{
  "name": "Featured Product",
  "settings": [
    {
      "type": "product",
      "id": "featured_product",
      "label": "Product to feature"
    }
  ]
}
{% endschema %}
```

### Pattern 2: Use Metafields for All Content That Isn't "Theme Configuration"
**What:** Differentiate between content and configuration. The *content* of a product description, a banner's heading, or a shipping deadline belongs in a Metafield. The *configuration* of the theme, like font choices, brand colors, and layout options, belongs in `settings_schema.json`.
**When:** When creating sections that display merchant-managed content.
**Why:** This allows merchants to manage their content in the Shopify Admin (the logical place for it) rather than hunting for it inside the Theme Editor. It also makes content portable between themes.

## Anti-Patterns to Avoid

### Anti-Pattern 1: Hardcoding Content in Sections
**What:** Placing significant text or image URLs directly in the Liquid files of sections.
**Why bad:** This forces the merchant to edit theme code to change content, defeating the purpose of the architecture. It's brittle and error-prone.
**Instead:** Expose all content as settings in the section's schema. Use default values for setup, but never assume they are final.

### Anti-Pattern 2: Overly "Smart" or Context-Aware Sections
**What:** Creating sections that change their behavior dramatically based on which template they are rendered in (e.g., `{% if template.name == 'product' %}...`).
**Why bad:** This creates unpredictable behavior for the merchant and violates the principle of composition. A section should look and behave the same way wherever it is placed. If different behavior is needed, create a separate section.
**Instead:** Keep sections focused on a single responsibility. Use different sections for different use cases.

## Build Order & Dependencies

Building a theme with this architecture has clear dependencies:

1.  **Global Styles & Settings (`settings_schema.json`)**: Define the theme's global design tokens (colors, typography, spacing) first. This informs the styling of all subsequent components.
2.  **Snippets & Core JS**: Develop any shared logic (e.g., image responsive loaders, custom JS helpers, complex Liquid logic) that multiple sections will rely on.
3.  **Sections**: Build the library of sections one by one. These are the main development effort. They should be built to be independent of each other.
4.  **Templates (`*.json`)**: Once sections are built, create the default JSON templates by composing the sections in a sensible default order. This is a very fast final step.

The key takeaway is that the page (`template`) is assembled *after* its constituent parts (`sections`) are complete.

## Sources

- Shopify Developer Docs: Theme Architecture (HIGH Confidence)
- Shopify Developer Docs: JSON Templates (HIGH Confidence)
- Shopify Developer Docs: Dynamic Sources (HIGH Confidence)
