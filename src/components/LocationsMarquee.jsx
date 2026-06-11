import { locations } from "../data/content.js";

export default function LocationsMarquee() {
  return (
    <section className="marquee" aria-label="Featured locations">
      <div className="marquee__track">
        {locations.map((name) => (
          <span key={name}>{name}</span>
        ))}
        {locations.map((name) => (
          <span key={`${name}-dup`} aria-hidden="true">
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
