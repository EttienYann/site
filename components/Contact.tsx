import { site, socials } from "@/lib/data";
import { SectionHeading } from "./About";
import Footer from "./Footer";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="04" title="Contact" />
      <div className="mt-8 max-w-xl">
        <p className="leading-relaxed text-zinc-400">
          Mon profil vous intéresse ? Que ce soit pour une opportunité, une
          question ou simplement dire bonjour — ma boîte mail est ouverte.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-6 inline-block rounded-md bg-emerald-400 px-6 py-3 font-medium text-zinc-950 transition-colors hover:bg-emerald-300"
        >
          Dites bonjour
        </a>
        <ul className="mt-8 flex gap-6 text-sm">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 underline-offset-4 transition-colors hover:text-emerald-400 hover:underline"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
