import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/55519991806772"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white fill-white" />
    </a>
  );
};
