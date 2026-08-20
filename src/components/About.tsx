import { about, site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="sobre-mi">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Sobre mí</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {about.heading}
          </h2>
          <dl className="mt-8 space-y-4 border-t border-line pt-8 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-subtle">Base</dt>
              <dd className="text-right text-muted">{site.location}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-subtle">Idiomas</dt>
              <dd className="text-right text-muted">Español · Inglés técnico</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-subtle">Estado</dt>
              <dd className="text-right text-muted">{site.availability}</dd>
            </div>
          </dl>
        </Reveal>

        <div className="space-y-5">
          {about.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="text-pretty text-lg leading-relaxed text-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
