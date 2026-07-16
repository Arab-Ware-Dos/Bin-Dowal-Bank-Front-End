# Phase 02A.3.15 — Batch 9 Dynamic Product Families Inventory Report

## 1. Executive Summary
This report analyzes two dynamic product families (`/accounts/[slug]` and `/e-services/[slug]`) to determine the scope and sequence for Batch 9. Both families share the exact same underlying architecture (simulated async fetch from a shared static data file and rendering via a shared massive Client Component template). 

Accounts (`/accounts/[slug]`) has 4 clean slugs and a migrated parent (`/personal-banking`). 
E-Services (`/e-services/[slug]`) has 4 slugs and a migrated parent (`/digital-channels`), but contains a known routing discrepancy in `navigation.ts` (`/e-services/bindawal-business` vs `internet-banking` slug).

We recommend prioritizing **Accounts** for Batch 9 to ensure a stable implementation of the exact dynamic route registry pattern for products before addressing the E-services link inconsistency.

## 2. Git Policy
```text
Branch: dev
Working Tree: clean
No branch created
No commit created
No files modified
```

## 3. Baseline
| Check                | Exit Code | Result |
| -------------------- | --------: | ------ |
| Dictionary Validator | 0 | Exit 0 |
| News Drift Test      | 0 | Exit 0 |
| i18n Tests           | 0 | 92/92 |
| TypeScript           | 1 | Baseline Errors Only |
| Build                | 0 | Exit 0 |
| Route Count          | - | 129 |

**TypeScript Errors before Batch 9:**
- `app/(legacy)/personal/_local-transfers/page.tsx` (Pre-existing limitation)
- `app/(legacy)/personal/_international-transfers/page.tsx` (Pre-existing limitation)
- `components/cards/cards-page-content.tsx` (Pre-existing limitation)
- `components/home/partnerships-section.tsx` (Pre-existing limitation)

## 4. File Inventory
| Family | File | Purpose | Client/Server | Risk |
| ------ | ---- | ------- | ------------- | ---- |
| Both | `data/banking-services/banking-services.ts` | Shared Static Data Source | N/A | Low |
| Both | `services/banking-service-pages.ts` | Simulated Async Fetch Layer | Server (used in Server context) | Low |
| Both | `components/service-page/BankingServicePageTemplate.tsx` | Shared UI Template | Client | Medium |
| Both | `components/shared/related-services-slider.tsx` | Related Products Component | Client | Low |
| Accounts | `app/(legacy)/accounts/[slug]/page.tsx` | Legacy Page Component | Server | Low |
| E-Services | `app/(legacy)/e-services/[slug]/page.tsx` | Legacy Page Component | Server | Low |

## 5. Accounts Architecture
| Concern | Finding | Risk |
| ------- | ------- | ---- |
| Component Type | Server Component wrapper over huge Client Component | Medium |
| Params Type | `Promise<{ slug: string }>` | Low |
| `generateStaticParams` | Yes, correctly used | Low |
| Data Source | `data/banking-services/banking-services.ts` | Low |
| Async Fetch Nature | `setTimeout` wrapping synchronous array lookup | Low |
| `generateMetadata` | Yes | Low |
| Unknown Handling | `notFound()` | Low |
| Build-time Known? | Yes, exactly 4 | Low |
| Translations | Yes, AR/EN objects exist in data | Low |
| Forms/Uploads | No | Low |
| Browser APIs | Framer Motion animations inside Client Component | Low |
| Static Export | Succeeds perfectly | Low |

## 6. Accounts Slugs
| Slug | AR Name | EN Name | Data Source | Static Generated | Metadata | Unknown-safe |
| ---- | ------- | ------- | ----------- | ---------------: | -------- | ------------ |
| `vip` | حسابات كبار العملاء | VIP Accounts | Static Data | Yes | Yes | Yes |
| `noor` | حساب نور | Noor Account | Static Data | Yes | Yes | Yes |
| `youth` | حساب الشباب | Youth Account | Static Data | Yes | Yes | Yes |
| `expat` | حساب المغترب | Expatriate Account | Static Data | Yes | Yes | Yes |

- Slugs are exactly 4.
- Unique, no empty slugs, no `/`, valid across locales.

## 7. Accounts Parent Hub
| Question | Finding | Architectural Impact |
| -------- | ------- | -------------------- |
| Is `/accounts` a real route? | No | Parent must be mapped conceptually |
| Conceptual Parent | `/personal-banking` | Breadcrumbs properly trace to Personal Banking |
| Breadcrumb Target | `/personal-banking` | The parent is already migrated to `[locale]` |
| Need to create `/accounts`? | No | Will keep details at `/accounts/[slug]` directly |

