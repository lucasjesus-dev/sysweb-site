export const About = () => {
  return (
    <section id="about" className="py-20 bg-white/5">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
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
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-6 rounded-lg bg-white/5">
              <h3 className="mb-2 text-2xl font-bold text-accent">100+</h3>
              <p className="text-secondary">Projetos Entregues</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5">
              <h3 className="mb-2 text-2xl font-bold text-accent">10+</h3>
              <p className="text-secondary">Anos de Experiência</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5">
              <h3 className="mb-2 text-2xl font-bold text-accent">50+</h3>
              <p className="text-secondary">Clientes Satisfeitos</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5">
              <h3 className="mb-2 text-2xl font-bold text-accent">24/7</h3>
              <p className="text-secondary">Suporte Técnico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};