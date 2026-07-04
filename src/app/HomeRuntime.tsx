"use client";

import { useEffect } from "react";
import { initHome } from "./home.runtime";

/**
 * Mounts the ported home-comp runtime (canvas particles, method engine, BRSR
 * ring, proof ledger, configurator) after the server-rendered body is in the
 * DOM. Renders nothing — it only drives the injected markup imperatively, the
 * same vanilla JS the approved comp shipped. initHome() self-guards against the
 * StrictMode double-invoke, so no cleanup is required for the idempotent init.
 */
export function HomeRuntime() {
  useEffect(() => {
    initHome();
  }, []);
  return null;
}
