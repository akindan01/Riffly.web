"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { easings, durations } from "./motion/tokens";

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      width="18"
      height="18"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const shouldReduceMotion = useReducedMotion();

  const proPrice = billingCycle === "monthly" ? "₦2,500" : "₦25,000";
  const proPeriod = billingCycle === "monthly" ? "/month" : "/year";
  const proTagline =
    billingCycle === "monthly"
      ? "Full unlimited access on a flexible monthly basis."
      : "Full unlimited year of Riffly with maximum savings.";
  const proDescription =
    billingCycle === "monthly"
      ? "Power your live performance schedule, daily practice, and music business with zero limits."
      : "The best value for committed active musicians. Enjoy a full year of unlimited tools and save ₦5,000.";

  const freeFeatures = [
    "Unlimited pratice logging",
      "Up to 2 practice goals",
      "Up to 2 active gigs",
      "Up to 2 setlists",
      "Up to 2 invoices",
  ];

  const proFeatures = [
    "Unlimited practice logs & goals",
    "Unlimited gigs & setlists",
    "Unlimited invoice generation",
    "Practice reminders & analytics",
    "Pro badge & increased visibility",
    "Priority support",
    "Business tools",
  ];

  return (
    <div className="pricing-wrapper">
      {/* Billing Interval Toggle */}
      <div className="pricing-toggle-container">
        <div className="pricing-toggle" role="tablist" aria-label="Billing frequency">
          <button
            type="button"
            role="tab"
            aria-selected={billingCycle === "monthly"}
            className={`pricing-toggle-btn ${billingCycle === "monthly" ? "active" : ""}`}
            onClick={() => setBillingCycle("monthly")}
          >
            {billingCycle === "monthly" && !shouldReduceMotion && (
              <motion.span
                layoutId="pricingCyclePill"
                className="pricing-toggle-indicator"
                transition={easings.spring}
              />
            )}
            <span className="pricing-toggle-label">Monthly</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={billingCycle === "yearly"}
            className={`pricing-toggle-btn ${billingCycle === "yearly" ? "active" : ""}`}
            onClick={() => setBillingCycle("yearly")}
          >
            {billingCycle === "yearly" && !shouldReduceMotion && (
              <motion.span
                layoutId="pricingCyclePill"
                className="pricing-toggle-indicator"
                transition={easings.spring}
              />
            )}
            <span className="pricing-toggle-label">
              Yearly <span className="pricing-toggle-discount">Save ₦5,000</span>
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="pricing-grid pricing-grid-two">
        {/* Free Plan Card */}
        <motion.div
          className="pricing-card"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: durations.medium, ease: easings.smooth }}
          whileHover={shouldReduceMotion ? undefined : { y: -4 }}
        >
          <div className="pricing-header">
            <h3 className="pricing-name">Free</h3>
            <p className="pricing-tagline">Essential tools for any musician starting out.</p>
          </div>

          <div className="pricing-figure-row">
            <span className="pricing-amount">Free</span>
          </div>

          <p className="pricing-desc">
            Get organized and keep your core music routine in flow with essential monthly limits.
          </p>

          <ul className="pricing-features" aria-label="Free plan features">
            {freeFeatures.map((feature) => (
              <li key={feature} className="pricing-feature-item">
                <span className="pricing-check">
                  <CheckIcon />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="pricing-cta-wrap">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={easings.spring}
            >
              <Link href="#download" className="btn ghost pricing-btn">
                Get Started
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Pro Plan Card */}
        <motion.div
          className="pricing-card pricing-card-pro"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: durations.medium, delay: 0.1, ease: easings.smooth }}
          whileHover={shouldReduceMotion ? undefined : { y: -5 }}
        >
          <div className="pricing-badge-wrapper">
            <span className="pricing-badge">
              {billingCycle === "yearly" ? "Best Value" : "Pro"}
            </span>
          </div>

          <div className="pricing-header">
            <h3 className="pricing-name">Riffly Pro</h3>
            <AnimatePresence mode="wait">
              <motion.p
                key={billingCycle + "-tag"}
                className="pricing-tagline"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {proTagline}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="pricing-figure-row">
            <AnimatePresence mode="wait">
              <motion.span
                key={proPrice}
                className="pricing-amount"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: easings.smooth }}
              >
                {proPrice}
              </motion.span>
            </AnimatePresence>
            <span className="pricing-period">{proPeriod}</span>
          </div>

          {billingCycle === "yearly" && (
            <motion.div
              className="pricing-savings-pill"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            >
              <span>Save ₦5,000</span>
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            <motion.p
              key={billingCycle + "-desc"}
              className="pricing-desc"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {proDescription}
            </motion.p>
          </AnimatePresence>

          <ul className="pricing-features" aria-label="Pro plan features">
            {proFeatures.map((feature) => (
              <li key={feature} className="pricing-feature-item">
                <span className="pricing-check pro-check">
                  <CheckIcon />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="pricing-cta-wrap">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={easings.spring}
            >
              <Link href="#download" className="btn pricing-btn">
                {billingCycle === "yearly" ? "Go Pro Yearly" : "Go Pro Monthly"}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
