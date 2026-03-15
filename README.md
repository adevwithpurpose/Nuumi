# Nuumipet Theme Workspace

Nuumipet is a Dawn-based Shopify storefront project for a lean pet wellness brand. This repository keeps the Shopify theme code at the root so it can connect cleanly to Shopify and GitHub, while project documentation and inspiration material stay alongside it for local planning work.

## Workspace Structure

- `assets/`, `config/`, `layout/`, `locales/`, `sections/`, `snippets/`, `templates/`: Shopify theme source
- `brief.md`: approved project brief
- `design-ideas-study/`: saved screenshots, transcript, and visual references
- `docs/`: implementation plans and supporting project documentation

## Local Workflow

Connected services for this project:
- GitHub repository: `git@github.com:adevwithpurpose/Nuumi.git`
- Shopify store: `evsedm-j1.myshopify.com`

1. Authenticate Shopify CLI against the correct client store.
2. Run local development from the repository root:

```bash
shopify theme dev --store evsedm-j1.myshopify.com
```

3. Validate theme changes before claiming progress:

```bash
shopify theme check
```

## GitHub and Store Sync Rules

- Keep theme source at repository root for straightforward Shopify and GitHub integration.
- Do not commit live `config/settings_data.json`; use Theme Editor for merchant-owned settings and keep local examples in `config/settings_data.json.example` if needed.
- Keep planning documents and reference captures out of theme uploads via `.shopifyignore`.
- Make durable changes in Liquid, assets, sections, snippets, templates, and `config/settings_schema.json`.
- Use Shopify CLI preview for testing and review: `shopify theme dev --store evsedm-j1.myshopify.com`.
- Use Git-based store sync for deployment so the GitHub repo remains the source of truth and version history stays intact.
- Repository remote for deployment-connected workflow: `git@github.com:adevwithpurpose/Nuumi.git`.

## Current Build Scope

Phase 1 covers:
- custom homepage
- first reusable PDP system
- editable section architecture for future rollout to the remaining products

Implemented custom section system:
- Homepage: `nuumi-home-hero`, `nuumi-trust-strip`, `nuumi-featured-products`, `nuumi-expert-spotlight`, `nuumi-benefits-story`, `nuumi-proof-grid`, `nuumi-faq`
- PDP: `nuumi-product-hero`, `nuumi-sticky-atc`, `nuumi-product-story`, `nuumi-product-benefits`, `nuumi-product-proof`, `nuumi-risk-free`

Key planning files:
- `brief.md`
- `docs/superpowers/plans/2026-03-15-nuumipet-storefront.md`

## Design Direction

- Base: Dawn, heavily customized
- Tone: premium, clinical-but-friendly, mobile-first
- Visual model: PetLab authority with cleaner, calmer, more premium execution
- System goal: strong conversion surfaces without category-heavy bloat

## Handoff Notes

- Homepage-only logic lives in `assets/nuumi-home.css` and `assets/nuumi-home.js`
- PDP-only logic lives in `assets/nuumi-product.css` and `assets/nuumi-product.js`
- Shared Nuumipet tokens and primitives live in `assets/nuumi-base.css`
- `layout/theme.liquid` conditionally loads Nuumipet assets on `index` and `product` templates
- Keep deployment branch and connected Shopify store explicit before using GitHub sync or `shopify theme push`
- Testing path: Shopify CLI preview against `evsedm-j1.myshopify.com`
- Deployment path: push changes through Git to `git@github.com:adevwithpurpose/Nuumi.git`, with the store connected to that repo for version-controlled rollout
