# Technology Stack

**Analysis Date:** 2026-03-18

## Languages

**Primary:**
- **Liquid**: Shopify's templating language, used for rendering dynamic content in `.liquid` files located in `layout/`, `templates/`, `sections/`, and `snippets/`.
- **JavaScript (ES6)**: Used for all client-side interactivity. The codebase uses modern features like classes and modules. Source files are in `assets/`.
- **CSS**: Used for styling. Source files are in `assets/`.

## Runtime

**Environment:**
- **Shopify Platform**: Renders Liquid templates on the server side.
- **Browser**: Executes all client-side JavaScript.

**Package Manager:**
- **Not applicable**: There is no `package.json`. Dependencies, if any, would be managed manually by adding files to the `assets/` directory.

## Frameworks

**Core:**
- **None detected**: The project uses vanilla JavaScript for its client-side logic. It follows a component-based pattern, but without a specific framework like React, Vue, or Angular.

**Testing:**
- **Not detected**: There are no testing frameworks or test files visible in the codebase.

**Build/Dev:**
- **Shopify CLI**: The primary tool for developing and deploying Shopify themes (assumed, not present in the codebase itself).

## Key Dependencies

- **None detected**: The theme appears to be self-contained and does not use third-party JavaScript libraries like jQuery, Lodash, or component libraries. All functionality is custom-built.

## Configuration

**Environment:**
- **Shopify Theme Editor**: The theme is configured through a graphical user interface in the Shopify admin panel.
- The schema for these settings is defined in `config/settings_schema.json`.

**Build:**
- **Not applicable**: There is no build process (like Webpack or Vite) detected in the theme's codebase.

## Platform Requirements

**Development:**
- A Shopify store with theme development access.
- The Shopify CLI for local development and deployment.

**Production:**
- **Shopify**: The theme is designed to be deployed and hosted exclusively on the Shopify platform.

---

*Stack analysis: 2026-03-18*
