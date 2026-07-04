import type { Metadata } from "next";
import styles from "../page-shell.module.css";
import { ActionLink, Button } from "@/components";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";

// Staged nav destination (ia@v0 D-1). Interim honest placeholder so primary
// navigation never 404s. index:false — thin/interim content is not indexed
// until the full section is published to the site's evidence standard.
export const metadata: Metadata = buildMetadata({
  title: "Why Now | Teravora",
  description:
    "Why ESG disclosure and assurance readiness are moving up the agenda for Indian companies. This section is being prepared.",
  path: "/why-now",
  index: false,
});

export default function WhyNow() {
  return (
    <main id="main-content" className={styles.main}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <h1>Why now.</h1>
          <p className={styles.lede}>
            This section is expanding. The full case for why ESG disclosure and
            assurance readiness are moving up the agenda is being prepared to
            the same evidence standard as the rest of the site &mdash; we would
            rather publish it right than early.
          </p>
        </header>

        <section className={styles.section}>
          <div className={styles.prose}>
            <p>
              In the meantime, our Solutions set out the work we do today, and
              How We Prove It shows the method behind every number. If a
              deadline or a request is already prompting your ESG work, the
              fastest path is to tell us what is prompting it.
            </p>
          </div>
          <div className={styles.ctaRow}>
            <Button as="a" href={ROUTES.start} variant="primary">
              Request a Proposal
            </Button>
            <ActionLink href={ROUTES.solutionA}>
              BRSR &amp; Assurance Readiness &rarr;
            </ActionLink>
          </div>
        </section>
      </div>
    </main>
  );
}
