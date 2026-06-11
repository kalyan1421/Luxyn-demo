import Reveal from "./Reveal.jsx";
import { quotes } from "../data/content.js";

function Quote({ quote }) {
  return (
    <>
      <blockquote>{quote.text}</blockquote>
      <figcaption>
        {quote.name} <span>{quote.role}</span>
      </figcaption>
    </>
  );
}

export default function Testimonials() {
  return (
    <section className="quotes">
      <Reveal as="figure" className="quotes__featured">
        <Quote quote={quotes.featured} />
      </Reveal>
      <div className="quotes__pair">
        {quotes.pair.map((quote, i) => (
          <Reveal key={quote.name} as="figure" delay={i * 0.1}>
            <Quote quote={quote} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
