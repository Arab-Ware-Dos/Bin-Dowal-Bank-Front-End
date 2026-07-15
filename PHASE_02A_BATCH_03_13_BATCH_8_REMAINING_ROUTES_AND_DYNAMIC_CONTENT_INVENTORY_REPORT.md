# Phase 02A.3.13 — Batch 8 Remaining Routes and Dynamic Content Inventory Report

## 1. Executive Summary

This report provides a comprehensive inventory and risk assessment of all remaining legacy routes, with a specific focus on dynamic routes and content. The analysis reveals that the `news` module is the most stable and translation-ready candidate for the next migration batch (Batch 8), as its data is static, bounded, and fully translated. Other dynamic routes (`e-services`, `accounts`, `business`, `personal`) rely on simulated async fetching and have a larger scope, making them candidates for subsequent batches.

## 2. Git Policy

```text
Branch: dev
Working Tree was clean before Inventory
No branch created
No commit created
No files modified
```

## 3. Baseline Verification

| Check                | Exit Code | Result |
| -------------------- | --------: | ------ |
| Dictionary Validator | 0         | Pass |
| i18n Tests           | 0         | 82/82 Pass |
| TypeScript           | 0         | Failed with pre-existing legacy errors |
| Build                | 0         | Pass |
| Route Count          | 0         | 119 |

```text
Validator: Exit 0
i18n Tests: 82/82
TypeScript: Failed with pre-existing TS2345/TS2322 errors on legacy routes.
Build: Exit 0
Route Count: 119
```

## 4. Current Localized Route Inventory

Localized routes under `app/[locale]/`:
- `/about`
- `/about/annual-reports`
- `/about/board-of-directors`
- `/about/partners`
- `/about/social-responsibility`
- `/atm-and-branches`
- `/branches`
- `/business-banking`
- `/calculator`
- `/cards`
- `/cards/credit-card`
- `/cards/debit-card`
- `/cards/noor-card`
- `/cards/prepaid-card`
- `/contact`
- `/customer-service/bank-cards-request`
- `/customer-service/complaints`
- `/customer-service/service-request`
- `/digital-channels`
- `/financing`
- `/knowledge-center/faq`
- `/personal-banking`
- `/root-proof`

**Whitelist Inventory**
| Whitelisted Path | Localized AR | Localized EN | Legacy Retained | Batch |
| ---------------- | ------------ | ------------ | --------------- | ----- |
| `/` | `/ar` | `/en` | N/A | 3 |
| `/about` | `/ar/about` | `/en/about` | Yes | 1 |
| `/contact` | `/ar/contact` | `/en/contact` | Yes | 1 |
| `/about/annual-reports` | `/ar/about/annual-reports` | `/en/about/annual-reports` | Yes | 2 |
| `/about/board-of-directors` | `/ar/about/board-of-directors` | `/en/about/board-of-directors` | Yes | 2 |
| `/about/partners` | `/ar/about/partners` | `/en/about/partners` | Yes | 2 |
| `/about/social-responsibility` | `/ar/about/social-responsibility` | `/en/about/social-responsibility` | Yes | 2 |
| `/business-banking` | `/ar/business-banking` | `/en/business-banking` | Yes | 1 |
| `/personal-banking` | `/ar/personal-banking` | `/en/personal-banking` | Yes | 1 |
| `/financing` | `/ar/financing` | `/en/financing` | Yes | 1 |
| `/digital-channels` | `/ar/digital-channels` | `/en/digital-channels` | Yes | 1 |
| `/cards` | `/ar/cards` | `/en/cards` | Yes | 4 |
| `/cards/credit-card` | `/ar/cards/credit-card` | `/en/cards/credit-card` | Yes | 4 |
| `/cards/debit-card` | `/ar/cards/debit-card` | `/en/cards/debit-card` | Yes | 4 |
| `/cards/noor-card` | `/ar/cards/noor-card` | `/en/cards/noor-card` | Yes | 4 |
| `/cards/prepaid-card` | `/ar/cards/prepaid-card` | `/en/cards/prepaid-card` | Yes | 4 |
| `/calculator` | `/ar/calculator` | `/en/calculator` | Yes | 5 |
| `/knowledge-center/faq` | `/ar/knowledge-center/faq` | `/en/knowledge-center/faq` | Yes | 5 |
| `/customer-service/complaints` | `/ar/customer-service/complaints` | `/en/customer-service/complaints` | Yes | 6 |
| `/customer-service/service-request` | `/ar/customer-service/service-request` | `/en/customer-service/service-request` | Yes | 6 |
| `/customer-service/bank-cards-request` | `/ar/customer-service/bank-cards-request` | `/en/customer-service/bank-cards-request` | Yes | 6 |
| `/branches` | `/ar/branches` | `/en/branches` | Yes | 7 |
| `/atm-and-branches` | `/ar/atm-and-branches` | `/en/atm-and-branches` | Yes | 7 |

