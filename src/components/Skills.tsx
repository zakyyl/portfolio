"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Sparkles, Code2, Smartphone, Server, Wrench, ChevronRight } from "lucide-react";

interface SkillCard {
  id: string;
  name: string;
  categoryLabel: string;
  badge: string;
  role: string;
  description: string;
  tags: string[];
  color: string;
  iconType: "image" | "svg";
  imageSrc?: string;
  svgIcon?: React.ReactNode;
}

// ─── AUTHENTIC OFFICIAL TECH SVG LOGOS ───
const FlutterLogo = () => (
  <svg viewBox="0 0 24 24" className="w-11 h-11">
    <path fill="#47C5FB" d="M14.314 0L2.3 12l3.702 3.702L21.714 0h-7.4z" />
    <path fill="#47C5FB" d="M14.29 10.966L6.01 19.246l3.7 3.7 8.28-8.28-3.7-3.7z" />
    <path fill="#00569E" d="M14.29 18.366l3.7 3.7h7.4l-7.4-7.4-3.7 3.7z" />
    <path fill="#00B5F8" d="M17.99 14.666l-3.7 3.7 3.7 3.7 3.7-3.7-3.7-3.7z" />
  </svg>
);

const PostmanLogo = () => (
  <svg viewBox="0 0 256 256" className="w-11 h-11">
    <path fill="#FF6C37" d="M128 0C57.31 0 0 57.31 0 128s57.31 128 128 128 128-57.31 128-128S198.69 0 128 0z" />
    <path fill="#FFFFFF" d="M192.49 97.43c-3.15-10.42-12.78-17.75-23.77-18.11l-34.92-1.14c-1.84-.06-3.66.45-5.21 1.45L95.53 100.8c-3.79 2.45-5.91 6.84-5.46 11.34.45 4.5 3.39 8.36 7.58 9.96l24.47 9.35-1.34 16.94c-.26 3.28 1.19 6.46 3.82 8.37 2.63 1.91 6.06 2.38 9.09 1.23l25.32-9.6c4.27-1.62 7.15-5.61 7.39-10.18l1.45-27.53 23.3-8.85c3.78-1.44 6.55-4.73 7.34-8.74.79-4.01-.44-8.15-3.2-11.06zm-45.54 28.53l-18.28-6.98 22.84-21.45 1.7 20.3-6.26 8.13z" />
  </svg>
);

const MikroTikLogo = () => (
  <svg viewBox="0 0 256 256" className="w-11 h-11">
    <rect width="256" height="256" rx="48" fill="#1b2228" />
    <path fill="#299FD6" d="M38 52h180a14 14 0 0 1 14 14v124a14 14 0 0 1-14 14H38a14 14 0 0 1-14-14V66a14 14 0 0 1 14-14z"/>
    <path fill="#FFFFFF" d="M60 92v72h22v-44l28 36 28-36v44h22V92h-22l-28 36-28-36H60zm112 0v72h22V92h-22z"/>
  </svg>
);

const AaPanelLogo = () => (
  <svg viewBox="0 0 256 256" className="w-11 h-11">
    <rect width="256" height="256" rx="48" fill="#112217" />
    <path fill="#20A53A" d="M128 36l-72 32v64c0 48 32 92 72 104 40-12 72-56 72-104V68l-72-32z" />
    <path fill="#FFFFFF" d="M100 116a28 28 0 1 1 56 0 28 28 0 0 1-56 0zm20 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0z" />
  </svg>
);

const NotionLogo = () => (
  <svg viewBox="0 0 24 24" className="w-11 h-11 fill-white">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.455-.7c.373 0 .28-.466-.093-.56L15.845 2.15c-.467-.373-.933-.56-1.586-.56L3.992 2.71c-.56.094-.653.467-.373.84zm.84 4.293v12.41c0 .84.466 1.213 1.306 1.12l13.155-.747c.84-.093 1.026-.653 1.026-1.306V7.475c0-.653-.28-1.026-.933-.933l-13.62.747c-.654.093-.934.56-.934 1.213zm12.595.093c.093.467 0 .934-.373 1.027l-.747.373v8.307c-.466.28-1.026.467-1.493.467-.746 0-1.026-.28-1.68-.934l-4.759-7.373v7.093l1.307.28c.093.467 0 .934-.374 1.027l-3.266.187c-.093-.467 0-.934.373-1.027l.934-.28V9.715l-1.307-.187c-.093-.466 0-.933.374-1.026l3.36-.187 4.945 7.467V9.248l-1.213-.187c-.093-.466 0-.933.373-1.026z" />
  </svg>
);

const VSCodeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-11 h-11 fill-[#007ACC]">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.27a.997.997 0 0 0-.057 1.417L4.54 13 .27 17.313a.998.998 0 0 0 .057 1.417l1.322 1.211a.998.998 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 22.06V3.94a1.5 1.5 0 0 0-.85-1.353zm-6.65 14.538L9.957 13l6.543-4.125v8.25z" />
  </svg>
);

const skillsData: SkillCard[] = [
  {
    id: "laravel",
    name: "Laravel",
    categoryLabel: "Backend Framework",
    badge: "Core Stack",
    role: "Backend Architecture & API",
    description: "Pengembangan sistem backend yang aman, terstruktur, dan modular dengan ekosistem ORM, routing terpusat, dan RESTful API.",
    tags: ["PHP", "MVC", "REST API", "Eloquent ORM", "Blade"],
    color: "#FF2D20",
    iconType: "image",
    imageSrc: "/images/logos/laravel.png",
  },
  {
    id: "flutter",
    name: "Flutter & Dart",
    categoryLabel: "Mobile Framework",
    badge: "Specialist",
    role: "Cross-Platform Mobile App",
    description: "Membangun aplikasi mobile multiplatform (Android & iOS) dengan tampilan responsif, performa native, dan state management modern.",
    tags: ["Dart", "BLoC / Provider", "Material 3", "REST Integration"],
    color: "#54C5F8",
    iconType: "svg",
    svgIcon: <FlutterLogo />,
  },
  {
    id: "nextjs",
    name: "Next.js & React",
    categoryLabel: "Frontend & Fullstack",
    badge: "Core Stack",
    role: "Modern Web Application",
    description: "Pengembangan aplikasi web modern berperforma tinggi dengan server-side rendering, routing fleksibel, dan arsitektur komponen.",
    tags: ["App Router", "SSR / SSG", "TypeScript", "Tailwind CSS"],
    color: "#FFFFFF",
    iconType: "image",
    imageSrc: "/images/logos/nextjs.png",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    categoryLabel: "Styling & UI Design",
    badge: "Proficient",
    role: "Modern Responsive UI",
    description: "Perancangan sistem antarmuka web yang modern, konsisten, dan responsif dengan konsep utility-first styling dan dark mode.",
    tags: ["Tailwind v4", "shadcn/ui", "Framer Motion", "Flex/Grid"],
    color: "#38BDF8",
    iconType: "image",
    imageSrc: "/images/logos/tailwind.png",
  },
  {
    id: "mysql",
    name: "MySQL & SQL",
    categoryLabel: "Relational Database",
    badge: "Database",
    role: "Data Modeling & Storage",
    description: "Perancangan skema basis data relasional yang efisien, optimasi query berkecepatan tinggi, dan pemeliharaan integritas data.",
    tags: ["Indexing", "Migrations", "Foreign Keys", "Query Optimization"],
    color: "#00758F",
    iconType: "image",
    imageSrc: "/images/logos/mysql.png",
  },
  {
    id: "aapanel",
    name: "aaPanel & Linux",
    categoryLabel: "Server Management",
    badge: "DevOps",
    role: "VPS & Web Deployment",
    description: "Pengelolaan VPS Linux, instalasi web server Nginx/Apache, konfigurasi sertifikat SSL, cronjobs, dan pemeliharaan server.",
    tags: ["Linux VPS", "Nginx", "SSL Certs", "PM2 / Supervisor"],
    color: "#20A53A",
    iconType: "svg",
    svgIcon: <AaPanelLogo />,
  },
  {
    id: "mikrotik",
    name: "MikroTik RouterOS",
    categoryLabel: "Computer Networking",
    badge: "Network",
    role: "Network Configuration",
    description: "Konfigurasi routing dasar, manajemen alokasi bandwidth, manajemen DHCP/Hotspot server, VLAN, dan pengaturan keamanan jaringan.",
    tags: ["Routing", "DHCP Server", "Hotspot", "VLAN", "NAT"],
    color: "#2A9FD6",
    iconType: "svg",
    svgIcon: <MikroTikLogo />,
  },
  {
    id: "git",
    name: "Git & GitHub",
    categoryLabel: "Version Control",
    badge: "Workflow",
    role: "Code Collaboration & CI/CD",
    description: "Manajemen kontrol versi kode sumber, kolaborasi tim yang terstruktur, branching strategy, dan integrasi pipeline deployment.",
    tags: ["Branching", "Pull Requests", "GitHub Actions", "Vercel"],
    color: "#F05032",
    iconType: "image",
    imageSrc: "/images/logos/git.png",
  },
  {
    id: "notion",
    name: "Notion",
    categoryLabel: "Project Management",
    badge: "Productivity",
    role: "Workspace & Documentation",
    description: "Dokumentasi teknis spesifikasi sistem, manajemen timeline proyek dengan Kanban board, dan perancangan roadmap kerja.",
    tags: ["Kanban", "Documentation", "Sprint Roadmaps", "Database Wiki"],
    color: "#FFFFFF",
    iconType: "svg",
    svgIcon: <NotionLogo />,
  },
  {
    id: "postman",
    name: "Postman",
    categoryLabel: "API Testing & Docs",
    badge: "Testing",
    role: "API Testing & Automation",
    description: "Pengujian menyeluruh endpoint REST API, otomasi pengiriman payload, validasi respons JSON, dan dokumentasi API yang rapi.",
    tags: ["REST Testing", "Auth Bearer", "Environment Vars", "JSON"],
    color: "#FF6C37",
    iconType: "svg",
    svgIcon: <PostmanLogo />,
  },
  {
    id: "vscode",
    name: "VS Code",
    categoryLabel: "Development Environment",
    badge: "Tools",
    role: "Primary Code Editor",
    description: "Editor utama dengan konfigurasi linter, debugging terintegrasi, manajemen ekstensi produktivitas, dan navigasi kode cepat.",
    tags: ["Extensions", "Debugger", "Emmet", "Git Lens"],
    color: "#007ACC",
    iconType: "svg",
    svgIcon: <VSCodeLogo />,
  },
];

