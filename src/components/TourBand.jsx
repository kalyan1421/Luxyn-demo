import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import ArchMotif from "./ArchMotif.jsx";
import { tourBand } from "../data/content.js";

export default function TourBand() {
  return (
    <section className="band">
      <ArchMotif tone="dark" className="band__arcs" />
      <div className="band__content">
        <Reveal as="h2">{tourBand.heading}</Reveal>
        <Reveal as="p" delay={0.1}>
          {tourBand.sub}
        </Reveal>
        <Reveal delay={0.2}>
          <Link className="btn btn--gold" to={tourBand.cta.to}>
            {tourBand.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
