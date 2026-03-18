# Phase 1: Project Setup & Theme Foundation - Research

**Researched:** 2026-03-18
**Domain:** Shopify Theme Development
**Confidence:** HIGH

## Summary

This research phase focuses on establishing a modern, efficient, and maintainable workflow for Shopify theme development. The user's decisions to use the Shopify CLI and the latest Dawn theme as a base are aligned with current Shopify best practices. The core of this phase is not about visual design but about setting up the foundational tooling and structure for the entire project.

The process involves initializing a new theme using the Shopify CLI, which clones the "Dawn" reference theme. This provides a performant, OS 2.0-compliant starting point. The workflow will be version-controlled with Git, with a direct integration to Shopify for continuous deployment from the `main` branch. Code quality will be maintained by Shopify's official linter, `Theme Check`.

**Primary recommendation:** Adhere strictly to the "Shopify CLI -> Git -> Shopify Admin" workflow. Use the CLI for local development, Git for version control and history, and the Shopify GitHub integration to sync changes to the live theme editor. This creates a reliable, single source of truth and a streamlined development-to-deployment pipeline.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- The local development environment will be set up using the Shopify CLI.
- The theme will be developed against the `evsedm-j1.myshopify.com` store.
- The project will follow a `main` branch strategy. All changes will be committed directly to the `main` branch.
- Commits will follow the conventional commit specification.
- The latest version of the Dawn theme will be used as the base.
- Unnecessary sections, snippets, and templates from the base theme will be removed to create a clean starting point.

### OpenCode's Discretion
- OpenCode has discretion on the specific tools and libraries to use for development, as long as they are compatible with the Shopify theme development environment.

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| THEME-03 | The theme must be based on Shopify's Dawn theme. | Standard Stack and Architecture Patterns sections detail using Dawn as the base. |
| THEME-04 | The project must use the Shopify CLI for local development. | Standard Stack and Code Examples sections provide commands and workflow for Shopify CLI. |
| THEME-05 | The theme must be connected to a GitHub repository for version control. | Architecture Patterns section describes the Git setup and GitHub integration process. |
</phase_requirements>

## Standard Stack

### Core
| Library / Tool | Version | Purpose | Why Standard |
|---|---|---|---|
| Shopify CLI | Latest | Core tool for local development, store connection, and running Theme Check. | It's the official and current standard for all Shopify theme and app development. |
| Dawn Theme | v15.4.1+ | Base theme for all custom development. | Shopify's official reference theme, built for performance and OS 2.0. |
| Theme Check | Latest | Linter for Shopify themes (Liquid & JSON). | The official tool for ensuring code quality, performance, and best practices. |

### Supporting
| Library / Tool | Version | Purpose | When to Use |
|---|---|---|---|
| Git | Latest | Version control. | For tracking all code changes throughout the project lifecycle. |
| Prettier | Latest | Code formatter for CSS and JS. | To maintain consistent code style across the project automatically. |

**Installation:**
```bash
# Install Shopify CLI (if not already installed)
npm install -g @shopify/cli

# Prettier for formatting
npm install --save-dev prettier
```

## Architecture Patterns

### Recommended Project Structure
The project structure will be the standard Shopify theme structure provided by Dawn. The setup process creates this automatically.

```
.
├── .github/              # Contains GitHub Actions for CI/CD
├── assets/               # All theme assets (CSS, JS, images)
├── config/               # Global theme settings (settings_schema.json, settings_data.json)
├── layout/               # Main layout files (theme.liquid)
├── locales/              # Translation files
├── sections/             # Reusable modules for pages
├── snippets/             # Reusable smaller pieces of Liquid code
├── templates/            # Page templates (JSON format)
├── .gitignore            # Specifies files for Git to ignore
└── .theme-check.yml      # Configuration for the Theme Check linter
```

### Pattern 1: Project Initialization and Setup
**What:** A step-by-step process to create the local project, connect it to the Shopify store, and initialize version control.
**When to use:** This is the first action to take when starting the phase.

**Example Steps:**
```bash
# 1. Authenticate with the target Shopify store
shopify login --store evsedm-j1.myshopify.com

# 2. Initialize a new theme using Dawn as a base
# This will clone the Dawn repository and give it a name.
shopify theme init "Nuumipet V1"

# 3. Navigate into the new theme directory
cd "nuumipet-v1"

# 4. Initialize a git repository and make the first commit
git init
git add .
git commit -m "feat: initial commit from shopify/dawn"

# 5. Create a GitHub repository and push the initial commit
# (Steps for creating repo on github.com are done in the UI)
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main

# 6. Start the local development server
# This opens a browser window with a hot-reloading preview
shopify theme dev
```

