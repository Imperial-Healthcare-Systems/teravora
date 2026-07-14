import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { absUrl, breadcrumbSchema, buildMetadata, SITE_ORIGIN } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { CAREERS_BODY } from "../careers.content";
import { CareersRuntime } from "../CareersRuntime";
import "../careers.vcomp.css";

// Evergreen careers page — net-new IA addition (human-approved, footer-only).
// Decisions of record:
// - NO JobPosting JSON-LD until real, current openings exist (Google's job-posting
//   spam policy penalizes listings that aren't real jobs). When roles go live, add
//   per-role JobPosting nodes here alongside the role cards in careers.content.ts.
// - careers@teravora.in is TBC with the client (same status as PROPOSAL_FALLBACK_EMAIL).
// - Open-roles section ships as an honest empty state (content@v0 E1: no ghost listings).
export const metadata: Metadata = buildMetadata({
  title: "ESG & Sustainability Consulting Careers, India | Teravora",
  description:
    "Careers at Teravora, an India ESG advisory hiring practitioners across BRSR & assurance, carbon & climate and ESG due diligence. Open applications welcome.",
  path: ROUTES.careers,
});

export default function Careers() {
  return (
    <>
      <main
        id="main-content"
        className="pg-careers"
        data-surface="dark"
        dangerouslySetInnerHTML={{ __html: CAREERS_BODY }}
      />
      <CareersRuntime />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${absUrl(ROUTES.careers)}#webpage`,
          url: absUrl(ROUTES.careers),
          name: "Careers at Teravora",
          isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
          about: { "@id": `${SITE_ORIGIN}/#organization` },
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: ROUTES.home },
          { name: "Careers", path: ROUTES.careers },
        ])}
      />
    </>
  );
}
