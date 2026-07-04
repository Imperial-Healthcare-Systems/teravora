import type { SelectHTMLAttributes } from "react";
import styles from "./form.module.css";
import { FieldShell } from "./Field";

export type SelectOption = { value: string; label: string };

export type SelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "id" | "name"
> & {
  id: string;
  name: string;
  label: string;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  errorMessage?: string;
  errorLive?: "polite" | "assertive";
};

/** Native <select> — real form control, custom caret via background tokens. */
export function Select({
  id,
  name,
  label,
  options,
  placeholder,
  required,
  helperText,
  errorMessage,
  errorLive,
  className,
  defaultValue,
  value,
  ...rest
}: SelectProps) {
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
        <select
          id={id}
          name={name}
          className={[styles.control, styles.select, className]
            .filter(Boolean)
            .join(" ")}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          aria-required={required || undefined}
          defaultValue={defaultValue}
          value={value}
          {...rest}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      )}
    </FieldShell>
  );
}
