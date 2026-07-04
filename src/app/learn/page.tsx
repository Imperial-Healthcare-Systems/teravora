import type { Metadata } from "next";
import styles from "../page-shell.module.css";
import { ActionLink, Button, Card } from "@/components";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";

// ⚠️ PLACEHOLDER CONTENT (human-approved, AUDIT §5) — these three reference
// guides are ILLUSTRATIVE stand-ins to remove the empty "dead end" and show the
// library shape. Summaries are plausible but NOT yet published/verified content.
// REPLACE with real guides (and real hrefs) before launch. index:false stays.
const GUIDES = [
  {
    tag: "Guide · BRSR-Core",
    title: "The 49 KPIs, in plain language",
    body: "What each BRSR-Core attribute actually asks for, where the data usually lives, and the gaps that most often surface in a first assessment.",
  },
  {
    tag: "Guide · Assurance",
    title: "Preparing for reasonable assurance",
    body: "How reasonable assurance differs from limited assurance, what an assurer tests, and the evidence trail that clears the bar on the first pass.",
  },
  {
    tag: "Guide · Value chain",
    title: "When BRSR reaches your suppliers",
    body: "How customer and lender requests pull mid-market and value-chain firms into ESG reporting — and a practical order of operations to respond.",
  },
];

// Staged nav destination (ia@v0 D-1). Interim honest placeholder so primary
// navigation never 404s. index:false until the Learn library is published.
export const metadata: Metadata = buildMetadata({
  title: "Learn | Teravora",
  description:
    "Plain-language explainers on BRSR, BRSR-Core, assurance, and ESG disclosure in India. This resource library is being built.",
  path: "/learn",
  index: false,
});

export default function Learn() {
  return (
    <main id="main-content" className={styles.main}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <h1>Learn.</h1>
          <p className={styles.lede}>
            Plain-language reference on BRSR, BRSR-Core, assurance, and ESG
            disclosure in India &mdash; written to the same evidence standard as
            the rest of the site. Start with a guide, then talk to a specialist
            about what applies to your band.
          </p>
        </header>

        <section className={styles.section}>
          <h2>Reference guides</h2>
          <div className={styles.cardGrid}>
            {GUIDES.map((g) => (
              <Card
                key={g.title}
                variant="resource"
                eyebrow={g.tag}
                title={g.title}
                body={g.body}
                meta="Reading guide"
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.prose}>
            <p>
              How We Prove It sets out our method and the standards we work to,
              and each Solution explains its part of the picture. If you would
              like a specialist to point you to what applies to your band, just
              ask.
            </p>
          </div>
          <div className={styles.ctaRow}>
            <Button
              as="a"
              href={ROUTES.start}
              variant="primary"
              iconTrailing={<span aria-hidden="true">&rarr;</span>}
            >
              Request a Proposal
            </Button>
            <ActionLink href={ROUTES.howWeProve}>
              How we prove it &rarr;
            </ActionLink>
          </div>
        </section>
      </div>
    </main>
  );
}
