import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-sysweb.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/20">
      <div className="container">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src={logo} alt="Sysweb Tecnologia" className="h-20 w-auto" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#services" className="text-white/80 hover:text-accent-light transition-colors">
                Serviços
              </a>
              <a href="#about" className="text-white/80 hover:text-accent-light transition-colors">
                Sobre
              </a>
              <a href="#contact" className="btn-primary">
                Contato
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#services"
                className="block px-3 py-2 text-white/80 hover:text-accent-light"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-white/80 hover:text-accent-light"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 btn-primary"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
