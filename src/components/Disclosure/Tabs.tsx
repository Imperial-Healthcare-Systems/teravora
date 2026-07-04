"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import styles from "./Disclosure.module.css";

export type TabItem = { id: string; summary: string; content: ReactNode };

export type TabsProps = {
  items: TabItem[];
  defaultOpen?: string;
  orientation?: "horizontal" | "vertical";
  label?: string;
};

/**
 * Tabs — roving tabindex + Arrow-key nav + aria-selected (DS §10). All panels are
 * SSR'd in the DOM (inactive ones use `hidden`), so content is machine-readable.
 */
export function Tabs({
  items,
  defaultOpen,
  orientation = "horizontal",
  label = "Content tabs",
}: TabsProps) {
  const [active, setActive] = useState(defaultOpen ?? items[0]?.id);
  const baseId = useId();
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const nextKey = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
    const prevKey = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
    let nextIndex: number | null = null;
    if (e.key === nextKey) nextIndex = (index + 1) % items.length;
    else if (e.key === prevKey)
      nextIndex = (index - 1 + items.length) % items.length;
    else if (e.key === "Home") nextIndex = 0;
    else if (e.key === "End") nextIndex = items.length - 1;
    if (nextIndex === null) return;
    e.preventDefault();
    const id = items[nextIndex].id;
    setActive(id);
    tabRefs.current[id]?.focus();
  };

  return (
    <div>
      <div
        className={styles.tablist}
        role="tablist"
        aria-label={label}
        aria-orientation={orientation}
      >
        {items.map((item, i) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              className={styles.tab}
              role="tab"
              type="button"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              ref={(el) => {
                tabRefs.current[item.id] = el;
              }}
              onClick={() => setActive(item.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {item.summary}
            </button>
          );
        })}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className={styles.tabpanel}
          role="tabpanel"
          id={`${baseId}-panel-${item.id}`}
          aria-labelledby={`${baseId}-tab-${item.id}`}
          hidden={item.id !== active}
          tabIndex={0}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
