/* =============================================================================
 * Proposal-request email delivery (server-only).
 *
 * The /start form (start.content.ts + start.runtime.js) POSTs its raw answers to
 * /api/proposal, which calls sendProposalEmail(). Field *codes* are resolved to
 * human labels HERE using the start-page vocabulary — deliberately NOT the React
 * proposalConfig.ts codes, which differ (that form is /comps-only). All user text
 * is HTML-escaped before it reaches the email body.
 * ========================================================================== */

import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

// --- Submitted payload (mirrors the /start form fields) ----------------------
export type ProposalPayload = {
  trigger?: string; // step 1 — what's prompting this (required)
  band?: string; // step 1 — who are you (required)
  company?: string; // step 2 (required)
  sector?: string; // step 2 (optional)
  timeline?: string; // step 2 (optional)
  note?: string; // step 2 (optional)
  name?: string; // step 3 (required)
  email?: string; // step 3 — work email (required)
  phone?: string; // step 3 (optional)
  role?: string; // step 3 (optional)
  consent?: boolean; // step 3 (required)
};

// --- Label maps — kept in lockstep with start.runtime.js `LBL` ---------------
const TRIGGER_LABELS: Record<string, string> = {
  deal: "A live deal or project needs ESG due diligence",
  customer: "A lender, DFI or investor asked us for E&S / ESG data",
  training: "We need to train our team on environment, ESG or climate",
  emissions: "We want to measure or cut our emissions",
  brsr: "A BRSR / assurance deadline in our band",
  unsure: "Not sure yet — help me work out what applies",
};

const BAND_LABELS: Record<string, string> = {
  lender: "Lender, DFI or project financier",
  investor: "Investor or PE deal team",
  sponsor: "Project sponsor or borrower",
  training: "Training buyer",
  t500: "Listed · top 500",
  t1000: "Listed · top 1,000",
  other: "Listed · other",
  supplier: "Unlisted supplier / MSME",
  na: "Other / not sure",
};

const TIMELINE_LABELS: Record<string, string> = {
  thisfy: "This FY",
  "6mo": "Next 6 months",
  explore: "Exploring",
};

/** Internal routing lane — mirrors start.runtime.js `lane()`. Never user-facing. */
function deriveLane(trigger?: string, band?: string): string {
  if (
    trigger === "deal" ||
    trigger === "customer" ||
    band === "lender" ||
    band === "investor" ||
    band === "sponsor"
  )
    return "Deal lane";
  if (trigger === "brsr" || band === "t500" || band === "t1000")
    return "Fast lane";
  if (trigger === "training" || band === "training") return "Training lane";
  if (trigger === "emissions") return "Scoping (emissions)";
  if (trigger === "unsure" || band === "na") return "Education lane";
  return "Scoping";
}

const label = (map: Record<string, string>, v?: string): string =>
  (v && map[v]) || v || "—";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// --- Transport (lazy singleton; reused across requests) ----------------------
let transporter: Transporter | null = null;

function getTransport(): Transporter {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? "587");

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP is not configured — set SMTP_HOST, SMTP_USER and SMTP_PASS in the environment.",
    );
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    // 587 uses STARTTLS (secure:false + upgrade); 465 is implicit TLS.
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user, pass },
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 20_000,
  });

  return transporter;
}

// --- Email body --------------------------------------------------------------
type Field = { k: string; v: string };

function buildFields(p: ProposalPayload): Field[] {
  const fields: Field[] = [
    { k: "Prompt", v: label(TRIGGER_LABELS, p.trigger) },
    { k: "Profile", v: label(BAND_LABELS, p.band) },
    { k: "Company", v: p.company?.trim() || "—" },
  ];
  if (p.sector?.trim()) fields.push({ k: "Sector", v: p.sector.trim() });
  if (p.timeline)
    fields.push({ k: "Timeline", v: label(TIMELINE_LABELS, p.timeline) });
  if (p.note?.trim()) fields.push({ k: "Anything specific", v: p.note.trim() });
  fields.push(
    { k: "Name", v: p.name?.trim() || "—" },
    { k: "Work email", v: p.email?.trim() || "—" },
  );
  if (p.phone?.trim()) fields.push({ k: "Phone", v: p.phone.trim() });
  if (p.role?.trim()) fields.push({ k: "Role", v: p.role.trim() });
  fields.push(
    { k: "Consent to contact", v: p.consent ? "Yes" : "No" },
    { k: "Derived lane (internal)", v: deriveLane(p.trigger, p.band) },
  );
  return fields;
}

function renderText(fields: Field[]): string {
  return (
    "New proposal request from the Teravora website\n" +
    "==============================================\n\n" +
    fields.map((f) => `${f.k}: ${f.v}`).join("\n") +
    "\n"
  );
}

function renderHtml(fields: Field[]): string {
  const rows = fields
    .map(
      (f) => `
      <tr>
        <td style="padding:8px 16px 8px 0;color:#5a6b6e;font:600 13px/1.5 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;white-space:nowrap;vertical-align:top">${escapeHtml(
        f.k,
      )}</td>
        <td style="padding:8px 0;color:#12201f;font:400 15px/1.55 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">${escapeHtml(
        f.v,
      )}</td>
      </tr>`,
    )
    .join("");

  return `<!doctype html>
<html>
  <body style="margin:0;background:#f3f5f4;padding:24px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e3e8e7">
      <tr>
        <td style="background:#12201f;padding:20px 24px">
          <span style="color:#e4be68;font:700 13px/1 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;letter-spacing:.08em">TERAVORA · PROPOSAL REQUEST</span>
        </td>
      </tr>
      <tr>
        <td style="padding:24px">
          <p style="margin:0 0 16px;color:#12201f;font:400 15px/1.55 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">A new proposal request was submitted from the website. Details below — reply directly to reach the enquirer.</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

// --- Public API --------------------------------------------------------------
export type SendResult = { ok: boolean };

/**
 * Sends the proposal request to the client inbox. Throws on delivery failure;
 * callers (the route handler) catch, log, and translate to a client response.
 */
export async function sendProposalEmail(
  p: ProposalPayload,
): Promise<SendResult> {
  const fields = buildFields(p);
  const from = process.env.SMTP_USER!;
  const to = process.env.PROPOSAL_RECIPIENT || from;
  const company = p.company?.trim() || "new enquiry";
  const replyTo = p.email?.trim();

  await getTransport().sendMail({
    from: `"Teravora Website" <${from}>`,
    to,
    subject: `Proposal request — ${company}`,
    text: renderText(fields),
    html: renderHtml(fields),
    // Let the client hit "reply" to answer the enquirer directly.
    replyTo: replyTo && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo) ? replyTo : undefined,
  });

  return { ok: true };
}
