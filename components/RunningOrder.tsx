"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FEATURES } from "@/lib/site";
import { easings } from "./motion/tokens";

export default function RunningOrder() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="order">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
      >
        {FEATURES.map((f, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <motion.div
              key={f.name}
              className={`row running-order-row ${isHovered ? "row-hovered" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: easings.smooth,
              }}
              whileHover={shouldReduceMotion ? undefined : { x: 6 }}
            >
              <div className="running-order-header">
                <span className="running-order-num">0{index + 1}</span>
                <h3>{f.name}</h3>
              </div>
              <p>{f.line}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