## 5. Remaining Legacy Routes

| Route | Page Exists? | Parent Hub Exists? | Static Params? | Translation Ready? | Static Export Risk |
| ----- | ------------ | ------------------ | -------------- | ------------------ | ------------------ |
| `/news` | Yes | N/A | N/A | Yes | Low |
| `/news/[slug]` | Yes | Yes | Yes | Yes | Low |
| `/e-services/[slug]` | Yes | No (Uses `/digital-channels`) | Yes | Yes | Medium |
| `/accounts/[slug]` | Yes | No | Yes | Yes | Medium |
| `/business/[slug]` | Yes | Yes (`/business-banking`) | Yes | Yes | Medium |
| `/personal/[slug]` | Yes | Yes (`/personal-banking`) | Yes | Yes | Medium |

## 6. News Hub Analysis

| Concern | Finding | Risk |
| ------- | ------- | ---- |
| Component Type | Client Component (`use client`) | Low |
| Data Source | Static Array (`data/news.ts`) | Low |
| Backend Dependency | None (No API or Database used) | Low |
| Interactive Elements | Client-side Search, Filters, Pagination | Low |
| Card Links | Point to `/news/[slug]` using legacy format via `getArticleHref()` | Medium |
| Content Locale | Contains both `AR` and `EN` fields simultaneously | Low |
| Metadata Translation | Hardcoded strings in Component | Low |
| Explicit Static? | Yes | Low |
| Standalone Hub Migration | Yes, possible but requires adapting links | Medium |
| Links inside App | Referenced in Header, Home News Section | Low |

## 7. News Detail Analysis (`/news/[slug]`)

| Slug | AR Content | EN Content | Generated at Build | Metadata | Image |
| ---- | ---------- | ---------- | ------------------ | -------- | ----- |
| `bank-bin-dowl-for-islamic-microfinance-participates...` | Complete | Complete | Yes | None natively | Yes (Local) |
| `saba-african-bank-on-an-official-visit...` | Complete | Complete | Yes | None natively | Yes (Local) |
| `conclusion-of-the-financial-and-credit-analysis-course` | Complete | Complete | Yes | None natively | Yes (Local) |
| `conclusion-of-the-two-courses-on-financial-and-credit-analysis` | Complete | Complete | Yes | None natively | Yes (Local) |

- **Params Type:** Dynamic `[slug]` utilizing `Promise<{ slug: string }>` internally.
- **`generateStaticParams`:** Yes, correctly maps 4 slugs.
- **Unknown Slugs:** Explicitly triggers `notFound()`.
- **Dynamic Metadata:** Missing (Requires addition during migration).
- **Slug Localization:** Same slug used for AR and EN.
- **Static Export:** Fully supported and safe.

## 8. News Architecture Options

| Option | Benefits | Risks | Route Count Impact | Recommendation |
| ------ | -------- | ----- | -----------------: | -------------- |
| Option 1 — Hub Only | Low effort, isolates complexity | Inconsistent UX for details | +2 | Discard |
| Option 2 — Hub & Details | Consistent UX, completes feature | URL Switcher must support dynamic | +10 | **Recommended** |
| Option 3 — Defer Entirely | Avoids dynamic routes for now | Stalls migration progress | 0 | Discard |

## 9. News Route Count Calculation

```text
N = 4 (Total Slugs in data/news.ts)
Hub Routes = 2 (/ar/news, /en/news)
Detail Routes = 2 × 4 = 8

Expected Route Count = 119 + 2 + 8 = 129
```

## 10. News Translation Coverage

