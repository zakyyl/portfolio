"use client";

import { useState } from "react";
import Image from "next/image";
import { experiences } from "@/src/data/experience";
import { ChevronLeft, ChevronRight, Sparkles, Check } from "lucide-react";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentExp = experiences[activeIndex];
  const total = experiences.length;

  return (
    <section
      id="experience"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 overflow-hidden select-none"
    >
      {/* Ambient Spotlight */}
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] opacity-20 blur-[150px] pointer-events-none" />

      {/* ─── SECTION HEADER ─── */}
      <div className="text-center mb-12 md:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-border-dark)] bg-[var(--color-secondary)]/80 text-[11px] font-bold tracking-widest uppercase text-stone-300 mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>CAREER &amp; ACADEMIC JOURNEY</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-3">
          My <span className="text-[var(--color-text)]">Experience</span>
        </h2>
        
        <p className="text-stone-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Perjalanan akademik, kepanitiaan, asisten laboratorium, dan pengalaman kerja profesional di bidang IT.
        </p>
      </div>

      {/* ─── TIMELINE + DETAIL CARD GRID ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">

        {/* ── LEFT: Clean Borderless Timeline (5 cols) ── */}
        <div className="lg:col-span-5 relative w-full">
          <div className="flex flex-col gap-1 overflow-x-auto md:overflow-visible">
            {experiences.map((exp, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;

              return (
                <div key={index} className="relative flex items-start">
                  
                  {/* Perfectly Centered Connecting Segment Line */}
                  {index < total - 1 && (
                    <div
                      className={`absolute left-[15px] top-8 bottom-0 w-0.5 transition-colors duration-300 z-0 ${
                        index < activeIndex ? "bg-amber-500/80" : "bg-[#2d2011]"
                      }`}
                      style={{ height: "calc(100% - 2px)" }}
                    />
                  )}

                  <button
                    onClick={() => setActiveIndex(index)}
                    className="flex items-start gap-4 text-left py-2 px-0 relative group w-full cursor-pointer z-10 transition-transform duration-200"
                  >
                    {/* Centered Node Circle */}
                    <div
                      className={`relative flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isActive
                          ? "bg-[#2d2011] border-stone-100 text-stone-100 shadow-[0_0_15px_rgba(232,222,209,0.35)] scale-110"
                          : isPast
                          ? "bg-[#1c1611] border-amber-600/70 text-amber-500"
                          : "bg-[#0a0806] border-[#403427] text-stone-600 group-hover:border-stone-400"
                      }`}
                    >
                      {isActive ? (
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      ) : isPast ? (
                        <Check className="w-3 h-3 opacity-80" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-stone-600 group-hover:bg-stone-300 transition-colors" />
                      )}
                    </div>

                    {/* Text Label without box container */}
                    <div className="min-w-0 flex-1 pt-0.5">
                      <p
                        className={`text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase mb-0.5 transition-colors ${
                          isActive ? "text-amber-400" : "text-stone-500 group-hover:text-stone-400"
                        }`}
                      >
                        {exp.year}
                      </p>
                      <p
                        className={`text-xs sm:text-sm font-semibold truncate transition-colors ${
                          isActive ? "text-white" : "text-stone-400 group-hover:text-stone-200"
                        }`}
                      >
                        {exp.company}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT: Active Detailed Card (7 cols) ── */}
        <div className="lg:col-span-7 w-full">
          <div className="rounded-[2.2rem] overflow-hidden border border-[#403427] bg-gradient-to-br from-[#1c1611] via-[#14100c] to-[#0a0806] shadow-[0_25px_60px_rgba(0,0,0,0.9)] transition-all duration-500">
            
            {/* Featured Experience Image */}
            <div className="relative h-52 sm:h-64 md:h-72 w-full overflow-hidden bg-black/80 flex items-center justify-center group/img">
              {/* Blurred Ambient Image Background */}
              <Image
                src={currentExp.image}
                alt=""
                fill
                className="object-cover blur-md scale-110 opacity-60 brightness-90 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-black/40 pointer-events-none" />

              {/* Main Crisp Center Image */}
              <div className="relative w-full h-full flex items-center justify-center z-10 p-3 sm:p-5 drop-shadow-2xl">
                <Image
                  src={currentExp.image}
                  alt={currentExp.company}
                  fill
                  className="object-contain transition-transform duration-700 group-hover/img:scale-105"
                />
              </div>

              {/* Bottom Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100c] via-black/20 to-transparent pointer-events-none z-10" />

              {/* Header Title (Clean without Year Badge on Image) */}
              <div className="absolute bottom-4 left-5 right-5 pointer-events-none z-20">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-black leading-tight drop-shadow-md">
                  {currentExp.title}
                </h3>
              </div>
            </div>

            {/* Experience Body Content */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/5">
                <div className="w-1.5 h-10 rounded-full bg-gradient-to-b from-amber-500 to-[#e8ded1]" />
                <div>
                  <h4 className="text-white font-bold text-lg sm:text-xl leading-tight">
                    {currentExp.company}
                  </h4>
                  <p className="text-stone-400 text-xs sm:text-sm mt-0.5">
                    Verified Experience · {currentExp.year}
                  </p>
                </div>
              </div>

              <p className="text-stone-300/90 leading-relaxed text-sm sm:text-base mb-8">
                {currentExp.description}
              </p>

              {/* Navigation & Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() =>
                      setActiveIndex((p) => (p === 0 ? total - 1 : p - 1))
                    }
                    className="p-3 rounded-full bg-[#14100c] border border-[#403427] text-stone-300 hover:text-white hover:border-stone-400 hover:bg-[#2d2011] hover:scale-110 active:scale-95 transition-all shadow-md"
                    title="Previous Experience"
                    aria-label="Previous Experience"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() =>
                      setActiveIndex((p) => (p === total - 1 ? 0 : p + 1))
                    }
                    className="p-3 rounded-full bg-[#14100c] border border-[#403427] text-stone-300 hover:text-white hover:border-stone-400 hover:bg-[#2d2011] hover:scale-110 active:scale-95 transition-all shadow-md"
                    title="Next Experience"
                    aria-label="Next Experience"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono text-stone-400">
                    <strong className="text-stone-200">{activeIndex + 1}</strong> / {total} Experiences
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}