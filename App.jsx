import React, { useEffect } from "react";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";


// Import routing components
import { Routes, Route } from "react-router-dom";

// Import Lenis for smooth scrolling
import Lenis from "@studio-freight/lenis";
import { Navbar } from "./components/Navbar";
import Services from "./pages/Services";

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Scroll animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    // <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="min-h-screen bg-transparent">

      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Testimonials />
                <Features />
              </>
            }
          />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
