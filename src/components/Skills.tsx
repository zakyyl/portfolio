import Image from "next/image";

const skills = [
  { name: "Laravel", logo: "/images/logos/laravel.png", color: "#FF2D20" },
  { name: "React", logo: "/images/logos/react.png", color: "#61DAFB" },
  { name: "Next.js", logo: "/images/logos/nextjs.png", color: "#000000" },
  { name: "Tailwind CSS", logo: "/images/logos/tailwind.png", color: "#06B6D4" },
  { name: "Git", logo: "/images/logos/git.png", color: "#F05032" },
  { name: "MySQL", logo: "/images/logos/mysql.png", color: "#4479A1" },
  { name: "GitHub", logo: "/images/logos/github.png", color: "#181717" },
  { name: "Flutter", logo: "/images/logos/flutter.png", color: "#02569B" },
];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 bg-[var(--color-primary)]">
      <div className="text-center mb-12">
        <div className="inline-block w-12 h-1 bg-[var(--color-accent)] mb-4"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Skills <span className="text-[var(--color-secondary)]">& Tools</span>
        </h2>
        <p className="text-[var(--color-text)]/60 text-lg">
          Technologies I work with
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative bg-white dark:bg-[var(--color-primary)] 
                       border-2 border-[var(--color-text)]/10 rounded-2xl p-6
                       hover:border-[var(--color-secondary)] hover:shadow-xl
                       transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center justify-center h-16 mb-4">
              <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h3 className="text-center text-[var(--color-text)] font-semibold text-sm md:text-base">
              {skill.name}
            </h3>

            <div
              className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl
                         scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              style={{ backgroundColor: skill.color }}
            ></div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <svg className="absolute top-10 right-10 w-20 h-20 opacity-5" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="var(--color-accent)" />
        </svg>
        <svg className="absolute bottom-20 left-10 w-24 h-24 opacity-5" viewBox="0 0 100 100">
          <path d="M 50 10 L 90 80 L 10 80 Z" fill="var(--color-secondary)" />
        </svg>
      </div>
    </section>
  );
}