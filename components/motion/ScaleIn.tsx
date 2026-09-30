"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";
import { easings, durations } from "./tokens";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  distance?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
  amount?: number | "some" | "all";
}

export default function ScaleIn({
  children,
  delay = 0,
  duration = durations.slow,
  initialScale = 0.95,
  distance = 24,
  className = "",
  style,
  once = true,
  amount = 0.2,
}: ScaleInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{
        opacity: 0,
        scale: initialScale,
        y: distance,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: easings.smooth,
      }}
    >
      {children}
    </motion.div>
  );
}
