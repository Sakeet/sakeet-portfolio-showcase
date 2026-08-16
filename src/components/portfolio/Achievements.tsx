import { BadgeCheck, BookOpen, Trophy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal, SectionHeading } from "./Reveal";
import { awards, certifications, publication } from "@/data/portfolio";

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
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

          <TabsContent value="certs" className="mt-6">
            <ul className="grid gap-4 md:grid-cols-2">
              {certifications.map((cert) => (
                <li key={cert} className="glass glow-hover flex gap-3 rounded-2xl p-5">
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <p className="text-sm leading-relaxed">{cert}</p>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </Reveal>

      <Reveal className="mt-6">
        <div className="glass flex gap-3 rounded-2xl p-5">
          <BookOpen className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
          <p className="text-sm leading-relaxed">
            <span className="font-semibold">Publication: </span>
            {publication}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
