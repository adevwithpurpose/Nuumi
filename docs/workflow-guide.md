# Nuumipet Workflow Guide

## Connected Services

- Shopify store: `evsedm-j1.myshopify.com`
- GitHub repository: `git@github.com:adevwithpurpose/Nuumi.git`
- Local project root: `D:/antigravity/Projects/Nuumipet`

## Shopify Preview Links

### Option 1: Active development preview

Use this when you are actively editing the theme and want hot reload while the CLI is running.

Run from the repository root:

```bash
shopify theme dev --store evsedm-j1.myshopify.com
```

What this does:

- uploads the current theme as a development theme
- starts the local preview server
- prints a local preview URL, a Shopify preview link, and a theme editor link
- keeps syncing changes while the command stays running

Use this when:

- you are actively developing or checking changes quickly
- you want hot reload for CSS and section changes
- you want to inspect the theme against real store data

Important note for this project:

- if Shopify CLI reports a reconciliation prompt because the local theme and remote development theme differ, the command may need interactive input before it can continue

### Option 2: Shareable preview snapshot

Use this when you want a stable preview link without keeping a dev server running.

Run from the repository root:

```bash
shopify theme share --store evsedm-j1.myshopify.com
```

What this does:

- uploads the local theme as a new unpublished theme with a generated name
- prints a shareable preview link
- leaves the uploaded theme in the Shopify theme library until it is deleted manually

Use this when:

- you need to send a preview to a client or stakeholder
- `shopify theme dev` is blocked by reconciliation or you do not need live reload
- you want a reviewable snapshot of the current local code

### Before creating a preview link

1. Open a terminal in `D:/antigravity/Projects/Nuumipet`.
2. Confirm Shopify CLI is installed:

```bash
shopify version
```

3. Make sure Shopify CLI is authenticated to the correct store.
4. Validate the theme before sharing progress:

```bash
shopify theme check
```

## GitHub Push Workflow

This project uses GitHub as the source of truth for store-connected theme deployment.

### Rule for this repo

Always pull remote changes before pushing local work.

### Standard workflow

1. Open a terminal in `D:/antigravity/Projects/Nuumipet`.
2. Check what changed:

```bash
git status -sb
git diff --stat
```

3. Pull first:

```bash
git pull --rebase --autostash origin main
```

4. Review the updated state again if needed.
5. Stage the files you want to publish:

```bash
git add <file-paths>
```

6. Commit with a plain English message that matches the existing repo style:

```bash
git commit -m "Describe the change clearly"
```

7. Push to GitHub:

```bash
git push origin main
```

8. Confirm the branch is clean and synced:

```bash
git status -sb
```

### Example push flow

```bash
git status -sb
git pull --rebase --autostash origin main
shopify theme check
git add sections/nuumi-home-hero.liquid assets/nuumi-home.css
git commit -m "Refine the Nuumipet homepage hero layout"
git push origin main
git status -sb
```

## Project-Specific Reminders

- Do not commit live `config/settings_data.json`.
- Prefer durable theme code changes in `sections/`, `snippets/`, `assets/`, `templates/`, and `config/settings_schema.json`.
- Keep theme work at the repository root so Shopify CLI and GitHub stay aligned.
- Use `shopify theme share` when you need a stable preview link quickly.
- Use `shopify theme dev` when you need live iteration and hot reload.
