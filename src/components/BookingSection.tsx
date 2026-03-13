import { useEffect } from "react";
import { Phone, Shield, Clock, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const BookingSection = () => {
  const { ref, inView } = useInView();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="kontakt"
      className="py-32 bg-[#0a0a0a] px-6 section-divider"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <p className="font-inter text-xs text-[#f59e0b] uppercase tracking-[0.18em] mb-3">Der erste Schritt</p>
          <h2 className="font-inter font-bold text-white mb-4 leading-snug"
            style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}>
            Bereit für mehr als "normal"?
          </h2>
          <p className="font-inter text-white/45 max-w-xl mx-auto text-base leading-relaxed mb-2">
            Buch dir jetzt ein kostenloses 30-minütiges Strategiegespräch. Kein Verkaufsgespräch. Keine Verpflichtung. Nur ein ehrliches Gespräch über das was möglich ist.
          </p>
          <p className="font-inter text-white/30 text-sm">
            Aktuell sind 2 von 12 Plätzen verfügbar.
          </p>
        </div>

        <div className="rounded-2xl p-8 md:p-12 bg-[#f59e0b]/5 border border-[#f59e0b]/15 shadow-amber">
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            {[
              { icon: Shield, text: "Vollständig vertraulich" },
              { icon: Clock, text: "30 Min, kein Druck" },
              { icon: Phone, text: "Online oder Zürich" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/35 font-inter text-sm justify-center">
                <item.icon className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="calendly-inline-widget rounded-xl overflow-hidden mb-8"
            data-url="https://calendly.com/marco-laterza/30min?hide_gdpr_banner=1&background_color=0a0a0a&text_color=f0f0f0&primary_color=f59e0b"
            style={{ minWidth: "320px", height: "700px" }} />

          <div className="flex items-center justify-center gap-2 text-white/30 font-inter text-sm">
            <Phone className="w-3.5 h-3.5" />
            <span>Lieber direkt anrufen?{" "}
              <a href="tel:+41794445851" className="text-[#f59e0b] hover:underline font-semibold">+41 79 444 58 51</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
