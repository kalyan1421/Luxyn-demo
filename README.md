# LUXYN - Salon · Wellness · Spa

Multi-page marketing site for LUXYN, private salon and wellness suites for
independent professionals. Light Warm White / Ivory theme, Midnight Navy ink,
Champagne Gold and Sage Mist accents, Cormorant Garamond + Inter, and the
arch motif from the logo carried through images, ornaments and the booking
confirmation.

## Stack

- React 18 + Vite 6
- React Router 7 (four routes)
- Motion (`motion/react`) for entrances, scroll reveals and parallax
- Hand-crafted CSS design system (`src/index.css`), no UI framework

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Pages and flow

```
/                Home: hero, stats, crafts grid, suite preview, quotes,
                 locations marquee, tour band
/leasing         Suite types (Studio, Double, Wellness Room) + what's included
/professionals   Directory with craft filters and per-pro booking links
/tour            Tour request form: validation, errors, success state
```

Conversion paths: Lease a Suite → /leasing → Book a Tour → /tour.
Find a Pro → /professionals → book direct with a professional.

## Structure

```
index.html                  Vite entry (fonts, meta)
src/
  main.jsx                  React mount
  App.jsx                   Router, scroll restoration, page shell
  index.css                 LUXYN design tokens + all layout/typography
  data/content.js           Every string and image URL on the site
  pages/
    Home.jsx  Leasing.jsx  Professionals.jsx  Tour.jsx
  components/
    Nav.jsx                 Fixed nav, active route states, mobile menu
    Hero.jsx                Split hero, arch image, entrance animation
    ArchMotif.jsx           Concentric arch ornament + wordmark glyph
    Stats.jsx  Services.jsx  Suite.jsx  Testimonials.jsx
    LocationsMarquee.jsx  TourBand.jsx  Footer.jsx  Reveal.jsx
```

To change copy, imagery, professionals or suite types, edit
`src/data/content.js` only.
