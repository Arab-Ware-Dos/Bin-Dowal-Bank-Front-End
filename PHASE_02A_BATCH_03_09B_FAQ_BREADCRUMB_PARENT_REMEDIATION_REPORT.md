# Phase 02A.3.9B — FAQ Breadcrumb Parent Routing Remediation

## 1. Executive Summary
- **Goal**: Resolve the 404 broken link inside the FAQ's "Knowledge Center" Breadcrumb by transforming it into an unclickable label while maintaining its visual presence in the hierarchy.
- **Root Cause**: The `/knowledge-center` parent route does not exist within the application. The `PageHero` was passing `{ href: "/knowledge-center" }` to the `Breadcrumbs` component for the parent item, generating a broken link.
- **Status**: Completed successfully without introducing regressions.

## 2. Git Policy Check
- **Branch**: `dev`
- **Working Tree**: Intentionally uncommitted with Batch 5 and the new remediation changes.
- **Commits**: No commits or branches were created.

## 3. Baseline Verification
- **Build Exit Code**: 0
- **Route Count**: 109 routes
- **i18n Tests**: 64 passing
- **`/knowledge-center` Status**: HTTP 404
- **Original Breadcrumb State**: "Knowledge Center" functioned as a link causing a 404.

## 4. Breadcrumb API Analysis
The `components/ui/breadcrumbs.tsx` component is designed with an optional `href` property:
```typescript
interface BreadcrumbItem {
  labelKey: string
  href?: string
}
```
Internally, it intelligently conditionally renders either a `<Link>` or a `<span>`:
```typescript
{item.href ? (
  <Link href={...}>...</Link>
) : (
  <span className="font-medium text-white">{t(item.labelKey)}</span>
)}
```
*This natively supports the "Preferred Option" out of the box without requiring structural component changes.*

## 5. Remediation Strategy
Implemented the "Preferred Option" by editing `components/knowledge-center/faq-page-content.tsx` and removing the `href` attribute from the Knowledge Center breadcrumb object:
**Before**: `{ labelKey: ar ? "مركز المعرفة" : "Knowledge Center", href: "/knowledge-center" }`
**After**: `{ labelKey: ar ? "مركز المعرفة" : "Knowledge Center" }`

## 6. Modified Files
- `components/knowledge-center/faq-page-content.tsx`

## 7. Rendered DOM (Verified)
| Route Variant | Home href | Parent Element | Parent href | Current Item |
| ------------- | --------- | -------------- | ----------- | ------------ |
| Legacy FAQ | `/` | `<span>` | *None* | FAQ |
| AR Localized FAQ | `/ar` | `<span>` | *None* | الأسئلة الشائعة |
| EN Localized FAQ | `/en` | `<span>` | *None* | FAQ |

**Verification**:
- Knowledge Center label is fully visible.
- It is rendered as a plain `<span>` element.
- It is explicitly NOT clickable.
- It is NOT inside an `<a>` or role="link" container.
- It does NOT carry an `href` attribute.
- It avoids all 404 occurrences.

## 8. Accessibility Verification
- The `Breadcrumbs` component uses native `<span>` for non-link elements.
- It avoids `tabIndex={0}` or faux-link keyboard behaviors.
- Screen readers will read the breadcrumb hierarchy correctly as part of the `<ol>` list.

## 9. Breadcrumb Regression Check
Verified that components relying on the `Breadcrumbs` component logic are unchanged, because the core `breadcrumbs.tsx` component itself was **not** altered.
- **Home Links**: Retained `/`, `/ar`, `/en` correctly.
- **About/Cards Hubs**: Continue to function exactly as they did.

## 10. FAQ Links Regression
Modifying the `breadcrumbs` prop had strictly zero impact on the `resolveHref` logic or FAQ body links:
- **Contact**: Still resolves to `/contact` (URL mode).
- **Complaints**: Still resolves to `/customer-service/complaints`.
- **Service Request**: Still resolves to `/customer-service/service-request`.

## 11. TypeScript and Build Verification
| Check | Status | Notes |
| ----- | ------ | ----- |
| `tsc --noEmit` | Exit Code 1 | Fails only on pre-existing inherited errors (`TS2345`/`TS2322`). No new errors introduced. |
| `i18n/validate-dictionaries.ts` | Exit Code 0 | All valid. |
| `i18n/test.ts` | Exit Code 0 | 64/64 passing. |
| `npm run build` | Exit Code 0 | 109 routes generated. No unexpected routes injected or missing. |

## 12. Browser Runtime & Direct Refresh
- Tested locally: Direct refresh on `/en/knowledge-center/faq` successfully loads.
- "Knowledge Center" text is visible but non-clickable.
- Hydration is clean with 0 console errors.

## 13. Final Git State
- **Branch**: `dev`
- **Status**: No branch created. No commit created. The Working Tree securely houses Batch 5 and this remediation for final user review.

## 14. Final Decision
`FAQ Breadcrumb Parent Remediation Completed — Ready for User Review`
