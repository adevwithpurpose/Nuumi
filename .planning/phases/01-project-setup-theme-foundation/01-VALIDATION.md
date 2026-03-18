---
phase: 1
slug: project-setup-theme-foundation
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-18
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Theme Check |
| **Config file** | `.theme-check.yml` (Wave 0 installs) |
| **Quick run command** | `shopify theme check` |
| **Full suite command** | `shopify theme check` |
| **Estimated runtime** | ~5 seconds |

---

## Sampling Rate

- **After every task commit:** Run `shopify theme check`
- **After every plan wave:** Run `shopify theme check`
- **Before `/gsd-verify-work`:** Full suite must be green
- **Max feedback latency:** 5s

---

## Per-task Verification Map

| task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 1-01-01 | 01 | 1 | THEME-03 | lint | `shopify theme check` | ✅ W0 | ⬜ pending |
| 1-01-02 | 01 | 1 | THEME-04 | lint | `shopify theme check` | ✅ W0 | ⬜ pending |
| 1-01-03 | 01 | 1 | THEME-05 | lint | `shopify theme check` | ✅ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `.theme-check.yml` — Base configuration for Shopify theme linting.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| GitHub Integration | THEME-05 | Requires external system interaction | 1. Create a new branch. 2. Make a small change. 3. Push the branch to GitHub. 4. Verify the change is reflected in the repository. |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 5s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
