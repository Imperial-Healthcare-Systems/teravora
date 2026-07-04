import type { InputHTMLAttributes } from "react";
import styles from "./form.module.css";
import { FieldShell } from "./Field";

export type TextInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "name"
> & {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  helperText?: string;
  errorMessage?: string;
  errorLive?: "polite" | "assertive";
};

/** Single-line text input. Programmatic <label>; error via aria-describedby. */
export function TextInput({
  id,
  name,
  label,
  required,
  helperText,
  errorMessage,
  errorLive,
  className,
  ...rest
}: TextInputProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      required={required}
      helperText={helperText}
      errorMessage={errorMessage}
      errorLive={errorLive}
    >
      {({ describedBy, invalid }) => (
        <input
          id={id}
          name={name}
          className={[styles.control, className].filter(Boolean).join(" ")}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          aria-required={required || undefined}
          {...rest}
        />
      )}
    </FieldShell>
  );
}
