"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

// ─── SOCIAL ICONS: GITHUB, LINKEDIN, EMAIL ───
const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const EmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 80) {
        setActive("");
        return;
      }

      let current = "";
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 180 && rect.bottom >= 120) {
          current = item.href;
        }
      });

      if (current) {
        setActive(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("");
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = offsetTop - 60;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActive(href);
    }
  };

  return (
    <header className="fixed top-3.5 sm:top-5 left-0 right-0 z-50 flex justify-center pointer-events-none px-3 sm:px-6">
      {/* ─── MAC DOCK PILL NAVBAR ─── */}
      <nav
        className="pointer-events-auto relative w-full max-w-4xl flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-[#0e1117]/85 backdrop-blur-xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)] select-none transition-all duration-300"
        aria-label="Main Navigation Dock"
      >
        {/* Subtle Glass Rim Highlight on Top */}
        <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

        {/* ─── LEFT: FAVICON LOGO + DIVIDER + NAV LINKS ─── */}
        <div className="flex items-center">
          {/* Favicon Logo Button */}
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className="group relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#161D2A] border border-white/15 hover:border-[#D6B96A]/60 shadow-inner transition-transform duration-200 hover:scale-105 cursor-pointer flex-shrink-0 overflow-hidden p-1.5"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/favico.png"
                alt="Favicon"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Thin Vertical Separator */}
          <div className="w-[1px] h-4 bg-white/15 mx-2.5 sm:mx-3.5 flex-shrink-0" />

          {/* Navigation Links */}
          <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium">
            {navItems.map((item) => {
              const isActive = active === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative py-1 transition-colors duration-200 cursor-pointer
                    ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-[#85898F] hover:text-[#F4F5E7]"
                    }
                  `}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* ─── RIGHT: SOCIAL ICONS (GITHUB, LINKEDIN, EMAIL) ─── */}
        <div className="flex items-center gap-2 sm:gap-3 text-[#85898F]">
          <a
            href="https://github.com/zakyyl"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:text-white transition-all hover:scale-110"
            aria-label="GitHub"
            title="GitHub"
          >
            <GitHubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/zaky-ramadhakara"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:text-white transition-all hover:scale-110"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>

          <a
            href="mailto:zakyramadhakara@gmail.com"
            className="p-1 hover:text-white transition-all hover:scale-110"
            aria-label="Email"
            title="Email"
          >
            <EmailIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}