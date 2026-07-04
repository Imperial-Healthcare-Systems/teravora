import styles from "./form.module.css";
import { FieldError } from "./FieldError";

export type RadioOption = { value: string; label: string };

export type RadioGroupProps = {
  name: string;
  legend: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  orientation?: "vertical" | "horizontal";
  helperText?: string;
  errorMessage?: string;
  errorLive?: "polite" | "assertive";
};

/**
 * Radio group as a native <fieldset>/<legend> with real <input type=radio>.
 * Native radios give arrow-key roving + single-selection for free; each option
 * is a full-row ≥44px target. Selected state carries a token border, not color alone.
 */
export function RadioGroup({
  name,
  legend,
  options,
  value,
  defaultValue,
  onChange,
  required = false,
  orientation = "vertical",
  helperText,
  errorMessage,
  errorLive = "polite",
}: RadioGroupProps) {
  const errorId = `${name}-error`;
  const helperId = `${name}-helper`;
  const invalid = Boolean(errorMessage);
  const describedBy =
    [helperText ? helperId : "", invalid ? errorId : ""]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <fieldset
      className={styles.field}
      aria-describedby={describedBy}
      aria-invalid={invalid || undefined}
    >
      <legend className={styles.legend}>
        {legend}
        {required ? (
          <span className={styles.requiredHint}> (required)</span>
        ) : null}
      </legend>
      {helperText ? (
        <p id={helperId} className={styles.helper}>
          {helperText}
        </p>
      ) : null}
      <div className={styles.optionGroup} data-orientation={orientation}>
        {options.map((o) => {
          const optionId = `${name}-${o.value}`;
          const checked =
            value !== undefined ? value === o.value : undefined;
          return (
            <label key={o.value} className={styles.option} htmlFor={optionId}>
              <input
                id={optionId}
                className={styles.optionInput}
                type="radio"
                name={name}
                value={o.value}
                checked={checked}
                defaultChecked={
                  value === undefined ? defaultValue === o.value : undefined
                }
                onChange={
                  onChange ? () => onChange(o.value) : undefined
                }
              />
              <span className={styles.optionLabel}>{o.label}</span>
            </label>
          );
        })}
      </div>
      <FieldError id={errorId} message={errorMessage} live={errorLive} />
    </fieldset>
  );
}
