"use client";

import { useEffect } from "react";
import { SOLUTION_BODY } from "../solution.content";
import { init_solution } from "../solution.runtime";
import "../solution.vcomp.css";

/**
 * Shared visible body for the three solution routes (BRSR/assurance, carbon,
 * ESDD) — the approved V1 solution archetype, ported as a dark-surface island.
 * Per the V1 plan this single comp is reused across the solution skeleton; each
 * route supplies its own metadata + Service/Breadcrumb structured data.
 */
export function SolutionView() {
  useEffect(() => {
    init_solution();
  }, []);
  return (
    <main
      id="main-content"
      className="pg-solution"
      data-surface="dark"
      dangerouslySetInnerHTML={{ __html: SOLUTION_BODY }}
    />
  );
}
