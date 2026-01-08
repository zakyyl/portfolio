"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = offsetTop - 80; // Offset untuk navbar height

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[var(--color-primary)]/60 backdrop-blur-md border-b border-[var(--color-text)]/10"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-bold text-lg text-[var(--color-text)] hover:text-[var(--color-secondary)] transition-colors"
        >
          ZAVE<span className="text-[var(--color-secondary)]">.</span>
        </a>

        <div className="flex gap-8 text-sm">
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
      </div>
    </nav>
  );
}