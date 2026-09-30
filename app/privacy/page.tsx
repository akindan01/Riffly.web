import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { FadeIn, TextReveal, PageTransition } from "@/components/motion";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Riffly Privacy Policy and information on how we handle your music, gig, and practice data.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "September 29, 2026";

  return (
    <PageTransition>
      <div className="wrap pagehead">
        <FadeIn distance={12} duration={0.6}>
          <span className="section-eyebrow">LEGAL &amp; PRIVACY</span>
        </FadeIn>
        <TextReveal as="h1" duration={0.8} distance={20}>
          Privacy Policy
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
            At Riffly, we respect your privacy and are committed to protecting
            the personal information you provide when using our services.
          </p>

          <p>
            This Privacy Policy explains what information Riffly collects,
            how we use and protect that information, the services we use to
            operate Riffly, and the choices available to you regarding your data.
          </p>

          <h2>1. Information We Collect</h2>

          <p>
            We collect information that you provide directly to us, information
            generated through your use of Riffly, and limited technical information
            required to operate and improve the service.
          </p>

          <h3>A. Account Information</h3>
          <ul>
            <li>Email address used to create and authenticate your account</li>
            <li>Display name or artist name</li>
            <li>Account and authentication information</li>
          </ul>

          <h3>B. Musician Profile Information</h3>
          <p>
            If you choose to create a musician profile or make your profile
            discoverable, you may provide information such as:
          </p>

          <ul>
            <li>Instruments or musical roles</li>
            <li>Musical genres and areas of interest</li>
            <li>City, country, or general location</li>
            <li>Artist biography</li>
            <li>Profile photo, avatar, or initials</li>
            <li>Links and other information you choose to add to your profile</li>
          </ul>

          <p>
            Information you choose to make available through your public or
            discoverable musician profile may be visible to other Riffly users.
          </p>

          <h3>C. Gig &amp; Performance Information</h3>
          <p>
            Riffly allows you to organize information relating to your musical
            work. This may include:
          </p>

          <ul>
            <li>Gig dates and times</li>
            <li>Venue or event names</li>
            <li>Call times and performance times</li>
            <li>Lineup or musician information</li>
            <li>Setlists</li>
            <li>Gig notes and other information you choose to record</li>
          </ul>

          <h3>D. Practice Information</h3>
          <p>
            When you use Riffly's practice tools, we may store information such as:
          </p>

          <ul>
            <li>Practice sessions and dates</li>
            <li>Practice duration</li>
            <li>Practice goals</li>
            <li>Practice streaks and history</li>
            <li>Exercise or practice notes</li>
          </ul>

          <h3>E. Invoice Information</h3>
          <p>
            Riffly allows you to create invoices for your musical work. Information
            you enter into invoices may include:
          </p>

          <ul>
            <li>Client or venue names</li>
            <li>Services or performance descriptions</li>
            <li>Agreed fees or amounts</li>
            <li>Payment notes</li>
            <li>Other information you choose to include in an invoice</li>
          </ul>

          <p>
            You are responsible for ensuring that information you enter about
            clients, venues, or other individuals is information you are permitted
            to use and store.
          </p>

          <h3>F. Subscription &amp; Payment Information</h3>
          <p>
            If you subscribe to a paid Riffly plan, payment and subscription
            information may be processed by third-party payment and platform
            providers, including Paystack, Apple, Google, or other providers
            applicable to the payment method you use.
          </p>

          <p>
            Riffly does not intentionally store your complete payment card number
            or card security code on its own servers. Payment details are handled
            by the applicable payment provider under its own privacy and security
            practices.
          </p>

          <h3>G. Technical Information</h3>
          <p>
            When you use Riffly, limited technical information may be processed
            to provide, secure, maintain, and troubleshoot the service. This may
            include:
          </p>

          <ul>
            <li>Device type and operating system information</li>
            <li>Application version</li>
            <li>Technical logs and error information</li>
            <li>Crash and performance information</li>
            <li>Information required to deliver push notifications</li>
          </ul>

          <p>
            We only collect technical information that is reasonably necessary
            for operating and improving Riffly.
          </p>

          <h2>2. How We Use Your Information</h2>

          <p>
            We use information collected through Riffly for purposes including:
          </p>

          <ul>
            <li>Creating and managing your Riffly account</li>
            <li>Authenticating your access to the application</li>
            <li>Storing and synchronizing your information across supported devices</li>
            <li>Managing gigs, setlists, practice sessions, and invoices</li>
            <li>Generating documents and features you request</li>
            <li>Enabling musician discovery and networking when you choose to participate</li>
            <li>Sending relevant reminders and service notifications</li>
            <li>Processing subscriptions and payments</li>
            <li>Providing customer support</li>
            <li>Detecting, preventing, and addressing security or technical issues</li>
            <li>Improving the reliability and functionality of Riffly</li>
            <li>Complying with applicable legal obligations</li>
          </ul>

          <h2>3. Musician Discovery &amp; Networking</h2>

          <p>
            Riffly includes features that may allow musicians and music creatives
            to discover and connect with one another.
          </p>

          <p>
            You control whether your musician profile is made available for
            discovery through the features and settings provided in the app.
            Information that you choose to make discoverable may be viewed by
            other Riffly users.
          </p>

          <p>
            Your private gig records, practice history, and invoices are not
            automatically made public simply because you use Riffly's networking
            features.
          </p>

          <h2>4. Data Storage &amp; Third-Party Services</h2>

          <p>
            Riffly relies on trusted third-party service providers to operate
            parts of the application. Depending on the features you use, these
            providers may process information on our behalf.
          </p>

          <h3>Supabase</h3>
          <p>
            Riffly uses Supabase for services including user authentication,
            database infrastructure, and secure storage of application data.
            Information stored through these services is protected using
            appropriate security measures, including encryption in transit.
          </p>

          <h3>Payment &amp; Subscription Providers</h3>
          <p>
            Riffly may use payment and subscription providers such as Paystack,
            Apple, Google, and RevenueCat to process payments, manage
            subscriptions, and maintain subscription entitlements where applicable.
          </p>

          <p>
            These providers may process information according to their own privacy
            policies and terms of service.
          </p>

          <h3>App Stores</h3>
          <p>
            Riffly is distributed through third-party app stores such as the
            Apple App Store and Google Play. These platforms may independently
            collect and process information relating to app downloads, purchases,
            device usage, and accounts according to their respective privacy
            policies.
          </p>

          <p>
            We do not sell your personal information, gig information, practice
            records, musician profile information, or invoice data to advertisers
            or data brokers.
          </p>

          <h2>5. Data Security</h2>

          <p>
            We use reasonable technical and organizational measures designed to
            protect your information from unauthorized access, alteration,
            disclosure, or destruction.
          </p>

          <p>
            These measures may include encrypted connections, access controls,
            authentication safeguards, and security practices provided by the
            infrastructure and service providers we use.
          </p>

          <p>
            However, no internet-based service can guarantee absolute security.
            You should use a strong, unique password and protect your account
            credentials.
          </p>

          <h2>6. Data Retention</h2>

          <p>
            We generally retain account and user-created information for as long
            as your account remains active or for as long as reasonably necessary
            to provide the service.
          </p>

          <p>
            If you request deletion of your account, we will take reasonable steps
            to delete or anonymize information associated with your account,
            subject to information that we are required or permitted to retain
            for legal, security, fraud-prevention, dispute-resolution, or other
            legitimate purposes.
          </p>

          <h2>7. Your Privacy Rights</h2>

          <p>
            Depending on where you live and the laws applicable to you, you may
            have rights relating to your personal information, including the right
            to:
          </p>

          <ul>
            <li>Request access to personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your account and personal information</li>
            <li>Request a copy or export of certain information</li>
            <li>Object to or restrict certain forms of processing</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>

          <p>
            To exercise an applicable privacy right, contact us using the email
            address provided below. We may need to verify your identity before
            completing certain requests.
          </p>

          <h2>8. Account &amp; Data Deletion</h2>

          <p>
            You may request deletion of your Riffly account and associated personal
            information by contacting us at{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-link">
              {CONTACT.email}
            </a>.
          </p>

          <p>
            When processing a deletion request, we may retain limited information
            where required by law or where reasonably necessary for security,
            fraud prevention, dispute resolution, or other legitimate purposes.
          </p>

          <h2>9. Children's Privacy</h2>

          <p>
            Riffly is designed for musicians and music creatives and is not
            directed toward children. We do not knowingly collect personal
            information from children where such collection is prohibited by
            applicable law.
          </p>

          <p>
            If you believe that a child has provided personal information to
            Riffly without appropriate authorization, please contact us so that
            we can investigate and take appropriate action.
          </p>

          <h2>10. International Data Processing</h2>

          <p>
            Riffly and the third-party providers we use may process or store
            information in countries other than the country in which you live.
            Where required by applicable law, we take appropriate measures
            regarding international transfers of personal information.
          </p>

          <h2>11. Third-Party Links</h2>

          <p>
            Riffly may contain links to third-party websites, services, or
            platforms. This Privacy Policy does not apply to those third-party
            services. We encourage you to review their privacy policies before
            providing them with personal information.
          </p>

          <h2>12. Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy from time to time to reflect changes
            to Riffly, our services, or applicable legal requirements.
          </p>

          <p>
            When we make changes, we will update the "Last updated" date at the
            beginning of this policy. Where required, we will provide additional
            notice through the Riffly application or our website.
          </p>

          <h2>13. Contact Us</h2>

          <p>
            If you have questions about this Privacy Policy, your personal
            information, or a privacy request, please contact us:
          </p>

          <div className="legal-contact-box">
            <p>
              <strong>Riffly Privacy Team</strong>
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
