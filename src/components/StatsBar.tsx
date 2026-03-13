import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "500+", label: "Klienten transformiert" },
  { value: "20+", label: "Jahre Erfahrung" },
  { value: "98%", label: "Erfolgsquote" },
  { value: "24×", label: "Int. Magazine Covers" },
];

const sectors = ["Finance", "Tech", "Real Estate", "Law", "Healthcare", "Sport"];

const StatsBar = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-20 px-6"
      style={{
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-inter font-black text-[#f59e0b] leading-tight mb-1" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>{s.value}</p>
              <p className="font-inter text-white/30 text-xs uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.05] pt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="font-inter text-[11px] text-white/20 uppercase tracking-widest mr-2">Branchen</span>
          {sectors.map(s => (
            <span key={s} className="font-inter text-[11px] text-white/25 border border-white/[0.07] rounded-full px-3 py-1">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsBar;
