import { ClipboardList, Search, Palette, Code2, Rocket, Wrench } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { cardHover, sectionHeader, staggerContainer, staggerItem } from "@/lib/motion-variants";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico & Objetivos",
    description:
      "Entendemos o seu cenário, mapeamos processos e definimos metas claras (conversão, tempo, custo, escala).",
  },
  {
    icon: ClipboardList,
    title: "Escopo & Proposta",
    description:
      "Especificamos funcionalidades, integrações, prazos e entregáveis. Tudo documentado e alinhado antes de iniciar.",
  },
  {
    icon: Palette,
    title: "UX/UI",
    description:
      "Criamos interfaces modernas e funcionais, pensando em usabilidade, performance e consistência visual da marca.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    description:
      "Construímos o software sob medida (site, e-commerce, ERP/CRM, automações, APIs) com boas práticas e testes.",
  },
  {
    icon: Rocket,
    title: "Deploy & Monitoramento",
    description:
      "Publicação com checklist, rastreamento/analytics e observabilidade básica para acompanhar resultados.",
  },
  {
    icon: Wrench,
    title: "Evolução Contínua",
    description:
      "Melhorias e novas automações com base em dados reais. Seu produto evolui junto com o negócio.",
  },
];

const deliverables = [
  "Documentação de escopo e fluxos",
  "Integrações (APIs, webhooks, gateways, CRM/ERP)",
  "Dashboard/relatórios e permissões por perfil",
  "SEO, performance e boas práticas de segurança",
  "Hospedagem/deploy e treinamento quando necessário",
];

export const Process = () => {
  const reduce = useReducedMotion();
  const headerV = useMemo(
    () =>
      reduce
        ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
        : sectionHeader,
    [reduce]
  );
  const containerV = useMemo(
    () =>
      reduce
        ? { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { duration: 0 } } }
        : staggerContainer,
    [reduce]
  );
  const itemV = useMemo(
    () =>
      reduce
        ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
        : staggerItem,
    [reduce]
  );
  const boxV = useMemo(
    () =>
      reduce
        ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
        : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.5 } } },
    [reduce]
  );

  return (
    <section id="process" className="py-20">
      <div className="container">
        <motion.h2
          className="section-title text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerV}
        >
          Como trabalhamos
        </motion.h2>
        <motion.p
          className="section-subtitle text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerV}
        >
          Um processo claro para entregar software com previsibilidade e resultado
        </motion.p>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerV}
        >
          {steps.map((step) => (
            <motion.div
              key={step.title}
              variants={itemV}
              whileHover={reduce ? undefined : cardHover}
              className="group relative rounded-lg bg-white/5 p-6 transition-all duration-300 hover:bg-white/10"
            >
              <div className="relative z-10">
                <step.icon className="mb-4 h-10 w-10 text-accent transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-secondary">{step.description}</p>
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 rounded-lg border border-white/10 bg-white/5 p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={boxV}
        >
          <h3 className="text-2xl font-bold">O que você recebe</h3>
          <p className="mt-2 text-secondary">
            Entregáveis pensados para facilitar operação, escala e evolução do produto.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                <span className="text-secondary">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Quero um diagnóstico do meu processo
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border border-accent/50 px-6 py-3 text-sm font-semibold text-accent-light transition-all duration-200 hover:border-accent hover:bg-accent/10"
            >
              Ver soluções e serviços
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
