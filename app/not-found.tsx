import Link from "next/link";
import { FadeIn, TextReveal, PageTransition } from "@/components/motion";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="not-found-wrap wrap">
        <div className="not-found-card">
          <FadeIn distance={12} duration={0.5}>
            <div className="not-found-badge">404 ERROR</div>
          </FadeIn>
          <TextReveal as="h1" duration={0.8} distance={18}>
            Looks like you&apos;ve wandered off beat.
          </TextReveal>
          <FadeIn delay={0.15} distance={14} duration={0.6}>
            <p className="lede" style={{ marginTop: 16 }}>
              The page you&apos;re looking for doesn&apos;t exist or may have been moved.
            </p>
          </FadeIn>
          <FadeIn delay={0.25} distance={14} duration={0.6}>
            <div style={{ marginTop: 36 }}>
              <Link href="/" className="btn">
                Back to Riffly
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}
