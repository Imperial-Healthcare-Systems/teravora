"use client";

import { useEffect } from "react";
import { init_how_we_prove } from "../how-we-prove.runtime";

/** Runs the ported how-we-prove runtime (method engine, T2 climb scrollytelling,
 *  standards wall, proof readycards) after the server-rendered body mounts. */
export function HowWeProveRuntime() {
  useEffect(() => {
    init_how_we_prove();
  }, []);
  return null;
}
