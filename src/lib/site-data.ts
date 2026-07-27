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
  solutions: "/solutions",
  solutionA: "/solutions/esg-disclosure-assurance-readiness",
  solutionB: "/solutions/carbon-climate",
  solutionD: "/solutions/environmental-social-due-diligence",
  // Catalog completion (client-directed, 2026-07-14): full Teravue service-scope
  // parity. Named descriptively — the ia/v0 staged-line letters regrouped these.
  solutionAdvisory: "/solutions/esg-climate-strategy-advisory",
  solutionTechnical: "/solutions/technical-environmental-services",
  solutionFinance: "/solutions/sustainable-finance-carbon-markets",
  solutionTraining: "/solutions/capacity-building-esg-training",
  // 8th service (client-directed, 2026-07-27): CSR / Social Impact / SROI as
  // its own card + route.
  solutionSocial: "/solutions/social-impact-sroi",
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
    // Full catalog; core-first order (client repositioning, 2026-07-15): the
    // environmental & social risk practice leads — ESDD/IFC/Equator and training
    // first — with BRSR retained as the India-disclosure line, not the headline.
    children: [
      { label: "All Solutions", href: ROUTES.solutions, kind: "page" },
      {
        label: "Environmental & Social Due Diligence",
        href: ROUTES.solutionD,
        kind: "service",
      },
      {
        label: "Capacity Building & Training",
        href: ROUTES.solutionTraining,
        kind: "service",
      },
      { label: "Carbon & Climate", href: ROUTES.solutionB, kind: "service" },
      {
        label: "ESG & Climate Strategy Advisory",
        href: ROUTES.solutionAdvisory,
        kind: "service",
      },
      {
        label: "Technical & Environmental Services",
        href: ROUTES.solutionTechnical,
        kind: "service",
      },
      {
        label: "Sustainable Finance & Carbon Markets",
        href: ROUTES.solutionFinance,
        kind: "service",
      },
      {
        label: "ESG Disclosure & Assurance Readiness",
        href: ROUTES.solutionA,
        kind: "service",
      },
      {
        label: "Social Impact & SROI",
        href: ROUTES.solutionSocial,
        kind: "service",
      },
    ],
  },
  { label: "Learn", href: "/learn", kind: "page" },
  { label: "About", href: ROUTES.about, kind: "page" },
];

// --- FAQ facts (seo-aeo-spec §3.5 — verbatim; traceable to research@v0) -----
// Core-practice entries (client repositioning, 2026-07-15) are lifted from the
// approved prose in solution-d.content.ts §faq and solution-b.content.ts §scope3,
// plain-texted for JSON-LD. Definitional only — no capability or outcome claim
// enters structured data (E1 guard, seo.ts header).
export const FAQ: Record<string, FaqEntry> = {
  whatIsEsdd: {
    question: "What is ESDD, and how is it different from an EIA?",
    answer:
      "An EIA (environmental impact assessment) assesses a proposed project's future impacts, usually for a consent. ESDD — environmental and social due diligence — assesses an existing business or asset's environmental and social risks and liabilities, typically for a transaction or financing decision.",
  },
  ifcPerformanceStandards: {
    question: "What are the IFC Performance Standards?",
    answer:
      "Eight standards from the International Finance Corporation covering risk management, labour, resource efficiency and pollution, community health and safety, land and resettlement, biodiversity, indigenous peoples, and cultural heritage. They are the de-facto benchmark lenders and investors apply to environmental and social diligence.",
  },
  equatorPrinciples: {
    question: "What are the Equator Principles?",
    answer:
      "A risk-management framework adopted by financial institutions for assessing and managing environmental and social risk in project-related financing. Equator-aligned lenders expect projects to be assessed against the IFC Performance Standards — which is why diligence is built on them.",
  },
  desktopVsSiteEsdd: {
    question: "What is the difference between a Desktop ESDD and a Site-Based ESDD?",
    answer:
      "A Desktop ESDD reviews the data room, permits and public record remotely — fast, and often enough for a red-flag screen. A Site-Based ESDD adds field verification: site visits, interviews and sampling where the risk or the lender requires eyes on the asset. Scope follows the deal, escalating only where the evidence demands it.",
  },
  ifcImplementation: {
    question:
      "Is IFC Performance Standards work limited to assessment, or does it extend to implementation?",
    answer:
      "Both. Beyond diligence, IFC Performance Standards implementation advisory builds the environmental and social management system (HSESMS), the E&S action plan (ESAP) and the monitoring a borrower needs to meet lender conditions through the life of the asset.",
  },
  whatIsScope3: {
    question: "What is Scope 3, and why is it the hard part?",
    answer:
      "Scope 3 is value-chain emissions — purchased and capital goods, transport, waste, business travel, use of sold products and end-of-life, spread across fifteen categories. It is where most of an organisation's footprint sits, and where most inventories stop.",
  },
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

/**
 * The full topic set (Home). Core practice leads — environmental & social risk,
 * IFC PS, Equator, ESDD, Scope 3 — then India's BRSR line. This array is the
 * FAQPage JSON-LD every answer engine ingests for the site, so its order is the
 * positioning, not a cosmetic choice.
 */
export const FAQ_ALL: FaqEntry[] = [
  FAQ.whatIsEsdd,
  FAQ.ifcPerformanceStandards,
  FAQ.equatorPrinciples,
  FAQ.desktopVsSiteEsdd,
  FAQ.ifcImplementation,
  FAQ.whatIsScope3,
  FAQ.whatIsBrsr,
  FAQ.whatIsBrsrCore,
  FAQ.whoNeedsAssurance,
  FAQ.reasonableVsLimited,
  FAQ.valueChain,
  FAQ.frameworks,
];
