# Nuumipet Product Rollout Matrix

This file is the working control surface for the five-product template rollout.

## Status Key

- `not_started`
- `in_progress`
- `ready_for_review`
- `complete`
- `manual_followup`

## Rollout Table

| Product | Handle | Source URL | Local data file | Template target | Product type | Vendor | Template build | Media | FAQ | Proof | QA | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EnerCanis Gut Health Supplement | `enercanis-gut-health-supplement` | `https://funnels-build.thisisatestsiteonly.com/1efef29f-0d50-4911-897e-b86a970a2d4a/pdp-ec-nv3` | `docs/products/enercanis.md` | `product.enercanis.json` | `Pet Supplement` | `Nuumipet` | `complete` | `manual_followup` | `complete` | `complete` | `complete` | Locked reference PDP for future product pages; template is the baseline for next product rollouts. |
| ByeBark Ultrasonic Device | `byebark-ultrasonic-device` | `https://funnels-build.thisisatestsiteonly.com/b7ae061e-d35b-43ad-8ff5-200b7c38d448/pdp-byebark` | `docs/products/byebark.md` | `product.byebark.json` | `Pet Device` | `Nuumipet` | `complete` | `manual_followup` | `complete` | `complete` | `complete` | Existing pilot template retained and aligned to the shared PDP system. |
| CalmiCollar | `calmi-collar` | `https://funnels-build.thisisatestsiteonly.com/89f23665-032b-4c9c-9201-27d8451c6546/26c598eb-c11a-44c6-bb9b-a72fc0b3533e.html` | `docs/products/calmicollar.md` | `product.calmicollar.json` | `Pet Wellness Collar` | `Nuumipet` | `complete` | `manual_followup` | `complete` | `complete` | `complete` | Template is complete; claim and media review remain merchant-side follow-up. |
| PawPoint Ear Wipes | `pawpoint-ear-wipes` | `https://funnels-build.thisisatestsiteonly.com/1efef29f-0d50-4911-897e-b86a970a2d4a/pdp-pawpoint` | `docs/products/pawpoint.md` | `product.pawpoint.json` | `Pet Hygiene` | `Nuumipet` | `complete` | `manual_followup` | `complete` | `complete` | `complete` | Template is complete; imagery remains manual follow-up. |
| Nuumipet Core Wellness Bundle | `nuumipet-core-wellness-bundle` | `https://funnels-build.thisisatestsiteonly.com/1efef29f-0d50-4911-897e-b86a970a2d4a/nd-fb-lwf` | `docs/products/core-wellness-bundle.md` | `product.bundle.json` | `Pet Wellness Bundle` | `Nuumipet` | `complete` | `manual_followup` | `complete` | `complete` | `complete` | Template is complete; exact bundle SKU setup and media population are handled manually. |

## Binary Acceptance Targets

- All five rows have non-empty `Handle`, `Source URL`, `Local data file`, and `Template target` values.
- No two products share the same handle.
- Every product has a corresponding file under `docs/products/`.
- Every product template row is `complete` once the template, FAQ/proof content, and repo-side QA are complete.
