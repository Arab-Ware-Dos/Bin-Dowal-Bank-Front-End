# Phase 02A.3.16 — Batch 9 Accounts Dynamic Routes Final Closure Verification

## 1. Git Truth
* **Branch**: `dev`
* **No branch created**: Confirmed
* **No commit created**: Confirmed
* **Working Tree intentionally dirty with Batch 9 changes**: Confirmed

## 2. Complete File List

| File | Status | Batch 9 purpose | Shared impact | Allowed? |
| ---- | ------ | --------------- | ------------- | -------- |
| `components/service-page/BankingServicePageTemplate.tsx` | Modified | Add `resolveHref` to all nested `href` usages. | Low: Re-applies safe mode-aware `resolveHref` | Yes |
| `components/shared/related-services-slider.tsx` | Modified | Add `resolveHref` for mode-aware linked slides. | Low: Affects related services section | Yes |
| `i18n/test.ts` | Modified | Added 12 tests for accounts dynamic routes logic. | None | Yes |
| `lib/localized-routes.ts` | Modified | Exact registry of localized accounts routes added. | None | Yes |
| `app/[locale]/accounts/` | Untracked | The newly implemented `[locale]` dynamic routes. | None | Yes |
| `i18n/accounts-drift.ts` | Untracked | Automated registry vs data drift test suite. | None | Yes |
| `lib/account-routes.ts` | Untracked | Extracted route definitions and pure slug array. | None | Yes |
| `PHASE_02A_BATCH_03_15_BATCH_9_ACCOUNTS_VS_E_SERVICES_INVENTORY_REPORT.md` | Untracked | Documentation | None | Yes |
| `PHASE_02A_BATCH_03_16_STATIC_ROUTES_BATCH_9_ACCOUNTS_DYNAMIC_ROUTES_REPORT.md` | Untracked | Documentation | None | Yes |

* No E-Services implementation files modified.
* No package changes or Lockfile changes.
* No Middleware or Global 404 changes.
* No browser or build artifacts committed.
* No Batch 10 files.

## 3. Account Data Integrity

| Slug | Category | AR Name | EN Name | Image | Data changed? |
| ---- | -------- | ------- | ------- | ----- | ------------- |
| `vip` | accounts | حساب كبار العملاء (VIP) | VIP Account | `/images/products/vip-account.jpg` | No |
| `noor` | accounts | حساب نور | Noor Account | `/images/products/noor-account.jpg` | No |
| `youth` | accounts | حساب الشباب | Youth Account | `/images/products/youth-account.jpg` | No |
| `expat` | accounts | حساب المغترب | Expat Account | `/images/products/expat-account.jpg` | No |

## 4. Exact Registry
* Expected: `/accounts/vip`, `/accounts/noor`, `/accounts/youth`, `/accounts/expat`.
* All are exactly registered.
* `/accounts`, `/accounts/*`, and wildcard prefixes are explicitly **ABSENT**.
* Unknowns like `/accounts/unknown` effectively bypass the localized registry.

## 5. Accounts Drift Test
Exit Code: `0`
* 1. Count equals 4: Yes
* 2. Slugs unique: Yes
* 3. No empty slug: Yes
* 4. No slug containing `/`: Yes
* 5. No slug starts/ends with slash: Yes
* 6. Slug exists in data: Yes
* 7. Exact registry path exists: Yes
* 8. No orphan registry path: Yes
* 9. No E-Services slug in Account registry: Yes
* 10. Data/Registry match: Yes

## 6. Dynamic Params Contract
The dynamic components correctly utilize typed `Promise<{ locale: string, slug: string }>` properties inline with Next.js App Router. None of the forbidden workarounds are present.

## 7. Static Params Combinations

| Locale | Slug | Generated |
| ------ | ---- | --------: |
| ar | vip | Yes |
| en | vip | Yes |
| ar | noor | Yes |
| en | noor | Yes |
| ar | youth | Yes |
| en | youth | Yes |
| ar | expat | Yes |
| en | expat | Yes |

No `fr`, no `unknown`, no duplicates.

## 8. Metadata

| Slug | AR Title | EN Title | AR Description | EN Description | Robots |
| ---- | -------- | -------- | -------------- | -------------- | ------ |
| `vip` | حساب كبار العملاء (VIP) \| Bin Dowal Bank | VIP Account \| Bin Dowal Bank | يوفر لك حساب كبار العملاء مجموعة من المزايا... | The VIP account provides you with a range... | `noindex, nofollow` |
| `noor` | حساب نور \| Bin Dowal Bank | Noor Account \| Bin Dowal Bank | حساب نور مصمم خصيصاً لتلبية احتياجات المرأة... | Noor account is specially designed to meet... | `noindex, nofollow` |
| `youth` | حساب الشباب \| Bin Dowal Bank | Youth Account \| Bin Dowal Bank | حساب مصمم خصيصاً للشباب لتلبية طموحاتهم... | An account specially designed for youth to... | `noindex, nofollow` |
| `expat` | حساب المغترب \| Bin Dowal Bank | Expat Account \| Bin Dowal Bank | حلول مصرفية متكاملة للمغتربين اليمنيين... | Comprehensive banking solutions for Yemeni... | `noindex, nofollow` |

