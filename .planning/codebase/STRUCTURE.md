# Codebase Structure

**Analysis Date:** 2026-03-18

## Directory Layout

```
[project-root]/
├── assets/         # Static assets: images, CSS, JavaScript
├── config/         # Theme settings schema and data
├── layout/         # Main theme layout files (the HTML shell)
├── locales/        # Translation files for internationalization
├── sections/       # Modular, reusable page components
├── snippets/       # Smaller, reusable code snippets
└── templates/      # Page templates (structure for product, collection, etc.)
```

## Directory Purposes

**`assets/`**
- **Purpose:** Stores all static assets.
- **Contains:** CSS files, JavaScript files, images (JPG, PNG, SVG), and fonts.
- **Key files:** This is where `base.css` and `main.js` would typically reside.

**`config/`**
- **Purpose:** Contains global theme configuration.
- **Contains:** `settings_schema.json`, which defines the settings available in the Shopify Theme Editor, and `settings_data.json`, which stores the merchant's saved settings.

**`layout/`**
- **Purpose:** Defines the main layout structure for the entire site.
- **Contains:** `theme.liquid`, the master template that wraps around all other page templates. It includes the `<html>`, `<head>`, and `<body>` tags.

**`locales/`**
- **Purpose:** Manages internationalization and translations.
- **Contains:** JSON files for each language (e.g., `en.default.json`, `fr.json`). These files contain key-value pairs for all text strings used in the theme.

**`sections/`**
- **Purpose:** Contains the main building blocks of a page. Sections are larger, modular components that can be added, removed, and re-ordered on templates from the Theme Editor.
- **Contains:** `.liquid` files, each representing a distinct section (e.g., `featured-product.liquid`, `image-banner.liquid`).

**`snippets/`**
- **Purpose:** Contains smaller, reusable pieces of code (partials). They are used to avoid repetition and are rendered within other files (layouts, templates, sections).
- **Contains:** `.liquid` files that encapsulate a specific piece of functionality or UI (e.g., `price.liquid`, `product-card.liquid`).

**`templates/`**
- **Purpose:** Defines the structure for each type of page in the store.
- **Contains:** Primarily `.json` files that specify which sections to render for a given page type. May also contain `.liquid` files for more complex pages or older theme structures. Sub-directories like `templates/customers/` hold templates for the customer account area.

## Key File Locations

**Entry Points:**
- `layout/theme.liquid`: The main application shell for every page.
- `templates/index.json`: The template for the homepage.
- `templates/product.json`: The default template for product detail pages.
- `templates/collection.json`: The default template for product listing pages.

**Configuration:**
- `config/settings_schema.json`: Defines all theme-wide settings available in the Theme Editor.
- `config/settings_data.json`: Stores the saved values for the settings defined in the schema.

**Core Logic:**
- Logic is primarily presentational and spread across `.liquid` files in `sections/` and `snippets/`. There is no single "core logic" directory as in a traditional application.

**Testing:**
- Not applicable. Shopify themes do not have a conventional, co-located testing structure.

## Naming Conventions

**Files:**
- **Pattern:** `kebab-case.liquid` or `kebab-case.json`.
- **Example:** `featured-collection.liquid`, `main-product.liquid`.
- **Templates:** For alternate templates, the convention is `object.{view}.json` (e.g., `page.contact.json`).

**Directories:**
- **Pattern:** Lowercase.
- **Example:** `snippets`, `templates/customers`.

## Where to Add New Code

**New Reusable Page Module:**
- **Implementation:** Create a new `.liquid` file in `sections/`. Define its settings in the `{% schema %}` tag. Add it to a template in the `templates/` directory to make it available.

**New Reusable UI Component:**
- **Implementation:** Create a new `.liquid` file in `snippets/`. Use the `{% render 'snippet-name' %}` tag to include it where needed.

**New Page Template:**
- **Implementation:** Create a new JSON template in `templates/`, for example `page.about-us.json`. Assign this template to a page in the Shopify Admin.

---

*Structure analysis: 2026-03-18*
