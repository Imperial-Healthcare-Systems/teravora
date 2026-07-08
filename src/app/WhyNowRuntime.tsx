"use client";

import { useEffect } from "react";
import { initWhyNow } from "./why-now.runtime";

/**
 * Mounts the Why Now runtime (hero word reveal + scroll reveals) after the
 * server-rendered body is in the DOM. Renders nothing — initWhyNow() is
 * idempotent and self-guards the StrictMode double-invoke.
 */
export function WhyNowRuntime() {
  useEffect(() => {
    initWhyNow();
  }, []);
  return null;
}
