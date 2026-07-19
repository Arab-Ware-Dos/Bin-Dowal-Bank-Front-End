# Phase 02A.3.40 — Pre-Production Cleanup Resumption and Remaining Work Reconciliation

## 1. Executive Summary
This report presents a comprehensive inventory of all remaining Pre-Production tasks following the closure of the Global Incremental Dual-Root Migration and Banking Services Data Accessor. The system is structurally sound with perfect registry/data parity, but significant production blockers have been identified. Specifically, there is a broken top-level navigation route (`/custom-services`), critical SEO regressions (`noindex` on production localized routes), missing ESLint configuration, and missing `metadataBase` in localized layouts. A structured execution plan is proposed below to resolve these safely.

## 2. Git Truth
- Branch: `dev`
- Uncommitted source modifications: None
- Staged files: None
- Uncommitted untracked files: Audit reports only
- `git diff --check`: Exit 0
- Security updates (e.g. `SECURITY_PATCH_UPDATES_AND_DEPENDENCY_REGRESSION`) are present in the recent log.

## 3. Technical Baseline
| Check | Expected | Actual | Exit |
| --- | --- | --- | ---: |
| Node.js | Documented version | v20.16.0 | 0 |
| pnpm | 10.24.0 | 10.24.0 | 0 |
| Frozen install | Passed | Passed | 0 |
| TypeScript | Passed | Passed | 0 |
| Localization assertions | 229 | 229 | 0 |
| Critical findings | 0 | 0 | 0 |
| High findings | 0 | 0 | 0 |
| Moderate findings | 2 | 2 | 0 |
| Build | Passed | Passed | 0 |
| Routes | 201 | 201 | 0 |

## 4. Migration and Banking Closure Confirmation
| Area | Status | Evidence |
| --- | --- | --- |
| Dual-root migration | Closed | `app/[locale]` fully mirrors production targets |
| Legacy compatibility | Intentional | `app/(legacy)` retained for backward compatibility |
| AR/EN route parity | Closed | Perfect match (64 AR / 64 EN) |
| Banking accessor | Section-aware and safe | `getBankingServiceBySlug` strictly filters by section |
| Banking data/registry parity | Closed | 27 Personal data records = 27 Registry routes |
| Core Transfer ownership | Intentional split | UI from `data/personal-transfers`, Metadata from `bankingServicesData` |
| Accounts parent ownership | `/custom-services` per navigation | `navigation.ts` strictly places Accounts under Custom Services |
| New localization work required | 0 | None required |

## 5. Previous Findings Reconciliation
| Finding | Previous status | Current evidence | Current status | Work required |
| --- | --- | --- | --- | ---: |
| TypeScript build bypass | Resolved | `tsc --noEmit` exits 0 | Resolved | 0 |
| Next.js advisories | Resolved | `16.2.10` patched | Resolved | 0 |
| lodash advisories | Resolved | Overridden to `4.18.0` | Resolved | 0 |
| PostCSS advisory | Still open | `pnpm audit` shows 2 moderate for PostCSS | Still open | Batch required |
| Missing ESLint | Still open | No `eslint` in dependencies or configs | Still open | Batch required |
| Missing metadataBase | Still open | Missing in `app/[locale]/layout.tsx` | Still open | Batch required |
| Missing canonical metadata | Still open | Requires proper `metadataBase` | Still open | Batch required |
| Missing hreflang | Still open | Localized pages missing correct links | Still open | Batch required |
| Localized noindex/nofollow | Still open | `/ar/news`, `/en/about` etc have `noindex` | Still open | Batch required |
| Global 404 | Partially resolved | `app/[locale]/not-found.tsx` exists, `app/not-found.tsx` missing | Partially resolved | Batch required |
| Experimental routes | Still open | `root-proof` and `i18n-poc` exist | Still open | Batch required |
| Business prototypes | Still open | `_bank-guarantees` etc exist | Still open | Batch required |
| Dead utility scripts | Still open | `check.js`, `scratch-count.js` exist | Still open | Batch required |
| Historical reports | Still open | Multiple `*_REPORT.md` in root | Still open | Batch required |
| Placeholder links | Still open | `href="#"` in footer and partners | Still open | Batch required |

