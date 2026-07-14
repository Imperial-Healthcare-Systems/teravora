/* =============================================================================
 * site-data.ts — shared, page-level data for the MVP composition (workstream P).
 * Pure data (no React) so it is safe to import in both server and client modules.
 * Nav taxonomy is the frozen ia@v0 D-1 model (human_decides — reused verbatim, not
 * re-authored here). FAQ facts are the 6 confirmed India-BRSR facts from
 * seo-aeo-spec §3.5 (each traceable to research@v0; no penalty figures, no metric).
 * ========================================================================== */

import type { NavItem } from "@/components";
import type { FaqEntry } from "@/lib/seo";

// --- Canonical routes (match seo-aeo-spec §0.1 URL map) ---------------------
export const ROUTES = {
  home: "/",
  solutionA: "/solutions/esg-disclosure-assurance-readiness",
  solutionB: "/solutions/carbon-climate",
  solutionD: "/solutions/environmental-social-due-diligence",
  howWeProve: "/how-we-prove",
  about: "/about",
  start: "/start",
  careers: "/careers",
} as const;

// --- Nav taxonomy (frozen ia@v0 D-1 A-weighted hybrid) ----------------------
export const NAV_ITEMS: NavItem[] = [
  { label: "Why now", href: "/why-now", kind: "trigger" },
  { label: "Our Method", href: ROUTES.howWeProve, kind: "trigger" },
  {
    label: "Solutions",
    kind: "page",
    children: [
      {
        label: "BRSR & Assurance Readiness",
        href: ROUTES.solutionA,
        kind: "service",
      },
      { label: "Carbon & Climate", href: ROUTES.solutionB, kind: "service" },
      {
        label: "Environmental & Social Due Diligence",
        href: ROUTES.solutionD,
        kind: "service",
      },
    ],
  },
  { label: "Learn", href: "/learn", kind: "page" },
  { label: "About", href: ROUTES.about, kind: "page" },
];

// --- FAQ facts (seo-aeo-spec §3.5 — verbatim; traceable to research@v0) -----
export const FAQ: Record<string, FaqEntry> = {
  whatIsBrsr: {
    question: "What is BRSR?",
    answer:
      "BRSR stands for Business Responsibility and Sustainability Report — the disclosure that SEBI has mandated for the top 1,000 listed companies by market capitalisation since FY2022-23.",
  },
  whatIsBrsrCore: {
    question: "What is BRSR-Core?",
    answer:
      "BRSR-Core is the assured subset of the BRSR — 49 key performance indicators across 9 attributes, covering areas such as greenhouse gases, water, waste, energy, gender diversity, wages, and customer relationships.",
  },
  whoNeedsAssurance: {
    question: "Who needs reasonable assurance of BRSR-Core, and when?",
    answer:
      "SEBI is phasing in reasonable assurance of BRSR-Core by market-cap band: the top 150 from FY2023-24, top 250 from FY2024-25, top 500 from FY2025-26, and top 1,000 from FY2026-27.",
  },
  reasonableVsLimited: {
    question: "How is reasonable assurance different from limited assurance?",
    answer:
      "Reasonable assurance is a higher bar than limited assurance. India's BRSR-Core requires reasonable assurance, meaning the underlying ESG data and controls must withstand a deeper level of independent verification.",
  },
  valueChain: {
    question: "Does BRSR apply to a company's value chain or suppliers?",
    answer:
      "Per SEBI's circular dated 28 March 2025, value-chain ESG disclosure is voluntary and its assurance is deferred, described as 'assessment or assurance'. It covers trade partners individually accounting for at least 2% of purchases or sales, capped at 75% coverage.",
  },
  frameworks: {
    question: "What frameworks does an India ESG disclosure programme touch?",
    answer:
      "Beyond BRSR and BRSR-Core, Indian ESG disclosure commonly aligns with GRI, SASB, TCFD, and IFRS S1/S2 (ISSB), with ISSB convergence widely anticipated. Due-diligence work draws on the IFC Performance Standards and the Equator Principles.",
  },
};

/** All six confirmed facts (Home carries the full topic set). */
export const FAQ_ALL: FaqEntry[] = [
  FAQ.whatIsBrsr,
  FAQ.whatIsBrsrCore,
  FAQ.whoNeedsAssurance,
  FAQ.reasonableVsLimited,
  FAQ.valueChain,
  FAQ.frameworks,
];
