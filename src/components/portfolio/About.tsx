import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";
import { aboutNarrative, quickFacts, stats } from "@/data/portfolio";

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

      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5">
          {aboutNarrative.map((para, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-muted-foreground">{para}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="glass glow-hover rounded-2xl p-5 sm:p-6">
            <h3 className="section-label">Quick facts</h3>
            <dl className="mt-5 space-y-4">
              {quickFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-semibold tracking-wide text-primary">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="glass glow-hover h-full rounded-2xl p-5 text-center">
              <p className="text-3xl font-bold sm:text-4xl">
                <span className="gradient-text">
                  <Counter value={stat.value} />
                  {stat.suffix}
                </span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
