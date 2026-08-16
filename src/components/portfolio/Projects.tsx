import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { profile, projectCategories, projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading
        label="Projects"
        title="Systems I've shipped."
        subtitle="Award-winning AI, ML, and analytics work — built end-to-end, from data model to user-facing output."
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <motion.article
            key={project.title}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="glass glow-hover relative flex flex-col overflow-hidden rounded-2xl"
          >
            <div className="gradient-bg relative h-24">
              {project.award ? (
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-foreground">
                  <Award className="size-3 text-primary" /> AWARD WINNER
                </span>
              ) : null}
              <span className="absolute bottom-3 left-4 text-[10px] font-semibold tracking-[0.2em] text-primary-foreground/90 uppercase">
                {project.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-base font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm font-medium text-foreground/90">{project.hook}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border bg-secondary px-2 py-1 text-[11px] text-secondary-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm font-medium text-primary">{project.impact}</p>

              <div className="mt-6 flex gap-2 pt-2">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.github ?? profile.github} target="_blank" rel="noreferrer">
                    <Github className="size-3.5" /> GitHub
                  </a>
                </Button>
                <Button size="sm" variant="ghost" asChild>
                  <a href={project.github ?? profile.github} target="_blank" rel="noreferrer">
                    Case Study <ArrowUpRight className="size-3.5" />
                  </a>
                </Button>
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
    </section>
  );
}
