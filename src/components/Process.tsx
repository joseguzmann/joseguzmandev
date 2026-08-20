import { process } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";

export function Process() {
  return (
    <Section id="proceso" className="border-y border-line bg-surface/40">
      <SectionHeading
        eyebrow="Proceso"
        title="Cómo trabajo un proyecto"
        lead="Cuatro etapas, en orden, con algo entregable en cada una. Sabés siempre en qué punto estamos."
      />

      <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((phase, i) => (
          <Reveal as="li" key={phase.step} delay={i * 70} className="relative">
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-accent/40 bg-accent-soft font-mono text-xs font-semibold text-accent">
                {phase.step}
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-line" />
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{phase.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{phase.description}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
