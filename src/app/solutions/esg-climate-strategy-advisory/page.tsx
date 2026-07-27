import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { breadcrumbSchema, buildMetadata, serviceSchema } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { SOLUTION_ADVISORY_BODY } from "../../solution-advisory.content";
import { SolutionView } from "../SolutionView";

export const metadata: Metadata = buildMetadata({
  title: "ESG & Climate Strategy Advisory, India | Teravora",
  description:
    "Embed ESG and climate into governance, strategy and operations. Materiality assessment to a board-approvable roadmap — with named owners and measures behind every priority.",
  path: ROUTES.solutionAdvisory,
});

// Catalog completion (client-directed, 2026-07-14): Teravue offering pillar 1,
// authored fresh from the research@v0 offering scope — no parent copy reused.
export default function SolutionAdvisory() {
  return (
    <>
      <SolutionView body={SOLUTION_ADVISORY_BODY} />
      <JsonLd
        data={serviceSchema({
          name: "ESG & Climate Strategy Advisory",
          serviceType: "ESG and climate strategy, governance and materiality advisory",
          description:
            "We embed ESG and climate into governance, strategy and operations — from materiality assessment to a board-approvable roadmap with named owners, aligned to BRSR, GRI, and IFRS S1 and IFRS S2 (incorporating the TCFD recommendations).",
          path: ROUTES.solutionAdvisory,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: ROUTES.home },
          { name: "Solutions", path: ROUTES.solutions },
          { name: "ESG & Climate Strategy Advisory", path: ROUTES.solutionAdvisory },
        ])}
      />
    </>
  );
}
