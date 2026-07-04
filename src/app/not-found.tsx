import type { Metadata } from "next";
import styles from "./page-shell.module.css";
import { Button } from "@/components";
import { ROUTES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Page not found | Teravora",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main-content" className={styles.main}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <h1>We couldn&rsquo;t find that page.</h1>
          <p className={styles.lede}>
            The page may have moved. Start from the home page, or tell us what
            you need and a specialist will point you the right way.
          </p>
          <div className={styles.ctaRow}>
            <Button as="a" href={ROUTES.home} variant="secondary">
              Back to home
            </Button>
            <Button as="a" href={ROUTES.start} variant="primary">
              Request a Proposal
            </Button>
          </div>
        </header>
      </div>
    </main>
  );
}
