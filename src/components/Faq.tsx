import { faqs } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";

export function Faq() {
  return (
    <Section id="preguntas">
      <SectionHeading eyebrow="Preguntas" title="Lo que suelen preguntarme" />

      <div className="mt-12 divide-y divide-line border-y border-line">
        {faqs.map((item, i) => (
          <Reveal key={item.q} delay={i * 50}>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium marker:content-none">
                {item.q}
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-4 shrink-0 text-subtle transition-transform duration-300 group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 max-w-3xl text-pretty leading-relaxed text-muted">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
