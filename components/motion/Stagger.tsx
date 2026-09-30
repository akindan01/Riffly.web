"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode, CSSProperties } from "react";
import { easings, durations, staggerDelays } from "./tokens";

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
  amount?: number | "some" | "all";
}

export function StaggerContainer({
  children,
  staggerDelay = staggerDelays.normal,
  delayChildren = 0,
  className = "",
  style,
  once = true,
  amount = 0.2,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  distance?: number;
  duration?: number;
}

export function StaggerItem({
  children,
  className = "",
  style,
  distance = 18,
  duration = durations.normal,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: distance },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: easings.smooth,
      },
    },
  };

  return (
    <motion.div className={className} style={style} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
