"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { projects } from "@/src/data/projects";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024);

  const total = projects.length;

  // Track window width untuk styling responsive logic di JS
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getIndex = (offset: number) =>
    (activeIndex + offset + total) % total;

  const navigate = (dir: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + dir + total) % total);
    setTimeout(() => setIsAnimating(false), 400);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => navigate(1), 4000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  // Posisi: left-far, left, center, right, right-far
  const cardPositions = [-2, -1, 0, 1, 2];

  const getCardStyle = (offset: number): React.CSSProperties => {
    const isMobile = windowWidth < 768; // breakpoint mobile
    const absOffset = Math.abs(offset);
    
    // Sesuaikan translate dan scale untuk mobile agar muat ke layar
    const scale = offset === 0 ? 1 : absOffset === 1 ? (isMobile ? 0.8 : 0.82) : (isMobile ? 0.6 : 0.68);
    const baseTranslateX = isMobile ? 130 : 260; // Spread kartu untuk mobile lebih rapat
    const translateX = offset * baseTranslateX;
    const translateZ = offset === 0 ? 0 : absOffset === 1 ? -80 : -160;
    const rotateY = offset * (isMobile ? -10 : -8);
    
    // Sembunyikan card paling pinggir (-2 dan 2) kalau di mobile agar terhindar dari tumpukan off-screen
    const opacity = absOffset > 2 ? 0 : absOffset === 2 ? (isMobile ? 0 : 0.45) : absOffset === 1 ? 0.75 : 1;
    const zIndex = offset === 0 ? 30 : absOffset === 1 ? 20 : 10;

    return {
      position: "absolute",
      transform: `translateX(${translateX}px) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
      opacity,
      zIndex,
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      transformOrigin: "center center",
      pointerEvents: offset === 0 ? "auto" : "none",
    };
  };

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-[var(--color-primary)] overflow-x-hidden"
    >
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-16">
        <div className="inline-block w-12 h-1 bg-[var(--color-accent)] mb-4"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Project<span className="text-[var(--color-secondary)]">.</span>
        </h2>
        <p className="text-[var(--color-text)]/60 text-lg">What I Create</p>
      </div>

      {/* 3D Carousel (Desktop & Mobile) */}
      <div
        className="relative flex items-center justify-center w-full"
        style={{ height: windowWidth < 768 ? 400 : 480 }}
      >
        {/* Left Arrow */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-1 md:left-4 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
                     bg-[var(--color-secondary)] text-white shadow-lg
                     hover:scale-110 active:scale-95 transition-transform duration-200"
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Cards Stage */}
        <div
          className="relative w-full flex items-center justify-center h-full"
          style={{ perspective: "1200px" }}
        >
          {cardPositions.map((offset) => {
            const index = getIndex(offset);
            const proj = projects[index];
            const isCenter = offset === 0;

            return (
              <div
                key={`${index}-${offset}`}
                style={getCardStyle(offset)}
                className="w-[260px] sm:w-72 md:w-80"
              >
                <div
                  className={`
                    rounded-2xl overflow-hidden border-2
                    ${
                      isCenter
                        ? "border-[var(--color-secondary)] shadow-2xl shadow-[var(--color-secondary)]/20 bg-white dark:bg-[var(--color-primary)]"
                        : "border-[var(--color-text)]/10 shadow-md bg-white/90 dark:bg-[var(--color-primary)]/90"
                    }
                  `}
                >
                  {/* Image */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: isCenter ? (windowWidth < 768 ? 160 : 200) : (windowWidth < 768 ? 140 : 160) }}
                  >
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {isCenter && (
                      <div className="absolute top-3 right-3 bg-[var(--color-secondary)] text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase shadow">
                        Featured
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 text-white text-xs font-medium opacity-80">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(total).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-4 ${isCenter ? "md:p-5 p-4" : "p-3 md:p-4"}`}>
                    <h3
                      className={`font-bold mb-1.5 text-[var(--color-text)] transition-colors
                        ${isCenter ? (windowWidth < 768 ? "text-lg" : "text-xl") : "text-sm md:text-base"}`}
                    >
                      {proj.title}
                    </h3>
                    <p className="text-[var(--color-text)]/60 text-xs leading-relaxed mb-3 line-clamp-2">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proj.tech
                        .slice(0, isCenter ? proj.tech.length : 2)
                        .map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] px-2 py-0.5 rounded-full
                                       bg-[var(--color-accent)]/20 text-[var(--color-text)]/80
                                       border border-[var(--color-text)]/10"
                          >
                            {tech}
                          </span>
                        ))}
                      {!isCenter && proj.tech.length > 2 && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-text)]/10 text-[var(--color-text)]/50">
                          +{proj.tech.length - 2}
                        </span>
                      )}
                    </div>
                    {isCenter && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold
                                   text-[var(--color-secondary)] hover:gap-3 transition-all group/link relative z-10"
                      >
                        View on GitHub
                        <span className="group-hover/link:translate-x-1 transition-transform">
                          →
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => navigate(1)}
          className="absolute right-1 md:right-4 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
                     bg-[var(--color-secondary)] text-white shadow-lg
                     hover:scale-110 active:scale-95 transition-transform duration-200"
          aria-label="Next"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4 md:mt-8 relative z-50">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => !isAnimating && setActiveIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-6 h-2.5 bg-[var(--color-secondary)]"
                : "w-2.5 h-2.5 bg-[var(--color-text)]/20 hover:bg-[var(--color-text)]/40"
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}