"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { easings } from "./tokens";

export function PageTransition({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{
        duration: 0.35,
        ease: easings.smooth,
      }}
    >
      {children}
    </motion.div>
  );
}
