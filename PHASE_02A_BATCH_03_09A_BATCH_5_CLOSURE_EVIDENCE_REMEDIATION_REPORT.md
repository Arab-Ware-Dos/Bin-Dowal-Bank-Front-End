# Phase 02A.3.9A — Batch 5 Closure Evidence Remediation

## 1. Git Status Check
- **Branch**: `dev`
- **Working Tree**: Intentionally dirty with Batch 5 changes only
- **Status**: No unrelated modifications detected. No commit created. The working tree remains intentionally uncommitted for user review.

## 2. FAQ Query/Hash Test Verification
Verified the existing test in `i18n/test.ts` (Line 178).
The test is accurately implemented as:
```typescript
{ input: ["/en/knowledge-center/faq?category=cards#question-3", "ar"], expected: "/ar/knowledge-center/faq?category=cards#question-3" }
```
**Finding**: The test correctly uses the full `/knowledge-center/faq` path. The previous closure report's assumption that the test might incorrectly use `/en/faq` was a false positive. No modification to `i18n/test.ts` is required.

## 3. i18n Tests Re-calculation
Verified the exact count of tests in `i18n/test.ts`:
| Statement | Count |
| --------- | ----: |
| Count before Batch 5 | 56 |
| Tests Removed | 1 |
| Tests Added | 9 |
| Final Count | 64 |

**The 9 added tests are:**
1. `["/calculator", "en"]` → `"/en/calculator"`
2. `["/en/calculator", "ar"]` → `"/ar/calculator"`
3. `["/knowledge-center/faq", "en"]` → `"/en/knowledge-center/faq"`
4. `["/ar/knowledge-center/faq", "en"]` → `"/en/knowledge-center/faq"`
5. `["/calculator/unknown", "en"]` → `"/calculator/unknown"`
6. `["/knowledge-center/article", "en"]` → `"/knowledge-center/article"`
7. `["/knowledge-center", "en"]` → `"/knowledge-center"`
8. `["/en/calculator?type=personal#result", "ar"]` → `"/ar/calculator?type=personal#result"`
9. `["/en/knowledge-center/faq?category=cards#question-3", "ar"]` → `"/ar/knowledge-center/faq?category=cards#question-3"`

## 4. FAQ Rendered Links
Within `/en/knowledge-center/faq`:
| Link | Rendered href |
| ---- | ------------- |
| Contact | `/en/contact` |
| Complaints | `/customer-service/complaints` |
| Service Request | `/customer-service/service-request` |
| Knowledge Center Breadcrumb | `/knowledge-center` |
| Same-page Anchor | `#faq-main` |

## 5. Navigation Type Analysis (performance.timeOrigin)
Navigating from `/en/knowledge-center/faq` (which is inside `app/[locale]/layout.tsx`):

### Contact (`/en/contact`)
- **Type**: Soft Navigation.
- **performance.timeOrigin**: Remains unchanged.
- **State**: `lang="en"`, `dir="ltr"`.
- **Reason**: Both routes share the same `app/[locale]/layout.tsx` root layout. Next.js App Router optimizes this transition.

### Complaints (`/customer-service/complaints`)
- **Type**: Hard Navigation.
- **performance.timeOrigin**: Changes (reloads).
- **State**: `lang="ar"`, `dir="rtl"`.
- **Reason**: Navigates across the Dual Root architecture boundary from `app/[locale]/layout.tsx` to `app/(legacy)/layout.tsx`. Next.js forcefully reloads.

### Service Request (`/customer-service/service-request`)
- **Type**: Hard Navigation.
- **performance.timeOrigin**: Changes (reloads).
- **State**: `lang="ar"`, `dir="rtl"`.
- **Reason**: Navigates across the Dual Root architecture boundary.

## 6. Breadcrumb Parent Routing & HTTP Status
| URL | Status | Content Type | Root Mode |
| --- | -----: | ------------ | --------- |
| `/knowledge-center` | 404 | `text/html` | Legacy 404 |

**Finding**: The legacy page `/knowledge-center` actually does not exist in the codebase. Therefore, the breadcrumb pointing to `/knowledge-center` acts as a broken link resolving to a 404 Not Found page. As per policy, this blocks the closure, as the breadcrumb should not be a broken link.

## 7. Calculator Functional Evidence (Auto Financing)
Calculated via `calculateIndicativeFinancing(amount, periodInMonths, annualProfitRate)`:
| Case | Input Values | Legacy Output | AR Output | EN Output | Equivalent |
| ---- | ------------ | ------------- | --------- | --------- | ---------- |
| Minimum | 30,000 YER / 6 mo / 4.5% | Installment: 5,113<br>Profit: 675<br>Total: 30,675 | Installment: 5,113<br>Profit: 675<br>Total: 30,675 | Installment: 5,113<br>Profit: 675<br>Total: 30,675 | Yes |
| Typical | 100,000 YER / 24 mo / 4.5% | Installment: 4,542<br>Profit: 9,000<br>Total: 109,000 | Installment: 4,542<br>Profit: 9,000<br>Total: 109,000 | Installment: 4,542<br>Profit: 9,000<br>Total: 109,000 | Yes |
| Maximum | 500,000 YER / 60 mo / 4.5% | Installment: 10,208<br>Profit: 112,500<br>Total: 612,500 | Installment: 10,208<br>Profit: 112,500<br>Total: 612,500 | Installment: 10,208<br>Profit: 112,500<br>Total: 612,500 | Yes |

*All rounding relies strictly on `Math.round`. Currency presentation uses localized `Intl.NumberFormat` without altering core mathematical values.*

## 8. Direct Refresh Behavior
| Route | HTTP Status | Marker | `lang` | `dir` | Metadata | Console Errors |
| ----- | ----------: | ------ | ------ | ----- | -------- | -------------- |
| `/ar/calculator` | 200 | `calculator` | `ar` | `rtl` | Localized | None |
| `/en/calculator` | 200 | `calculator` | `en` | `ltr` | Localized | None |
| `/ar/knowledge-center/faq` | 200 | `knowledge-center/faq` | `ar` | `rtl` | Localized | None |
| `/en/knowledge-center/faq` | 200 | `knowledge-center/faq` | `en` | `ltr` | Localized | None |

*Results confirm successful Server-Side Rendering (SSR) without SPA Fallback or Hydration Mismatches.*

## 9. Build and Validation Metrics
| Task | Exit Code | Result Summary |
| ---- | --------: | -------------- |
| `npx tsx i18n/validate-dictionaries.ts` | 0 | Dictionaries strictly mirrored |
| `npx tsx i18n/test.ts` | 0 | 64/64 tests passing |
| `npx tsc --noEmit` | 1 | Fails strictly on pre-existing inherited errors (`TS2345`/`TS2322`) |
| `npm run build` | 0 | Compiled successfully, 109 Routes Output |

## 10. Open Issues / Blockers
- **Breadcrumb Link**: The "Knowledge Center" parent breadcrumb item currently routes to `/knowledge-center` which returns a 404 Not Found error because the route does not exist. It must be rendered as an unclickable label instead of a link.

## 11. Final Git State
- **Branch**: `dev`
- **Status**: No branch created, no commit created. Working tree intentionally contains Batch 5 changes for user review.

## 12. Final Decision
`Blocked by Breadcrumb Parent Routing`
