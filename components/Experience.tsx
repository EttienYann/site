import { experiences } from "@/lib/data";
import { SectionHeading } from "./About";

export default function Experience() {
  return (
    <section id="experiences" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="03" title="Expériences" />
      <ol className="mt-10 space-y-12 border-l border-zinc-800 pl-8">
        {experiences.map((exp) => (
          <li key={`${exp.company}-${exp.period}`} className="relative">
            <span
              aria-hidden
              className="absolute top-1.5 -left-[37px] size-2.5 rounded-full bg-zinc-700 ring-4 ring-zinc-950"
            />
            <p className="font-mono text-xs text-emerald-400">{exp.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">
              {exp.role} <span className="text-zinc-500">@ {exp.company}</span>
            </h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-zinc-400">
              {exp.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
