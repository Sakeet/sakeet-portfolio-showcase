import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, RESUME_URL } from "@/data/portfolio";
import profileAsset from "@/assets/profile.jpg.asset.json";

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    const done = text === word;
    // slight jitter so typing feels human rather than metronomic
    const jitter = Math.random() * 55;
    const delay = deleting ? 28 + jitter * 0.4 : done ? 1500 : 65 + jitter;

    const timer = setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

const socials = [
  { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: profile.github, label: "GitHub", Icon: Github },
  { href: profile.medium, label: "Medium", Icon: PenLine },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

export function Hero() {
  const role = useTypewriter(profile.roles);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="mesh-aurora" />
        <div className="grid-pattern absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_35%,black,transparent)]" />
        <div
          className="mesh-blob size-[28rem] -top-24 -left-20"
          style={{ background: "var(--teal)" }}
        />
        <div
          className="mesh-blob size-[26rem] top-10 right-0"
          style={{ background: "var(--indigo)", animationDelay: "-6s" }}
        />
        <div
          className="mesh-blob size-[22rem] bottom-0 left-1/3"
          style={{ background: "var(--primary)", animationDelay: "-12s" }}
        />
        <div
          className="mesh-blob size-[18rem] -bottom-20 right-1/4"
          style={{ background: "var(--teal)", animationDelay: "-18s" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 px-4 sm:gap-12 sm:px-6 md:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 md:order-1"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {profile.availability}
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:mt-6 sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-2 min-h-7 text-lg font-semibold sm:mt-3 sm:min-h-8 sm:text-2xl">
            <span className="gradient-text">{role}</span>
            <span aria-hidden className="type-caret ml-1" />
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed sm:mt-6 sm:text-lg text-foreground/90">
            {profile.tagline}
          </p>
          <p className="mt-3 max-w-xl text-sm sm:mt-4 leading-relaxed text-muted-foreground">
            {profile.subline}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <Button size="lg" onClick={() => scrollTo("projects")}>
              View My Work <ArrowDown className="size-4" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={profile.resume} download>
                <Download className="size-4" /> Download Resume
              </a>
            </Button>
          </div>

          <ul className="mt-6 flex items-center gap-3 sm:mt-8">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  className="glass glow-hover flex size-10 items-center justify-center rounded-full text-muted-foreground hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center md:order-2"
        >
          <div
            className="rounded-full p-[3px] shadow-2xl"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #E8E1C8 0%, #7DD3D8 35%, #3B5BA5 70%, #1E2A5A 100%)",
            }}
          >
            <img
              src={profileAsset.url}
              alt="Portrait of Sakeet Kopparapu"
              width={1024}
              height={1024}
              className="size-36 rounded-full border-4 border-background object-cover sm:size-56 md:size-64"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
