
import React, { useEffect, useRef, useState } from 'react';
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
import Launch from './components/Launch';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [showLaunch, setShowLaunch] = useState(() => {
    return !localStorage.getItem('arc_launched');
  });

  const handleEnter = () => {
    localStorage.setItem('arc_launched', 'true');
    setShowLaunch(false);
  };

  useEffect(() => {
    if (showLaunch) return; // Don't init scroll animations until main site is visible

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

      // Antigravity Color Shift
      console.log('GSAP Antigravity Init'); // Debug log
      if (mainRef.current) {
        gsap.to(mainRef.current, {
          '--bg-color': '#F0F4F8',
          '--bg-color-rgb': '240, 244, 248',
          '--text-color': '#1E3A5F',
          '--nav-text-color': '#1E3A5F',
          '--glow-opacity': 0.1,
          scrollTrigger: {
            trigger: '.idea-pool-trigger',
            start: 'center center',
            endTrigger: '.antigravity-trigger',
            end: 'top center',
            scrub: 1,
          },
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, [showLaunch]);

  return (
    <div ref={mainRef} className="relative min-h-screen">
      {showLaunch && <Launch onEnter={handleEnter} />}
      {!showLaunch && (
        <>
          <Navbar />
          <Hero />
          <IdeaPool />
          <PlanningPhase />
          <Execution />
          <CTA />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;

