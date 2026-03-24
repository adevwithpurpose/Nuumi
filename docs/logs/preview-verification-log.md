# Preview Verification Log

## 2026-03-23

- Verified Shopify CLI access to the target store is working earlier in this session through theme commands.
- Ran `shopify theme check` after rollout implementation changes.
- Result: no new rollout-breaking errors were introduced.

### Current warnings

- `layout/theme.liquid` remote font asset warnings are pre-existing and not introduced by this rollout.
- `sections/main-product.liquid` reports an unrelated `offset: continue` warning in the stock Dawn file and is outside the new rollout changes.

## Rollout-Specific Verification

- Shared PDP default template no longer includes the fake `purchase_mode` subscribe-and-save shell.
- Added four new product templates:
  - `templates/product.enercanis.json`
  - `templates/product.calmicollar.json`
  - `templates/product.pawpoint.json`
  - `templates/product.bundle.json`
- Existing pilot template retained:
  - `templates/product.byebark.json`
- Added product creation script and payloads aligned to template suffixes.
- EnerCanis expert section now uses the compact modern split-card layout and supports the Dr. Sara Ranocchi Instagram link setting.
