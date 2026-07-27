import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { breadcrumbSchema, buildMetadata, serviceSchema } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { SOLUTION_TECHNICAL_BODY } from "../../solution-technical.content";
import { SolutionView } from "../SolutionView";

export const metadata: Metadata = buildMetadata({
  title: "Energy Audits, LCA, EIA & ISO Advisory, India | Teravora",
  description:
    "Energy, water and waste audits, life-cycle assessment (LCA), EIA/ESIA and ISO/IMS implementation — measured on site, costed in rupees, prepared for certification audit.",
  path: ROUTES.solutionTechnical,
});

// Catalog completion (client-directed, 2026-07-14): Teravue offering pillar 2 /
// service-line map Line C, authored fresh from the research@v0 offering scope.
export default function SolutionTechnical() {
  return (
    <>
      <SolutionView body={SOLUTION_TECHNICAL_BODY} />
      <JsonLd
        data={serviceSchema({
          name: "Technical & Environmental Services",
          serviceType:
            "Energy, water and waste audits, life-cycle assessment, EIA/ESIA and ISO/IMS implementation",
          description:
            "Site-measured energy, water and waste audits, life-cycle assessment to ISO 14040/14044, EIA/ESIA impact assessment, and ISO/IMS documentation and implementation support — the engineering layer under credible ESG claims.",
          path: ROUTES.solutionTechnical,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: ROUTES.home },
          { name: "Solutions", path: ROUTES.solutions },
          { name: "Technical & Environmental Services", path: ROUTES.solutionTechnical },
        ])}
      />
    </>
  );
}
