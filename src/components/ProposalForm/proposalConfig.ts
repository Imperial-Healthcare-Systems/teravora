/* =============================================================================
 * Proposal flow — configuration + SERVER-SAFE derived qualification.
 * Pure module (no React, no DOM) so band×trigger qualification and the mailto
 * assembly run identically on the server (Next server action) and the client.
 * Field vocabulary & microcopy: content-baseline.md PAGE 7. E1: the derived
 * lane is NEVER surfaced as a user-facing score — only tailored reassurance.
 * ========================================================================== */

// PLACEHOLDER — TODO: confirm production domain/email before ship.
export const PROPOSAL_FALLBACK_EMAIL = "proposal@teravora.in";

export type StepId = "step1_trigger" | "step2_context" | "step3_contact";

export type FieldOption = { value: string; label: string };

// Step 1 — triggers map to research triggers, not services.
export const TRIGGER_OPTIONS: FieldOption[] = [
  { value: "deal_dd", label: "A live deal or project needs ESG due diligence" },
  {
    value: "customer_lender_request",
    label: "A lender, DFI or investor asked us for E&S / ESG data",
  },
  { value: "emissions", label: "We want to measure or cut our emissions" },
  { value: "brsr_deadline", label: "BRSR/assurance deadline in our band" },
  {
    value: "not_sure",
    label: "Not sure yet — help me work out what applies",
  },
];

/** The trigger value that routes OUT to the S3 assessment on-ramp. */
export const ROUTE_OUT_TRIGGER = "not_sure";

// Step 1 — listing band (the qualification keystone).
export const BAND_OPTIONS: FieldOption[] = [
  { value: "top_500", label: "Listed top 500" },
  { value: "top_1000", label: "Listed top 1,000" },
  { value: "listed_other", label: "Listed other" },
  { value: "unlisted_msme", label: "Unlisted supplier or MSME" },
  { value: "investor_lender", label: "Investor or lender" },
  { value: "other", label: "Other / not sure" },
];

// Step 2 — timeline doubles as urgency.
export const TIMELINE_OPTIONS: FieldOption[] = [
  { value: "this_fy", label: "This FY" },
  { value: "next_6m", label: "Next 6 months" },
  { value: "exploring", label: "Exploring" },
];

export type ProposalValues = {
  trigger?: string;
  listing_band?: string;
  company?: string;
  sector?: string;
  timeline?: string;
  context_note?: string;
  name?: string;
  work_email?: string;
  phone?: string;
  role?: string;
  consent?: boolean;
};

export type FieldErrors = Partial<Record<keyof ProposalValues, string>>;

export const CONTEXT_NOTE_SOFT_MAX = 300;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Per-step validation — validate-on-blur + on-submit (never per-keystroke). */
export function validateStep(step: StepId, v: ProposalValues): FieldErrors {
  const e: FieldErrors = {};
  if (step === "step1_trigger") {
    if (!v.trigger) e.trigger = "Choose what's prompting this to continue.";
    if (!v.listing_band)
      e.listing_band = "Select your band so we can route your request.";
  }
  if (step === "step2_context") {
    if (!v.company?.trim())
      e.company = "Tell us your company name so we can prepare a first read.";
  }
  if (step === "step3_contact") {
    if (!v.name?.trim()) e.name = "This one is required to route your request.";
    if (!v.work_email?.trim()) {
      e.work_email = "Please enter a valid work email so we can reach you.";
    } else if (!EMAIL_RE.test(v.work_email.trim())) {
      e.work_email =
        "Please enter a valid work email, e.g. name@company.com.";
    }
    if (!v.consent)
      e.consent = "Please confirm you agree to be contacted, so we can reply.";
  }
  return e;
}

// --- Derived qualification (SERVER-SIDE; never a user-facing score, E1/D-3) ---

export type Lane = "fast" | "education" | "dd" | "technical";
export type Urgency = "high" | "medium" | "low";

export type Qualification = {
  lane: Lane;
  urgency: Urgency;
  /** Internal routing tag {band}·{trigger}·{timeline}. Not user-facing. */
  routingTag: string;
};

export function deriveQualification(v: ProposalValues): Qualification {
  const band = v.listing_band ?? "other";
  const trigger = v.trigger ?? "other";
  const timeline = v.timeline ?? "unspecified";

  // Lane: trigger-led, band as tie-breaker for reassure-first cohorts.
  let lane: Lane;
  if (trigger === "deal_dd" || band === "investor_lender") {
    lane = "dd";
  } else if (trigger === "emissions") {
    lane = "technical";
  } else if (
    band === "unlisted_msme" ||
    band === "other" ||
    trigger === "not_sure"
  ) {
    lane = "education";
  } else {
    lane = "fast";
  }

  // Urgency from timeline; a top-500 band or "this FY" reads as high.
  let urgency: Urgency = "low";
  if (timeline === "this_fy" || band === "top_500") urgency = "high";
  else if (timeline === "next_6m" || band === "top_1000") urgency = "medium";

  return { lane, urgency, routingTag: `${band}·${trigger}·${timeline}` };
}

/** Lane-tailored reassurance (user sees reassurance, NEVER a verdict/score). */
export const LANE_CONFIRMATION: Record<
  Lane,
  { reassurance: string }
> = {
  fast: {
    reassurance:
      "Because your deadline is real, we'll lead with what has to be assured first.",
  },
  education: {
    reassurance:
      "There's no filing deadline forcing your hand — we'll start by helping you work out what actually applies.",
  },
  dd: {
    reassurance: "We'll scope to your deal timeline before anything else.",
  },
  technical: {
    reassurance:
      "We'll start from a defensible carbon number — traceable to its source — before we talk targets.",
  },
};

/** Assembles the submitError mailto fallback so a hot lead survives an outage. */
export function buildMailto(
  v: ProposalValues,
  to: string = PROPOSAL_FALLBACK_EMAIL,
): string {
  const subject = `Proposal request — ${v.company ?? "new enquiry"}`;
  const lines = [
    `Trigger: ${label(TRIGGER_OPTIONS, v.trigger)}`,
    `Band: ${label(BAND_OPTIONS, v.listing_band)}`,
    `Company: ${v.company ?? ""}`,
    v.sector ? `Sector: ${v.sector}` : "",
    v.timeline ? `Timeline: ${label(TIMELINE_OPTIONS, v.timeline)}` : "",
    v.context_note ? `Context: ${v.context_note}` : "",
    `Name: ${v.name ?? ""}`,
    `Work email: ${v.work_email ?? ""}`,
    v.phone ? `Phone: ${v.phone}` : "",
    v.role ? `Role: ${v.role}` : "",
  ].filter(Boolean);
  const body = lines.join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

function label(options: FieldOption[], value?: string): string {
  return options.find((o) => o.value === value)?.label ?? value ?? "";
}

export const STEP_ORDER: StepId[] = [
  "step1_trigger",
  "step2_context",
  "step3_contact",
];

export const STEP_TITLES: Record<StepId, string> = {
  step1_trigger: "What's prompting this?",
  step2_context: "A little context",
  step3_contact: "Where do we reach you?",
};
