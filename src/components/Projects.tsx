"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { projects } from "@/src/data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024);

  const total = projects.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getIndex = (offset: number) =>
    (activeIndex + offset + total) % total;

  const navigate = (dir: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + dir + total) % total);
    setTimeout(() => setIsAnimating(false), 380);
  };

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      navigate(1);
    } else if (isRightSwipe) {
      navigate(-1);
    }
  };

  // Posisi kartu: left-far, left, center, right, right-far
  const cardPositions = [-2, -1, 0, 1, 2];

  const getCardStyle = (offset: number): React.CSSProperties => {
    const isMobile = windowWidth < 768;
    const absOffset = Math.abs(offset);
    
    const scale = offset === 0 ? 1 : absOffset === 1 ? (isMobile ? 0.82 : 0.85) : (isMobile ? 0.65 : 0.72);
    const baseTranslateX = isMobile ? 120 : 260;
    const translateX = offset * baseTranslateX;
    const translateZ = offset === 0 ? 0 : absOffset === 1 ? -90 : -180;
    const rotateY = offset * (isMobile ? -10 : -8);
    
    const opacity = absOffset > 2 ? 0 : absOffset === 2 ? (isMobile ? 0 : 0.45) : absOffset === 1 ? 0.75 : 1;
    const zIndex = offset === 0 ? 30 : absOffset === 1 ? 20 : 10;

    return {
      position: "absolute",
      transform: `translateX(${translateX}px) scale(${scale}) perspective(1200px) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
      opacity,
      zIndex,
      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      transformOrigin: "center center",
      pointerEvents: offset === 0 ? "auto" : "none",
    };
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen md:h-screen md:max-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center py-12 md:py-12 overflow-hidden select-none"
    >
      {/* Ambient Spotlight Behind Carousel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] rounded-full bg-[var(--color-accent)] opacity-25 blur-[140px] pointer-events-none" />

      {/* ─── SECTION HEADER (Compact In-Frame) ─── */}
      <div className="text-center mb-5 md:mb-8 relative z-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-1.5">
          Featured <span className="text-[var(--color-text)]">Projects</span>
        </h2>
        
        <p className="text-stone-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed px-2">
          Koleksi sistem web, mobile apps, dan aplikasi digital yang telah saya kembangkan.
        </p>
      </div>

      {/* ─── 3D CAROUSEL STAGE ─── */}
      <div
        className="relative flex items-center justify-center w-full my-auto"
        style={{ height: windowWidth < 768 ? 390 : 430 }}
      >
        {/* Left Arrow Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-1 sm:left-2 md:left-6 z-50 p-2.5 sm:p-3 rounded-full bg-[#1c1611]/80 backdrop-blur-md border border-[#403427] text-stone-300 hover:text-white hover:border-stone-400 hover:bg-[#2d2011] hover:scale-110 active:scale-95 transition-all shadow-2xl cursor-pointer"
          aria-label="Previous Project"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* 3D Cards Container */}
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="relative w-full flex items-center justify-center h-full touch-pan-y"
          style={{ perspective: "1400px" }}
        >
          {cardPositions.map((offset) => {
            const index = getIndex(offset);
            const proj = projects[index];
            const isCenter = offset === 0;

            return (
              <div
                key={`${index}-${offset}`}
                style={getCardStyle(offset)}
                className="w-[260px] sm:w-[290px] md:w-[325px]"
              >
                <div
                  className={`
                    rounded-[1.8rem] overflow-hidden border transition-all duration-300
                    bg-gradient-to-br from-[#1c1611] via-[#14100c] to-[#0a0806]
                    ${
                      isCenter
                        ? "border-[#51463b] shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
                        : "border-[#403427]/60 shadow-lg opacity-90"
                    }
                  `}
                >
                  {/* Project Image Container */}
                  <div
                    className="relative overflow-hidden bg-black/60"
                    style={{ height: isCenter ? (windowWidth < 768 ? 150 : 175) : (windowWidth < 768 ? 130 : 145) }}
                  >
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Bottom Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14100c] via-transparent to-black/30" />

                    {/* Slide Counter */}
                    <div className="absolute bottom-2.5 left-3 text-stone-300 text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm border border-white/5">
                      {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className={`p-4 ${isCenter ? "md:p-4.5" : "md:p-4"}`}>
                    <h3
                      className={`font-black tracking-tight text-white mb-1 line-clamp-1
                        ${isCenter ? (windowWidth < 768 ? "text-base" : "text-lg") : "text-sm"}`}
                    >
                      {proj.title}
                    </h3>
                    
                    <p className="text-stone-300/80 text-xs leading-relaxed mb-3 line-clamp-2">
                      {proj.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {proj.tech
                        .slice(0, isCenter ? proj.tech.length : 2)
                        .map((tech) => (
                          <span
                            key={tech}
                            className="text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-md
                                       bg-[#2d2011]/90 text-stone-300
                                       border border-[#403427]"
                          >
                            {tech}
                          </span>
                        ))}
                      {!isCenter && proj.tech.length > 2 && (
                        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-md bg-stone-900 text-stone-400 border border-stone-800">
                          +{proj.tech.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Action Link (Only on center card) */}
                    {isCenter && (
                      <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-xl bg-stone-100 text-black text-xs font-bold hover:bg-white transition-all flex items-center gap-1.5 shadow-md group/btn"
                        >
                          <GithubIcon />
                          <span>View on GitHub</span>
                          <span className="transition-transform group-hover/btn:translate-x-0.5">→</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => navigate(1)}
          className="absolute right-2 md:right-6 z-50 p-3 rounded-full bg-[#1c1611]/80 backdrop-blur-md border border-[#403427] text-stone-300 hover:text-white hover:border-stone-400 hover:bg-[#2d2011] hover:scale-110 active:scale-95 transition-all shadow-2xl"
          aria-label="Next Project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
}