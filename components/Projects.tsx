
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from './Navbar';
import Footer from './Footer';

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const emptyStateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Title slides up
      tl.fromTo(titleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3 }
      )
      // Divider expands from center
      .fromTo(dividerRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8 },
        "-=0.7"
      )
      // Subtitle fades in
      .fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      // Empty state card rises up
      .fromTo(emptyStateRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2 },
        "-=0.6"
      );

      // Subtle floating animation on the empty state card
      gsap.to(emptyStateRef.current, {
        y: '+=6',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2,
      });

      // Animate the decorative floating elements
      gsap.fromTo('.projects-float',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.15,
          delay: 0.8,
          ease: 'power4.out'
        }
      );

      gsap.to('.projects-float', {
        y: '+=8',
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.5,
          from: 'random'
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <Navbar />

      {/* Decorative floating elements */}
      <div className="absolute top-28 left-[8%] rotate-[-4deg] hidden lg:block">
        <div className="projects-float bg-white rounded-xl shadow-lg p-3 border border-gray-200/50" style={{ opacity: 0 }}>
          <div className="flex items-center gap-2">
            <div className="bg-blue-50 p-2 rounded-lg">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono font-bold text-gray-700">projects/</p>
              <p className="text-[8px] text-gray-500">coming soon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-36 right-[8%] rotate-[3deg] hidden lg:block">
        <div className="projects-float bg-white rounded-xl shadow-lg p-3 border border-gray-200/50" style={{ opacity: 0 }}>
          <div className="flex items-center gap-2">
            <div className="bg-amber-50 p-2 rounded-lg">
              <svg className="w-4 h-4 text-[#d4a84a]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono font-bold text-gray-700">pipeline</p>
              <p className="text-[8px] text-gray-500">in progress</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[25%] left-[10%] rotate-[2deg] hidden xl:block">
        <div className="projects-float bg-white rounded-xl shadow-lg p-3 border border-gray-200/50" style={{ opacity: 0 }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            <span className="text-[8px] text-gray-400 font-mono">terminal</span>
          </div>
          <div className="font-mono text-[8px] leading-relaxed">
            <p><span className="text-green-500">$</span> <span className="text-gray-600">arc list --projects</span></p>
            <p className="text-gray-400">No projects found.</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[30%] right-[10%] rotate-[-2deg] hidden xl:block">
        <div className="projects-float bg-white rounded-xl shadow-lg p-3 border border-gray-200/50" style={{ opacity: 0 }}>
          <div className="flex items-center gap-3">
            <div className="bg-purple-50 p-2 rounded-lg">
              <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[9px] font-mono text-gray-500">main</p>
              <p className="text-[10px] font-mono text-gray-700 font-semibold">0 repos</p>
            </div>
          </div>
        </div>
      </div>

      <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <h1 ref={titleRef} style={{ opacity: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-4">
            Our <span className="text-[#d4a84a]">Projects</span>
          </h1>
          <div ref={dividerRef} style={{ opacity: 0 }} className="w-16 h-[2px] bg-[#d4a84a] mx-auto mb-8 origin-center"></div>
          <p ref={subtitleRef} style={{ opacity: 0 }} className="text-sm md:text-base tracking-wide text-[var(--nav-text-color)] max-w-xl mx-auto mb-20 leading-relaxed">
            A showcase of what we've built, shipped, and learned along the way.
          </p>

          {/* Empty State */}
          <div ref={emptyStateRef} style={{ opacity: 0 }} className="flex flex-col items-center justify-center py-20 border border-dashed border-[var(--text-color)]/15 rounded-2xl bg-[var(--text-color)]/[0.02]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 mb-6 text-[var(--text-color)]/20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
            <h2 className="text-xl md:text-2xl font-serif font-semibold mb-3 tracking-tight">
              No Projects Yet
            </h2>
            <p className="text-sm text-[var(--nav-text-color)] max-w-sm leading-relaxed">
              Projects are currently in the pipeline. Check back soon to see what the ARC community is building.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
