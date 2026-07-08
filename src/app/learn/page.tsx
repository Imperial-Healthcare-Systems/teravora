import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { LEARN_BODY } from "../learn.content";
import { LearnRuntime } from "../LearnRuntime";
import "../learn.vcomp.css";

// V3 section-wise build. The visible page is a scoped .pg-learn island:
// server-rendered body (SEO-visible markup) + a light reveal/particle runtime.
// Repositions the former placeholder stub into a real capacity-building /
// ESG-training page. Subject scope informed by the parent practice; all copy,
// layout and structure are original to the Teravora brand.
export const metadata: Metadata = buildMetadata({
  title: "ESG Training & Capacity Building | Teravora",
  description:
    "Practitioner-led ESG training for Indian teams — BRSR, GHG accounting, TCFD, sustainable finance and ESG governance. Executive masterclasses, in-house cohorts and workshops, taught by the specialists who prepare filings for assurance.",
  path: "/learn",
});

export default function Learn() {
  return (
    <>
      <main
        id="main-content"
        className="pg-learn"
        data-surface="dark"
        dangerouslySetInnerHTML={{ __html: LEARN_BODY }}
      />
      <LearnRuntime />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: ROUTES.home },
          { name: "Learn", path: "/learn" },
        ])}
      />
    </>
  );
}
