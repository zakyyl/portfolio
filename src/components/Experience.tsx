"use client";

import { useState } from "react";
import Image from "next/image";
import { experiences } from "@/src/data/experience";

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-4 py-24 bg-[var(--color-primary)]"
    >
      <div className="text-center mb-12">
        <div className="inline-block w-12 h-1 bg-[var(--color-accent)] mb-4"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          My <span className="text-[var(--color-secondary)]">Experience</span>
        </h2>
        <p className="text-[var(--color-text)]/60 text-lg">
          A journey of learning, growth, and hands-on experience
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {experiences.map((exp, index) => (
              <div key={index} className="min-w-full px-4">
                <div className="bg-white dark:bg-[var(--color-primary)] border-2 border-[var(--color-text)]/10 rounded-2xl overflow-hidden shadow-lg">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-accent)]/10">
                      <Image
                        src={exp.image}
                        alt={exp.company}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 mb-4 w-fit">
                        <span className="px-3 py-1 bg-[var(--color-accent)]/20 text-[var(--color-text)] rounded-full text-sm font-medium">
                          {exp.year}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-2">
                        {exp.title}
                      </h3>

                      <p className="text-lg text-[var(--color-secondary)] font-semibold mb-4">
                        {exp.company}
                      </p>

                      <p className="text-[var(--color-text)]/70 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12
                     w-10 h-10 md:w-12 md:h-12 
                     bg-white dark:bg-[var(--color-primary)] 
                     border-2 border-[var(--color-text)]/20
                     rounded-full flex items-center justify-center
                     hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white
                     transition-all shadow-lg z-10"
          aria-label="Previous"
        >
          <span className="text-xl">←</span>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12
                     w-10 h-10 md:w-12 md:h-12 
                     bg-white dark:bg-[var(--color-primary)] 
                     border-2 border-[var(--color-text)]/20
                     rounded-full flex items-center justify-center
                     hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white
                     transition-all shadow-lg z-10"
          aria-label="Next"
        >
          <span className="text-xl">→</span>
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {experiences.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                ? "bg-[var(--color-secondary)] w-8"
                : "bg-[var(--color-text)]/20 hover:bg-[var(--color-text)]/40"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}