import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Reveal from "./Reveal.jsx";
import { suitePreview } from "../data/content.js";

export default function Suite() {
  const mediaRef = useRef(null);
  const reduce = useReducedMotion();

  /* Image is 112% tall and slides within its arch mask as the section
     scrolls. Motion values run outside the React render cycle. */
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "0%"]);

  return (
    <section className="suite">
      <div className="suite__media arch-img" ref={mediaRef}>
        <motion.img
          src={suitePreview.image.src}
          alt={suitePreview.image.alt}
          loading="lazy"
          style={reduce ? undefined : { y }}
        />
      </div>
      <div className="suite__content">
        <Reveal as="h2">{suitePreview.heading}</Reveal>
        <Reveal as="p" className="suite__lede">
          {suitePreview.lede}
        </Reveal>
        <ul className="suite__features">
          {suitePreview.features.map((feature) => (
            <Reveal key={feature.title} as="li">
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <Link className="btn btn--gold" to={suitePreview.cta.to}>
            {suitePreview.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
