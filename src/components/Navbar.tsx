"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(item.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup menu saat resize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = offsetTop - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300
          ${
            scrolled || menuOpen
              ? "bg-[var(--color-primary)]/95 backdrop-blur-md border-b border-[var(--color-text)]/10"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-bold text-lg text-[var(--color-text)] hover:text-[var(--color-secondary)] transition-colors z-10"
          >
            ZAVE<span className="text-[var(--color-secondary)]">.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative transition-colors duration-300 font-medium
                  ${
                    active === item.href
                      ? "text-[var(--color-secondary)]"
                      : "text-[var(--color-text)]/70 hover:text-[var(--color-secondary)]"
                  }
                `}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--color-secondary)] transition-all duration-300 ${
                    active === item.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden relative z-10 w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-6 pt-2 flex flex-col gap-1 border-t border-[var(--color-text)]/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    active === item.href
                      ? "text-[var(--color-secondary)] bg-[var(--color-secondary)]/10"
                      : "text-[var(--color-text)]/70 hover:text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/5"
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay backdrop saat menu mobile terbuka */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}