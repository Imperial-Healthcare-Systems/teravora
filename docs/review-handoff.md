# Teravora — Review Implementation Handoff

**Branch:** `launch-review-corrections` · **Baseline:** `24d4741` (= `origin/main`, unpushed)
**Source:** `Teravora_Website_Review_Slide_Wise_Comments.pdf` → tracked in `docs/review-plan.md`
**Last updated:** 2026-07-27

> **Direct answer: NO — not all Critical (🔴) items are implemented yet.**
> All Critical items on the **13 built pages** (Home, Why Now, Method, Start, Solutions Hub, and all 8 service pages) **are done**. The Critical items that remain are concentrated on **About**, **Careers**, and the **Legal pages**, plus the **BRSR-dominance rebalance (H15/G6)** — most of these are blocked on **client facts** or need a **positioning decision**. See §3.

---

## 1. Done & committed (17 commits)

| Area | Points | Commit |
|---|---|---|
| Home (visible copy) | H1–H14 | `3a0c646` |
| Why Now | 14–19 | `73181c4` |
| Our Method | 20–25 | `f2407cf` |
| Our Method — "Assured" → "Assurance-ready" | fork decision | `74cd9f0` |
| Start Here | 26–28 | `6b61766` |
| Service label → "ESG Disclosure & Assurance Readiness" | client directive | `4ba8c50` |
| Solutions Hub | 29–30 | `2b859f0` |
| **New 8th service — Social Impact & SROI** | G12 (client: 8th card) | `83d5a22` |
| ESG Disclosure & Assurance Readiness page | 32–39 | `4a8c6a8` |
| Carbon & Climate | 40–46 | `ca751ca` |
| ESDD | 47–52 | `136ccc8` |
| ESG & Climate Strategy Advisory | 53–58 | `0df3713` |
| Technical & Environmental Services | 59–64 | `f528212` |
| Sustainable Finance & Carbon Markets | 65–70 | `f55a271` |
| Capacity Building & Training | 71–75 | `18cf7d4` |
| BRSR Readiness route **removed** | 79 | `8d310c0` |
| Footer legal line (verbatim) | G14 | `79da5ff` |
| Shared FAQ JSON-LD (AEO/SEO) | G1/G2/G10/G21 | `348f116` |

**General points substantially closed across those pages:** G1 (assessment-or-assurance terminology), G2 (FY2026-27/top-1,000 current), G4 (associated-practice relationship), G5 (all `[ … POPULATE HERE … ]` placeholders deleted on service pages), G7 (ISO-certified claims removed on Home), G9 (25+ yrs attributed to the practice, not the LLP), G10 (TCFD folded into IFRS S2), G11 (absolutes softened), G12 (CSR/SROI = 8th service), G13 (consent on Home/Why-Now/Start forms), G14 (footer), G19 (illustrative labels), G21 (British English / BRSR Core / Scopes 1,2,3 / Site-based), G23 (image rights — closed).

Every built page was verified: recalibration-grep clean · renders HTTP 200 · new copy confirmed in the **rendered** HTML · route `metadata` + Service/Breadcrumb JSON-LD corrected too.

---

