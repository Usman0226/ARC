
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-color)] border-t border-[var(--text-color)]/10 py-12 px-6 md:px-12 transition-colors duration-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-serif font-bold tracking-tighter text-[var(--text-color)]">ARC CLUB - MITS</div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <a href="#" className="text-[9px] uppercase tracking-[0.2em] font-medium text-gray-500 hover:text-[#d4a84a] transition-colors">GitHub</a>
          <a href="#" className="text-[9px] uppercase tracking-[0.2em] font-medium text-gray-500 hover:text-[#d4a84a] transition-colors">LinkedIn</a>
          <a href="#" className="text-[9px] uppercase tracking-[0.2em] font-medium text-gray-500 hover:text-[#d4a84a] transition-colors"></a>
        </div>

        <div className="text-[9px] uppercase tracking-[0.2em] font-medium text-gray-400">
          © {currentYear} ARC — APPLIED RESEARCH & CREATION
        </div>
      </div>
    </footer>
  );
};

export default Footer;
