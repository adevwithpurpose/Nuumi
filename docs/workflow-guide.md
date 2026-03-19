# Nuumipet Workflow Guide

Last updated: 2026-03-18

## Connected Services

| Item | Value |
|-----|-------|
| Shopify store | `evsedm-j1.myshopify.com` |
| GitHub repository | `git@github.com:adevwithpurpose/Nuumi.git` |
| Local project root | `D:/antigravity/Projects/Nuumipet` |
| Theme config file | `shopify.theme.toml` |

## Current Workflow Model

This project is now run manually.

- `.planning/` is the source of truth for roadmap, requirements, and project state.
- The old GSD wrapper flow is no longer the active operating model.
- Shopify CLI is the intended local preview path.
- Live preview and Theme Editor QA still require Shopify auth on the machine running the commands.

Primary planning files:

- `.planning/PROJECT.md`
- `.planning/ROADMAP.md`
- `.planning/REQUIREMENTS.md`
- `.planning/STATE.md`

## Theme Structure In Use

Homepage stack:

- `sections/nuumi-announcement-bar.liquid`
- `sections/nuumi-home-hero.liquid`
- `sections/nuumi-trust-strip.liquid`
- `sections/nuumi-proof-grid.liquid`
- `sections/nuumi-featured-products.liquid`
- `sections/nuumi-expert-spotlight.liquid`
- `sections/nuumi-benefits-story.liquid`
- `sections/nuumi-faq.liquid`
- `templates/index.json`

PDP stack:

- `sections/nuumi-main-product.liquid`
- `sections/nuumi-pdp-trust-strip.liquid`
- `sections/nuumi-pdp-guarantee.liquid`
- `sections/nuumi-pdp-story.liquid`
- `sections/nuumi-pdp-comparison.liquid`
- `sections/nuumi-pdp-expert.liquid`
- `sections/nuumi-pdp-faq.liquid`
- `templates/product.json`

Shared styling and helpers:

- `assets/nuumi-base.css`
- `assets/nuumi-home.css`
- `assets/nuumi-pdp.css`
- `snippets/nuumi-icons.liquid`
- `snippets/nuumi-rating-stars.liquid`
- `layout/theme.liquid`

## Local Shopify Commands

Use Shopify CLI from the repo root:

```bash
shopify version
shopify theme check
shopify theme dev --store evsedm-j1.myshopify.com
```

If you need a fixed local port:

```bash
shopify theme dev --store evsedm-j1.myshopify.com --host 127.0.0.1 --port 9292
```

If the machine is not authenticated yet, run:

```bash
shopify auth login
```

Notes:

- `shopify theme dev` is the preferred local preview workflow.
- The preview will not come up until Shopify auth is connected to the store.
- `shopify theme share` can be used later for a stable share link, but local dev is the main operator path.

## Deployment And Sync Guidance

Git is still the source-controlled workflow for code changes, but deployment verification should not assume automatic success on the Shopify side until the store connection is confirmed.

Recommended sequence:

```bash
git status -sb
git pull --rebase --autostash origin main
git add <file-paths>
git commit -m "Brief plain-English description"
git push origin main
```

Then verify with one of:

- `shopify theme dev --store evsedm-j1.myshopify.com`
- Shopify admin Theme Editor on the connected theme

If Theme Editor changes were made directly in Shopify, be careful before overwriting tracked settings files from git.

## Theme Editor Controls

The current merchant-editable model has two layers:

- Section-level controls on homepage and PDP sections
- Global Nuumi controls in theme settings

### Global Nuumi settings

Defined in `config/settings_schema.json` and persisted in `config/settings_data.json`.

Current global Nuumi settings include:

- `nuumi_color_gold`
- `nuumi_color_gold_dark`
- `nuumi_color_deep_blue`
- `nuumi_color_off_white`
- `nuumi_announcement_enabled`
- `nuumi_announcement_text`
- `nuumi_announcement_link`
- `nuumi_announcement_bg`
- `nuumi_announcement_use_global`

These are wired into the theme through `layout/theme.liquid` as CSS variables:

- `--nuumi-gold`
- `--nuumi-gold-dark`
- `--nuumi-deep-blue`
- `--nuumi-off-white`

### Announcement bar behavior

`sections/nuumi-announcement-bar.liquid` supports both local section content and global content.

- When `use_global_content` is enabled on the section and `nuumi_announcement_use_global` is enabled in theme settings, the bar pulls from the global Nuumi announcement fields.
- Otherwise, the section uses its own local text, link, and background color settings.

### Template ownership

- `templates/index.json` contains the custom homepage section stack.
- `templates/product.json` contains the custom Nuumi PDP stack plus `related-products`.
- The PDP template has already had leftover generic Dawn filler removed.

## Settings File Rules

`config/settings_data.json` is tracked and must remain valid Shopify JSON.

Important rule:

- `color_schemes` in `config/settings_data.json` must remain an object, not an array.

If merchant changes were made in Shopify before a pull, avoid blindly overwriting the file.

## Working Rules For Changes

- Preserve Shopify section and block editability.
- Prefer updating existing Nuumi sections over adding duplicate patterns.
- Keep homepage and PDP references aligned with `templates/index.json` and `templates/product.json`.
- Update documentation when workflow, store linkage, or merchant controls change.

## Verification Checklist

Before handing off theme changes:

```bash
shopify theme check
git status -sb
```

Then confirm all of the following:

- referenced section files exist
- template JSON points at the intended sections
- global settings added to `config/settings_schema.json` also have usable values in `config/settings_data.json`
- any new CSS variables wired in `layout/theme.liquid` are actually consumed by the theme

## Remaining Known Gaps

- Live Shopify preview still depends on successful auth for `evsedm-j1.myshopify.com`.
- Full Theme Editor QA is still pending.
- Shopify CLI workflow and GitHub/store integration still need final verification.
- Additional global merchant controls for typography or button treatment are still optional future work.
