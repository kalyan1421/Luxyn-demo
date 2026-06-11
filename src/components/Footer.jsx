import { Link } from "react-router-dom";
import { footer, brand } from "../data/content.js";
import { Wordmark } from "./Nav.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <Link className="footer__wordmark" to="/">
            <Wordmark />
          </Link>
          <p className="footer__lockup">{brand.lockup}</p>
          <p>{footer.blurb}</p>
          <div className="footer__social">
            {footer.social.map((s) => (
              <a key={s.name} href={s.href} aria-label={s.name}>
                <img
                  src={`https://cdn.simpleicons.org/${s.slug}/C2A06B`}
                  alt=""
                  width="18"
                  height="18"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
        {footer.columns.map((col) => (
          <div className="footer__col" key={col.title}>
            <h4>{col.title}</h4>
            {col.links.map((link) => (
              <Link key={link.label} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="footer__col">
          <h4>Contact</h4>
          <address>
            {footer.contact.address[0]}
            <br />
            {footer.contact.address[1]}
          </address>
          <a href={`tel:+1${footer.contact.phone.replaceAll(".", "")}`}>{footer.contact.phone}</a>
          <a href={`mailto:${footer.contact.email}`}>{footer.contact.email}</a>
        </div>
      </div>
      <div className="footer__legal">
        <p>{footer.legal.note}</p>
        <div>
          {footer.legal.links.map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
