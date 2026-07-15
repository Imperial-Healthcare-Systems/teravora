"use client";

import {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  type ReactNode,
} from "react";
import styles from "./ProposalForm.module.css";
import { Button } from "../Button/Button";
import { ActionLink } from "../Link/ActionLink";
import { RadioGroup } from "../form/RadioGroup";
import { TextInput } from "../form/TextInput";
import { Textarea } from "../form/Textarea";
import { Select } from "../form/Select";
import { Checkbox } from "../form/Checkbox";
import {
  BAND_OPTIONS,
  CONTEXT_NOTE_SOFT_MAX,
  LANE_CONFIRMATION,
  ROUTE_OUT_TRIGGER,
  STEP_ORDER,
  STEP_TITLES,
  TIMELINE_OPTIONS,
  TRIGGER_OPTIONS,
  buildMailto,
  deriveQualification,
  validateStep,
  type FieldErrors,
  type ProposalValues,
  type StepId,
} from "./proposalConfig";

export type ProposalResult = { ok: boolean };

export type ProposalFormProps = {
  initialValues?: ProposalValues;
  onStepChange?: (from: string, to: string) => void;
  onSubmit?: (values: ProposalValues) => Promise<ProposalResult>;
  /** sessionStorage key — form state survives reload/back-forward. */
  persistKey?: string;
  surface?: "modal" | "page";
  onRouteToAssessment?: () => void;
  showProgress?: boolean;
  mailtoFallback?: { to: string };
  privacyHref?: string;
};

type RenderStep = StepId | "submitting" | "confirmed" | "submitError";

type State = {
  step: RenderStep;
  values: ProposalValues;
  errors: FieldErrors;
  showSummary: boolean;
};

type Action =
  | { type: "hydrate"; values: ProposalValues }
  | { type: "setField"; name: keyof ProposalValues; value: string | boolean }
  | { type: "goto"; step: RenderStep }
  | { type: "errors"; errors: FieldErrors }
  | { type: "submitStart" }
  | { type: "submitSuccess" }
  | { type: "submitError" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "hydrate":
      return { ...state, values: { ...state.values, ...action.values } };
    case "setField": {
      const errors = { ...state.errors };
      delete errors[action.name];
      return {
        ...state,
        values: { ...state.values, [action.name]: action.value },
        errors,
      };
    }
    case "goto":
      return { ...state, step: action.step, errors: {}, showSummary: false };
    case "errors":
      return { ...state, errors: action.errors, showSummary: true };
    case "submitStart":
      return { ...state, step: "submitting" };
    case "submitSuccess":
      return { ...state, step: "confirmed" };
    case "submitError":
      return { ...state, step: "submitError" };
    default:
      return state;
  }
}

const isStepId = (s: RenderStep): s is StepId =>
  (STEP_ORDER as string[]).includes(s);

