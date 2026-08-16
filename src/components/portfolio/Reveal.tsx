import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const sectionNumbers: Record<string, string> = {
  About: "01",
  Experience: "02",
  Projects: "03",
  Research: "04",
  Skills: "05",
  Achievements: "06",
  Contact: "07",
};

export function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  const number = sectionNumbers[label] ?? label;
  return (
    <Reveal className="mb-10 max-w-2xl md:mb-14">
      <p className="text-xs font-semibold tracking-[0.22em] text-primary/60 uppercase">
        {number} / {label}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
      <div className="gradient-bg mt-6 h-px w-24 rounded-full" />
    </Reveal>
  );
}
