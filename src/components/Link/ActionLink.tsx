import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./ActionLink.module.css";

export type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  iconTrailing?: ReactNode;
  children: ReactNode;
};

/** Link / action — teal, always underlined (WCAG 1.4.1: never color-alone). */
export function ActionLink({
  href,
  iconTrailing,
  children,
  className,
  ...rest
}: ActionLinkProps) {
  return (
    <a
      href={href}
      className={[styles.link, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
      {iconTrailing ? <span aria-hidden="true">{iconTrailing}</span> : null}
    </a>
  );
}
