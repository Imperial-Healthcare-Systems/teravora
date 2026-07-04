import styles from "./SkipLink.module.css";

export type SkipLinkProps = {
  /** Target id of the main content region (default "main-content"). */
  targetId?: string;
  children?: React.ReactNode;
};

/** Skip-to-content link — must be FIRST focusable element in the DOM (DS §5). */
export function SkipLink({
  targetId = "main-content",
  children = "Skip to content",
}: SkipLinkProps) {
  return (
    <a href={`#${targetId}`} className={styles.skipLink}>
      {children}
    </a>
  );
}
