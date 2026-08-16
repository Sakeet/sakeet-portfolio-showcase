import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, BookOpen, CheckCircle2, Github, GraduationCap, Target, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal, SectionHeading } from "./Reveal";
import { profile, projectCategories, projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-md border border-border bg-secondary px-2 py-1 text-[11px] text-secondary-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function CaseStudyModal({
  project,
  onOpenChange,
}: {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={Boolean(project)} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[88vh] gap-0 overflow-y-auto p-0 sm:max-w-2xl">
        {project ? (
          <>
            <div className="gradient-bg relative h-20 shrink-0">
              <span className="absolute bottom-3 left-6 text-[10px] font-semibold tracking-[0.2em] text-primary-foreground/90 uppercase">
                {project.category}
              </span>
              <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
                {project.award ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-foreground">
                    <Award className="size-3 text-primary" /> AWARD WINNER
                  </span>
                ) : null}
                {project.publishedResearch ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-primary">
                    <BookOpen className="size-3" /> PUBLISHED RESEARCH
                  </span>
                ) : null}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <DialogHeader className="text-left">
                <DialogTitle className="text-xl leading-snug">{project.title}</DialogTitle>
                <DialogDescription className="text-sm font-medium text-foreground/90">
                  {project.hook}
                </DialogDescription>
              </DialogHeader>

              {project.role || project.timeline ? (
                <dl className="mt-5 grid gap-4 rounded-xl border border-border bg-secondary/40 p-4 sm:grid-cols-2">
                  {project.role ? (
                    <div>
                      <dt className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                        Role
                      </dt>
                      <dd className="mt-1 text-sm">{project.role}</dd>
                    </div>
                  ) : null}
                  {project.timeline ? (
                    <div>
                      <dt className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                        Timeline
                      </dt>
                      <dd className="mt-1 text-sm">{project.timeline}</dd>
                    </div>
                  ) : null}
                </dl>
              ) : null}

              {project.caseStudy.problem ? (
                <section className="mt-7">
                  <h4 className="flex items-center gap-2 text-sm font-semibold">
                    <Target className="size-4 text-primary" /> The Problem
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.caseStudy.problem}
                  </p>
                </section>
              ) : null}

              {project.caseStudy.approach.length ? (
                <section className="mt-7">
                  <h4 className="flex items-center gap-2 text-sm font-semibold">
                    <Workflow className="size-4 text-primary" /> My Approach
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {project.caseStudy.approach.map((step, i) => (
                      <li key={step} className="flex gap-3 text-sm leading-relaxed">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-border text-[10px] font-semibold text-primary">
                          {i + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {project.caseStudy.owned.length ? (
                <section className="mt-7">
                  <h4 className="flex items-center gap-2 text-sm font-semibold">
                    <UserCheck className="size-4 text-primary" /> What I Owned
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {project.caseStudy.owned.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed">
                        <UserCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {project.tech.length ? (
                <section className="mt-7">
                  <h4 className="text-sm font-semibold">Tech stack</h4>
                  <div className="mt-3">
                    <TechList tech={project.tech} />
                  </div>
                </section>
              ) : null}

              {project.caseStudy.outcome.length ? (
                <section className="mt-7">
                  <h4 className="flex items-center gap-2 text-sm font-semibold">
                    <CheckCircle2 className="size-4 text-primary" /> The Outcome
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {project.caseStudy.outcome.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
                {!project.hideGithub ? (
                  <Button size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="size-3.5" /> View on GitHub
                    </a>
                  </Button>
                ) : null}
                {project.paperUrl ? (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.paperUrl} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="size-3.5" /> Read the Paper
                    </a>
                  </Button>
                ) : null}
                <Button size="sm" variant="ghost" onClick={() => onOpenChange(false)}>
                  Close
                </Button>
              </div>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
      <SectionHeading
        label="Projects"
        title="Systems I've shipped."
        subtitle="Award-winning AI, ML, and analytics work — built end-to-end, from data model to user-facing output. Open any card for the full case study."
      />

      <Reveal className="mb-8">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-medium transition-colors",
                filter === cat
                  ? "gradient-bg text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <motion.article
            key={project.title}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="glass glow-hover relative overflow-hidden rounded-2xl"
          >
            <div
              role="button"
              tabIndex={0}
              onClick={() => setActive(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(project);
                }
              }}
              aria-label={`Open case study: ${project.title}`}
              className="flex h-full w-full cursor-pointer flex-col text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <div className="gradient-bg relative h-24 w-full">
                <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
                  {project.award ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-foreground">
                      <Award className="size-3 text-primary" /> AWARD WINNER
                    </span>
                  ) : null}
                  {project.clientCapstone ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/85 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-foreground">
                      <GraduationCap className="size-3 text-primary" /> CLIENT CAPSTONE
                    </span>
                  ) : null}
                  {project.publishedResearch ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-primary">
                      <BookOpen className="size-3" /> PUBLISHED RESEARCH
                    </span>
                  ) : null}
                </div>
                <span className="absolute bottom-3 left-4 text-[10px] font-semibold tracking-[0.2em] text-primary-foreground/90 uppercase">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-base font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-foreground/90">{project.hook}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4">
                  <TechList tech={project.tech} />
                </div>

                <p className="mt-4 text-sm font-medium text-primary">{project.impact}</p>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {!project.hideGithub ? (
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="size-3.5" /> View on GitHub
                      </a>
                    </Button>
                  ) : null}
                  {project.paperUrl ? (
                    <Button size="sm" variant="outline" asChild onClick={(e) => e.stopPropagation()}>
                      <a href={project.paperUrl} target="_blank" rel="noopener noreferrer">
                        <BookOpen className="size-3.5" /> Read the Paper
                      </a>
                    </Button>
                  ) : null}
                </div>

                <span className="mt-5 inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-primary">
                  Read case study <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <Button size="lg" variant="outline" asChild>
          <a href={profile.github} target="_blank" rel="noreferrer">
            View all 18 repositories on GitHub <ArrowUpRight className="size-4" />
          </a>
        </Button>
      </Reveal>

      <CaseStudyModal project={active} onOpenChange={(open) => !open && setActive(null)} />
    </section>
  );
}
