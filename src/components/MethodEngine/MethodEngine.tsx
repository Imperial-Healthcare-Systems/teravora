"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import styles from "./MethodEngine.module.css";

export type MethodStage = {
  /** Short verb name — Assess, Comply, Improve, Prove. */
  name: string;
  /** One-line summary of the stage (SSR-readable). */
  body: string;
  /** "Data trace" line — how the auditable pipeline carries data through this stage. */
  trace: string;
};

export type MethodEngineProps = {
  stages: MethodStage[];
  /** Accessible label for the selector band. */
  ariaLabel?: string;
};

/**
 * Interactive Method Engine (AUDIT §2) — turns the static 4-step row into an
 * active data pipeline. A persistent selector band (ARIA tablist, manual
 * activation) drives an active panel that fades/shifts in with the premium ease.
 *
 * A11y / no-JS / reduced-motion posture (mirrors Scrollytelling):
 *  - Every stage's body AND trace are rendered for the ACTIVE panel; the band
 *    exposes all four names at all times, so no information is motion-gated.
 *  - Manual-activation tablist: ← → Home End roving, Enter/Space activate.
 *  - Motion (panel shift, progress fill) is re-pointed to 0ms by the global
 *    reduced-motion switch in tokens.css — the end state is the default render.
 */
export function MethodEngine({
  stages,
  ariaLabel = "The Teravora method — four steps",
}: MethodEngineProps) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % stages.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + stages.length) % stages.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = stages.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const pct = stages.length > 1 ? (active / (stages.length - 1)) * 100 : 0;

  return (
    <div className={styles.engine}>
      {/* Selector band — the persistent pipeline. */}
      <div
        className={styles.band}
        role="tablist"
        aria-label={ariaLabel}
        aria-orientation="horizontal"
      >
        {/* Progress line threading the active stage through the pipeline. */}
        <div className={styles.track} aria-hidden="true">
          <div className={styles.fill} style={{ width: `${pct}%` }} />
        </div>
        {stages.map((s, i) => {
          const selected = i === active;
          return (
            <button
              key={s.name}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              className={styles.stage}
              data-selected={selected}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <span className={`trv-mono-label ${styles.stageNum}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.stageName}>{s.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active stage panel — fade-and-shift on change. One panel is visible;
          the others stay in the a11y tree, hidden, so tab semantics hold. */}
      {stages.map((s, i) => (
        <div
          key={s.name}
          role="tabpanel"
          id={`${baseId}-panel-${i}`}
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={i !== active}
          className={styles.panel}
        >
          <p className={styles.panelBody}>{s.body}</p>
          <p className={styles.trace}>
            <span className={`trv-mono-label ${styles.traceKey}`}>Data trace</span>
            <span className={styles.traceValue}>{s.trace}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
