import {
  BarChart3,
  Brain,
  Briefcase,
  Cloud,
  Database,
  LineChart,
  Server,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { skillGroups } from "@/data/portfolio";

const icons: Record<string, LucideIcon> = {
  brain: Brain,
  database: Database,
  chart: BarChart3,
  server: Server,
  code: Code2,
  briefcase: Briefcase,
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
      <SectionHeading
        label="Skills"
        title="The full stack of AI and data."
        subtitle="Modeling and generative AI on top, pipelines and data quality underneath, business analysis holding it together."
      />

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon] ?? Code2;
          return (
            <Reveal key={group.title} delay={(i % 3) * 0.08}>
              <div className="glass glow-hover h-full rounded-2xl p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="gradient-bg flex size-9 items-center justify-center rounded-lg">
                    <Icon className="size-4 text-primary-foreground" />
                  </span>
                  <h3 className="text-base font-semibold">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
