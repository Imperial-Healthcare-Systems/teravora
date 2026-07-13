import styles from "./Footer.module.css";
import type { NavItem } from "../Nav/Nav";

export type FooterColumn = { title: string; items: { label: string; href: string }[] };

export type FooterProps = {
  columns?: FooterColumn[];
  /** Full nav taxonomy; if provided and columns omitted, derived from it. */
  footerItems?: NavItem[];
  legalLinks?: { label: string; href: string }[];
  brand?: string;
  brandHref?: string;
  /** Short positioning line shown under the brand lockup (finalized foot-brand copy). */
  brandTagline?: string;
  /** Brand mark (rendered on a compact white pad); falls back to the shared header mark. */
  brandMarkSrc?: string;
};

function fromNav(items: NavItem[]): FooterColumn[] {
  return items
    .filter((i) => i.children?.length)
    .map((i) => ({
      title: i.label,
      items: (i.children ?? []).map((c) => ({
        label: c.label,
        href: c.href ?? "#",
      })),
    }));
}

export function Footer({
  columns,
  footerItems,
  legalLinks = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Accessibility", href: "/accessibility" },
  ],
  brand = "Teravora",
  brandHref = "/",
  brandTagline,
  brandMarkSrc = "/brand/teravora-mark.png",
}: FooterProps) {
  const cols = columns ?? (footerItems ? fromNav(footerItems) : []);
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav className={styles.columns} aria-label="Footer">
          {/* Brand lockup — the colored mark carries a compact white backdrop
              pad (it would vanish bare on the navy); the wordmark sits directly
              on the footer ground. */}
          <div className={styles.brand}>
            <a
              className={styles.brandLink}
              href={brandHref}
              aria-label={`${brand} — home`}
            >
              <span className={styles.brandChip}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.brandMark}
                  src={brandMarkSrc}
                  alt=""
                  width={437}
                  height={471}
                  aria-hidden="true"
                />
                <span className={styles.brandWord}>{brand}</span>
              </span>
            </a>
            {brandTagline ? (
              <p className={styles.tagline}>{brandTagline}</p>
            ) : null}
          </div>

          {cols.map((col) => (
            <div key={col.title} className={styles.col}>
              <h2 className={styles.colTitle}>{col.title}</h2>
              <ul className={styles.list}>
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a className={styles.link} href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className={styles.legal}>
          <ul className={styles.legalLinks}>
            {legalLinks.map((l) => (
              <li key={l.label}>
                <a className={styles.link} href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <span className={styles.copy}>
            © {year} {brand}. Practical ESG. Measurable Impact.
          </span>
        </div>
      </div>
    </footer>
  );
}
