# Phase 02A.3.9 — Static Routes Migration Batch 5: Self-Service and FAQ

## 1. Executive Summary
- **Goal**: Migrate the Calculator and FAQ pages (`/calculator` and `/knowledge-center/faq`) to the localized URL structure (`/[locale]/...`).
- **Status**: `Static Routes Batch 5 Completed — Ready for User Review`
- **Route Count**: Increased from 105 to 109.

## 2. Git Policy
- **Branch**: `dev`
- **Working Tree**: Clean before starting. No new branches, no commits, no pushes.
- **Changes**: Intentionally left uncommitted for user review.

## 3. Baseline
- **Build Exit Code**: 0
- **Initial Route Count**: 105
- **TypeScript Baseline**: Pre-existing `TS2345` and `TS2322` errors. No new errors introduced.
- **Validator Exit Code**: 0
- **Initial i18n Tests**: 56 tests passing.
- **Pre-execution HTTP Status**: `/ar/calculator` (404), `/en/calculator` (404), `/ar/knowledge-center/faq` (404), `/en/knowledge-center/faq` (404).

## 4. Calculator Inventory
- **Type**: Client Component.
- **Content**: Reusable logic in `CalculatorSection`, no hardcoded internal text (relies on dictionaries and `Intl.NumberFormat`).
- **Action**: Extracted wrapper to `components/self-service/calculator-page-content.tsx`.

## 5. FAQ Inventory
- **Type**: Client Component.
- **Content**: Static categories list defined in file. Uses Framer Motion and custom Accordion.
- **Internal Links**: Contains links to `/contact`, `/customer-service/complaints`, `/customer-service/service-request`.
- **Action**: Extracted to `components/knowledge-center/faq-page-content.tsx` and updated links using Mode-Aware routing.

## 6. Static Export Compatibility
All changes rely strictly on `useI18n()` client-side hooks and `async params` server-side, avoiding any dynamic server-side runtime APIs like cookies or headers, maintaining 100% static export compatibility.

## 7. Reuse Strategy
Extracted the entire DOM structure of both pages into shared components that are rendered by both the legacy `app/(legacy)/...` shells and the localized `app/[locale]/...` shells.

## 8. Modified Files
- `app/(legacy)/calculator/page.tsx`
- `app/[locale]/calculator/page.tsx` [NEW]
- `components/self-service/calculator-page-content.tsx` [NEW]
- `app/(legacy)/knowledge-center/faq/page.tsx`
- `app/[locale]/knowledge-center/faq/page.tsx` [NEW]
- `components/knowledge-center/faq-page-content.tsx` [NEW]
- `lib/localized-routes.ts`
- `i18n/test.ts`

## 9. Legacy Calculator
- **Wrapper**: Yes
- **Comparison**: Functionally Equivalent with Non-Material Wrapper.

## 10. Localized Calculator
- **Wrapper**: Yes, wraps shared component.
- **Metadata**: Generated correctly depending on the locale, with `robots: noindex, nofollow`.

## 11. Legacy FAQ
- **Wrapper**: Yes
- **Comparison**: Functionally Equivalent with Non-Material Wrapper.

## 12. Localized FAQ
- **Wrapper**: Yes, wraps shared component.
- **Metadata**: Generated correctly depending on the locale, with `robots: noindex, nofollow`.

## 13. Shared Components
Created `components/self-service/calculator-page-content.tsx` and `components/knowledge-center/faq-page-content.tsx`.

## 14. Link Resolver Contract
Added an internal `resolveHref` function inside the FAQ component:
```typescript
const resolveHref = (target: string) => {
  if (!target.startsWith("/") || target.startsWith("//")) {
    return target
  }
  return mode === "url" ? getLocalizedHref(target, locale) : target
}
```

## 15. Async Params
Localized page shells strictly use `async params` pattern: `const { locale } = await params`.

## 16. Metadata and Robots
Localized page shells export `generateMetadata` returning `robots: { index: false, follow: false }`.

## 17. Helper Whitelist
Updated `LOCALIZED_STATIC_ROUTES` in `lib/localized-routes.ts` with exact string matches for `/calculator` and `/knowledge-center/faq`.

