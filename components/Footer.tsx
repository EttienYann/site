import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-edge py-8">
      <p className="mx-auto max-w-5xl px-6 text-center font-mono text-xs text-subtle">
        Conçu et développé par {site.name} · Next.js & Tailwind CSS
      </p>
    </footer>
  );
}
