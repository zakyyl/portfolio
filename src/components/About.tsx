"use client";

import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen md:h-screen md:max-h-screen w-full bg-[#050606] overflow-hidden select-none flex items-center justify-center py-16 md:py-0 px-6 sm:px-10 lg:px-16"
    >
      {/* ── Ambient Background Cool Glow ── */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[400px] rounded-full bg-[#222939] opacity-30 blur-[160px] pointer-events-none" />

      {/* Subtle Tech Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#F4F5E7 1px, transparent 1px), linear-gradient(90deg, #F4F5E7 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-6xl w-full mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ──────────────────────────────────────────────────────────
              LEFT COLUMN: TEXT CONTENT (BEHIND THE CODE, BIO)
          ────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left order-2 lg:order-1">
            {/* Category Mono Tag */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D6B96A] shadow-[0_0_8px_rgba(214,185,106,0.6)]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#D6B96A] uppercase">
                WHO I AM
              </span>
            </div>

            {/* Main Heading */}
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-black text-[#F4F5E7] tracking-tight uppercase leading-[0.95] mb-5 ${anton.className}`}>
              BEHIND THE <span className="text-[#A49872]">CODE</span>
            </h2>

            {/* Bio Narrative */}
            <div className="space-y-3.5 text-[#F4F5E7]/90 max-w-xl">
              <p className="text-sm sm:text-base leading-relaxed font-normal">
                Hi! Saya seorang Software Engineer dengan fokus di arsitektur web modern dan cross-platform mobile dev. Untuk ngebangun sistem aku biasanya mengandalkan tech stack seperti Laravel, Next.js, dan Flutter.
              </p>
              
              <p className="text-xs sm:text-sm text-[#85898F] leading-relaxed">
                Dalam bekerja, saya selalu memastikan sistem yang dibangun itu andal dan memiliki arsitektur yang presisi, supaya bisa menghasilkan produk digital yang memberikan manfaat langsung bagi penggunanya.
              </p>

              <p className="text-xs sm:text-sm text-[#85898F] leading-relaxed">
                Saya terbuka jika ada tawaran full-time, pengen ngajak kolaborasi bareng, atau sekadar mau diskusi santai soal digital products, feel free to reach out ya!
              </p>
            </div>
          </div>

          {/* ──────────────────────────────────────────────────────────
              RIGHT COLUMN: LANDSCAPE PHOTO (anot.png) IN MACOS WINDOW TAB
          ────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
            <div className="relative w-full max-w-[500px]">
              
              {/* Ambient Glow behind Mac Tab */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#372D1D]/35 via-[#D6B96A]/15 to-[#222939]/40 blur-2xl rounded-3xl pointer-events-none -z-10" />

              {/* ── macOS Window Card (Matching Navbar Colors & Styling) ── */}
              <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[#0e1117]/85 backdrop-blur-xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden">
                {/* Glass Rim Highlight on Top (Matching Navbar) */}
                <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />

                {/* ── macOS Window Header (Traffic Lights + Tab Title) ── */}
                <div className="px-4 py-3 bg-[#11141c]/90 border-b border-white/10 flex items-center justify-between">
                  {/* Traffic Light Buttons (Red, Yellow, Green) */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/60 shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/60 shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/60 shadow-sm" />
                  </div>

                  {/* Centered Tab Label */}
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-[#161D2A]/80 border border-white/10 text-[11px] font-mono text-[#85898F]">
                    
                    <span>Zaky Ramadhakara</span>
                  </div>

                  {/* Right Window Dimension Badge */}
                  <div className="text-[10px] font-mono text-[#85898F]/60 tracking-wider">
                    1536×1024
                  </div>
                </div>

                {/* ── macOS Window Body: anot.png Landscape Photo ── */}
                <div className="relative w-full aspect-[3/2] overflow-hidden group">
                  <Image
                    src="/images/anot.png"
                    alt="Zaky Ramadhakara - Cinematic Night"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    priority
                  />

                  {/* Subtle Vignette Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Status Overlay Badge */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#F4F5E7] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Jambi City</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