## 2. Key decisions logged this pass
1. **Service name** = "ESG Disclosure & Assurance Readiness" site-wide (**supersedes** the plan's earlier "BRSR Core Assessment & Assurance Readiness" in points 30/32).
2. **CSR/SROI** = standalone **8th service** "Social Impact & SROI" at `/solutions/social-impact-sroi` (not folded).
3. **Method 4th state** = "Assurance-ready" (never a claimed conclusion).
4. **BRSR Readiness Check** = **removed** (teravue.org has no such tool → client's "if not on teravue.org, drop it" rule).
5. **/learn (Insights hub)** = **skipped** (client directive; left as-is).
6. **Holistic voice** approved — vary long mandated phrases, don't hammer them (this was the fix for the earlier clunky-copy rollback).

---

## 3. REMAINING FROM THE REVIEW PDF

### 3a. Critical (🔴) still open
| Page | Points | What | Blocker |
|---|---|---|---|
| **About** | 82 | Relationship + diagram → "associated practice / India practice" | none — **doable now** |
| **About** | 83 | Founder: single CFA credential, value-chain, past-tense employment | partly doable; **exact ENOC title needs client** |
| **About** | 81 | Remove competitor-comparison cards, replace with own-positioning | **positioning decision** — needs 2–3 options + sign-off |
| **Careers** | 86 | Assessment-or-assurance reframe; remove parent; fix CFA; IFRS S2 (incl. TCFD) | none — **doable now** |
| **Careers** | 88 | CV-form privacy + consent + retention | **CV retention period = client fact** |
| **Legal** | 90–92 | Privacy / Terms / Accessibility — full policies | **client facts (see §5)** |

### 3b. Non-critical (🟡/🟠) still open
| Page | Points | What | Blocker |
|---|---|---|---|
| About | 80, 84 | Balanced hero framing; footer/print | 80 doable; 84 = G14 done / G15 print CSS |
| Careers | 85, 87, 89 | "survive an auditor" → "independent review"; "current priority areas"; footer/print | doable now (89 = G15 print) |
| ESDD | 50 | Independence / conflicts FAQ | **needs client conflicts policy** |
| Home | H11 | Engagement-timeline week figures realistic? | **client to confirm** |

> **Note — `/learn` skipped (client directive).** The page is left as-is and still carries **pre-review copy**: it duplicates the Training page and retains old terminology ("BRSR-Core", "IFRS S1/S2", "frameworks", standalone TCFD). If `/learn` ships, it needs a terminology pass or should be revisited before launch.

### 3c. Structural / design (deferred)
| Item | What | Blocker |
|---|---|---|
| **H15 / G6** | BRSR-dominance rebalance on Home (wheel + "one service in depth" so all 8 services get equal weight) | **design decision — 2–3 layout options owed to client** |
| ledger `:146` | "STANDARDS · RECOGNISED FRAMEWORKS" → "STANDARDS" (house style) | minor — never confirmed |

---

## 4. NON-PDF work to reach final build (dev / QA / launch)
| Item | Ref | Owner |
|---|---|---|
| Print / Save-as-PDF CSS (reveals show, accordions open, fixed buttons hidden, no blank pages) | G15 | Dev — all pages |
| Interactive a11y: hover→click/tap, keyboard selectable, focus states, diagram alt text (BRSR wheel, persona/framework selectors) | G18 | Dev |
| Remove dev "N" badge on production build (`next.config` `devIndicators:false`) | G20 | Dev — **verify on prod build** |
| Mobile + speed testing; compress images; defer non-critical animation | G22 | Dev / QA |
| Optional page-length trim −20–30% (careful, per page; no identity change) | G16 | Us — optional |
| Route / contents-map reconcile (account for BRSR-Readiness removal + Learn skip) | Part C #13 | QA |
| Domain / SSL / analytics / sitemap / robots / metadata | Part C #12 | Dev — launch |
| **Bespoke imagery for the new Social Impact & SROI page** (currently reuses community/people photos as a placeholder-free interim) | VA follow-up | Design |
| All forms tested (notice, error, success) incl. new consent lines | Part C #7 | Us + client wiring |
| All links tested (no dead links) after route changes | Part C #8 | QA |
| **Merge `launch-review-corrections` → `main` + deploy to teravora.in** | — | Dev, after sign-off |

---

## 5. CLIENT INPUTS NEEDED (the real blockers to closing)
1. **Legal facts** (Privacy/Terms/Accessibility, points 90–92): analytics/cookies used · WhatsApp number · data-retention periods · processors/sub-processors · governing jurisdiction · grievance officer name + contact.
2. **Careers CV retention period** (point 88).
3. **Founder verifications** (point 83 / G8): exact ENOC title · ISO/IWA 48 · ICAO WG5 · past employers · the "few practitioners" claim.
4. **ESDD independence / conflicts** policy wording (point 50).
5. **Engagement-timeline weeks** realistic? (H11).

## 6. DECISIONS still needed from client
- **H15** BRSR-dominance rebalance — pick a direction (we bring 2–3 options).
- **About point 81** — own-positioning to replace the competitor-comparison cards (we bring options).
- **ledger :146** — change to "STANDARDS"? (recommend yes).

---

## 7. Suggested path to close
1. Client sends §5 facts + §6 decisions.
2. We complete **About** (82/83 + 81 options) and **Careers** (86/87/85 + 88 with retention) — one commit each, per-page sign-off.
3. We draft the **3 Legal pages** from the facts → client legal review.
4. We bring **H15** options → build the chosen rebalance.
5. Dev/QA sweep §4 (print CSS, a11y, N-badge, mobile/speed, links, route map).
6. Bespoke imagery for Social Impact & SROI.
7. Merge → deploy → final cross-check against Part C checklist.
