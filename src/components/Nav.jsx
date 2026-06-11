import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { nav, brand } from "../data/content.js";
import { ArchGlyph } from "./ArchMotif.jsx";

export function Wordmark() {
  return (
    <span className="wordmark">
      <ArchGlyph className="wordmark__glyph" />
      <span className="wordmark__name">{brand.name}</span>
    </span>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link className="nav__brand" to="/" aria-label="LUXYN home" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>
        <nav className="nav__links" aria-label="Primary">
          {nav.links.map((link) => (
            <NavLink key={link.label} to={link.to} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav__actions">
          <Link className="btn btn--navy btn--sm" to={nav.cta.to}>
            {nav.cta.label}
          </Link>
          <button
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className="nav__mobile" id="mobile-menu" hidden={!open}>
        {nav.links.map((link) => (
          <NavLink key={link.label} to={link.to} end={link.to === "/"} onClick={() => setOpen(false)}>
            {link.label}
          </NavLink>
        ))}
        <Link className="btn btn--navy" to={nav.cta.to} onClick={() => setOpen(false)}>
          {nav.cta.label}
        </Link>
      </div>
    </header>
  );
}
