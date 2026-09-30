import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { FadeIn, TextReveal, PageTransition } from "@/components/motion";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the Riffly application and website.",
};

export default function TermsOfService() {
  const lastUpdated = "September 29, 2026";

  return (
    <PageTransition>
      <div className="wrap pagehead">
        <FadeIn distance={12} duration={0.6}>
          <span className="section-eyebrow">LEGAL &amp; POLICIES</span>
        </FadeIn>
        <TextReveal as="h1" duration={0.8} distance={20}>
          Terms of Service
        </TextReveal>
        <FadeIn delay={0.15} distance={14} duration={0.6}>
          <p className="lede" style={{ marginTop: 16 }}>
            Last updated: {lastUpdated}
          </p>
        </FadeIn>
      </div>

      <section style={{ paddingTop: 0, paddingBottom: 80 }}>
        <div className="wrap prose legal-prose">
          <p className="lead-paragraph">
            Welcome to Riffly. These Terms of Service (&ldquo;Terms&rdquo;)
            govern your access to and use of the Riffly mobile application,
            website, and related services (collectively, the &ldquo;Service&rdquo;).
          </p>

          <p>
            By creating an account, accessing, or using Riffly, you agree to
            these Terms. If you do not agree with these Terms, you should not
            access or use the Service.
          </p>

          <h2>1. About Riffly</h2>

          <p>
            Riffly is a digital workflow and administrative tool designed for
            working musicians, vocalists, instrumentalists, producers, and
            other music creatives.
          </p>

          <p>
            Riffly provides tools that may include gig management, calendar
            organization, setlist management, practice tracking, practice
            history, invoice document generation, musician profiles, and
            networking and discovery features.
          </p>

          <p>
            Riffly is a software platform. It does not act as an employer,
            talent agency, booking agency, financial institution, tax advisor,
            legal advisor, or representative of any musician or music creative.
          </p>

          <h2>2. Eligibility and Accounts</h2>

          <ul>
            <li>
              You must meet the minimum age required to use Riffly in your
              country or jurisdiction.
            </li>
            <li>
              You agree to provide accurate and reasonably complete information
              when creating your account.
            </li>
            <li>
              You are responsible for keeping your account credentials secure.
            </li>
            <li>
              You are responsible for activity that occurs through your account
              unless the activity resulted from circumstances outside your
              reasonable control.
            </li>
            <li>
              You must notify us if you believe your account has been accessed
              without authorization.
            </li>
          </ul>

          <h2>3. Your Content</h2>

          <p>
            You retain ownership of the information and content you create or
            provide through Riffly, including profile information, gig details,
            setlists, practice records, notes, and invoice information
            (&ldquo;User Content&rdquo;).
          </p>

          <p>
            By submitting User Content to Riffly, you grant us a limited,
            non-exclusive, worldwide license to host, store, process, reproduce,
            display, and transmit that content only as reasonably necessary to
            provide, maintain, secure, and improve the Service.
          </p>

          <p>
            This license does not transfer ownership of your User Content to
            Riffly. You may continue to use your content outside the Service.
          </p>

          <h2>4. Musician Profiles &amp; Networking</h2>

          <p>
            Riffly may provide features that allow musicians and music creatives
            to create profiles, discover other users, and build professional
            connections.
          </p>

          <p>
            You are responsible for the information you choose to publish through
            your profile. Information that you make discoverable may be visible
            to other Riffly users.
          </p>

          <p>
            You must not use networking or discovery features to harass,
            impersonate, deceive, spam, or unlawfully target another person.
          </p>

          <p>
            Riffly does not guarantee the identity, qualifications, availability,
            reliability, or professional conduct of another user. Any professional
            relationship, booking, collaboration, or transaction between users is
            between those users.
          </p>

          <h2>5. Gigs, Practice &amp; Workflow Tools</h2>

          <p>
            Riffly provides organizational tools to help you manage your musical
            work and practice activity.
          </p>

          <p>
            You are responsible for the accuracy of the information you enter,
            including gig dates, times, venues, setlists, practice records,
            fees, and other information.
          </p>

          <p>
            Riffly does not guarantee that using the Service will result in
            additional gigs, income, bookings, professional opportunities, or
            musical progress.
          </p>

          <h2>6. Invoices &amp; Financial Information</h2>

          <p>
            Riffly provides tools for generating invoice documents for your
            musical services.
          </p>

          <p>
            Riffly is not a financial institution, accounting firm, tax advisor,
            payment processor for your clients, or legal advisor.
          </p>

          <ul>
            <li>
              You are responsible for the accuracy of invoices you create.
            </li>
            <li>
              You are responsible for determining whether an invoice complies
              with applicable tax, accounting, and business requirements.
            </li>
            <li>
              You are responsible for communicating with your clients and
              collecting payments owed to you.
            </li>
            <li>
              Riffly does not guarantee that an invoice will result in payment.
            </li>
          </ul>

          <h2>7. Subscriptions &amp; Paid Features</h2>

          <p>
            Riffly may offer free and paid subscription plans. The features,
            limits, and pricing associated with each plan may be described within
            the Service or on our website.
          </p>

          <p>
            Paid subscriptions may be processed through third-party payment or
            app-store providers, including Paystack, Apple, Google, or other
            providers applicable to your purchase.
          </p>

          <p>
            Subscription prices, billing periods, renewal terms, and applicable
            taxes will be presented to you before you complete a purchase.
          </p>

          <p>
            Where subscriptions automatically renew, they will continue to renew
            according to the terms presented at the time of purchase unless you
            cancel them through the applicable payment or app-store provider
            before the next billing period.
          </p>

          <p>
            Refunds are subject to the policies of the payment provider or
            app store through which the purchase was made and any rights you may
            have under applicable law.
          </p>

          <h2>8. Acceptable Use</h2>

          <p>You agree not to use Riffly to:</p>

          <ul>
            <li>Violate applicable laws or regulations.</li>
            <li>Impersonate another person, musician, business, or organization.</li>
            <li>Harass, threaten, abuse, or intentionally deceive other users.</li>
            <li>Send spam or unauthorized commercial communications.</li>
            <li>Upload malicious software, code, or other harmful material.</li>
            <li>
              Attempt to gain unauthorized access to another user's account or
              Riffly's systems.
            </li>
            <li>
              Probe, scan, reverse-engineer, circumvent, or compromise the
              security of the Service.
            </li>
            <li>
              Scrape, copy, reproduce, or commercially exploit Riffly's content
              or infrastructure without authorization.
            </li>
            <li>
              Use the Service in a way that interferes with its operation or
              negatively affects other users.
            </li>
          </ul>

          <h2>9. Intellectual Property</h2>

          <p>
            Riffly and its licensors retain all rights, title, and interest in
            the Service, including its software, visual design, interface,
            branding, logos, graphics, documentation, and other materials
            provided by Riffly.
          </p>

          <p>
            Except where permitted by law or expressly authorized by us, you may
            not copy, modify, distribute, sell, lease, sublicense, reverse
            engineer, or create derivative works from the Service or Riffly
            branding.
          </p>

          <p>
            Nothing in these Terms transfers ownership of your User Content to
            Riffly.
          </p>

          <h2>10. Third-Party Services</h2>

          <p>
            Riffly may rely on third-party services to provide certain parts of
            the Service, including authentication, cloud infrastructure, payment
            processing, subscription management, app distribution, email,
            analytics, or other technical services.
          </p>

          <p>
            Third-party services may be subject to their own terms and privacy
            policies. Riffly is not responsible for the independent actions or
            policies of third-party services that you access or use.
          </p>

          <h2>11. Service Availability &amp; Changes</h2>

          <p>
            We aim to keep Riffly available and reliable, but we do not guarantee
            that the Service will always be available, uninterrupted, secure, or
            error-free.
          </p>

          <p>
            We may temporarily suspend access for maintenance, security updates,
            technical issues, or other operational reasons.
          </p>

          <p>
            We may add, modify, restrict, or discontinue features of Riffly as
            the Service develops. Where required by applicable law, we will
            provide appropriate notice of material changes.
          </p>

          <h2>12. Disclaimer of Warranties</h2>

          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS
            PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
            BASIS.
          </p>

          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, RIFFLY DISCLAIMS WARRANTIES
            NOT EXPRESSLY PROVIDED IN THESE TERMS, INCLUDING IMPLIED WARRANTIES
            OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </p>

          <p>
            Nothing in these Terms excludes or limits any warranty, right, or
            protection that cannot legally be excluded or limited under the laws
            applicable to you.
          </p>

          <h2>13. Limitation of Liability</h2>

          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, RIFFLY AND ITS
            OWNERS, DIRECTORS, EMPLOYEES, CONTRACTORS, AND SERVICE PROVIDERS
            WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
            EXEMPLARY, OR PUNITIVE DAMAGES ARISING FROM OR RELATED TO YOUR USE
            OF THE SERVICE.
          </p>

          <p>
            This may include, to the extent permitted by law, loss of profits,
            business opportunities, bookings, revenue, data, goodwill, or
            business interruption.
          </p>

          <p>
            Nothing in these Terms limits liability that cannot legally be
            limited or excluded under applicable law.
          </p>

          <h2>14. Account Suspension &amp; Termination</h2>

          <p>
            You may stop using Riffly and request deletion of your account at
            any time.
          </p>

          <p>
            We may suspend or terminate access to your account where reasonably
            necessary if you materially violate these Terms, engage in unlawful
            activity, compromise the security of the Service, or create a
            significant risk of harm to Riffly or other users.
          </p>

          <p>
            Where appropriate and permitted by law, we may provide notice and an
            opportunity to resolve the issue before terminating an account.
          </p>

          <p>
            Termination does not automatically eliminate obligations or rights
            that by their nature should continue after termination.
          </p>

          <h2>15. Account Deletion &amp; Data</h2>

          <p>
            You may request deletion of your Riffly account and associated data
            by contacting us at{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-link">
              {CONTACT.email}
            </a>.
          </p>

          <p>
            Data handling and retention are described in our Privacy Policy.
            Certain information may be retained where required or permitted by
            applicable law, including for security, fraud prevention, dispute
            resolution, or legal compliance.
          </p>

          <h2>16. Governing Law</h2>

          <p>
            These Terms will be governed by the laws applicable to the Riffly
            entity providing the Service, except to the extent that mandatory
            consumer protection laws in your jurisdiction provide otherwise.
          </p>

          <p>
            Any applicable dispute-resolution or jurisdiction provisions will be
            determined by the relevant law and the legal entity operating Riffly.
          </p>

          <h2>17. Changes to These Terms</h2>

          <p>
            We may update these Terms from time to time as Riffly develops or
            as legal and regulatory requirements change.
          </p>

          <p>
            When we make changes, we will update the &ldquo;Last updated&rdquo;
            date displayed at the beginning of these Terms. Where required,
            material changes will be communicated through the Service, website,
            or another appropriate method.
          </p>

          <h2>18. Contact Information</h2>

          <p>
            If you have questions about these Terms, your Riffly account, or
            legal matters relating to the Service, please contact:
          </p>

          <div className="legal-contact-box">
            <p>
              <strong>Riffly Legal Support</strong>
            </p>

            <p>
              Email:{" "}
              <a href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </p>
          </div>

          <div style={{ marginTop: 44 }}>
            <Link href="/" className="btn ghost">
              ← Return to Home
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
