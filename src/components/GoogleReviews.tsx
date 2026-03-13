import { Star, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const reviews = [
  {
    name: "Robert Skrobak",
    text: "Marco geht individuell auf die Situation jedes Klienten ein. Besonders schätze ich seine Erfahrung mit Unternehmern und C-Level Menschen. Er versteht das stressvolle Umfeld und berät mit echtem Fokus auf Resilienz und Leistungsfähigkeit.",
  },
  {
    name: "Yvon Hochstrasser",
    text: "Die Zusammenarbeit mit Marco stellte eine echte Transformation dar. Dies galt nicht nur in körperlicher Hinsicht, sondern ebenso auf mentaler Ebene. Seine Philosophie ist einzigartig, da es bei ihm nicht allein um das Training geht. Vielmehr vermittelt er einen Lebensstil, der dauerhaft trägt.",
  },
  {
    name: "Nicola Hägeli",
    text: "Dank Marco habe ich als Unternehmer zum ersten Mal eine wirklich stabile Routine gefunden. Sein strukturiertes und individuelles Konzept ist absolut alltagstauglich und hat meine Energie sowie meinen Fokus spürbar gesteigert. Zudem erreichte meine mentale Stärke durch die Zusammenarbeit ein völlig neues Niveau.",
  },
];

const GoogleReviews = () => {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-[#0a0a0a] px-6 section-divider"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      <div className="container mx-auto max-w-5xl">
        <p className="font-inter text-xs text-[#f59e0b] uppercase tracking-[0.18em] text-center mb-3">Verifizierte Google Bewertungen</p>
        <h2 className="font-inter font-bold text-white text-center mb-12"
          style={{ fontSize: "clamp(24px, 3vw, 38px)" }}>
          Was Klienten über Marco sagen.
        </h2>
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 hover:border-[#f59e0b]/15 transition-all duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease-out ${i * 0.1}s, transform 0.7s ease-out ${i * 0.1}s`,
              }}
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-[#c89c4c] fill-[#c89c4c]" />)}
              </div>
              <p className="font-inter text-white/45 leading-relaxed mb-5 text-sm">{r.text}</p>
              <p className="font-inter font-semibold text-white text-sm">{r.name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3 glass-card rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#c89c4c] fill-[#c89c4c]" />)}
            </div>
            <span className="font-inter text-white font-semibold">4.9</span>
            <span className="font-inter text-white/35 text-sm">· 59 Bewertungen</span>
          </div>
          <a href="https://search.google.com/local/reviews?placeid=ChIJhZrzumoKkEcR9iO2vfn5Uh8"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 font-inter text-sm text-[#f59e0b] hover:underline">
            Alle Bewertungen lesen <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
