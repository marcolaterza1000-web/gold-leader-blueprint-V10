import { MapPin, ArrowRight, Clock, Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const locations = [
  {
    badge: "Hauptstandort",
    badgeColor: "#f59e0b",
    name: "Privatstudio Urdorf",
    area: "Zürich West",
    address: "Dorfstrasse 11c, 8902 Urdorf",
    description: "Vollausgestattetes Privatstudio. Maximale Diskretion, keine Wartezeiten, keine Ablenkungen. Ausschliesslich für Marcos Klienten.",
    highlights: ["Exklusive 1:1 Atmosphäre", "High-End Equipment", "Parkplatz vorhanden", "Vollständige Bioanalyse-Ausrüstung"],
    hours: "Mo–Sa · 06:00–21:00",
    mapsUrl: "https://maps.google.com/?q=Dorfstrasse+11c+8902+Urdorf",
    accent: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.25)",
  },
  {
    badge: "City",
    badgeColor: "#a78bfa",
    name: "Zürich City",
    area: "Enge · Zürich 2",
    address: "Jenatschstrasse 4, 8002 Zürich",
    description: "Direkt in der Innenstadt. Ideal für Executive-Klienten mit Büro in der City. Erreichbar in Minuten vom Paradeplatz.",
    highlights: ["5 Min vom Paradeplatz", "Diskreter Eingang", "Flex-Slots verfügbar", "Business-freundliche Zeiten"],
    hours: "Mo–Fr · 07:00–20:00",
    mapsUrl: "https://maps.google.com/?q=Jenatschstrasse+4+8002+Zürich",
    accent: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.20)",
  },
  {
    badge: "VIP",
    badgeColor: "#34d399",
    name: "Zürich Seefeld",
    area: "Seefeld · Zürich 8",
    address: "Seefeldquartier, 8008 Zürich",
    description: "Im exklusivsten Wohnquartier Zürichs. Für Klienten die höchste Diskretion und maximale Nähe zum Seefeldquartier schätzen.",
    highlights: ["Exklusivste Lage Zürichs", "Auf Anfrage buchbar", "Hausbesuche möglich", "VIP-Konditionen"],
    hours: "Auf Anfrage · Flexibel",
    mapsUrl: "https://maps.google.com/?q=Seefeld+8008+Zürich",
    accent: "rgba(52,211,153,0.06)",
    border: "rgba(52,211,153,0.18)",
  },
];

const LocationsSection = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="standorte" className="py-40 bg-[#080808] px-6"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out" }}>
      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-20">
          <p className="font-inter text-[11px] text-[#f59e0b] uppercase tracking-[0.22em] mb-4 font-medium">Standorte</p>
          <h2 className="font-inter font-black text-white leading-[1.05] mb-5" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
            Drei Standorte.{" "}
            <span style={{ background: "linear-gradient(135deg, #f59e0b, #fcd34d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Eine Qualität.
            </span>
          </h2>
          <p className="font-inter text-white/30 max-w-lg mx-auto text-base leading-relaxed">
            Urdorf, Zürich City und Seefeld. Alle drei Locations bieten maximale Diskretion für Executives mit höchsten Ansprüchen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {locations.map((loc, i) => (
            <div key={i}
              className="group relative rounded-[22px] p-7 border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: loc.accent,
                border: `1px solid ${loc.border}`,
                boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease-out ${i * 0.12}s, transform 0.7s ease-out ${i * 0.12}s, box-shadow 0.3s`,
              }}>

              <div className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${loc.accent} 0%, transparent 60%)` }} />

              {/* Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-inter text-[10px] font-bold uppercase tracking-[0.18em] rounded-full px-3 py-1 border"
                  style={{ color: loc.badgeColor, borderColor: `${loc.badgeColor}33`, background: `${loc.badgeColor}10` }}>
                  {loc.badge}
                </span>
                <MapPin className="w-4 h-4" style={{ color: loc.badgeColor, opacity: 0.5 }} />
              </div>

              <h3 className="font-inter font-black text-white text-xl mb-1">{loc.name}</h3>
              <p className="font-inter text-white/35 text-xs uppercase tracking-wider mb-4">{loc.area}</p>
              <p className="font-inter text-white/45 text-sm leading-[1.7] mb-6">{loc.description}</p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {loc.highlights.map((h, j) => (
                  <li key={j} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: loc.badgeColor, opacity: 0.6 }} />
                    <span className="font-inter text-xs text-white/40">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="border-t pt-5 flex items-center justify-between" style={{ borderColor: `${loc.badgeColor}18` }}>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-white/20" />
                  <span className="font-inter text-[11px] text-white/30">{loc.hours}</span>
                </div>
                <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 font-inter text-xs font-bold transition-colors"
                  style={{ color: loc.badgeColor, opacity: 0.7 }}
                  onClick={e => e.stopPropagation()}>
                  Maps <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LocationsSection;
