import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ettien Kouassi Yann Guy Axel — Portfolio",
  description:
    "Portfolio d'Ettien Kouassi Yann Guy Axel, développeur web et mobile et data scientist junior. Projets, expériences et contact.",
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t?t==="dark":true){document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-surface text-body antialiased">{children}</body>
    </html>
  );
}
