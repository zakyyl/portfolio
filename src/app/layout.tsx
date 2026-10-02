import "./globals.css";

export const metadata = {
  title: "Zaky Ramadhakara | Portfolio",
  description: "Web Developer specializing in Laravel, Next.js & Flutter",
  icons: {
    icon: "/images/favico.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-[#050606] text-[#F4F5E7] antialiased transition-colors duration-300"
      >
        {children}
      </body>

    </html>
  );
}
