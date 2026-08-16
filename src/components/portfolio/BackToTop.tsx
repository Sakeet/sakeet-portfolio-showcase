import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="gradient-bg fixed right-5 bottom-5 z-50 flex size-11 items-center justify-center rounded-full shadow-xl transition-transform hover:scale-110"
    >
      <ArrowUp className="size-5 text-primary-foreground" />
    </button>
  );
}
