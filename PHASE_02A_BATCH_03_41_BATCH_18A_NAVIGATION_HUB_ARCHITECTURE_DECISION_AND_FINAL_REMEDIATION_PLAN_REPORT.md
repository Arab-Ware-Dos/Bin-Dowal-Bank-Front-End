
# Phase 02A.3.41 — Batch 18A Navigation Hub Architecture Decision and Final Remediation Plan

## 1. Executive Summary
This report defines the final architectural decisions for the missing navigation Hub routes. The `/personal`, `/business`, and `/e-services` top-level sections will reuse their existing detail pages as functional hubs. The `/custom-services` and `/knowledge` sections require the creation of new dedicated hub pages to correctly represent their content. Hash links and local route targets are evaluated to ensure a functional and strictly accessible Mega Menu interaction.

## 2. Git Truth
- Branch: `dev`
- Uncommitted source modifications: None
- Staged files: None
- Uncommitted untracked files: Audit reports only
- `git diff --check`: Exit 0

## 3. Technical Baseline
| Check | Expected | Actual | Exit |
| ----- | -------- | ------ | ---: |
| Branch | `dev` | `dev` | 0 |
| No source modifications | Pass | Pass | 0 |
| TypeScript | Exit 0 | Exit 0 | 0 |
| Localization assertions | 229 | 229 | 0 |
| Build | Exit 0 | Exit 0 | 0 |
| Routes | 201 | 201 | 0 |

## 4. Personal Banking Decision
| Option | Duplicate content | Route addition | SEO risk | Recommendation |
| ------ | ----------------: | -------------: | -------: | -------------- |
| Use `/personal-banking` | No | 0 | Low | Recommended |
| Create `/personal` | Yes | +3 | High | Not Recommended |
| Non-link trigger | No | 0 | Low | Alternative |

**Decision:** `Use existing /personal-banking hub`

**Proposed Values:**
- `personalBanking.href: "/personal-banking"`
- `personalBanking.imageLink: "/personal-banking"`

## 5. Business Banking Decision
| Option | Duplicate content | Route addition | SEO risk | Recommendation |
| ------ | ----------------: | -------------: | -------: | -------------- |
| Use `/business-banking` | No | 0 | Low | Recommended |
| Create `/business` | Yes | +3 | High | Not Recommended |
| Non-link trigger | No | 0 | Low | Alternative |

**Decision:** `Use existing /business-banking hub`

**Proposed Values:**
- `businessBanking.href: "/business-banking"`
- `businessBanking.imageLink: "/business-banking"`

## 6. E-Services Decision
| Option | Route addition | Ownership match | Recommendation |
| ------ | -------------: | --------------: | -------------- |
| Use `/digital-channels` | 0 | High (matches all features) | Recommended |
| Create `/e-services` hub | +3 | Duplicate | Not Recommended |
| Non-link trigger | 0 | N/A | Alternative |

**Decision:** `Use existing /digital-channels hub`

**Proposed Values:**
- `digitalChannels.href: "/digital-channels"`

## 7. `/digital` References Decision
| Current link | Context | Proposed target | Reason |
| ------------ | ------- | --------------- | ------ |
| `/digital` | Expat services | `/digital-channels` | Direct map to digital services hub |
| `/digital` | Noor services | `/digital-channels` | Direct map to digital services hub |

## 8. Custom Services Hub Decision
| Option | Route delta | Content fit | Navigation clarity | Recommendation |
| ------ | ----------: | ----------: | -----------------: | -------------- |
| Create full Custom Services hub | +3 | Perfect | High | Recommended |
| Use existing hub | 0 | N/A (none exists) | Low | Impossible |
| Non-link trigger | 0 | N/A | Low | Alternative |

**Decision:** `Create full Custom Services hub`

**Expected Scope:**
- `app/(legacy)/custom-services/page.tsx`
- `app/[locale]/custom-services/page.tsx`
- Routes: `/custom-services`, `/ar/custom-services`, `/en/custom-services`

## 9. Knowledge Center Decision
| Option | Content availability | Route delta | Misleading risk | Recommendation |
| ------ | -------------------: | ----------: | --------------: | -------------- |
| Create `/knowledge` hub | High | +3 | Low | Recommended |
| Use FAQ as temporary hub | Partial | 0 | High (hides other content) | Not Recommended |
| Non-link trigger | N/A | 0 | Medium | Alternative |

**Decision:** `Create full Knowledge Center hub`

**Expected Scope:**
- `app/(legacy)/knowledge/page.tsx`
- `app/[locale]/knowledge/page.tsx`
- Routes: `/knowledge`, `/ar/knowledge`, `/en/knowledge`

