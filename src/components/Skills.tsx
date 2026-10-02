"use client";

import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

interface ToolItem {
  id: string;
  name: string;
  category: string;
  color: string;
  iconType: "image" | "svg";
  imageSrc?: string;
  svgIcon?: React.ReactNode;
}

// ─── AUTHENTIC TECH SVG LOGOS ───
const PostmanLogo = () => (
  <svg viewBox="0 0 256 256" className="w-6 h-6">
    <path fill="#FF6C37" d="M128 0C57.31 0 0 57.31 0 128s57.31 128 128 128 128-57.31 128-128S198.69 0 128 0z" />
    <path fill="#FFFFFF" d="M192.49 97.43c-3.15-10.42-12.78-17.75-23.77-18.11l-34.92-1.14c-1.84-.06-3.66.45-5.21 1.45L95.53 100.8c-3.79 2.45-5.91 6.84-5.46 11.34.45 4.5 3.39 8.36 7.58 9.96l24.47 9.35-1.34 16.94c-.26 3.28 1.19 6.46 3.82 8.37 2.63 1.91 6.06 2.38 9.09 1.23l25.32-9.6c4.27-1.62 7.15-5.61 7.39-10.18l1.45-27.53 23.3-8.85c3.78-1.44 6.55-4.73 7.34-8.74.79-4.01-.44-8.15-3.2-11.06zm-45.54 28.53l-18.28-6.98 22.84-21.45 1.7 20.3-6.26 8.13z" />
  </svg>
);

const MikroTikLogo = () => (
  <svg viewBox="0 0 256 256" className="w-6 h-6">
    <rect width="256" height="256" rx="48" fill="#1b2228" />
    <path fill="#299FD6" d="M38 52h180a14 14 0 0 1 14 14v124a14 14 0 0 1-14 14H38a14 14 0 0 1-14-14V66a14 14 0 0 1 14-14z"/>
    <path fill="#FFFFFF" d="M60 92v72h22v-44l28 36 28-36v44h22V92h-22l-28 36-28-36H60zm112 0v72h22V92h-22z"/>
  </svg>
);

const AaPanelLogo = () => (
  <svg viewBox="0 0 256 256" className="w-6 h-6">
    <rect width="256" height="256" rx="48" fill="#112217" />
    <path fill="#20A53A" d="M128 36l-72 32v64c0 48 32 92 72 104 40-12 72-56 72-104V68l-72-32z" />
    <path fill="#FFFFFF" d="M100 116a28 28 0 1 1 56 0 28 28 0 0 1-56 0zm20 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0z" />
  </svg>
);

const NotionLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.455-.7c.373 0 .28-.466-.093-.56L15.845 2.15c-.467-.373-.933-.56-1.586-.56L3.992 2.71c-.56.094-.653.467-.373.84zm.84 4.293v12.41c0 .84.466 1.213 1.306 1.12l13.155-.747c.84-.093 1.026-.653 1.026-1.306V7.475c0-.653-.28-1.026-.933-.933l-13.62.747c-.654.093-.934.56-.934 1.213zm12.595.093c.093.467 0 .934-.373 1.027l-.747.373v8.307c-.466.28-1.026.467-1.493.467-.746 0-1.026-.28-1.68-.934l-4.759-7.373v7.093l1.307.28c.093.467 0 .934-.374 1.027l-3.266.187c-.093-.467 0-.934.373-1.027l.934-.28V9.715l-1.307-.187c-.093-.466 0-.933.374-1.026l3.36-.187 4.945 7.467V9.248l-1.213-.187c-.093-.466 0-.933.373-1.026z" />
  </svg>
);

const VSCodeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#007ACC]">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.27a.997.997 0 0 0-.057 1.417L4.54 13 .27 17.313a.998.998 0 0 0 .057 1.417l1.322 1.211a.998.998 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 22.06V3.94a1.5 1.5 0 0 0-.85-1.353zm-6.65 14.538L9.957 13l6.543-4.125v8.25z" />
  </svg>
);

const TypeScriptLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path fill="#fff" d="M14.9 14.2c.5.8 1.2 1.3 2.2 1.3.9 0 1.5-.4 1.5-1.1 0-.7-.5-1-1.6-1.5l-.8-.3c-1.6-.7-2.7-1.5-2.7-3.3 0-2.2 1.7-3.5 4.1-3.5 1.7 0 2.9.6 3.7 1.9l-1.9 1.2c-.4-.6-.9-.9-1.8-.9-.8 0-1.4.4-1.4 1 0 .6.4.9 1.4 1.3l.8.3c1.9.8 3 1.7 3 3.5 0 2.4-1.8 3.7-4.4 3.7-2.3 0-3.8-1-4.6-2.5l2.5-1.6zM6 8.2H12v2.4H9.6v9.8H6.9v-9.8H6V8.2z" />
  </svg>
);

const LinuxLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#FCC624]">
    <path d="M12.001 0C8.618 0 5.86 2.758 5.86 6.141c0 1.23.363 2.378.986 3.336L5.34 13.43c-.476 1.05-.184 2.296.697 3.016l.24.195c-.328.664-.46 1.417-.373 2.176.172 1.492 1.3 2.723 2.793 3.012 2.148.418 4.25-.434 5.258-2.14 1.008 1.706 3.11 2.558 5.258 2.14 1.492-.289 2.62-1.52 2.793-3.012.087-.76-.045-1.512-.373-2.176l.24-.195c.88-.72 1.173-1.966.697-3.016l-1.506-3.953c.623-.958.986-2.106.986-3.336C18.142 2.758 15.384 0 12.001 0z" />
  </svg>
);

const DartLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#0175C2" d="M4.11 0L0 4.11l13.68 13.68H24V4.11L4.11 0z" />
    <path fill="#01579B" d="M17.69 6.31L13.68 2.3 0 15.98V24h8.02l9.67-9.67-4.01-4.01 4.01-4.01z" />
    <path fill="#29B6F6" d="M4.11 24H12l7.89-7.89-4.01-4.01L4.11 24z" />
  </svg>
);

// ─── ROW 1: FRAMEWORKS, CORE WEB, MOBILE & DATABASE ───
const row1Tools: ToolItem[] = [
  {
    id: "laravel",
    name: "Laravel",
    category: "Backend Framework",
    color: "#FF2D20",
    iconType: "image",
    imageSrc: "/images/logos/laravel.png",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Fullstack Web",
    color: "#FFFFFF",
    iconType: "image",
    imageSrc: "/images/logos/nextjs.png",
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "Mobile Multiplatform",
    color: "#54C5F8",
    iconType: "image",
    imageSrc: "/images/logos/flutter.png",
  },
  {
    id: "react",
    name: "React",
    category: "Frontend UI",
    color: "#61DAFB",
    iconType: "image",
    imageSrc: "/images/logos/react.png",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Styling & UI",
    color: "#38BDF8",
    iconType: "image",
    imageSrc: "/images/logos/tailwind.png",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Type-Safe JS",
    color: "#3178C6",
    iconType: "svg",
    svgIcon: <TypeScriptLogo />,
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Relational DB",
    color: "#00758F",
    iconType: "image",
    imageSrc: "/images/logos/mysql.png",
  },
  {
    id: "dart",
    name: "Dart",
    category: "Client-Optimized",
    color: "#0175C2",
    iconType: "svg",
    svgIcon: <DartLogo />,
  },
];

// ─── ROW 2: DEVOPS, SERVER, NETWORK & PRODUCTIVITY TOOLS ───
const row2Tools: ToolItem[] = [
  {
    id: "aapanel",
    name: "aaPanel",
    category: "VPS Web Panel",
    color: "#20A53A",
    iconType: "svg",
    svgIcon: <AaPanelLogo />,
  },
  {
    id: "linux",
    name: "Linux VPS",
    category: "Server OS",
    color: "#FCC624",
    iconType: "svg",
    svgIcon: <LinuxLogo />,
  },
  {
    id: "mikrotik",
    name: "MikroTik",
    category: "RouterOS & Network",
    color: "#2A9FD6",
    iconType: "svg",
    svgIcon: <MikroTikLogo />,
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control",
    color: "#F05032",
    iconType: "image",
    imageSrc: "/images/logos/git.png",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Code Repo & CI/CD",
    color: "#FFFFFF",
    iconType: "image",
    imageSrc: "/images/logos/github.png",
  },
  {
    id: "postman",
    name: "Postman",
    category: "API Testing",
    color: "#FF6C37",
    iconType: "svg",
    svgIcon: <PostmanLogo />,
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "Primary Code Editor",
    color: "#007ACC",
    iconType: "svg",
    svgIcon: <VSCodeLogo />,
  },
  {
    id: "notion",
    name: "Notion",
    category: "Docs & Workspace",
    color: "#FFFFFF",
    iconType: "svg",
    svgIcon: <NotionLogo />,
  },
];

