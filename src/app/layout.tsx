import "./globals.css";

export const metadata = {
  title: "Zave | Web Developer",
  description: "Web Developer specializing in Laravel & React",
  icons: {
    icon: "/images/zave-square.png",
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
  data-theme="light"
  className="bg-[var(--color-primary)] text-[var(--color-text)] antialiased transition-colors duration-300"
>
  {children}
</body>

    </html>
  );
}
