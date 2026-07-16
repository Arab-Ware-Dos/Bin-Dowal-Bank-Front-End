# Phase 02A.3.16 — Static Routes Batch 9 Accounts Dynamic Routes Report

## 1. Executive Summary
Batch 9 successfully migrated the Accounts dynamic route family (`/accounts/[slug]`). The migration leverages Next.js App Router's `generateStaticParams` for fully static export, localized `generateMetadata`, and a centralized account slug registry, ensuring exact match generation without polluting the build with missing or unrelated product slugs. No existing TypeScript errors were introduced, and all i18n tests pass. 

## 2. Git Policy
The migration adhered strictly to the Git policy.
* **Branch**: `dev`
* **Status**: Working tree intentionally dirty with Batch 9 changes. No commit, push, merge, or rebase operations were performed.

## 3. Baseline
* Dictionary Validator: Exit 0
* News Drift Test: Exit 0
* i18n Tests: 92/92
* TypeScript: Exit 1 (due to pre-existing inherited errors only)
* Build: Exit 0
* Route Count: 129

## 4. Account Data Audit
The `data/banking-services/banking-services.ts` file was analyzed. The `accounts` category contains exactly 4 distinct slugs.

| Slug | AR Name | EN Name | AR Description | EN Description | Category | Image |
| ---- | ------- | ------- | -------------- | -------------- | -------- | ----- |
| `vip` | حساب كبار العملاء (VIP) | VIP Account | يوفر لك حساب كبار العملاء مجموعة من المزايا المصممة خصيصاً لتناسب نمط حياتك. | The VIP account provides you with a range of benefits specially designed to suit your lifestyle. | accounts | `/images/products/vip-account.jpg` |
| `noor` | حساب نور | Noor Account | حساب نور مصمم خصيصاً لتلبية احتياجات المرأة العصرية | Noor account is specially designed to meet the needs of the modern woman | accounts | `/images/products/noor-account.jpg` |
| `youth` | حساب الشباب | Youth Account | حساب مصمم خصيصاً للشباب لتلبية طموحاتهم | An account specially designed for youth to meet their ambitions | accounts | `/images/products/youth-account.jpg` |
| `expat` | حساب المغترب | Expat Account | حلول مصرفية متكاملة للمغتربين اليمنيين | Comprehensive banking solutions for Yemeni expatriates | accounts | `/images/products/expat-account.jpg` |

## 5. Slug Inventory
Number of known account slugs confirmed: **4**.
* No empty slugs.
* No slashes in slugs.
* No E-Services slugs mixed in.

## 6. Simulated Async Contract
Examined `services/banking-service-pages.ts`.

| Function | Async Mechanism | Network | Build-safe | Modified? |
| -------- | --------------- | ------: | ---------: | --------: |
| `getBankingServiceBySlug` | `Promise.resolve` / timeout simulation (legacy wrapper pattern) | No | Yes | No |
| `getAllBankingServicesSlugs` | `Promise.resolve` | No | Yes | No |

## 7. Account Registry
Created `lib/account-routes.ts` defining `ACCOUNT_SLUGS` statically.
Contains exact static slugs without heavy data bundles.

## 8. Exact Localized Registry
Updated `lib/localized-routes.ts` to include exactly `...ACCOUNT_ROUTE_PATHS`.
Prefix matching was completely avoided.

## 9. Accounts Drift Test
Created and executed `i18n/accounts-drift.ts`.
Validates the data against the `ACCOUNT_SLUGS` array and registry.
Result: **Exit 0 (Passed)**.

## 10. Legacy Account Route
`app/(legacy)/accounts/[slug]/page.tsx` was verified.
* Maintains generating 4 legacy routes via `generateStaticParams`.
* Metadata preserved.
* Fallbacks to `notFound()` correctly.

## 11. Localized Account Route
Created `app/[locale]/accounts/[slug]/page.tsx`.
Server Component utilizing `getBankingServiceBySlug`. Explicit 404 validation is in place for unknown locales and unknown account slugs.

## 12. Dynamic Params
Properly extracted from `Promise<{ locale: string, slug: string }>`. Explicitly bounds validation.

## 13. `generateStaticParams`
Correctly mapped locales against `ACCOUNT_SLUGS`.

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

## 14. Metadata
`generateMetadata` dynamically resolves `title` and `description` from the English/Arabic datasets based on `locale`. Fallback is safely typed. Included `robots: { index: false, follow: false }` for localized variants.

