"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, ComponentPropsWithoutRef } from "react";
import { easings } from "./tokens";

interface MotionButtonWrapperProps {
  children: ReactNode;
  className?: string;
  scaleHover?: number;
  scaleTap?: number;
}

export function MotionButtonWrapper({
  children,
  className = "",
  scaleHover = 1.02,
  scaleTap = 0.98,
}: MotionButtonWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ scale: scaleHover }}
      whileTap={{ scale: scaleTap }}
      transition={easings.spring}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}
