import { useEffect, useState } from "react";

/** 0–1: quanto a página foi rolada */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const h = el.scrollHeight - el.clientHeight;
      setProgress(h > 0 ? el.scrollTop / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}
