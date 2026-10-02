"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Anton } from "next/font/google";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { projects } from "@/src/data/projects";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// Map each project to its exact actual image resolution (width & height)
const projectsWithDimensions = [
  { ...projects[0], width: 653, height: 397 },    // Keluh Prov (653x397)
  { ...projects[1], width: 652, height: 817 },    // Komi Dentist (652x817)
  { ...projects[2], width: 820, height: 817 },    // Flutter UI Clothes Store (820x817)
  { ...projects[3], width: 1080, height: 1080 },  // Flutter UI E-Commerce (1080x1080)
  { ...projects[4], width: 1600, height: 744 },   // Landing Page Clothes Store (1600x744)
  { ...projects[5], width: 1600, height: 730 },   // Portal PMB Acai (1600x730)
  { ...projects[6], width: 1080, height: 1080 },  // Pawfect Shelter (1080x1080)
  { ...projects[7], width: 828, height: 816 },    // Home Cleaning (828x816)
  { ...projects[8], width: 828, height: 1032 },   // Indeks Kepuasaan Pasien (828x1032)
  { ...projects[9], width: 1200, height: 1200 },  // Clinical Pathway (1200x1200)
  { ...projects[10], width: 1200, height: 1200 }, // GymOS (1200x1200)
  { ...projects[11], width: 1856, height: 2304 }, // Suhu App (1856x2304)
];

// Distribute projects naturally across 3 columns using their real aspect ratios
const column1 = [
  projectsWithDimensions[9],  // Clinical Pathway (1200x1200)
  projectsWithDimensions[1],  // Komi Dentist (652x817)
  projectsWithDimensions[6],  // Pawfect Shelter (1080x1080)
  projectsWithDimensions[4],  // Landing Page Clothes Store (1600x744)
];

const column2 = [
  projectsWithDimensions[10], // GymOS (1200x1200)
  projectsWithDimensions[0],  // Keluh Prov (653x397)
  projectsWithDimensions[7],  // Home Cleaning (828x816)
  projectsWithDimensions[3],  // Flutter UI E-Commerce (1080x1080)
];

const column3 = [
  projectsWithDimensions[11], // Suhu App (1856x2304)
  projectsWithDimensions[8],  // Indeks Kepuasaan Pasien (828x1032)
  projectsWithDimensions[5],  // Portal PMB Acai (1600x730)
  projectsWithDimensions[2],  // Flutter UI Clothes Store (820x817)
];

