import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { services } from "../data/content.js";

export default function Services() {
  return (
    <section className="services">
      <Reveal className="services__header">
        <h2>{services.heading}</h2>
        <p>{services.sub}</p>
      </Reveal>
      <div className="services__grid">
        {services.items.map((item, i) => (
          <Reveal
            key={item.name}
            as="article"
            className={item.tall ? "service service--tall" : "service"}
            delay={i * 0.07}
          >
            <img src={item.image} alt={item.alt} loading="lazy" />
            <div className="service__label">
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="services__cta">
        <Link className="btn btn--outline" to={services.cta.to}>
          {services.cta.label}
        </Link>
      </Reveal>
    </section>
  );
}
