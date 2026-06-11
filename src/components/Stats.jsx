import Reveal from "./Reveal.jsx";
import { stats } from "../data/content.js";

export default function Stats() {
  return (
    <section className="stats" id="locations">
      <dl className="stats__grid">
        {stats.map((stat, i) => (
          <Reveal key={stat.value} className="stats__item" delay={i * 0.09}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
