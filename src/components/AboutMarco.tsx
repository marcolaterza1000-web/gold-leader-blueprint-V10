import portrait from "@/assets/marco-portrait.jpg";
import { CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const credentials = [
  "Akkreditierter Mental Coach",
  "Zertifizierter Ernährungsberater",
  "Zertifizierter Bioprint Coach",
  "Spezialist für datenbasierte Trainingssteuerung",
  "Ausgebildet nach der Charles Poliquin Methode",
];

const AboutMarco = () => {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="ueber-marco"
      className="py-32 bg-[#0a0a0a] px-6 section-divider"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <img src={portrait} alt="Marco Laterza Executive Coach Zürich"
              className="rounded-xl w-full object-cover aspect-[4/5]" loading="lazy"
              style={{ objectPosition: "center top" }} />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border border-[#f59e0b]/20 rounded-xl" />
          </div>

          <div>
            <p className="font-inter text-xs text-[#f59e0b] uppercase tracking-[0.18em] mb-3">Über Marco Laterza</p>
            <h2 className="font-inter font-bold text-white mb-6 leading-snug"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}>
              Ich weiss wie dein Alltag wirklich aussieht.
            </h2>
            <p className="font-inter text-white/55 leading-relaxed mb-5 text-base">
              Ich komme aus der Finanzwelt. Ich kenne 15-Stunden-Tage, Boardroom-Druck und die stille Erschöpfung die sich hinter Erfolg versteckt. Diese Erfahrung hat mein Coaching geprägt.
            </p>
            <p className="font-inter text-white/45 leading-relaxed mb-5 text-base">
              Heute verbinde ich diese Welt mit über 20 Jahren Expertise in Training, Hormonforschung und mentalem Coaching. Meine Klienten sind keine durchschnittlichen Fitnesssuchenden. Es sind Menschen die in allem was sie tun aussergewöhnlich sind. Und das auch von ihrem Körper erwarten.
            </p>
            <p className="font-inter text-white/45 leading-relaxed mb-8 text-base">
              24 internationale Magazin-Titelseiten zeigen was möglich ist wenn man das richtige System anwendet. Dieses System gebe ich heute an dich weiter. Präzise. Datenbasiert. Ohne Kompromisse.
            </p>

            <div className="grid gap-2 mb-8">
              {credentials.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(40px)",
                    transition: `opacity 0.7s ease-out ${i * 0.1}s, transform 0.7s ease-out ${i * 0.1}s`,
                  }}
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
                  <span className="font-inter text-sm text-white/50">{c}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8 py-6 border-y border-white/[0.06]">
              {[
                { value: "20+", label: "Jahre" },
                { value: "24×", label: "Cover" },
                { value: "500+", label: "Klienten" },
                { value: "4.9★", label: "Google" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="text-center"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(40px)",
                    transition: `opacity 0.7s ease-out ${i * 0.1}s, transform 0.7s ease-out ${i * 0.1}s`,
                  }}
                >
                  <div className="font-inter font-black text-xl text-[#f59e0b]">{s.value}</div>
                  <div className="font-inter text-[10px] text-white/30 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <a href="#kontakt"
              className="inline-flex items-center px-8 py-4 rounded-full bg-[#f59e0b] text-[#0a0a0a] font-inter font-bold hover:brightness-110 transition shadow-amber">
              Kostenloses Erstgespräch buchen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMarco;
