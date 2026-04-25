import { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useMouseSpotlight } from "@/hooks/useMouseSpotlight";
import logo from "@/assets/logo-sysweb.png";

export const Hero = () => {
  const reduce = useReducedMotion();
  const { wrapRef, glowStyle, onMove, onLeave } = useMouseSpotlight(reduce);

  const contentVariants = useMemo(
    () => ({
      hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: reduce ? 0 : 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
      },
    }),
    [reduce]
  );

  return (
    <div
      id="home"
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative overflow-hidden pt-32 pb-16"
    >
      {!reduce && (
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={glowStyle}
          aria-hidden
        />
      )}

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl">
              Transformando ideias em{" "}
              <span className="bg-gradient-to-r from-accent-light via-accent to-accent-dark bg-clip-text text-transparent">
                soluções digitais
              </span>
            </h1>
            <p className="mb-8 text-xl text-secondary">
              Desenvolvemos software sob medida para impulsionar seu negócio: sites,
              landing pages, e-commerce, ERP/CRM, integrações e automações de processos.
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              {[
                "Sistemas Web (ERP/CRM)",
                "Automações e Integrações",
                "APIs e Painéis Admin",
                "E-commerce e Landing Pages",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur-sm transition-colors hover:border-accent/30 hover:bg-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group btn-primary relative inline-flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Solicitar Orçamento</span>
                <ArrowRight
                  size={20}
                  className="relative z-10 transition-transform group-hover:translate-x-1"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg border border-accent/50 px-6 py-3 text-sm font-semibold text-accent-light transition-all duration-200 hover:border-accent hover:bg-accent/10"
              >
                Conheça nossos serviços
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden justify-center lg:flex"
            initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="absolute inset-0 animate-pulse rounded-full bg-accent/30 blur-3xl" />
            <img
              src={logo}
              alt="Sysweb Tecnologia"
              className="relative z-10 w-full max-w-md animate-float"
              style={{ filter: "drop-shadow(0 0 40px rgba(168, 85, 247, 0.5))" }}
            />
          </motion.div>
        </div>

        <div className="absolute right-0 top-0 h-full w-1/2 animate-pulse bg-gradient-to-l from-accent to-transparent opacity-20" />
        <div className="absolute -right-20 -top-20 h-96 w-96 animate-pulse rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 animate-pulse rounded-full bg-accent-dark/20 blur-3xl delay-1000" />
      </div>

      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#a855f712_1px,transparent_1px),linear-gradient(to_bottom,#a855f712_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
};