* `Account Metadata Translation Limitation`: Appends "Bin Dowal Bank" (in English) correctly based on inherited structure logic, pending future full generic string localization.

## 9. Route Markers
Present on all valid translated `app/[locale]/accounts/[slug]/page.tsx` elements:
`data-localized-route="accounts/[slug]"`, `data-account-slug`, `data-locale`.
Absent on legacy paths.

## 10. Header Baseline
Comparing the state to prior `Batch 8` closure:

| Link text | Before Batch 9 | After Batch 9 | Newly activated? |
| --------- | -------------- | ------------- | ---------------: |
| VIP Account | Not explicitly drawn via hardcodes (resolved generically from JSON) | Generic JSON maps localized | No |
| Noor Account | Generic JSON map | Generic JSON map | No |
| Youth Account | Generic JSON map | Generic JSON map | No |
| Expat Account | Generic JSON map | Generic JSON map | No |

## 11. Header Runtime

| Link | Legacy href | AR href | EN href |
| ---- | ----------- | ------- | ------- |
| VIP Account | `/accounts/vip` | `/ar/accounts/vip` | `/en/accounts/vip` |
| Noor Account | `/accounts/noor` | `/ar/accounts/noor` | `/en/accounts/noor` |
| Youth Account | `/accounts/youth` | `/ar/accounts/youth` | `/en/accounts/youth` |
| Expat Account | `/accounts/expat` | `/ar/accounts/expat` | `/en/accounts/expat` |

## 12. Personal Banking Baseline

| Slug | Rendered before? | Rendered after? | Legacy href | AR href | EN href |
| ---- | ---------------: | --------------: | ----------- | ------- | ------- |
| vip | Yes | Yes | `/accounts/vip` | `/ar/accounts/vip` | `/en/accounts/vip` |
| noor | Yes | Yes | `/accounts/noor` | `/ar/accounts/noor` | `/en/accounts/noor` |
| youth | Yes | Yes | `/accounts/youth` | `/ar/accounts/youth` | `/en/accounts/youth` |
| expat | Yes | Yes | `/accounts/expat` | `/ar/accounts/expat` | `/en/accounts/expat` |

## 13. Shared Template Diff

| Link/CTA | Base target | Internal/External | Legacy | AR | EN |
| -------- | ----------- | ----------------- | ------ | -- | -- |
| `primaryHref` | `data.primaryCta.href` | Internal | Untouched | Translated | Translated |
| `secondaryHref`| `data.secondaryCta.href` | Internal | Untouched | Translated | Translated |
| `Contact CTA` | `/contact` | Internal | Untouched | Translated | Translated |
| `nextStep CTA` | `/contact` | Internal | Untouched | Translated | Translated |

Uses exact `mode === "url"` routing conditional checking for safe fallbacks.

## 14. Shared Template Regression

| Route | Legacy hrefs preserved? | CTA behavior | Breadcrumb | Regression |
| ----- | ----------------------: | ------------ | ---------- | ---------- |
| `/accounts/vip` | Yes | Resolves accurately | Unchanged | None |
| `/e-services/mobile-banking` | Yes | Unchanged | Unchanged | None |
| `/business/corporate-current-account` | Yes | Unchanged | Unchanged | None |

## 15. Related Slider Diff

| Related target | Legacy href | AR href | EN href | Expected |
| -------------- | ----------- | ------- | ------- | -------- |
| Known Account | `/accounts/vip` | `/ar/accounts/vip` | `/en/accounts/vip` | Expected translations matching `resolveHref` implementation applied |
| Unmigrated route | `/business/..`| `/business/..`| `/business/..`| Unchanged Legacy prefix fallback |

## 16. Breadcrumbs

| Slug | Legacy Home | Legacy Parent | AR Home | AR Parent | EN Home | EN Parent |
| ---- | ----------- | ------------- | ------- | --------- | ------- | --------- |
| vip | `/` | `/personal-banking` | `/ar` | `/ar/personal-banking` | `/en` | `/en/personal-banking` |
| noor | `/` | `/personal-banking` | `/ar` | `/ar/personal-banking` | `/en` | `/en/personal-banking` |
| youth | `/` | `/personal-banking` | `/ar` | `/ar/personal-banking` | `/en` | `/en/personal-banking` |
| expat | `/` | `/personal-banking` | `/ar` | `/ar/personal-banking` | `/en` | `/en/personal-banking` |

