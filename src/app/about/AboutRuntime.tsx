"use client";

import { useEffect } from "react";
import { init_about } from "../about.runtime";

/** Runs the ported about runtime (hero particles, reveal observers, animated
 *  Teravue→Teravora lineage connector) after the server-rendered body mounts. */
export function AboutRuntime() {
  useEffect(() => {
    init_about();
  }, []);
  return null;
}
