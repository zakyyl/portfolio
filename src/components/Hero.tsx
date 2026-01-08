export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[var(--color-primary)] relative overflow-hidden">

      <div className="relative z-10 text-center mb-6">
        <h1 className="text-[16vw] sm:text-[12vw] md:text-[8vw] lg:text-[7rem] xl:text-[8rem] font-black leading-none tracking-tight">
          ZAVE<span className="text-[var(--color-secondary)]">.</span>
        </h1>
      </div>

      <div className="relative z-0 my-6 md:my-8">
        <div className="w-40 h-40 md:w-48 md:h-48 lg:w-40 lg:h-40 relative">
          <div className="absolute inset-0 rounded-full border-2 border-[var(--color-accent)]/30"
            style={{
              animation: 'spin 20s linear infinite'
            }}>
          </div>

          <div className="absolute inset-8 rounded-full border-2 border-[var(--color-secondary)]/40"
            style={{
              animation: 'spin 15s linear infinite reverse'
            }}>
          </div>

          <div className="absolute inset-0 flex items-center justify-center animate-pulse">
            <svg width="60" height="60" viewBox="0 0 120 120" className="md:w-[70px] md:h-[70px]">
              <path
                d="M 60 20 L 100 80 L 20 80 Z"
                fill="none"
                stroke="var(--color-secondary)"
                strokeWidth="3"
                className="opacity-60"
              />
              <path
                d="M 60 35 L 85 70 L 35 70 Z"
                fill="var(--color-accent)"
                className="opacity-40"
              />
            </svg>
          </div>

          <div className="absolute -top-2 -left-2 w-5 h-5 md:w-6 md:h-6 border-t-2 border-l-2 border-[var(--color-accent)]"></div>
          <div className="absolute -bottom-2 -right-2 w-5 h-5 md:w-6 md:h-6 border-b-2 border-r-2 border-[var(--color-secondary)]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl w-full mt-6 md:mt-8 px-4 mx-auto text-center">
        <div className="grid place-items-center">
          <div>
            <div className="text-xs text-[var(--color-text)]/50 mb-1">
              Expertise
            </div>
            <p className="text-sm md:text-base text-[var(--color-text)]/70">
              Building {" "}
              <strong className="text-[var(--color-secondary)]">Reliable</strong> and{" "}
              <strong className="text-[var(--color-secondary)]">Scalable</strong> Web Systems
            </p>
          </div>
        </div>

        <div className="mt-4 md:mt-6 border-t border-dotted border-[var(--color-text)]/20"></div>
      </div>


      <div className="absolute top-1/3 left-4 md:left-6 hidden lg:block">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex -space-x-1.5">
            <div className="w-6 h-6 rounded-full bg-[var(--color-secondary)] border-2 border-[var(--color-primary)]"></div>
            <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-primary)]"></div>
            <div className="w-6 h-6 rounded-full bg-[var(--color-secondary)]/60 border-2 border-[var(--color-primary)]"></div>
          </div>
          <span className="text-lg md:text-xl font-bold text-[var(--color-text)]"></span>
        </div>
        <div className="text-xs text-[var(--color-text)]/60">SOFTWARE DEVELOPER</div>
      </div>

      <div className="absolute top-1/3 right-4 md:right-6 text-right hidden lg:block space-y-2">
        <div>
          <div className="text-xs text-[var(--color-text)]/50">/01</div>
          <div className="text-sm font-semibold text-[var(--color-text)]/80">Laravel</div>
        </div>
        <div>
          <div className="text-xs text-[var(--color-text)]/50">/02</div>
          <div className="text-sm font-semibold text-[var(--color-text)]/80">React</div>
        </div>
        <div>
          <div className="text-xs text-[var(--color-text)]/50">/03</div>
          <div className="text-sm font-semibold text-[var(--color-text)]/80">Flutter</div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none select-none opacity-5">
        <svg className="absolute top-20 left-1/4 w-32 h-32" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-accent)" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-32 right-1/4 w-24 h-24" viewBox="0 0 100 100">
          <rect x="25" y="25" width="50" height="50" fill="none" stroke="var(--color-secondary)" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}