import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { absUrl, breadcrumbSchema, buildMetadata, SITE_ORIGIN } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { START_BODY } from "../start.content";
import { StartRuntime } from "./StartRuntime";
import "../start.vcomp.css";

export const metadata: Metadata = buildMetadata({
  title: "Request a Proposal | Teravora ESG Advisory",
  description:
    "Tell us what's prompting your ESG work. A specialist replies within two business days with a first read on your requirements and a proposed scope — not a quote.",
  path: ROUTES.start,
  ogImage: "/og/start.png",
});

// V3 build — visible body is the approved V1 start comp: a light workspace with
// a compact dark hero + the 3-step proposal flow and live-building spec panel.
// Light surface (no data-surface="dark"); the comp CSS sets its own dark hero.
export default function Start() {
  return (
    <>
      <main
        id="main-content"
        className="pg-start"
        dangerouslySetInnerHTML={{ __html: START_BODY }}
      />
      <StartRuntime />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${SITE_ORIGIN}/start#webpage`,
          url: absUrl(ROUTES.start),
          name: "Request a Proposal",
          isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: ROUTES.home },
          { name: "Request a Proposal", path: ROUTES.start },
        ])}
      />
    </>
  );
}
