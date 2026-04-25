import { Globe, Code, ShoppingBag, Rocket, ArrowRight, Repeat2, Boxes, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { cardHover, sectionHeader, staggerContainer, staggerItem } from "@/lib/motion-variants";

const services = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description:
      "Websites modernos e responsivos que posicionam sua marca e geram credibilidade.",
    features: ["Design Responsivo", "Otimização SEO", "Alta Performance"],
  },
  {
    icon: Code,
    title: "Sistemas Web",
    description:
      "Soluções sob medida para operação, gestão e produtividade (do jeito do seu negócio).",
    features: ["Painéis Administrativos", "Regras de Negócio", "Integrações via API"],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "Lojas virtuais completas e personalizadas para alavancar suas vendas online.",
    features: ["Gestão de Produtos", "Pagamentos Online", "Relatórios Detalhados"],
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description:
      "Páginas rápidas e focadas em conversão para campanhas, lançamentos e captação de leads.",
    features: ["Alta Conversão", "Mensuração (Analytics)", "Velocidade e SEO"],
  },
  {
    icon: Boxes,
    title: "ERP & CRM Sob Medida",
    description:
      "Sistemas para centralizar vendas, financeiro, estoque, atendimento e rotinas internas.",
    features: ["Fluxos e Perfis", "Relatórios e Dashboards", "Permissões e Auditoria"],
  },
  {
    icon: Repeat2,
    title: "Automações e Integrações",
    description:
      "Automatize tarefas e conecte suas ferramentas para reduzir custo operacional e erros.",
    features: ["Integração com APIs", "Bots/Rotinas (RPA)", "Webhooks e ETL leve"],
  },
  {
    icon: ShieldCheck,
    title: "Manutenção e Evolução",
    description:
      "Acompanhamento contínuo para manter tudo rápido, seguro e sempre evoluindo.",
    features: ["Correções e Melhorias", "Performance e Segurança", "Monitoramento/Suporte"],
  },
];

export const Services = () => {
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

  return (
    <section id="services" className="py-20">
      <div className="container">
        <motion.h2
          className="section-title text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35, margin: "0px 0px -10% 0px" }}
          variants={headerV}
        >
          Nossos Serviços
        </motion.h2>
        <motion.p
          className="section-subtitle text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={headerV}
        >
          Software sob medida para digitalizar, integrar e automatizar o seu negócio
        </motion.p>

        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -5% 0px" }}
          variants={containerV}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemV}
              whileHover={reduce ? undefined : cardHover}
              className="group relative rounded-lg bg-white/5 p-6 transition-all duration-300 [transform-style:preserve-3d] hover:bg-white/10"
              style={{ perspective: 1000 }}
            >
              <div className="relative z-10">
                <service.icon className="mb-4 h-12 w-12 text-accent transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="mb-4 text-secondary">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-secondary">
                      <ArrowRight className="mr-2 h-4 w-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
