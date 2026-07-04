import type { ReactNode } from "react";
import styles from "./Card.module.css";

export type CardVariant =
  | "service"
  | "case"
  | "resource"
  | "stat"
  | "persona";

export type CardProps = {
  variant?: CardVariant;
  /** Whole-card link target. If set, the card is a single <a> (no nested links). */
  href?: string;
  media?: { src: string; alt: string };
  eyebrow?: string;
  title?: string;
  titleAs?: "h2" | "h3" | "h4";
  body?: ReactNode;
  meta?: string;
  /** Rendered only when the card is NOT itself a link (avoids nested interactives). */
  footerCta?: { label: string; href: string };
  elevation?: "flat" | "raised";
  children?: ReactNode;
};

/**
 * Card — modular-grid unit (DS §6). A11y: whole-card-clickable uses ONE real link
 * carrying the accessible name; footerCta only renders when the card is a container
 * (not a link) — you pick one pattern, never a link inside a linked card.
 */
export function Card({
  variant = "service",
  href,
  media,
  eyebrow,
  title,
  titleAs = "h3",
  body,
  meta,
  footerCta,
  elevation = "flat",
  children,
}: CardProps) {
  const Title = titleAs;
  const cls = [styles.card, elevation === "raised" ? styles.raised : ""]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {media ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={styles.media} src={media.src} alt={media.alt} />
      ) : null}
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      {title ? <Title className={styles.title}>{title}</Title> : null}
      {body ? <div className={styles.body}>{body}</div> : null}
      {children}
      {meta ? <p className={styles.meta}>{meta}</p> : null}
    </>
  );

  if (href) {
    // Whole-card link — ONE interactive, no nested links/footerCta.
    return (
      <a className={cls} href={href} data-variant={variant}>
        {inner}
      </a>
    );
  }

  return (
    <article className={cls} data-variant={variant}>
      {inner}
      {footerCta ? (
        <a className={styles.footerCta} href={footerCta.href}>
          {footerCta.label}
        </a>
      ) : null}
    </article>
  );
}
