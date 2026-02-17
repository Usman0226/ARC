
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-bg-text',
        { opacity: 0.02, scale: 0.8 },
        {
          opacity: 0.05,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-white py-48 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="cta-bg-text absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[30vw] font-serif font-bold tracking-tighter text-gray">ARC</span>
      </div>

      <div className="relative z-10 max-w-2xl">
        <div className="inline-block border-2 border-[#d4a84a] rounded-full px-6 py-2 mb-12 text-[10px] uppercase tracking-[0.4em] font-medium text-[#d4a84a]">
          Idea Pool is Open now
        </div>
        
        <h2 className="text-7xl md:text-9xl font-serif font-bold tracking-tighter text-[#0a0a0b] mb-12 leading-[0.9]">
          Submit  <br />
          <span className="italic text-[#1e3a5f] italic">Your Ideas</span>
        </h2>
        
        <p className="text-gray-600 text-sm md:text-base mb-16 italic font-serif leading-relaxed px-8">
          Act<span className="text-[30px] text-[#1b1b1b] ">.</span> Refine<span className="text-[30px] text-[#1b1b1b] ">.</span>Construct
        </p>

        <button className=" rounded-full bg-[#1e3a5f] text-white px-16 py-6 text-[15px] uppercase tracking-[0.4em] font-bold hover:bg-[#152d47] transition-all shadow-2xl">
          Participate
        </button>
      </div>
    </section>
  );
};

export default CTA;