### Pattern 2: GitHub Integration for Continuous Deployment
**What:** Using Shopify's built-in GitHub app to connect a repository branch directly to a theme in the Shopify admin. This automates deployment.
**When to use:** After the initial project and repository have been created. This enables the `main` branch strategy.
**How:**
1. In the Shopify Admin, navigate to the theme library.
2. Click "Add theme" and then "Connect from GitHub".
3. Follow the prompts to authenticate with GitHub and select the repository and the `main` branch.
4. Once connected, any push to the `main` branch will automatically update the theme. Any changes made in the Theme Editor will be automatically committed back to the `main` branch.

### Anti-Patterns to Avoid
- **Editing `config/settings_data.json` manually:** This file stores the merchant's settings from the Theme Editor. It will be overwritten by the editor. Define the *options* in `config/settings_schema.json` and set defaults there.
- **Using the old "Theme Kit":** Shopify CLI is the modern, supported tool. Theme Kit is deprecated for new projects.
- **Working without version control:** Do not edit themes live or upload files manually. All changes must go through the Git workflow.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---|---|---|---|
| Code Quality | Manual style checks | `Theme Check` | Shopify's official linter catches hundreds of common errors, performance issues, and deprecations automatically. |
| Code Formatting | Manual formatting | `Prettier` | Ensures consistent styling for CSS and JS without developer effort, reducing noise in commits. |
| Local Previews | Manual file uploads | `shopify theme dev` | Provides a real-time, hot-reloading development server that is far more efficient and accurate. |
| Deployment | Manual code copy/paste | Shopify GitHub Integration | Automates the deployment process, reduces human error, and keeps the repository as the single source of truth. |

## Common Pitfalls

### Pitfall 1: Git and Theme Editor Sync Conflicts
**What goes wrong:** A developer force-pushes to the `main` branch, overwriting a change made by the merchant in the Theme Editor that was auto-committed by the GitHub integration.
**Why it happens:** The two-way sync (push to deploy, edit to commit) can be confusing. A force-push is destructive and ignores the commit history on the remote.
**How to avoid:** **Never force-push to the `main` branch.** Always `git pull` before you `git push` to ensure you have the latest commits, including any that came from the Theme Editor.
**Warning signs:** `git status` shows your branch has diverged; `git push` is rejected.

### Pitfall 2: Forgetting to Ignore CLI Files
**What goes wrong:** The `.shopify` directory, which contains local environment state, is committed to the repository.
**Why it happens:** The `.gitignore` file is missing or incorrect.
**How to avoid:** Ensure the standard Dawn `.gitignore` file is present from the start. It should contain at least `.shopify`.
**Warning signs:** Seeing a `.shopify` directory in your `git status` or pull requests.

## Code Examples

### Start the Local Development Server
```bash
# Authenticate with the store (if you haven't already)
shopify login --store evsedm-j1.myshopify.com

# Navigate to your theme directory
cd your-theme-name

# Start the dev server
# This will sync a development theme to your store and open a preview
shopify theme dev
```

### Run Theme Check Linter
```bash
# Navigate to your theme directory
cd your-theme-name

# Run a full check on the theme
shopify theme check
```

## Validation Architecture

### Test Framework
| Property | Value |
|---|---|
| Framework | Shopify Theme Check (via Shopify CLI) |
| Config file | `.theme-check.yml` |
| Quick run command | `shopify theme check path/to/file` |
| Full suite command | `shopify theme check` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|---|---|---|---|---|
| THEME-03 | Theme is based on Dawn | Smoke | `shopify theme check` | ✅ |
| THEME-04 | Shopify CLI is used for development | Manual | (Verified by workflow) | N/A |
| THEME-05 | Project is connected to GitHub | Manual | (Verified by repo existence) | ✅ |

### Sampling Rate
- **Per task commit:** `shopify theme check`
- **Per wave merge:** `shopify theme check`
- **Phase gate:** Full suite green (`shopify theme check` passes with no errors) before `/gsd-verify-work`

### Wave 0 Gaps
- [ ] Shopify CLI must be installed on the development machine (`npm install -g @shopify/cli`).
- [ ] `.theme-check.yml` config file must exist (comes default with Dawn).
- [ ] A GitHub repository must be created and connected.

## Sources

### Primary (HIGH confidence)
- [Shopify Dev Docs - Best Practices](https://shopify.dev/docs/storefronts/themes/best-practices) - Verified core workflow.
- [Shopify Dev Docs - GitHub Integration](https://shopify.dev/docs/storefronts/themes/tools/github) - Verified deployment pattern.
- [Dawn Theme GitHub Repository](https://github.com/Shopify/dawn) - Verified latest version (v15.4.1), file structure, and `.gitignore` contents.

### Secondary (MEDIUM confidence)
- Various web search results from 2025/2026 confirming that Shopify CLI, Dawn, and Theme Check are the universal modern standard.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Directly confirmed by official Shopify documentation and the Dawn repository.
- Architecture: HIGH - The setup and deployment patterns are explicitly documented by Shopify.
- Pitfalls: MEDIUM - Based on common issues described in community articles and official docs.

**Research date:** 2026-03-18
**Valid until:** 2026-09-18 (The core Shopify theme workflow is stable).
