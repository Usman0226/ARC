
import React from 'react';

const Blueprinting: React.FC = () => {
  return (
    <section className="bg-[#0a0a0b] py-32 md:py-48 px-6 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
        
        <div className="relative w-full lg:w-1/2 aspect-video bg-gray-900 overflow-hidden flex items-center justify-center border border-gray-800 group">
          <img 
            src="https://picsum.photos/800/600?grayscale" 
            alt="Process blueprint" 
            className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-2">Minimal</div>
            <div className="text-[8px] uppercase tracking-[0.2em] text-gray-700">Exploded View // Brochure</div>
            <div className="absolute bottom-0 left-0 bg-[#d4a84a] text-[#0a0a0b] px-8 py-4 italic font-serif text-xl translate-y-1/2 -translate-x-4 font-bold">
              "Precision over speed."
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
            Blueprinting <br />
            <span className="italic text-[#d4a84a]">Excellence</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-12 max-w-lg">
            The Planning Phase is not just about scheduling: it's about the architectural design of thought. We ensure that every project has a foundation capable of supporting its eventual legacy.
          </p>
          <button className="flex items-center space-x-4 group">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4a84a] font-bold group-hover:text-[#c89b3c] transition-colors">Explore Methodology</span>
            <span className="text-[#d4a84a] text-xl group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blueprinting;
