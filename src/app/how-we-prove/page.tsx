import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { HOW_WE_PROVE_BODY } from "../how-we-prove.content";
import { HowWeProveRuntime } from "./HowWeProveRuntime";
import "../how-we-prove.vcomp.css";

export const metadata: Metadata = buildMetadata({
  title: "How We Prove It — Method & Standards | Teravora",
  description:
    "Credibility you can audit. See our Assess-Comply-Improve-Prove method, the standards we work to, and how we make every metric survive assurance.",
  path: ROUTES.howWeProve,
  ogImage: "/og/how-we-prove.png",
});

// V3 build — visible body is the approved V1 how-we-prove comp, ported as a
// dark-surface island. Breadcrumb structured data preserved. (FAQ structured
// data will be regenerated from the comp's own visible FAQ in a follow-up.)
export default function HowWeProve() {
  return (
    <>
      <main
        id="main-content"
        className="pg-how-we-prove"
        data-surface="dark"
        dangerouslySetInnerHTML={{ __html: HOW_WE_PROVE_BODY }}
      />
      <HowWeProveRuntime />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: ROUTES.home },
          { name: "How We Prove It", path: ROUTES.howWeProve },
        ])}
      />
    </>
  );
}
