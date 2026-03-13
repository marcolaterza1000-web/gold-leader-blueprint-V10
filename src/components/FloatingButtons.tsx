import { MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <>
    <a href="https://wa.me/41794445851" target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-[#f59e0b] flex items-center justify-center shadow-amber hover:brightness-110 transition-all hover:scale-105"
      aria-label="WhatsApp">
      <MessageCircle className="w-5 h-5 text-[#0a0a0a]" />
    </a>
    <a href="#kontakt"
      className="fixed bottom-6 right-6 z-40 md:hidden px-6 py-3 rounded-full bg-[#f59e0b] text-[#0a0a0a] font-inter font-bold text-sm shadow-amber hover:brightness-110 transition-all">
      Jetzt buchen
    </a>
  </>
);

export default FloatingButtons;
