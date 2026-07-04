"use client";

import { useEffect } from "react";
import { init_start } from "../start.runtime";

/** Runs the ported 3-step proposal-flow runtime (step nav, per-step validation,
 *  live-building spec panel, lane derivation, confirm state) after mount. */
export function StartRuntime() {
  useEffect(() => {
    init_start();
  }, []);
  return null;
}
