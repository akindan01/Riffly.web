import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { FadeIn, TextReveal, PageTransition } from "@/components/motion";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "Learn how to request deletion of your Riffly account, what data is permanently removed, what data is retained for legal compliance, and how to contact support.",
};

export default function DeleteAccount() {
  const lastUpdated = "October 6, 2026";

  return (
    <PageTransition>
      <div className="wrap pagehead">
        <FadeIn distance={12} duration={0.6}>
          <span className="section-eyebrow">ACCOUNT &amp; DATA PRIVACY</span>
        </FadeIn>
        <TextReveal as="h1" duration={0.8} distance={20}>
          Delete Your Account
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
            We believe you should always have full control over your personal
            data and account on Riffly.
          </p>

          <p>
            This page explains how to delete your Riffly account, what happens to
            your data when you submit a deletion request, and how to reach out if
            you need assistance.
          </p>

          <h2>How to Delete Your Account</h2>
          <p>
            You can delete your account directly through the Riffly mobile app or
            by submitting an email request to our support team.
          </p>

          <h3>Option 1: Delete from inside the app (Fastest)</h3>
          <ol>
            <li>Open the <strong>Riffly</strong> app on your mobile device.</li>
            <li>Tap your profile avatar or icon to open <strong>Settings</strong>.</li>
            <li>Scroll down to the <strong>Danger Zone</strong> or <strong>Delete Account</strong> section.</li>
            <li>Tap <strong>Delete Account</strong> and follow the on-screen confirmation prompt.</li>
          </ol>

          <h3>Option 2: Request deletion by email</h3>
          <p>
            If you cannot access the Riffly app or have uninstalled it, you can
            request account deletion by sending an email:
          </p>
          <ul>
            <li>
              Email us at{" "}
              <a
                href={`mailto:${CONTACT.email}?subject=Account%20Deletion%20Request`}
                className="text-link"
              >
                {CONTACT.email}
              </a>
            </li>
            <li>Send the email from the address associated with your Riffly account.</li>
            <li>Use the subject line: <strong>&ldquo;Account Deletion Request&rdquo;</strong>.</li>
            <li>Our team will verify your identity and process the deletion within 30 days.</li>
          </ul>

          <h2>What Data Is Deleted</h2>
          <p>
            When your account deletion is processed, the following data is permanently
            and irreversibly removed from active databases:
          </p>
          <ul>
            <li><strong>Account credentials:</strong> Email address and authentication records</li>
            <li><strong>Musician profile:</strong> Name, stage name, bio, avatar, instrument tags, and genres</li>
            <li><strong>Gigs &amp; Setlists:</strong> Scheduled shows, lineups, call times, notes, and songs</li>
            <li><strong>Practice logs:</strong> Practice sessions, history, goals, and streak data</li>
            <li><strong>Invoices:</strong> Created invoice documents and draft client billing records</li>
            <li><strong>Notification tokens:</strong> Push notification identifiers and preferences</li>
            <li><strong>Connections &amp; Network:</strong> Musician connections and roster links</li>
          </ul>

          <h2>What Data May Be Retained</h2>
          <p>
            In accordance with our Privacy Policy and applicable legal regulations,
            certain limited records may be retained after account deletion:
          </p>
          <ul>
            <li>
              <strong>Financial &amp; Tax Records:</strong> If you held a paid subscription or completed transactions, billing records may be retained for up to 7 years to comply with statutory accounting and tax regulations.
            </li>
            <li>
              <strong>Anonymized Analytics:</strong> Aggregated, non-personally identifiable telemetry data used for system stability and service performance may be retained indefinitely.
            </li>
            <li>
              <strong>Security &amp; Fraud Prevention:</strong> Limited log data may be retained temporarily where strictly necessary to resolve disputes, prevent fraud, or comply with lawful requests.
            </li>
          </ul>

          <h2>Data Retention &amp; Deletion Timelines</h2>
          <ul>
            <li><strong>Immediate App Deactivation:</strong> Once requested in-app, your profile and content are immediately removed from public discovery.</li>
            <li><strong>Active Database Deletion:</strong> Personal data is permanently purged from active production systems within 30 days.</li>
            <li><strong>Backup Purging:</strong> Data stored in automated disaster recovery backups is fully overwritten and cycled out within 90 days.</li>
          </ul>

          <h2>Contact Support</h2>
          <p>
            If you have any questions about deleting your account or exercising your
            privacy rights, please contact our team:
          </p>

          <div className="legal-contact-box">
            <p>
              <strong>Riffly Support Team</strong>
            </p>
            <p>
              Email:{" "}
              <a href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </p>
            <p>
              Subject: Account Deletion &amp; Privacy Inquiries
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