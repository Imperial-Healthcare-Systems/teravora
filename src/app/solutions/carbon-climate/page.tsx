import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { breadcrumbSchema, buildMetadata, serviceSchema } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { SOLUTION_B_BODY } from "../../solution-b.content";
import { SolutionView } from "../SolutionView";

export const metadata: Metadata = buildMetadata({
  title: "Carbon & Climate Advisory in India | Teravora",
  description:
    "Measure, target, and cut emissions you can defend. GHG inventory, decarbonisation pathways, and IFRS S2 (ISSB)-aligned climate disclosure, incorporating the TCFD recommendations — with an auditable method.",
  path: ROUTES.solutionB,
  ogImage: "/og/solution-b.png",
});

// Dedicated body (catalog completion, 2026-07-14) — replaces the MVP shortcut
// that rendered the Solution A archetype content on this route.
export default function SolutionB() {
  return (
    <>
      <SolutionView body={SOLUTION_B_BODY} />
      <JsonLd
        data={serviceSchema({
          name: "Carbon & Climate",
          serviceType: "GHG accounting and climate disclosure advisory",
          description:
            "GHG inventory, decarbonisation pathway planning, and IFRS S2 (ISSB)-aligned climate disclosure incorporating the TCFD recommendations — built on a transparent methodology so every emissions number is defensible.",
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
