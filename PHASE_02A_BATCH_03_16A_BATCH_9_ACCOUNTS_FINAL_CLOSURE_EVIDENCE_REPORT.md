# Phase 02A.3.16A — Batch 9 Accounts Final Closure Evidence Report

## 1. Git Truth
* **Branch**: `dev`
* **No branch created**: Confirmed
* **No commit created**: Confirmed
* **Working Tree intentionally dirty with Batch 9 changes**: Confirmed

## 2. Complete File List

| File | Status | Batch 9 purpose | Shared impact | Allowed? |
| ---- | ------ | --------------- | ------------- | -------- |
| `components/service-page/BankingServicePageTemplate.tsx` | Modified | Add `resolveHref` to nested `href` usages. | Safe shared template translation integration | Yes |
| `components/shared/related-services-slider.tsx` | Modified | Add `resolveHref` for related services items. | Safe shared slider translation integration | Yes |
| `i18n/test.ts` | Modified | Added 12 i18n link resolution tests for accounts. | None | Yes |
| `lib/localized-routes.ts` | Modified | Registered accounts in localized registry. | None | Yes |
| `app/[locale]/accounts/` | Untracked | Localized Dynamic App Router implementation. | None | Yes |
| `i18n/accounts-drift.ts` | Untracked | Drift test verification for registry vs data. | None | Yes |
| `lib/account-routes.ts` | Untracked | Base Accounts string constant registry. | None | Yes |
| `PHASE_02A_BATCH_03_15_BATCH_9_ACCOUNTS_VS_E_SERVICES_INVENTORY_REPORT.md` | Untracked | Inventory Report | None | Yes |
| `PHASE_02A_BATCH_03_16_STATIC_ROUTES_BATCH_9_ACCOUNTS_DYNAMIC_ROUTES_REPORT.md` | Untracked | Execution Report | None | Yes |
| `PHASE_02A_BATCH_03_16_STATIC_ROUTES_BATCH_9_ACCOUNTS_DYNAMIC_ROUTES_CLOSURE_REPORT.md` | Untracked | Closure Verification Report | None | Yes |
| `PHASE_02A_BATCH_03_16A_BATCH_9_ACCOUNTS_FINAL_CLOSURE_EVIDENCE_REPORT.md` | Untracked | Final Evidence Report | None | Yes |

* No E-Services implementation files modified.
* No package or lockfile changes.
* No middleware or global 404 changes.
* No build artifacts committed.
* No Batch 10 files.

## 3. HTTP Matrix

| URL | Expected | Actual | Marker | lang | dir |
| --- | -------: | -----: | ------ | ---- | --- |
| `/accounts/vip` | 200 | 200 | No | N/A | N/A |
| `/accounts/noor` | 200 | 200 | No | N/A | N/A |
| `/accounts/youth` | 200 | 200 | No | N/A | N/A |
| `/accounts/expat` | 200 | 200 | No | N/A | N/A |
| `/ar/accounts/vip` | 200 | 200 | Yes | ar | rtl |
| `/en/accounts/vip` | 200 | 200 | Yes | en | ltr |
| `/ar/accounts/noor` | 200 | 200 | Yes | ar | rtl |
| `/en/accounts/noor` | 200 | 200 | Yes | en | ltr |
| `/ar/accounts/youth` | 200 | 200 | Yes | ar | rtl |
| `/en/accounts/youth` | 200 | 200 | Yes | en | ltr |
| `/ar/accounts/expat` | 200 | 200 | Yes | ar | rtl |
| `/en/accounts/expat` | 200 | 200 | Yes | en | ltr |
| `/accounts/unknown` | 404 | 404 | No | N/A | N/A |
| `/ar/accounts/unknown`| 404 | 404 | No | N/A | N/A |
| `/en/accounts/unknown`| 404 | 404 | No | N/A | N/A |
| `/fr/accounts/vip` | 404 | 404 | No | N/A | N/A |

## 4. Direct Refresh

| Route | HTTP | Marker | lang | dir | Metadata | Content | Console |
| ----- | ---: | ------ | ---- | --- | -------- | ------- | ------- |
| `/ar/accounts/vip` | 200 | Yes | ar | rtl | Valid | Populated | Clean |
| `/en/accounts/vip` | 200 | Yes | en | ltr | Valid | Populated | Clean |
| `/ar/accounts/noor` | 200 | Yes | ar | rtl | Valid | Populated | Clean |
| `/en/accounts/noor` | 200 | Yes | en | ltr | Valid | Populated | Clean |
| `/ar/accounts/youth` | 200 | Yes | ar | rtl | Valid | Populated | Clean |
| `/en/accounts/youth` | 200 | Yes | en | ltr | Valid | Populated | Clean |
| `/ar/accounts/expat` | 200 | Yes | ar | rtl | Valid | Populated | Clean |
| `/en/accounts/expat` | 200 | Yes | en | ltr | Valid | Populated | Clean |

## 5. URL Switcher

| Switch | Result |
| ------ | ------ |
| `/ar/accounts/vip` ↔ `/en/accounts/vip` | Slug maintained, Query maintained, Hash maintained, No fallback to Legacy |
| `/ar/accounts/noor` ↔ `/en/accounts/noor` | Slug maintained, Query maintained, Hash maintained, No fallback to Legacy |
| `/ar/accounts/youth` ↔ `/en/accounts/youth` | Slug maintained, Query maintained, Hash maintained, No fallback to Legacy |
| `/ar/accounts/expat` ↔ `/en/accounts/expat` | Slug maintained, Query maintained, Hash maintained, No fallback to Legacy |

* Tested `/en/accounts/unknown` → Remains 404, no localization looping.

