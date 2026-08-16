import { useState } from "react";
import { Github, Linkedin, Loader2, Mail, MapPin, PenLine, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal, SectionHeading } from "./Reveal";
import { FORMSPREE_ENDPOINT, profile } from "@/data/portfolio";

const details = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Location", value: profile.location, href: undefined, Icon: MapPin },
  { label: "LinkedIn", value: "linkedin.com/in/kopparapu-sakeet/", href: profile.linkedin, Icon: Linkedin },
  { label: "GitHub", value: "github.com/Sakeet", href: profile.github, Icon: Github },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  type FieldErrors = { name?: string; email?: string; subject?: string; message?: string };
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = (key: keyof typeof form, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: FieldErrors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (form.subject.trim().length < 3) next.subject = "Add a short subject.";
    if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("loading");
    const data = new FormData();
    data.append("name", form.name.trim());
    data.append("email", form.email.trim());
    data.append("subject", form.subject.trim());
    data.append("message", form.message.trim());
    data.append("_gotcha", "");
    data.append("_subject", "New message from portfolio site");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        toast.success("Thanks! Your message has been sent.");
        setForm({ name: "", email: "", subject: "", message: "" });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
      <SectionHeading
        label="Contact"
        title="Let's build something that actually matters."
        subtitle="I'm currently seeking full-time, internship, and co-op opportunities in Data Science, ML Engineering, AI Engineering, and Analytics."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <ul className="space-y-3">
            {details.map(({ label, value, href, Icon }) => {
              const content = (
                <>
                  <span className="gradient-bg flex size-9 shrink-0 items-center justify-center rounded-lg">
                    <Icon className="size-4 text-primary-foreground" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="glass glow-hover flex items-center gap-4 rounded-2xl p-4"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="glass flex items-center gap-4 rounded-2xl p-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="glass space-y-4 rounded-2xl p-5 sm:p-6" noValidate>
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
            <input type="hidden" name="_subject" value="New message from portfolio site" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  aria-invalid={!!errors.name}
                  disabled={status === "loading"}
                />
                {errors.name ? <p className="text-xs text-destructive">{errors.name}</p> : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  disabled={status === "loading"}
                />
                {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={(e) => update("subject", e.target.value)}
                aria-invalid={!!errors.subject}
                disabled={status === "loading"}
              />
              {errors.subject ? <p className="text-xs text-destructive">{errors.subject}</p> : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                aria-invalid={!!errors.message}
                disabled={status === "loading"}
              />
              {errors.message ? <p className="text-xs text-destructive">{errors.message}</p> : null}
            </div>
            {status === "error" ? (
              <p className="text-sm text-destructive">
                Something went wrong. Please email me directly at{" "}
                <a href={`mailto:${profile.email}`} className="underline underline-offset-2">
                  {profile.email}
                </a>
                .
              </p>
            ) : null}
            <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send Message <Send className="size-4" />
                </>
              )}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const socials = [
    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: profile.github, label: "GitHub", Icon: Github },
    { href: profile.medium, label: "Medium", Icon: PenLine },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
  ];

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-xs text-muted-foreground">
          © 2026 Sakeet Kopparapu — Built with React &amp; Tailwind
        </p>
        <ul className="flex gap-2">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
