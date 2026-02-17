import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Users, Calendar, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PlanningPhase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.planning-timeline-container',
            start: 'top 40%',
            end: 'bottom 60%',
            scrub: 1,
          }
        }
      );

      // Animate items
      gsap.utils.toArray('.planning-timeline-point').forEach((point: any) => {
        gsap.fromTo(point, 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: point,
              start: 'top 80%',
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const phases = [
    {
      title: 'Scope Definition',
      desc: 'Hard boundaries for project research, preventing feature creep and maintaining focus.',
      icon: Target,
    },
    {
      title: 'Resource Allocation',
      desc: 'Deployment of computational power and specialized research talent to key focus areas.',
      icon: Users,
    },
    {
      title: 'Timeline Mapping',
      desc: 'Aggressive but realistic milestone setting with built-in buffer for deep exploration.',
      icon: Calendar,
    },
    {
      title: 'Risk Assessment',
      desc: 'Proactive identification of technical bottlenecks and data limitations before they arise.',
      icon: Shield,
    }
  ];

  return (
    <section ref={containerRef} className="bg-white py-32 md:py-48 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <p className="text-[#d4a84a] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Section 02</p>
          <h2 className="text-6xl md:text-8xl font-serif font-medium leading-[0.9] text-[#0a0a0b]">
            The <br /> 
            <span className="italic text-[#1e3a5f]">Planning Phase</span>
          </h2>
          <p className="mt-12 text-gray-600 italic font-serif text-lg md:text-xl max-w-lg">
            A rigorous roadmap design that accounts for every variable, ensuring a smooth transition from idea to execution.
          </p>
        </div>

        <div className="planning-timeline-container relative">
          {/* Vertical Line - Desktop centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[2px] h-full bg-gray-200 hidden md:block"></div>
          <div 
            ref={lineRef}
            className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[2px] h-full bg-[#4A90E2] origin-top hidden md:block"
          ></div>

          {/* Vertical Line - Mobile left-aligned */}
          <div className="absolute left-7 top-0 w-[2px] h-full bg-gray-200 md:hidden"></div>
          <div 
            className="absolute left-7 top-0 w-[2px] h-full bg-[#4A90E2] origin-top md:hidden"
          ></div>

          <div className="space-y-24 md:space-y-32">
            {phases.map((item, idx) => {
              const Icon = item.icon;
              const isLeft = idx % 2 === 0;
              
              return (
                <div 
                  key={idx} 
                  className={`planning-timeline-point relative flex items-start ${
                    isLeft ? 'md:flex-row md:justify-end md:pr-[calc(50%+3rem)]' : 'md:flex-row-reverse md:justify-end md:pl-[calc(50%+3rem)]'
                  }`}
                >
                  {/* Icon Badge - Desktop centered, Mobile left-aligned */}
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-[#4A90E2] flex items-center justify-center z-10 shadow-lg">
                    <Icon className="w-6 h-6 text-[#4A90E2]" />
                  </div>
                  
                  <div className={`${isLeft ? 'md:text-right' : 'md:text-left'} max-w-md pl-20 md:pl-0`}>
                    <h3 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-[#0a0a0b]">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanningPhase;