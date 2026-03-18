---
phase: 2
slug: homepage-sections
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-18
---

# Phase 2 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Cypress (End-to-End) |
| **Config file** | `cypress.config.js` |
| **Quick run command** | `npx cypress run --spec \"cypress/e2e/homepage.cy.js\"` |
| **Full suite command** | `npx cypress run` |
| **Estimated runtime** | ~60 seconds |

---

## Sampling Rate

- **After every task commit:** Run `shopify theme check`
- **After every plan wave:** Run `npx cypress run --spec \"cypress/e2e/homepage.cy.js\"`
- **Before \`/gsd-verify-work\`:** Full suite must be green
- **Max feedback latency:** 60s

---

## Per-task Verification Map

| task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 2-01-01 | 01 | 1 | HOME-01 | lint | `grep -q \".nuumi-button--gold\" assets/nuumi-base.css` | ✅ | ⬜ pending |
| 2-01-02 | 01 | 1 | HOME-02 | lint | `grep -q \"check_mark\" snippets/nuumi-icons.liquid` | ✅ | ⬜ pending |
| 2-01-03 | 01 | 1 | HOME-01 | unit | `test -f cypress/e2e/homepage.cy.js` | ❌ W0 | ⬜ pending |
| 2-02-01 | 02 | 2 | HOME-09 | lint | `test -f sections/nuumi-announcement-bar.liquid` | ✅ | ⬜ pending |
| 2-02-02 | 02 | 2 | HOME-01 | lint | `grep -q \"for block in section.blocks\" sections/nuumi-home-hero.liquid` | ✅ | ⬜ pending |
| 2-02-03 | 02 | 2 | HOME-01 | e2e | `npx cypress run --spec \"cypress/e2e/homepage.cy.js\"` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `cypress.config.js` — Cypress configuration.
- [ ] `cypress/e2e/homepage.cy.js` — Test suite for homepage sections.
- [ ] `npm install cypress --save-dev` — Install test framework.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Theme Editor Preview | THEME-02 | External UI | 1. Open Theme Editor. 2. Edit Hero text. 3. Verify change in preview. |

---

## Validation Sign-Off

- [ ] All tasks have \`<automated>\` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 60s
- [ ] \`nyquist_compliant: true\` set in frontmatter

**Approval:** pending
