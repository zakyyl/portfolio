import Image from "next/image";
import { Anton, Montserrat } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  display: "swap",
});

export default function Hero() {
  return (
    <section
      id="hero"
      className={`relative h-screen w-full bg-[#050606] overflow-hidden select-none flex items-center justify-center ${montserrat.className}`}
    >
      {/* ── Background Image (heros.png) with High Visibility City Lights ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/heros.png"
          alt="City Lights Skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter blur-[3px] scale-[1.03] brightness-[0.95] contrast-[1.12]"
        />

        {/* Soft bottom transition and subtle top vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050606] via-transparent to-black/30" />
      </div>

      {/* Subtle Tech Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#F4F5E7 1px, transparent 1px), linear-gradient(90deg, #F4F5E7 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* ──────────────────────────────────────
          MAIN TYPOGRAPHY (Over the Background)
      ────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
        {/* Role Tag (Warm Gold Accent) */}
        <div className="mb-2 sm:mb-4">
          <span className="text-[10px] sm:text-xs md:text-sm font-mono font-bold tracking-[0.3em] uppercase text-[#D6B96A] drop-shadow-[0_2px_8px_rgba(5,6,6,0.9)]">
            SOFTWARE ENGINEER
          </span>
        </div>

        {/* PORTFOLIO (Warm White) */}
        <h1
          className={`text-[#F4F5E7] uppercase leading-none tracking-tight sm:tracking-normal drop-shadow-[0_15px_35px_rgba(5,6,6,0.95)] ${anton.className}`}
          style={{
            fontSize: "clamp(64px, 16vw, 220px)",
            transform: "scaleY(1.2)",
          }}
        >
          PORTFOLIO
        </h1>

        {/* ZAKY RAMADHAKARA (Warm White / Champagne) */}
        <p className="text-[#F4F5E7] uppercase font-black tracking-[0.25em] sm:tracking-[0.4em] drop-shadow-[0_8px_20px_rgba(5,6,6,0.95)] mt-4 sm:mt-6 text-sm sm:text-xl md:text-2xl lg:text-3xl">
          ZAKY RAMADHAKARA
        </p>
      </div>

      {/* ── Subtle Bottom Scroll Indicator ── */}
      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex justify-center items-center z-10 pointer-events-none">
        <div className="flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#85898F] uppercase">
            SCROLL
          </span>
          <div className="w-[1px] h-5 bg-gradient-to-b from-[#D6B96A] to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}