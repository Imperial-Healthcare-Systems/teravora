import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { breadcrumbSchema, buildMetadata, serviceSchema } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { SOLUTION_BODY } from "../../solution.content";
import { SolutionView } from "../SolutionView";

export const metadata: Metadata = buildMetadata({
  title: "BRSR & Assurance Readiness in India | Teravora",
  description:
    "Get to a filed, defensible BRSR that passes reasonable assurance. We map your data to BRSR-Core's 49 KPIs, close gaps, and show the method at every step.",
  path: ROUTES.solutionA,
  ogImage: "/og/solution-a.png",
});

// V3 build — visible body is the approved V1 solution archetype (SolutionView).
// Route-specific SEO/AEO (Service + Breadcrumb structured data) is preserved.
export default function SolutionA() {
  return (
    <>
      <SolutionView body={SOLUTION_BODY} />
      <JsonLd
        data={serviceSchema({
          name: "ESG Disclosure & Assurance Readiness",
          serviceType: "BRSR and BRSR-Core assurance-readiness advisory",
          description:
            "We map your data to BRSR-Core's 49 KPIs across 9 attributes, close the gaps in plain language, and prepare a Business Responsibility and Sustainability Report (BRSR) built to pass reasonable assurance — with the method shown at every step.",
          path: ROUTES.solutionA,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: ROUTES.home },
          { name: "Solutions", path: "/solutions" },
          { name: "ESG Disclosure & Assurance Readiness", path: ROUTES.solutionA },
        ])}
      />
    </>
  );
}