| Field | AR Coverage | EN Coverage | Source | Status |
| ----- | ----------- | ----------- | ------ | ------ |
| Title | Complete | Complete | `data/news.ts` | Complete |
| Summary (Excerpt) | Complete | Complete | `data/news.ts` | Complete |
| Body (Content) | Complete | Complete | `data/news.ts` | Complete |
| Category | Complete | Complete | `data/news.ts` | Complete |
| Publication Date | Complete | Complete | `data/news.ts` | Complete |
| Image Alt | Complete | Complete | `data/news.ts` | Complete |
| Share Labels | Complete | Complete | `news-article-client.tsx` | Complete |
| Breadcrumbs | Complete | Complete | `news-article-client.tsx` | Complete |
| Empty States | Complete | Complete | `news/page.tsx` | Complete |
| Metadata | Missing | Missing | `news/[slug]/page.tsx` | Missing |

## 11. News Dates and Locale Formatting

| Date Source | Build Output | AR Format | EN Format | Hydration Risk |
| ----------- | ------------ | --------- | --------- | -------------- |
| `data/news.ts` (String) | Static | `ar-YE` | `en-US` | Low (Client rendered correctly via Date parsing) |

## 12. News Images

| Image Source | Local/Remote | Static Export Safe | Alt Coverage | Risk |
| ------------ | ------------ | ------------------ | ------------ | ---- |
| `/images/news/...` | Local | Yes | 100% | Low |

## 13. E-Services Dynamic Route

| Concern | Finding | Risk |
| ------- | ------- | ---- |
| Parent Hub | Missing (`/e-services` does not exist, uses `/digital-channels`) | Medium |
| Source Data | Simulated Async Fetch (`banking-services.ts`) | Low |
| `generateStaticParams` | Yes (4 slugs) | Low |
| Forms / Uploads | None | Low |
| Static Export | Safe | Low |

## 14. Accounts Dynamic Route

| Slug | Product | AR | EN | Static Generated | Risk |
| ---- | ------- | -- | -- | ---------------- | ---- |
| `vip` | Personal Account | Complete | Complete | Yes | Low |
| `noor` | Personal Account | Complete | Complete | Yes | Low |
| `youth` | Personal Account | Complete | Complete | Yes | Low |
| `expat` | Personal Account | Complete | Complete | Yes | Low |

## 15. Business Dynamic Route

- **Slugs:** 4 (`corporate-current-account`, `corporate-investment-deposits`, `swift-transfers`, `bank-guarantees`).
- **Parent Hub:** Mismatched (Hub is `/business-banking`, slugs are under `/business/[slug]`).
- **Risk:** Medium (Requires normalization of parent/child route names before migration).

## 16. Personal Dynamic Route

- **Slugs:** 31 routes total.
- **Parent Hub:** Mismatched (Hub is `/personal-banking`, slugs are under `/personal/[slug]`).
- **Risk:** High (Large volume, requires careful batching and parent normalization).

## 17. Dynamic Route Contract Matrix

| Dynamic Route        | Parent Hub | Slug Count | generateStaticParams | Unknown Slug | AR/EN Coverage | Static Export |
| -------------------- | ---------- | ---------: | -------------------- | ------------ | -------------- | ------------- |
| `/news/[slug]`       | Verified   | 4          | Yes                  | `notFound()` | Complete       | Pass          |
| `/e-services/[slug]` | Missing    | 4          | Yes                  | `notFound()` | Complete       | Pass          |
| `/accounts/[slug]`   | Missing    | 4          | Yes                  | `notFound()` | Complete       | Pass          |
| `/business/[slug]`   | Mismatched | 4          | Yes                  | `notFound()` | Complete       | Pass          |
| `/personal/[slug]`   | Mismatched | 31         | Yes                  | `notFound()` | Complete       | Pass          |

## 18. Dynamic Metadata Audit

| Route | generateMetadata | AR/EN | notFound | Static-safe | Risk |
| ----- | ---------------- | ----- | -------- | ----------- | ---- |
| `/news/[slug]` | Missing | N/A | Yes | Yes | Low (Needs addition) |
| `/e-services/[slug]` | Present | Yes | Yes | Yes | Low |
| `/accounts/[slug]` | Present | Yes | Yes | Yes | Low |
| `/business/[slug]` | Present | Yes | Yes | Yes | Low |
| `/personal/[slug]` | Present | Yes | Yes | Yes | Low |

## 19. Static Export Analysis

- All dynamic routes correctly implement `generateStaticParams`.
- Content is fully known at build-time (static objects/arrays).
- No runtime API calls. Content updates require a Rebuild.
- Safe for Static Export.

## 20. Route Conflict Audit

