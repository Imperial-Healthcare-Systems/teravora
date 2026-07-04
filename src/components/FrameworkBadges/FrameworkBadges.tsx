"use client";

import { useId, useState } from "react";
import styles from "./FrameworkBadges.module.css";

export type FrameworkDetail = {
  /** Framework short name — BRSR-Core, GRI, TCFD, IFRS S1/S2… */
  label: string;
  /** What the framework demands. */
  requirement: string;
  /** What Teravora produces against it. */
  output: string;
  /** The form the audit trail takes. */
  auditTrail: string;
};

export type FrameworkBadgesProps = {
  heading?: string;
  frameworks: FrameworkDetail[];
};

const CheckIcon = () => (
  <svg className={styles.tick} width="13" height="13" viewBox="0 0 14 14" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M5.2 10.6 1.6 7l1.1-1.1 2.5 2.5 5.1-5.1L11.4 4.4 5.2 10.6Z" />
  </svg>
);

/**
 * Framework Verification Badges (AUDIT §2) — the static framework list becomes
 * an interactive proof grid. Each badge is a disclosure button: hover/focus
 * lifts it (glow); click / Enter / Space expands its technical metadata
 * (requirement → Teravora output → audit-trail format).
 *
 * A11y: real <button> with aria-expanded controlling a region. Hover only adds
 * the visual lift — meaning is never hover-gated; the reveal is click/keyboard
 * driven and fully operable without a pointer. Motion re-points to 0ms under
 * the global reduced-motion switch.
 */
export function FrameworkBadges({ heading, frameworks }: FrameworkBadgesProps) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section className={styles.wrap}>
      {heading ? <h2 className={styles.heading}>{heading}</h2> : null}
      <ul className={styles.grid}>
        {frameworks.map((f, i) => {
          const expanded = open === i;
          const panelId = `${baseId}-fw-${i}`;
          return (
            <li key={f.label} className={styles.cell} data-expanded={expanded}>
              <button
                type="button"
                className={styles.badge}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : i)}
              >
                <span className={styles.badgeLabel}>{f.label}</span>
                <CheckIcon />
                <span className={styles.chevron} aria-hidden="true" />
              </button>
              <div id={panelId} className={styles.panel} hidden={!expanded}>
                <dl className={styles.meta}>
                  <div className={styles.row}>
                    <dt className="trv-mono-label">Requirement</dt>
                    <dd>{f.requirement}</dd>
                  </div>
                  <div className={styles.row}>
                    <dt className="trv-mono-label">Teravora output</dt>
                    <dd>{f.output}</dd>
                  </div>
                  <div className={styles.row}>
                    <dt className="trv-mono-label">Audit trail</dt>
                    <dd>{f.auditTrail}</dd>
                  </div>
                </dl>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