## 8. Accounts Metadata
| Slug | AR Title | EN Title | AR Description | EN Description | OG Image | Risk |
| ---- | -------- | -------- | -------------- | -------------- | -------- | ---- |
| `vip` | حسابات كبار العملاء | VIP Accounts | تمتع بمزايا... | Enjoy exclusive... | None spec. | Low |
| `noor` | حساب نور | Noor Account | حساب مخصص... | Dedicated to... | None spec. | Low |
| `youth` | حساب الشباب | Youth Account | ابدأ مستقبلك... | Start your future... | None spec. | Low |
| `expat` | حساب المغترب | Expatriate Account | ابق قريباً... | Stay close to... | None spec. | Low |

## 9. Accounts Translation
| Field | AR | EN | Source | Status |
| ----- | -- | -- | ------ | ------ |
| Title/Subtitle | Yes | Yes | `banking-services.ts` | Complete |
| Hero/Overview | Yes | Yes | `banking-services.ts` | Complete |
| Features/Benefits | Yes | Yes | `banking-services.ts` | Complete |
| Eligibility/Reqs | Yes | Yes | `banking-services.ts` | Complete |
| CTAs/Links | Yes | Yes | `banking-services.ts` | Complete |
| FAQs | Yes | Yes | `banking-services.ts` | Complete |

## 10. Accounts Links
| Source Page | Link Text | Target | Current Helper | Legacy Behavior | URL Mode Behavior |
| ----------- | --------- | ------ | -------------- | --------------- | ----------------- |
| Header Nav | حساب المغترب | `/accounts/expat` | Hardcoded | 200 OK | Needs `resolveHref` |
| Header Nav | حسابات الجارية | `/accounts/noor` | Hardcoded | 200 OK | Needs `resolveHref` |
| `navigation.ts` | حساب الشباب | `/accounts/youth` | Commented Out | N/A | Needs `resolveHref` |

## 11. E-Services Architecture
| Concern | Finding | Risk |
| ------- | ------- | ---- |
| Component Type | Server Component wrapper over huge Client Component | Medium |
| Params Type | `Promise<{ slug: string }>` | Low |
| `generateStaticParams` | Yes, correctly used | Low |
| Data Source | Same as Accounts | Low |
| Async Fetch Nature | `setTimeout` wrapping synchronous array lookup | Low |
| `generateMetadata` | Yes | Low |
| Unknown Handling | `notFound()` | Low |

## 12. E-Services Slugs
| Slug | AR Name | EN Name | Data Source | Static Generated | Metadata | External Dependency |
| ---- | ------- | ------- | ----------- | ---------------: | -------- | ------------------- |
| `mobile-banking` | التطبيق البنكي | Mobile Banking | Static Data | Yes | Yes | None |
| `internet-banking` | بن دول اعمال | Internet Banking | Static Data | Yes | Yes | None |
| `e-wallet` | المحفظة الإلكترونية | E-Wallet | Static Data | Yes | Yes | None |
| `mushtarayati-network` | شبكة مشترياتي | Mushtarayati Network | Static Data | Yes | Yes | None |

## 13. E-Services Parent Hub
| Item | Finding |
| ---- | ------- |
| Actual parent hub | `/digital-channels` (No `/e-services` exists) |
| Breadcrumb parent | `/digital-channels` |
| Required rename? | No, `/e-services/[slug]` is valid on its own. |

## 14. E-Services Metadata
| Slug | AR Title | EN Title | AR Description | EN Description | OG Image | Risk |
| ---- | -------- | -------- | -------------- | -------------- | -------- | ---- |
| `mobile-banking` | التطبيق البنكي | Mobile Banking | تحكم بحساباتك... | Control your accounts... | None spec. | Low |
| `internet-banking` | بن دول اعمال | Internet Banking | إدارة أعمالك... | Manage your business... | None spec. | Low |
| `e-wallet` | المحفظة الإلكترونية | E-Wallet | محفظتك الرقمية... | Your digital wallet... | None spec. | Low |
| `mushtarayati...` | شبكة مشترياتي | Mushtarayati... | شبكة واسعة... | A wide network... | None spec. | Low |

## 15. E-Services Translation
| Field | AR | EN | Source | Status |
| ----- | -- | -- | ------ | ------ |
| Title/Subtitle | Yes | Yes | `banking-services.ts` | Complete |
| Steps/Benefits | Yes | Yes | `banking-services.ts` | Complete |
| Reqs/Links | Yes | Yes | `banking-services.ts` | Complete |

