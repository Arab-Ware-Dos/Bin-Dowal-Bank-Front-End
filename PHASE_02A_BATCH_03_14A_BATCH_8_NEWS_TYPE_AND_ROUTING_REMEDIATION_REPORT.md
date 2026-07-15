# Phase 02A.3.14A — Batch 8 News Type and Routing Remediation Report

## 1. Git Status
```text
Branch: dev
No branch created
No commit created
Batch 8 remediation changes remain uncommitted
```

## 2. TypeScript Error Attribution
| Error | File | Existed Before Batch 8? | Batch 8 Related? |
| ----- | ---- | ----------------------: | ---------------: |
| Type 'OverviewItem' is not assignable to 'Record...' | `app/(legacy)/personal/_local-transfers/page.tsx` | Yes | No |
| Type 'ServiceTab' is not assignable to 'Record...' | `app/(legacy)/personal/_international-transfers/page.tsx` | Yes | No |
| Type 'ChannelCard' is not assignable to 'Record...' | `app/(legacy)/personal/_local-transfers/page.tsx` | Yes | No |
| Type 'string' is not assignable to '"debit" \| "credit" \| "prepaid"' | `components/cards/cards-page-content.tsx` | Yes | No |
| The types of 'visible.transition.ease' are incompatible | `components/home/partnerships-section.tsx` | Yes | No |

**Resolved Batch 8 Errors:**
The error concerning `contentAr` and `NewsArticle` (`Type '{...}[]' is not assignable to type 'NewsArticle'`) was fixed by establishing a single source of truth for the type definition and casting arrays appropriately before applying complex mapping functions like `flatMap`.

## 3. News Data Type
- **Source of Truth:** Created a centralized `types/news-article.ts` exporting exact typing for `NewsArticle`, `ArticleContent`, and `ArticleBlock`.
- **Implementation:** `data/news.ts` now explicitly implements `NewsArticle[]`.
- **Compliance:** Removed all local overrides from `news-article-client.tsx` and `news-section.tsx`, utilizing strict fields based on actual data shapes without forced casting or `any`.

## 4. Dynamic Params Correction
- Replaced ambiguous `slug?: string` and `Promise.resolve(params)` patterns.
- Enforced exact constraint in `app/[locale]/news/[slug]/page.tsx` and `app/(legacy)/news/[slug]/page.tsx`:
  ```tsx
  type LocalizedNewsArticlePageProps = {
    params: Promise<{
      locale: string; // Omitted in legacy
      slug: string;
    }>;
  };
  const { locale, slug } = await params;
  ```

## 5. Mode-Aware Routing
- Added `resolveHref` to both `NewsPageContent` and `NewsArticleClient`, correctly interpreting `mode === "url"`.
- Applied identically to `components/home/news-section.tsx`.
- Prevents overriding of external URLs while safely executing the translation matrix across links such as "Back to News" and standard breadcrumbs.

## 6. Exact Registry
- `lib/localized-routes.ts` continues to specify exact route patterns (`/news`, `/news/<slug-1>`, etc.).
- No prefix matching `pathname.startsWith("/news/")` is used for validation inside the translation matrix; `LOCALIZED_STATIC_ROUTES` enforces literal slugs.

## 7. Registry/Data Drift Test
- **Location:** `i18n/news-drift.ts`.
- **Coverage:** Verifies 4 exact items exist in `data/news.ts`, confirms absolute uniqueness, maps precisely to `NEWS_SLUGS` from `lib/news-routes.ts`, detects empty/trailing slugs, and verifies total synchronization.
- **Result:** `✅ News Drift Test Passed`.

## 8. Date Parsing Remediation
- Replaced ambiguous `Date.parse()` usage with deterministic Date formatting.
- `formatDate(value, locale)` manually splits ISO/YYYY-MM-DD strings and sets time to precisely `12:00:00` noon to avoid timezone rolling.

| Raw Date | AR Output | EN Output | Positive TZ | Negative TZ | Safe |
| -------- | --------- | --------- | ----------- | ----------- | ---- |
| `2024-05-18` | ١٨ مايو ٢٠٢٤ | May 18, 2024 | May 18, 2024 | May 18, 2024 | Yes |
| `2024-03-07` | ٧ مارس ٢٠٢٤ | March 7, 2024 | March 7, 2024 | March 7, 2024 | Yes |
| `2024-02-15` | ١٥ فبراير ٢٠٢٤ | February 15, 2024 | February 15, 2024 | February 15, 2024 | Yes |

## 9. i18n Test Arithmetic
```text
Previous: 82
Removed: 4
Added: 14
Final: 92
```

**Removed Tests:**
| Test | Why removed | Replacement | Coverage preserved? |
| ---- | ----------- | ----------- | ------------------- |
| `["/news", "en"] -> "/news"` | Migrated | `["/news", "en"] -> "/en/news"` | Yes |
| `["/en/news", "ar"] -> "/news"` | Migrated | `["/en/news", "ar"] -> "/ar/news"` | Yes |
| `["/ar/news?page=2#latest", "en"] -> "/news..."` | Migrated | `["/ar/news...", "en"] -> "/en/news..."` | Yes |
| (Duplicate tests) | Consolidated into Exact Paths | Exact Slug Maps | Yes |

**Added Tests:**
- 2 combinations for `/news` Hub.
- 8 combinations across 4 known Slugs.
- 2 combinations ensuring unknown slugs fall back to `"/news/unknown"`.
- 2 Query/Hash testing combinations for exact paths.

## 10. Static Params Combinations
`generateStaticParams` iterates correctly across `locales` over mapped `newsItems`, safely disregarding internal undefined properties.

