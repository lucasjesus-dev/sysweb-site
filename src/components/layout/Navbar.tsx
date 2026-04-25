import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import logo from "@/assets/logo-sysweb.png";

const navItem =
  "relative text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent/60";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const progress = useScrollProgress();
  const active = useActiveSection();

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 right-0 z-[60] h-1 bg-white/5"
        aria-hidden
      >
        <div
          className="h-full origin-left bg-gradient-to-r from-accent via-accent-light to-purple-200 transition-[width] duration-150 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-accent/20 bg-primary/95 backdrop-blur-sm">
        <div className="container">
          <div className="flex h-28 items-center justify-between">
            <div className="flex items-center">
              <a href="#home" className="flex items-center" aria-label="Início — Sysweb">
                <img
                  src={logo}
                  alt="Sysweb Tecnologia"
                  className="h-24 w-auto"
                />
              </a>
            </div>

            <div className="hidden items-center space-x-8 md:flex">
              {(
                [
                  ["services", "Serviços"],
                  ["process", "Processo"],
                  ["about", "Sobre"],
                ] as const
              ).map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={cn(
                    navItem,
                    active === id
                      ? "text-accent-light"
                      : "text-white/80 hover:text-accent-light"
                  )}
                >
                  {label}
                  {active === id && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-accent to-accent-light" />
                  )}
                </a>
              ))}
              <a
                href="#contact"
                className={cn("btn-primary", active === "contact" && "ring-2 ring-accent/40")}
              >
                Contato
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-accent"
                aria-expanded={isOpen}
                aria-label="Abrir menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {(
                  [
                    ["services", "Serviços"],
                    ["process", "Processo"],
                    ["about", "Sobre"],
                    ["contact", "Contato"],
                  ] as const
                ).map(([id, label]) => {
                  if (id === "contact") {
                    return (
                      <a
                        key={id}
                        href="#contact"
                        className="block rounded-lg px-3 py-2 btn-primary text-center"
                        onClick={() => setIsOpen(false)}
                      >
                        {label}
                      </a>
                    );
                  }
                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      className={cn(
                        "block rounded-lg px-3 py-2",
                        active === id
                          ? "bg-white/10 text-accent-light"
                          : "text-white/80 hover:bg-white/5 hover:text-accent-light"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
