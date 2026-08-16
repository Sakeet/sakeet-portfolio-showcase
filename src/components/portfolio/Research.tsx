import { BookOpen, ExternalLink, Presentation, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { researchEntries, type ResearchEntry } from "@/data/portfolio";

const iconByType: Record<ResearchEntry["type"], typeof BookOpen> = {
  Publication: BookOpen,
  "Conference Presentation": Presentation,
  "Showcase Selection": Sparkles,
};

export function Research() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
      <SectionHeading
        label="Research"
        title="Research & Publications"
        subtitle="Published work, conference presentations, and showcase selections."
      />

      <div className="space-y-5">
        {researchEntries.map((entry, i) => {
          const Icon = iconByType[entry.type];
          return (
            <Reveal key={entry.title} delay={i * 0.08}>
              <article className="glass glow-hover rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {entry.type}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold leading-snug sm:text-xl">
                        {entry.title}
                      </h3>
                      <p className="mt-1 text-sm italic text-muted-foreground">{entry.venue}</p>
                      {entry.coAuthors ? (
                        <p className="mt-1 text-sm text-muted-foreground">
                          Co-authors: {entry.coAuthors}
                        </p>
                      ) : null}
                    </div>
                    <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                      {entry.summary}
                    </p>
                    {entry.paperUrl ? (
                      <Button asChild size="sm" className="w-fit gap-2">
                        <a
                          href={entry.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Read the SURAKSHA paper (opens in new tab)"
                        >
                          Read the Paper
                          <ExternalLink className="size-4" aria-hidden />
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
