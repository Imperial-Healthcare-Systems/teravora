import type { Metadata } from "next";
import styles from "../page-shell.module.css";
import { Button } from "@/components";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";

// Legal page — minimal honest boilerplate, clearly marked DRAFT. Not indexed
// until finalized and reviewed. Referenced by the footer and the proposal form
// consent line, so the route must exist and must not 404.
export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Teravora",
  description: "Teravora's privacy policy. Draft — to be finalized.",
  path: "/privacy",
  index: false,
});

export default function Privacy() {
  return (
    <main id="main-content" className={styles.main}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <h1>Privacy Policy</h1>
          <p className={styles.note}>Draft &mdash; to be finalized.</p>
          <p className={styles.lede}>
            This page is being prepared and reviewed before launch. It will set
            out what personal data Teravora collects, why, how long it is kept,
            and the choices you have.
          </p>
        </header>

        <section className={styles.section}>
          <div className={styles.prose}>
            <p>
              When you request a proposal, we collect the details you provide
              &mdash; such as your name, work email, company, and the context of
              your enquiry &mdash; solely to respond to your request. We do not
              sell your data.
            </p>
            <p>
              The finalized policy will confirm our lawful basis, retention
              periods, third-party processors, and how to exercise your rights.
              Until then, if you have a question about how your information is
              handled, please raise it when you contact us.
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
