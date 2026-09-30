import type { Metadata } from "next";
import Link from "next/link";
import Pricing from "@/components/Pricing";
import Stores from "@/components/Stores";
import FAQ from "@/components/FAQ";
import { FadeIn, TextReveal, PageTransition } from "@/components/motion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for working musicians. Start free or unlock unlimited gigs, setlists, practice logs, and invoices with Riffly Pro.",
};

export default function PricingPage() {
  return (
    <PageTransition>
      {/* Page Header */}
      <div className="wrap pagehead">
        <FadeIn distance={12} duration={0.6}>
          <span className="section-eyebrow">SIMPLE PRICING</span>
        </FadeIn>
        <TextReveal as="h1" duration={0.85} distance={20} style={{ maxWidth: "16ch" }}>
          Built for your stage and your budget.
        </TextReveal>
        <FadeIn delay={0.15} distance={16} duration={0.7}>
          <p className="lede" style={{ marginTop: 20 }}>
            Get started for free with core musician tools, or upgrade to Riffly Pro for unlimited access without complex tiers.
          </p>
        </FadeIn>
      </div>

      {/* Pricing Cards Section */}
      <section style={{ paddingTop: 0, paddingBottom: 80 }}>
        <div className="wrap">
          <Pricing />

          <FadeIn distance={16} duration={0.6} delay={0.2}>
            <div className="pricing-note-box">
              <p>
                <strong>Simple &amp; Transparent:</strong> Subscriptions are managed securely inside the Riffly mobile app via your Google Play or Apple ID account. You can cancel or change your plan at any time.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="faq-section" style={{ background: "#000000", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="wrap">
          <div className="faq-grid">
            <FadeIn distance={18} duration={0.7} className="faq-intro">
              <div>
                <span className="section-eyebrow">QUESTIONS &amp; ANSWERS</span>
                <h2>Pricing questions.</h2>
                <p className="lede" style={{ marginTop: 16 }}>
                  Everything you need to know about plans, limits, and how Riffly Pro works.
                </p>
                <div style={{ marginTop: 28 }}>
                  <Link href="/features" className="btn ghost" style={{ fontSize: "0.95rem" }}>
                    Explore all features →
                  </Link>
                </div>
              </div>
            </FadeIn>
            <div className="faq-accordion-col">
              <FAQ />
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="cta" id="download">
        <FadeIn distance={20} duration={0.8}>
          <div className="wrap cta-wrap">
            <h2>Your music life, finally in flow.</h2>
            <p className="cta-lede">
              Manage your gigs. Track your practice. Keep your music life moving.
            </p>
            <div style={{ marginTop: 32 }}>
              <Stores dark />
            </div>
          </div>
        </FadeIn>
      </section>
    </PageTransition>
  );
}
