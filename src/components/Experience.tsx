"use client";

import { useState } from "react";
import Image from "next/image";
import { experiences } from "@/src/data/experience";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-4 py-16 md:py-24 bg-[var(--color-primary)]"
    >
      {/* Header */}
      <div className="text-center mb-10 md:mb-16">
        <div className="inline-block w-12 h-1 bg-[var(--color-accent)] mb-4"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          My <span className="text-[var(--color-secondary)]">Experience</span>
        </h2>
        <p className="text-[var(--color-text)]/60 text-base md:text-lg">
          A journey of learning, growth, and hands-on experience
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">

        {/* ── LEFT: Timeline Navigation ── */}
        <div className="relative md:w-64 w-full flex-shrink-0">
          {/* Vertical line background */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-[var(--color-text)]/10 hidden md:block" />

          {/* Vertical line progress */}
          <div
            className="absolute left-[19px] top-0 w-0.5 bg-[var(--color-secondary)] hidden md:block transition-all duration-500"
            style={{
              height:
                experiences.length === 1
                  ? "100%"
                  : `calc(${(activeIndex / (experiences.length - 1)) * 100}% + 20px)`,
            }}
          />

          <div className="flex md:flex-col flex-row gap-0 overflow-x-auto md:overflow-visible pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {experiences.map((exp, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;

              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="flex md:flex-row flex-col items-center md:items-start gap-2 md:gap-4 relative group text-left
                             flex-shrink-0 md:flex-shrink py-2 px-3 md:px-0 md:py-2"
                >
                  {/* Dot */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                                border-2 transition-all duration-300
                                ${isActive
                                  ? "bg-[var(--color-secondary)] border-[var(--color-secondary)] shadow-lg shadow-[var(--color-secondary)]/30 scale-110"
                                  : isPast
                                  ? "bg-[var(--color-secondary)]/20 border-[var(--color-secondary)]/60"
                                  : "bg-[var(--color-primary)] border-[var(--color-text)]/20 group-hover:border-[var(--color-secondary)]/50"
                                }`}
                  >
                    {(isPast || isActive) && (
                      <svg
                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke={isActive ? "white" : "var(--color-secondary)"}
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                    {!isPast && !isActive && (
                      <div className="w-2 h-2 rounded-full bg-[var(--color-text)]/20 group-hover:bg-[var(--color-secondary)]/40 transition-colors" />
                    )}
                  </div>

                  {/* Label — desktop */}
                  <div className="hidden md:block">
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-0.5 transition-colors
                                   ${isActive
                                     ? "text-[var(--color-secondary)]"
                                     : "text-[var(--color-text)]/40 group-hover:text-[var(--color-text)]/60"}`}>
                      {exp.year}
                    </p>
                    <p className={`text-sm font-medium leading-snug transition-colors
                                   ${isActive
                                     ? "text-[var(--color-text)]"
                                     : "text-[var(--color-text)]/50 group-hover:text-[var(--color-text)]/70"}`}>
                      {exp.company}
                    </p>
                  </div>

                  {/* Mobile: start year only */}
                  <span className="md:hidden text-[10px] text-[var(--color-text)]/50 mt-0.5">
                    {exp.year.split(" - ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT: Active Card ── */}
        <div className="flex-1 min-w-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{ display: index === activeIndex ? "block" : "none" }}
            >
              <div className="bg-white dark:bg-[var(--color-primary)] border-2 border-[var(--color-text)]/10
                              rounded-2xl overflow-hidden shadow-xl
                              hover:border-[var(--color-secondary)]/30 transition-colors duration-300">

                {/* Image Container */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[var(--color-primary)] flex items-center justify-center group/image">
                  {/* Blurred Background Image (Foto yang sama, dibelakang) */}
                  <Image
                    src={exp.image}
                    alt=""
                    fill
                    className="object-cover blur-sm scale-105 opacity-80 brightness-100 saturate-100"
                  />
                  
                  {/* Backdrop tint (biar teks & border jelas, dan fokus utamanya tetap ke gambar di depan) */}
                  <div className="absolute inset-0 bg-black/40 pointer-events-none" />

                  {/* Main Centered Image (di depan) */}
                  <div className="relative w-full h-full flex items-center justify-center z-10 p-2 md:p-4 drop-shadow-2xl">
                    <Image
                      src={exp.image}
                      alt={exp.company}
                      fill
                      className="object-contain transition-transform duration-700 group-hover/image:scale-105"
                    />
                  </div>
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-10" />
                  
                  {/* Text */}
                  <div className="absolute bottom-4 left-5 right-5 pointer-events-none z-20">
                    <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">
                      {exp.year}
                    </p>
                    <h3 className="text-white text-xl md:text-2xl font-bold leading-tight drop-shadow-md">
                      {exp.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 rounded-full bg-[var(--color-secondary)]" />
                    <div>
                      <p className="text-[var(--color-secondary)] font-bold text-lg leading-tight">
                        {exp.company}
                      </p>
                      <p className="text-[var(--color-text)]/40 text-xs">{exp.year}</p>
                    </div>
                  </div>

                  <p className="text-[var(--color-text)]/70 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>

                  {/* Navigation */}
                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-[var(--color-text)]/8">
                    <button
                      onClick={() =>
                        setActiveIndex((p) => (p === 0 ? experiences.length - 1 : p - 1))
                      }
                      className="w-9 h-9 rounded-full border-2 border-[var(--color-text)]/15 flex items-center justify-center
                                 hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white
                                 text-[var(--color-text)]/50 transition-all duration-200"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        setActiveIndex((p) => (p === experiences.length - 1 ? 0 : p + 1))
                      }
                      className="w-9 h-9 rounded-full border-2 border-[var(--color-text)]/15 flex items-center justify-center
                                 hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white
                                 text-[var(--color-text)]/50 transition-all duration-200"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                    <span className="text-xs text-[var(--color-text)]/30 ml-1">
                      Use arrows or click timeline
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}