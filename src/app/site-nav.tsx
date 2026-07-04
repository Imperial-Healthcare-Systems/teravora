"use client";

import { usePathname } from "next/navigation";
import { Nav } from "@/components";
import { NAV_ITEMS } from "@/lib/site-data";

// V3: the dark cinematic archetypes open on a full-bleed hero, so the nav
// overlays them transparently and resolves to solid on scroll. Light workspaces
// (e.g. /start) and utility pages keep the default solid chrome.
const DARK_HERO_ROUTES = [
  "/",
  "/solutions",
  "/how-we-prove",
  "/about",
];

function isDarkHero(pathname: string): boolean {
  return DARK_HERO_ROUTES.some((r) =>
    r === "/" ? pathname === "/" : pathname.startsWith(r),
  );
}

/** Client wrapper: reads the pathname so Nav can mark the current route. */
export function SiteNav() {
  const pathname = usePathname();
  return (
    <Nav
      items={NAV_ITEMS}
      currentPath={pathname}
      variant={isDarkHero(pathname) ? "transparent" : "solid"}
    />
  );
}
