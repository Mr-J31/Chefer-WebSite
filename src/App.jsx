import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "./components/Layout/Spinner.jsx";
import Header from "./components/Layout/Header.jsx";
import Footer from "./components/Layout/Footer.jsx";
import Home from "./components/pages/Home.jsx";
import AboutPage from "./components/pages/AboutPage.jsx";
import MenuPage from "./components/pages/MenuPage.jsx";
import TeamPage from "./components/pages/TeamPage.jsx";
import FeaturePage from "./components/pages/FeaturePage.jsx";
import BlogPage from "./components/pages/BlogPage.jsx";
import TestimonialPage from "./components/pages/TestimonialPage.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import ContactPage from "./components/pages/ContactPage.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFadeOut(true);

      setTimeout(() => {
        setLoading(false);
      }, 800);
    };

    window.addEventListener("load", handleLoad);

    const fallbackTimer = setTimeout(handleLoad, 2000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <Router>
      {loading && <Spinner fadeOut={fadeOut} />}

      {!loading && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/features" element={<FeaturePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/testimonial" element={<TestimonialPage />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
