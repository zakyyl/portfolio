export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">
      {title}
      <span className="text-[var(--color-secondary)]">.</span>
    </h2>
  );
}
