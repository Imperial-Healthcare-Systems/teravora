import type { Metadata } from "next";
import styles from "../page-shell.module.css";
import { Button } from "@/components";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";

// Legal/utility page — minimal honest boilerplate, clearly marked DRAFT. Not
// indexed until finalized. Referenced by the footer, so the route must exist
// and must not 404.
export const metadata: Metadata = buildMetadata({
  title: "Accessibility | Teravora",
  description: "Teravora's accessibility statement. Draft — to be finalized.",
  path: "/accessibility",
  index: false,
});

export default function Accessibility() {
  return (
    <main id="main-content" className={styles.main}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <h1>Accessibility</h1>
          <p className={styles.note}>Draft &mdash; to be finalized.</p>
          <p className={styles.lede}>
            We want this site to work for everyone. This statement is being
            prepared and will describe our accessibility commitment, the
            standard we build to, and how to reach us if something gets in your
            way.
          </p>
        </header>

        <section className={styles.section}>
          <div className={styles.prose}>
            <p>
              Teravora builds to the Web Content Accessibility Guidelines (WCAG)
              2.2 AA as a working target: keyboard-operable navigation, visible
              focus, labelled form controls, and support for reduced-motion
              preferences. The finalized statement will confirm our conformance
              level and any known limitations.
            </p>
            <p>
              If you encounter a barrier on this site, please tell us when you
              contact us and we will work to put it right.
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
