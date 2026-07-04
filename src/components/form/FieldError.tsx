import styles from "./form.module.css";

export type FieldErrorProps = {
  id: string;
  message?: string;
  /** aria-live politeness — flows use "assertive" on submit, "polite" inline. */
  live?: "polite" | "assertive" | "off";
};

/**
 * Error text — meaning carried NON-chromatically: an error icon + an "Error:"
 * text prefix accompany the color (tokens.css status-red gap; WCAG 1.4.1).
 */
export function FieldError({ id, message, live = "polite" }: FieldErrorProps) {
  return (
    <p
      id={id}
      className={styles.error}
      role={live === "off" ? undefined : "alert"}
      aria-live={live === "off" ? undefined : live}
    >
      {message ? (
        <>
          <svg
            className={styles.errorIcon}
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM9 6h2v6H9V6Zm0 8h2v2H9v-2Z"
            />
          </svg>
          <span>
            <span className="trv-visually-hidden">Error: </span>
            {message}
          </span>
        </>
      ) : null}
    </p>
  );
}
