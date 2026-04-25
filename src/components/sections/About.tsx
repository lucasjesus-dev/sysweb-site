import { CheckCircle, Users, Clock, Award } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { useMouseSpotlight } from "@/hooks/useMouseSpotlight";
import { cardHover, staggerContainer, staggerItem } from "@/lib/motion-variants";

export const About = () => {
  const reduce = useReducedMotion();
  const { wrapRef, glowStyle, onMove, onLeave } = useMouseSpotlight(reduce);
  const colV = useMemo(
    () =>
      reduce
        ? { hidden: { opacity: 1, x: 0 }, visible: { opacity: 1, x: 0 } }
        : { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } },
    [reduce]
  );
  const statsV = useMemo(
    () =>
      reduce
        ? { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { duration: 0 } } }
        : staggerContainer,
    [reduce]
  );
  const statItemV = useMemo(
    () =>
      reduce
        ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
        : staggerItem,
    [reduce]
  );

  return (
    <div
      id="about"
      ref={wrapRef}
      role="region"
      aria-labelledby="about-title"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative overflow-hidden bg-white/5 py-20"
    >
      {!reduce && (
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={glowStyle}
          aria-hidden
        />
      )}

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={colV}
          >
            <div className="absolute -left-10 -top-10 h-72 w-72 animate-pulse rounded-full bg-accent/20 blur-3xl" />
            <div className="relative">
              <h2 id="about-title" className="section-title">
                Sobre a Sysweb Tecnologia
              </h2>
              <p className="mb-6 text-secondary">
                Somos uma empresa de desenvolvimento de software especializada em
                soluções sob medida. Nosso foco é construir produtos digitais que
                resolvem problemas reais: do site institucional ao sistema de gestão
                (ERP/CRM), passando por integrações e automações de processos.
              </p>
              <p className="text-secondary">
                Unimos estratégia, UX e engenharia para entregar com previsibilidade.
                Você ganha velocidade operacional, dados para decisões e uma base
                tecnológica pronta para evoluir.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Equipe especializada e dedicada",
                  "Metodologias ágeis",
                  "Integrações e automações (APIs, webhooks, rotinas)",
                  "Suporte e evolução contínua",
                  "Tecnologias modernas e escaláveis",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={statsV}
          >
            {[
              { icon: Users, n: "100+", l: "Projetos Entregues" },
              { icon: Clock, n: "10+", l: "Anos de Experiência" },
              { icon: Award, n: "50+", l: "Clientes Satisfeitos" },
              { icon: Clock, n: "24/7", l: "Suporte Técnico" },
            ].map((s) => (
              <motion.div
                key={s.l}
                variants={statItemV}
                whileHover={reduce ? undefined : cardHover}
                className="group rounded-lg bg-white/5 p-6 transition-all duration-300 hover:bg-white/10"
              >
                <s.icon className="mb-4 h-8 w-8 text-accent transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-2xl font-bold text-accent">{s.n}</h3>
                <p className="text-secondary">{s.l}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
};
