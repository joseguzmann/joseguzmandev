import { stack } from "@/content/site";

export function StackMarquee() {
  const items = [...stack, ...stack];

  return (
    <div className="border-y border-line bg-surface/50 py-5">
      <div className="marquee-mask overflow-hidden">
        <ul className="marquee-track flex w-max items-center gap-10 pr-10">
          {items.map((tech, i) => (
            <li
              key={`${tech}-${i}`}
              aria-hidden={i >= stack.length}
              className="whitespace-nowrap font-mono text-sm text-subtle"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
