import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { breadcrumbSchema, buildMetadata, serviceSchema } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { SOLUTION_TRAINING_BODY } from "../../solution-training.content";
import { SolutionView } from "../SolutionView";

export const metadata: Metadata = buildMetadata({
  title: "Corporate & On-Field ESG Training, India | Teravora",
  description:
    "Tailor-made corporate and on-field training on environment, ESG, climate change and sustainability — IFC Performance Standards, Equator Principles, GHG accounting and BRSR, taught on your own data by practitioners.",
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
          serviceType:
            "Corporate and on-field training on environment, ESG, climate change and sustainability",
          description:
            "Tailor-made corporate and on-field training programmes for boards, finance owners and operating teams — the IFC Performance Standards and Equator Principles, GHG Protocol accounting, IFRS S1/S2 and India's BRSR/BRSR-Core, taught by practitioners on the client's own data and sites.",
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
