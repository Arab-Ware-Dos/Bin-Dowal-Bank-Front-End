# Phase 02A.3.10 — Static Routes Batch 6 Candidate Inventory and Risk Assessment

## 1. Executive Summary
This report provides a comprehensive inventory and risk assessment of the remaining legacy routes in the Next.js App Router application. The goal is to identify a low-risk, highly compatible set of static routes to form Batch 6 of the URL-based localization migration. The analysis focuses on technical feasibility, static export compatibility, and translation readiness.

## 2. Git Policy
- **Current Branch**: `dev`
- **Working Tree**: Clean (verified).
- **Rules Enforced**: No branches created, no commits made, no files modified during this assessment.

## 3. Baseline Verification
Prior to any modifications, the codebase exhibits the following stable baseline:
- **Validator**: Exit 0 (All translation dictionaries mirrored correctly).
- **i18n Tests**: 64/64 passing.
- **TypeScript**: Exit 1 (Pre-existing inherited errors in `app/(legacy)/personal/_local-transfers/page.tsx` and legacy components).
- **Build**: Exit 0.
- **Current Route Count**: 109 routes natively exported.

## 4. Migrated Routes Inventory
The following exact paths have already been successfully migrated and are whitelisted in `lib/localized-routes.ts`:
- `/`
- `/about`
- `/contact`
- `/about/annual-reports`
- `/about/board-of-directors`
- `/about/partners`
- `/about/social-responsibility`
- `/business-banking`
- `/personal-banking`
- `/financing`
- `/digital-channels`
- `/cards`
- `/cards/credit-card`
- `/cards/debit-card`
- `/cards/noor-card`
- `/cards/prepaid-card`
- `/calculator`
- `/knowledge-center/faq`

## 5. Remaining Legacy Routes
Inventory of `app/(legacy)/**` (excluding already migrated routes):

| Legacy Route | Migrated Already? | Server/Client | Static/Dynamic | Data Source | Forms | Risk |
| ------------ | ----------------- | ------------- | -------------- | ----------- | ----- | ---- |
| `/branches` | No | Client | Static | Mock (`data/mock-data.ts`) | No | Low |
| `/atm-and-branches` | No | Client | Static | Mock (`data/locations.ts`) | No | Low |
| `/customer-service/complaints` | No | Client | Static | None (Static UI) | Yes (Mock) | Low/Med |
| `/customer-service/service-request` | No | Client | Static | None (Static UI) | Yes (Mock) | Low/Med |
| `/customer-service/bank-cards-request` | No | Client | Static | None (Static UI) | Yes (Mock) | Low/Med |
| `/news` | No | Client | Static | Mock (`data/news.ts`) | No | Low |
| `/news/[slug]` | No | Server/Client | Dynamic `[slug]`| Mock (`data/news.ts`) | No | Medium |
| `/e-services/[slug]` | No | Server | Dynamic `[slug]`| Unknown | Unknown | High |
| `/accounts/[slug]` | No | Server | Dynamic `[slug]`| Unknown | Unknown | High |
| `/business/[slug]` | No | Server | Dynamic `[slug]`| Unknown | Unknown | High |
| `/personal/[slug]` | No | Server | Dynamic `[slug]`| Unknown | Unknown | High |

## 6. Knowledge Center Analysis
- **Route**: `/knowledge-center`
- **Finding**: The route does not exist. It currently returns HTTP 404. There is no `app/(legacy)/knowledge-center/page.tsx`.
- **References**: The breadcrumb in `/knowledge-center/faq` was previously fixed to remove the broken link.
- **Recommendation**: Do not migrate or create this route in Batch 6, as it constitutes building a new feature rather than migrating an existing one. Keep it outside the migration plan until a dedicated Hub is required.

## 7. Customer Service Analysis
- **Routes**: `/customer-service/complaints`, `/customer-service/service-request`, `/customer-service/bank-cards-request`
- **Forms**: Yes. All three routes contain forms.
- **Backend/API**: No. The forms are mock implementations using `setTimeout` to simulate submission.
- **Server Actions**: No.
- **`fetch`**: No.
- **Validation**: Standard HTML5 validation (`required`, `type="email"`).
- **Data Persistence**: No data is sent to a backend or saved.
- **Static Export**: 100% compatible. Forms rely purely on React client state.
- **Translation**: 100% complete and fully inline.

## 8. Branches Analysis
- **Routes**: `/branches`, `/atm-and-branches`
- **Data Source**: Inline mock data arrays (`@/data/mock-data` and `@/data/locations`).
- **Fetch Timing**: Build-time (statically imported).
- **Browser APIs**: Yes. Uses `navigator.geolocation` for finding the nearest branch.
- **Maps**: Yes. `/atm-and-branches` uses Leaflet via a dynamic import (`LocationMapInner`) with `ssr: false`.
- **Search & Filters**: Client-side filtering only.
- **Dynamic slugs**: None.
- **Static Export**: 100% compatible.
- **Client Bundle Risk**: Medium. The dynamic import of Leaflet ensures it doesn't break SSR, but it adds bundle weight to these specific pages.

