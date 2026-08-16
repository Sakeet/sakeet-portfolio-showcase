import { Users } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { leadership } from "@/data/portfolio";

export function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
      <SectionHeading label="Leadership" title="Building communities, not just systems." />

      <div className="grid gap-6 md:grid-cols-2">
        {leadership.map((item, i) => (
          <Reveal key={item.org} delay={i * 0.08}>
            <div className="glass glow-hover h-full rounded-2xl p-6">
              <span className="gradient-bg flex size-9 items-center justify-center rounded-lg">
                <Users className="size-4 text-primary-foreground" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{item.org}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{item.role}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.dates}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
