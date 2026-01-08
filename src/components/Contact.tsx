import SectionTitle from "./SectionTitle";

const contactLinks = [
  {
    name: "Email",
    href: "mailto:zaky24112003@gmail.com",
    label: "zaky24112003@gmail.com"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zaky-ramadhakara",
    label: "linkedin.com/in/zaky-ramadhakara"
  },
  {
    name: "GitHub",
    href: "https://github.com/zakyyl",
    label: "github.com/zakyyl"
  }
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-4 py-24 bg-[var(--color-primary)]"
    >
      <div className="mb-8">
        <div className="inline-block w-12 h-1 bg-[var(--color-accent)] mb-4"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Get <span className="text-[var(--color-secondary)]">In Touch</span>
        </h2>
        <p className="text-[var(--color-text)]/60 text-base md:text-lg">
          Feel free to reach out for collaborations.
        </p>
      </div>

      <div className="space-y-4">
        {contactLinks.map((contact) => (
          <a
            key={contact.name}
            href={contact.href}
            target={contact.name !== "Email" ? "_blank" : undefined}
            rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
            className="flex items-center justify-between p-4 
                       border-b border-[var(--color-text)]/10
                       hover:border-[var(--color-secondary)]
                       group transition-all"
          >
            <div>
              <div className="font-semibold text-[var(--color-text)] mb-1">
                {contact.name}
              </div>
              <div className="text-sm text-[var(--color-text)]/60">
                {contact.label}
              </div>
            </div>
            <span className="text-[var(--color-secondary)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}