| Slug | Potential Conflict | Current Behavior | Risk |
| ---- | ------------------ | ---------------- | ---- |
| `news` | None | Operates independently | Low |
| `business/x` | `business-banking` | Legacy mapping works | Medium |
| `personal/x` | `personal-banking` | Legacy mapping works | Medium |

## 21. Internal Link Inventory

| Source Page | Link Text | Target | Helper Used? | Current Mode Behavior |
| ----------- | --------- | ------ | ------------ | --------------------- |
| Home Page | News Card | `/news/[slug]` | `getLocalizedHref` | Falls back to legacy path |
| Header/Nav | News | `/news` | Direct | Falls back to legacy path |

## 22. Header/Footer Impact

| Location | Link | Legacy href | AR href | EN href | Current Status |
| -------- | ---- | ----------- | ------- | ------- | -------------- |
| Header Nav | News | `/news` | N/A | N/A | Points to legacy `/news` |
| Footer | N/A | N/A | N/A | N/A | N/A |

## 23. URL Switcher Risk

| Route Type | AR → EN | EN → AR | Missing Translation Behavior | Risk |
| ---------- | ------- | ------- | ---------------------------- | ---- |
| Dynamic `[slug]` | Fails | Fails | N/A | High |

**Analysis:** `getLocalizedHref` currently checks strictly against `LOCALIZED_STATIC_ROUTES`. Dynamic routes (like `/news/slug-name`) will return `false` on `isLocalized`, meaning the URL switcher will strip the locale and fall back to the legacy route. To migrate News, the URL switcher must be upgraded to support dynamic route prefixes (e.g., matching `/news` as a base path).

## 24. Client Boundary Audit

| Route | Current Boundary | Proposed Shell | Client Risk | Bundle Risk |
| ----- | ---------------- | -------------- | ----------- | ----------- |
| `/news` | `use client` | Server Shell | Low | Low |
| `/news/[slug]` | `use client` | Server Shell | Low | Low |

## 25. Content Freshness Risk

- **Architecture:** Static content accepted.
- **Risk:** Low. The system operates on static JSON/TS data, fully aligned with Next.js Static Export limits. Rebuilds are acceptable for content updates.

## 26. Candidate Risk Classification

| Candidate | Risk | Primary Reason |
| --------- | ---- | -------------- |
| `/news` | Low | Hardcoded, translated, bounded slugs (4), simple parent structure |
| `/e-services` | Medium | Lacks direct parent hub (`/digital-channels` instead) |
| `/business` | Medium | Parent name mismatch (`/business-banking`) |
| `/personal` | High | High slug volume (31) and parent name mismatch |

## 27. Batch 8 Options

| Option | Routes | Added Routes | Expected Total | Risk | Verdict |
| ------ | ------ | -----------: | -------------: | ---- | ------- |
| Option A — News Hub Only | `/news` | 2 | 121 | Medium | UX breakage on details |
| Option B — Complete News Batch | `/news`, `/news/[slug]` | 10 | 129 | Low | Safest entry point |
| Option C — E-Services Batch | `/e-services/[slug]` | 8 | 127 | Medium | Needs hub normalization |
| Option D — Defer Dynamic | N/A | 0 | 119 | High | Halts project |

## 28. Recommended Batch 8

Recommended Batch 8:
- `/news`
- `/news/[slug]`

Current Route Count: 119
Current Slug Count: 4
Added Localized Routes: 10
Expected Route Count: 129

Risk: Medium (Requires URL switcher upgrade for dynamic paths)
Reason: News represents the most isolated and complete dynamic route system. It has only 4 slugs, complete translations, and a 1-to-1 matching parent hub, making it the perfect candidate to prove out dynamic route localization.

## 29. Deferred Routes

| Route | Deferred? | Reason | Required Before Migration |
| ----- | --------- | ------ | ------------------------- |
| `/e-services/[slug]` | Yes | Parent hub mismatch | Hub architectural decision |
| `/accounts/[slug]` | Yes | High volume risk | Proven dynamic routing pattern |
| `/business/[slug]` | Yes | Parent hub mismatch | Normalize against `/business-banking` |
| `/personal/[slug]` | Yes | Extreme volume (31) | Normalize against `/personal-banking` |

## 30. Open Questions

- None. The codebase provides absolute clarity that the `news` module uses static arrays, requires rebuilds for updates, uses common slugs across locales, and has a strict parent (`/news`) hub. 

## 31. Git Final State

```text
Branch: dev
Working Tree: clean
No branch created
No commit created
No files modified
```
