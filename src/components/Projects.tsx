import Image from "next/image";
import { projects } from "@/src/data/projects";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 py-24 bg-[var(--color-primary)]"
    >
<div className="text-center mb-12">
        <div className="inline-block w-12 h-1 bg-[var(--color-accent)] mb-4"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Project<span className="text-[var(--color-secondary)]">.</span>
        </h2>
        <p className="text-[var(--color-text)]/60 text-lg">
          What I Create
        </p>
      </div>
      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto pb-6 -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-5 min-w-max">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-80 bg-white dark:bg-[var(--color-primary)] border-2 border-[var(--color-text)]/10 rounded-lg overflow-hidden
                         hover:border-[var(--color-secondary)]
                         hover:shadow-xl
                         transition-all duration-300 group flex-shrink-0"
            >
              {/* Project Image */}
              <div className="relative h-40 bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-accent)]/10 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[var(--color-secondary)]/0 group-hover:bg-[var(--color-secondary)]/10 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base md:text-lg font-semibold mb-2 text-[var(--color-text)] group-hover:text-[var(--color-secondary)] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[var(--color-text)]/70 text-xs md:text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-0.5 rounded-full
                                 bg-[var(--color-accent)]/20 text-[var(--color-text)]/80
                                 border border-[var(--color-text)]/10
                                 hover:bg-[var(--color-accent)]/40
                                 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-[var(--color-secondary)]
                             group-hover:gap-3 transition-all"
                >
                  View on GitHub 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        <span className="text-xs text-[var(--color-text)]/50">
          ← Scroll untuk melihat lebih banyak →
        </span>
      </div>
    </section>
  );
}