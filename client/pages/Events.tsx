
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Footer from '../components/Footer';

interface Event {
  id: number;
  title: string;
  date: string;
  month: string;
  year: string;
  time: string;
  location: string;
  status: 'upcoming' | 'live' | 'completed';
  description: string;
  highlights: string[];
  tag: string;
  poster: string;
  link?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'ARC Club — Inauguration',
    date: '19',
    month: 'FEB',
    year: '2026',
    time: '03:00 PM – 05:00 PM',
    location: 'Seminar Hall-C',
    status: 'completed',
    description:
      'The very first gathering of the ARC community. Meet the founding team, learn about our vision for research-driven innovation, and discover how you can contribute to projects that matter.',
    highlights: [
      'Club vision & roadmap reveal',
      'Launch of ARC website',
      'Open Q&A with founding members',
      'Team formation & idea pitching',
    ],
    tag: 'Inaugural',
    poster: '/arc_club_inauguration .png',
  },
  {
    id: 2,
    title: 'Developer Essentials : Git,GitHub & GitHub Pages',
    date: '27',
    month: 'FEB',
    year: '2026',
    time: '03:00 PM – 05:00 PM',
    location: 'To be Updated',
    status: 'upcoming',
    description:
      'A hands-on workshop to master Git, GitHub, and GitHub Pages. Learn version control, collaboration, and web deployment.',
    highlights: [
      'Git version control',
      'GitHub collaboration',
      'GitHub Pages deployment',
      'Hands-on coding',
    ],
    tag: 'Developer Essentials',
    poster: '/Workshop-27.jpeg',
    link: 'https://forms.gle/dz617NJzztuFmc9n7',
  },
];

const statusConfig = {
  upcoming: {
    label: 'Upcoming',
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
    dot: 'bg-amber-400',
  },
  live: {
    label: 'Live Now',
    bg: 'bg-green-50',
    text: 'text-green-700',
    border: 'border-green-200',
    dot: 'bg-green-400 animate-pulse',
  },
  completed: {
    label: 'Completed',
    bg: 'bg-gray-50',
    text: 'text-gray-500',
    border: 'border-gray-200',
    dot: 'bg-gray-400',
  },
};

const Events: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'ease-in' } });

      tl.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3 }
      )
        .fromTo(
          dividerRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.8 },
          '-=0.7'
        )
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.5'
        )
        .fromTo(
          '.event-card',
          { y: 60, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' },
          '-=0.5'
        );

      gsap.fromTo(
        '.events-float',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.15,
          delay: 0.8,
          ease: 'power4.out',
        }
      );

      gsap.to('.events-float', {
        y: '+=8',
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { each: 0.5, from: 'random' },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      {/* Decorative floating elements */}
      <div className="absolute top-28 left-[8%] rotate-[-4deg] hidden lg:block">
        <div
          className="events-float bg-white rounded-xl shadow-lg p-3 border border-gray-200/50"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-2">
            <div className="bg-amber-50 p-2 rounded-lg">
              <svg className="w-4 h-4 text-[#d4a84a]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono font-bold text-gray-700">events/</p>
              <p className="text-[8px] text-gray-500">1 scheduled</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-36 right-[8%] rotate-[3deg] hidden lg:block">
        <div
          className="events-float bg-white rounded-xl shadow-lg p-3 border border-gray-200/50"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-2">
            <div className="bg-blue-50 p-2 rounded-lg">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono font-bold text-gray-700">next up</p>
              <p className="text-[8px] text-gray-500">Feb 26, 2026</p>
            </div>
          </div>
        </div>
      </div>

      <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <h1
            ref={titleRef}
            style={{ opacity: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-4"
          >
            Club's <span className="text-[#d4a84a]">Events</span>
          </h1>
          <div
            ref={dividerRef}
            style={{ opacity: 0 }}
            className="w-16 h-[2px] bg-[#d4a84a] mx-auto mb-8 origin-center"
          ></div>
          <p
            ref={subtitleRef}
            style={{ opacity: 0 }}
            className="text-sm md:text-base tracking-wide text-[var(--nav-text-color)] max-w-xl mx-auto mb-16 leading-relaxed"
          >
            Workshops, hackathons, and gatherings where ideas meet execution.
          </p>

          {/* Events Gallery */}
          <div className="space-y-8">
            {events.map((event) => {
              const status = statusConfig[event.status];
              return (
                <div
                  key={event.id}
                  className="event-card group relative text-left border border-[var(--text-color)]/10 rounded-2xl overflow-hidden transition-[border-color,box-shadow] duration-500 hover:border-[#d4a84a]/30 hover:shadow-xl"
                  style={{ opacity: 0 }}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Left: Date block + Content */}
                    <div className="flex-1 flex flex-col md:flex-row">
                      {/* Date block */}
                      <div className="md:w-36 flex-shrink-0 bg-[#1e3a5f] text-white flex flex-row md:flex-col items-center justify-center gap-2 md:gap-0 py-4 md:py-0 px-6 md:px-0">
                        <span className="text-3xl md:text-5xl font-bold leading-none">{event.date}</span>
                        <div className="flex md:flex-col items-center gap-1">
                          <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-medium opacity-80">
                            {event.month}
                          </span>
                          <span className="text-[10px] opacity-50">{event.year}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 md:p-8">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.15em] font-semibold border ${status.bg} ${status.text} ${status.border}`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`}></span>
                            {status.label}
                          </span>
                          <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.15em] font-semibold bg-[#d4a84a]/10 text-[#d4a84a] border border-[#d4a84a]/20">
                            {event.tag}
                          </span>
                        </div>

                        <h2 className="text-xl md:text-2xl font-serif font-bold tracking-tight mb-3 group-hover:text-[#d4a84a] transition-colors duration-300">
                          {event.title}
                        </h2>

                        <div className="flex flex-wrap items-center gap-4 text-[11px] text-[var(--nav-text-color)] mb-5">
                          <span className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            {event.location}
                          </span>
                        </div>

                        <p className="text-sm text-[var(--nav-text-color)] leading-relaxed mb-6 max-w-2xl">
                          {event.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                          {event.highlights.map((h, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-[12px] text-[var(--nav-text-color)]"
                            >
                              <svg
                                className="w-3.5 h-3.5 text-[#d4a84a] flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {h}
                            </div>
                          ))}
                        </div>

                        {event.status === 'upcoming' && (
                          <button
                            onClick={() => {
                              window.open(event.link, '_blank');
                            }}
                           className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#152d47] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                            Mark Your Spot
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Poster */}
                    <div className="lg:w-72 xl:w-80 flex-shrink-0 relative overflow-hidden bg-gray-50">
                      <div className="h-56 lg:h-full w-full relative flex items-center justify-center p-2">
                        <img
                          src={event.poster}
                          alt={`${event.title} poster`}
                          className="rounded-lg w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[var(--bg-color)]/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
