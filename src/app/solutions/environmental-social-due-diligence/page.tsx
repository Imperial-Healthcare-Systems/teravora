import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { breadcrumbSchema, buildMetadata, serviceSchema } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { SOLUTION_D_BODY } from "../../solution-d.content";
import { SolutionView } from "../SolutionView";

export const metadata: Metadata = buildMetadata({
  title: "Environmental & Social Due Diligence | Teravora",
  description:
    "ESDD that stands up in the deal and to the lender. Environmental and social due diligence aligned to IFC Performance Standards and the Equator Principles.",
  path: ROUTES.solutionD,
  ogImage: "/og/solution-d.png",
});

// Dedicated body (catalog completion, 2026-07-14) — replaces the MVP shortcut
// that rendered the Solution A archetype content on this route.
export default function SolutionD() {
  return (
    <>
      <SolutionView body={SOLUTION_D_BODY} />
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
