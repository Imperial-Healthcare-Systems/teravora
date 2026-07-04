import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import "./tokens.css";
import "./globals.css";
import { Footer, JsonLd } from "@/components";
import { organizationSchema, websiteSchema, SITE_ORIGIN } from "@/lib/seo";
import { NAV_ITEMS } from "@/lib/site-data";
import { SiteNav } from "./site-nav";

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
    "India-based ESG advisory. Practical ESG. Measurable Impact.",
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
        <Footer footerItems={NAV_ITEMS} />
      </body>
    </html>
  );
}
