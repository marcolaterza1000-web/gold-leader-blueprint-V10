import { X, Check } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const problems = [
  "Du trainierst sporadisch, doch die Ergebnisse bleiben aus",
  "Jede neue Methode bringt kurzfristig etwas, dann nichts",
  "Dein Körper signalisiert Stress, du ignorierst ihn",
  "Energie sinkt, Fokus lässt nach. Ausgerechnet wenn es zählt",
];

const solutions = [
  "Ein System das auf deine Biologie abgestimmt ist",
  "Training das sich in deinen Alltag fügt, nicht umgekehrt",
  "Hormon- und HRV-Daten statt Bauchgefühl",
  "Mehr Energie, schärferer Fokus in 3 bis 6 Wochen",
];

const ProblemSection = () => {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 bg-[#0a0a0a] px-6 section-divider"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      <div className="container mx-auto max-w-5xl">
        <p className="font-inter text-xs text-[#f59e0b] uppercase tracking-[0.18em] text-center mb-4">
          Warum Standard-Ansätze versagen
        </p>
        <h2 className="font-inter font-bold text-white text-center mb-4 leading-snug"
          style={{ fontSize: "clamp(28px, 4vw, 50px)" }}>
          "Alles normal":<br />
          <span className="text-white/40">die teuerste Lüge der Medizin.</span>
        </h2>
        <p className="text-center font-inter text-white/40 mb-16 max-w-xl mx-auto text-base leading-relaxed">
          High Achiever funktionieren anders. Ihr Nervensystem, ihr Hormonsystem, ihr Stressmuster. Alles anders. Trotzdem bekommen sie Standardratschläge. Das ist das Problem.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="glass-card rounded-2xl p-8"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full border border-red-500/30 flex items-center justify-center">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <h3 className="font-inter font-bold text-white text-base">Das Muster das dich bremst</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-3.5 h-3.5 text-red-400/60 mt-0.5 shrink-0" />
                  <span className="font-inter text-white/45 text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-2xl p-8 bg-[#f59e0b]/5 border border-[#f59e0b]/15"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full border border-[#f59e0b]/30 flex items-center justify-center">
                <Check className="w-4 h-4 text-[#f59e0b]" />
              </div>
              <h3 className="font-inter font-bold text-white text-base">Das System das funktioniert</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-3.5 h-3.5 text-[#f59e0b] mt-0.5 shrink-0" />
                  <span className="font-inter text-white/60 text-sm leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 glass-card rounded-2xl p-8 max-w-3xl mx-auto text-center">
          <p className="font-inter text-lg text-white/75 leading-relaxed">
            Als Ex-Banker kenne ich die Welt in der du arbeitest. Ich weiss was 15-Stunden-Tage mit dem Körper machen. Und ich weiss genau welche Hebel du brauchst.
          </p>
          <a href="#kontakt"
            className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 rounded-full bg-[#f59e0b] text-[#0a0a0a] font-inter font-bold text-sm hover:brightness-110 transition shadow-amber">
            Kostenlose Analyse buchen
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
