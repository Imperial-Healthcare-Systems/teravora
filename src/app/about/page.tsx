import type { Metadata } from "next";
import { JsonLd } from "@/components";
import { absUrl, breadcrumbSchema, buildMetadata, SITE_ORIGIN } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { ABOUT_BODY } from "../about.content";
import { AboutRuntime } from "./AboutRuntime";
import "../about.vcomp.css";

export const metadata: Metadata = buildMetadata({
  title: "About Teravora | New India Brand, Proven Backbone",
  description:
    "Teravora is a new India ESG advisory built on a proven backbone: the methods and standards mastery of our parent practice, Teravue, applied to India's rules.",
  path: ROUTES.about,
  ogImage: "/og/about.png",
});

// V3 build — visible body is the approved V1 about comp (dark editorial:
// positioning + attributed Teravue lineage + specialists). AboutPage +
// Breadcrumb structured data preserved.
export default function About() {
  return (
    <>
      <main
        id="main-content"
        className="pg-about"
        data-surface="dark"
        dangerouslySetInnerHTML={{ __html: ABOUT_BODY }}
      />
      <AboutRuntime />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": `${SITE_ORIGIN}/about#aboutpage`,
          url: absUrl(ROUTES.about),
          name: "About Teravora",
          about: { "@id": `${SITE_ORIGIN}/#organization` },
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: ROUTES.home },
          { name: "About", path: ROUTES.about },
        ])}
      />
    </>
  );
}
