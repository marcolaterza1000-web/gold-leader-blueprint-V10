import { Microscope, Dumbbell, Utensils, Brain, ArrowRight, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const pillars = [
  {
    number: "01",
    icon: Microscope,
    tag: "Diagnose",
    title: "Daten statt Bauchgefühl",
    text: "Wir starten mit einer vollständigen Bioanalyse: Hormonstatus, HRV-Baseline, Körperzusammensetzung, Stress-Reaktionsmuster. Erst wenn die Daten sprechen, entsteht dein Plan.",
    bullets: ["Blutbild & Hormonpanel", "HRV-Baseline-Messung", "Körperzusammensetzung", "Leistungsdiagnostik"],
    color: "#f59e0b",
  },
  {
    number: "02",
    icon: Dumbbell,
    tag: "Training",
    title: "Präzision statt Volumen",
    text: "Kein Programm von der Stange. Jede Session wird nach deinem aktuellen HRV-Wert und Hormonstatus gesteuert. Maximale Wirkung in minimaler Zeit.",
    bullets: ["HRV-gesteuertes Training", "Maximale Effizienz", "Wöchentliche Anpassung", "Executive-kompatibel"],
    color: "#f59e0b",
  },
  {
    number: "03",
    icon: Utensils,
    tag: "Ernährung",
    title: "System statt Diät",
    text: "Eine Strategie die bei Geschäftsessen in Zürich genauso funktioniert wie auf Reisen nach Dubai. Kein Kalorienzählen. Ein klares System das du automatisch lebst.",
    bullets: ["Keine Verbote", "Reise-kompatibel", "Hormonstatus-basiert", "Supplement-Protokoll"],
    color: "#f59e0b",
  },
  {
    number: "04",
    icon: Brain,
    tag: "Mental",
    title: "Resilienz als Wettbewerbsvorteil",
    text: "Stress ist keine Schwäche. Falsch gemanagter Stress schon. Wir bauen neuronale Ressourcen die dich in Drucksituationen schärfer statt erschöpfter machen.",
    bullets: ["Stressreaktion optimieren", "Fokus-Protokolle", "Schlaf-Engineering", "Mentale Belastbarkeit"],
    color: "#f59e0b",
  },
];

const MethodSection = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="methode" className="py-40 bg-[#080808] px-6"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out" }}>
      <div className="container mx-auto max-w-6xl">

        {/* Section header */}
        <div className="text-center mb-20">
          <p className="font-inter text-[11px] text-[#f59e0b] uppercase tracking-[0.22em] mb-4 font-medium">Das ML-System</p>
          <h2 className="font-inter font-black text-white leading-[1.05] mb-6" style={{ fontSize: "clamp(30px, 4.5vw, 58px)" }}>
            Leistung entsteht nicht im Referenzbereich.{" "}
            <span className="text-white/35">Sondern im Optimum.</span>
          </h2>
          <p className="font-inter text-white/35 max-w-xl mx-auto text-[17px] leading-[1.8]">
            Medizinische Präzision kombiniert mit der Denkweise eines Hochleistungstrainers. Vier Säulen. Ein Ergebnis das bleibt.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {pillars.map((p, i) => (
            <div key={i}
              className="group relative rounded-[22px] p-8 border border-white/[0.06] hover:border-[#f59e0b]/20 transition-all duration-400 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease-out ${i * 0.1}s, transform 0.7s ease-out ${i * 0.1}s, border-color 0.3s, box-shadow 0.3s`,
              }}>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top left, rgba(245,158,11,0.04) 0%, transparent 60%)" }} />

              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#f59e0b]/15 bg-[#f59e0b]/[0.06] group-hover:bg-[#f59e0b]/[0.1] transition-colors">
                    <p.icon className="w-5 h-5 text-[#f59e0b]" />
                  </div>
                  <div>
                    <span className="font-inter text-[10px] text-[#f59e0b]/50 border border-[#f59e0b]/15 rounded-full px-3 py-0.5 uppercase tracking-wider">{p.tag}</span>
                  </div>
                </div>
                <span className="font-inter font-black text-white/8 text-4xl group-hover:text-white/12 transition-colors">{p.number}</span>
              </div>

              <h3 className="font-inter font-bold text-white text-xl mb-3 leading-snug">{p.title}</h3>
              <p className="font-inter text-white/35 text-sm leading-[1.8] mb-6">{p.text}</p>

              <ul className="space-y-2">
                {p.bullets.map((b, j) => (
                  <li key={j} className="flex items-center gap-2.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#f59e0b]/60 shrink-0" />
                    <span className="font-inter text-xs text-white/40">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#kontakt"
            className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-[#f59e0b] text-[#080808] font-inter font-black text-base hover:brightness-110 transition-all duration-200"
            style={{ boxShadow: "0 4px 32px rgba(245,158,11,0.25)" }}>
            Das System für dich anfragen <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default MethodSection;