## 16. E-Services Links
| Source Page | Link Text | Target | Current Helper | Legacy Behavior | URL Mode Behavior |
| ----------- | --------- | ------ | -------------- | --------------- | ----------------- |
| Header Nav | التطبيق البنكي | `/e-services/mobile-banking` | Hardcoded | 200 OK | Needs mapping |
| Header Nav | منصة اعمال | `/e-services/bindawal-business` | Hardcoded | **404 Expected** | Discrepancy Risk |
| Header Nav | محفظة | `/e-services/e-wallet` | Hardcoded | 200 OK | Needs mapping |
| Header Nav | مشترياتي | `/e-services/mushtarayati-network` | Hardcoded | 200 OK | Needs mapping |

## 17. Simulated Async Audit
| Function | Family | Async Type | Runtime Network? | Build-safe? |
| -------- | ------ | ---------- | ---------------: | ----------: |
| `getBankingServiceBySlug` | Both | `setTimeout` wrapped synchronous lookup | No | Yes |
| `getAllBankingServicesSlugs` | Both | `setTimeout` wrapped synchronous lookup | No | Yes |

## 18. Static Export Contract
| Family | Slug Count | All Known at Build? | generateStaticParams | Runtime Dependency | Static Export |
| ------ | ---------: | ------------------: | -------------------- | ------------------ | ------------- |
| Accounts | 4 | Yes | Yes | None | Yes |
| E-Services | 4 | Yes | Yes | None | Yes |

## 19. Dynamic Params
| Family | Current Contract | Correct? | Required Change |
| ------ | ---------------- | -------: | --------------- |
| Accounts | `Promise<{ slug: string }>` | Yes | `Promise<{ locale: string; slug: string }>` for i18n |
| E-Services | `Promise<{ slug: string }>` | Yes | `Promise<{ locale: string; slug: string }>` for i18n |

## 20. Exact Registry Strategy
| Family | Exact Entries | Prefix Matching Needed? | Drift Test Needed? | Risk |
| ------ | ------------: | ----------------------: | -----------------: | ---- |
| Accounts | 4 (`/accounts/<slug>`) | No | Yes | Low |
| E-Services | 4 (`/e-services/<slug>`) | No | Yes | Medium (Link Bug) |

## 21. Drift Test Feasibility
Creating `i18n/accounts-drift.ts` and `i18n/e-services-drift.ts` is fully feasible and mirrors the `news-drift.ts` methodology safely.

## 22. Breadcrumb Architecture
| Slug | Home | Parent Text | Parent Href | Current Item |
| ---- | ---- | ----------- | ----------- | ------------ |
| (Accounts) | `/` | Personal Banking | `/personal-banking` | Current |
| (E-Services) | `/` | Digital Channels | `/digital-channels` | Current |

Both parents are successfully migrated.

## 23. CTA and External Integrations
| CTA | Family | Type | Target | Locale-safe? | Risk |
| --- | ------ | ---- | ------ | ------------ | ---- |
| Primary CTA | Both | Contact Us | `/contact` | Needs helper | Low |
| App Store Links | E-Services | External URL | `https://play.google.com/...` | Yes | Low |

## 24. Client Boundaries
| Family | Current Page | Hooks | Browser APIs | Heavy Libraries | Proposed Server Shell | Risk |
| ------ | ------------ | ----- | ------------ | --------------- | --------------------- | ---- |
| Both | `BankingServicePageTemplate` | `useI18n`, `useReducedMotion`, `useAnimation` | Framer Motion | Framer, Accordion | Same exact Server Shell | Low |

## 25. Legacy Preservation Risks
| Family | DOM Risk | Functional Risk | Metadata Risk | Legacy Regression Risk |
| ------ | -------- | --------------- | ------------- | ---------------------- |
| Accounts | Low | Low | Low | Low |
| E-Services | Low | Low | Low | Low |

## 26. URL Switcher
| Family | AR → EN | EN → AR | Unknown Behavior | Risk |
| ------ | ------- | ------- | ---------------- | ---- |
| Both | `/ar/<family>/<slug>` → `/en/...` | Identical | Falls to 404 | Low |

## 27. Header/Footer
| Location | Link | Legacy href | AR href | EN href | Status |
| -------- | ---- | ----------- | ------- | ------- | ------ |
| Header Nav | Expat Account | `/accounts/expat` | `/ar/accounts/expat` | `/en/accounts/expat` | Unmapped |
| Header Nav | Business Bank | `/e-services/bindawal-business` | `N/A` | `N/A` | **Slug Mismatch** |

## 28. Hub Integration
| Slug | Legacy href | AR href | EN href | Current Problem |
| ---- | ----------- | ------- | ------- | --------------- |
| N/A | N/A | N/A | N/A | No parent Hub array links to dynamically resolve yet. |

