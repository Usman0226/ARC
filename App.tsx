
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IdeaPool from './components/IdeaPool';
import Execution from './components/Execution';
import PlanningPhase from './components/PlanningPhase';
import Blueprinting from './components/Blueprinting';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth entrance for initial elements
    const ctx = gsap.context(() => {
      // General section reveal pattern
      const sections = document.querySelectorAll('.reveal-section');
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen">
      <Navbar />
      <Hero />
      <IdeaPool />
      <Execution />
      <PlanningPhase />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
