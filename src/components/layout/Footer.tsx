export const Footer = () => {
  return (
    <footer className="py-12 bg-white/5">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">Sysweb Tecnologia</h3>
            <p className="text-secondary">
              Transformando ideias em soluções digitais inovadoras.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-secondary hover:text-white">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="text-secondary hover:text-white">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-secondary hover:text-white">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary hover:text-white">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Contato</h3>
            <ul className="space-y-2 text-secondary">
              <li>contato@syswebtecnologia.com.br</li>
              <li>(00) 0000-0000</li>
              <li>Rua Exemplo, 123 - Cidade, Estado</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-white/10">
          <p className="text-secondary">
            © {new Date().getFullYear()} Sysweb Tecnologia. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};