import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { breadcrumbSchema, buildMetadata, serviceSchema } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { SOLUTION_FINANCE_BODY } from "../../solution-finance.content";
import { SolutionView } from "../SolutionView";

export const metadata: Metadata = buildMetadata({
  title: "Sustainable Finance & Carbon Markets, India | Teravora",
  description:
    "Sustainable-finance readiness, ESG-ratings support and carbon-markets guidance for India — built on a verifiable evidence base that survives lender and rater diligence.",
  path: ROUTES.solutionFinance,
});

// Catalog completion (client-directed, 2026-07-14): Teravue offering pillar 3
// (finance/ratings/markets) / service-line map Line E, authored fresh from the
// research@v0 offering scope. E1: no market-size or outcome figures on page.
export default function SolutionFinance() {
  return (
    <>
      <SolutionView body={SOLUTION_FINANCE_BODY} />
      <JsonLd
        data={serviceSchema({
          name: "Sustainable Finance & Carbon Markets",
          serviceType:
            "Sustainable-finance readiness, ESG-ratings support and carbon-markets guidance",
          description:
            "Readiness for green and sustainability-linked finance, ESG-ratings support for SEBI-regulated ERP assessments, and guidance on compliance and voluntary carbon markets — built on a verifiable evidence base.",
          path: ROUTES.solutionFinance,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: ROUTES.home },
          { name: "Solutions", path: ROUTES.solutions },
          { name: "Sustainable Finance & Carbon Markets", path: ROUTES.solutionFinance },
        ])}
      />
    </>
  );
}
