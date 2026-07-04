import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./form.module.css";
import { FieldError } from "./FieldError";

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "name" | "type"
> & {
  id: string;
  name: string;
  /** Label may include an inline link (e.g. the privacy policy). */
  label: ReactNode;
  required?: boolean;
  errorMessage?: string;
  errorLive?: "polite" | "assertive";
};

/** Real <input type=checkbox>, full-row ≥44px target. */
export function Checkbox({
  id,
  name,
  label,
  required,
  errorMessage,
  errorLive = "polite",
  ...rest
}: CheckboxProps) {
  const errorId = `${id}-error`;
  const invalid = Boolean(errorMessage);
  return (
    <div className={styles.field}>
      <label className={styles.option} htmlFor={id}>
        <input
          id={id}
          name={name}
          type="checkbox"
          className={styles.optionInput}
          aria-invalid={invalid || undefined}
          aria-describedby={invalid ? errorId : undefined}
          aria-required={required || undefined}
          {...rest}
        />
        <span className={styles.optionLabel}>
          {label}
          {required ? (
            <span className={styles.requiredHint}> (required)</span>
          ) : null}
        </span>
      </label>
      <FieldError id={errorId} message={errorMessage} live={errorLive} />
    </div>
  );
}