## 9. News Analysis
- **Routes**: `/news`, `/news/[slug]`
- **Hub**: Yes, `/news` acts as a static Hub.
- **Data Source**: Inline mock array (`@/data/news`).
- **Dynamic Slugs**: Yes, `[slug]` is heavily used.
- **Static Generation**: Uses `generateStaticParams` to build all known slugs at build time.
- **Static Export Risk**: Medium. While it uses `generateStaticParams` and is theoretically safe, migrating a Hub alongside dynamic child routes introduces complexity that violates the "Low-Risk Explicit Static Route" requirement for Batch 6.
- **Recommendation**: Defer to a dedicated News batch.

## 10. E-Services Analysis
- **Routes**: `/e-services/[slug]`
- **Hub**: No `/e-services` Hub exists.
- **Child Routes**: Purely dynamic.
- **Static Export Risk**: High. Purely dynamic routes without a clear bounded set of `generateStaticParams` represent a high risk for the current phase.
- **Recommendation**: Defer completely.

## 11. Translation Coverage
- **Customer Service**: **Complete**. All strings in the components are correctly wrapped with `locale === "ar" ? ... : ...`. No missing dictionaries required.
- **Branches**: **Complete**. Both pages use `locale === "ar"` for inline ternary string resolution.
- **News**: **Complete**.
- **Metadata**: Handled via PageHero and inline translations.

## 12. Static Export Compatibility
- **Low Risk**: Branches and Customer Service forms are entirely client-side rendered without any reliance on Node.js runtime APIs, Request objects, or Search Params. They are fully compatible with `next build` (Static Export).

## 13. Client Boundary Risks
- All candidates already utilize `"use client"`.
- Migrating them will simply involve moving the files to `app/[locale]/...` and adjusting the `PageHero` breadcrumbs.
- No new `"use client"` boundaries need to be established.

## 14. Link Integration Impact

| Target Route | Source Component | Current href | Helper Used? | Impact After Whitelist |
| ------------ | ---------------- | ------------ | ------------ | ---------------------- |
| `/branches` | Header / Footer | `/branches` | `getLocalizedHref` | Soft navigation to localized route |
| `/atm-and-branches` | Banking Services | `/atm-and-branches` | `getLocalizedHref` | Soft navigation to localized route |
| `/customer-service/*` | Header / Footer / FAQ | `/customer-service/...` | `getLocalizedHref` | Soft navigation to localized route |

---

## 15. Option A — Lowest Risk (Branches)
- **Routes**: `/branches`, `/atm-and-branches`
- **Grouping Logic**: Geographical and physical location services.
- **New Localized Routes**: 4 (`/ar/branches`, `/en/branches`, `/ar/atm-and-branches`, `/en/atm-and-branches`).
- **Expected Route Count**: 109 + 4 = 113.
- **Risk**: Low. Safe static data.
- **Reason**: Excellent candidates for static export.

## 16. Option B — Moderate Scope (Customer Service)
- **Routes**: `/customer-service/complaints`, `/customer-service/service-request`, `/customer-service/bank-cards-request`
- **Grouping Logic**: Interactive client-side forms.
- **New Localized Routes**: 6.
- **Expected Route Count**: 109 + 6 = 115.
- **Risk**: Low/Medium. While they contain forms, they are 100% mock forms reliant on client state.
- **Reason**: Forms a perfect thematic block and eliminates a whole directory from the legacy folder.

## 17. Deferred Routes
- `/news` and `/news/[slug]`: Deferred due to dynamic `[slug]` parameters.
- `/e-services/[slug]`: Deferred due to dynamic parameters and lack of Hub.
- `/[slug]` (Accounts, Business, Personal): Deferred due to dynamic parameters.

## 18. Recommended Batch 6
Option B is highly cohesive, completely static (despite having mock forms), and eliminates an entire legacy subdirectory, paving the way for a cleaner architecture.

```text
Recommended Batch 6:
- /customer-service/complaints
- /customer-service/service-request
- /customer-service/bank-cards-request

Current Route Count: 109
Added Localized Routes: 6
Expected Route Count: 115

Risk: Low
Reason: Purely static client-side UI with mock form submissions. 100% inline translation coverage. Eliminates the entire legacy /customer-service directory.
```

## 19. Expected Route Count
Baseline (109) + 6 Localized Variants = **115 routes**.

## 20. Open Questions
- None. The candidate routes are perfectly isolated and well-understood.

## 21. Git Final State
- **Branch**: `dev`
- **Working Tree**: Clean. No files were modified, and no commits were created.

## 22. Final Decision
`Batch 6 Inventory Completed — Low-Risk Scope Recommended`
