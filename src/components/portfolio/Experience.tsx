import { Building2, CalendarDays, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./Reveal";
import { earlierExperience, experiences } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading
        label="Experience"
        title="Where I've done the work."
        subtitle="Teaching, AI research, and enterprise data engineering — from labs of 200 students to pipelines moving 100K+ records a week."
      />

      <div className="relative">
        <div
          aria-hidden
          className="gradient-bg absolute top-0 bottom-0 left-4 w-px opacity-40 md:left-1/2"
        />
        <ol className="space-y-10">
          {experiences.map((exp, i) => {
            const right = i % 2 === 1;
            return (
              <li key={exp.company} className="relative pl-12 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
                <span
                  aria-hidden
                  className="gradient-bg absolute top-6 left-4 flex size-8 -translate-x-1/2 items-center justify-center rounded-full ring-4 ring-background md:left-1/2"
                >
                  <Building2 className="size-4 text-primary-foreground" />
                </span>
                <Reveal
                  className={cn(
                    "md:col-start-1",
                    right ? "md:col-start-2 md:pl-10" : "md:pr-10 md:text-right",
                  )}
                >
                  <article className="glass glow-hover rounded-2xl p-6">
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{exp.role}</p>
                    <div
                      className={cn(
                        "mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground",
                        !right && "md:justify-end",
                      )}
                    >
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="size-3.5" /> {exp.dates}
                      </span>
                      {exp.location ? (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="size-3.5" /> {exp.location}
                        </span>
                      ) : null}
                    </div>
                    <ul className="mt-4 space-y-2 text-left">
                      {exp.bullets.map((b) => (
                        <li
                          key={b}
                          className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full before:bg-primary"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>

      <Reveal className="mt-10">
        <Accordion type="single" collapsible className="glass rounded-2xl px-5">
          <AccordionItem value="earlier" className="border-none">
            <AccordionTrigger className="text-sm font-semibold">
              Earlier Experience
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-4 pb-2">
                {earlierExperience.map((item) => (
                  <li key={item.company} className="text-sm">
                    <p className="font-medium">{item.company}</p>
                    <p className="text-muted-foreground">
                      {item.role} · {item.dates}
                    </p>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Reveal>
    </section>
  );
}
