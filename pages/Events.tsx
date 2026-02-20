
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Events: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const emptyStateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(titleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3 }
      )
      .fromTo(dividerRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8 },
        "-=0.7"
      )
      .fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(emptyStateRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2 },
        "-=0.6"
      );

      gsap.to(emptyStateRef.current, {
        y: '+=6',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2,
      });

      gsap.fromTo('.events-float',
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

      gsap.to('.events-float', {
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
      {/* <Navbar /> */}

      {/* Decorative floating elements */}
      <div className="absolute top-28 left-[8%] rotate-[-4deg] hidden lg:block">
        <div className="events-float bg-white rounded-xl shadow-lg p-3 border border-gray-200/50" style={{ opacity: 0 }}>
          <div className="flex items-center gap-2">
            <div className="bg-amber-50 p-2 rounded-lg">
              <svg className="w-4 h-4 text-[#d4a84a]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono font-bold text-gray-700">events/</p>
              <p className="text-[8px] text-gray-500">coming soon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-36 right-[8%] rotate-[3deg] hidden lg:block">
        <div className="events-float bg-white rounded-xl shadow-lg p-3 border border-gray-200/50" style={{ opacity: 0 }}>
          <div className="flex items-center gap-2">
            <div className="bg-blue-50 p-2 rounded-lg">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono font-bold text-gray-700">schedule</p>
              <p className="text-[8px] text-gray-500">planning</p>
            </div>
          </div>
        </div>
      </div>

      

      {/* <div className="absolute bottom-[30%] right-[10%] rotate-[-2deg] hidden xl:block">
        <div className="events-float bg-white rounded-xl shadow-lg p-3 border border-gray-200/50" style={{ opacity: 0 }}>
          <div className="flex items-center gap-3">
            <div className="bg-purple-50 p-2 rounded-lg">
              <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[9px] font-mono text-gray-500">attendees</p>
              <p className="text-[10px] font-mono text-gray-700 font-semibold">TBA</p>
            </div>
          </div>
        </div>
      </div> */}

      <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <h1 ref={titleRef} style={{ opacity: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-4">
            Club's <span className="text-[#d4a84a]">Events</span>
          </h1>
          <div ref={dividerRef} style={{ opacity: 0 }} className="w-16 h-[2px] bg-[#d4a84a] mx-auto mb-8 origin-center"></div>
          <p ref={subtitleRef} style={{ opacity: 0 }} className="text-sm md:text-base tracking-wide text-[var(--nav-text-color)] max-w-xl mx-auto mb-20 leading-relaxed">
            Workshops, hackathons, and gatherings where ideas meet execution.
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
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <h2 className="text-xl md:text-2xl font-serif font-semibold mb-3 tracking-tight">
              No Events Yet
            </h2>
            <p className="text-sm text-[var(--nav-text-color)] max-w-sm leading-relaxed">
              Events are brewing behind the scenes. Stay tuned for workshops, hackathons, and more from the ARC community.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
