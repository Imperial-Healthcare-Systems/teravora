import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { breadcrumbSchema, buildMetadata, serviceSchema } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { SolutionView } from "../SolutionView";

export const metadata: Metadata = buildMetadata({
  title: "Carbon & Climate Advisory in India | Teravora",
  description:
    "Measure, target, and cut emissions you can defend. GHG inventory, decarbonization pathways, and TCFD/ISSB-aligned climate disclosure — with an auditable method.",
  path: ROUTES.solutionB,
  ogImage: "/og/solution-b.png",
});

// V3 build — visible body is the approved V1 solution archetype (SolutionView).
export default function SolutionB() {
  return (
    <>
      <SolutionView />
      <JsonLd
        data={serviceSchema({
          name: "Carbon & Climate",
          serviceType: "GHG accounting and climate disclosure advisory",
          description:
            "GHG inventory, decarbonization pathway planning, and TCFD / IFRS S2 (ISSB)-aligned climate disclosure — built on a transparent methodology so every emissions number is defensible.",
          path: ROUTES.solutionB,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: ROUTES.home },
          { name: "Solutions", path: "/solutions" },
          { name: "Carbon & Climate", path: ROUTES.solutionB },
        ])}
      />
    </>
  );
}
