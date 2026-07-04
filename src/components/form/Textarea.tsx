import type { TextareaHTMLAttributes } from "react";
import styles from "./form.module.css";
import { FieldShell } from "./Field";

export type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
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

/** Multi-line text. Soft char guidance handled by the consumer (never hard-blocked). */
export function Textarea({
  id,
  name,
  label,
  required,
  helperText,
  errorMessage,
  errorLive,
  className,
  ...rest
}: TextareaProps) {
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
        <textarea
          id={id}
          name={name}
          className={[styles.control, styles.textarea, className]
            .filter(Boolean)
            .join(" ")}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          aria-required={required || undefined}
          {...rest}
        />
      )}
    </FieldShell>
  );
}
