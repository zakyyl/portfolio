import Image from "next/image";
import { Anton, Montserrat } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

export default function Hero() {
  return (
    <section
      id="hero"
      className={`relative h-screen w-full bg-[var(--color-primary)] overflow-hidden select-none flex flex-col ${montserrat.className}`}
    >
      {/* ── Ambient Glow ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410] via-[#0e0b08] to-[var(--color-primary)] pointer-events-none" />

      {/* Subtle Tech Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#e8ded1 1px, transparent 1px), linear-gradient(90deg, #e8ded1 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* ── Background Blob ── */}
      {/* A large, soft shape behind the text and person, matching the reference */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[85vh] bg-[#5c3d1e] opacity-15 blur-[60px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] pointer-events-none" 
      />

      {/* ──────────────────────────────────────
          TOP LABELS
      ────────────────────────────────────── */}
      <div className="absolute top-[14%] sm:top-[16%] md:top-[18%] left-0 w-full px-5 sm:px-8 md:px-16 flex justify-between items-center z-10">
        <span className="text-[10px] sm:text-xs md:text-sm font-extrabold tracking-wider sm:tracking-widest text-[#e8ded1] uppercase">
          SOFTWARE ENGINEER
        </span>
        <span className="text-[10px] sm:text-xs md:text-sm font-extrabold tracking-wider sm:tracking-widest text-[#e8ded1] uppercase">
          ZAKY RAMADHAKARA
        </span>
      </div>

      {/* ──────────────────────────────────────
          MAIN AREA — Text (behind) + Photo (front)
      ────────────────────────────────────── */}
      {/* PORTFOLIO TEXT — BEHIND THE PHOTO (z-10) */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center items-center z-10 w-full px-2 sm:px-4"
      >
        <span
          className={`text-[#e8ded1] uppercase leading-none tracking-normal ${anton.className}`}
          style={{ 
            fontSize: "clamp(60px, 18.5vw, 400px)",
            transform: "scaleY(1.35)" // Makes the font tall/condensed like the reference
          }}
        >
          PORTFOLIO
        </span>
      </div>

      {/* PERSON PHOTO — IN FRONT OF TEXT (z-20) */}
      <div className="absolute inset-x-0 bottom-0 h-[78vh] sm:h-[84vh] md:h-[88vh] flex items-end justify-center z-20 pointer-events-none">
        <div className="relative w-[280px] sm:w-[420px] md:w-[550px] lg:w-[680px] h-full">
          <Image
            src="/images/heroo.png"
            alt="Zaky Ramadhakara"
            fill
            sizes="(max-width: 768px) 85vw, 680px"
            className="object-contain object-bottom drop-shadow-[15px_10px_18px_rgba(0,0,0,0.95)] sm:drop-shadow-[25px_10px_20px_rgba(0,0,0,0.95)]"
            priority
          />
        </div>
      </div>

      {/* ──────────────────────────────────────
          BOTTOM ROW
      ────────────────────────────────────── */}
      <div className="absolute bottom-[6%] sm:bottom-[8%] md:bottom-[12%] left-0 w-full px-5 sm:px-8 md:px-16 flex flex-col md:flex-row justify-between items-center md:items-end z-30 pointer-events-none gap-3">
        {/* Description left */}
        <p className="max-w-[320px] md:max-w-[300px] text-center md:text-left text-[11px] sm:text-xs text-[#e8ded1]/85 md:text-[#e8ded1]/80 leading-relaxed font-medium pointer-events-auto bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-2.5 rounded-xl md:p-0">
          Software Engineer dengan fokus pada arsitektur web modern, pengembangan mobile lintas platform, dan integrasi sistem skala besar berbasis Laravel, Next.js, serta Flutter.
        </p>

        {/* Description right (Desktop only) */}
        <p className="hidden md:block max-w-[300px] text-right text-xs text-[#e8ded1]/80 leading-relaxed font-medium pointer-events-auto">
          Terbuka untuk peluang kerja fulltime, proyek kolaborasi, maupun diskusi seputar pengembangan produk digital.
        </p>
      </div>
      


    </section>
  );
}