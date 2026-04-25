import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo-sysweb.png";

export const Hero = () => {
  return (
    <div className="relative pt-32 pb-16 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl">
              Transformando ideias em{" "}
              <span className="bg-gradient-to-r from-accent-light via-accent to-accent-dark bg-clip-text text-transparent">
                soluções digitais
              </span>
            </h1>
            <p className="mb-8 text-xl text-secondary">
              Desenvolvemos soluções tecnológicas sob medida para impulsionar seu
              negócio. Sites, sistemas web e e-commerce com excelência e inovação.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-2 btn-primary overflow-hidden relative"
              >
                <span className="relative z-10">Solicitar Orçamento</span>
                <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 border rounded-lg border-accent/50 hover:border-accent text-accent-light hover:bg-accent/10"
              >
                Conheça nossos serviços
              </a>
            </div>
          </div>

          {/* Logo flutuante */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl animate-pulse" />
            <img 
              src={logo} 
              alt="Sysweb Tecnologia" 
              className="relative z-10 max-w-md w-full animate-float"
              style={{ filter: "drop-shadow(0 0 40px rgba(168, 85, 247, 0.5))" }}
            />
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 bg-gradient-to-l from-accent to-transparent animate-pulse" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent-dark/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Animated Dots Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f712_1px,transparent_1px),linear-gradient(to_bottom,#a855f712_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
};
