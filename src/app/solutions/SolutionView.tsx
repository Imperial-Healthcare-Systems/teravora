"use client";

import { useEffect } from "react";
import { init_solution } from "../solution.runtime";
import "../solution.vcomp.css";

/**
 * Shared visible shell for the solution routes — the approved V1 solution
 * archetype, ported as a dark-surface island. Each route supplies its own
 * body (per-solution content), metadata and Service/Breadcrumb structured data.
 * init_solution() is re-runnable: client-side navigation between two solution
 * routes remounts this component and must rebind reveals/particles to new DOM.
 */
export function SolutionView({ body }: { body: string }) {
  useEffect(() => {
    init_solution();
  }, [body]);
  return (
    <main
      id="main-content"
      className="pg-solution"
      data-surface="dark"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
