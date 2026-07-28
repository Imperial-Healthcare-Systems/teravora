import type { MetadataRoute } from "next";
import { absUrl } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";

// MVP canonicals (seo-aeo-spec §0.1). Origin is the confirmed production domain
// (SITE_ORIGIN) in lib/seo.ts.
// NOTE: this is an ALLOWLIST — only the routes below are emitted. The Sprint 5 (V)
// throwaway comp routes under /comps are therefore already excluded by construction
// (and are git-ignored + robots-disallowed + deleted before ship).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  ) => ({ url: absUrl(path), lastModified: now, changeFrequency, priority });

  return [
    entry(ROUTES.home, 1, "weekly"),
    entry(ROUTES.solutions, 0.7, "monthly"),
    entry(ROUTES.solutionA, 0.8, "monthly"),
    entry(ROUTES.solutionB, 0.8, "monthly"),
    entry(ROUTES.solutionD, 0.8, "monthly"),
    entry(ROUTES.solutionAdvisory, 0.8, "monthly"),
    entry(ROUTES.solutionTechnical, 0.8, "monthly"),
    entry(ROUTES.solutionFinance, 0.8, "monthly"),
    entry(ROUTES.solutionTraining, 0.8, "monthly"),
    entry(ROUTES.howWeProve, 0.8, "monthly"),
    entry(ROUTES.about, 0.6, "monthly"),
    entry(ROUTES.start, 0.9, "monthly"),
    entry(ROUTES.careers, 0.5, "monthly"),
  ];
}
