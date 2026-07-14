import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import "./tokens.css";
import "./globals.css";
import { Footer, JsonLd } from "@/components";
import type { FooterColumn } from "@/components";
import { organizationSchema, websiteSchema, SITE_ORIGIN } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";
import { SiteNav } from "./site-nav";

// Finalized footer taxonomy — ported from the approved v1-home-comp foot-cols.
// Column labels/order are the human-approved artifact; hrefs are mapped to the
// real route map. NOTE: dedicated "Work" and "Contact" pages are in the IA but
// not yet built — they point at the nearest live route as an interim.
const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Solutions",
    // Full catalog (client-directed completion, 2026-07-14) — mirrors the nav.
    items: [
      { label: "All Solutions", href: ROUTES.solutions },
      { label: "BRSR & Assurance Readiness", href: ROUTES.solutionA },
      { label: "Carbon & Climate", href: ROUTES.solutionB },
      { label: "ESG & Climate Strategy Advisory", href: ROUTES.solutionAdvisory },
      { label: "Technical & Environmental Services", href: ROUTES.solutionTechnical },
      { label: "Sustainable Finance & Carbon Markets", href: ROUTES.solutionFinance },
      { label: "Environmental & Social Due Diligence", href: ROUTES.solutionD },
      { label: "Capacity Building & Training", href: ROUTES.solutionTraining },
    ],
  },
  {
    title: "How we work",
    items: [
      { label: "Our Method", href: `${ROUTES.howWeProve}#method` },
      { label: "Standards & Frameworks", href: `${ROUTES.howWeProve}#standards` },
      { label: "How We Measure Impact", href: `${ROUTES.howWeProve}#impact` },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: ROUTES.about },
      { label: "Proof / Evidence", href: ROUTES.howWeProve },
      { label: "Work", href: ROUTES.howWeProve }, // interim → dedicated /work pending
      { label: "Learn / Insights", href: "/learn" },
      // Net-new IA addition (human-approved): evergreen careers pipeline, footer-only.
      { label: "Careers", href: ROUTES.careers },
    ],
  },
  {
    title: "Get started",
    items: [
      { label: "Request a Proposal", href: ROUTES.start },
      { label: "ESG Readiness Assessment", href: "/learn/brsr-readiness" },
      { label: "Contact", href: ROUTES.start }, // interim → dedicated /contact pending
    ],
  },
];

const FOOTER_LEGAL = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
  // Attribution for CC-licensed editorial photography (Wikimedia Commons).
  { label: "Image credits", href: "/image-credits" },
];

const FOOTER_TAGLINE =
  "Turn your sustainability goals into measurable results.";

// Headings — engineered grotesk (brand @v0 §5.4 prototype stand-in).
// Exposed as a CSS variable that globals.css maps onto the type tokens.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

// Body — humanist sans.
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

// Site-wide default metadata. Per-page files override title/description/canonical
// via buildMetadata. metadataBase lets Next resolve any relative asset URLs.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  // No title template — seo-aeo-spec titles already carry the "| Teravora" suffix,
  // and each page sets an absolute title via buildMetadata.
  title: "Teravora | Practical ESG & BRSR Assurance Readiness, India",
  description:
    "India-based ESG advisory. Turn your sustainability goals into measurable results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${sourceSans.variable}`}
    >
      <body>
        {/* Site-wide structured data (emitted once — pages reference the @id). */}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <SiteNav />
        {children}
        <Footer
          columns={FOOTER_COLUMNS}
          legalLinks={FOOTER_LEGAL}
          brandTagline={FOOTER_TAGLINE}
        />
      </body>
    </html>
  );
}
