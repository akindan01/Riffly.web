"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/site";
import { easings } from "./motion/tokens";

export default function FAQ({ items = FAQ_ITEMS }: { items?: typeof FAQ_ITEMS }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrap">
      <div className="faq-list">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const itemId = `faq-item-${index}`;
          const contentId = `faq-content-${index}`;

          return (
            <motion.div
              key={item.question}
              className={`faq-item ${isOpen ? "open" : ""}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.4,
                delay: shouldReduceMotion ? 0 : index * 0.04,
                ease: easings.smooth,
              }}
            >
              <h3>
                <button
                  type="button"
                  id={itemId}
                  className="faq-trigger"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="faq-question">{item.question}</span>
                  <motion.span
                    className="faq-icon"
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={shouldReduceMotion ? { duration: 0 } : easings.spring}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" className="v-line" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </motion.span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={contentId}
                    role="region"
                    aria-labelledby={itemId}
                    className="faq-content"
                    initial={shouldReduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { height: "auto", opacity: 1 }
                    }
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{
                      duration: 0.3,
                      ease: easings.smooth,
                    }}
                  >
                    <div className="faq-body">
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
