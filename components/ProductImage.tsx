"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { IMAGES } from "@/lib/site";
import { easings } from "./motion/tokens";

export default function ProductImage({
  name,
  priority = false,
  sizes = "(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 45vw",
  animate = true,
}: {
  name: keyof typeof IMAGES;
  priority?: boolean;
  sizes?: string;
  animate?: boolean;
}) {
  const { src, alt } = IMAGES[name];
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="mockup-img"
      initial={!animate || shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.85,
        ease: easings.smooth,
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
    >
      <Image
        src={src}
        alt={alt}
        width={900}
        height={1950}
        sizes={sizes}
        priority={priority}
        className="mockup-img-el"
      />
    </motion.div>
  );
}
