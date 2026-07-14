"use client";

import { useEffect } from "react";
import { init_careers } from "./careers.runtime";

/**
 * Mounts the Careers runtime (hero word stagger + scroll reveals) after the
 * server-rendered body is in the DOM. Renders nothing — init_careers() is
 * idempotent and self-guards the StrictMode double-invoke.
 */
export function CareersRuntime() {
  useEffect(() => {
    init_careers();
  }, []);
  return null;
}
