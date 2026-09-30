import type { Metadata } from "next";
import ProductImage from "@/components/ProductImage";
import Stores from "@/components/Stores";
import FAQ from "@/components/FAQ";
import { FEATURES } from "@/lib/site";
import { FadeIn, TextReveal, ScaleIn, StaggerContainer, StaggerItem, PageTransition } from "@/components/motion";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Riffly's features for working musicians: gig calendar, setlists, practice tracking, invoice generation, musician profiles, and connections.",
};

export default function Features() {
  // Map feature keys to product images where relevant
  const featureImages: Record<string, "gigs" | "practice" | "profile" | undefined> = {
    Gigs: "gigs",
    Practice: "practice",
    Profile: "profile",
  };

  return (
    <PageTransition>
      {/* Page Header */}
      <div className="wrap pagehead">
        <FadeIn distance={12} duration={0.6}>
          <span className="section-eyebrow">CAPABILITIES</span>
        </FadeIn>
        <TextReveal as="h1" duration={0.85} distance={20} style={{ maxWidth: "16ch" }}>
          Everything a working musician needs.
        </TextReveal>
        <FadeIn delay={0.15} distance={16} duration={0.7}>
          <p className="lede" style={{ marginTop: 20 }}>
            Purpose-built tools designed to keep your gigs, preparation, business, and network organized.
          </p>
        </FadeIn>
      </div>

      {/* Feature Sections */}
      <div className="wrap">
        <div className="feature-detail-list">
          {FEATURES.map((f, index) => {
            const hasVisual = featureImages[f.name];
            const isEven = index % 2 === 0;

            return (
              <section key={f.name} className="frow-rich">
                <FadeIn
                  direction={hasVisual ? (isEven ? "right" : "left") : "up"}
                  distance={22}
                  duration={0.65}
                  className="frow-content"
                >
                  <span className="feature-num">0{index + 1}</span>
                  <h2>{f.name}</h2>
                  <p className="feature-tagline">{f.line}</p>
                  <p className="feature-summary">{f.summary}</p>
                  <StaggerContainer staggerDelay={0.06} className="feature-points">
                    {f.points.map((p) => (
                      <StaggerItem key={p} distance={10}>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                          <span className="bullet-dot" aria-hidden="true" />
                          <span>{p}</span>
                        </li>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </FadeIn>

                {hasVisual && (
                  <div className="frow-visual">
                    <ScaleIn delay={0.15} duration={0.85} initialScale={0.95} distance={20}>
                      <ProductImage name={hasVisual} />
                    </ScaleIn>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>

      {/* FAQ on Features Page */}
      <section className="faq-section" style={{ background: "#000000", borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 60 }}>
        <div className="wrap">
          <FadeIn distance={18} duration={0.7}>
            <div className="section-head" style={{ marginBottom: 40, textAlign: "center", maxWidth: "600px", marginInline: "auto" }}>
              <span className="section-eyebrow">FAQ</span>
              <h2>Feature questions &amp; answers</h2>
              <p className="lede" style={{ marginInline: "auto" }}>
                Quick answers about how each feature works in Riffly.
              </p>
            </div>
          </FadeIn>
          <div style={{ maxWidth: "840px", marginInline: "auto" }}>
            <FAQ />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
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
