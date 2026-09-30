import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import Stores from "@/components/Stores";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import RunningOrder from "@/components/RunningOrder";
import { FadeIn, TextReveal, ScaleIn, StaggerContainer, StaggerItem, PageTransition } from "@/components/motion";

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="hero-l">
            <TextReveal as="h1" duration={0.9} distance={24}>
              Your music life, finally in flow.
            </TextReveal>
            <FadeIn delay={0.15} duration={0.7} distance={18}>
              <p className="lede">
                Gigs, setlists, practice and invoices, together in one app built for working musicians.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} duration={0.6} distance={14}>
              <div>
                <Stores />
              </div>
            </FadeIn>
          </div>
          <div className="hero-r">
            <ScaleIn delay={0.2} duration={0.95} initialScale={0.94} distance={24}>
              <ProductImage name="home" priority />
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Audience Statement */}
      <section className="aud" style={{ background: "#000000" }}>
        <div className="wrap">
          <FadeIn distance={20} duration={0.8}>
            <p>
              Made for vocalists, instrumentalists, producers <span>and other music creatives.</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Feature Running Order */}
      <section className="light">
        <div className="wrap">
          <FadeIn distance={18} duration={0.7}>
            <div className="section-head-light">
              <span className="section-eyebrow">BUILT AROUND YOUR RHYTHM</span>
              <h2 style={{ maxWidth: "14ch" }}>The running order of your working life.</h2>
            </div>
          </FadeIn>
          <RunningOrder />
        </div>
      </section>

      {/* Trio Product Visuals */}
      <section>
        <div className="wrap">
          <FadeIn distance={18} duration={0.7}>
            <div className="section-head">
              <span className="section-eyebrow">FOCUSED MOBILE WORKFLOW</span>
              <h2 style={{ maxWidth: "14ch" }}>Backstage, on your phone.</h2>
            </div>
          </FadeIn>
          <StaggerContainer staggerDelay={0.15} className="trio">
            <StaggerItem>
              <div>
                <ProductImage name="gigs" />
                <small>Know where you are playing next.</small>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <ProductImage name="practice" />
                <small>Watch practice add up.</small>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <ProductImage name="profile" />
                <small>Show who you are.</small>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing" style={{ background: "#000000", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="wrap">
          <FadeIn distance={18} duration={0.7}>
            <div className="section-head" style={{ textAlign: "center", maxWidth: "600px", marginInline: "auto" }}>
              <span className="section-eyebrow">SIMPLE PRICING</span>
              <h2>Fair pricing for working musicians.</h2>
              <p className="lede" style={{ marginInline: "auto", marginTop: 14 }}>
                Start for free with core tools, or upgrade to Riffly Pro for unlimited access.
              </p>
            </div>
          </FadeIn>
          <Pricing />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" style={{ background: "#000000", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="wrap">
          <div className="faq-grid">
            <FadeIn distance={18} duration={0.7} className="faq-intro">
              <div>
                <span className="section-eyebrow">QUESTIONS & ANSWERS</span>
                <h2>Common questions about Riffly.</h2>
                <p className="lede" style={{ marginTop: 16 }}>
                  Everything you need to know about what Riffly does and how it fits into your music life.
                </p>
                <div style={{ marginTop: 28 }}>
                  <Link href="/about" className="btn ghost" style={{ fontSize: "0.95rem" }}>
                    Read about our philosophy →
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
