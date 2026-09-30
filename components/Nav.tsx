"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { easings } from "./motion/tokens";

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      className="nav"
      initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easings.smooth }}
    >
      <div className="wrap nav-wrap">
        <Link href="/" className="logo-link" aria-label="Riffly Home">
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            transition={easings.spring}
          >
            <Image
              src="/riffly.png"
              alt="Riffly"
              width={97}
              height={40}
              className="logo-img"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop links */}
        <nav className="links" aria-label="Main navigation">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="nav-active-pill"
                    transition={easings.springGentle}
                  />
                )}
              </Link>
            );
          })}
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            transition={easings.spring}
          >
            <Link className="btn btn-nav" href="/#download">
              Get Riffly
            </Link>
          </motion.div>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Mobile navigation drawer with AnimatePresence */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-nav"
              className="mobile-menu open"
              aria-hidden={!isOpen}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: easings.smooth }}
            >
              <nav className="mobile-links" aria-label="Mobile navigation">
                {items.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: shouldReduceMotion ? 0 : 0.05 + index * 0.04,
                        duration: 0.25,
                        ease: easings.smooth,
                      }}
                    >
                      <Link
                        href={item.href}
                        className={`mobile-link ${isActive ? "active" : ""}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 0.22,
                    duration: 0.25,
                    ease: easings.smooth,
                  }}
                >
                  <Link
                    className="btn btn-mobile"
                    href="/#download"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Riffly
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}