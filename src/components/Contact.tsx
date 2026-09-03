"use client";

import { ArrowUpRight, ArrowUp } from "lucide-react";

const contactLinks = [
  {
    index: "01",
    name: "Email",
    value: "zakyramadhakara@gmail.com",
    href: "mailto:zakyramadhakara@gmail.com",
    indentClass: "md:w-[88%] md:ml-0",
    hoverColor: "group-hover:border-amber-400 group-hover:text-amber-300",
  },
  {
    index: "02",
    name: "LinkedIn",
    value: "linkedin.com/in/zaky-ramadhakara",
    href: "https://www.linkedin.com/in/zaky-ramadhakara",
    indentClass: "md:w-[88%] md:ml-[6%]",
    hoverColor: "group-hover:border-sky-400 group-hover:text-sky-300",
  },
  {
    index: "03",
    name: "GitHub",
    value: "github.com/zakyyl",
    href: "https://github.com/zakyyl",
    indentClass: "md:w-[88%] md:ml-[12%]",
    hoverColor: "group-hover:border-stone-300 group-hover:text-stone-200",
  },
];

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden select-none"
    >
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[var(--color-accent)] opacity-20 blur-[150px] pointer-events-none" />

      {/* ─── SECTION HEADER ─── */}
      <div className="mb-10 md:mb-18 relative z-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-2 sm:mb-3">
          Get In <span className="text-[var(--color-text)]">Touch</span>
        </h2>
        
        <p className="text-stone-400 text-xs sm:text-base max-w-md leading-relaxed">
          Tertarik berkolaborasi atau memiliki peluang proyek? Hubungi saya melalui tautan di bawah ini.
        </p>
      </div>

      {/* ─── MINIMALIST STEPPED STAIR ROWS ("Nangga Turun") ─── */}
      <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-14 sm:mb-20 relative z-10">
        {contactLinks.map((contact) => (
          <div
            key={contact.name}
            className={`w-full transition-all duration-300 ${contact.indentClass}`}
          >
            <a
              href={contact.href}
              target={contact.name !== "Email" ? "_blank" : undefined}
              rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between py-4 sm:py-6 border-b border-[#403427] hover:border-white/80 transition-all duration-300 cursor-pointer"
            >
              {/* Left Side: Number & Name */}
              <div className="flex items-center gap-3.5 sm:gap-6 min-w-0 flex-1 mr-3">
                <span className="text-xs sm:text-sm font-mono font-bold text-stone-500 group-hover:text-stone-300 transition-colors shrink-0">
                  /{contact.index}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-xl md:text-2xl font-black text-white group-hover:text-amber-200 transition-colors">
                    {contact.name}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-stone-400 group-hover:text-stone-300 transition-colors truncate sm:break-normal">
                    {contact.value}
                  </p>
                </div>
              </div>

              {/* Right Side: Arrow Action */}
              <div className="flex items-center gap-2 text-stone-500 group-hover:text-white transition-colors shrink-0">
                <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline-block opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  Kunjungi
                </span>
                <div className="p-1.5 sm:p-2 rounded-full border border-transparent group-hover:border-white/20 group-hover:bg-white/5 transition-all">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* ─── MINIMALIST CLEAN FOOTER ─── */}
      <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 relative z-10 text-center sm:text-left">
        <p className="font-semibold text-stone-400 tracking-wider">
          ZAKY RAMADHAKARA · SOFTWARE ENGINEER
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer py-1 px-2.5 rounded-lg hover:bg-white/5"
        >
          <span>Kembali ke atas</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

    </section>
  );
}