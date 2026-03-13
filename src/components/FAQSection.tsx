import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    q: "Für wen ist die Zusammenarbeit mit Marco geeignet?",
    a: "Für Führungskräfte, Unternehmer und Professionals die verstehen dass ihr Körper kein Nebenprojekt ist. Menschen die in ihrem Job aussergewöhnliche Ergebnisse liefern und das auch von ihrer Gesundheit erwarten. Voraussetzung ist nicht ein bestimmtes Fitnesslevel sondern die Bereitschaft konsequent zu arbeiten.",
  },
  {
    q: "Was unterscheidet Marcos Ansatz von einem normalen Personal Trainer?",
    a: "Marco verbindet Training mit Hormonanalyse, HRV-Messung, mentalem Coaching und Ernährungsstrategie. Kein isoliertes Training, sondern ein System das alle Einflussfaktoren deiner Performance gleichzeitig optimiert. Dazu kommt sein Hintergrund aus der Finanzwelt: Er versteht deine Realität.",
  },
  {
    q: "Wie läuft das kostenlose Erstgespräch ab?",
    a: "30 Minuten. Wir sprechen über deine aktuelle Situation, deine Ziele und was du bisher probiert hast. Am Ende weisst du genau was möglich ist und ob eine Zusammenarbeit Sinn macht. Kein Pitch. Kein Druck.",
  },
  {
    q: "Wo findet das Training statt?",
    a: "Im privaten Studio in Urdorf oder im Ultimate Personal Training in Zürich 8002. Beide Standorte sind exklusiv für Klienten und bieten höchste Diskretion. Auf Wunsch auch hybrid mit Online-Sessions.",
  },
  {
    q: "Wann spüre ich erste Ergebnisse?",
    a: "Die meisten Klienten berichten nach zwei bis drei Wochen von mehr Energie und besserem Schlaf. Sichtbare Veränderungen zeigen sich in der Regel nach sechs bis acht Wochen. Nachhaltig — nicht kurzfristig.",
  },
  {
    q: "Warum gibt es nur 12 Plätze?",
    a: "Weil Marco jeden Klienten persönlich begleitet. Kein delegieren, kein Standardprotokoll. Er analysiert, passt an und ist erreichbar wenn du ihn brauchst. Das ist nur mit einer begrenzten Anzahl Klienten möglich. Aktuell sind 2 Plätze verfügbar.",
  },
];

const FAQSection = () => {
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
      <div className="container mx-auto max-w-3xl">
        <p className="font-inter text-xs text-[#f59e0b] uppercase tracking-[0.18em] text-center mb-3">Bevor du fragst</p>
        <h2 className="font-inter font-bold text-white text-center mb-12"
          style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}>
          Was du wissen möchtest.
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}
              className="glass-card rounded-xl px-6 border-white/[0.06]"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease-out ${i * 0.1}s, transform 0.7s ease-out ${i * 0.1}s`,
              }}
            >
              <AccordionTrigger className="font-inter font-semibold text-white hover:text-[#f59e0b] py-5 text-left text-sm transition-colors">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="font-inter text-white/40 leading-relaxed pb-5 text-sm">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-12">
          <a href="#kontakt"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#f59e0b] text-[#0a0a0a] font-inter font-bold hover:brightness-110 transition shadow-amber">
            Direkt fragen im Erstgespräch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
