"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import styles from "./Nav.module.css";
import { Button } from "../Button/Button";
import { SkipLink } from "../SkipLink/SkipLink";

export type NavItem = {
  label: string;
  href?: string;
  kind: "trigger" | "service" | "page";
  children?: NavItem[];
};

export type NavProps = {
  items: NavItem[];
  currentPath?: string;
  variant?: "transparent" | "solid";
  brand?: string;
  brandHref?: string;
  cta?: { label: string; href: string };
  skipTargetId?: string;
};

const Caret = () => (
  <svg
    className={styles.caret}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    aria-hidden="true"
    focusable="false"
  >
    <path fill="currentColor" d="M6 8.5 1.5 4h9L6 8.5Z" />
  </svg>
);

const IconMenu = () => (
  <svg
    className={styles.toggleIcon}
    width="18"
    height="18"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M2 4h12M2 8h12M2 12h12"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const IconClose = () => (
  <svg
    className={styles.toggleIcon}
    width="18"
    height="18"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M3.5 3.5l9 9m0-9l-9 9"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export function Nav({
  items,
  currentPath,
  variant = "solid",
  brand = "Teravora",
  brandHref = "/",
  cta = { label: "Request a Proposal", href: "/start" },
  skipTargetId = "main-content",
}: NavProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  // Drives the top scroll-progress bar on every page via --trv-scroll, and — for
  // the transparent variant only — resolves the header to solid chrome once the
  // hero has scrolled past (~72vh, a hair before the hero bottom).
  useEffect(() => {
    const el = headerRef.current;
    const isTransparent = variant === "transparent";
    const onScroll = () => {
      if (isTransparent) {
        setScrolled(window.scrollY > window.innerHeight * 0.72);
      }
      if (el) {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
        el.style.setProperty("--trv-scroll", p.toFixed(4));
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  return (
    <>
      <SkipLink targetId={skipTargetId} />
      <header
        ref={headerRef}
        className={styles.header}
        data-variant={variant}
        data-scrolled={variant === "transparent" ? scrolled : undefined}
      >
        <div className={styles.bar}>
          <a
            className={styles.brand}
            href={brandHref}
            aria-label={`${brand} — home`}
          >
            {/* Small static brand mark in the header chrome — a plain <img> is
                intentional; next/image's lazy-load + aspect-ratio handling add no
                value for a ~32px above-the-fold logo. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.brandMark}
              src="/brand/teravora-mark.png"
              alt=""
              width={437}
              height={471}
              aria-hidden="true"
            />
            <span className={styles.brandWord}>{brand}</span>
          </a>

          <nav className={styles.desktopNav} aria-label="Primary">
            {items.map((item) => (
              <DesktopItem
                key={item.label}
                item={item}
                currentPath={currentPath}
                isOpen={openDropdown === item.label}
                onOpenChange={(open) =>
                  setOpenDropdown(open ? item.label : null)
                }
              />
            ))}
          </nav>

          <div className={styles.desktopActions}>
            <Button variant="primary" size="sm" as="a" href={cta.href}>
              {cta.label}
            </Button>
          </div>

          <button
            className={styles.menuToggle}
            type="button"
            aria-expanded={drawerOpen}
            aria-controls="trv-mobile-drawer"
            onClick={() => setDrawerOpen(true)}
          >
            <IconMenu />
            Menu
          </button>
        </div>
      </header>

      {drawerOpen ? (
        <MobileDrawer items={items} cta={cta} onClose={closeDrawer} />
      ) : null}
    </>
  );
}

function DesktopItem({
  item,
  currentPath,
  isOpen,
  onOpenChange,
}: {
  item: NavItem;
  currentPath?: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const panelId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) onOpenChange(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onOpenChange]);

  if (!item.children?.length) {
    return (
      <div className={styles.navItem}>
        <a
          className={styles.navLink}
          href={item.href ?? "#"}
          aria-current={currentPath === item.href ? "page" : undefined}
        >
          {item.label}
        </a>
      </div>
    );
  }

  return (
    <div className={styles.navItem} ref={wrapRef}>
      <button
        className={styles.navTrigger}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => onOpenChange(!isOpen)}
      >
        {item.label}
        <Caret />
      </button>
      {isOpen ? (
        <div className={styles.dropdown} id={panelId}>
          {/* Overline group header reuses the trigger's frozen IA label — the
              panel reads as a titled card, not a floating list. */}
          <p className={styles.dropdownHeader}>{item.label}</p>
          <ul className={styles.dropdownList}>
            {item.children.map((child) => (
              <li key={child.label}>
                <a className={styles.dropdownLink} href={child.href ?? "#"}>
                  {child.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function MobileDrawer({
  items,
  cta,
  onClose,
}: {
  items: NavItem[];
  cta: { label: string; href: string };
  onClose: () => void;
}) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Focus trap + Esc + focus return to the trigger (DS §5). `onClose` is a
  // stable useCallback from the parent, so the effect subscribes exactly once.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const drawer = drawerRef.current;
    const firstFocusable = drawer?.querySelector<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])',
    );
    firstFocusable?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !drawer) return;
      const focusable = drawer.querySelectorAll<HTMLElement>(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      opener?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className={styles.drawerOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={styles.drawer}
        id="trv-mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        ref={drawerRef}
      >
        <div className={styles.drawerHead}>
          <span className={styles.brandWord}>Menu</span>
          <button
            className={styles.menuToggle}
            type="button"
            aria-label="Close menu"
            onClick={onClose}
          >
            <IconClose />
          </button>
        </div>
        <nav aria-label="Mobile primary">
          <ul className={styles.drawerList}>
            {items.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a className={styles.drawerLink} href={item.href}>
                    {item.label}
                  </a>
                ) : (
                  <span className={styles.drawerGroupLabel}>{item.label}</span>
                )}
                {item.children?.length ? (
                  <ul className={styles.drawerList}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          className={styles.drawerLink}
                          href={child.href ?? "#"}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <Button variant="primary" as="a" href={cta.href} fullWidth>
          {cta.label}
        </Button>
      </div>
    </div>
  );
}