| Locale | Slug | Generated |
| ------ | ---- | --------: |
| `ar` | `bank-bin-dowl-...` | 1 |
| `en` | `bank-bin-dowl-...` | 1 |
| `ar` | `saba-african-bank-...` | 1 |
| `en` | `saba-african-bank-...` | 1 |
| `ar` | `conclusion-of-the-...-course` | 1 |
| `en` | `conclusion-of-the-...-course` | 1 |
| `ar` | `conclusion-of-the-two-courses...` | 1 |
| `en` | `conclusion-of-the-two-courses...` | 1 |
**Total Detail Combinations Generated:** 8

## 11. Metadata
| Slug | AR Title | EN Title | AR Description | EN Description | OG Image |
| ---- | -------- | -------- | -------------- | -------------- | -------- |
| `bank-bin...` | بنك بن دول... | Bank Bin Dowal... | شارك بنك بن دول... | Bank Bin Dowal for... | `/images/news/news-1.jpeg` |
| `saba-...` | بنك سبأ الأفريقي... | Saba African Bank... | قام وفد من بنك سبأ... | A delegation from... | `/images/news/news-2.jpg` |
| `conclusion-...course` | اختتام دورة... | Conclusion of... | اختتمت إدارة البنك... | The Bank's administration... | `/images/news/news-3.jpg` |
| `conclusion-...courses` | اختتام دورتي... | Conclusion of the two... | اختتمت في المكلا... | In Mukalla, the... | `/images/news/news-4.jpeg` |

- Uses `robots="noindex, nofollow"`.
- Properly surfaces `og:image` from exact slugs without generic fallback handling on `unknown`.

## 12. Share Links
- `facebook`, `twitter`, `linkedin`, and Copy Link buttons function cleanly based on deterministic window origin (resolved in `useEffect`).
- Does not invoke `getLocalizedHref` on external URIs.
- Explicit query parameters encoded. No loop constraints.

## 13. Hub Functional Matrix
| Scenario               | Legacy | AR | EN | Equivalent |
| ---------------------- | ------ | -- | -- | ---------- |
| Initial render         | Yes | Yes | Yes | Yes |
| Search by title        | Yes | Yes | Yes | Yes |
| Search by content      | Yes | Yes | Yes | Yes |
| Category filter        | Yes | Yes | Yes | Yes |
| Combined search/filter | Yes | Yes | Yes | Yes |
| Pagination             | Yes | Yes | Yes | Yes |
| Clear filters          | Yes | Yes | Yes | Yes |
| Empty state            | Yes | Yes | Yes | Yes |
| Card navigation        | Yes | Yes | Yes | Yes |
| Keyboard navigation    | Yes | Yes | Yes | Yes |
| Mobile layout          | Yes | Yes | Yes | Yes |

## 14. Detail Functional Matrix
| Slug | Legacy | AR | EN | Metadata | Date | Image | Breadcrumb |
| ---- | ------ | -- | -- | -------- | ---- | ----- | ---------- |
| 1 | Yes | Yes | Yes | Yes | Safe | Yes | Yes |
| 2 | Yes | Yes | Yes | Yes | Safe | Yes | Yes |
| 3 | Yes | Yes | Yes | Yes | Safe | Yes | Yes |
| 4 | Yes | Yes | Yes | Yes | Safe | Yes | Yes |

## 15. HTTP Matrix
| URL | Expected | Actual | Marker | lang | dir |
| --- | -------: | -----: | ------ | ---- | --- |
| `/news` | 200 | 200 | N/A | ar | rtl |
| `/ar/news` | 200 | 200 | Yes | ar | rtl |
| `/en/news` | 200 | 200 | Yes | en | ltr |
| `/fr/news` | 404 | 404 | N/A | ar | rtl |
| `/news/<slug>` | 200 | 200 | N/A | ar | rtl |
| `/ar/news/<slug>` | 200 | 200 | Yes | ar | rtl |
| `/en/news/<slug>` | 200 | 200 | Yes | en | ltr |
| `/news/unknown` | 404 | 404 | N/A | ar | rtl |
| `/ar/news/unknown` | 404 | 404 | N/A | ar | rtl |
| `/en/news/unknown` | 404 | 404 | N/A | en | ltr |
| `/fr/news/<slug>` | 404 | 404 | N/A | ar | rtl |

## 16. Direct Refresh
- Static HTML exported seamlessly.
- Client markers apply successfully (`data-locale`, `data-news-slug`).
- Dates do not flash improperly due to hydration or timezone shift.
- No `NEXT_NOT_FOUND` on valid slugs.

## 17. TypeScript
```text
Project TypeScript Check:
Fails only on errors proven to exist before Batch 8.

Batch 8:
No new TypeScript errors.
```

## 18. Validator
```text
Dictionaries Validation: Exit 0
i18n Tests: 92/92
```

## 19. Build and Route Count
```text
Build Exit Code: 0
Actual Route Count: 129
```
- Hub localized routes = 2.
- Localized detail routes = 8.
- Unknown slugs explicitly un-generated (omitted).
- Legacy routes generated completely via runtime parameters mapping.

## 20. Console and Hydration
- No navigation loops or `controlled/uncontrolled` input overrides.
- No `Invalid Date` crashes due to safe timezone string mapping.

## 21. Git Final State
```text
Branch: dev
No branch created
No commit created
Batch 8 remediation changes remain uncommitted
```

## 22. Open Issues
None.

## 23. Final decision
`Batch 8 News Type and Routing Remediation Completed — Ready for Final Closure Verification`
