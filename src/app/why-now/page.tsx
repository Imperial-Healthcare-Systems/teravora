import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { WHYNOW_BODY } from "../why-now.content";
import { WhyNowRuntime } from "../WhyNowRuntime";
import "../why-now.vcomp.css";

// V3 section-wise build. The visible page is a scoped .pg-whynow island:
// server-rendered body (SEO-visible markup) + a light reveal runtime. Published
// and indexable after the whole-page recalibration pass (5 beats + human sign-off).
export const metadata: Metadata = buildMetadata({
  title: "Why Now | Teravora",
  description:
    "Why ESG disclosure and assurance readiness are moving up the agenda for Indian companies — the regulatory schedule, the forces driving it, and the cost of waiting.",
  path: "/why-now",
});

export default function WhyNow() {
  return (
    <>
      <main
        id="main-content"
        className="pg-whynow"
        data-surface="dark"
        dangerouslySetInnerHTML={{ __html: WHYNOW_BODY }}
      />
      <WhyNowRuntime />
    </>
  );
}