function InteractiveCardDeck() {
  const [deck, setDeck] = useState(skillsData);

  const handleSwipe = () => {
    setDeck((prev) => {
      if (prev.length === 0) return prev;
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  return (
    <div className="relative w-full flex items-center justify-center gap-3 sm:gap-5 py-6">
      {/* 3D Stack Container with High-Visibility Fanning Layers */}
      <div className="relative w-[300px] sm:w-[340px] md:w-[370px] h-[460px] md:h-[490px]">
        <AnimatePresence mode="popLayout">
          {deck.slice(0, 4).map((card, index) => {
            const isTop = index === 0;

            return (
              <SwipeableCard
                key={card.id}
                card={card}
                index={index}
                isTop={isTop}
                onSwipe={handleSwipe}
              />
            );
          })}
        </AnimatePresence>
      </div>

      {/* Simple Pure Arrow Button */}
      <button
        onClick={handleSwipe}
        className="p-2 text-stone-400 hover:text-white hover:scale-125 active:scale-90 transition-all z-40 flex items-center justify-center flex-shrink-0 cursor-pointer"
        title="Next Tech Card"
        aria-label="Next Tech Card"
      >
        <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 opacity-60 hover:opacity-100 transition-opacity drop-shadow-lg" />
      </button>
    </div>
  );
}

function SwipeableCard({
  card,
  index,
  isTop,
  onSwipe,
}: {
  card: SkillCard;
  index: number;
  isTop: boolean;
  onSwipe: () => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-18, 18]);
  const opacity = useTransform(x, [-250, -120, 0, 120, 250], [0, 1, 1, 1, 0]);

  // High-Visibility Fanned Stack Positions to clearly show cards behind
  const stackConfigs = [
    { scale: 1, y: 0, xOffset: 0, rot: 0, zIndex: 30, borderStyle: "border-[#51463b] shadow-[0_20px_50px_rgba(0,0,0,0.9)]" },
    { scale: 0.94, y: 14, xOffset: 24, rot: 6, zIndex: 20, borderStyle: "border-[#403427] shadow-[0_15px_35px_rgba(0,0,0,0.8)]" },
    { scale: 0.88, y: 26, xOffset: -24, rot: -6, zIndex: 10, borderStyle: "border-[#403427]/80 shadow-[0_10px_25px_rgba(0,0,0,0.7)]" },
    { scale: 0.82, y: 38, xOffset: 12, rot: 3, zIndex: 5, borderStyle: "border-[#403427]/50 shadow-[0_5px_15px_rgba(0,0,0,0.6)]" },
  ];

  const currentConfig = stackConfigs[index] || stackConfigs[3];

  return (
    <motion.div
      style={{
        x: isTop ? x : currentConfig.xOffset,
        rotate: isTop ? rotate : currentConfig.rot,
        opacity: isTop ? opacity : 1 - index * 0.12,
        zIndex: currentConfig.zIndex,
        top: 0,
        left: 0,
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > 70) {
          onSwipe();
        }
      }}
      animate={{
        scale: currentConfig.scale,
        y: currentConfig.y,
        x: isTop ? 0 : currentConfig.xOffset,
        rotate: isTop ? 0 : currentConfig.rot,
      }}
      exit={{
        x: 350,
        opacity: 0,
        rotate: 20,
        transition: { duration: 0.35, ease: "easeOut" },
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
      className={`absolute inset-0 rounded-[2.2rem] p-6 sm:p-7 select-none cursor-grab active:cursor-grabbing border flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#1c1611] via-[#14100c] to-[#0a0806] ${currentConfig.borderStyle}`}
    >
      {/* Ambient Accent Glow inside card */}
      <div 
        className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: card.color }}
      />

      {/* ── CARD HEADER: Category & Level Badge ── */}
      <div className="flex items-center justify-between relative z-10">
        <div className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-bold tracking-wider uppercase text-stone-300 backdrop-blur-md">
          {card.categoryLabel}
        </div>

        <div 
          className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border border-white/10"
          style={{ backgroundColor: `${card.color}20`, color: card.color }}
        >
          {card.badge}
        </div>
      </div>

      {/* ── CARD CENTER: Real App Logo, Name & Clean Description ── */}
      <div className="my-auto py-2 text-center relative z-10 flex flex-col items-center">
        {/* Logo Frame */}
        <div 
          className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center p-3 mb-3 bg-black/60 border border-white/10 shadow-inner relative"
        >
          {card.iconType === "image" && card.imageSrc ? (
            <div className="relative w-11 h-11 sm:w-12 sm:h-12">
              <Image
                src={card.imageSrc}
                alt={`${card.name} logo`}
                fill
                className={`object-contain ${
                  card.id === "nextjs" ? "brightness-200 invert" : ""
                }`}
              />
            </div>
          ) : (
            card.svgIcon
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
          {card.name}
        </h3>
        
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">
          {card.role}
        </p>

        {/* Clean Professional Description */}
        <p className="text-xs sm:text-[13px] text-stone-300/90 leading-relaxed max-w-[290px]">
          {card.description}
        </p>
      </div>

      {/* ── CARD BOTTOM: Tags & Instruction ── */}
      <div className="relative z-10">
        <div className="flex flex-wrap justify-center gap-1.5 mb-2">
          {card.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-md bg-[#2d2011]/80 border border-[#403427] text-[10px] font-medium text-stone-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-center pt-2 border-t border-white/5 text-stone-500">
          <span className="text-[10px] font-semibold tracking-wider uppercase">
            GESER / KLIK PANAH UNTUK LANJUT ➔
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="relative max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28 overflow-hidden"
    >
      {/* Section Ambient Glow */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] opacity-20 blur-[140px] pointer-events-none" />

      {/* ─── 2-COLUMN SPLIT LAYOUT ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* ─── LEFT COLUMN: Description & Ecosystem Highlights (5 cols) ─── */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-border-dark)] bg-[var(--color-secondary)]/80 text-[11px] font-bold tracking-widest uppercase text-stone-300 mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>TECH STACK &amp; ECOSYSTEM</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            Skills &amp; <span className="text-[var(--color-text)]">Tools</span>
          </h2>
          
          <p className="text-stone-300/80 text-sm sm:text-base leading-relaxed mb-8">
            Kumpulan bahasa pemrograman, framework, dan perangkat lunak yang saya gunakan sehari-hari untuk merancang arsitektur web fullstack, mengembangkan aplikasi mobile lintas platform, mengelola basis data, hingga mengonfigurasi infrastruktur server dan jaringan secara andal.
          </p>

          {/* Structured Highlights */}
          <div className="w-full flex flex-col gap-3 mb-6">
            <div className="p-3.5 rounded-2xl bg-[#14100c] border border-[#403427]/70 flex items-start gap-3">
              <Code2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Fullstack Web</p>
                <p className="text-[11px] text-stone-400">Laravel, Next.js, React, Tailwind CSS, TypeScript</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#14100c] border border-[#403427]/70 flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Mobile Development</p>
                <p className="text-[11px] text-stone-400">Flutter, Dart, REST API Integration, State Management</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#14100c] border border-[#403427]/70 flex items-start gap-3">
              <Server className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Server &amp; Infrastructure</p>
                <p className="text-[11px] text-stone-400">aaPanel, Linux VPS, MikroTik RouterOS, MySQL</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#14100c] border border-[#403427]/70 flex items-start gap-3">
              <Wrench className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Workflow &amp; Tools</p>
                <p className="text-[11px] text-stone-400">Notion, Postman, Git, GitHub, VS Code</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── RIGHT COLUMN: Highly Visible Fanned Stack Deck with Simple Arrow (7 cols) ─── */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end">
          <InteractiveCardDeck />
        </div>

      </div>
    </section>
  );
}