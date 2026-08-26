import { site } from "@/lib/data";

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
      <span className="font-mono text-lg text-emerald-400 md:text-xl">{index}.</span>
      {title}
      <span aria-hidden className="ml-2 h-px max-w-48 grow bg-zinc-800" />
    </h2>
  );
}

export function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="01" title="À propos" />
      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_280px]">
        <div className="space-y-4 leading-relaxed text-zinc-400">
          {site.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <div>
          <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
            Technologies
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {site.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-zinc-800 px-3 py-1 font-mono text-xs text-zinc-400"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