## 17. CTA Matrix

| Slug | CTA Label | Base Target | Legacy | AR | EN |
| ---- | --------- | ----------- | ------ | -- | -- |
| vip | افتح حسابك الآن | `/contact` | `/contact` | `/ar/contact` | `/en/contact` |
| noor | افتح حسابك الآن | `/contact` | `/contact` | `/ar/contact` | `/en/contact` |
| youth | افتح حسابك الآن | `/contact` | `/contact` | `/ar/contact` | `/en/contact` |
| expat | افتح حسابك الآن | `/contact` | `/contact` | `/ar/contact` | `/en/contact` |

## 18. Translation Audit

| Field | VIP | Noor | Youth | Expat | Status |
| ----- | --- | ---- | ----- | ----- | ------ |
| Name | AR/EN Clean | AR/EN Clean | AR/EN Clean | AR/EN Clean | Passed |
| Overview | AR/EN Clean | AR/EN Clean | AR/EN Clean | AR/EN Clean | Passed |
| Requirements | AR/EN Clean | AR/EN Clean | AR/EN Clean | AR/EN Clean | Passed |

No unexpected Arabic translation leaks within `EN` variants.

## 19. Legacy Functional Matrix

| Scenario | VIP | Noor | Youth | Expat |
| -------- | --- | ---- | ----- | ----- |
| Direct load | Preserved | Preserved | Preserved | Preserved |
| Hero | Preserved | Preserved | Preserved | Preserved |
| Sections | Preserved | Preserved | Preserved | Preserved |
| Metadata | Preserved | Preserved | Preserved | Preserved |

## 20. Localized Functional Matrix

| Slug | AR Load | EN Load | Translation | Metadata | Breadcrumb | CTA | Related |
| ---- | ------- | ------- | ----------- | -------- | ---------- | --- | ------- |
| vip | Statically renders | Statically renders | Correct | Correct | Localized | Localized | Localized |
| noor | Statically renders | Statically renders | Correct | Correct | Localized | Localized | Localized |
| youth | Statically renders | Statically renders | Correct | Correct | Localized | Localized | Localized |
| expat | Statically renders | Statically renders | Correct | Correct | Localized | Localized | Localized |

## 21. URL Switcher
Maintains state efficiently:
* Valid: `/ar/accounts/vip` ↔ `/en/accounts/vip`
* Hash/Query: Transferred seamlessly.
* Invalid fallback safely ignored.

## 22. i18n Tests
Previous: 92
Added: 12
Final: 104
* Validated fully via `npx tsx i18n/test.ts`.
* Tests include: Accounts valid array, fallback queries, query param retention, hash retention. 

## 23. HTTP Matrix

| URL | Expected | Actual | Marker | lang | dir |
| --- | -------: | -----: | ------ | ---- | --- |
| `/accounts/vip` | 200 | 200 | No | N/A | N/A |
| `/en/accounts/noor` | 200 | 200 | Yes | en | ltr |
| `/ar/accounts/youth` | 200 | 200 | Yes | ar | rtl |
| `/accounts/unknown` | 404 | 404 | No | N/A | N/A |

## 24. Direct Refresh

| Route | HTTP | Marker | lang | dir | Metadata | Content | Console |
| ----- | ---: | ------ | ---- | --- | -------- | ------- | ------- |
| All Translated | 200 | Yes | Expected | Expected | Accurate | Fully populated | Clean |

## 25. Client Bundle

| Route | Full banking dataset in client? | E-Services data in client? | Finding |
| ----- | ------------------------------: | -------------------------: | ------- |
| `/en/accounts/vip` | No | No | Purely isolated via React Server Component prop drill methodology down to Client template layer. Clean resolution. |

## 26. TypeScript
Exit Code: `1` (Pre-existing inheritances)
Batch 9 explicitly introduces `0` TypeScript regressions.

## 27. Validator
Dictionary Validator: Exit 0

## 28. News Drift
News Drift Test: Exit 0

## 29. Accounts Drift
Accounts Drift Test: Exit 0

## 30. Build and Route Count
Build Exit Code: 0
Route Count: 137 routes explicitly.

## 31. Console and Hydration
Zero mismatches. `Shared component` implementation isolates the locale mode gracefully without generating client side sync gaps.

## 32. Regression
* E-Services remain legacy. `/e-services/bindawal-business` limitation isolated.
* No shared layout changes impacted previously completed localization scopes (i.e., news or generic cards).

## 33. Git Final State
Working tree remains properly dirtied inside the `dev` branch with exact intended modifications.

## 34. Open Issues
None triggered by Batch 9. `Account Metadata Translation Limitation` on the word "Bank" inherits general translation tasks mapping deferred appropriately.

## 35. Final Decision
`Passed with Pre-existing TypeScript Limitations — Batch 9 Ready for User Commit`
