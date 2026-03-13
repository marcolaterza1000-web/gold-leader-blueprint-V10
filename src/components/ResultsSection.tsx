import { Quote, Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Kaspar Luginbühl",
    role: "Wirtschaftsanwalt, Partner",
    quote: "Dank Marcos Coaching fühle ich mich mit Mitte 40 so ausgeglichen und fitt wie noch nie. Seine Methode verbindet körperliche Leistungsfähigkeit mit mentaler Klarheit. Genau das was ich als Anwalt täglich brauche.",
    highlight: "Fitter mit 40 als mit 30",
    sector: "Law",
  },
  {
    name: "Burkhard Boeckem",
    role: "CTO Hexagon AB",
    quote: "Als CTO eines globalen Unternehmens ist Energie und Fokus mein wichtigstes Kapital. Marco versteht das und arbeitet entsprechend. Er hat mich wieder in Topform gebracht ohne dass ich meinen Alltag auf den Kopf stellen musste.",
    highlight: "Topform trotz globalem Führungsalltag",
    sector: "Tech",
  },
  {
    name: "Pascal Zuberbühler",
    role: "Senior Football Expert, FIFA",
    quote: "Es war schwierig wieder in einen guten Trainingsmodus hineinzukommen. Marco hat mich dabei immens unterstützt. Sein strukturierter und individueller Ansatz ist das Beste was mir passieren konnte.",
    highlight: "Zurück auf Top-Niveau",
    sector: "Sport",
  },
  {
    name: "Manuela Leonhard",
    role: "Assistentin Stadtpräsidentin Zürich",
    quote: "Von Marco habe ich gelernt dass mein Körper alles schaffen kann. Es ist der Geist den man überzeugen muss. Dank Marcos ganzheitlichem Coaching konnte ich genau das erreichen.",
    highlight: "Körper und Geist in Einklang",
    sector: "Politics",
  },
  {
    name: "Gabriela Weiss",
    role: "Senior Payroll Specialist",
    quote: "Dank Marco konnte ich meinen Körperfettanteil von 26 Prozent auf 17 Prozent senken. Nachhaltig, ohne Crash-Diäten und ohne mein Leben auf den Kopf zu stellen.",
    highlight: "Von 26% auf 17% Körperfett",
    sector: "Finance",
  },
  {
    name: "Nicola Hägeli",
    role: "Unternehmer",
    quote: "Als Unternehmer ist mein Alltag oft chaotisch. Marco hat das geändert ohne Druck aber mit Klarheit. Sein Coaching ist strukturiert, individuell und vor allem alltagstauglich.",
    highlight: "Endlich ein System das hält",
    sector: "Business",
  },
];

const ResultsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="ergebnisse"
      className="py-32 bg-[#0a0a0a] px-6 section-divider"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <p className="font-inter text-xs text-[#f59e0b] uppercase tracking-[0.18em] text-center mb-3">Social Proof</p>
        <h2 className="font-inter font-bold text-white text-center mb-4"
          style={{ fontSize: "clamp(28px, 4vw, 50px)" }}>
          Was meine Klienten erreichen.
        </h2>
        <p className="text-center font-inter text-white/40 mb-16 max-w-xl mx-auto text-base leading-relaxed">
          Führungskräfte, Spitzensportler und Entscheider die denselben Anspruch an sich selbst stellen wie du.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i}
              className="glass-card rounded-xl p-7 flex flex-col hover:border-[#f59e0b]/15 transition-all duration-300 hover:-translate-y-1"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease-out ${i * 0.1}s, transform 0.7s ease-out ${i * 0.1}s`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 text-[#c89c4c] fill-[#c89c4c]" />)}
                </div>
                <span className="font-inter text-[10px] text-[#f59e0b]/50 border border-[#f59e0b]/15 rounded-full px-2.5 py-1">
                  {t.sector}
                </span>
              </div>
              <div className="inline-block bg-[#f59e0b]/[0.08] border border-[#f59e0b]/15 rounded-full px-3 py-1 mb-4 self-start">
                <span className="font-inter text-[10px] text-[#f59e0b] font-medium">{t.highlight}</span>
              </div>
              <Quote className="w-5 h-5 text-white/10 mb-3" />
              <p className="font-inter text-white/50 leading-relaxed mb-6 flex-1 text-sm">{t.quote}</p>
              <div className="border-t border-white/5 pt-4">
                <p className="font-inter font-semibold text-white text-sm">{t.name}</p>
                <p className="font-inter text-xs text-white/30 mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#kontakt"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#f59e0b] text-[#0a0a0a] font-inter font-bold text-base hover:brightness-110 transition shadow-amber">
            Schreib deine eigene Erfolgsgeschichte
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