export function ProposalForm({
  initialValues,
  onStepChange,
  onSubmit,
  persistKey = "trv-proposal",
  surface = "page",
  onRouteToAssessment,
  showProgress = true,
  mailtoFallback,
  privacyHref = "/privacy",
}: ProposalFormProps) {
  const [state, dispatch] = useReducer(reducer, {
    step: "step1_trigger",
    values: initialValues ?? {},
    errors: {},
    showSummary: false,
  });

  const legendRef = useRef<HTMLLegendElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const hydratedRef = useRef(false);

  // --- sessionStorage persistence: form state is the single source of truth. ---
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.sessionStorage.getItem(persistKey);
      if (raw) dispatch({ type: "hydrate", values: JSON.parse(raw) });
    } catch {
      /* ignore malformed persisted state */
    }
    hydratedRef.current = true;
  }, [persistKey]);

  useEffect(() => {
    if (typeof window === "undefined" || !hydratedRef.current) return;
    try {
      window.sessionStorage.setItem(persistKey, JSON.stringify(state.values));
    } catch {
      /* storage unavailable — flow still works, just not persisted */
    }
  }, [state.values, persistKey]);

  // --- Focus management: on step advance focus the step legend; on error the summary. ---
  useEffect(() => {
    if (state.showSummary) {
      summaryRef.current?.focus();
    } else if (isStepId(state.step)) {
      legendRef.current?.focus();
    }
  }, [state.step, state.showSummary]);

  const setField = useCallback(
    (name: keyof ProposalValues, value: string | boolean) =>
      dispatch({ type: "setField", name, value }),
    [],
  );

  const goto = useCallback(
    (to: RenderStep) => {
      onStepChange?.(state.step, to);
      dispatch({ type: "goto", step: to });
    },
    [onStepChange, state.step],
  );

  const handleNext = useCallback(() => {
    if (!isStepId(state.step)) return;
    const errors = validateStep(state.step, state.values);
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "errors", errors });
      return;
    }
    // Step 1 "Not sure yet…" routes OUT to the S3 assessment on-ramp.
    if (
      state.step === "step1_trigger" &&
      state.values.trigger === ROUTE_OUT_TRIGGER
    ) {
      onRouteToAssessment?.();
      return;
    }
    const idx = STEP_ORDER.indexOf(state.step);
    if (idx < STEP_ORDER.length - 1) goto(STEP_ORDER[idx + 1]);
  }, [goto, onRouteToAssessment, state.step, state.values]);

  const handleBack = useCallback(() => {
    if (!isStepId(state.step)) return;
    const idx = STEP_ORDER.indexOf(state.step);
    if (idx > 0) goto(STEP_ORDER[idx - 1]); // back is ungated, preserves state
  }, [goto, state.step]);

  const handleSubmit = useCallback(async () => {
    const errors = validateStep("step3_contact", state.values);
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "errors", errors });
      return;
    }
    dispatch({ type: "submitStart" });
    try {
      const result = onSubmit
        ? await onSubmit(state.values)
        : { ok: true };
      dispatch({ type: result.ok ? "submitSuccess" : "submitError" });
    } catch {
      dispatch({ type: "submitError" });
    }
  }, [onSubmit, state.values]);

  const stepIndex = isStepId(state.step) ? STEP_ORDER.indexOf(state.step) : -1;
  const busy = state.step === "submitting";

  return (
    <div className={styles.root}>
      {/* Live region announces step changes (polite). */}
      <p className="trv-visually-hidden" aria-live="polite">
        {isStepId(state.step)
          ? `Step ${stepIndex + 1} of ${STEP_ORDER.length}: ${STEP_TITLES[state.step]}`
          : ""}
      </p>

      {showProgress && isStepId(state.step) ? (
        <Stepper current={stepIndex} />
      ) : null}

      {state.showSummary && Object.keys(state.errors).length > 0 ? (
        <ErrorSummary
          ref={summaryRef}
          errors={state.errors}
          step={isStepId(state.step) ? state.step : "step1_trigger"}
        />
      ) : null}

      {state.step === "step1_trigger" ? (
        <fieldset className={styles.step}>
          <legend className={styles.legend} tabIndex={-1} ref={legendRef}>
            {STEP_TITLES.step1_trigger}
          </legend>
          <p className={styles.intro}>
            Two quick taps. This routes you to the right specialist.
          </p>
          <RadioGroup
            name="trigger"
            legend="What's prompting this?"
            options={TRIGGER_OPTIONS}
            value={state.values.trigger}
            onChange={(v) => setField("trigger", v)}
            required
            errorMessage={state.errors.trigger}
          />
          <RadioGroup
            name="listing_band"
            legend="Which best describes you?"
            options={BAND_OPTIONS}
            value={state.values.listing_band}
            onChange={(v) => setField("listing_band", v)}
            required
            errorMessage={state.errors.listing_band}
          />
          <div className={styles.actions}>
            <span />
            <Button variant="primary" onClick={handleNext}>
              Continue
            </Button>
          </div>
        </fieldset>
      ) : null}

      {state.step === "step2_context" ? (
        <fieldset className={styles.step}>
          <legend className={styles.legend} tabIndex={-1} ref={legendRef}>
            {STEP_TITLES.step2_context}
          </legend>
          <p className={styles.intro}>
            One required field. The rest help us tailor the reply — skip
            anything you&rsquo;d rather not share.
          </p>
          <TextInput
            id="company"
            name="company"
            label="Company"
            required
            autoComplete="organization"
            value={state.values.company ?? ""}
            onChange={(e) => setField("company", e.target.value)}
            errorMessage={state.errors.company}
          />
          <TextInput
            id="sector"
            name="sector"
            label="Sector"
            value={state.values.sector ?? ""}
            onChange={(e) => setField("sector", e.target.value)}
          />
          <Select
            id="timeline"
            name="timeline"
            label="Timeline"
            placeholder="Select a timeline"
            options={TIMELINE_OPTIONS}
            value={state.values.timeline ?? ""}
            onChange={(e) => setField("timeline", e.target.value)}
          />
          <Textarea
            id="context_note"
            name="context_note"
            label="Anything else we should know?"
            rows={3}
            maxLength={CONTEXT_NOTE_SOFT_MAX}
            helperText={`Optional — up to ${CONTEXT_NOTE_SOFT_MAX} characters.`}
            value={state.values.context_note ?? ""}
            onChange={(e) => setField("context_note", e.target.value)}
          />
          <div className={styles.actions}>
            <Button variant="tertiary" onClick={handleBack}>
              Back
            </Button>
            <Button variant="primary" onClick={handleNext}>
              Continue
            </Button>
          </div>
        </fieldset>
      ) : null}

      {state.step === "step3_contact" ? (
        <fieldset className={styles.step}>
          <legend className={styles.legend} tabIndex={-1} ref={legendRef}>
            {STEP_TITLES.step3_contact}
          </legend>
          <p className={styles.intro}>
            Last step. A specialist replies within two business days.
          </p>
          <TextInput
            id="name"
            name="name"
            label="Name"
            required
            autoComplete="name"
            value={state.values.name ?? ""}
            onChange={(e) => setField("name", e.target.value)}
            errorMessage={state.errors.name}
          />
          <TextInput
            id="work_email"
            name="work_email"
            label="Work email"
            type="email"
            required
            autoComplete="email"
            value={state.values.work_email ?? ""}
            onChange={(e) => setField("work_email", e.target.value)}
            errorMessage={state.errors.work_email}
            errorLive="assertive"
          />
          <TextInput
            id="phone"
            name="phone"
            label="Phone"
            type="tel"
            autoComplete="tel"
            value={state.values.phone ?? ""}
            onChange={(e) => setField("phone", e.target.value)}
          />
          <TextInput
            id="role"
            name="role"
            label="Role"
            autoComplete="organization-title"
            value={state.values.role ?? ""}
            onChange={(e) => setField("role", e.target.value)}
          />
          <Checkbox
            id="consent"
            name="consent"
            required
            checked={Boolean(state.values.consent)}
            onChange={(e) => setField("consent", e.target.checked)}
            errorMessage={state.errors.consent}
            label={
              <>
                I agree to be contacted about my request. See our{" "}
                <a href={privacyHref}>Privacy Policy</a>.
              </>
            }
          />
          <div className={styles.actions}>
            <Button variant="tertiary" onClick={handleBack}>
              Back
            </Button>
            <Button
              variant="primary"
              onClick={handleSubmit}
              loading={busy}
              aria-disabled={busy || undefined}
            >
              Request a Proposal
            </Button>
          </div>
        </fieldset>
      ) : null}

      {state.step === "submitting" ? (
        <p className={styles.intro} aria-live="polite">
          Sending your request…
        </p>
      ) : null}

      {state.step === "confirmed" ? (
        <Confirmation values={state.values} surface={surface} />
      ) : null}

      {state.step === "submitError" ? (
        <div className={styles.submitError} role="alert">
          <h3>Something went wrong on our end.</h3>
          <p className={styles.reassurance}>
            Your details are saved — try again, or email us directly and we
            will pick it up.
          </p>
          <div className={styles.actions}>
            <Button variant="secondary" as="a" href={buildMailto(state.values, mailtoFallback?.to)}>
              Email us instead
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Try again
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

// --- Progress stepper: labeled <nav>, text + state, aria-current="step". ---
function Stepper({ current }: { current: number }) {
  return (
    <nav className={styles.stepper} aria-label="Proposal request progress">
      <p className={styles.stepCount}>
        Step {current + 1} of {STEP_ORDER.length}
      </p>
      <ol className={styles.stepList}>
        {STEP_ORDER.map((id, i) => {
          const stateName =
            i === current ? "active" : i < current ? "complete" : "upcoming";
          return (
            <li
              key={id}
              className={styles.stepItem}
              data-state={stateName}
              aria-current={i === current ? "step" : undefined}
            >
              <span className={styles.stepDot} aria-hidden="true">
                {i < current ? "✓" : i + 1}
              </span>
              <span>{STEP_TITLES[id]}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// --- Error summary anchored at the top of the step, with in-page links. ---
const ErrorSummary = function ErrorSummary({
  ref,
  errors,
  step,
}: {
  ref: React.Ref<HTMLDivElement>;
  errors: FieldErrors;
  step: StepId;
}) {
  const entries = Object.entries(errors) as [keyof FieldErrors, string][];
  return (
    <div
      className={styles.errorSummary}
      role="alert"
      tabIndex={-1}
      ref={ref}
      data-step={step}
    >
      <h3>Please fix the following before you continue</h3>
      <ul>
        {entries.map(([field, message]) => (
          <li key={String(field)}>
            <a href={`#${String(field)}`}>{message}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Confirmation: async-specialist contract + lane-tailored reassurance. ---
function Confirmation({
  values,
  surface,
}: {
  values: ProposalValues;
  surface: "modal" | "page";
}): ReactNode {
  const { lane, urgency } = deriveQualification(values);
  const { reassurance } = LANE_CONFIRMATION[lane];
  return (
    <div className={styles.confirmation} role="status" data-surface={surface}>
      <h2>Request received — here&rsquo;s what happens next.</h2>
      <p className={styles.reassurance}>
        A specialist reviews your context and replies within{" "}
        <strong>two business days</strong> with (1) a first read on what your
        band actually requires and (2) a proposed scope for a short call — not a
        quote yet. No number we can&rsquo;t stand behind, and no obligation on
        your side.
      </p>
      <p className={styles.reassurance}>{reassurance}</p>
      {urgency === "high" ? (
        <p className={styles.intro}>
          Prefer to talk sooner? You can pick a time once we reply — a call is
          never required.
        </p>
      ) : null}
      <ActionLink href="/solutions">
        While you wait, browse the solutions to see the shape of the work →
      </ActionLink>
    </div>
  );
}
