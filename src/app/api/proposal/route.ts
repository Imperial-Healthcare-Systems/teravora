import { NextResponse } from "next/server";
import { sendProposalEmail, type ProposalPayload } from "@/lib/proposal-mailer";

// Sends live email — never prerender/cache this handler.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { text: 2000, short: 200 } as const;

/** Normalize an unknown JSON value to a trimmed, length-capped string. */
function str(v: unknown, cap: number): string | undefined {
  if (typeof v !== "string") return undefined;
  const t = v.trim();
  if (!t) return undefined;
  return t.slice(0, cap);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  const b = (body ?? {}) as Record<string, unknown>;
  const payload: ProposalPayload = {
    trigger: str(b.trigger, MAX.short),
    band: str(b.band, MAX.short),
    company: str(b.company, MAX.short),
    sector: str(b.sector, MAX.short),
    timeline: str(b.timeline, MAX.short),
    note: str(b.note, MAX.text),
    name: str(b.name, MAX.short),
    email: str(b.email, MAX.short),
    phone: str(b.phone, MAX.short),
    role: str(b.role, MAX.short),
    consent: b.consent === true,
  };

  // Server-side validation mirrors the runtime's required fields — a mail send
  // is never triggered by an incomplete or malformed submission.
  const missing: string[] = [];
  if (!payload.trigger) missing.push("trigger");
  if (!payload.band) missing.push("band");
  if (!payload.company) missing.push("company");
  if (!payload.name) missing.push("name");
  if (!payload.email || !EMAIL_RE.test(payload.email)) missing.push("email");
  if (!payload.consent) missing.push("consent");

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: "validation", fields: missing },
      { status: 422 },
    );
  }

  try {
    await sendProposalEmail(payload);
    return NextResponse.json({ ok: true });
  } catch (err) {
    // Log the delivery failure server-side; never leak SMTP internals to the client.
    console.error("[proposal] email delivery failed:", err);
    return NextResponse.json(
      { ok: false, error: "delivery_failed" },
      { status: 502 },
    );
  }
}
