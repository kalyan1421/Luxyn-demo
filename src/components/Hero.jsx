import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { hero, brand } from "../data/content.js";
import ArchMotif from "./ArchMotif.jsx";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  const line = (i) => ({
    initial: reduce ? false : { y: "110%" },
    animate: { y: 0 },
    transition: { duration: 0.9, delay: 0.1 + i * 0.12, ease },
  });

  const fade = (i) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.55 + i * 0.1, ease },
  });

  return (
    <section className="hero">
      <div className="hero__content">
        <motion.p className="hero__lockup" {...fade(0)}>
          {brand.lockup}
        </motion.p>
        <h1 className="hero__title">
          <span className="hero__line">
            <motion.span {...line(0)}>{brand.tagline[0]}</motion.span>
          </span>
          <span className="hero__line">
            <motion.span {...line(1)}>
              Your <em>ritual.</em>
            </motion.span>
          </span>
        </h1>
        <motion.p className="hero__sub" {...fade(1)}>
          {hero.sub}
        </motion.p>
        <motion.div className="hero__cta" {...fade(2)}>
          <Link className="btn btn--gold" to={hero.primary.to}>
            {hero.primary.label}
          </Link>
          <Link className="btn btn--outline" to={hero.secondary.to}>
            {hero.secondary.label}
          </Link>
        </motion.div>
      </div>
      <div className="hero__visual">
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease }}
        >
          <ArchMotif tone="light" className="hero__arcs" />
        </motion.div>
        <motion.div
          className="hero__media"
          initial={reduce ? false : { clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <img src={hero.image.src} alt={hero.image.alt} fetchpriority="high" />
        </motion.div>
      </div>
    </section>
  );
}