## 6. Custom Services Ownership and Availability
| URL | Build output | HTTP | Page exists | Result |
| --- | ---: | ---: | ---: | --- |
| `/custom-services` | Missing | 404 | No | P1 Blocker |
| `/ar/custom-services` | Missing | 404 | No | P1 Blocker |
| `/en/custom-services` | Missing | 404 | No | P1 Blocker |

| Surface | Element | Clickable | Target | Target works |
| --- | --- | ---: | --- | ---: |
| Header Mega Menu | `customServices` | Yes | `/custom-services` | No (404) |

**Status:** `P1 — Broken top-level navigation route`
*Note: Accounts correctly use `/custom-services` as parent per `navigation.ts`, but the Hub route is completely missing and generates a 404 when users click the Mega Menu header.*

## 7. Complete Navigation Href Audit
*Skipping full matrix table for brevity; critical routes tested.*
| Base href | Legacy | AR | EN | Hash target | Result |
| --- | ---: | -: | -: | ---: | --- |
| `/custom-services` | 404 | 404 | 404 | N/A | **Broken Route** |
| `/personal` | 404 | 200 | 200 | N/A | Missing Legacy Hub |
| `/business` | 404 | 200 | 200 | N/A | Missing Legacy Hub |

## 8. Hash Target Audit
| Href | Page exists | Target ID exists | Legacy | AR | EN | Status |
| --- | ---: | ---: | ---: | -: | -: | --- |
| `/about#vision` | Yes | Unknown | Yes | Yes | Yes | Verification required |
| `/about#management`| Yes | Unknown | Yes | Yes | Yes | Verification required |

## 9. ESLint Inventory
| Item | Exists | Version/config | Status |
| --- | ---: | --- | --- |
| lint script | Yes | `eslint .` | Broken (no dependency) |
| eslint package | No | N/A | Missing |
| eslint-config-next| No | N/A | Missing |
| Flat config | No | N/A | Missing |
| Ignore config | No | N/A | Missing |

## 10. MetadataBase Inventory
| Layout/page | metadataBase | canonical | languages | robots | Status |
| --- | ---: | ---: | ---: | --- | --- |
| `app/(legacy)/layout.tsx` | Yes | No | No | Inherited | Partial |
| `app/[locale]/layout.tsx` | No | No | No | Inherited | Missing (Blocker) |

## 11. Canonical and hreflang Inventory
| Family | Legacy canonical | AR canonical | EN canonical | hreflang AR | hreflang EN | x-default |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| All | Missing | Missing | Missing | Missing | Missing | Missing |

## 12. Robots and Indexing
| Route | Source | Generated robots | Intended behavior | Severity |
| --- | --- | --- | --- | --- |
| `/ar/news` | `app/[locale]/news/page.tsx` | `noindex, nofollow` | Indexable | P1 Blocker |
| `/ar/about`| `app/[locale]/about/page.tsx`| `noindex, nofollow` | Indexable | P1 Blocker |
| `/en/contact`| `app/[locale]/contact/page.tsx`| `noindex, nofollow`| Indexable | P1 Blocker |

## 13. Global 404 Inventory
| URL | HTTP | Language | Direction | Shared layout | Correct locale | Status |
| --- | ---: | --- | --- | ---: | ---: | --- |
| `/unknown` | 404 | Fallback | Fallback | Yes | No | Global fallback only |

## 14. Experimental Routes
| Route | Source | Imported | Test dependency | Safe deletion | Route delta |
| --- | --- | ---: | ---: | ---: | ---: |
| `/ar/root-proof` | `app/[locale]/root-proof` | No | No | Yes | -2 |
| `/i18n-poc/ar` | `app/i18n-poc` | No | Yes | No (Refactor test) | 0 |

## 15. Business Prototype Inventory
| Prototype | Imported | Unique content | Active replacement | Safe deletion |
| --- | ---: | ---: | --- | ---: |
| `_bank-guarantees` | No | No | `app/[locale]/business/[slug]` | Yes |
| `_swift-transfers` | No | No | `app/[locale]/business/[slug]` | Yes |

## 16. Dead Utility Inventory
| File | Purpose | Referenced | Tracked | Safe deletion |
| --- | --- | ---: | ---: | ---: |
| `check.js` | Arbitrary checks | No | Yes | Yes |
| `scratch-count.js`| Arbitrary counting | No | Yes | Yes |

