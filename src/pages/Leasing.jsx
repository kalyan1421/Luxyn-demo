import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import TourBand from "../components/TourBand.jsx";
import { leasing } from "../data/content.js";

export default function Leasing() {
  return (
    <>
      <section className="page-head">
        <Reveal as="h1">{leasing.heading}</Reveal>
        <Reveal as="p" delay={0.08}>
          {leasing.sub}
        </Reveal>
      </section>

      <section className="suites">
        {leasing.suites.map((suite, i) => (
          <Reveal key={suite.name} as="article" className="suite-card" delay={i * 0.08}>
            <div className="suite-card__media arch-img">
              <img src={suite.image} alt={suite.alt} loading="lazy" />
            </div>
            <h2>{suite.name}</h2>
            <p className="suite-card__blurb">{suite.blurb}</p>
            <ul className="suite-card__points">
              {suite.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link className="btn btn--outline btn--sm" to="/tour">
              Book a Tour
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="included">
        <Reveal as="h2">{leasing.included.heading}</Reveal>
        <div className="included__grid">
          {leasing.included.items.map((item, i) => (
            <Reveal key={item.title} className="included__item" delay={i * 0.05}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <TourBand />
    </>
  );
}
