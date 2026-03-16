# Nuumipet Workflow Guide

Last updated: 2026-03-16

## Connected Services

| Item | Value |
|-----|-------|
| Shopify store | `evsedm-j1.myshopify.com` |
| GitHub repository | `git@github.com:adevwithpurpose/Nuumi.git` |
| Local project root | `D:/antigravity/Projects/Nuumipet` |
| Dev theme ID | `#188828713254` (Development 6a5c78-G5) |
| Live theme ID | `#188169552166` (Atlas Theme 3) |
| Preview URL | `https://xxcgzzgd45ey3v9h-100266803494.shopifypreview.com` |

---

## Deployment Model

This project uses the **Shopify GitHub integration** as its primary deployment path.

- All commits pushed to `main` are automatically deployed to the connected development theme.
- Wait **~2 minutes** after a push before checking the Shopify preview.
- `config/settings_data.json` is now **tracked in git** (removed from `.gitignore`).

### Critical: settings_data.json format rules

Shopify enforces strict format rules on `config/settings_data.json`:

- `color_schemes` **must be an object** (`{ "scheme-1": { "settings": {...} } }`)
- Using an array (`[...]`) causes a validation error and the file is rejected
- This is the **opposite** of `settings_schema.json` which uses an array format for defaults

The `settings_schema.json` defaults array (with `id` fields) is only used as a fallback when no `settings_data.json` exists. The live `settings_data.json` always uses the object keyed format.

> **Warning:** Any changes made in the Shopify Theme Editor to global settings will be
> overwritten on the next `git push` that includes `settings_data.json`. Pull from the
> Shopify Admin or use `shopify theme pull` if editor changes need to be preserved first.

---

## Shopify Preview Options

### Option 1: Active development preview (hot reload)

```bash
shopify theme dev --store evsedm-j1.myshopify.com
```

Best for rapid iteration — syncs changes live while the command runs.

### Option 2: Shareable snapshot

```bash
shopify theme share --store evsedm-j1.myshopify.com
```

Creates a stable preview link without keeping the CLI running.

### Validation before sharing

```bash
shopify version       # confirm CLI installed
shopify theme check   # catch liquid errors before sharing
```

---

## GitHub Push Workflow

Always pull before pushing to avoid overwriting remote changes.

```bash
# 1. Check status
git status -sb

# 2. Pull remote first
git pull --rebase --autostash origin main

# 3. Stage changes
git add <file-paths>

# 4. Commit
git commit -m "Brief plain-English description"

# 5. Push
git push origin main

# 6. Confirm clean
git status -sb
```

### Typical homepage push

```bash
git add assets/nuumi-home.css assets/nuumi-base.css templates/index.json config/settings_data.json
git commit -m "Polish homepage hero — update color tokens and spacing"
git push origin main
```

---

## Files Under Git Control

| File | Tracked | Notes |
|------|---------|-------|
| `sections/*.liquid` | Yes | Custom nuumi-\* sections |
| `assets/nuumi-*.css` | Yes | All Nuumipet styles |
| `assets/nuumi-*.js` | Yes | All Nuumipet scripts |
| `templates/*.json` | Yes | `index.json`, `product.json` |
| `config/settings_schema.json` | Yes | Theme editor UI schema |
| `config/settings_data.json` | Yes | Brand color schemes — object format required |
| `layout/theme.liquid` | Yes | Font and CSS injection |
| `.gitignore` | Yes | |
| `.shopify/` | No | Local CLI session state only |

---

## Design System Reference

### Font Trio (FontTrio convention)

| Role | Font | Variable |
|------|------|----------|
| Display / Headings | DM Serif Display | `--font-heading` |
| Body / UI | Plus Jakarta Sans | `--font-body` |
| Mono / Labels | Fira Code | `--font-mono` |

Imported via Google Fonts in `assets/nuumi-base.css`.

### Color Schemes

| Scheme | Background | Use |
|--------|-----------|-----|
| scheme-1 | `#FFFFFF` | Default white sections |
| scheme-2 | `#F4F8FC` | Light blue-grey sections |
| scheme-3 | `#0A1B32` | Dark navy sections (expert, footer) |
| scheme-4 | `#E7F3F1` | Soft mint sections |
| scheme-5 | `#0D9488` | Teal accent sections |

### Brand Tokens (nuumi-base.css)

```css
--nuumi-navy:        #0A1B32   /* dark headlines, trust strip bg */
--nuumi-accent:      #0055E6   /* primary CTA blue */
--nuumi-teal:        #0D9488   /* science/health accent, icons */
--nuumi-green:       #059669   /* success, check marks */
--nuumi-gold:        #F59E0B   /* star ratings */
--font-heading:      'DM Serif Display'
--font-body:         'Plus Jakarta Sans'
--font-mono:         'Fira Code'
```

---

## Project-Specific Reminders

- After a `git push`, allow **~2 min** before checking the preview for changes.
- `shopify theme check` should return zero errors before any client demo.
- Do not rename section files without updating `templates/index.json`.
- Homepage uses custom `nuumi-*` sections only — Dawn defaults are not used.
- PDP uses custom `nuumi-*` sections only — Dawn defaults are replaced.
- `config/settings_data.json` must always use **object format** for `color_schemes`, never array.
