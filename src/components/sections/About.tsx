import { CheckCircle, Users, Clock, Award } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-white/5">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative">
              <h2 className="section-title">Sobre a Sysweb Tecnologia</h2>
              <p className="mb-6 text-secondary">
                Somos uma empresa especializada no desenvolvimento de soluções
                tecnológicas sob medida. Nossa missão é transformar ideias em
                realidade digital, proporcionando resultados excepcionais para nossos
                clientes.
              </p>
              <p className="text-secondary">
                Com anos de experiência no mercado, nossa equipe altamente
                qualificada está preparada para enfrentar qualquer desafio
                tecnológico, sempre com foco na inovação e excelência.
              </p>
              
              <div className="mt-8 space-y-4">
                {[
                  "Equipe especializada e dedicada",
                  "Metodologias ágeis",
                  "Suporte técnico personalizado",
                  "Tecnologias mais recentes do mercado"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="group p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
              <Users className="w-8 h-8 mb-4 text-accent transition-transform group-hover:scale-110" />
              <h3 className="mb-2 text-2xl font-bold text-accent">100+</h3>
              <p className="text-secondary">Projetos Entregues</p>
            </div>
            <div className="group p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
              <Clock className="w-8 h-8 mb-4 text-accent transition-transform group-hover:scale-110" />
              <h3 className="mb-2 text-2xl font-bold text-accent">10+</h3>
              <p className="text-secondary">Anos de Experiência</p>
            </div>
            <div className="group p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
              <Award className="w-8 h-8 mb-4 text-accent transition-transform group-hover:scale-110" />
              <h3 className="mb-2 text-2xl font-bold text-accent">50+</h3>
              <p className="text-secondary">Clientes Satisfeitos</p>
            </div>
            <div className="group p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
              <Clock className="w-8 h-8 mb-4 text-accent transition-transform group-hover:scale-110" />
              <h3 className="mb-2 text-2xl font-bold text-accent">24/7</h3>
              <p className="text-secondary">Suporte Técnico</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </section>
  );
};