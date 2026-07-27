import type { Metadata } from "next";
import styles from "../page-shell.module.css";
import { Button } from "@/components";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";

// Terms of Use — a complete, generic first-draft grounded in the site's actual
// nature (an informational marketing site; no accounts, payments or e-commerce;
// external image credits on /image-credits) and Indian law. CLIENT/COUNSEL:
// review before launch and confirm the governing jurisdiction (city) and any
// engagement-specific disclaimers; the wording below reflects sensible defaults.
const EFFECTIVE = "27 July 2026";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use | Teravora",
  description:
    "The terms on which you may use the Teravora Consulting India LLP website, teravora.in, including intellectual property, disclaimers and governing law.",
  path: "/terms",
});

export default function Terms() {
  return (
    <main id="main-content" className={styles.main}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <h1>Terms of Use</h1>
          <p className={styles.note}>Last updated: {EFFECTIVE}</p>
          <p className={styles.lede}>
            These terms govern your use of this website. By accessing or using
            teravora.in, you agree to them. If you do not agree, please do not use
            the site.
          </p>
        </header>

        <section className={styles.section}>
          <div className={styles.prose}>
            <h2>1. Who we are</h2>
            <p>
              This website is operated by Teravora Consulting India LLP (LLPIN:
              ACY-9976), a limited liability partnership incorporated in India
              (&ldquo;Teravora&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). You
              can reach us at{" "}
              <a href="mailto:contact@teravora.in">contact@teravora.in</a>.
            </p>

            <h2>2. Acceptance of these terms</h2>
            <p>
              By accessing, browsing or using this website you confirm that you
              accept these terms and agree to comply with them. We may update
              them from time to time; the version published here, with the date
              above, is the one that applies to your use.
            </p>

            <h2>3. Information only &mdash; not professional advice</h2>
            <p>
              This site describes Teravora&rsquo;s services and provides general
              information about environmental, social, governance and
              sustainability topics. It is not advice for your specific
              circumstances and should not be relied on as such. Any advisory,
              assessment, assurance-readiness, training or other service is
              provided only under a separate written engagement, and the terms of
              that engagement &mdash; not these website terms &mdash; govern the
              work.
            </p>

            <h2>4. Permitted use</h2>
            <p>You may use this website for lawful purposes only. You agree not to:</p>
            <ul>
              <li>use the site in any way that breaches applicable law or regulation;</li>
              <li>attempt to gain unauthorised access to the site, its servers or any connected system;</li>
              <li>introduce malicious code, or interfere with the site&rsquo;s operation, security or availability;</li>
              <li>scrape, harvest or systematically extract content except as permitted by law; or</li>
              <li>misrepresent your identity or your affiliation with any person or organisation.</li>
            </ul>

            <h2>5. Intellectual property</h2>
            <p>
              Unless stated otherwise, the content on this site &mdash; text,
              graphics, layout, design, the Teravora name and logo, and the
              underlying code &mdash; is owned by or licensed to Teravora and is
              protected by intellectual-property laws. You may view and print
              pages for your own reference. You may not otherwise copy, reproduce,
              republish or exploit the content commercially without our prior
              written permission. Certain photographs are used under third-party
              licences and are attributed on our{" "}
              <a href="/image-credits">Image Credits</a> page; those images remain
              the property of their respective authors under the licences noted
              there.
            </p>

            <h2>6. Third-party links</h2>
            <p>
              This site may link to third-party websites for convenience or
              attribution. We do not control those sites and are not responsible
              for their content, accuracy or privacy practices. A link does not
              imply our endorsement.
            </p>

            <h2>7. Disclaimers</h2>
            <p>
              The site and its content are provided &ldquo;as is&rdquo; and
              &ldquo;as available&rdquo;. While we take care to keep the
              information accurate and current, we make no warranties or
              representations, express or implied, that the site will be
              uninterrupted or error-free, or that the content is complete,
              accurate or up to date. Regulatory frameworks referenced on this
              site (including SEBI&rsquo;s BRSR requirements) change over time,
              and you should verify the current position for your circumstances.
            </p>

            <h2>8. No guaranteed outcomes</h2>
            <p>
              Nothing on this site is a promise or guarantee of any particular
              result &mdash; including that a disclosure will pass independent
              assessment or assurance, that financing or a rating will be
              obtained, or that any regulatory position will be met. Outcomes
              depend on facts specific to each organisation and on decisions made
              by third parties such as assessors, assurance providers, lenders and
              regulators.
            </p>

            <h2>9. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Teravora will not be liable
              for any indirect, incidental, special or consequential loss, or for
              any loss of profits, revenue, data or goodwill, arising out of or in
              connection with your use of &mdash; or inability to use &mdash; this
              website or its content. Nothing in these terms excludes or limits any
              liability that cannot be excluded or limited under applicable law.
            </p>

            <h2>10. Privacy</h2>
            <p>
              Our handling of personal data is described in our{" "}
              <a href="/privacy">Privacy Policy</a>, which forms part of these
              terms.
            </p>

            <h2>11. Governing law and jurisdiction</h2>
            <p>
              These terms and any dispute or claim arising out of or in connection
              with them or your use of this site are governed by the laws of
              India. You agree that the courts of competent jurisdiction in India
              will have exclusive jurisdiction over any such dispute.
            </p>

            <h2>12. Changes to these terms</h2>
            <p>
              We may revise these terms at any time by updating this page. Please
              check it from time to time; your continued use of the site after a
              change means you accept the revised terms.
            </p>

            <h2>13. Contact us</h2>
            <p>
              Teravora Consulting India LLP (LLPIN: ACY-9976) &mdash;{" "}
              <a href="mailto:contact@teravora.in">contact@teravora.in</a>.
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
