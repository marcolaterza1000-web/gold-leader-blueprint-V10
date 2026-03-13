import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "Methode", href: "#methode" },
  { label: "Ergebnisse", href: "#video-ergebnisse" },
  { label: "Standorte", href: "#standorte" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}>
      <div className="container mx-auto max-w-7xl px-6 md:px-10 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="font-inter font-black text-white tracking-[-0.02em] text-lg">
          ML<span style={{ color: "#f59e0b" }}>.</span>COACHING
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="font-inter text-sm text-white/40 hover:text-white transition-colors duration-200 tracking-wide">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#kontakt"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#f59e0b] text-[#080808] font-inter font-bold text-sm hover:brightness-110 transition-all duration-200"
            style={{ boxShadow: "0 2px 16px rgba(245,158,11,0.22)" }}>
            Erstgespräch buchen <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white/60 hover:text-white transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/[0.06]" style={{ background: "rgba(8,8,8,0.97)", backdropFilter: "blur(20px)" }}>
          <div className="container mx-auto max-w-7xl px-6 py-6 flex flex-col gap-5">
            {links.map(l => (
              <a key={l.label} href={l.href} className="font-inter text-base text-white/50 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#kontakt"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#f59e0b] text-[#080808] font-inter font-bold text-sm mt-2"
              onClick={() => setOpen(false)}>
              Erstgespräch buchen <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