## 29. Route Conflicts
| Slug | Family | Potential Conflict | Current Behavior | Risk |
| ---- | ------ | ------------------ | ---------------- | ---- |
| All | Both | None found | Slugs do not conflict with static folders | Low |

## 30. Content Accuracy
All data exists strictly inside `data/banking-services/banking-services.ts`. It acts as Production static content.

## 31. Accounts Route Count
`Added Localized Routes = 2 × 4 = 8`
`Expected Route Count = 129 + 8 = 137`

## 32. E-Services Route Count
`Added Localized Routes = 2 × 4 = 8`
`Expected Route Count = 129 + 8 = 137`

## 33. Combined Route Count
`Added Localized Routes = 16`
`Expected Route Count = 145`

## 34. Candidate Risk Classification
| Candidate | Risk | Primary Reason | Secondary Reason |
| --------- | ---- | -------------- | ---------------- |
| Accounts | Low | Clean data, clean parent | Minimal Header Link mapping needed |
| E-Services | Medium | Has a known hardcoded link mismatch (`bindawal-business` instead of `internet-banking`) | Requires resolving link discrepancy securely |

## 35. Option A — Accounts Only
- Routes Added: 8
- Expected Total: 137
- Parent: `/personal-banking` (Clean)
- Risk: Low

## 36. Option B — E-Services Only
- Routes Added: 8
- Expected Total: 137
- Parent: `/digital-channels` (Clean)
- Risk: Medium (Due to link mismatch)

## 37. Option C — Accounts and E-Services Together
- Routes Added: 16
- Expected Total: 145
- Risk: Medium. Shared UI and architecture make combining tempting, but handling the E-Services header link bug alongside a new Dynamic Registry might obfuscate validation boundaries.

## 38. Option D — Defer Batch 9
Not applicable. No hard runtime dependencies.

## 39. Direct Comparison
| Criterion | Accounts | E-Services |
| --------- | -------- | ---------- |
| Slug count | 4 | 4 |
| Parent hub exists | Conceptual (`/personal-banking`) | Conceptual (`/digital-channels`) |
| Parent hub migrated | Yes | Yes |
| Route naming consistent | Yes | **No (`bindawal-business` vs `internet-banking`)** |
| Static data | Yes | Yes |
| Async simulation | Yes | Yes |
| generateStaticParams | Yes | Yes |
| Metadata | Complete | Complete |
| Internal links | Clean | Dirty (1 bug) |
| Expected total routes | 137 | 137 |
| Overall risk | Low | Medium |

## 40. Recommended Batch 9
```text
Recommended Batch 9:
- /accounts/[slug]
```
Current Route Count: 129
Selected Family: Accounts
Current Slug Count: 4
Added Localized Routes: 8
Expected Route Count: 137

Risk: Low

Reason:
Accounts represent a zero-friction candidate to establish the Exact Registry Pattern for the Shared `BankingServicePageTemplate`. Deferring E-Services allows us to treat the `navigation.ts` slug mismatch (`bindawal-business`) as an isolated fix in Batch 10 without cluttering the initial Accounts migration.

## 41. Deferred Family
| Family | Deferred? | Reason | Required Before Migration |
| ------ | --------- | ------ | ------------------------- |
| E-Services | Yes | Link discrepancy | Fix `href: "/e-services/bindawal-business"` in `navigation.ts` to match the actual slug `internet-banking`. |

## 42. Proposed Implementation Scope
- `app/(legacy)/accounts/[slug]/page.tsx`
- `app/[locale]/accounts/[slug]/page.tsx`
- `lib/account-routes.ts`
- `lib/localized-routes.ts`
- `i18n/accounts-drift.ts`
- `i18n/test.ts`
- `components/layout/header.tsx` (or `navigation.ts` if mapped via `getLocalizedHref` at build-time safely)

*Note: `BankingServicePageTemplate` will require `resolveHref` on its CTAs similarly to News.*

## 43. Proposed Tests
- 8 exact known-slug mappings for AR and EN.
- 2 unknown fallbacks.
- 2 query/hash mapping tests.
Total proposed i18n tests: 12 new tests.

## 44. Open Questions
- Is `navigation.ts` parsed in a way that allows us to pass its `href` to `getLocalizedHref` during runtime rendering of the Header, or do we strictly map it inside `Header` component? (Answer: We map it inside `Header` component or `navigation-menu.tsx` safely.)
- Does `RelatedServicesSlider` use `getLocalizedHref`? (Answer: It uses direct `<Link href={service.href}>`, which needs an update to use `resolveHref` depending on `mode`.)

## 45. Git Final State
```text
Branch: dev
Working Tree: clean
No branch created
No commit created
No files modified
```

## 46. Final Decision
`Batch 9 Inventory Completed — Accounts Dynamic Routes Recommended`
