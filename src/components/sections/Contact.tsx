import { Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir o corpo do email
    const mailtoLink = `mailto:lucasjesus.dev@protonmail.com?subject=Contato via Site - ${formData.nome}&body=Nome: ${formData.nome}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensagem:%0D%0A${formData.mensagem}`;
    
    // Abrir o cliente de email padrão
    window.location.href = mailtoLink;
    
    // Mostrar toast de sucesso
    toast({
      title: "Mensagem enviada!",
      description: "Em breve entraremos em contato.",
    });
    
    // Limpar formulário
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white/5">
      <div className="container">
        <h2 className="section-title text-center">Entre em Contato</h2>
        <p className="section-subtitle text-center">
          Vamos conversar sobre seu projeto
        </p>

        <div className="grid gap-12 mt-12 lg:grid-cols-2">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Mensagem</label>
                <textarea
                  className="w-full h-32 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent"
                  placeholder="Descreva seu projeto"
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  required
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
                <h3 className="mb-1 text-lg font-semibold">E-mail</h3>
                <a 
                  href="mailto:lucasjesus.dev@protonmail.com"
                  className="text-secondary hover:text-white transition-colors"
                >
                  lucasjesus.dev@protonmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageSquare className="flex-shrink-0 w-6 h-6 text-accent" />
              <div>
                <h3 className="mb-1 text-lg font-semibold">WhatsApp</h3>
                <a 
                  href="https://wa.me/5551999152979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-colors"
                >
                  (51) 9 99152-2979
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Endereço</h3>
              <p className="text-secondary">
                Rua Flórida 504, Jardim Betânia<br />
                Cachoeirinha, RS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};