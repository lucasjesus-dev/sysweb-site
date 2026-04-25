import { useLayoutEffect, useState } from "react";

export type SectionId = "home" | "services" | "process" | "about" | "contact" | null;

/**
 * Seção ativa para o menu: linha a ~25% da altura da viewport (abaixo do header).
 */
export function useActiveSection() {
  const [active, setActive] = useState<SectionId>("home");

  useLayoutEffect(() => {
    const measure = () => {
      const y = window.innerHeight * 0.25;

      const home = document.getElementById("home");
      if (home) {
        const r = home.getBoundingClientRect();
        if (r.top <= y && r.bottom > y) {
          setActive("home");
          return;
        }
      }

      for (const id of ["services", "process", "about", "contact"] as const) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= y && r.bottom > y) {
          setActive(id);
          return;
        }
      }

      if (home && home.getBoundingClientRect().top > y) {
        setActive("home");
        return;
      }

      let last: "services" | "process" | "about" | "contact" = "services";
      for (const id of ["services", "process", "about", "contact"] as const) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < y) last = id;
      }
      setActive(last);
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return active;
}
