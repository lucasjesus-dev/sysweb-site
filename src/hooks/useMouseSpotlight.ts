import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const SPOTLIGHT =
  (x: number, y: number) =>
    `radial-gradient(520px circle at ${x}px ${y}px, rgba(168, 85, 247, 0.22), transparent 45%)`;

/**
 * Gradiente que segue o ponteiro (mesmo efeito do Hero). Respeite `reduce` (prefers-reduced-motion).
 */
export function useMouseSpotlight(reduce: boolean | null) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [glow, setGlow] = useState({ x: 0, y: 0 });

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduce) return;
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setGlow({ x: e.clientX - r.left, y: e.clientY - r.top });
    },
    [reduce]
  );

  const onLeave = useCallback(() => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setGlow({ x: r.width / 2, y: r.height / 2 });
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || reduce) return;
    const r = el.getBoundingClientRect();
    setGlow({ x: r.width / 2, y: r.height / 2 });
  }, [reduce]);

  const glowStyle = useMemo(() => {
    if (reduce) return undefined;
    return { background: SPOTLIGHT(glow.x, glow.y) } as const;
  }, [glow.x, glow.y, reduce]);

  return { wrapRef, glowStyle, onMove, onLeave };
}
