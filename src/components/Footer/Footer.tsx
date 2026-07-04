import styles from "./Footer.module.css";
import type { NavItem } from "../Nav/Nav";

export type FooterColumn = { title: string; items: { label: string; href: string }[] };

export type FooterProps = {
  columns?: FooterColumn[];
  /** Full nav taxonomy; if provided and columns omitted, derived from it. */
  footerItems?: NavItem[];
  legalLinks?: { label: string; href: string }[];
  brand?: string;
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
}: FooterProps) {
  const cols = columns ?? (footerItems ? fromNav(footerItems) : []);
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav className={styles.columns} aria-label="Footer">
          {cols.map((col) => (
            <div key={col.title}>
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
          <span>
            © {year} {brand}. Practical ESG. Measurable Impact.
          </span>
          <ul className={styles.legalLinks}>
            {legalLinks.map((l) => (
              <li key={l.label}>
                <a className={styles.link} href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
