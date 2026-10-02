"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Anton } from "next/font/google";
import { experiences } from "@/src/data/experience";
import { ChevronLeft, ChevronRight, CheckCircle2, Building2 } from "lucide-react";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024);

  const total = experiences.length;

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

  // Card Positions for 3D Carousel: left-far, left, center, right, right-far
  const cardPositions = [-2, -1, 0, 1, 2];

  const getCardStyle = (offset: number): React.CSSProperties => {
    const isMobile = windowWidth < 768;
    const absOffset = Math.abs(offset);

    const scale =
      offset === 0
        ? 1
        : absOffset === 1
        ? isMobile
          ? 0.82
          : 0.86
        : isMobile
        ? 0.65
        : 0.72;
    const baseTranslateX = isMobile ? 120 : 270;
    const translateX = offset * baseTranslateX;
    const translateZ = offset === 0 ? 0 : absOffset === 1 ? -90 : -180;
    const rotateY = offset * (isMobile ? -10 : -8);

    const opacity =
      absOffset > 2
        ? 0
        : absOffset === 2
        ? isMobile
          ? 0
          : 0.45
        : absOffset === 1
        ? 0.75
        : 1;
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
      id="experience"
      className="relative min-h-screen md:h-screen md:max-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center py-12 md:py-12 overflow-hidden select-none bg-[#050606]"
    >
      {/* Ambient Cool Glow Behind Carousel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] rounded-full bg-[#222939] opacity-40 blur-[150px] pointer-events-none" />

      {/* ─── SECTION HEADER ─── */}
      <div className="text-center mb-5 md:mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#D6B96A] shadow-[0_0_8px_rgba(214,185,106,0.6)]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#D6B96A] uppercase">
            CAREER &amp; ACADEMIC JOURNEY
          </span>
        </div>

        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-black text-[#F4F5E7] tracking-tight uppercase leading-[0.95] mb-2 sm:mb-3 ${anton.className}`}
        >
          MY <span className="text-[#A49872]">EXPERIENCE</span>
        </h2>

        <p className="text-[#85898F] text-xs sm:text-sm max-w-md mx-auto leading-relaxed px-2">
          Perjalanan profesional di RS Bhayangkara, kepanitiaan, asisten laboratorium komputer, dan program intensif IT.
        </p>
      </div>

      {/* ─── 3D CAROUSEL STAGE FOR EXPERIENCES ─── */}
      <div
        className="relative flex items-center justify-center w-full my-auto"
        style={{ height: windowWidth < 768 ? 410 : 450 }}
      >
        {/* Left Arrow Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-1 sm:left-2 md:left-6 z-50 p-2.5 sm:p-3 rounded-full bg-[#111318]/90 backdrop-blur-md border border-[#1C202A] text-[#85898F] hover:text-[#F4F5E7] hover:border-[#A49872]/60 hover:bg-[#1C202A] hover:scale-110 active:scale-95 transition-all shadow-2xl cursor-pointer"
          aria-label="Previous Experience"
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
            const exp = experiences[index];
            const isCenter = offset === 0;

            return (
              <div
                key={`${index}-${offset}`}
                style={getCardStyle(offset)}
                className="w-[270px] sm:w-[310px] md:w-[340px]"
              >
                <div
                  className={`
                    rounded-[1.8rem] overflow-hidden border transition-all duration-300
                    bg-gradient-to-br from-[#1C202A] via-[#111318] to-[#050606]
                    ${
                      isCenter
                        ? "border-[#A49872]/80 shadow-[0_25px_60px_rgba(5,6,6,0.95)]"
                        : "border-[#1C202A]/80 shadow-lg opacity-85"
                    }
                  `}
                >
                  {/* Experience Image Container */}
                  <div
                    className="relative overflow-hidden bg-[#050606]"
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
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Bottom Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#050606]/30 to-transparent" />

                    {/* Year Badge on Image */}
                    <div className="absolute bottom-2.5 right-3 text-[#D6B96A] text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#050606]/85 backdrop-blur-sm border border-[#372D1D]">
                      {exp.year}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className={`p-4 ${isCenter ? "md:p-4.5" : "md:p-4"}`}>
                    <h3
                      className={`font-black tracking-tight text-[#F4F5E7] mb-1 line-clamp-1
                        ${isCenter ? (windowWidth < 768 ? "text-base" : "text-lg") : "text-sm"}`}
                    >
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-[#D6B96A] text-xs font-semibold mb-2 truncate">
                      <Building2 className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{exp.company}</span>
                    </div>

                    <p className="text-[#85898F] text-xs leading-relaxed mb-3 line-clamp-3">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => navigate(1)}
          className="absolute right-1 sm:right-2 md:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-[#111318]/90 backdrop-blur-md border border-[#1C202A] text-[#85898F] hover:text-[#F4F5E7] hover:border-[#A49872]/60 hover:bg-[#1C202A] hover:scale-110 active:scale-95 transition-all shadow-2xl cursor-pointer"
          aria-label="Next Experience"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </section>
  );
}