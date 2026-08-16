import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Research } from "@/components/portfolio/Research";
import { Skills } from "@/components/portfolio/Skills";
import { Achievements } from "@/components/portfolio/Achievements";
import { Leadership } from "@/components/portfolio/Leadership";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { BackToTop } from "@/components/portfolio/BackToTop";

const title = "Sakeet Kopparapu | AI/ML Engineer & Data Scientist";
const description =
  "AI/ML Engineer and Data Scientist. MS Information Systems @ UNT. Building AI and data systems that work at scale.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "/#person",
          name: "Sakeet Kopparapu",
          url: "/",
          jobTitle: "AI/ML Engineer & Data Scientist",
          email: "mailto:sakeetkopparapu332@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Plano",
            addressRegion: "TX",
            addressCountry: "US",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "University of North Texas",
          },
          sameAs: [
            "https://www.linkedin.com/in/kopparapu-sakeet/",
            "https://github.com/Sakeet",
            "https://medium.com/@sakeetkopparapu",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Achievements />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster />
    </div>
  );
}
