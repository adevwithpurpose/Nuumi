# Architecture

**Analysis Date:** 2026-03-18

## Pattern Overview

**Overall:** Shopify Theme Architecture

This codebase follows the standard architecture for a Shopify Online Store 2.0 theme. It is a server-side rendered architecture where presentation logic is handled by Shopify's Liquid templating engine. The structure is file-based and declarative, with JSON files defining page structures and Liquid files handling markup and logic.

**Key Characteristics:**
- **Platform-Driven:** The data model (products, collections, etc.) is provided by the Shopify platform via global Liquid objects.
- **Template-Based:** The structure of each page type is defined by a corresponding template file.
- **Component-Driven:** The UI is built from reusable and customizable components called "Sections" and "Snippets".

## Layers

**Layout:**
- **Purpose:** Provides the main HTML shell and global structure for all pages.
- **Location:** `layout/`
- **Contains:** The main `theme.liquid` file, which includes the `<head>`, `<body>`, and renders the content for the specific page being viewed.
- **Depends on:** `templates/`, `sections/`, `snippets/`
- **Used by:** The Shopify rendering service.

**Templates:**
- **Purpose:** Defines the structure and content for specific page types (e.g., product pages, collection pages, the home page).
- **Location:** `templates/`
- **Contains:** JSON files (`*.json`) that define which sections are included and their order. Some older templates might be `.liquid` files.
- **Depends on:** `sections/`
- **Used by:** `layout/theme.liquid` to render the page-specific content.

**Sections:**
- **Purpose:** Modular, reusable, and customizable components that make up the main content of a page. Users can add, remove, and reorder sections in the Shopify Theme Editor.
- **Location:** `sections/`
- **Contains:** `.liquid` files that contain HTML, Liquid logic, and optionally CSS and JavaScript. Each section has a schema that defines its settings.
- **Depends on:** `snippets/`
- **Used by:** `templates/`

**Snippets:**
- **Purpose:** Reusable smaller pieces of code or UI elements. Unlike sections, they are not meant to be directly customized by the user in the Theme Editor.
- **Location:** `snippets/`
- **Contains:** `.liquid` files that can be included in layouts, templates, and sections.
- **Depends on:** None
- **Used by:** `layout/`, `templates/`, `sections/`

**Configuration:**
- **Purpose:** Defines the theme's global settings and presets.
- **Location:** `config/`
- **Contains:** `settings_schema.json` (defines the options in the Theme Editor) and `settings_data.json` (stores the user's saved settings).

## Data Flow

**Page Rendering Flow:**

1.  A request is made to a store URL (e.g., `/products/my-product`).
2.  Shopify identifies the page type (e.g., product) and loads the corresponding platform data (the `product` object).
3.  The main layout file, `layout/theme.liquid`, is rendered.
4.  Inside the layout, the content for the specific template is rendered by referencing `content_for_layout`.
5.  Shopify looks up the appropriate template file in `templates/` (e.g., `templates/product.json`).
6.  The `product.json` template dictates which sections from the `sections/` directory are rendered and in what order.
7.  Sections may include reusable UI components from `snippets/` (e.g., `snippets/price.liquid`).
8.  Global settings from `config/settings_data.json` and translations from `locales/` are available to all Liquid files.
9.  The final HTML is sent to the browser.

## Key Abstractions

**Sections:**
- **Purpose:** To create modular, customizable blocks of content for pages. They are the primary building blocks for merchants to customize their storefront.
- **Examples:** `sections/featured-product.liquid`, `sections/image-banner.liquid`, `sections/main-cart-items.liquid`
- **Pattern:** Each section is a self-contained Liquid file with a `{% schema %}` tag that defines its customizable settings.

**Snippets:**
- **Purpose:** To encapsulate and reuse smaller pieces of UI or logic, promoting a DRY (Don't Repeat Yourself) principle.
- **Examples:** `snippets/product-card.liquid`, `snippets/price.liquid`, `snippets/social-icons.liquid`
- **Pattern:** A snippet is a simple Liquid file that is included in other files using the `{% render %}` or `{% include %}` tag.

## Entry Points

**Primary Layout:**
- **Location:** `layout/theme.liquid`
- **Triggers:** Any storefront page request.
- **Responsibilities:** Renders the `<html>`, `<head>`, and `<body>` tags. Includes global assets and renders the page-specific template content.

**Page Templates:**
- **Location:** `templates/`
- **Triggers:** A request for a specific page type (e.g., viewing a product triggers `product.json`).
- **Responsibilities:** Defines the layout and sections for a specific page type. `index.json` is the template for the home page.

## Error Handling

**Strategy:** Error handling is primarily managed by the Shopify platform.

**Patterns:**
- **404 Not Found:** When a URL doesn't correspond to a resource, Shopify serves the page defined by `templates/404.json`.

## Cross-Cutting Concerns

**Localization:**
- **Approach:** Handled via JSON translation files in the `locales/` directory. The Liquid `t` filter is used to access translated strings (e.g., `{{ 'products.product.add_to_cart' | t }}`).
**Styling & Scripts:**
- **Approach:** CSS and JavaScript files are located in the `assets/` directory (not listed in detail, but a standard Shopify practice). They are loaded into `layout/theme.liquid`.

---

*Architecture analysis: 2026-03-18*
