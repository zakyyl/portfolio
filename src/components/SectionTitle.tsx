import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className={`text-4xl sm:text-5xl md:text-6xl font-black mb-10 tracking-tight uppercase leading-[0.95] text-[#F4F5E7] ${anton.className}`}>
      {title}
      <span className="text-[#D6B96A]">.</span>
    </h2>
  );
}
