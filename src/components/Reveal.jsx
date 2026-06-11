import { motion, useReducedMotion } from "motion/react";

/* Shared scroll-reveal wrapper. Communicates reading order as sections
   enter the viewport; collapses to static under prefers-reduced-motion. */
export default function Reveal({ children, delay = 0, className, as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
