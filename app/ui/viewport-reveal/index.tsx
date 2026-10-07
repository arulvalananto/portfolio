"use client";

import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "framer-motion";

type ViewportRevealProps = PropsWithChildren<{
  as?: "div" | "section";
  className?: string;
  delay?: number;
  id?: string;
}>;

const ViewportReveal = ({
  as = "div",
  children,
  className,
  delay = 0,
  id,
}: ViewportRevealProps) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = as === "section" ? motion.section : motion.div;

  return (
    <Component
      id={id}
      className={`viewport-reveal ${className ?? ""}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ amount: 0.12, once: true }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
};

export default ViewportReveal;
