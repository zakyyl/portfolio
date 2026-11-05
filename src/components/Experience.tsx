"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { Anton } from "next/font/google";
import { experiences } from "@/src/data/experience";
import { ArrowLeft, ArrowRight, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024);

  // Smooth Drag & Swipe Physics State
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);

  const total = experiences.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Shortest circular offset so cards slide naturally in loop
  const getOffset = (index: number, active: number, length: number) => {
    let diff = index - active;
    while (diff > length / 2) diff -= length;
    while (diff < -length / 2) diff += length;
    return diff;
  };

  const navigate = useCallback(
    (dir: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + dir + total) % total);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating, total]
  );

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  // ─── Touch Events (Mobile) ───
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimating) return;
    setIsDragging(true);
    dragStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || dragStartX.current === null) return;
    const currentX = e.targetTouches[0].clientX;
    const diff = currentX - dragStartX.current;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging || dragStartX.current === null) return;
    const threshold = 40;
    if (dragOffset < -threshold) {
      navigate(1);
    } else if (dragOffset > threshold) {
      navigate(-1);
    }
    setIsDragging(false);
    setDragOffset(0);
    dragStartX.current = null;
  };

  // ─── Mouse Drag Events (Desktop) ───
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isAnimating) return;
    setIsDragging(true);
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging || dragStartX.current === null) return;
    const threshold = 45;
    if (dragOffset < -threshold) {
      navigate(1);
    } else if (dragOffset > threshold) {
      navigate(-1);
    }
    setIsDragging(false);
    setDragOffset(0);
    dragStartX.current = null;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const getCardStyle = (offset: number): React.CSSProperties => {
    const isMobile = windowWidth < 768;
    const absOffset = Math.abs(offset);

    // Dynamic drag displacement with subtle elasticity
    const clampedDrag = isDragging
      ? Math.max(isMobile ? -95 : -140, Math.min(isMobile ? 95 : 140, dragOffset * 0.72))
      : 0;

    let scale = 1;
    if (absOffset === 1) scale = isMobile ? 0.82 : 0.86;
    else if (absOffset === 2) scale = isMobile ? 0.65 : 0.72;
    else if (absOffset >= 3) scale = 0.52;

    const baseTranslateX = isMobile ? 125 : 275;
    const translateX = offset * baseTranslateX + clampedDrag;
    const translateZ = offset === 0 ? 0 : absOffset === 1 ? -90 : absOffset === 2 ? -180 : -260;
    const rotateY = offset * (isMobile ? -10 : -8) + clampedDrag * 0.04;

    let opacity = 1;
    if (absOffset === 1) opacity = 0.78;
    else if (absOffset === 2) opacity = isMobile ? 0 : 0.45;
    else if (absOffset >= 3) opacity = 0;

    let zIndex = 10;
    if (offset === 0) zIndex = 30;
    else if (absOffset === 1) zIndex = 20;
    else if (absOffset === 2) zIndex = 10;
    else zIndex = 0;

    const blur = offset === 0 ? 0 : absOffset === 1 ? 0.6 : absOffset === 2 ? 1.8 : 4;

    return {
      position: "absolute",
      transform: `translateX(${translateX}px) scale(${scale}) perspective(1200px) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
      opacity,
      zIndex,
      filter: blur > 0 ? `blur(${blur}px)` : "none",
      transition: isDragging
        ? "none"
        : "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease, filter 0.5s ease",
      transformOrigin: "center center",
      pointerEvents: absOffset <= 1 ? "auto" : "none",
      cursor: isDragging ? "grabbing" : offset === 0 ? "grab" : "pointer",
      display: absOffset > 3 ? "none" : "block",
    };
  };

  return (
    <section
      id="experience"
      className="relative min-h-screen md:h-screen md:max-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center py-10 md:py-10 overflow-hidden select-none bg-[#050606]"
    >
      {/* Ambient Cool Glow Behind Carousel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] rounded-full bg-[#222939] opacity-40 blur-[150px] pointer-events-none" />

      {/* ─── SECTION HEADER ─── */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-4 md:mb-6 relative z-10"
      >
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#D6B96A] shadow-[0_0_8px_rgba(214,185,106,0.6)]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#D6B96A] uppercase">
            CAREER &amp; ACADEMIC
          </span>
        </div>

        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-black text-[#F4F5E7] tracking-tight uppercase leading-[0.95] mb-2 sm:mb-3 ${anton.className}`}
        >
          MY <span className="text-[#A49872]">JOURNEY</span>
        </h2>

        <p className="text-[#85898F] text-xs sm:text-sm max-w-md mx-auto leading-relaxed px-2">
          Perjalanan profesional di RS Bhayangkara, kepanitiaan, asisten laboratorium komputer, dan program intensif IT.
        </p>
      </motion.div>

      {/* ─── 3D CAROUSEL STAGE WITH NAKED / GHOST ARROWS ─── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center justify-center w-full my-auto"
        style={{ height: windowWidth < 768 ? 410 : 450 }}
      >
        {/* Left Naked / Ghost Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(-1);
          }}
          className="group absolute left-1 sm:left-3 md:left-6 lg:left-10 z-50 p-2 sm:p-3 text-[#85898F]/50 hover:text-[#D6B96A] transition-all duration-300 cursor-pointer active:scale-90 flex items-center justify-center select-none"
          aria-label="Previous Experience"
          title="Previous Experience"
        >
          <ArrowLeft
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 transition-transform duration-300 ease-out group-hover:-translate-x-2 drop-shadow-[0_0_12px_rgba(214,185,106,0)] group-hover:drop-shadow-[0_0_10px_rgba(214,185,106,0.5)]"
            strokeWidth={1.5}
          />
        </button>

        {/* 3D Cards Container with Real Physical Sliding */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`relative w-full flex items-center justify-center h-full touch-pan-y ${isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          style={{ perspective: "1400px" }}
        >
          {experiences.map((exp, index) => {
            const offset = getOffset(index, activeIndex, total);
            const isCenter = offset === 0;

            if (Math.abs(offset) > 3) return null;

            return (
              <div
                key={exp.title}
                style={getCardStyle(offset)}
                onClick={() => {
                  if (Math.abs(dragOffset) > 5) return;
                  if (offset !== 0) navigate(offset);
                }}
                className="w-[270px] sm:w-[310px] md:w-[340px]"
              >
                <div
                  className={`
                    rounded-[1.8rem] overflow-hidden border transition-all duration-500 ease-out
                    bg-gradient-to-br from-[#1C202A] via-[#111318] to-[#050606]
                    ${isCenter
                      ? "border-[#D6B96A] shadow-[0_25px_60px_rgba(5,6,6,0.95),0_0_35px_rgba(214,185,106,0.18)] ring-1 ring-[#D6B96A]/30 scale-[1.01]"
                      : "border-[#1C202A]/80 shadow-lg opacity-85 hover:border-[#A49872]/50 hover:opacity-95"
                    }
                  `}
                >
                  {/* Experience Image Container */}
                  <div
                    className="relative overflow-hidden bg-[#050606] pointer-events-none"
                    style={{
                      height: isCenter
                        ? windowWidth < 768
                          ? 160
                          : 185
                        : windowWidth < 768
                          ? 135
                          : 155,
                    }}
                  >
                    <Image
                      src={exp.image}
                      alt={exp.company}
                      fill
                      draggable={false}
                      className={`object-cover object-center transition-transform duration-700 select-none pointer-events-none ${isCenter ? "scale-105" : "scale-100"
                        }`}
                    />

                    {/* Bottom Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#050606]/30 to-transparent pointer-events-none" />

                    {/* Year Badge on Image */}
                    <div
                      className={`absolute bottom-2.5 right-3 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md backdrop-blur-sm border transition-colors duration-300 ${isCenter
                          ? "text-[#D6B96A] bg-[#050606]/90 border-[#D6B96A]/60 shadow-[0_0_8px_rgba(214,185,106,0.3)]"
                          : "text-[#85898F] bg-[#050606]/75 border-[#372D1D]"
                        }`}
                    >
                      {exp.year}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className={`p-4 ${isCenter ? "md:p-4.5" : "md:p-4"}`}>
                    <h3
                      className={`font-black tracking-tight mb-1 line-clamp-1 transition-colors duration-300
                        ${isCenter
                          ? (windowWidth < 768 ? "text-base" : "text-lg") + " text-[#F4F5E7]"
                          : "text-sm text-[#85898F]"
                        }`}
                    >
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs font-semibold mb-2 truncate transition-colors duration-300">
                      <Building2
                        className={`w-3.5 h-3.5 shrink-0 ${isCenter ? "text-[#D6B96A]" : "text-[#85898F]"
                          }`}
                      />
                      <span className={`truncate ${isCenter ? "text-[#D6B96A]" : "text-[#85898F]"}`}>
                        {exp.company}
                      </span>
                    </div>

                    <p className="text-[#85898F] text-xs leading-relaxed mb-1 line-clamp-3">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Naked / Ghost Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(1);
          }}
          className="group absolute right-1 sm:right-3 md:right-6 lg:right-10 z-50 p-2 sm:p-3 text-[#85898F]/50 hover:text-[#D6B96A] transition-all duration-300 cursor-pointer active:scale-90 flex items-center justify-center select-none"
          aria-label="Next Experience"
          title="Next Experience"
        >
          <ArrowRight
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 transition-transform duration-300 ease-out group-hover:translate-x-2 drop-shadow-[0_0_12px_rgba(214,185,106,0)] group-hover:drop-shadow-[0_0_10px_rgba(214,185,106,0.5)]"
            strokeWidth={1.5}
          />
        </button>
      </motion.div>
    </section>
  );
}