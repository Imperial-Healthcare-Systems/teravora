import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { absUrl, breadcrumbSchema, buildMetadata, SITE_ORIGIN } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { SOLUTIONS_HUB_BODY } from "../solutions-hub.content";
import { SolutionView } from "./SolutionView";

export const metadata: Metadata = buildMetadata({
  title: "ESG & Sustainability Consulting Solutions | Teravora",
  description:
    "Teravora's full catalog: environmental & social due diligence (IFC & Equator), ESG training, carbon & climate, ESG strategy, technical & environmental services, sustainable finance, and BRSR assurance readiness.",
  path: ROUTES.solutions,
});

// Solutions hub (catalog completion, 2026-07-14). Solution-route breadcrumb
// JSON-LD pointed at /solutions since MVP — this page makes the URL real and
// gives the seven services one canonical index.
const CATALOG: { name: string; path: string }[] = [
  { name: "Environmental & Social Due Diligence", path: ROUTES.solutionD },
  { name: "Capacity Building & Training", path: ROUTES.solutionTraining },
  { name: "Carbon & Climate", path: ROUTES.solutionB },
  { name: "ESG & Climate Strategy Advisory", path: ROUTES.solutionAdvisory },
  { name: "Technical & Environmental Services", path: ROUTES.solutionTechnical },
  { name: "Sustainable Finance & Carbon Markets", path: ROUTES.solutionFinance },
  { name: "BRSR & Assurance Readiness", path: ROUTES.solutionA },
];

export default function Solutions() {
  return (
    <>
      <SolutionView body={SOLUTIONS_HUB_BODY} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${absUrl(ROUTES.solutions)}#webpage`,
          url: absUrl(ROUTES.solutions),
          name: "Teravora Solutions",
          isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
          about: { "@id": `${SITE_ORIGIN}/#organization` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: CATALOG.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.name,
              url: absUrl(s.path),
            })),
          },
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: ROUTES.home },
          { name: "Solutions", path: ROUTES.solutions },
        ])}
      />
    </>
  );
}