export default function Projects() {
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Inertial spring smoothing for butter-smooth Framer parallax feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Staggered column parallax transforms (active on desktop 3-column view)
  // Column 1: moves at base rate
  const y1 = useTransform(smoothProgress, [0, 1], [0, -80]);
  // Column 2: starts staggered lower at +60px (matching hiartem.com offset) and glides faster to -190px
  const y2 = useTransform(smoothProgress, [0, 1], [60, -190]);
  // Column 3: starts at -20px and drifts upward to -110px
  const y3 = useTransform(smoothProgress, [0, 1], [-20, -110]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full bg-[#050606] text-[#F4F5E7] pt-20 sm:pt-28 md:pt-32 pb-28 sm:pb-36 md:pb-44 px-4 sm:px-6 md:px-8 overflow-hidden select-none"
    >
      {/* ── SECTION AMBIENT COOL GLOW ── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] rounded-full bg-[#222939] opacity-35 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-[#161D2A] opacity-30 blur-[130px] pointer-events-none" />

      {/* Subtle Tech Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(#F4F5E7 1px, transparent 1px), linear-gradient(90deg, #F4F5E7 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── EXACT MAX-WIDTH (900px) MATCHING SCREENSHOT WITH SIDE MARGINS ── */}
      <div className="max-w-[900px] mx-auto relative z-10">
        
        {/* ── SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D6B96A] shadow-[0_0_8px_rgba(214,185,106,0.6)]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#D6B96A] uppercase">
              PORTFOLIO &amp; ARTIFACTS
            </span>
          </div>

          <h2
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#F4F5E7] tracking-tight uppercase leading-[0.95] mb-4 ${anton.className}`}
          >
            WHAT MY PROJECTS <span className="block text-[#A49872]">LOOK LIKE</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#85898F] max-w-lg leading-relaxed font-normal">
            Koleksi sistem web, mobile apps, dan aplikasi digital yang telah saya kembangkan.
          </p>
        </motion.div>

        {/* ── 3-COLUMN MASONRY PHOTO GRID WITH STAGGERED PARALLAX SCROLL ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          
          {/* COLUMN 1 */}
          <motion.div
            style={isDesktop ? { y: y1 } : undefined}
            className="flex flex-col gap-5 will-change-transform"
          >
            {column1.map((item, idx) => (
              <ProjectPhotoCard
                key={item.title}
                item={item}
                index={idx}
              />
            ))}
          </motion.div>

          {/* COLUMN 2 (CENTER - STAGGERED OFFSET + FASTER PARALLAX) */}
          <motion.div
            style={isDesktop ? { y: y2 } : undefined}
            className="flex flex-col gap-5 will-change-transform"
          >
            {column2.map((item, idx) => (
              <ProjectPhotoCard
                key={item.title}
                item={item}
                index={idx}
              />
            ))}
          </motion.div>

          {/* COLUMN 3 */}
          <motion.div
            style={isDesktop ? { y: y3 } : undefined}
            className="flex flex-col gap-5 will-change-transform"
          >
            {column3.map((item, idx) => (
              <ProjectPhotoCard
                key={item.title}
                item={item}
                index={idx}
              />
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

// ── PURE PHOTO CARD: NATURAL DIMENSIONS + ENTRANCE + HOVER LIFT (DIRECT GITHUB LINK) ──
function ProjectPhotoCard({
  item,
  index,
}: {
  item: (typeof projectsWithDimensions)[0];
  index: number;
}) {
  return (
    <motion.a
      href={item.github}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min(index * 0.06, 0.24),
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { type: "spring", stiffness: 350, damping: 25 },
      }}
      style={{ aspectRatio: `${item.width} / ${item.height}` }}
      className="group relative block w-full rounded-[20px] sm:rounded-[22px] overflow-hidden cursor-pointer border border-[#1C202A] shadow-[0_6px_22px_rgba(5,6,6,0.7)] hover:shadow-[0_16px_36px_rgba(5,6,6,0.95)] hover:border-[#D6B96A]/60 transition-colors duration-300 bg-[#111318]"
    >
      {/* Edge-to-edge Image with Natural Dimensions */}
      <Image
        src={item.image}
        alt={item.title}
        width={item.width}
        height={item.height}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Subtle Bottom Vignette Gradient Directly on Image */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050606]/95 via-[#050606]/35 to-transparent pointer-events-none" />

      {/* Title & Small GitHub Button directly on image */}
      <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 flex items-center justify-between gap-2 z-10">
        <h3 className="font-display font-bold text-xs sm:text-[13px] text-[#F4F5E7] drop-shadow-[0_2px_4px_rgba(5,6,6,0.95)] truncate group-hover:text-[#D6B96A] transition-colors">
          {item.title}
        </h3>

        {/* Small GitHub Button indicator */}
        <span
          className="shrink-0 p-1.5 sm:p-2 rounded-full bg-[#050606]/75 group-hover:bg-[#1C202A] backdrop-blur-md border border-[#1C202A] group-hover:border-[#D6B96A] text-[#85898F] group-hover:text-[#F4F5E7] transition-all flex items-center justify-center shadow-md"
          title={`Buka ${item.title} di GitHub`}
          aria-label={`Buka ${item.title} di GitHub`}
        >
          <GithubIcon />
        </span>
      </div>
    </motion.a>
  );
}