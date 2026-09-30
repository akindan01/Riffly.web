"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";
import { easings, durations } from "./tokens";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

interface TextRevealProps {
  children: ReactNode;
  as?: HeadingTag;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
}

export default function TextReveal({
  children,
  as = "h1",
  delay = 0,
  duration = durations.medium,
  distance = 28,
  className = "",
  style,
  once = true,
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  const motionProps = {
    className,
    style,
    initial: { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once, amount: 0.2 },
    transition: { duration, delay, ease: easings.editorial },
  };

  switch (as) {
    case "h1":
      return <motion.h1 {...motionProps}>{children}</motion.h1>;
    case "h2":
      return <motion.h2 {...motionProps}>{children}</motion.h2>;
    case "h3":
      return <motion.h3 {...motionProps}>{children}</motion.h3>;
    case "h4":
      return <motion.h4 {...motionProps}>{children}</motion.h4>;
    case "p":
      return <motion.p {...motionProps}>{children}</motion.p>;
    case "span":
      return <motion.span {...motionProps}>{children}</motion.span>;
    case "div":
    default:
      return <motion.div {...motionProps}>{children}</motion.div>;
  }
}
