import type { Metadata } from "next";
import styles from "../page-shell.module.css";
import { Button } from "@/components";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";

// Accessibility statement — a complete, honest first-draft describing the
// measures actually built into the site (semantic structure, keyboard support,
// visible focus, reduced-motion, alt text, responsive layout) and its known
// limitations. CLIENT/COUNSEL: confirm the target conformance level and the
// feedback contact before launch. Pairs with the G18 interactive-a11y pass.
const EFFECTIVE = "27 July 2026";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility | Teravora",
  description:
    "Teravora's accessibility statement: the standard we build to, the measures in place, known limitations, and how to give feedback.",
  path: "/accessibility",
});

export default function Accessibility() {
  return (
    <main id="main-content" className={styles.main}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <h1>Accessibility</h1>
          <p className={styles.note}>Last updated: {EFFECTIVE}</p>
          <p className={styles.lede}>
            We want this site to work for as many people as possible, whatever
            technology or way of interacting they use. This statement explains
            the standard we build to, what we have done, where we know there is
            still work to do, and how to tell us about a problem.
          </p>
        </header>

        <section className={styles.section}>
          <div className={styles.prose}>
            <h2>Our commitment</h2>
            <p>
              Accessibility is part of how we design and build, not an
              afterthought. We treat clear structure, legible type and operable
              controls as core to the site&rsquo;s quality, and we improve them as
              we find issues.
            </p>

            <h2>The standard we build to</h2>
            <p>
              We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1
              at Level AA, and we align with the newer 2.2 criteria where
              practical. These guidelines are organised around content being
              perceivable, operable, understandable and robust.
            </p>

            <h2>Measures in place</h2>
            <ul>
              <li>Semantic HTML structure with a logical heading order and clear page landmarks;</li>
              <li>A &ldquo;skip to content&rdquo; target and keyboard-operable navigation and menus;</li>
              <li>A visible focus indicator on links, buttons and form fields for keyboard users;</li>
              <li>Form fields with associated labels and clear instructions;</li>
              <li>Text alternatives for meaningful images, and decorative images marked so assistive technology can ignore them;</li>
              <li>Support for the operating-system &ldquo;reduced motion&rdquo; preference, which pauses or removes non-essential animation;</li>
              <li>Colour and contrast chosen for legibility, with information never conveyed by colour alone;</li>
              <li>A responsive layout that adapts to different screen sizes and zoom levels; and</li>
              <li>A print / save-as-PDF stylesheet so pages can be read cleanly on paper.</li>
            </ul>

            <h2>Known limitations</h2>
            <p>
              We are honest about where the experience is not yet perfect, and we
              are working on these areas:
            </p>
            <ul>
              <li>
                Some of the site&rsquo;s interactive data visualisations and
                selectors (for example, the BRSR overview and persona and standards
                selectors) offer a richer experience with a pointer than with a
                keyboard or screen reader. Where that is the case, the underlying
                information is also available as on-page text.
              </li>
              <li>
                Third-party pages we link to (such as image-licence and source
                pages) are outside our control and may not meet the same standard.
              </li>
            </ul>

            <h2>Compatibility</h2>
            <p>
              The site is designed to work with current versions of the major
              browsers and to be usable with common assistive technologies. If
              you use an older browser or configuration, some features may behave
              differently.
            </p>

            <h2>Feedback &mdash; and how to reach us</h2>
            <p>
              If you encounter a barrier on this site, or need information from it
              in a different format, please tell us at{" "}
              <a href="mailto:contact@teravora.in">contact@teravora.in</a>. Let us
              know the page and what went wrong, and we will do our best to help
              and to put the issue right. We treat accessibility feedback as a
              priority and aim to respond promptly.
            </p>

            <h2>Enforcement</h2>
            <p>
              If you contact us about an accessibility problem and are not
              satisfied with our response, you can raise the matter with our
              Grievance Officer using the same address; details are in our{" "}
              <a href="/privacy">Privacy Policy</a>.
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
