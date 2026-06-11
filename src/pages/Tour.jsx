import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import ArchMotif from "../components/ArchMotif.jsx";
import { tour } from "../data/content.js";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  location: "",
  date: "",
  suite: "",
};

export default function Tour() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((errs) => ({ ...errs, [field]: undefined }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Enter your name so we know who to expect.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = "Enter a valid email address. We send the confirmation there.";
    if (!form.location) errs.location = "Choose the location you want to tour.";
    if (!form.date) errs.date = "Pick a date that works for you.";
    return errs;
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSent(true);
  };

  return (
    <>
      <section className="page-head">
        <Reveal as="h1">{tour.heading}</Reveal>
        <Reveal as="p" delay={0.08}>
          {tour.sub}
        </Reveal>
      </section>

      <section className="tour">
        <div className="tour__aside">
          <ul className="tour__expectations">
            {tour.expectations.map((item) => (
              <Reveal key={item.title} as="li">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="tour__panel" delay={0.1}>
          {sent ? (
            <div className="tour__success" role="status">
              <ArchMotif tone="light" className="tour__success-arcs" />
              <h2>{tour.success.heading}</h2>
              <p>{tour.success.body}</p>
              <button
                className="btn btn--outline btn--sm"
                onClick={() => {
                  setForm(initialForm);
                  setSent(false);
                }}
              >
                Book another tour
              </button>
            </div>
          ) : (
            <form className="form" onSubmit={submit} noValidate>
              <div className="form__field">
                <label htmlFor="tour-name">Full name</label>
                <input
                  id="tour-name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={set("name")}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <p className="form__error">{errors.name}</p>}
              </div>

              <div className="form__field">
                <label htmlFor="tour-email">Email</label>
                <input
                  id="tour-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={set("email")}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <p className="form__error">{errors.email}</p>}
              </div>

              <div className="form__field">
                <label htmlFor="tour-phone">
                  Phone <span className="form__optional">optional</span>
                </label>
                <input
                  id="tour-phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={set("phone")}
                />
              </div>

              <div className="form__row">
                <div className="form__field">
                  <label htmlFor="tour-location">Location</label>
                  <select
                    id="tour-location"
                    value={form.location}
                    onChange={set("location")}
                    aria-invalid={Boolean(errors.location)}
                  >
                    <option value="">Choose a location</option>
                    {tour.locationsOptions.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                  {errors.location && <p className="form__error">{errors.location}</p>}
                </div>

                <div className="form__field">
                  <label htmlFor="tour-date">Preferred date</label>
                  <input
                    id="tour-date"
                    type="date"
                    value={form.date}
                    onChange={set("date")}
                    aria-invalid={Boolean(errors.date)}
                  />
                  {errors.date && <p className="form__error">{errors.date}</p>}
                </div>
              </div>

              <div className="form__field">
                <label htmlFor="tour-suite">
                  Suite type <span className="form__optional">optional</span>
                </label>
                <select id="tour-suite" value={form.suite} onChange={set("suite")}>
                  <option value="">Not sure yet</option>
                  {tour.suiteOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <button className="btn btn--navy form__submit" type="submit">
                Book a Tour
              </button>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}
