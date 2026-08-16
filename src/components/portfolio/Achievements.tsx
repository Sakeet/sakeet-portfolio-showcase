import { BadgeCheck, ExternalLink, Trophy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal, SectionHeading } from "./Reveal";
import { awards, credentials } from "@/data/portfolio";

export function Achievements() {
  const programs = credentials.filter((c) => c.type === "program");
  const simulations = credentials.filter((c) => c.type === "simulation");

  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
      <SectionHeading
        label="Achievements"
        title="Recognition & credentials."
        subtitle="National and worldwide placements in AI, analytics, and cybersecurity competitions, plus certifications and a published paper."
      />

      <Reveal>
        <Tabs defaultValue="awards">
          <TabsList>
            <TabsTrigger value="awards">Awards</TabsTrigger>
            <TabsTrigger value="certs">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="awards" className="mt-6">
            <ul className="grid gap-4 md:grid-cols-2">
              {awards.map((award) => (
                <li key={award} className="glass glow-hover flex gap-3 rounded-2xl p-5">
                  <Trophy className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <p className="text-sm leading-relaxed">{award}</p>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="certs" className="mt-6 space-y-6">
            {/* Featured publication */}
            <div className="relative overflow-hidden rounded-2xl border-l-4 border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BookOpen className="size-6" aria-hidden />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">Publication</p>
                    <h3 className="mt-1 text-xl font-bold sm:text-2xl">{publication.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{publication.venue}</p>
                    <p className="mt-1 text-sm text-muted-foreground">Co-authors: {publication.coAuthors}</p>
                  </div>
                  <p className="max-w-3xl text-sm leading-relaxed sm:text-base">{publication.summary}</p>
                  <Button asChild variant="default" size="sm" className="w-fit gap-2">
                    <a
                      href={publication.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Read the SURAKSHA paper (opens in new tab)"
                    >
                      Read the Paper
                      <ExternalLink className="size-4" aria-hidden />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Programs & Assessments */}
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Programs & Assessments
              </h4>
              <ul className="grid gap-4 sm:grid-cols-2">
                {programs.map((cert) => (
                  <li key={cert.name} className="glass glow-hover flex flex-col gap-2 rounded-2xl p-5">
                    <div className="flex gap-3">
                      <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                      <div className="flex flex-col gap-2">
                        <p className="text-sm leading-relaxed">{cert.name}</p>
                        {cert.verified && (
                          <span className="inline-flex w-fit items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                            <BadgeCheck className="size-3" aria-hidden />
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-8 inline-flex w-fit items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      >
                        Verify
                        <ExternalLink className="size-3" aria-hidden />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Job Simulations */}
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Job Simulations (Forage)
              </h4>
              <div className="glass glow-hover rounded-2xl p-5">
                <div className="flex flex-wrap gap-2">
                  {simulations.map((sim) =>
                    sim.verifyUrl ? (
                      <a
                        key={sim.name}
                        href={sim.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline"
                      >
                        {sim.name}
                        <ExternalLink className="size-3 opacity-70" aria-hidden />
                      </a>
                    ) : (
                      <span
                        key={sim.name}
                        className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground"
                      >
                        {sim.name}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Reveal>
    </section>
  );
}
