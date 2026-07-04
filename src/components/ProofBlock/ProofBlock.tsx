import type { ReactNode } from "react";
import styles from "./ProofBlock.module.css";

export type ProofItemKind = "framework" | "credential" | "method" | "lineage";

export type ProofItem = {
  label: string;
  icon?: ReactNode;
  kind: ProofItemKind;
  /** REQUIRED when kind='lineage' — parent attribution, rendered as visible text. */
  attribution?: string;
  /** Gates any counter feed; unverified => qualitative only. */
  verified: boolean;
  tooltip?: string;
};

export type ProofBlockProps = {
  heading?: string;
  items: ProofItem[];
  layout: "grid" | "strip" | "callout";
  showVerifiedOnly?: boolean;
};

const CheckIcon = () => (
  <svg
    className={styles.verifiedTick}
    width="14"
    height="14"
    viewBox="0 0 14 14"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M5.2 10.6 1.6 7l1.1-1.1 2.5 2.5 5.1-5.1L11.4 4.4 5.2 10.6Z"
    />
  </svg>
);

/**
 * Proof / Credential block — the E1-safe credibility engine (DS §7). Renders
 * methodology transparency + frameworks + attributed-parent lineage. NO Teravora
 * metric renders here; `lineage` items always show their attribution as visible text.
 */
export function ProofBlock({
  heading,
  items,
  layout,
  showVerifiedOnly = false,
}: ProofBlockProps) {
  const visible = showVerifiedOnly ? items.filter((i) => i.verified) : items;

  return (
    <section className={styles.block}>
      {heading ? <h2 className={styles.heading}>{heading}</h2> : null}

      {layout === "grid" ? (
        <ul className={styles.grid}>
          {visible.map((item) => (
            <li
              key={item.label}
              className={styles.gridItem}
              title={item.tooltip}
            >
              {item.icon ? <span aria-hidden="true">{item.icon}</span> : null}
              <span className={styles.itemLabel}>{item.label}</span>
              {item.verified ? <CheckIcon /> : null}
            </li>
          ))}
        </ul>
      ) : null}

      {layout === "strip" ? (
        <ul className={styles.strip}>
          {visible.map((item) => (
            <li key={item.label} className={styles.stripItem}>
              {item.icon ? <span aria-hidden="true">{item.icon}</span> : null}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {layout === "callout" ? (
        <div>
          {visible.map((item) => (
            <div
              key={item.label}
              className={
                item.kind === "lineage" ? styles.lineage : styles.callout
              }
            >
              <p className={styles.itemLabel}>{item.label}</p>
              {item.kind === "lineage" && item.attribution ? (
                <cite className={styles.attribution}>{item.attribution}</cite>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
