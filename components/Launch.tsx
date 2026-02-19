import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface LaunchProps {
  onEnter: () => void;
}

const Launch = ({ onEnter }: LaunchProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const lineLeftRef = useRef<HTMLDivElement>(null);
  const lineRightRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const[Lauch,setLauch] = useState(false)

  const handleEnter = () => {
    // Exit animation timeline
    const exitTl = gsap.timeline({
      onComplete: () => {
        onEnter();
      },
    });

    // Content fades up and out
    exitTl
      .to(contentRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
      })
      // Entire screen fades out
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        "-=0.2"
      );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Set initial states
      gsap.set(
        [
          logoRef.current,
          titleRef.current,
          taglineRef.current,
          dividerRef.current,
          subtitleRef.current,
          btnRef.current,
          lineLeftRef.current,
          lineRightRef.current,
        ],
        { opacity: 0 }
      );

      // Logo fades in and scales
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, delay: 0.3 }
      )
        // Title letters reveal
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 60, letterSpacing: "0.4em" },
          { opacity: 1, y: 0, letterSpacing: "0.25em", duration: 1.4 },
          "-=0.6"
        )
        // Decorative lines expand
        .fromTo(
          [lineLeftRef.current, lineRightRef.current],
          { width: 0, opacity: 0 },
          { width: "60px", opacity: 1, duration: 0.8 },
          "-=0.8"
        )
        // Tagline fades up
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.5"
        )
        // Divider draws in
        .fromTo(
          dividerRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.6 },
          "-=0.4"
        )
        // Subtitle slides up
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        )
        // Button appears
        .fromTo(
          btnRef.current,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          "-=0.3"
        );

      // Subtle ambient pulse on the gold divider
      gsap.to(dividerRef.current, {
        opacity: 0.4,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-white fixed top-0 left-0 h-screen flex items-center justify-center z-50"
      style={{
        background:
          "radial-gradient(ellipse at center, #ffffff 0%, #fafafa 60%, #f5f3ef 100%)",
      }}
    >
      {/* Subtle corner accents */}
      <div
        className="absolute top-0 left-0 w-32 h-32 opacity-[0.03]"
        style={{
          background:
            "linear-gradient(135deg, #d4a84a 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-32 h-32 opacity-[0.03]"
        style={{
          background:
            "linear-gradient(315deg, #d4a84a 0%, transparent 60%)",
        }}
      />

      <div ref={contentRef} className="flex flex-col items-center px-6">
        {/* Logo */}
        <img
          ref={logoRef}
          src="/arc_club_logo.png"
          alt="ARC Club"
          className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] object-contain mb-8"
          style={{ filter: "drop-shadow(0 4px 20px rgba(212, 168, 74, 0.15))" }}
        />

        {/* Club Name */}
        <h1
          ref={titleRef}
          className="text-[clamp(2rem,6vw,4.5rem)] font-serif font-bold tracking-[0.25em] text-[#0a0a0b] leading-none mb-4"
        >
          ARC CLUB
        </h1>

        {/* Decorative lines with tagline */}
        <div className="flex items-center gap-4 mb-8">
          <div
            ref={lineLeftRef}
            className="h-[1px] bg-[#d4a84a]"
            style={{ width: "60px" }}
          />
          <p
            ref={taglineRef}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.45em] text-[#d4a84a] font-medium whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Applied Research &amp; Creation
          </p>
          <div
            ref={lineRightRef}
            className="h-[1px] bg-[#d4a84a]"
            style={{ width: "60px" }}
          />
        </div>

        {/* Gold accent divider */}
        <div
          ref={dividerRef}
          className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#d4a84a] to-transparent mb-8"
          style={{ transformOrigin: "center" }}
        />

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-center text-sm md:text-base text-gray-500 max-w-md leading-relaxed mb-12 font-light"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            letterSpacing: "0.02em",
          }}
        >
          The structured student community for building
          <br />
          <span className="italic text-gray-600">
            and completing projects.
          </span>
        </p>

        {/* Launch Button */}
        <button
          ref={btnRef}
          onClick={handleEnter}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative px-10 py-3.5 rounded-full text-[10px] uppercase tracking-[0.3em] font-semibold cursor-pointer transition-all duration-500 overflow-hidden"
          style={{
            border: "1.5px solid #d4a84a",
            color: isHovered ? "#ffffff" : "#d4a84a",
            background: isHovered ? "#d4a84a" : "transparent",
            boxShadow: isHovered
              ? "0 8px 32px rgba(212, 168, 74, 0.3)"
              : "0 0 0 rgba(212, 168, 74, 0)",
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          Enter
        </button>
      </div>
    </section>
  );
};

export default Launch;