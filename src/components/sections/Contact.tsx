import { Mail, MessageSquare } from "lucide-react";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { sectionHeader } from "@/lib/motion-variants";

export const Contact = () => {
  const { toast } = useToast();
  const reduce = useReducedMotion();
  const headerV = useMemo(
    () =>
      reduce
        ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
        : sectionHeader,
    [reduce]
  );
  const formV = useMemo(
    () =>
      reduce
        ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
        : { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.45 } } },
    [reduce]
  );

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:lucasjesus.dev@protonmail.com?subject=Contato via Site - ${formData.nome}&body=Nome: ${formData.nome}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensagem:%0D%0A${formData.mensagem}`;

    window.location.href = mailtoLink;

    toast({
      title: "Mensagem enviada!",
      description: "Em breve entraremos em contato.",
    });

    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section id="contact" className="bg-white/5 py-20">
      <div className="container">
        <motion.h2
          className="section-title text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={headerV}
        >
          Entre em Contato
        </motion.h2>
        <motion.p
          className="section-subtitle text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={headerV}
        >
          Conte o que você quer automatizar ou construir
        </motion.p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={formV}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium">Nome</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 focus:border-accent focus:outline-none"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 focus:border-accent focus:outline-none"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Mensagem</label>
                <textarea
                  className="h-32 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 focus:border-accent focus:outline-none"
                  placeholder="Ex.: Preciso de um ERP/CRM sob medida, integrações entre sistemas, automação de tarefas, site/landing page ou e-commerce."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="w-full btn-primary">
                Enviar Mensagem
              </button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={formV}
          >
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 flex-shrink-0 text-accent" />
              <div>
                <h3 className="mb-1 text-lg font-semibold">E-mail</h3>
                <a
                  href="mailto:lucasjesus.dev@protonmail.com"
                  className="text-secondary transition-colors hover:text-white"
                >
                  lucasjesus.dev@protonmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageSquare className="h-6 w-6 flex-shrink-0 text-accent" />
              <div>
                <h3 className="mb-1 text-lg font-semibold">WhatsApp</h3>
                <a
                  href="https://wa.me/55519991806772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary transition-colors hover:text-white"
                >
                  (51) 9 99180-6772
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Endereço</h3>
              <p className="text-secondary">
                Rua Flórida 504, Jardim Betânia
                <br />
                Cachoeirinha, RS
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
