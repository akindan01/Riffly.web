import type { Metadata } from "next";
import Link from "next/link";
import Stores from "@/components/Stores";
import { FadeIn, TextReveal, StaggerContainer, StaggerItem, PageTransition } from "@/components/motion";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Riffly exists: built for working musicians to bring gigs, practice, setlists, and invoices into one focused flow.",
};

export default function About() {
  return (
    <PageTransition>
      {/* Header */}
      <div className="wrap pagehead">
        <FadeIn distance={12} duration={0.6}>
          <span className="section-eyebrow">ABOUT RIFFLY</span>
        </FadeIn>
        <TextReveal as="h1" duration={0.85} distance={20}>
          Music is the work. The admin shouldn’t be.
        </TextReveal>
      </div>

      {/* Editorial Content */}
      <section style={{ paddingTop: 0, paddingBottom: 60 }}>
        <div className="wrap prose">
          <FadeIn distance={18} duration={0.8} delay={0.1}>
            <p className="lead-paragraph">
              A working musician’s day is scattered across calendar alerts, group chats, notes apps, spreadsheets, and PDF generators.
            </p>
          </FadeIn>

          <FadeIn distance={18} duration={0.8}>
            <h2>Why Riffly exists</h2>
            <p>
              Most musicians don’t have an office or an assistant. You have soundchecks, rehearsal rooms, late-night call times, setlist revisions, practice routines, and invoices to issue before you get paid.
            </p>
            <p>
              When those essential details are spread across half a dozen disconnected tools, things get lost in the noise. Riffly was created to bring the core rhythm of your music work together in one dedicated place.
            </p>
          </FadeIn>

          <FadeIn distance={18} duration={0.8}>
            <h2>Built for working musicians</h2>
            <p>
              Riffly is designed specifically for working musicians and music creatives—whether you are a vocalist preparing vocal warmups, an instrumentalist tracking daily practice hours, a session player logging multiple recording dates, a producer organizing collaborators, or a bandleader organizing setlists for weekend shows.
            </p>
          </FadeIn>

          <FadeIn distance={18} duration={0.8}>
            <h2>Designed around your real rhythm</h2>
            <p>
              We don’t believe musicians need another generic corporate productivity tool loaded with complex project boards and unnecessary enterprise jargon.
            </p>
            <p>
              Riffly focuses strictly on what matters on stage, in rehearsal, and behind the scenes:
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.08} className="about-list">
            <StaggerItem>
              <li>
                <strong>Gig Calendar &amp; Details:</strong> Clear dates, venues, call times, lineups, and pay notes.
              </li>
            </StaggerItem>
            <StaggerItem>
              <li>
                <strong>Setlists:</strong> Running orders attached directly to the show you’re playing.
              </li>
            </StaggerItem>
            <StaggerItem>
              <li>
                <strong>Practice &amp; Goals:</strong> Habit tracking, streak accountability, and session notes.
              </li>
            </StaggerItem>
            <StaggerItem>
              <li>
                <strong>Invoicing:</strong> Clean invoice generation for your gigs and session work.
              </li>
            </StaggerItem>
            <StaggerItem>
              <li>
                <strong>Musician Profile &amp; Connections:</strong> A clear musical identity to connect with other players.
              </li>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn distance={16} duration={0.75}>
            <p style={{ marginTop: 36 }}>
              No corporate bloat. Just the tools you need to keep your music life moving forward.
            </p>

            <div className="about-actions" style={{ marginTop: 44, display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/features" className="btn">
                Explore All Features →
              </Link>
              <Link href="/#download" className="btn ghost">
                Get Riffly
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Conversion Section */}
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