## 10. Complete Hash Decision Matrix
| Href | Base route final target | ID exists | Content exists | Decision |
| ---- | ----------------------- | --------: | -------------: | -------- |
| `/about#vision` | `/about` | Yes | Yes | Retain |
| `/about#management` | `/about` | No | Yes (implicitly) | Add missing ID to existing section |
| `/business#finance` | `/business-banking` | No | Yes (implicitly) | Add missing ID to existing section |
| `/business#cash` | `/business-banking` | No | Yes (implicitly) | Add missing ID to existing section |
| `/business#payroll` | `/business-banking` | Yes | Yes | Change base route |
| `/business#payments` | `/business-banking` | No | Yes (implicitly) | Add missing ID to existing section |
| `/financing#business` | `/financing` | No | Yes (implicitly) | Add missing ID to existing section |
| `/accounts/expat#savings` | `/accounts/expat` | No | Yes (implicitly) | Add missing ID to existing section |
| `/accounts/expat#intl-transfers` | `/accounts/expat` | No | Yes (implicitly) | Add missing ID to existing section |
| `/accounts/expat#local-transfers`| `/accounts/expat` | No | Yes (implicitly) | Add missing ID to existing section |
| `/personal/minors-account#investments`| `/personal/minors-account` | No | Yes (implicitly) | Add missing ID to existing section |
| `/accounts/noor#savings` | `/accounts/noor` | No | Yes (implicitly) | Add missing ID to existing section |
| `/accounts/noor#investments` | `/accounts/noor` | No | Yes (implicitly) | Add missing ID to existing section |
| `/knowledge#guides` | `/knowledge` | No | No | Defer until content exists (or remove) |
| `/knowledge#videos` | `/knowledge` | No | No | Defer until content exists (or remove) |
| `/knowledge#awareness` | `/knowledge` | No | No | Defer until content exists (or remove) |
| `/news#events` | `/news` | No | Yes (implicitly) | Add missing ID to existing section |
| `/news#campaigns` | `/news` | No | Yes (implicitly) | Add missing ID to existing section |
| `/news#press` | `/news` | No | Yes (implicitly) | Add missing ID to existing section |

## 11. Header Interaction Decision
| Key | Anchor | Menu trigger | Label click behavior | Keyboard behavior | Final recommendation |
| --- | -----: | -----------: | -------------------- | ----------------- | -------------------- |
| All top-level items | Yes | Yes | Navigates to Hub | Tab visits Anchor, next Tab visits Trigger | Label = Anchor to Hub, Arrow = Menu trigger |

## 12. Proposed navigation.ts Changes
| Key/location | Current href | Proposed href | Reason |
| ------------ | ------------ | ------------- | ------ |
| `personalBanking.href` | `""` | `"/personal-banking"` | Maps to existing hub |
| `personalBanking.imageLink` | `"/personal"` | `"/personal-banking"` | Maps to existing hub |
| `businessBanking.href` | `"/business"` | `"/business-banking"` | Maps to existing hub |
| `businessBanking.imageLink` | `"/business"` | `"/business-banking"` | Maps to existing hub |
| `customServices.href` | `"/custom-services"` | `"/custom-services"` | New hub |
| `customServices digital links`| `"/digital"` | `"/digital-channels"` | Maps to existing hub |
| `digitalChannels.href` | `"/e-services"` | `"/digital-channels"` | Maps to existing hub |
| `knowledgeCenter.href` | `"/knowledge"` | `"/knowledge"` | New hub |
| (various hash links) | `...#...` | `...#...` (updated base) | Fix broken references |

## 13. Hub Creation Plan
| Hub | Legacy required | AR | EN | Shared component | Data source | Route delta |
| --- | --------------: | -: | -: | ---------------- | ----------- | ----------: |
| `/custom-services` | Yes | Yes | Yes | `CustomServicesPageContent` | `navigation.ts` | +3 |
| `/knowledge` | Yes | Yes | Yes | `KnowledgeCenterPageContent` | `navigation.ts` | +3 |

## 14. Redirect Strategy
| Strategy | Generic static hosting | Vercel | SEO | Recommendation |
| -------- | ---------------------: | -----: | --: | -------------- |
| next.config redirect | Fails on export | Fails | Bad | Not Recommended |
| Static compatibility page | Works | Works | OK | Recommended for Legacy routes if needed |
| Navigation change only | Works | Works | Good | Primary Recommendation |

## 15. Correct Route Forecast
| Change | Delta |
| ------ | ----: |
| Starting | 201 |
| Navigation href corrections | 0 |
| Custom Services hub | +3 |
| Knowledge hub | +3 |
| Compatibility aliases | 0 |
| Root-proof removal لاحقًا | -2 |
| i18n-poc removal لاحقًا | -2 |
| Final expected (end of Phase 2A) | 203 |

## 16. Scope for Implementation Batch 18B
**Files Expected:**
- `data/navigation.ts` (Updates to hrefs)
- `components/layout/header.tsx` (No changes needed, already uses label as Anchor and arrow as Trigger)
- `app/(legacy)/custom-services/page.tsx` (New)
- `app/[locale]/custom-services/page.tsx` (New)
- `components/custom-services/custom-services-page-content.tsx` (New)
- `app/(legacy)/knowledge/page.tsx` (New)
- `app/[locale]/knowledge/page.tsx` (New)
- `components/knowledge-center/knowledge-center-page-content.tsx` (New)
- Various components (e.g., `about-page-content.tsx`, `business-banking-page-content.tsx`) to add `id="..."` attributes matching hashes.

## 17. Acceptance Criteria for Batch 18B
- 0 clickable navigation targets returning 404
- 0 empty active href values
- 0 active hashes without matching IDs
- Legacy/AR/EN parity for every new hub
- No duplicate unnecessary hub content
- All navigation links locale-aware
- Query and hash preserved
- Keyboard and mobile behavior verified
- TypeScript Exit 0
- Build Exit 0
- Localization assertions 229
- Expected route count exact (207 after adding 6 routes)

## 18. Final Validation
- Localization assertions: 229 passed
- TypeScript: Exit 0
- Build: Exit 0
- Routes: 201
- No source changes

## 19. Git Final State
- Branch: `dev`
- No source modifications
- No staged files
- No branch
- No commit
- `git diff --check`: Exit 0

## 20. Final Decision
`Navigation Decisions Completed — Custom Services and Knowledge Hubs Required`
