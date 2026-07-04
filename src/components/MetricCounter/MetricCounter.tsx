"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./MetricCounter.module.css";

/**
 * `source` is a REQUIRED prop. Only 'substantiated' may animate; any other value
 * renders the static SSR final value and REFUSES to animate. There is NO override.
 */
export type MetricSource =
  | "substantiated"
  | "unverified"
  | "projected"
  | "illustrative";

export type MetricFormat = {
  locale?: string;
  unit?: string;
  prefix?: "₹" | "%" | "tCO2e";
  decimals?: number;
};

export type MetricCounterProps = {
  /** Real number. Omit for an empty/gated slot -> renders the qualitative fallback. */
  value?: number;
  /** REQUIRED. Gate for animation; see MetricSource. */
  source: MetricSource;
  label: string;
  format?: MetricFormat;
  /** Hint only — overridden to false unless source === 'substantiated'. */
  animate?: boolean;
  /** Attributed-parent figure (e.g. "Delivered by our parent, Teravue"). */
  attribution?: string;
  /** Renders when value is absent (empty slot). Never a fabricated number. */
  fallback?: ReactNode;
  /** Show the thin ascent bar under the numeral (gold peak). */
  showBar?: boolean;
};

function formatValue(value: number, fmt?: MetricFormat): string {
  const { locale = "en-IN", unit, prefix, decimals = 0 } = fmt ?? {};
  const n = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
  if (prefix === "₹") return `₹${n}`;
  if (prefix === "%") return `${n}%`;
  if (prefix === "tCO2e") return `${n} tCO₂e`;
  if (unit) return `${n} ${unit}`;
  return n;
}

/** Reads a duration token (e.g. "400ms"/"0.4s") from the cascade -> ms. 0 under reduced-motion. */
function readDurationMs(): number {
  if (typeof window === "undefined") return 0;
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--trv-sys-duration-slow")
    .trim();
  if (!raw) return 0;
  if (raw.endsWith("ms")) return parseFloat(raw);
  if (raw.endsWith("s")) return parseFloat(raw) * 1000;
  return parseFloat(raw) || 0;
}

export function MetricCounter({
  value,
  source,
  label,
  format,
  animate = true,
  attribution,
  fallback,
  showBar = false,
}: MetricCounterProps) {
  // Empty/gated slot: qualitative fallback, never a fake number. Styled as a
  // deliberate module (bordered surface + outlined "pending ascent" bar) so it
  // reads as measured-by-design, not a missing/broken figure. No copy authored
  // here — the words come from `fallback`/`label` props.
  if (value == null) {
    return (
      <div className={`${styles.counter} ${styles.emptyState}`}>
        <div className={styles.fallback}>{fallback ?? label}</div>
        {fallback ? <p className={styles.label}>{label}</p> : null}
        <div className={styles.barOutline} aria-hidden="true" />
        {attribution ? (
          <p className={styles.attribution}>{attribution}</p>
        ) : null}
      </div>
    );
  }

  const final = formatValue(value, format);
  const canAnimate = source === "substantiated" && animate;

  return (
    <MetricRender
      value={value}
      finalText={final}
      label={label}
      format={format}
      canAnimate={canAnimate}
      attribution={attribution}
      showBar={showBar}
    />
  );
}

function MetricRender({
  value,
  finalText,
  label,
  format,
  canAnimate,
  attribution,
  showBar,
}: {
  value: number;
  finalText: string;
  label: string;
  format?: MetricFormat;
  canAnimate: boolean;
  attribution?: string;
  showBar: boolean;
}) {
  // SSR + default state: the final real value as text + full bar (the fallback
  // comes for free — this is exactly the reduced-motion / no-JS end-state).
  const [display, setDisplay] = useState<string>(finalText);
  const [barWidth, setBarWidth] = useState<string>("100%");
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!canAnimate || hasRun.current) return;
    const durationMs = readDurationMs(); // 0 under prefers-reduced-motion
    const node = ref.current;
    if (durationMs <= 0 || !node || typeof IntersectionObserver === "undefined")
      return; // leave the final SSR end-state in place — no animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasRun.current) return;
          hasRun.current = true;
          observer.disconnect();
          setDisplay(formatValue(0, format));
          setBarWidth("0%");
          const start = performance.now();
          let barRaised = false;
          const tick = (now: number) => {
            if (!barRaised) {
              setBarWidth("100%"); // next-frame set => CSS transition plays
              barRaised = true;
            }
            const t = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(formatValue(value * eased, format));
            if (t < 1) requestAnimationFrame(tick);
            else setDisplay(finalText);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [canAnimate, value, finalText, format]);

  return (
    <div className={styles.counter} ref={ref}>
      {/* Animated numerals are aria-hidden; SR reads the static final value only. */}
      <span className={styles.value} aria-hidden="true">
        {display}
      </span>
      <span className="trv-visually-hidden">
        {finalText} {label}
      </span>
      <span className={styles.label} aria-hidden="true">
        {label}
      </span>
      {showBar ? (
        <div className={styles.bar} aria-hidden="true">
          <div className={styles.barFill} style={{ width: barWidth }} />
        </div>
      ) : null}
      {attribution ? (
        <p className={styles.attribution}>{attribution}</p>
      ) : null}
    </div>
  );
}