| Slug | AR Title | EN Title | AR Description | EN Description | OG Image |
| ---- | -------- | -------- | -------------- | -------------- | -------- |
| vip | حساب كبار العملاء (VIP) \| Bin Dowal Bank | VIP Account \| Bin Dowal Bank | يوفر لك حساب كبار العملاء... | The VIP account provides you... | N/A |
| noor | حساب نور \| Bin Dowal Bank | Noor Account \| Bin Dowal Bank | حساب نور مصمم خصيصاً لتلبية... | Noor account is specially designed... | N/A |
| youth | حساب الشباب \| Bin Dowal Bank | Youth Account \| Bin Dowal Bank | حساب مصمم خصيصاً للشباب... | An account specially designed for youth... | N/A |
| expat | حساب المغترب \| Bin Dowal Bank | Expat Account \| Bin Dowal Bank | حلول مصرفية متكاملة للمغتربين... | Comprehensive banking solutions... | N/A |

## 15. Route Markers
Data attributes successfully added to `app/[locale]/accounts/[slug]/page.tsx`:
`data-localized-route="accounts/[slug]"`, `data-account-slug={slug}`, `data-locale={locale}`.

## 16. BankingServicePageTemplate links
Updated `BankingServicePageTemplate.tsx` internal CTAs and `nextStep` links with `resolveHref` powered by `getLocalizedHref`. 

## 17. Breadcrumbs
Localized pages use the exact hierarchy per product dataset.

| Slug | Legacy Parent | AR Parent | EN Parent |
| ---- | ------------- | --------- | --------- |
| vip | /personal-banking | /ar/personal-banking | /en/personal-banking |
| noor | /personal-banking | /ar/personal-banking | /en/personal-banking |
| youth | /personal-banking | /ar/personal-banking | /en/personal-banking |
| expat | /personal-banking | /ar/personal-banking | /en/personal-banking |

## 18. RelatedServicesSlider
Updated `components/shared/related-services-slider.tsx` to utilize `resolveHref(service.href)`. Known account links get appropriately localized; unknown/E-services remain untransformed fallback paths.

| Target | Legacy href | AR href | EN href |
| ------ | ----------- | ------- | ------- |
| Known Account | `/accounts/vip` | `/ar/accounts/vip` | `/en/accounts/vip` |
| E-Service | `/e-services/...` | `/e-services/...` | `/e-services/...` |
| Business route | `/business/...` | `/business/...` | `/business/...` |
| External URL | `https://...` | `https://...` | `https://...` |

## 19. Header Integration
`header.tsx` correctly propagates `resolveHref` dynamically onto menu links populated by `data/navigation.ts`.

| Header Link | Legacy href | AR href | EN href |
| ----------- | ----------- | ------- | ------- |
| VIP Account | `/accounts/vip` | `/ar/accounts/vip` | `/en/accounts/vip` |
| Noor Account| `/accounts/noor`| `/ar/accounts/noor`| `/en/accounts/noor`|
| Youth Acc.  | `/accounts/youth`| `/ar/accounts/youth`| `/en/accounts/youth`|
| Expat Acc.  | `/accounts/expat`| `/ar/accounts/expat`| `/en/accounts/expat`|

## 20. Personal Banking Integration
Verified presence on `/personal-banking` hub pages.

| Slug | Legacy href | AR href | EN href | Rendered? |
| ---- | ----------- | ------- | ------- | --------- |
| vip | `/accounts/vip` | `/ar/accounts/vip` | `/en/accounts/vip` | Yes |
| noor | `/accounts/noor` | `/ar/accounts/noor` | `/en/accounts/noor` | Yes |
| youth | `/accounts/youth` | `/ar/accounts/youth` | `/en/accounts/youth` | Yes |
| expat | `/accounts/expat` | `/ar/accounts/expat` | `/en/accounts/expat` | Yes |

## 21. CTA Integration
All static CTAs inside account routes are resolving cleanly.

| Slug | CTA Label | Base Target | Legacy | AR | EN |
| ---- | --------- | ----------- | ------ | -- | -- |
| vip | Open Account / افتح حسابك الآن | `/contact` | `/contact` | `/ar/contact` | `/en/contact` |
| noor | Open Account / افتح حسابك الآن | `/contact` | `/contact` | `/ar/contact` | `/en/contact` |

## 22. Translation Audit
Translations are securely verified; no data modification was necessary.

| Field | VIP | Noor | Youth | Expat | AR/EN Status |
| ----- | --- | ---- | ----- | ----- | ------------ |
| Name | Yes | Yes | Yes | Yes | Correctly localized |
| Overview | Yes | Yes | Yes | Yes | Correctly localized |
| Benefits | Yes | Yes | Yes | Yes | Correctly localized |

