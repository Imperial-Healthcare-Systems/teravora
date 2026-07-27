import type { Metadata } from "next";
import styles from "../page-shell.module.css";
import { Button } from "@/components";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site-data";

// Privacy Policy — a complete, generic first-draft grounded in the site's actual
// behaviour (email/enquiry forms, no accounts or e-commerce, essential cookies
// only, Next.js served via a cloud host/CDN) and Indian law (DPDP Act 2023, IT
// Act 2000). CLIENT/COUNSEL: review before launch and confirm the registered
// address, data-retention periods, the Grievance Officer's name, and any
// analytics/processors added later; the wording below reflects sensible defaults.
const EFFECTIVE = "27 July 2026";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Teravora",
  description:
    "How Teravora Consulting India LLP collects, uses, shares and protects personal data through the teravora.in website, and the rights you have.",
  path: "/privacy",
});

export default function Privacy() {
  return (
    <main id="main-content" className={styles.main}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <h1>Privacy Policy</h1>
          <p className={styles.note}>Last updated: {EFFECTIVE}</p>
          <p className={styles.lede}>
            This policy explains what personal data Teravora Consulting India LLP
            (&ldquo;Teravora&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects
            through this website, why we collect it, how long we keep it, who we
            share it with, and the choices and rights you have. We keep our data
            practices deliberately minimal.
          </p>
        </header>

        <section className={styles.section}>
          <div className={styles.prose}>
            <h2>1. Who we are</h2>
            <p>
              Teravora Consulting India LLP (LLPIN: ACY-9976) is a limited
              liability partnership incorporated in India and is the data
              fiduciary responsible for personal data processed through this
              website, <strong>teravora.in</strong>. For any privacy question,
              contact us at{" "}
              <a href="mailto:contact@teravora.in">contact@teravora.in</a>.
            </p>

            <h2>2. Scope</h2>
            <p>
              This policy covers personal data we handle in connection with this
              website and enquiries that come to us through it. It does not cover
              the separate contractual terms of any client engagement, which are
              agreed in writing on a case-by-case basis.
            </p>

            <h2>3. The personal data we collect</h2>
            <p>
              <strong>Information you give us.</strong> When you request a
              proposal, send an enquiry, apply for a role, or otherwise contact
              us &mdash; through a form on this site, by email, or through a
              messaging channel such as WhatsApp &mdash; we receive the
              information you choose to provide. This typically includes your
              name, work email address, organisation, and the content of your
              message. If you apply for a role, it also includes your CV or a
              link to your professional profile and anything you tell us in
              support of your application.
            </p>
            <p>
              <strong>Information collected automatically.</strong> Like most
              websites, our hosting and content-delivery infrastructure records
              basic technical data when you visit &mdash; such as your IP
              address, browser and device type, the pages you view, and the date
              and time &mdash; in server logs used to operate, secure and
              troubleshoot the site. This site uses only strictly necessary
              cookies (for example, to keep the site functioning and secure). We
              do not use advertising cookies or cross-site tracking, and we do
              not build advertising profiles. If we introduce website analytics
              in future, we will update this policy and seek consent where the
              law requires it.
            </p>

            <h2>4. How we use personal data, and our lawful basis</h2>
            <p>We use personal data to:</p>
            <ul>
              <li>respond to your enquiry and provide the information or proposal you ask for;</li>
              <li>assess job applications and communicate with candidates;</li>
              <li>operate, secure, maintain and improve this website;</li>
              <li>keep records of our communications with you; and</li>
              <li>comply with applicable law and respond to lawful requests.</li>
            </ul>
            <p>
              We process this data on the basis of your consent (which you give
              by choosing to contact us), for the legitimate and specified uses
              set out above under India&rsquo;s Digital Personal Data Protection
              Act, 2023, and to meet our legal obligations. You may withdraw
              consent at any time (see section 8); doing so will not affect
              processing already carried out.
            </p>

            <h2>5. Cookies</h2>
            <p>
              We use only cookies that are strictly necessary for the site to
              work. You can block or delete cookies through your browser
              settings; blocking strictly necessary cookies may affect how parts
              of the site function. Because we do not run advertising or
              analytics trackers, there is no third-party marketing profile to
              opt out of.
            </p>

            <h2>6. Who we share it with</h2>
            <p>
              We do not sell your personal data, and we do not share it for
              third-party marketing. We share it only with:
            </p>
            <ul>
              <li>
                <strong>Service providers (data processors)</strong> who help us
                run the site and our business &mdash; our cloud hosting and
                content-delivery provider (which processes server-log data to
                serve the site) and our email service provider (which handles the
                messages you send us). These providers act on our instructions
                under appropriate confidentiality and data-protection terms.
              </li>
              <li>
                <strong>Professional advisers and authorities</strong> where we
                are required to do so by law, or to establish, exercise or defend
                legal claims.
              </li>
            </ul>

            <h2>7. International transfers</h2>
            <p>
              Our hosting and email providers may process data on servers located
              outside India. Where personal data is transferred across borders,
              we rely on providers that offer recognised contractual and security
              safeguards, and we transfer data only in line with applicable
              Indian law.
            </p>

            <h2>8. How long we keep it</h2>
            <p>
              We keep personal data only for as long as we need it for the
              purpose it was collected, and then delete or anonymise it:
            </p>
            <ul>
              <li>
                <strong>Enquiries and proposal requests</strong> &mdash; for as
                long as needed to respond and progress the conversation, and for
                a reasonable period afterwards for our records.
              </li>
              <li>
                <strong>Job applications</strong> &mdash; for up to 12 months so
                we can consider you for current and upcoming roles, after which we
                delete them, unless you ask us to remove them sooner or agree to a
                longer period.
              </li>
              <li>
                <strong>Server logs</strong> &mdash; for a short period for
                security and diagnostics, then discarded or aggregated.
              </li>
            </ul>

            <h2>9. Your rights</h2>
            <p>
              Subject to applicable law, including the Digital Personal Data
              Protection Act, 2023, you have the right to:
            </p>
            <ul>
              <li>access the personal data we hold about you;</li>
              <li>ask us to correct or complete inaccurate or incomplete data;</li>
              <li>ask us to erase your data where it is no longer needed;</li>
              <li>withdraw consent for processing based on consent;</li>
              <li>nominate another individual to exercise your rights in the event of your death or incapacity; and</li>
              <li>raise a grievance about how we handle your data.</li>
            </ul>
            <p>
              To exercise any of these, email{" "}
              <a href="mailto:contact@teravora.in">contact@teravora.in</a>. We may
              need to verify your identity before acting on a request. You also
              have the right to complain to the Data Protection Board of India.
            </p>

            <h2>10. Grievance Officer</h2>
            <p>
              If you have a concern about how your personal data is handled, you
              can contact our Grievance Officer, Teravora Consulting India LLP,
              at <a href="mailto:contact@teravora.in">contact@teravora.in</a>. We
              will acknowledge and work to resolve grievances within the
              timeframes required by law.
            </p>

            <h2>11. Children</h2>
            <p>
              This website and our services are intended for businesses and
              professional users. We do not knowingly collect personal data from
              children. If you believe a child has provided us personal data,
              please contact us and we will delete it.
            </p>

            <h2>12. Security</h2>
            <p>
              We take reasonable technical and organisational measures to protect
              personal data against loss, misuse and unauthorised access. No
              method of transmission or storage is completely secure, but we work
              to keep the data we hold protected and to limit what we collect in
              the first place.
            </p>

            <h2>13. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. When we do, we will
              revise the &ldquo;last updated&rdquo; date above and, where the
              change is significant, take reasonable steps to bring it to your
              attention.
            </p>

            <h2>14. Contact us</h2>
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
