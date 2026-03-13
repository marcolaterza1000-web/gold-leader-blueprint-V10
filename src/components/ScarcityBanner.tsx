import { Clock } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const ScarcityBanner = () => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-primary/[0.08] border-y border-primary/20 py-3.5 text-center"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      <p className="font-inter text-sm text-primary/90 flex items-center justify-center gap-2">
        <Clock className="w-3.5 h-3.5 shrink-0" />
        Marco betreut maximal 12 Klienten gleichzeitig. Aktuell sind{" "}
        <strong className="text-primary">2 Plätze verfügbar.</strong>{" "}
        <a href="#kontakt" className="underline underline-offset-2 hover:text-primary transition">
          Jetzt Erstgespräch sichern
        </a>
      </p>
    </div>
  );
};

export default ScarcityBanner;
