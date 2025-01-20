const projects = [
  {
    title: "E-commerce Moda",
    category: "E-commerce",
    image: "/placeholder.svg",
  },
  {
    title: "Sistema de Gestão",
    category: "Sistema Web",
    image: "/placeholder.svg",
  },
  {
    title: "Site Institucional",
    category: "Website",
    image: "/placeholder.svg",
  },
  {
    title: "Landing Page Produto",
    category: "Landing Page",
    image: "/placeholder.svg",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <h2 className="section-title text-center">Nosso Portfólio</h2>
        <p className="section-subtitle text-center">
          Conheça alguns dos nossos projetos mais recentes
        </p>

        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden transition-all duration-200 rounded-lg group bg-white/5"
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-secondary">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};