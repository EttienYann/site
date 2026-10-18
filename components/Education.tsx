import { certifications, education } from "@/lib/data";
import { SectionHeading } from "./About";

export default function Education() {
  return (
    <section id="formation" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="03" title="Formation" />
      <ol className="mt-10 space-y-12 border-l border-edge pl-8">
        {education.map((edu) => (
          <li key={`${edu.school}-${edu.period}`} className="relative">
            <span
              aria-hidden
              className="absolute top-1.5 -left-[37px] size-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)] ring-4 ring-surface dark:bg-emerald-400 dark:shadow-[0_0_12px_rgba(52,211,153,0.6)]"
            />
            <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400">{edu.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-heading">
              {edu.degree} <span className="text-subtle">@ {edu.school}</span>
            </h3>
            {edu.description && (
              <p className="mt-2 max-w-2xl leading-relaxed text-body">
                {edu.description}
              </p>
            )}
          </li>
        ))}
      </ol>
      <div className="mt-14">
        <p className="font-mono text-xs tracking-widest text-subtle uppercase">
          Certifications
        </p>
        <ul className="mt-4 space-y-2">
          {certifications.map((cert) => (
            <li key={cert.title} className="text-sm text-body">
              <span className="font-medium text-heading">{cert.title}</span> —{" "}
              {cert.issuer} · {cert.year}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
