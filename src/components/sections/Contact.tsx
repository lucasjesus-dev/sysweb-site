import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white/5">
      <div className="container">
        <h2 className="section-title text-center">Entre em Contato</h2>
        <p className="section-subtitle text-center">
          Vamos conversar sobre seu projeto
        </p>

        <div className="grid gap-12 mt-12 lg:grid-cols-2">
          <div>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Mensagem</label>
                <textarea
                  className="w-full h-32 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                  placeholder="Descreva seu projeto"
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-primary">
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="flex-shrink-0 w-6 h-6 text-accent" />
              <div>
                <h3 className="mb-1 text-lg font-semibold">Email</h3>
                <p className="text-secondary">contato@syswebtecnologia.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="flex-shrink-0 w-6 h-6 text-accent" />
              <div>
                <h3 className="mb-1 text-lg font-semibold">Telefone</h3>
                <p className="text-secondary">(00) 0000-0000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="flex-shrink-0 w-6 h-6 text-accent" />
              <div>
                <h3 className="mb-1 text-lg font-semibold">Endereço</h3>
                <p className="text-secondary">
                  Rua Exemplo, 123 - Cidade, Estado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};