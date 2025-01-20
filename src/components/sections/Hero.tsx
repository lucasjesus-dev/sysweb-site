import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="container">
        <div className="relative z-10 max-w-3xl animate-fade-in">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl">
            Transformando ideias em{" "}
            <span className="text-accent">soluções digitais</span>
          </h1>
          <p className="mb-8 text-xl text-secondary">
            Desenvolvemos soluções tecnológicas sob medida para impulsionar seu
            negócio. Sites, sistemas web e e-commerce com excelência e inovação.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 btn-primary">
            Solicitar Orçamento
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Background Effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 bg-gradient-to-l from-accent to-transparent" />
      </div>
    </div>
  );
};