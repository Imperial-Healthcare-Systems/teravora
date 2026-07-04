import type { MetadataRoute } from "next";
import { absUrl } from "@/lib/seo";

// Answer-engine crawlers are allowed; /start stays indexable (ia@v0 D-5).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Sprint 5 (V) throwaway comp routes are dev-only artifacts for the SPv
      // mockup gate — never index them while they exist. They are deleted before
      // any real build, so this rule becomes a no-op at ship.
      disallow: "/comps/",
    },
    sitemap: absUrl("/sitemap.xml"),
  };
}