function ToolCard({ tool }: { tool: ToolItem }) {
  return (
    <div className="relative group/card flex items-center gap-3.5 px-4 py-3 min-w-[210px] sm:min-w-[235px] rounded-2xl bg-[#111318] border border-[#1C202A] hover:border-[#D6B96A]/60 transition-colors duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.4)] cursor-pointer select-none overflow-hidden flex-shrink-0">
      {/* Dynamic Hover Ambient Radial Glow (zero GPU blur overhead) */}
      <div
        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 85% 85%, ${tool.color}25 0%, transparent 65%)`,
        }}
      />

      {/* Logo Container */}
      <div className="relative w-11 h-11 rounded-xl bg-[#050606] border border-[#1C202A] group-hover/card:border-[#D6B96A]/40 flex items-center justify-center p-2 flex-shrink-0 transition-colors shadow-inner">
        {tool.iconType === "image" && tool.imageSrc ? (
          <div className="relative w-6 h-6 group-hover/card:scale-110 transition-transform duration-200">
            <Image
              src={tool.imageSrc}
              alt={`${tool.name} logo`}
              fill
              className={`object-contain ${
                tool.id === "nextjs" ? "brightness-200 invert" : ""
              }`}
            />
          </div>
        ) : (
          <div className="group-hover/card:scale-110 transition-transform duration-200">
            {tool.svgIcon}
          </div>
        )}
      </div>

      {/* Tool Info */}
      <div className="flex flex-col text-left min-w-0 pr-1 relative z-10">
        <div className="flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: tool.color }}
          />
          <h3 className="text-sm sm:text-base font-bold text-[#F4F5E7] group-hover/card:text-white tracking-tight truncate">
            {tool.name}
          </h3>
        </div>
        <p className="text-[11px] sm:text-xs text-[#85898F] group-hover/card:text-[#A49872] truncate tracking-wide mt-0.5">
          {tool.category}
        </p>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-20 md:py-28 overflow-hidden bg-[#050606] select-none"
    >
      {/* Background Ambient Cool Glow (GPU-friendly radial gradient) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[radial-gradient(ellipse_at_center,#222939_0%,transparent_70%)] opacity-35 pointer-events-none" />

      {/* Section Header */}
      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 text-center mb-12 sm:mb-14 z-10">
        {/* Category Mono Tag */}
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#111318] border border-[#1C202A]">
          <span className="w-2 h-2 rounded-full bg-[#D6B96A] shadow-[0_0_8px_rgba(214,185,106,0.6)]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#D6B96A] uppercase">
            TECH STACK
          </span>
        </div>

        {/* Main Heading */}
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-black text-[#F4F5E7] tracking-tight uppercase leading-[0.95] mb-4 ${anton.className}`}
        >
          SKILLS &amp; <span className="text-[#A49872]">TOOLS</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#85898F] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Kumpulan bahasa pemrograman, framework, dan software yang saya gunakan untuk merancang sistem, aplikasi mobile/website, serta infrastruktur.
        </p>
      </div>

      {/* ─── HORIZONTAL MOVING TRACKS (CARD KECIL PER TOOLS) ─── */}
      <div className="relative w-full overflow-hidden flex flex-col gap-4 sm:gap-5 z-10">
        
        {/* Left & Right Fade Edges for Infinite Seamless Glide */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-[#050606] via-[#050606]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-[#050606] via-[#050606]/80 to-transparent z-20" />

        {/* ── TRACK 1: MOVING LEFT ── */}
        <div className="relative w-full overflow-hidden group">
          <div className="animate-marquee-left flex gap-4 sm:gap-5 py-1">
            {/* First Set */}
            {row1Tools.map((tool, idx) => (
              <ToolCard key={`t1-a-${tool.id}-${idx}`} tool={tool} />
            ))}
            {/* Duplicated Set for Seamless Infinite Loop */}
            {row1Tools.map((tool, idx) => (
              <ToolCard key={`t1-b-${tool.id}-${idx}`} tool={tool} />
            ))}
          </div>
        </div>

        {/* ── TRACK 2: MOVING RIGHT ── */}
        <div className="relative w-full overflow-hidden group">
          <div className="animate-marquee-right flex gap-4 sm:gap-5 py-1">
            {/* First Set */}
            {row2Tools.map((tool, idx) => (
              <ToolCard key={`t2-a-${tool.id}-${idx}`} tool={tool} />
            ))}
            {/* Duplicated Set for Seamless Infinite Loop */}
            {row2Tools.map((tool, idx) => (
              <ToolCard key={`t2-b-${tool.id}-${idx}`} tool={tool} />
            ))}
          </div>
        </div>

      </div>

      {/* Subtle Interaction Note */}
      <div className="relative z-10 mt-8 sm:mt-10 flex items-center justify-center gap-2 text-center">
      </div>
    </section>
  );
}