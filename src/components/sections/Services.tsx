import { Globe, Code, ShoppingBag, Rocket, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description:
      "Websites modernos e responsivos que representam sua marca com excelência.",
    features: ["Design Responsivo", "Otimização SEO", "Alta Performance"],
  },
  {
    icon: Code,
    title: "Sistemas Web",
    description:
      "Soluções personalizadas para otimizar processos e aumentar a produtividade.",
    features: ["Painéis Administrativos", "Automação de Processos", "Integrações API"],
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
      "Páginas otimizadas para converter visitantes em leads e clientes.",
    features: ["Alta Conversão", "A/B Testing", "Analytics Integrado"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <h2 className="section-title text-center">Nossos Serviços</h2>
        <p className="section-subtitle text-center">
          Soluções completas para sua presença digital
        </p>

        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-6 transition-all duration-300 rounded-lg bg-white/5 hover:bg-white/10"
            >
              <div className="relative z-10">
                <service.icon className="w-12 h-12 mb-4 text-accent transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="mb-4 text-secondary">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-secondary">
                      <ArrowRight className="w-4 h-4 mr-2 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};