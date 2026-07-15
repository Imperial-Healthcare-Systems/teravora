import type { Metadata } from "next";
import { FaqJsonLd } from "@/components";
import { buildMetadata } from "@/lib/seo";
import { FAQ_ALL, ROUTES } from "@/lib/site-data";
import { HOME_BODY } from "./home.content";
import { HomeRuntime } from "./HomeRuntime";
import "./home.vcomp.css";

// buildMetadata sets an ABSOLUTE title (no template — see layout.tsx), so this
// title, not the root one, is the home page's SERP identity. Keep the two aligned.
export const metadata: Metadata = buildMetadata({
  title:
    "Teravora | Environmental & Social Risk, ESG Due Diligence & Advisory, India",
  description:
    "India-based environmental and social risk practice — IFC Performance Standards and Equator Principles advisory, ESG due diligence, carbon and climate, and practitioner-led training. The method shown, not just the result.",
  path: ROUTES.home,
  ogImage: "/og/home.png",
});

// V3 build — the visible page is the approved v1-home comp, ported as a
// dark-surface island: server-rendered body (SEO-visible markup) + the comp's
// own runtime (HomeRuntime). Metadata + FAQ structured data are preserved from
// the T-foundation page so search/AEO coverage is unchanged.
export default function Home() {
  return (
    <>
      <main
        id="main-content"
        className="pg-home"
        data-surface="dark"
        dangerouslySetInnerHTML={{ __html: HOME_BODY }}
      />
      <HomeRuntime />
      <FaqJsonLd entries={FAQ_ALL} />
    </>
  );
}
