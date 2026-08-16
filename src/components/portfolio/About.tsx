import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { BookOpen, GraduationCap, Languages, MapPin, Target } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { aboutNarrative, quickFacts, stats, researchHighlights } from "@/data/portfolio";

const factIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "map-pin": MapPin,
  "graduation-cap": GraduationCap,
  "book-open": BookOpen,
  target: Target,
  languages: Languages,
};

const HIGHLIGHTED_PHRASE =
  "the smartest AI in the world is useless if the data going into it is wrong";

function HighlightedParagraph({ text }: { text: string }) {
  const idx = text.indexOf(HIGHLIGHTED_PHRASE);
  if (idx === -1) return <p className="text-base leading-relaxed text-muted-foreground">{text}</p>;
  const before = text.slice(0, idx);
  const after = text.slice(idx + HIGHLIGHTED_PHRASE.length);
  return (
    <p className="text-base leading-relaxed text-muted-foreground">
      {before}
      <span className="gradient-text font-medium">{HIGHLIGHTED_PHRASE}</span>
      {after}
    </p>
  );
}

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
      <SectionHeading label="About" title="Data first, then AI." />

      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          {aboutNarrative.map((para, i) => (
            <Reveal key={i} delay={i * 0.08}>
              {i === 0 ? (
                <HighlightedParagraph text={para} />
              ) : (
                <p className="text-base leading-relaxed text-muted-foreground">{para}</p>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="glass glow-hover rounded-2xl p-5 sm:p-6">
            <h3 className="section-label">Quick facts</h3>
            <dl className="mt-6 space-y-5">
              {quickFacts.map((fact) => {
                const Icon = factIcons[fact.icon];
                return (
                  <div key={fact.label} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {Icon && <Icon className="h-4 w-4" />}
                    </div>
                    <div>
                      <dt className="text-xs font-semibold tracking-wide text-primary">
                        {fact.label}
                      </dt>
                      <dd className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                        {fact.value}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 space-y-8">
        {/* Primary highlights — link to Research */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {researchHighlights.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <a
                href="#research"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("research")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="glass glow-hover block h-full rounded-2xl p-5 text-center transition-colors hover:bg-primary/5"
              >
                <p className="text-lg font-bold sm:text-xl lg:text-2xl">
                  <span className="gradient-text">{item.label}</span>
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {item.subLabel}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto h-px w-full max-w-md bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Secondary counters */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="text-center sm:px-6 lg:px-10">
                <p className="text-2xl font-bold text-foreground sm:text-3xl lg:text-[1.75rem]">
                  <Counter value={stat.value} />
                  {stat.suffix}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground/80 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

    </section>
  );
}