## 23. Legacy Functional Matrix
The legacy application remains untouched functionally.

| Slug | DOM Equivalent | Functional Equivalent | Metadata Equivalent | Material Regression |
| ---- | -------------- | --------------------- | ------------------- | ------------------- |
| vip | Yes | Yes | Yes | None |
| noor | Yes | Yes | Yes | None |
| youth | Yes | Yes | Yes | None |
| expat | Yes | Yes | Yes | None |

## 24. Localized Functional Matrix

| Slug | AR Load | EN Load | Translation | Breadcrumb | CTA | Related |
| ---- | ------- | ------- | ----------- | ---------- | --- | ------- |
| vip | Yes | Yes | Yes | Yes | Yes | Yes |
| noor | Yes | Yes | Yes | Yes | Yes | Yes |
| youth | Yes | Yes | Yes | Yes | Yes | Yes |
| expat | Yes | Yes | Yes | Yes | Yes | Yes |

## 25. URL Switcher
Switches efficiently between active route pairs without layout shift or incorrect language pop-ins.
* `/ar/accounts/vip` ↔ `/en/accounts/vip`

## 26. Query and Hash
Preserved safely by `getLocalizedHref` function.

## 27. i18n Tests
Successfully added 12 tests inside `i18n/test.ts` for exact and unknown path fallback paths.
* Previous: 92
* Added: 12
* Expected Final: 104
* Actual Final: 104

## 28. Static Params Test
Exactly 8 static permutations generated via `.flatMap`.

| Locale | Slug | Generated |
| ------ | ---- | --------: |
| ar | vip | Yes |
| en | noor | Yes |
| fr | vip | No |

## 29. HTTP Matrix

| URL | Expected | Actual | Marker | lang | dir |
| --- | -------: | -----: | ------ | ---- | --- |
| `/accounts/vip` | 200 | 200 | No | - | - |
| `/en/accounts/vip` | 200 | 200 | Yes | en | ltr |
| `/ar/accounts/noor` | 200 | 200 | Yes | ar | rtl |
| `/accounts/unknown` | 404 | 404 | No | - | - |
| `/fr/accounts/vip` | 404 | 404 | No | - | - |

## 30. Direct Refresh
Direct refresh successfully serves the statically generated localized HTML.

## 31. TypeScript
Project TypeScript Check: Failed only because of errors proven to exist before Batch 9.
Batch 9: No new TypeScript errors.

## 32. Dictionary Validator
Dictionary Validator: Exit 0

## 33. News Drift Test
News Drift Test: Exit 0

## 34. Accounts Drift Test
Accounts Drift Test: Exit 0

## 35. Build
Build completed successfully.
Build Exit Code: 0

## 36. Static Export
Verified that Next.js statically exported the newly added paths accurately with exact path names. No static bailout warnings.

## 37. Route Count
Before Batch 9: 129
Localized account detail routes added: 8
Actual Route Count: 137

## 38. Client Bundle
The component bounds keep server data exclusively server-side.

| Route | Full Banking Dataset? | E-Services Data Loaded? | Heavy Client Dependencies | Finding |
| ----- | --------------------: | ----------------------: | ------------------------- | ------- |
| `/en/accounts/vip`| No | No | Framer Motion (inherited) | Safe |

## 39. Console and Hydration
Zero layout shift or Hydration errors observed during manual DOM audits.

## 40. CSS and Accessibility
Accessibility markers remained unchanged from Legacy implementations. RTL layouts load successfully on `/ar`.

## 41. Regression
Core features and earlier migration sets remain structurally unimpacted. E-Services remain legacy. `/e-services/bindawal-business` remains intentionally untouched.

## 42. Git Diff
Verified diff contains exactly the prescribed scope. No global adjustments.

## 43. No Commit
Working Tree is securely preserved in a dirty state, ready for manual check and commit.

## 44. Deferred E-Services limitation
The known anomaly with `e-services` remains documented to be managed within Batch 10 or specifically provisioned task. 

## 45. Acceptance Matrix
* [x] Localized Route Created
* [x] Accounts Route Registry Established
* [x] Drift Testing Added
* [x] i18n Suite Updated (104/104 Tests Passing)
* [x] No Breaking Errors Introduced

## 46. Final Decision
`Static Routes Batch 9 Accounts Dynamic Routes Completed — Ready for User Review`
