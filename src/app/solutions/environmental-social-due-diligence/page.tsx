import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { breadcrumbSchema, buildMetadata, serviceSchema } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { SolutionView } from "../SolutionView";

export const metadata: Metadata = buildMetadata({
  title: "Environmental & Social Due Diligence | Teravora",
  description:
    "ESDD that stands up in the deal and to the lender. Environmental and social due diligence aligned to IFC Performance Standards and the Equator Principles.",
  path: ROUTES.solutionD,
  ogImage: "/og/solution-d.png",
});

// V3 build — visible body is the approved V1 solution archetype (SolutionView).
export default function SolutionD() {
  return (
    <>
      <SolutionView />
      <JsonLd
        data={serviceSchema({
          name: "Environmental & Social Due Diligence",
          serviceType: "Environmental and social due diligence (ESDD)",
          description:
            "Environmental and social due diligence aligned to the IFC Performance Standards and the Equator Principles — a due-diligence method that stands up in the deal and to the lender.",
          path: ROUTES.solutionD,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: ROUTES.home },
          { name: "Solutions", path: "/solutions" },
          { name: "Environmental & Social Due Diligence", path: ROUTES.solutionD },
        ])}
      />
    </>
  );
}
