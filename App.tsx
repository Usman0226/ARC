
import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Launch from './components/Launch';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Home from './pages/Home';
import Navbar from './components/Navbar';

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
    if (showLaunch) return;

    const ctx = gsap.context(() => {
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
      <Navbar />
      {showLaunch && <Launch onEnter={handleEnter} />}
      {!showLaunch && (
        <Routes>
          <Route path="/" element={
           <Home />
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/home" element={ <>
              <Home />
            </>} />
        </Routes>
      )}
    </div>
  );
};

export default App;

