"use client";

import { useEffect } from "react";
import { init_learn } from "./learn.runtime";

/**
 * Mounts the Learn runtime (scroll reveals, FAQ accordion, hero particle field)
 * after the server-rendered body is in the DOM. Renders nothing — init_learn()
 * is idempotent and self-guards the StrictMode double-invoke.
 */
export function LearnRuntime() {
  useEffect(() => {
    init_learn();
  }, []);
  return null;
}