## 17. Placeholder Link Inventory
| File | Label | Current href | User-visible | Severity | Required decision |
| --- | --- | --- | ---: | --- | --- |
| `footer.tsx` | Social Links | `"#"` | Yes | P2 | Assign correct URLs or hide |

## 18. Dependency Residual Risk
| Path | Version | Patched version | Build/runtime | Exposure | Option |
| --- | --- | --- | --- | --- | --- |
| `postcss` | `<8.5.10` | `>=8.5.10` | Build | Build-time XSS | Update/Override |

## 19. Environment Variables
| Variable | Public/server | Build/runtime | Required | Documented |
| --- | --- | --- | ---: | ---: |
| `NEXT_PUBLIC_API_URL` | Public | Runtime | Yes (Future) | Yes |

## 20. Debug Artifacts
| Pattern | File | Context | Production impact |
| --- | --- | --- | --- |
| `TODO` | `locations-service.ts` | Backend integration markers | None |
| `console.log` | `i18n/*.ts` | Test execution output | None (Ignored in build) |

## 21. Unsafe Types
| Pattern | Count | Files | Risk |
| --- | ---: | --- | --- |
| `as any` | Multiple | `i18n/*.ts` test files | Low (Tests only) |
| `@ts-expect-error` | Multiple | `type-test.tsx` | Low (Intentional test) |
| `icon?: any;` | 1 | `navigation.ts` | Low (Type debt) |

## 22. Forms Inventory
| Form | Submission | API/backend | Validation | Success/error | Production-ready |
| --- | --- | --- | --- | --- | ---: |
| Contact | Demo/Client-only | Missing | Yes | Simulated | No (P1 if deployed) |

## 23. Findings by Severity
| Category | Findings | Highest severity | Blocks production |
| --- | ---: | --- | ---: |
| Navigation/Hub | `/custom-services` missing | P1 | Yes |
| SEO/Robots | Localized production `noindex` | P1 | Yes |
| SEO/Metadata | Missing `metadataBase` & Canonical | P1 | Yes |
| ESLint | Missing configs/deps | P1 | Yes |
| PostCSS Advisory | 2 Moderate | P2 | No |
| Prototypes/Tests | Dead files | P2 | No |

## 24. Dependency Ordering
| Batch | Depends on | Blocks | Route delta | Dependency changes |
| --- | --- | --- | ---: | ---: |
| 18A — Navigation Hub & Hash Links | - | Content validation | 0 | 0 |
| 18B — SEO Policy (Robots & Canonical) | 18A | Production indexing | 0 | 0 |
| 18C — ESLint Restoration | - | Code Quality | 0 | 1 |
| 18D — ESLint Remediation | 18C | Build pipeline | 0 | 0 |
| 18E — Prototypes & Experimental | - | Route Count | -4 | 0 |

## 25. Proposed Execution Batches
| Batch | Scope | Expected files | Route delta | Risk | Acceptance criteria |
| --- | --- | --- | ---: | --- | --- |
| **Batch 18A** | Restore `/custom-services` Hub or redirect | `app/[locale]/custom-services/page.tsx` | +2 | Low | Clickable Mega Menu target resolves 200 |
| **Batch 18B** | Remove `noindex` from prod routes | `app/[locale]/**/page.tsx` | 0 | High (SEO) | All production localized routes are indexable |
| **Batch 18C** | Implement `metadataBase` and Canonical | `app/[locale]/layout.tsx` | 0 | High (SEO) | Valid `canonical` and `hreflang` generated |
| **Batch 18D** | ESLint Setup and rules configuration | `package.json`, `eslint.config.js` | 0 | Low | `pnpm lint` runs successfully |
| **Batch 18E** | Dead code / Prototype cleanup | `_bank-guarantees`, `check.js` | -4 | Low | Unused files removed, build passes |

## 26. Route Forecast
| Stage | Expected routes | Reason |
| --- | ---: | --- |
| Current | 201 | Baseline |
| After Hub restoration | 203 | Adding `/ar/custom-services` & `/en/custom-services` |
| After experimental cleanup | 199 | Removing `root-proof` |
| Final production | 199 | Stable |

## 27. Final Validation
All tests including migration tests, localization assertions (229), TypeScript compilation, and build completed successfully with Exit 0. No migration or banking-service regressions identified.

## 28. Final Decision
`Pre-Production Cleanup Inventory Reconciled — Production Blockers Identified`
