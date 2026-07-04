import type { ReactNode } from "react";
import styles from "./form.module.css";
import { FieldError } from "./FieldError";

export type FieldShellProps = {
  id: string;
  label: string;
  required?: boolean;
  helperText?: string;
  errorMessage?: string;
  errorLive?: "polite" | "assertive";
  /** render-prop receiving the wired ids for aria-describedby / aria-invalid */
  children: (a: {
    describedBy: string | undefined;
    invalid: boolean;
    helperId: string;
    errorId: string;
  }) => ReactNode;
};

/** Computes the label + helper + error scaffold and wires aria ids for a control. */
export function FieldShell({
  id,
  label,
  required = false,
  helperText,
  errorMessage,
  errorLive = "polite",
  children,
}: FieldShellProps) {
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;
  const invalid = Boolean(errorMessage);
  const describedBy =
    [helperText ? helperId : "", invalid ? errorId : ""]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {required ? (
          <span className={styles.requiredHint}> (required)</span>
        ) : null}
      </label>
      {helperText ? (
        <p id={helperId} className={styles.helper}>
          {helperText}
        </p>
      ) : null}
      {children({ describedBy, invalid, helperId, errorId })}
      <FieldError id={errorId} message={errorMessage} live={errorLive} />
    </div>
  );
}
