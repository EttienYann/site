import { site, socials } from "@/lib/data";
import { SectionHeading } from "./About";
import Footer from "./Footer";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="04" title="Contact" />
      <div className="relative mt-10 max-w-xl overflow-hidden rounded-2xl border border-edge bg-panel p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40 md:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent dark:via-emerald-400/60"
        />
        <p className="leading-relaxed text-body">
          Mon profil vous intéresse ? Que ce soit pour une opportunité, une
          question ou simplement dire bonjour — ma boîte mail est ouverte.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-6 inline-block rounded-md bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-transform hover:-translate-y-0.5 dark:from-emerald-400 dark:to-teal-400 dark:text-zinc-950"
        >
          Dites bonjour
        </a>
        <ul className="mt-8 flex gap-6 border-t border-edge pt-6 text-sm">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-body underline-offset-4 transition-colors hover:text-emerald-600 hover:underline dark:hover:text-emerald-300"
              >
                {social.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