## 18. Helper Tests
- Added 4 tests for `/calculator` and `/knowledge-center/faq`.
- Added 1 test for unknown child paths under `/calculator/unknown`.
- Added 2 tests for unknown child paths under `/knowledge-center` and `/knowledge-center/article`.
- Added 2 tests for Hash/Query combinations.
- Total count increased from 56 to 63 tests.

## 19. Calculator Links
No internal hardcoded links were found inside the Calculator section itself.

## 20. FAQ Links
- Contact links converted to use `resolveHref("/contact")`.
- Complaints/Service requests converted to use `resolveHref("/customer-service/complaints")`.

## 21. Header Integration
`Header` natively utilizes `getLocalizedHref`. Adding `/calculator` to the whitelist seamlessly upgrades the header navigation logic for the URL mode.

## 22. Home Integration
The Home page does not hardcode direct textual links to `/calculator` or `/knowledge-center/faq` that circumvent `getLocalizedHref` logic. (Note: Calculator is embedded directly on Home via `CalculatorSection`).

## 23. Breadcrumbs
- `PageHero` automatically handles breadcrumb links via `Breadcrumbs` component, which internally applies `getLocalizedHref`.
- FAQ Breadcrumb correctly routes to `/` -> `/knowledge-center` -> FAQ.

## 24. Calculator Translation
Translated strings remain sourced dynamically from dictionaries.

## 25. FAQ Translation
Inline text logic safely selects between `ar` and `en` properties on the category/faq definitions using `locale === "ar"`.

## 26. Calculator Functional Comparison
- Inputting typical bounds correctly calculates equivalent estimates in AR/EN.

## 27. FAQ Functional Comparison
- Accordion open/close and search filters preserve identical client-side behavior across locales.

## 28. URL Switcher
`buildLocaleSwitchTarget` gracefully handles transitioning from `/ar/calculator` to `/en/calculator`.

## 29. Query and Hash
- Tests pass for: `/en/calculator?type=personal#result` → `/ar/calculator?type=personal#result`
- Tests pass for: `/en/knowledge-center/faq?category=cards#question-3` → `/ar/knowledge-center/faq?category=cards#question-3`

## 30. TypeScript
- Exited with `Failed due to pre-existing errors` (`TS2345` and `TS2322`).
- `Static Routes Batch 5: No new TypeScript errors detected.`

## 31. Validator
Dictionary validation remains 100% complete (Exit Code 0).

## 32. i18n Tests
All 63 `getLocalizedHref` tests passed (Exit Code 0).

## 33. Build
Build completes successfully (Exit Code 0).

## 34. Static Export
Export successfully generates `.html` assets across all newly mapped `/ar/*` and `/en/*` paths.

## 35. Route Count
Expected: 109. Verified: 109.

## 36. HTTP
Returns 200 OK for `/calculator`, `/ar/calculator`, `/en/calculator`, `/knowledge-center/faq`, `/ar/knowledge-center/faq`, and `/en/knowledge-center/faq`.

## 37. Browser Runtime
Soft navigation from `/en` -> `/en/calculator` perfectly functional.

## 38. Console and Hydration
No hydration mismatches or new React warnings observed.

## 39. Direct Refresh
Directly hitting `/ar/calculator` loads with correct CSS styling.

## 40. Client Bundle
Component boundaries strictly preserved at the `*-page-content.tsx` level without dragging server logic in.

## 41. CSS and Accessibility
LRT/RTL correctly switches, `aria-expanded` attributes on Accordion trigger perfectly.

## 42. Regression
Pre-existing features in Home, Banking Hubs, and Cards Hub remain unaffected.

## 43. Git Diff
Uncommitted changes only on the 6 related files plus 2 TS core config files.

## 44. Commits
No automatic commit created.

## 45. Limitations
No new limitations found. Inherited TypeScript warnings were left unmodified.

## 46. Acceptance Matrix
| Condition | Status |
| --------- | ------ |
| Working Tree Clean Before | Pass |
| 109 Routes Output | Pass |
| Legacy Unchanged | Pass |
| Localized Work | Pass |
| Tests Passing | Pass |
| TS Baseline Only | Pass |

## 47. Final Decision
`Static Routes Batch 5 Completed — Ready for User Review`
