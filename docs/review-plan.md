# Teravora — Website Review Implementation Plan

**Source:** `C:/Users/garvi/Downloads/Teravora_Website_Review_Slide_Wise_Comments.pdf` (review dated 21 Jul 2026)
**Baseline commit:** `24d4741` · **Branch:** `launch-review-corrections` · previous attempt preserved on `review-rounds-backup`

## How to read this
Each point is: **`[Priority] PDF-ref`** → **Now** (exact current text + `file:line`) → **Change to** → **Live location** (what a visitor sees).
Priorities: 🔴 Critical · 🟠 High · 🟡 Medium.

## Decision log — review cross-validation fixes (2026-07-27)
Corrections applied to this plan after cross-checking it against the client PDF. **These update the plan only; the code is implemented in a separate pass.**
1. **Footer (G14):** LLPIN-only, client's verbatim string incl. "All rights reserved"; **registered location waived by client** (documented deviation from the PDF's "registered location" requirement).
2. **Founder quals (H9/G8):** post-nominal **acronyms kept per client** (logged deviation from the PDF's "full official names"); only the duplicate CFA is collapsed to the single approved credential.
3. **ISO claim (H6):** **seal/badge forms removed entirely**; ISO survives only as the descriptive body sentence.
4. **Relationship tag (H7):** "PRACTICE LINEAGE" → "ASSOCIATED PRACTICE" (avoids the parent/descent implication).
5. **Terminology (H2):** glide-path labels rephrased off "assurance band" to avoid assurance-only framing.
6. **Method (21/29):** four stages standardised as **verb + deliverable paired** across Home, Our Method and Solutions.
7. **Coverage added:** confirm engagement weeks are realistic (H11); reconcile live routes vs the 20-page contents map (Part C).
8. **Verify-only:** black "N" absence to be confirmed on a production build (G20).
9. **Service rename (client live directive, 2026-07-27):** the `/esg-disclosure-assurance-readiness` service displays as **"ESG Disclosure & Assurance Readiness"** site-wide — **supersedes** points 30/32's proposed "BRSR Core Assessment & Assurance Readiness". Applied to nav, hub, catalog, page eyebrow, SEO title, careers track, learn link. *(commit 4ba8c50)*
10. **CSR/SROI (client decision, 2026-07-27):** added as the **8th service card**, not folded — named **"Social Impact & SROI"** at `/solutions/social-impact-sroi` (kicker MEASURE · PROVE). New page authored clean. Hub is now "Eight ways in". *(commit 83d5a22)*

## How we execute (the lesson from last time)
1. **Holistic, per page** — we rewrite each page section *reading it end-to-end*, applying the required wording as constraints. **No blind find-and-replace** (that caused the clunky, repetitive copy).
2. **One page at a time, with sign-off** — build a page, you approve the voice, then move on. One commit per page.
3. **Order:** Part A (slide-wise, this file's bulk) → Part B (general site-wide) → Part C (final-checklist cross-verify).
4. `comps/**` = throwaway prototypes, **out of scope**. Only the live routes below are touched.

---

# PART A — SLIDE-WISE COMMENTS

## 1. Home — `/`  (`home.content.ts`, `home.runtime.js`)

Every change below quotes the **exact current copy** and the **exact replacement**. `[keep]` = unchanged, shown for context.

### H1 · Hero sub-headline  🟡 `Home 1/11`  — `home.content.ts:14`
Shorten; don't list every service; fix BRSR wording.
- **Now:** "Teravora is an environmental and social risk practice — IFC Performance Standards and Equator Principles advisory, ESG due diligence (Desktop and Site-based), Scope 1–3 carbon, and hands-on training. Evidence-led, with the method shown at every step — including India's BRSR assurance readiness when you're facing a deadline."
- **After:** "Teravora is an environmental and social risk practice — evidence-led, with the method shown at every step, so your numbers hold up when someone independent checks them. Including India's BRSR Core assessment or assurance readiness, when you're facing a deadline."

### H2 · Glide-path stat list  🔴 `Home 2/11`  — `home.content.ts:31-32`
Top 1,000 / FY2026-27 is the **current** band; top 500 was the year before. Reorder so current reads first.
- **Now (row 1):** `500` — "Top listed companies, first assurance band" · "FY 2025–26"
- **Now (row 2):** `1000` — "Band widens the following year" · "FY 2026–27"
- **After (row 1):** `1000` — "Listed companies now in scope (assessment or assurance)" · "FY 2026–27 · THIS FINANCIAL YEAR"  *(rephrased off "assurance band" — G1 terminology)*
- **After (row 2):** `500` — "In scope a year earlier" · "FY 2025–26"
- **[keep] (row 3):** `＋` — "Suppliers & mid-market, via customers & lenders" · "VALUE-CHAIN CASCADE"

### H3 · "What's driving this" paragraph  🔴 `Home 2/11`  — `home.content.ts:28`
- **Now:** "…Buyers and investors ask for defensible ESG data. And India's listed companies now face **reasonable assurance on BRSR-Core**. Different triggers, one demand: numbers that hold up when someone independent checks them."
- **After:** "…Buyers and investors ask for defensible ESG data. And India's listed companies now face **independent assessment or assurance on BRSR Core**. Different triggers, one demand: numbers that hold up when someone independent checks them."

### H4 · BRSR wheel — heading, intro, note  🟡 `Home 3/11`  — `home.content.ts:47-49, 66`
- **Now (eyebrow `:47`):** "One service, in depth · When a BRSR deadline is what you're facing"
- **After:** "One service, in depth · When a BRSR Core deadline is what you're facing"
- **Now (H2 `:48`):** "The assured subset, made legible."
- **After:** "The BRSR Core subset, made legible."
- **Now (body `:49`):** "India's SEBI BRSR-Core — that is subject to reasonable assurance — is one of our core service lines, and this is how we read it. Grouped by Environmental, Social and Governance — **hover** any segment."
- **After:** "India's SEBI BRSR Core — the subset subject to independent assessment or assurance — is one of our core service lines, and this is how we read it. Grouped by Environmental, Social and Governance — **select** any segment."
- **Now (note `:66`):** "[ OFFICIAL SEBI-BRSR-CORE SPECIFICATION — NOT A CLIENT OUTCOME METRIC ]"
- **After:** "[ OFFICIAL SEBI BRSR CORE SPECIFICATION — NOT A CLIENT OUTCOME METRIC ]"
- **Interaction (→ G18):** the wheel must also work by **click/tap + keyboard**, not hover-only. *(Runtime change, tracked in G18.)*

### H5 · Method engine  🔴 `Home 5/11`  — `home.content.ts:92, 115`
Drop "assured"; four-step method is correct (the 5-step conflict is fixed on the Hub — see point 29).
- **Now (H2 `:92`):** "One method, four steps — from first data to **assured disclosure**."
- **After:** "One method, four steps — from first data to **a defensible disclosure**."
- **[keep] (`:93`):** "You see the working at every stage. That is the difference between a filing and a defensible disclosure."
- **Now (step 02 `:115`):** "We prepare a BRSR filing built to **pass reasonable assurance the first time**."
- **After:** "We prepare a BRSR filing **ready for independent assessment or assurance**."

### H6 · Remove ISO-certified claim (4 spots)  🔴 `Home 5/11`  — `home.content.ts:135, 147, 163, 174`
**Decision (2026-07-27): remove the ISO seal/badge forms entirely. ISO survives only as the descriptive body sentence at `:135` — no "ISO-ALIGNED"/"ALIGNED" badge replacement.**
- **Now (point 03 `:135`):** "**ISO-certified, IMS-compliant delivery** focused on practical, data-backed progress your leadership can measure."
- **After:** "**Structured delivery aligned with relevant ISO management-system principles**, focused on practical, data-backed progress your leadership can measure." *(the only surviving ISO mention)*
- **Now (ledger row `:147`):** label "DELIVERY · **ISO-CERTIFIED PROCESS**", value "**CERTIFIED**"
- **After:** **remove this ledger row entirely** — do NOT replace with "STRUCTURED TO ISO PRINCIPLES"/"ALIGNED" (badge form).
- **Now (manifest seal `:163`):** "ISO-CERTIFIED"
- **After:** **remove the seal entirely** (no "ISO-ALIGNED").
- **Now (std chip `:174`):** `data-t="ISO-certified, IMS-compliant delivery"`
- **After:** **remove the ISO chip entirely** (badge form).

### H7 · Teravue relationship + 25-year attribution  🔴 `Home 6/11`  — `home.content.ts:125, 130, 133, 142`
Attribute experience to practitioners, not the LLP; "associated practice", not "parent".
- **Now (eyebrow `:125`):** "25+ years of global ESG experience. Built for India."
- **After:** "More than 25 years of practitioner experience. Built for India."
- **[keep] (H2 `:129`):** "Built on decades of ESG expertise. Designed for Indian businesses."
- **Now (intro `:130`):** "Backed by more than 25 years of **Teravue's global sustainability practice**, we help Indian organisations turn ESG from obligation into practical guidance, recognised frameworks and measurable outcomes."
- **After:** "Drawing on more than 25 years of practitioner experience — the backbone we share with the **associated practice, Teravue** — we help Indian organisations turn ESG from obligation into practical guidance and measurable outcomes."
- **Now (point 01 `:133`):** "25+ years of ESG and sustainability advisory **through our parent practice, Teravue** — across manufacturing, energy, infrastructure and financial services."
- **After:** "More than 25 years of ESG and sustainability advisory, **drawn from the associated practice, Teravue** — across manufacturing, energy, infrastructure and financial services."
- **Now (ledger tag `:142`):** "BACKED BY TERAVUE"
- **After:** "ASSOCIATED PRACTICE" *(neutral; "PRACTICE LINEAGE" dropped — "lineage" re-implies a parent/descent relationship the client is removing)*

### H8 · Standards wording in proof points  🟠 `G8/G10`  — `home.content.ts:134, 162, 165, 170, 173`
- **Now (point 02 `:134`):** "…the GHG Protocol and **IFRS S1/S2**, alongside India's BRSR…"
- **After:** "…the GHG Protocol and **IFRS S1 and IFRS S2**, alongside India's BRSR…"
- **Now (manifest label `:162`):** "[ BRSR-CORE ATTRIBUTES ]" → **After:** "[ BRSR CORE ATTRIBUTES ]"
- **Now (manifest note `:165`):** "The SEBI **BRSR-Core** specification — the standard we work to, not a client claim." → **After:** "The SEBI **BRSR Core** specification — the standard we work to, not a client claim."
- **Now (chip `:170`):** `data-t="SEBI-assured subset — 49 KPIs / 9 attributes"`, label "BRSR-CORE" → **After:** `data-t="BRSR Core subset subject to assessment or assurance — 49 KPIs / 9 attributes"`, label "BRSR CORE"
- **Now (chip `:173`):** label "TCFD", `data-t="Task Force on Climate-related Financial Disclosures"` → **After:** label "ISSB", `data-t="IFRS S1 and IFRS S2 (ISSB) — incorporating the TCFD recommendations"` *(folds standalone TCFD per G10)*

### H9 · Founder credentials (single CFA)  🟠 `G8`  — `home.content.ts:188, 199`
- **Now (creds `:188`):** "CEnv · CEng · **CFA-Sustainable Investing · CFA-ESG** · GARP-SCR · CEM · CEA · PMP"
- **After:** "CEnv · CEng · **Sustainable Investing Certificate (CFA Institute)** · GARP-SCR · CEM · CEA · PMP"
- **Now (badge `:199`):** "CFA — Certificate in Sustainable Investing & Certificate in ESG Investing"
- **After:** "Sustainable Investing Certificate, CFA Institute (formerly Certificate in ESG Investing)"
- **[keep] (bio `:192`):** founder bio reads fine — no change.
- **Note (2026-07-27):** the remaining post-nominals (CEnv · CEng · GARP-SCR · CEM · CEA · PMP) are **kept as acronyms per client** — conventional for professional bios. This is a **logged deviation** from the PDF's "use the full official names of qualifications"; only the duplicate CFA is collapsed (the PDF's "one CFA Institute credential only").

### H10 · Carbon story  🟡 `Home 7/11`  — `home.content.ts:206, 208, 209`
- **Now (aria `:206`):** "The Scope 1–3 emissions story" → **After:** "The Scopes 1, 2 and 3 emissions story"
- **Now (label `:208`):** "SCOPE 1 · 2 · 3" → **After:** "SCOPES 1 · 2 · 3"
- **Now (H2 `:209`):** "Most of your footprint lives in the supply chain."
- **After:** "For many organisations, a significant share lies in the value chain."
- **Now (body `:209`):** "**Scope 1 and 2 are the easy part.** The weight sits in Scope 3 — the value chain — and that is where the work gets real. We have taken it the whole way: Scope 3 across all 15 categories for an energy company."
- **After:** "Scope 3 — the value chain — is often the largest share, and that is where the work gets real. We have taken it the whole way: Scope 3 across all 15 categories for an energy company." *(removes the "easy part" line)*

### H11 · Engagement walkthrough timeline  🟡 `Home 8/11`  — `home.content.ts:223, 236, 237, 239`
- **Now (parent link `:223`):** "See our **parent practice's** work →" → **After:** "See the **associated practice's** work →"
- **Now (Assess step `:236`):** "Every **BRSR-Core** requirement marked present, partial, or missing…" → **After:** "Every **BRSR Core** requirement marked present, partial, or missing…"
- **Now (Comply step `:237`):** "A filing **assembled to pass reasonable assurance the first time**." → **After:** "A filing **prepared for independent assessment or assurance**."
- **Now (Prove step `:239`):** "Every number backed by evidence **your assurer** can follow." → **After:** "Every number backed by evidence **an assessor or assurer** can follow."
- **Verify (client input — PDF Home 8/11):** confirm the stated engagement **weeks are realistic** before launch. No copy change until confirmed.

### H12 · Persona selector  🟢 `Home 9/11`  — `home.content.ts:262, 286`
- **Now (`:262`, `:286`):** "Site-**B**ased ESDD" → **After:** "Site-**b**ased ESDD" *(house style; also G21)*
- **Interaction (→ G18/G22):** keep routing simple; ensure keyboard + tap + mobile. *(Runtime/QA.)*

### H13 · Final configurator — consent + labels  🔴 `Home 10/11`  — `home.content.ts:288-289, 307`
- **Now (band options `:288-289`):** `data-std="BRSR-Core · 49 KPIs / 9 attributes"` (×2) → **After:** `data-std="BRSR Core · 49 KPIs / 9 attributes"`; list Top 1,000 (current) before Top 500.
- **Add (after submit button `:307`):** consent line —
  > "By sending this, you agree Teravora may use the details you provide to respond to your enquiry, in line with our Privacy Policy. We do not sell your data or share it for third-party marketing."
- **Footer link test:** → G14.

### H14 · Hero audit-ticker (runtime)  🟡  — `home.runtime.js:26`
- **Now:** tokens include "25+ YEARS OF ESG EXPERTISE · **BACKED BY TERAVUE**" and "…IFRS S1/S2 · **BRSR-CORE**"
- **After:** "MORE THAN 25 YEARS OF PRACTITIONER EXPERIENCE" (drop "BACKED BY TERAVUE"); "…IFRS S1 & S2 · **BRSR CORE**"

### H15 · BRSR dominance (structural)  🔴 `G6`  — Home overall
The BRSR wheel (`#infographic`) + its eyebrow "One service, in depth" make BRSR the only deep-dive on the home page. **This is a layout decision, not a copy swap** — I'll bring 2–3 rebalance options (e.g. reframe the wheel as one-of-several, or move a carbon/ESDD deep-dive up beside it) before implementing. **No home copy above depends on this — H1–H14 can ship first.**

---

## 2. Why Now — `/why-now`  (`why-now.content.ts`)

**14.** 🟡 `Why Now 1/6` — reduce fear; verify CSRD/value-chain; no "every requirement = penalty".
- Now (`:23`,`:151`): "CSRD reaching into Indian **supply chains**"; "through multinational **supply chains**".
- Change: "**value chains**"; soften penalty framing in hero.
- Live: hero + four-forces "Global value chains" card.

**15.** 🔴 `Why Now 2/6` — "reasonable-assurance duty" → "assessment or assurance requirement"; FY26-27 current.
- Change: reword the clock intro; confirm timeline shows FY2026-27/top-1,000 as **this financial year**.
- Live: regulatory clock (`#regulatory-clock`).

**16.** 🟡 `Why Now 3/6` — regulator card must not say all BRSR Core is assured.
- Change: "**independently assessed or assured**".
- Live: four forces → "Regulators" card.

**17.** 🟡 `Why Now 4/6` — soften "readiness is cheapest" / "unassured discount".
- Change: "**Early readiness usually reduces disruption, rework and cost.**"
- Live: cost-of-waiting heading (`#cost-of-waiting`).

**18.** 🟡 `Why Now 5/6` — soften booked-capacity / public-restatement; form wording.
- Change: "can/may"; form → assessment or assurance.
- Live: cost-of-waiting paths + form.

**19.** 🟡 `Why Now 6/6` — footer/legal/links; remove black "N". → G14/G15/G20.

---

## 3. Our Method — `/how-we-prove`  (`how-we-prove.content.ts`, `.runtime.js`)

**20.** 🟡 `Method 1/7` — "transparent and traceable", not implying Teravora audits.
- Now (`:117`): "survive independent, **auditor-grade** testing"; `:118` "Assurance file · **reasonable assurance**"; `:161` "the **assured peak**".
- Change: keep advisory-vs-independent-assurance distinction; "ready for assessment or assurance"; drop "auditor-grade/assured peak" absolutes.
- Live: hero + trace stages.

**21.** 🔴 `Method 2/7` — four steps; deliverables not "a filing/pass".
- Change: gap map · disclosure pack · action plan · evidence trail.
- **Standardise (2026-07-27):** across Home, Our Method and Solutions the four stages present as **verb + deliverable paired** — **Assess → gap map · Comply → disclosure pack · Improve → action plan · Prove → evidence trail** — same four, same order, same labels everywhere (fixes the "standardise the method" Critical, not just the step count).
- Live: method + deliverables (`#method`).

**22.** 🟡 `Method 3/7` — "assured" → "ready for assessment or assurance" (unless a real conclusion exists).
- Live: throughout.

**23.** 🔴 `Method 4/7` — remove internal figures note + unattributed parent record.
- Now (`:145`): "Over 25 years, **our parent practice, Teravue**, has taken emitters… **[ Specific figures shown once verified. ]**"; `:226` FAQ "**our parent practice**".
- Change: remove `[ … ]` held-figure note; reframe to "associated practice", attributed; no unverified metric.
- Live: "How we measure impact" (`#impact`) + FAQ.

**24.** 🟡 `Method 5/7` — full framework names; IFRS S2 incorporates TCFD; "IFC Performance Standards" heading; IWA 48 as guidance.
- Now (`:180`,`:227`): standalone **TCFD** tile; FAQ lists "…GRI, **TCFD**, IFRS S1/S2".
- Change: merge TCFD into IFRS S2 wording; "**IFRS S1 and IFRS S2**".
- Live: standards (`#standards`) + FAQ.

**25.** 🟡 `Method 7/7` — review all FAQ for updated BRSR position; footer. (+ `#199` "substantiated" line is fine/keep.)

---

## 4. Start Here — `/start`  (`start.content.ts`, `.runtime.js`)

**26.** 🔴 `Start 2/4` — "BRSR / assurance deadline" → "BRSR assessment or assurance requirement"; keyboard-selectable (→ G18).
- Live: step 1 trigger option.

**27.** 🔴 `Start 3/4` — remove "India branch"/"parent"; align "who sees my info" FAQ with Privacy.
- Now (`:122`): "Teravora is the **India branch of Teravue** … **25+ years**…"; `:126` "**FRAMEWORKS** WE WORK IN"; `:132` chip "**TCFD**".
- Change: "an India-based practice **associated with** Teravue"; attribute track record; "**STANDARDS** WE WORK IN"; drop standalone TCFD chip (or fold to IFRS S2).
- Live: trust-band + FAQ + chips.

**28.** 🟡 `Start 4/4` — footer/copyright; Contact real; form success/error message.
- Change: success + error copy (drafted); footer → G14.
- Live: confirm card.

---

## 5. Solutions Hub — `/solutions`  (`solutions-hub.content.ts`)

**29.** 🔴 `Solutions 1/4` — five-step hero vs four-step method — standardise.
- Now (`:15`): "assess → **strategize** → comply → improve → prove"; `:48` "GOVERN · **STRATEGIZE**"; `:83` spine "ASSESS → **STRATEGIZE** → COMPLY → IMPROVE → PROVE"; `:85` "to an **auditor**".
- Change: **assess → comply → improve → prove** (drop "strategize" step); "to an **assessor**, a lender…".
- **Standardise:** use the **verb + deliverable pairing from #21** (Assess → gap map · Comply → disclosure pack · Improve → action plan · Prove → evidence trail) so the labels/order match Home + Our Method.
- Live: hero lede + spine (`#spine`).

**30.** 🟡 `Solutions 2/4` — place CSR / Social Impact / SROI. **Decision pending (see note).**
- Now: 7 cards; no CSR/SROI.
- Change: **fold under Strategy Advisory** (recommended, MVP) *or* add 8th card — confirm before building. Update BRSR card name (`:63` "BRSR & Assurance Readiness" → "BRSR Core Assessment & Assurance Readiness"); card `:59` "**Green capital**…" → soften; `:44` "**Scope 1–3**…**TCFD / IFRS S2**" → "Scopes 1, 2 and 3 … IFRS S2 (incorporating TCFD)".
- Live: catalog cards.

**31.** 🟡 `Solutions 4/4` — footer/legal/links/print → G14/G15.

---

## 6. BRSR — ESG Disclosure & Assurance Readiness — `/solutions/esg-disclosure-assurance-readiness`  (`solution.content.ts`)

**32.** 🔴 `BRSR 1/8` — rename + strip hero assurance absolutes.
- ~~Change: → "BRSR Core Assessment & Assurance Readiness"~~ **SUPERSEDED (decision-log #9):** the name is **"ESG Disclosure & Assurance Readiness"** and is **already applied site-wide** (commit 4ba8c50). Remaining for the service-page pass: **strip the hero absolutes only** — drop reasonable-assurance/auditor-grade/pass. Page eyebrow already renamed.
**33.** 🔴 `BRSR 2/8` — "assessment or assurance provider"; neutral outcome (not universal "qualified opinion").
**34.** 🔴 `BRSR 3/8` — "prepare to pass" → "prepare the data, controls and evidence trail".
**35.** 🔴 `BRSR 4/8` — **delete placeholder + parent line.** Now (`:91`) "`[ CLIENT ASSURANCE PASS-RATE POPULATES HERE… ]`"; `:98` rc-foot "**RECONCILED TO … PARENT PRACTICE, TERAVUE**"; `:161` FAQ "*Your exact band and date populate in a scoping call.*". Change: remove placeholders; neutralise rc-foot; reword FAQ without the italic stub.
**36.** 🔴 `BRSR 5/8` — "reasonable assurance lands first" → "assessment or assurance requirements apply first"; audience cards.
**37.** 🟡 `BRSR 6/8` — "Every assured number" → "every reported number prepared for assessment or assurance".
**38.** 🔴 `BRSR 7/8` — rewrite FAQs to current SEBI position (assessment/assurance, glide path, voluntary value-chain).
**39.** 🟡 `BRSR 8/8` — footer/print → G14/G15.
- Live (32–39): the BRSR service page, top to bottom.

---

## 7. Carbon & Climate — `/solutions/carbon-climate`  (`solution-b.content.ts`)

**40.** 🟡 `Carbon 1/8` — "Scopes 1, 2 and 3"; "TCFD and IFRS S2" → "IFRS S2, which incorporates the TCFD recommendations".
- Now: `:15` "aligned to **TCFD and IFRS S2**"; `:23` chip "**TCFD**-aligned"; `:59` "aligned to **TCFD and IFRS S2**"; `:90` std "**TCFD**".
**41.** 🟡 `Carbon 2/8` — don't imply every emissions number is independently tested → "increasingly subject to … scrutiny".
**42.** 🔴 `Carbon 4/8` — label the architecture graphic "**Illustrative workflow — not a software product or client result**".
**43.** 🔴 `Carbon 5/8` — delete internal future-results + parent reconciliation. Now: `:98` "`[ VERIFIED REDUCTION OUTCOMES POPULATE HERE… ]`"; `:105` rc-foot "**RECONCILED TO … PARENT PRACTICE, TERAVUE**"; `:157` FAQ parent tail.
**44.** 🔴 `Carbon 6/8` — Now (`:120`) "Every tonne on the page **burned somewhere real.**" → "**Every tonne traces to an activity, source and calculation.**"
**45.** 🟡 `Carbon 7/8` — Now (`:141`) "**Bring us your meter readings.**" → "**Bring us your activity data.**" (also `:51` "fuel bills and meter readings" reword); `:69` "supply-chain footprint" → "value-chain footprint".
**46.** 🟡 `Carbon 8/8` — FAQ IFRS S2/TCFD/applicability; footer.
- Live (40–46): Carbon page.

---

## 8. Environmental & Social Due Diligence — `/solutions/environmental-social-due-diligence`  (`solution-d.content.ts`)

**47.** 🟡 `ESDD 2/8` — risk cards: avoid legal certainty → "may/can".
**48.** 🟡 `ESDD 3/8` — Now (`:67`) "Every finding is evidenced, mapped to its standard, and **priced** for the decision…" → "Every **material** finding is **ranked by significance, cost and decision relevance**." (also `:56` "rated" wording check).
**49.** 🟢 `ESDD 5/8` — verify image rights; no implied client projects (→ G23, done).
**50.** 🟡 `ESDD 7/8` — FAQ: ESDD vs EIA/ESIA, desktop vs site, when Equator applies, independence/conflicts (needs client verify on independence).
**51.** 🔴 (placeholder) — Now (`:83`) "`[ TRANSACTION OUTCOMES POPULATE HERE… ]`"; `:90` rc-foot "**BUILT ON THE ESDD TRACK RECORD OF … PARENT PRACTICE, TERAVUE**"; `:71` "frameworks" → "standards". Change: remove placeholder; neutralise rc-foot.
**52.** 🟡 `ESDD 8/8` — footer/print → G14/G15.
- Live (47–52): ESDD page.

---

## 9. ESG & Climate Strategy Advisory — `/solutions/esg-climate-strategy-advisory`  (`solution-advisory.content.ts` + `page.tsx`)

**53.** 🟡 `Strategy 2/7` — not every board "must"; "Frameworks" → "Standards"; verify CSRD.
- Now: `:35` "a question your board **must** answer"; `:36`,`:42` "**frameworks** multiply / Frameworks multiply"; `:23` chip "**Frameworks**"; `:42` "BRSR, GRI, **TCFD**, IFRS S1/S2".
- Change: "boards increasingly have to"; "**Standards**"; "IFRS S1 and IFRS S2".
**54.** 🟢 `Strategy 4/7` — images illustrative (label present at `:81`).
**55.** 🟡 `Strategy 6/7` — materiality vs double materiality; no single framework mandatory. FAQ `:144` "Which **frameworks**" → "Which standards"; `:77` std tile "TCFD" → fold.
**56.** 🔴 (placeholder) — `:84` "`[ CLIENT PROGRAMME OUTCOMES POPULATE HERE… ]`"; `:91` rc-foot parent; `:145` FAQ parent tail; `:72` "frameworks". Remove/neutralise.
**57.** 🟠 `+G12` — **CSR / Social Impact / SROI** section (if folded here) + FAQ; also update `page.tsx:11/26` metadata (currently "…GRI, **TCFD** and IFRS S1/S2") → standards + CSR/SROI. **Confirm fold-vs-8th-service first.**
**58.** 🟡 `Strategy 7/7` — footer/print → G14/G15.
- Live (53–58): Strategy page.

---

## 10. Technical & Environmental Services — `/solutions/technical-environmental-services`  (`solution-technical.content.ts`)

**59.** 🔴 `Technical 1/7` — Now (`:14`) H1 "Measured on site. Costed in rupees. **Ready for the certifier.**" → "**Prepared for certification audit.**"; remove any "we certify" implication (`:59` "for the certifier" reword).
**60.** 🟡 `Technical 2/7` — "Every ESG number traces to a meter/manifest/permit" → "**Technical environmental data should trace to a meter, record, manifest, permit or verified source.**"
**61.** 🟡 `Technical 3/7` — soften payback absolutes. Now (`:68`) "Every finding carries its measurement, its method and its **payback**"; `:41`,`:57`,`:89`,`:140` "payback". Change: "where it applies".
**62.** 🔴 `Technical 6/7` — FAQ: distinguish advisory/audit from **accredited certification**; LCA/EIA/ESIA/MS; licensing limits.
**63.** 🔴 (placeholder) — `:84` "`[ AUDITED SAVINGS & CERTIFICATIONS POPULATE HERE… ]`"; `:91` rc-foot parent. Remove/neutralise.
**64.** 🟡 `Technical 7/7` — footer/print → G14/G15.
- Live (59–64): Technical page.

---

## 11. Sustainable Finance & Carbon Markets — `/solutions/sustainable-finance-carbon-markets`  (`solution-finance.content.ts`)

**65.** 🔴 `Finance 1/7` — Now (`:14`) H1 "**Green capital is cheaper** — if your numbers survive diligence." → "**Credible sustainability data can strengthen access to capital** — if it survives diligence." (no guaranteed pricing).
**66.** 🟡 `Finance 2/7` — avoid absolutes on ratings/pricing/eligibility.
**67.** 🟡 `Finance 4/7` — Now (`:106`) "**Every instrument prices something physical.**" → "**Each instrument should be linked to measurable eligible activities, assets or KPIs.**"; remove future-result placeholder.
**68.** 🔴 `Finance 6/7` — FAQ: distinguish finance frameworks / ESG ratings / carbon markets; add no-guarantee wording. `:143` FAQ parent tail remove.
**69.** 🔴 (placeholder) — `:84` "`[ FINANCING & RATINGS OUTCOMES POPULATE HERE… ]`"; `:91` rc-foot parent. Remove/neutralise.
**70.** 🟡 `Finance 7/7` — footer/print → G14/G15.
- Live (65–70): Finance page.

---

## 12. Capacity Building & ESG Training — `/solutions/capacity-building-esg-training`  (`solution-training.content.ts`)

**71.** 🟡 `Training 2/7` — Now (`:35`) "The obligations are annual. **Renting the skill every year is the expensive way.**" → reframe positively around building lasting internal capability.
**72.** 🟢 `Training 4/7` — don't promise every facilitator does every service (scope note).
**73.** 🔴 `Training 6/7` — FAQ: certificate of completion ≠ accredited certification. (`:142` "frameworks" → "standards".)
**74.** 🔴 (placeholder) — `:85` "`[ PROGRAMME OUTCOMES POPULATE HERE… ]`"; `:92` rc-foot parent. Remove/neutralise.
**75.** 🟡 `Training 7/7` — footer/print → G14/G15.
- Live (71–75): Training page.

---

## 13. Learn → Insights & Learning — `/learn`  (`learn.content.ts`, `learn/page.tsx`, nav/footer)

**76.** 🟡 `Learn 1/7 & 2/7` — duplicates Training → make an **Insights/Resources hub** (or merge). Keep a short explanation; direct users to resources + course tracks.
- Now: full training-programmes page (`:10` "Build real ESG… capability"); tracks `:60` "ESG **Frameworks** & Reporting", `:69` "**TCFD** & Climate-Risk", `:36`/`:114`/`:122` "**frameworks**/BRSR-Core".
- Change: rebuild as explainer hub funnelling to services; nav label + metadata; "**Standards**"; "IFRS S2 (incorporating TCFD)"; "BRSR Core". **Confirm hub shape before building.**
**77.** 🟡 `Learn 5/7` — logos/photos → names in text; "Frameworks" → "Standards".
**78.** 🟡 `Learn 7/7` — footer/print → G14/G15.
- Live (76–78): `/learn`.

---

## 14. BRSR Readiness Check — `/learn/brsr-readiness`

**79.** 🔴 `Readiness 1–2/2` — under-construction route → **remove** (delete route + all links) or complete. **Recommend remove** for MVP.
- Live: `/learn/brsr-readiness` (currently resolves 200).

---

## 15. About — `/about`  (`about.content.ts`, `about/page.tsx`)

**80.** 🟡 `About 1/5` — hero "deadline and penalty, not aspiration" → balanced regulatory/financing/value-chain realities.
**81.** 🔴 `About 2/5` — **remove competitor comparisons.** Now: `:35` "**Trusted, but not built for you.**"; `:36` "**We do BRSR reports.**" Change: replace with own-positioning cards (not competitor knocks).
**82.** 🔴 `About 2/5 & 3/5` — relationship + diagram. Now: `:48` "the **India branch of Teravue** … From our **parent** we inherit…"; `:57` alt "inherited from **parent practice** Teravue"; `:62` "**PARENT PRACTICE**"; `:64` "**INDIA BRANCH**". Change: "India-based practice **associated with** Teravue"; diagram "ASSOCIATED PRACTICE" / "INDIA PRACTICE".
**83.** 🔴 `About 4/5` — founder: remove duplicate CFA, "few practitioners", inaccurate ENOC title; value-chain; no overclaiming employment.
- Now: `:86` "**CFA — Certificate in Sustainable Investing & Certificate in ESG Investing**" (duplicate); `:80-81` founder bio (ENOC title + employers — read exact line at build); check "few practitioners".
- Change: single "**Sustainable Investing Certificate, CFA Institute (formerly Certificate in ESG Investing)**"; ENOC → "**a senior role at Emirates National Oil Company (ENOC)**"; "value-chain footprint"; past-tense employment.
**84.** 🟡 `About 5/5` — footer/print → G14/G15.
- Also `about/page.tsx:18` metadata "our **parent practice**, Teravue" → "associated practice".
- Live (80–84): About page.

---

## 16. Careers — `/careers`  (`careers.content.ts`)

**85.** 🟡 `Careers 1/5` — Now (`:20`) "**survive an auditor's questions**" → "**stand up to independent review, assessment or assurance**".
**86.** 🔴 `Careers 2/5` — reasonable-assurance language; remove parent; fix CFA; don't claim all work on real engagements.
- Now: `:38` "survive **reasonable assurance**, the independent **auditor-grade sign-off**…"; `:39` "BRSR-Core (**the assured subset**…)"; `:66` "**passes reasonable assurance**"; `:61` "aligned to **TCFD and IFRS S2**".
- Change: assessment-or-assurance reframe; "BRSR Core subset subject to assessment or assurance"; IFRS S2 (incorporating TCFD).
**87.** 🟡 `Careers 3/5` — 3 disciplines vs 7–8 services → state "current priority areas".
**88.** 🔴 `Careers 4/5` — candidate privacy + retention + consent near the CV form; verify `careers@teravora.in`; submission confirmation. (**retention period = client input**.)
**89.** 🟡 `Careers 5/5` — footer/print → G14/G15.
- Live (85–89): Careers page.

---

## 17. Legal pages (Privacy / Terms / Accessibility)  🔴 — **client facts required**

**90.** `Privacy 1–2/2` (`privacy/page.tsx`) — Now `:12`,`:23` "**Draft — to be finalized**". Change: full policy (forms, contact, CVs, WhatsApp, analytics/cookies, processors, retention, rights, grievance officer). *I draft for your legal review.*
**91.** `Terms 1–2/2` (`terms/page.tsx`) — same draft markers. Change: entity, use terms, disclaimer, no-guarantee, IP, liability, third-party links, jurisdiction, contact.
**92.** `Accessibility 1–2/2` (`accessibility/page.tsx`) — same draft markers. Change: real statement (keyboard, contrast, alt text, forms, mobile, known limits, contact) — pairs with G18.
- Live: `/privacy`, `/terms`, `/accessibility`.

---

## 18. Image Credits

**93.** 🟢 `Image Credits 2/2` — links work, mobile readable, no implied client relationship. Imagery confirmed royalty-free (→ G23). Link/mobile check folds into G22.

---

# PART B — GENERAL POINTS (site-wide)

**G1** 🔴 BRSR terminology — assessment or assurance throughout (drives 3,4,32–38,86…).
**G2** 🔴 BRSR timeline — FY2026-27 / top 1,000 current (drives 2,15).
**G3** 🔴 Legal pages complete (90–92).
**G4** 🔴 Teravora–Teravue relationship — "associated practice" (drives 7,27,82; all rc-foots 35,43,51,56,63,69,74; how-we-prove 23).
**G5** 🔴 Remove internal notes/placeholders — every `[ … POPULATE HERE … ]` + held-figure notes (35,43,51,56,63,69,74,23,35-FAQ).
**G6** 🔴 BRSR dominance on home — rebalance the wheel + "one service in depth" so ESDD/climate/technical/training/finance get equal space. **Design decision — propose options.**
**G7** 🔴 Remove ISO-certified claims (6).
**G8** 🟠 Founder credentials — full names, single CFA (83; also `seo.ts:99` honorificSuffix; `home.content.ts:199`).
**G9** 🟠 Attribute 25+ yrs to founder, not the LLP (7,27,82; `seo.ts` if present).
**G10** 🟠 TCFD → "IFRS S2, which incorporates the TCFD recommendations" (drives 13,24,40,53,55,57,61-carbon,86; `site-data.ts:145`; carbon `page.tsx`).
**G11** 🟠 Soften absolute claims (8,44,48,59,61,65,67,71).
**G12** 🟠 CSR / Social Impact / SROI in the structure (30,57). **Confirm fold-vs-8th-service.**
**G13** 🟠 Privacy notice + consent near every form (11,28,88; Why-Now form).
**G14** 🟠 **Footer & legal identity** — set the footer legal line to the client's **verbatim** string: **"© 2026 Teravora Consulting India LLP. All rights reserved. LLPIN: ACY-9976."** (restores the previously-dropped "All rights reserved"). **Registered location intentionally omitted** — client **waived** the PDF's "registered location" footer requirement (2026-07-27); LLPIN-only footer approved (documented deviation). Check Work/Contact/Proof/Standards links. *Facts confirmed — ready to apply.* (`layout.tsx` footer.)
**G15** 🟠 **Print / Save-as-PDF CSS** — reveals show, accordions open, fixed buttons hidden, no blank/logo-only pages. *(Dev task, all pages.)*
**G16** 🟡 Page length −20–30% (careful, per-page; no identity change).
**G17** 🟡 Learn hub (76).
**G18** 🟡 **Interactive: hover → click/tap + keyboard; focus states; diagram alt text.** BRSR wheel (4), persona selectors, framework badges. *(Dev task.)*
**G19** 🟡 Label illustrative dashboards (42; verify strategy 54, BRSR sample, finance/technical readycards).
**G20** 🟡 Remove black "N" — `next.config.ts` `devIndicators:false` (dev badge; never in prod).
**G21** 🟡 British English + house style — organisation, decarbonisation, site-based, desktop-based, **BRSR Core**, **IFRS S1 and IFRS S2**, **Scopes 1, 2 and 3** (site-wide).
**G22** 🟡 Mobile & speed testing; compress images; defer non-critical animation. *(Dev/QA task.)*
**G23** 🟢 Image rights — confirmed royalty-free by client. **Closed.**

### Standard wording dictionary (the canonical replacements — apply as holistic rewrites, not blind swaps)
| Current | → Change to |
|---|---|
| BRSR assurance | BRSR Core assessment or assurance readiness |
| the assured subset | the BRSR Core subset subject to assessment or assurance |
| pass reasonable assurance | prepare the disclosure and evidence trail for independent assessment or assurance |
| auditor-grade sign-off | independent assessment or assurance by an eligible provider |
| BRSR-Core | BRSR Core |
| IFRS S1/S2 | IFRS S1 and IFRS S2 |
| TCFD and IFRS S2 | IFRS S2, which incorporates the TCFD recommendations |
| Scope 1-3 / Scope 1–3 | Scopes 1, 2 and 3 |
| supply-chain footprint | value-chain footprint |
| Every tonne burned somewhere real | Every tonne traces to an activity, source and calculation |
| Green capital is cheaper | Credible sustainability data can strengthen access to capital and support financing discussions |
| ISO-certified process | Structured delivery aligned with relevant ISO management-system principles |
| India branch of Teravue | an India-based practice associated with Teravue |
| 25+ years of Teravora experience | led by practitioners with more than 25 years of relevant experience |
| CFA-Sustainable Investing / CFA-ESG | Sustainable Investing Certificate, CFA Institute (formerly Certificate in ESG Investing) |

---

# PART C — FINAL PRE-LAUNCH CHECKLIST (cross-verify)

| # | Checklist item | Covered by | Owner |
|---|---|---|---|
| 1 | All Critical items closed | 2,3,5,6,7,11,29,32–38,42–44,51,56,59,62–63,65,68–69,73–74,79,81–83,86,88,90–92 | Us + client sign-off |
| 2 | BRSR wording vs current SEBI position | G1, G2, all BRSR/assurance points | Us (client verify) |
| 3 | Privacy/Terms/Accessibility finalised | 90–92 | Us draft → client legal |
| 4 | Teravora–Teravue wording approved | G4, 7, 27, 82 | Client approved wording |
| 5 | Founder name/title/quals/roles verified | G8, 83 (ENOC, ISO/IWA48, ICAO WG5) | Client verify |
| 6 | No internal notes/placeholders remain | G5 (all egates) | Us + full-text search |
| 7 | All forms tested (notice, error, success) | G13, 11, 28, 88 | Us copy + client wiring |
| 8 | All links tested (no dead links) | G14, 31, footer | Dev/QA |
| 9 | Print / Save-as-PDF tested | G15 | Dev |
| 10 | Keyboard/mobile/contrast/alt-text | G18, G22 | Dev/QA |
| 11 | Image licences & credits verified | G23, 93 | Client (done) |
| 12 | Domain/SSL/analytics/sitemap/robots/metadata | (launch config) | Dev |
| 13 | Route / contents-map inventory reconciled (no orphaned/missing live route vs the 20-page contents map) | PDF Contents "Check"; accounts for #79 removal + #76 rename | Dev/QA |

---

## Client inputs still needed (blockers)
- **Legal-page facts** (90–92): analytics/cookies, WhatsApp number, retention periods, processors, jurisdiction, grievance officer.
- **Careers CV retention period** (88).
- **Engagement-timeline week figures** (H11): confirm the stated weeks are realistic (PDF Home 8/11).
- **Founder verifications** (G8/83): exact ENOC title, ISO/IWA 48, ICAO WG5, UAE Climate Law review, past employers.
- **Decisions**: CSR fold-vs-8th-service (G12/30/57); BRSR-dominance rebalance shape (G6); Learn/Insights hub shape (76); BRSR Readiness Check remove-vs-build (79).

## Confirmed (unblocked)
- Legal footer (G14): "© 2026 Teravora Consulting India LLP. All rights reserved. LLPIN: ACY-9976." — **registered location waived by client (2026-07-27)**, LLPIN-only footer approved (documented deviation from the PDF's "registered location" requirement).
- Production domain: https://teravora.in (live).
- Relationship wording: "an India-based practice associated with Teravue" (G4).
- Imagery: royalty-free (G23).
