import { Award, Clock, Users, Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const items = [
  { icon: Award, text: "24× Titelseite internationaler Fitnessmagazine" },
  { icon: Clock, text: "Über 20 Jahre Erfahrung im High-End Segment" },
  { icon: Users, text: "Führungskräfte · Spitzensportler · Entscheider" },
  { icon: Star, text: "4.9 Google Bewertung · 59 verifizierte Rezensionen" },
];

const AuthorityStrip = () => {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#111111] py-5 border-b border-white/5"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-12 px-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(40px)",
              transition: `opacity 0.7s ease-out ${i * 0.1}s, transform 0.7s ease-out ${i * 0.1}s`,
            }}
          >
            <item.icon className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="font-inter text-xs text-white/50">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuthorityStrip;
