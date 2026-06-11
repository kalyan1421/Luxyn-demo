import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import { professionals } from "../data/content.js";

export default function Professionals() {
  const [category, setCategory] = useState("All");

  const visible =
    category === "All"
      ? professionals.people
      : professionals.people.filter((p) => p.craft === category);

  return (
    <>
      <section className="page-head">
        <Reveal as="h1">{professionals.heading}</Reveal>
        <Reveal as="p" delay={0.08}>
          {professionals.sub}
        </Reveal>
      </section>

      <section className="pros">
        <div className="pros__filters" role="group" aria-label="Filter by craft">
          {professionals.categories.map((cat) => (
            <button
              key={cat}
              className={cat === category ? "chip chip--active" : "chip"}
              aria-pressed={cat === category}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="pros__grid">
          {visible.map((person, i) => (
            <Reveal key={person.name} as="article" className="pro-card" delay={i * 0.05}>
              <div className="pro-card__media arch-img">
                <img src={person.photo} alt={`Portrait of ${person.name}`} loading="lazy" />
              </div>
              <h2>{person.name}</h2>
              <p className="pro-card__role">{person.role}</p>
              <p className="pro-card__meta">{person.location}</p>
              <a
                className="pro-card__book"
                href={`mailto:hello@luxyn.com?subject=Booking%20with%20${encodeURIComponent(person.name)}`}
              >
                Book with {person.name.split(" ")[0]}
              </a>
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="pros__empty">
            <p>No professionals in this craft yet. Choose another craft, or check back soon.</p>
          </div>
        )}
      </section>
    </>
  );
}
