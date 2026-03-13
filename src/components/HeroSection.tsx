import portrait from "@/assets/marco-hero.jpg";
import { ArrowRight, Star, TrendingUp, Zap, Award } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "500+", label: "Executives transformiert" },
  { value: "20+", label: "Jahre Erfahrung" },
  { value: "24×", label: "Int. Magazine Cover" },
  { value: "90", label: "Tage bis Peak Performance" },
];

const proofPills = [
  { icon: TrendingUp, label: "Datenbasiert & messbar" },
  { icon: Zap, label: "Ergebnisse ab Woche 3" },
  { icon: Award, label: "Vertraut von CEOs & CFOs" },
];

const HeroSection = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative min-h-screen bg-[#080808] overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, rgba(245,158,11,0.05) 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse at bottom left, rgba(245,158,11,0.04) 0%, transparent 60%)" }} />

      <div className="container mx-auto max-w-7xl px-6 md:px-10 pb-32 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full py-20 lg:py-0">

          <div className="relative z-10" style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out" }}>
            <div className="inline-flex items-center gap-2.5 border border-[#f59e0b]/25 bg-[#f59e0b]/[0.05] rounded-full px-5 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
              <p className="font-inter text-[11px] text-[#f59e0b] tracking-[0.18em] uppercase font-medium">Executive Performance Coaching · Zürich</p>
            </div>

            <h1 className="font-inter font-black leading-[1.02] mb-8" style={{ fontSize: "clamp(36px, 5vw, 68px)" }}>
              <span className="text-white block">Dein Körper.</span>
              <span className="text-white block">Das einzige Asset,</span>
              <span className="block" style={{ background: "linear-gradient(135deg, #f59e0b 0%, #fcd34d 50%, #f59e0b 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                das du nicht delegieren kannst.
              </span>
            </h1>

            <p className="font-inter text-[17px] text-white/45 max-w-lg mb-10 leading-[1.8]">
              Als Ex-Banker weiss ich: Disziplin allein reicht nicht, wenn das System fehlt. Ich baue das System das Führungskräfte auf ihr biologisches Optimum bringt.{" "}
              <span className="text-white/65 font-medium">Datenbasiert. Messbar. Ohne Zeitverlust.</span>
            </p>

            <div className="flex flex-wrap gap-2.5 mb-10">
              {proofPills.map((item, i) => (
                <div key={i} className="flex items-center gap-2 border border-white/[0.07] rounded-full px-4 py-2 bg-white/[0.025]"
                  style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.7s ease-out ${0.2 + i * 0.1}s, transform 0.7s ease-out ${0.2 + i * 0.1}s` }}>
                  <item.icon className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span className="font-inter text-xs text-white/45 font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <a href="#kontakt" className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#f59e0b] text-[#080808] font-inter font-black text-base hover:brightness-110 transition-all duration-200"
                style={{ boxShadow: "0 4px 32px rgba(245,158,11,0.28), 0 0 0 1px rgba(245,158,11,0.15)" }}>
                Kostenloses Analyse-Gespräch <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#video-ergebnisse" className="font-inter text-sm text-white/30 hover:text-white/60 transition-colors duration-200 flex items-center gap-1.5">
                Ergebnisse ansehen <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex items-center gap-3 pt-8 border-t border-white/[0.06]">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#c89c4c] fill-[#c89c4c]" />)}
              </div>
              <span className="text-white/30 text-sm font-inter">4.9 · 59 Google-Bewertungen</span>
              <span className="text-white/12">·</span>
              <span className="text-white/30 text-sm font-inter">500+ Klienten</span>
            </div>
          </div>

          <div className="relative lg:h-[700px] flex items-center justify-center"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.9s ease-out 0.15s, transform 0.9s ease-out 0.15s" }}>
            <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(245,158,11,0.07) 0%, transparent 65%)" }} />
            <div className="relative w-full max-w-[460px] mx-auto">
              <img src={portrait} alt="Marco Laterza – Executive Performance Coach Zürich" className="w-full rounded-[24px] object-cover" style={{ aspectRatio: "4/5", objectPosition: "center top" }} loading="eager" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[24px] border border-[#f59e0b]/12 pointer-events-none" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#f59e0b]/25 rounded-tl-2xl pointer-events-none" />
              <div className="absolute top-5 left-5 rounded-[14px] px-4 py-3 z-10" style={{ background: "rgba(8,8,8,0.85)", border: "1px solid rgba(245,158,11,0.2)", backdropFilter: "blur(12px)" }}>
                <p className="font-inter text-[10px] text-white/30 uppercase tracking-widest mb-0.5">International anerkannt</p>
                <p className="font-inter text-[#f59e0b] font-black text-xl leading-tight">24×</p>
                <p className="font-inter text-white/40 text-[11px]">Magazine Cover</p>
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full px-5 py-2.5 whitespace-nowrap" style={{ background: "rgba(8,8,8,0.92)", border: "1px solid rgba(245,158,11,0.22)", backdropFilter: "blur(16px)" }}>
                <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
                <span className="font-inter text-xs text-white/55 font-medium">Aktuell <span className="text-[#f59e0b] font-bold">2 Plätze</span> verfügbar</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.05]" style={{ background: "rgba(8,8,8,0.7)", backdropFilter: "blur(20px)" }}>
        <div className="container mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
            {stats.map((s, i) => (
              <div key={i} className="py-5 px-6 text-center">
                <p className="font-inter font-black text-[#f59e0b] text-2xl leading-tight">{s.value}</p>
                <p className="font-inter text-white/30 text-[11px] uppercase tracking-wider mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
