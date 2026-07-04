import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import styles from "./Button.module.css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "destructive";
export type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  iconLeading?: ReactNode;
  iconTrailing?: ReactNode;
  iconOnly?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
};

type ButtonAsButton = CommonProps & {
  as?: "button";
  href?: never;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

type ButtonAsLink = CommonProps & {
  as: "a";
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children">;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function classes(
  variant: ButtonVariant,
  size: ButtonSize,
  fullWidth: boolean,
  iconOnly: boolean,
  className?: string,
): string {
  return [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    iconOnly ? styles.iconOnly : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

/**
 * Button / CTA — the site action vocabulary (DS §2).
 * Semantics: navigation => <a href>; action => <button>. Never a clickable div.
 * `loading` sets aria-busy and PRESERVES the accessible name (no name loss).
 * `iconOnly` REQUIRES aria-label. Focus ring is token-driven and always present.
 */
function Inner({
  loading,
  iconLeading,
  iconTrailing,
  iconOnly,
  children,
}: Pick<
  CommonProps,
  "loading" | "iconLeading" | "iconTrailing" | "iconOnly" | "children"
>) {
  return (
    <>
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : null}
      {!loading && iconLeading ? (
        <span aria-hidden="true">{iconLeading}</span>
      ) : null}
      {iconOnly ? (
        <span className="trv-visually-hidden">{children}</span>
      ) : (
        <span>{children}</span>
      )}
      {!loading && iconTrailing ? (
        <span aria-hidden="true">{iconTrailing}</span>
      ) : null}
    </>
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = "secondary",
    size = "md",
    loading = false,
    iconLeading,
    iconTrailing,
    iconOnly = false,
    fullWidth = false,
    children,
  } = props;
  const className = (props as { className?: string }).className;
  const cls = classes(variant, size, fullWidth, iconOnly, className);
  const inner = (
    <Inner
      loading={loading}
      iconLeading={iconLeading}
      iconTrailing={iconTrailing}
      iconOnly={iconOnly}
    >
      {children}
    </Inner>
  );

  if (props.as === "a") {
    const {
      as: _as,
      variant: _v,
      size: _s,
      loading: _l,
      iconLeading: _il,
      iconTrailing: _it,
      iconOnly: _io,
      fullWidth: _fw,
      children: _c,
      className: _cn,
      ...anchorRest
    } = props;
    void [_as, _v, _s, _l, _il, _it, _io, _fw, _c, _cn];
    return (
      <a className={cls} aria-busy={loading || undefined} {...anchorRest}>
        {inner}
      </a>
    );
  }

  const {
    as: _as,
    variant: _v,
    size: _s,
    loading: _l,
    iconLeading: _il,
    iconTrailing: _it,
    iconOnly: _io,
    fullWidth: _fw,
    children: _c,
    className: _cn,
    type = "button",
    ...buttonRest
  } = props;
  void [_as, _v, _s, _l, _il, _it, _io, _fw, _c, _cn];

  return (
    <button
      className={cls}
      type={type}
      aria-busy={loading || undefined}
      {...buttonRest}
    >
      {inner}
    </button>
  );
}
