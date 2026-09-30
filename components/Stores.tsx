"use client";

import { motion, useReducedMotion } from "framer-motion";
import { STORES } from "@/lib/site";
import { easings } from "./motion/tokens";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" className="store-icon">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.61 1.35-.55.63-1.03 1.68-.9 2.7.99.08 2.01-.5 2.59-1.2" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" className="store-icon">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.008 2.008 0 0 1-.61-1.46V3.274c0-.573.23-1.096.61-1.46zm11.242 11.245l2.254-2.255-11.83-6.83 9.576 9.085zm2.96-2.962c.492.285.789.789.789 1.353s-.297 1.068-.79 1.353l-1.905 1.099-2.51-2.51 2.51-2.51 1.906 1.107zm-2.96 2.963l-9.576 9.085 11.83-6.83-2.254-2.255z" />
    </svg>
  );
}

export default function Stores({
  dark = false,
  showStatus = true,
}: {
  dark?: boolean;
  showStatus?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="stores">
      {/* Google Play - Out Now */}
      <motion.a
        href={STORES.android.href}
        target={STORES.android.href.startsWith("http") ? "_blank" : undefined}
        rel={STORES.android.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`btn ${dark ? "dark" : ""} store-btn store-btn-active`}
        aria-label="Google Play (Out now)"
        whileHover={shouldReduceMotion ? undefined : { scale: 1.025, y: -2 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        transition={easings.spring}
      >
        <GooglePlayIcon />
        <span className="store-btn-body">
          <span className="store-btn-sub">Get it on</span>
          <span className="store-btn-title">Google Play</span>
        </span>
        {showStatus && <span className="store-pill live">Out now</span>}
      </motion.a>

      {/* App Store - Coming Soon */}
      <motion.a
        href={STORES.ios.href}
        className={`btn ${dark ? "dark" : "ghost"} store-btn store-btn-pending`}
        aria-label="App Store (Coming soon)"
        whileHover={shouldReduceMotion ? undefined : { scale: 1.025, y: -2 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        transition={easings.spring}
      >
        <AppleIcon />
        <span className="store-btn-body">
          <span className="store-btn-sub">Download on</span>
          <span className="store-btn-title">App Store</span>
        </span>
        {showStatus && <span className="store-pill pending">Coming soon</span>}
      </motion.a>
    </div>
  );
}
