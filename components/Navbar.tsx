import Link from "next/link";
import { navLinks, site } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-surface/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="#" className="font-mono font-semibold text-heading">
          <span className="text-emerald-600 dark:text-emerald-400">{"<"}</span>
          {site.initials}
          <span className="text-emerald-600 dark:text-emerald-400">{"/>"}</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors text-body hover:text-heading"
            >
              <span className="mr-1 font-mono text-xs text-emerald-600 dark:text-emerald-400">
                0{i + 1}.
              </span>
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-edge px-4 py-1.5 text-sm text-body transition-colors hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            Me contacter
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
