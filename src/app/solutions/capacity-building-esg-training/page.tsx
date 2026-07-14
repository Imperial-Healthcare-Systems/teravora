import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { breadcrumbSchema, buildMetadata, serviceSchema } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { SOLUTION_TRAINING_BODY } from "../../solution-training.content";
import { SolutionView } from "../SolutionView";

export const metadata: Metadata = buildMetadata({
  title: "ESG Training & Capacity Building, India | Teravora",
  description:
    "Targeted ESG training and capacity-building for boards, finance owners and operating teams — BRSR, GHG accounting and IFRS S1/S2, taught on your own data by practitioners.",
  path: ROUTES.solutionTraining,
});

// Catalog completion (client-directed, 2026-07-14): Teravue offering pillar 3
// (training) / service-line map Line G, authored fresh from the research@v0
// offering scope. E1: no trainee counts or programme outcome claims.
export default function SolutionTraining() {
  return (
    <>
      <SolutionView body={SOLUTION_TRAINING_BODY} />
      <JsonLd
        data={serviceSchema({
          name: "Capacity Building & ESG Training",
          serviceType: "ESG, BRSR and GHG-accounting training and capacity building",
          description:
            "Targeted training and capacity-building programmes for boards, finance owners and operating teams — BRSR/BRSR-Core, GHG Protocol accounting and IFRS S1/S2, taught by practitioners on the client's own data and filings.",
          path: ROUTES.solutionTraining,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: ROUTES.home },
          { name: "Solutions", path: ROUTES.solutions },
          { name: "Capacity Building & Training", path: ROUTES.solutionTraining },
        ])}
      />
    </>
  );
}
