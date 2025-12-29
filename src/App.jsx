import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Prospector from "./components/Prospector";
import Works from "./components/Works";
import Sales from "./components/Sales";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Support from "./components/Support";
import Join from "./components/Join";
import FloatingJoin from "./components/FloatingJoin";

const App = () => {
  const [showFloating, setShowFloating] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      let shouldShow = scrollY > 600;

      if (footerRef.current) {
        const footerTop =
          footerRef.current.getBoundingClientRect().top + window.scrollY;

        const floatingHeight = 140;
        const viewportBottom = scrollY + window.innerHeight;

        if (viewportBottom - floatingHeight >= footerTop) {
          shouldShow = false;
        }
      }

      setShowFloating(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Slider />
      <Prospector />
      <Works />
      <Testimonial />
      <Sales />
      <Support />
      <Join />
      <FloatingJoin visible={showFloating} />
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
};

export default App;
