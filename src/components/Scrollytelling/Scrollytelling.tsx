"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./Scrollytelling.module.css";
import { DataViz, type DataVizProps } from "../DataViz/DataViz";

export type ScrollyStep = {
  title?: string;
  content: ReactNode;
  chart?: DataVizProps;
};

export type ScrollytellingProps = {
  heading?: string;
  /** ≤3 steps: baseline -> intervention -> measured result. */
  steps: ScrollyStep[];
  /** Attributed-parent caption (E1) e.g. "Delivered by our parent, Teravue, over 25 years". */
  attribution?: string;
  ariaLabel?: string;
};

/**
 * T2 Outcome Scrollytelling (DS §11) — the single budget-approved immersive surface.
 * Content is SSR'd and fully readable as a stacked layout (the reduced-motion / no-support
 * fallback IS the default render). Scroll-driven reveal enhances only where supported and
 * where the user has not requested reduced motion. Never traps scroll; charts follow §9.
 */
export function Scrollytelling({
  heading,
  steps,
  attribution,
  ariaLabel = "How measurable impact happens",
}: ScrollytellingProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Native CSS scroll-driven timelines handle the reveal — don't double up.
    const supportsTimeline =
      typeof CSS !== "undefined" &&
      CSS.supports?.("animation-timeline: view()");
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (supportsTimeline || reduced || typeof IntersectionObserver === "undefined")
      return;

    const stepEls = Array.from(
      root.querySelectorAll<HTMLElement>(`[data-scrolly-step]`),
    );
    stepEls.forEach((el) => el.setAttribute("data-reveal", "pending"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 },
    );
    stepEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} aria-label={ariaLabel} ref={rootRef}>
      <div className={styles.intro}>
        {heading ? <h2 className={styles.heading}>{heading}</h2> : null}
        {attribution ? (
          <p className={styles.attribution}>{attribution}</p>
        ) : null}
      </div>
      <div className={styles.steps}>
        {steps.slice(0, 3).map((step, i) => (
          <div key={i} className={styles.step} data-scrolly-step>
            <div className={styles.stepBody}>
              <span className={styles.stepIndex} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              {step.title ? (
                <h3 className={styles.stepTitle}>{step.title}</h3>
              ) : null}
              <div>{step.content}</div>
            </div>
            {step.chart ? <DataViz {...step.chart} /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
