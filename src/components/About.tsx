import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 py-24 bg-[var(--color-primary)]"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[var(--color-accent)] opacity-30"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[var(--color-secondary)] opacity-30"></div>          
          <div className="relative z-10 aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-accent)]/20 rounded-2xl transform rotate-3"></div>
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-[var(--color-primary)] shadow-2xl">
              <Image
                src="/images/profile.jpg" 
                alt="Zave - Web Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <svg 
            className="absolute top-1/2 -right-8 w-16 h-16 opacity-20" 
            viewBox="0 0 100 100"
          >
            <path 
              d="M 50 10 L 90 80 L 10 80 Z" 
              fill="var(--color-accent)"
            />
          </svg>
        </div>

        <div className="space-y-6">
          <div>
            <div className="inline-block w-12 h-1 bg-[var(--color-accent)] mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              About <span className="text-[var(--color-secondary)]">Me</span>
            </h2>
          </div>

          <div className="space-y-4 text-[var(--color-text)]/70 leading-relaxed">
            <p className="text-base md:text-lg">
              Hi! I am {" "}
              <strong className="text-[var(--color-text)] font-semibold">Zaky Ramadhakara</strong>{" "}
               a Web Developer working as an IT Programmer at{" "}
              <strong className="text-[var(--color-secondary)] font-semibold">
                RS Bhayangkara Jambi
              </strong>
              . I focus on backend development using{" "}
              <strong className="text-[var(--color-text)] font-semibold">Laravel</strong>{" "}
              and frontend development using{" "}
              <strong className="text-[var(--color-text)] font-semibold">React</strong>.
            </p>

            <p className="text-base md:text-lg">
              Currently, I am exploring mobile development with{" "}
              <strong className="text-[var(--color-text)] font-semibold">Flutter</strong>,
              expanding my skill set to create cross-platform applications.
            </p>

            <p className="text-base md:text-lg">
              I'm passionate about building reliable, scalable systems and creating 
              intuitive user experiences that make a difference in healthcare technology.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-4 py-2 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded-full text-sm font-medium">
              Laravel
            </span>
            <span className="px-4 py-2 bg-[var(--color-accent)]/10 text-[var(--color-secondary)] rounded-full text-sm font-medium">
              React
            </span>
            {/* <span className="px-4 py-2 bg-[var(--color-accent)]/20 text-[var(--color-text)] rounded-full text-sm font-medium">
              Flutter
            </span> */}
            <span className="px-4 py-2 bg-[var(--color-accent)]/20 text-[var(--color-text)] rounded-full text-sm font-medium">
              Flutter
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}