import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { breadcrumbSchema, buildMetadata, serviceSchema } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { SOLUTION_SOCIAL_BODY } from "../../solution-social.content";
import { SolutionView } from "../SolutionView";

export const metadata: Metadata = buildMetadata({
  title: "Social Impact & SROI in India | Teravora",
  description:
    "Turn CSR and community programmes into measured outcomes and a defensible SROI. Following the SROI principles of Social Value International — the social value created for every rupee, with the evidence trail behind every claim.",
  path: ROUTES.solutionSocial,
});

// 8th service (client-directed, 2026-07-27): CSR / Social Impact / SROI as its
// own route. Copy authored fresh in the site voice; scope grounded in India
// CSR practice (Companies Act 2013 §135) and the SROI principles of Social
// Value International — no parent copy reused.
export default function SolutionSocial() {
  return (
    <>
      <SolutionView body={SOLUTION_SOCIAL_BODY} />
      <JsonLd
        data={serviceSchema({
          name: "Social Impact & SROI",
          serviceType: "Social impact measurement, CSR outcome evaluation and Social Return on Investment (SROI) advisory",
          description:
            "We measure and value the social outcomes of CSR and community programmes — following the SROI principles of Social Value International, aligned to IRIS+, the UN SDGs and BRSR social disclosures, set against India's Companies Act 2013 §135 CSR requirements.",
          path: ROUTES.solutionSocial,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: ROUTES.home },
          { name: "Solutions", path: ROUTES.solutions },
          { name: "Social Impact & SROI", path: ROUTES.solutionSocial },
        ])}
      />
    </>
  );
}
