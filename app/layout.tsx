import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prénom Nom — Portfolio",
  description:
    "Portfolio de Prénom Nom, développeur full-stack. Projets, expériences et contact.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-zinc-950 text-zinc-300 antialiased">{children}</body>
    </html>
  );
}
