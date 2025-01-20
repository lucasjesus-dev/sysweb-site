import { Globe, Code, ShoppingBag, Rocket } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description:
      "Websites modernos e responsivos que representam sua marca com excelência.",
  },
  {
    icon: Code,
    title: "Sistemas Web",
    description:
      "Soluções personalizadas para otimizar processos e aumentar a produtividade.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "Lojas virtuais completas e personalizadas para alavancar suas vendas online.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description:
      "Páginas otimizadas para converter visitantes em leads e clientes.",
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
              className="p-6 transition-all duration-200 rounded-lg bg-white/5 hover:bg-white/10"
            >
              <service.icon className="w-12 h-12 mb-4 text-accent" />
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};