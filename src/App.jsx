import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Leasing from "./pages/Leasing.jsx";
import Professionals from "./pages/Professionals.jsx";
import Tour from "./pages/Tour.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leasing" element={<Leasing />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/tour" element={<Tour />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
