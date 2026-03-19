# Technology Stack

**Project:** Shopify Theme
**Researched:** 2026-03-18

## Recommended Stack

The technology stack for Shopify theme development is largely prescribed by the Shopify platform itself. The focus is on mastering these core technologies rather than choosing alternative frameworks.

### Core Framework
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Liquid** | Shopify | Templating Language | The required server-side templating language for rendering dynamic content and logic in Shopify themes. |
| **JSON** | Standard | Templates & Config | Used for `.json` templates (defining page structure), section schemas (defining settings), and theme settings (`settings_schema.json`). The backbone of OS 2.0. |
| **HTML5** | Latest | Structure | The required markup language for all theme files. |
| **CSS3** | Latest | Styling | The required styling language. Modern features like custom properties (variables) and grid/flexbox are fully supported and recommended. |
| **JavaScript** | ES6+ | Interactivity | For client-side interactivity, such as image sliders, dynamic cart updates, and form validation. No specific framework is required; vanilla JS is often sufficient. |

### Infrastructure
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Shopify Platform** | OS 2.0 | Hosting & Rendering | Shopify hosts all theme assets and handles the server-side rendering of Liquid. This is non-negotiable. |
| **Shopify CLI** | Latest | Development | The official tool for developing, testing, and deploying themes. Enables local development with hot-reloading and access to test data. |

### Supporting Libraries
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **Alpine.js** (Optional) | Latest | Minimalist JS | Recommended for adding light, declarative interactivity to sections without the overhead of a large framework like React or Vue. Ideal for simple state management (e.g., toggling menus, tabs). |
| **Tailwind CSS** (Optional) | Latest | Utility-First CSS | Recommended for rapid UI development and maintaining a consistent design system. It pairs well with the component-based nature of Shopify sections. Requires a build step. |

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| JavaScript | Vanilla JS / Alpine.js | React / Vue | While possible to use in "headless" builds, integrating heavy frameworks into a traditional Shopify theme adds significant complexity and build tooling for marginal benefit. They are generally overkill for theme interactivity. |
| CSS | Tailwind CSS | BEM / SMACSS | Traditional CSS methodologies are perfectly viable, but Tailwind CSS can accelerate development and reduce the amount of custom CSS needed, which is a benefit in a component-heavy architecture. |

## Installation

This setup assumes the use of Shopify CLI and optionally Tailwind CSS.

```bash
# 1. Install Shopify CLI (follow official Shopify instructions)
# ...

# 2. Initialize a new theme (e.g., using Dawn as a base)
shopify theme init

# 3. To add Tailwind CSS, a build process is required.
# This typically involves setting up Node.js, npm, and a tailwind.config.js file.
npm init -y
npm install -D tailwindcss postcss autoprefixer concurrently
npx tailwindcss init

# 4. Run the development server
# You'll need a script (e.g., in package.json) to run the CSS watcher and Shopify CLI concurrently.
# "dev": "concurrently \"npm:watch:css\" \"shopify theme dev\""
npm run dev
```
