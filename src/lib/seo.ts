/* =============================================================================
 * lib/seo.ts — reusable metadata + JSON-LD helpers (T7 / DS §12).
 * These are the REUSABLE helpers/types only — per-page metadata is a later stage.
 * HARD E1 GUARD: no aggregateRating, review count, Service outcome metric, or
 * quantified impact claim in any schema. Parent outcomes are prose lineage, never
 * Teravora structured-data properties (content-baseline.md §Cross-cutting).
 * ========================================================================== */

import type { Metadata } from "next";

// PLACEHOLDER — TODO: replace with the confirmed production domain before ship.
// Origin placeholder used literally across canonical URLs, JSON-LD @ids, OG, sitemap.
export const SITE_ORIGIN = "https://teravora.in";
export const SITE_NAME = "Teravora";
export const PARENT_ORG_NAME = "Teravue";

export type FaqEntry = { question: string; answer: string };

export type PageSeoInput = {
  title: string;
  description: string;
  /** Path (with leading slash) — resolved against SITE_ORIGIN for canonical/OG. */
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  /** Set false for utility pages that should not be indexed. */
  index?: boolean;
};

/** Absolute-URL helper for a site-relative path. */
export function absUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Builds a Next Metadata object with canonical + Open Graph, in the frozen voice. */
export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  ogType = "website",
  index = true,
}: PageSeoInput): Metadata {
  const url = absUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: index ? undefined : { index: false, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: ogType,
      images: ogImage ? [{ url: absUrl(ogImage) }] : undefined,
    },
  };
}

// --- JSON-LD schema builders (E1-safe — NO metric/rating/review props) ---

/** Organization root — parentOrganization = Teravue (attributed lineage, factual). */
export function organizationSchema(opts?: {
  url?: string;
  logo?: string;
  sameAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_ORIGIN}/#organization`,
    name: SITE_NAME,
    url: opts?.url ?? SITE_ORIGIN,
    logo: opts?.logo ? absUrl(opts.logo) : undefined,
    parentOrganization: { "@type": "Organization", name: PARENT_ORG_NAME },
    foundingLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressCountry: "IN" },
    },
    sameAs: opts?.sameAs,
    founder: {
      "@type": "Person",
      "@id": `${SITE_ORIGIN}/#founder`,
      name: "Brijesh Dhruve",
    },
    // NOTE (E1): no aggregateRating / review / numberOfEmployees unless factual.
  };
}

/** Founder Person — factual identity/credentials only (E1: no outcome claims). */
export function founderSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_ORIGIN}/#founder`,
    name: "Brijesh Dhruve",
    honorificSuffix:
      "CEnv, CEng, CFA Institute Sustainable Investing Certificate, GARP-SCR, CEM, CEA, PMP",
    jobTitle: "Founder & Designated Partner",
    worksFor: { "@id": `${SITE_ORIGIN}/#organization` },
    url: `${SITE_ORIGIN}/about#founder`,
    knowsAbout: [
      "IFC Performance Standards implementation",
      "Equator Principles advisory",
      "Environmental and social due diligence (ESDD)",
      "ESG and sustainability training",
      "Scope 3 value-chain emissions",
      "Carbon accounting and GHG inventory",
      "Climate risk",
      "Industrial decarbonisation",
      "Energy management",
      "ESG governance",
      "BRSR / BRSR Core assessment or assurance readiness",
      "Social impact measurement and SROI",
      "CSR outcome evaluation",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    name: SITE_NAME,
    url: SITE_ORIGIN,
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
  };
}

/** Service schema — E1: no outcome metric in any field. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  serviceType?: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    areaServed: { "@type": "Country", name: "India" },
    provider: { "@id": `${SITE_ORIGIN}/#organization` },
    url: absUrl(opts.path),
  };
}

/** FAQPage — derives from the SSR'd disclosure/accordion content (single source). */
export function faqPageSchema(entries: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((e) => ({
      "@type": "Question",
      name: e.question,
      acceptedAnswer: { "@type": "Answer", text: e.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}
