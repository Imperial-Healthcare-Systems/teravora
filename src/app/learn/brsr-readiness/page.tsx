import type { Metadata } from "next";
import styles from "../../page-shell.module.css";
import { ActionLink, Button } from "@/components";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";

// Staged nav/CTA destination (referenced from How We Prove It and the proposal
// confirmation). Interim honest placeholder so the link never 404s. The
// interactive readiness check is not yet built — this page says so plainly.
export const metadata: Metadata = buildMetadata({
  title: "BRSR Readiness Check | Teravora",
  description:
    "A short check to tell you which BRSR and assurance requirements apply to your band. The interactive tool is being built.",
  path: "/learn/brsr-readiness",
  index: false,
});

export default function BrsrReadiness() {
  return (
    <main id="main-content" className={styles.main}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <h1>BRSR readiness check.</h1>
          <p className={styles.lede}>
            This section is expanding. The interactive readiness check &mdash;
            which will tell you which BRSR and assurance requirements apply to
            your band &mdash; is being built to the same evidence standard as
            the rest of the site, so we would rather ship it right than early.
          </p>
        </header>

        <section className={styles.section}>
          <div className={styles.prose}>
            <p>
              You do not have to wait for the tool. Tell us your band and what
              is prompting your ESG work, and a specialist will reply within two
              business days with a first read on what actually applies to you.
            </p>
          </div>
          <div className={styles.ctaRow}>
            <Button as="a" href={ROUTES.start} variant="primary">
              Request a Proposal
            </Button>
            <ActionLink href={ROUTES.solutionA}>
              ESG Disclosure &amp; Assurance Readiness &rarr;
            </ActionLink>
          </div>
        </section>
      </div>
    </main>
  );
}
