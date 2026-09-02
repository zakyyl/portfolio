import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800", "900"],
  display: "swap",
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen max-h-screen w-full bg-[var(--color-primary)] overflow-hidden select-none"
    >
      {/* ─── AMBIENT WARM LIGHTING BACKGROUND ─── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#18130e] via-[#110e0a] to-[var(--color-primary)] pointer-events-none" />

      {/* Center Spotlight Glow behind typography & portrait */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[var(--color-accent)] opacity-40 blur-[130px] pointer-events-none" />

      {/* Subtle Tech Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#e8ded1 1px, transparent 1px), linear-gradient(90deg, #e8ded1 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* ─── 4-CORNER LABELS & LINKS (Floating inside Hero) ─── */}
      {/* Top-Left */}
      <div className="absolute top-20 left-6 md:left-12 z-40 flex items-center gap-2 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#e8ded1]/80">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span></span>
      </div>

      {/* Top-Right */}
      <div className="absolute top-20 right-6 md:right-12 z-40 text-right text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
        <span>SOFTWARE ENGINEER</span>
      </div>

      {/* Bottom-Left */}
      <div className="absolute bottom-6 left-6 md:left-12 z-40 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#e8ded1]/85">
        <a
          href="https://github.com/zakyyl"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors underline underline-offset-4"
        >
          GITHUB
        </a>
      </div>

      {/* Bottom-Right */}
      <div className="absolute bottom-6 right-6 md:right-12 z-40 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#e8ded1]/85">
        <a
          href="https://www.linkedin.com/in/zaky-ramadhakara"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors underline underline-offset-4"
        >
          LINKEDIN
        </a>
      </div>

      {/* ─── CENTER COMPOSITION: 3D LAYERED TEXT & CUTOUT ─── */}
      {/* ── LAYER 1 (BACK): Solid Giant Typography ── */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center leading-[0.88] uppercase z-10 pointer-events-none ${montserrat.className}`}
      >
        <span className="text-[12vw] sm:text-[11vw] md:text-[100px] lg:text-[125px] xl:text-[145px] font-black tracking-tight text-[#e8ded1] drop-shadow-2xl">
          PORTFOLIO
        </span>
        <span className="text-[5.8vw] sm:text-[5.2vw] md:text-[48px] lg:text-[60px] xl:text-[70px] font-black tracking-wider text-[#e8ded1] drop-shadow-2xl mt-1">
          ZAKY RAMADHAKARA
        </span>
      </div>

      {/* ── LAYER 2 (MIDDLE): Full-Height Centered Cutout Photo (TRANS.png) ── */}
      <div className="absolute inset-x-0 bottom-0 h-[78vh] sm:h-[82vh] md:h-[86vh] lg:h-[90vh] flex items-end justify-center z-20 pointer-events-none">
        <div className="relative w-[340px] sm:w-[440px] md:w-[540px] lg:w-[620px] h-full">
          <Image
            src="/images/TRANS.png"
            alt="Zaky Ramadhakara - Portfolio"
            fill
            sizes="(max-width: 768px) 90vw, 620px"
            className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
            priority
          />
        </div>
      </div>

      {/* ── LAYER 3 (FRONT): Stroke / Wireframe Outlined Text ── */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center leading-[0.88] uppercase z-30 pointer-events-none ${montserrat.className}`}
      >
        <span
          className="text-[12vw] sm:text-[11vw] md:text-[100px] lg:text-[125px] xl:text-[145px] font-black tracking-tight text-transparent"
          style={{
            WebkitTextStroke: "1.5px #e8ded1",
          }}
        >
          PORTFOLIO
        </span>
        <span
          className="text-[5.8vw] sm:text-[5.2vw] md:text-[48px] lg:text-[60px] xl:text-[70px] font-black tracking-wider text-transparent mt-1"
          style={{
            WebkitTextStroke: "1.5px #e8ded1",
          }}
        >
          ZAKY RAMADHAKARA
        </span>
      </div>
    </section>
  );
}