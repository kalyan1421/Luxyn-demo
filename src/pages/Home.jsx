import Hero from "../components/Hero.jsx";
import Stats from "../components/Stats.jsx";
import Services from "../components/Services.jsx";
import Suite from "../components/Suite.jsx";
import Testimonials from "../components/Testimonials.jsx";
import LocationsMarquee from "../components/LocationsMarquee.jsx";
import TourBand from "../components/TourBand.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Suite />
      <Testimonials />
      <LocationsMarquee />
      <TourBand />
    </>
  );
}
