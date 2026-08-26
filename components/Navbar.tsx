import Link from "next/link";
import { navLinks, site } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="#" className="font-mono font-semibold text-white">
          {"<"}{site.initials} {"/>"}
        </Link>
        <div className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 transition-colors hover:text-white"
            >
              <span className="mr-1 font-mono text-xs text-emerald-400">
                0{i + 1}.
              </span>
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${site.email}`}
          className="rounded-full border border-zinc-700 px-4 py-1.5 text-sm text-zinc-300 transition-colors hover:border-emerald-400 hover:text-emerald-400"
        >
          Me contacter
        </a>
      </nav>
    </header>
  );
}