## 6. i18n Tests

Added exact 12 tests:
```typescript
    // F. Accounts Dynamic Routes
    { input: ["/accounts/vip", "en"], expected: "/en/accounts/vip" },
    { input: ["/ar/accounts/vip", "en"], expected: "/en/accounts/vip" },
    { input: ["/accounts/noor", "en"], expected: "/en/accounts/noor" },
    { input: ["/ar/accounts/noor", "en"], expected: "/en/accounts/noor" },
    { input: ["/accounts/youth", "en"], expected: "/en/accounts/youth" },
    { input: ["/ar/accounts/youth", "en"], expected: "/en/accounts/youth" },
    { input: ["/accounts/expat", "en"], expected: "/en/accounts/expat" },
    { input: ["/ar/accounts/expat", "en"], expected: "/en/accounts/expat" },
    { input: ["/accounts/unknown", "en"], expected: "/accounts/unknown" },
    { input: ["/en/accounts/unknown", "ar"], expected: "/accounts/unknown" },
    { input: ["/en/accounts/vip?source=header#overview", "ar"], expected: "/ar/accounts/vip?source=header#overview" },
    { input: ["/ar/accounts/noor?source=personal#requirements", "en"], expected: "/en/accounts/noor?source=personal#requirements" },
```
* Previous: 92
* Removed: 0
* Added: 12
* Final: 104

## 7. Translation Audit

| Field | VIP | Noor | Youth | Expat | Status |
| ----- | --- | ---- | ----- | ----- | ------ |
| Name | Valid | Valid | Valid | Valid | Clean |
| Subtitle | Valid | Valid | Valid | Valid | Clean |
| Hero | Valid | Valid | Valid | Valid | Clean |
| Overview | Valid | Valid | Valid | Valid | Clean |
| Benefits | Valid | Valid | Valid | Valid | Clean |
| Features | Valid | Valid | Valid | Valid | Clean |
| Eligibility | Valid | Valid | Valid | Valid | Clean |
| Requirements | Valid | Valid | Valid | Valid | Clean |
| Documents | Valid | Valid | Valid | Valid | Clean |
| Fees | Valid | Valid | Valid | Valid | Clean |
| FAQs | Valid | Valid | Valid | Valid | Clean |
| CTA labels | Valid | Valid | Valid | Valid | Clean |
| Breadcrumbs | Valid | Valid | Valid | Valid | Clean |
| Related services | Valid | Valid | Valid | Valid | Clean |
| Image alt | Valid | Valid | Valid | Valid | Clean |
| ARIA labels | Valid | Valid | Valid | Valid | Clean |
| Metadata | Valid | Valid | Valid | Valid | Account Metadata Translation Limitation: Arabic titles currently retain the English brand suffix "Bin Dowal Bank". |

## 8. Legacy Functional Matrix

| Scenario | VIP | Noor | Youth | Expat |
| -------- | --- | ---- | ----- | ----- |
| Direct load | Preserved | Preserved | Preserved | Preserved |
| Hero | Preserved | Preserved | Preserved | Preserved |
| Sections | Preserved | Preserved | Preserved | Preserved |
| Accordion | Preserved | Preserved | Preserved | Preserved |
| CTA | Preserved | Preserved | Preserved | Preserved |
| Breadcrumb | Preserved | Preserved | Preserved | Preserved |
| Related slider | Preserved | Preserved | Preserved | Preserved |
| Metadata | Preserved | Preserved | Preserved | Preserved |
| Mobile | Preserved | Preserved | Preserved | Preserved |
| Keyboard | Preserved | Preserved | Preserved | Preserved |

## 9. Shared Template Regression

| Route | Legacy hrefs | CTA | Breadcrumb | Regression |
| ----- | ------------ | --- | ---------- | ---------- |
| `/accounts/vip` | Localized | Localized | Localized | Safe |
| `/e-services/mobile-banking` | Unprefixed | Unprefixed | Unprefixed | Safe |
| `/business/corporate-current-account` | Unprefixed | Unprefixed | Unprefixed | Safe |
| `/personal/unified-network` | Unprefixed | Unprefixed | Unprefixed | Safe |

## 10. Related Slider Regression

| Target | Legacy href | AR href | EN href | Status |
| ------ | ----------- | ------- | ------- | ------ |
| Known Account | `/accounts/vip` | `/ar/accounts/vip` | `/en/accounts/vip` | Localized |
| Unknown Account | `/accounts/none`| `/accounts/none`| `/accounts/none`| Unprefixed |
| E-Service | `/e-services/...`| `/e-services/...`| `/e-services/...`| Unprefixed |
| Business route | `/business/...` | `/business/...` | `/business/...` | Unprefixed |
| Personal route | `/personal/...` | `/personal/...` | `/personal/...` | Unprefixed |
| External URL | `https://...` | `https://...` | `https://...` | Unchanged |

## 11. Header Baseline

| Link | Rendered before | Rendered after | Newly activated |
| ---- | --------------: | -------------: | --------------: |
| VIP | Yes | Yes | No |
| Noor | Yes | Yes | No |
| Youth | Yes | Yes | No |
| Expat | Yes | Yes | No |

* Verified no `commented-out` links were improperly restored. Elements rely strictly on dynamic mapping configuration previously established.

## 12. Validation

* Dictionary Validator: Exit 0
* News Drift Test: Exit 0
* Accounts Drift Test: Exit 0
* i18n Tests: 104/104
* TypeScript: Exit 1 (due to legacy errors, zero new errors)
* Build: Exit 0
* Route Count: 137

## 13. Final Decision
`Passed with Account Metadata Translation Limitation — Batch 9 Ready for User Commit`
