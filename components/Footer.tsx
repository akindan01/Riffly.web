"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { STORES, LEGAL, SOCIAL, CONTACT } from "@/lib/site";
import { easings } from "./motion/tokens";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.footer
      className="foot"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: easings.smooth }}
    >
      <div className="wrap">
        <div className="fgrid">
          {/* Brand & Tagline */}
          <div className="foot-brand">
            <Link href="/" className="logo-link" aria-label="Riffly Home">
              <Image
                src="/riffly.png"
                alt="Riffly"
                width={86}
                height={36}
                className="logo-img"
              />
            </Link>
            <p className="tag">Your music life, finally in flow.</p>
            <p className="foot-contact">
              Support: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer Navigation">
            <h4>Explore</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/features">Features</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </nav>

          {/* App Availability */}
          <div>
            <h4>Get the App</h4>
            <ul>
              {Object.values(STORES).map((s) => (
                <li key={s.label}>
                  <a href={s.href}>
                    {s.label}
                    {s.status && !s.isLive && (
                      <span className="foot-badge"> {s.status}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4>Connect</h4>
            <ul>
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="foot-bottom">
          <p className="copy">
            &copy; {currentYear} Riffly. All rights reserved.
          </p>
          <div className="legal-links">
            <Link href={LEGAL.privacy}>Privacy Policy</Link>
            <span className="dot-sep">&bull;</span>
            <Link href={LEGAL.terms}>Terms of Service</Link>
            <span className="dot-sep">&bull;</span>
            <Link href={LEGAL.deleteAccount}>Delete Account</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
