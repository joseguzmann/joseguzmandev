import { services } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";

export function Services() {
  return (
    <Section id="servicios">
      <SectionHeading
        eyebrow="Servicios"
        title="En qué te puedo ayudar"
        lead="No vendo horas: entrego cosas que funcionan en producción y que tu equipo puede usar sin manual."
      />

      <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal
            as="li"
            key={service.title}
            delay={i * 60}
            className="group relative bg-surface p-7 transition-colors hover:bg-elevated"
          >
            <span className="font-mono text-xs text-subtle">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">{service.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{service.description}</p>
            <ul className="mt-5 space-y-1.5">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-sm text-subtle">
                  <span aria-hidden="true" className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
