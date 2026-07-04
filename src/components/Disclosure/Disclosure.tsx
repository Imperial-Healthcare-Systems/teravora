import type { ReactNode } from "react";
import styles from "./Disclosure.module.css";

export type DisclosureItem = {
  id: string;
  summary: string;
  content: ReactNode;
};

export type AccordionProps = {
  items: DisclosureItem[];
  /** false groups items (native single-open via shared name). */
  allowMultiple?: boolean;
  defaultOpen?: string[] | string;
  /** Shared group name when single-open. */
  name?: string;
};

const PlusMarker = () => (
  <svg
    className={styles.marker}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M7 1h2v6h6v2H9v6H7V9H1V7h6V1Z"
    />
  </svg>
);

/**
 * Accordion — native <details>/<summary>. Content is SSR'd and present in the DOM
 * even when collapsed (SEO/AEO); collapse is visual, not content removal. This is
 * also the single source for FAQPage JSON-LD (DS §10/§12).
 */
export function Accordion({
  items,
  allowMultiple = true,
  defaultOpen,
  name = "trv-accordion",
}: AccordionProps) {
  const openSet = new Set(
    Array.isArray(defaultOpen) ? defaultOpen : defaultOpen ? [defaultOpen] : [],
  );
  return (
    <div className={styles.accordion}>
      {items.map((item) => (
        <details
          key={item.id}
          className={styles.item}
          name={allowMultiple ? undefined : name}
          open={openSet.has(item.id)}
        >
          <summary className={styles.summary}>
            <span>{item.summary}</span>
            <PlusMarker />
          </summary>
          <div className={styles.panel}>{item.content}</div>
        </details>
      ))}
    </div>
  );
}
