import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import t1 from "@/assets/transform_markus.jpg";
import t2 from "@/assets/transform_bill.jpg";
import t3 from "@/assets/transform_m.jpg";
import t4 from "@/assets/transform_andre.jpg";
import t5 from "@/assets/transform_corinna.jpg";
import t6 from "@/assets/transform_extra.jpg";
import t7 from "@/assets/transform_nico.jpg";
import t8 from "@/assets/transform_bidi.jpg";
import t9 from "@/assets/transform_marco.jpg";
import t10 from "@/assets/transform_front.jpg";
import t11 from "@/assets/transform_jean.jpg";

const images = [t1, t2, t3, t4, t5, t6, t7, t8];

const TransformationGallery = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 bg-[#0d0d0d] px-6 section-divider"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <p className="font-inter text-xs text-primary uppercase tracking-[0.18em] text-center mb-3">Vorher · Nachher</p>
        <h2 className="font-inter font-bold text-white text-center mb-4" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
          Ergebnisse die <span className="text-primary">für sich sprechen.</span>
        </h2>
        <p className="text-center font-inter text-white/45 mb-16 max-w-xl mx-auto text-base leading-relaxed">
          Über 500 Transformationen in mehr als 20 Jahren. Jedes Resultat ist das Ergebnis eines individuellen Programms. Kein Standard. Keine Abkürzungen.
        </p>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img, i) => (
            <div key={i}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg border border-white/[0.06] hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease-out ${i * 0.1}s, transform 0.7s ease-out ${i * 0.1}s`,
              }}
              onClick={() => setSelected(img)}>
              <img src={img} alt={`Transformation ${i + 1}`} className="w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#kontakt"
            className="inline-flex items-center px-10 py-4 rounded-full bg-primary text-[#0d0d0d] font-inter font-bold text-base hover:brightness-110 transition shadow-amber">
            Deine Transformation beginnt mit einem Gespräch
          </a>
        </div>
      </div>
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <img src={selected} alt="Transformation" className="max-w-full max-h-[90vh] object-contain rounded-xl" />
          <button className="absolute top-6 right-6 text-white/60 hover:text-primary text-3xl font-light transition" onClick={() => setSelected(null)}>×</button>
        </div>
      )}
    </section>
  );
};

export default TransformationGallery;
