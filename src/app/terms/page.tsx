import type { Metadata } from "next";
import styles from "../page-shell.module.css";
import { Button } from "@/components";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";

// Legal page — minimal honest boilerplate, clearly marked DRAFT. Not indexed
// until finalized and reviewed. Referenced by the footer, so the route must
// exist and must not 404.
export const metadata: Metadata = buildMetadata({
  title: "Terms of Use | Teravora",
  description: "Teravora's terms of use. Draft — to be finalized.",
  path: "/terms",
  index: false,
});

export default function Terms() {
  return (
    <main id="main-content" className={styles.main}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <h1>Terms of Use</h1>
          <p className={styles.note}>Draft &mdash; to be finalized.</p>
          <p className={styles.lede}>
            These terms are being prepared and reviewed before launch. They will
            set out the basis on which you may use this website and its content.
          </p>
        </header>

        <section className={styles.section}>
          <div className={styles.prose}>
            <p>
              This site is provided for general information about Teravora&rsquo;s
              services. Nothing on it is advice for your specific circumstances,
              and engagement terms are agreed separately in writing.
            </p>
            <p>
              The finalized terms will cover acceptable use, intellectual
              property, disclaimers, limitation of liability, and governing law.
            </p>
          </div>
          <div className={styles.ctaRow}>
            <Button as="a" href={ROUTES.home} variant="secondary">
              Back to home
            </Button>
            <Button as="a" href={ROUTES.start} variant="primary">
              Request a Proposal
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
