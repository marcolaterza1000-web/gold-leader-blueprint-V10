import { useState } from "react";
import { Play, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Kaspar Luginbühl",
    role: "Wirtschaftsanwalt, Partner",
    youtubeId: "36YypGRe3AI",
    quote: "Dank Marcos Coaching fühle ich mich mit Mitte 40 so ausgeglichen und fitt wie noch nie.",
    dataPoint: "Fitter mit 40 als mit 30",
  },
  {
    name: "Gabriela Weiss",
    role: "Senior Payroll Specialist",
    youtubeId: "rjvUqsvvGdA",
    quote: "Dank Marco konnte ich meinen Körperfettanteil von 26% auf 17% senken.",
    dataPoint: "KFA: 26% → 17%",
  },
  {
    name: "Diana Bossi",
    role: "Leiterin Kommunikation",
    youtubeId: "6rPeMAsCs1I",
    quote: "Heute fühle ich mich klarer und mental stärker als je zuvor.",
    dataPoint: "Klarheit & mentale Stärke",
  },
  {
    name: "Burkhard Boeckem",
    role: "CTO, Hexagon AB",
    youtubeId: "iB7RMloXas8",
    quote: "Marco hat mich durch sein Coaching wieder in Topform gebracht.",
    dataPoint: "Topform trotz globalem Führungsalltag",
  },
  {
    name: "Bill Walton",
    role: "CEO, Metal North America",
    youtubeId: "atXuuwPwpn8",
    quote: "I'm the lightest and strongest that I have ever been in my life thanks to Marco Laterza.",
    dataPoint: "Leichtestes & stärkstes Körpergewicht",
  },
  {
    name: "Pascal Zuberbühler",
    role: "Ehemaliger Schweizer Nationalgoalie",
    youtubeId: "T4HbXhuLd9I",
    quote: "Es war für mich schwierig, wieder in einen guten Trainingsmodus hineinzukommen. Dabei hat mich Marco immens unterstützt.",
    dataPoint: "Comeback auf Top-Niveau",
  },
  {
    name: "Mark Arnall",
    role: "Performance Coach, Kimi Räikkönen",
    youtubeId: "5JhEcScJZF4",
    quote: "The training with Marco will prove to be very positive for everyone working with him.",
    dataPoint: "Empfohlen von Elite-Coaches",
  },
  {
    name: "JT Foxx",
    role: "Global Investor & Entrepreneur",
    youtubeId: "CrahSRxo3EE",
    quote: "If you want a guy who cracked the code on how to look good, be healthy and get the body you want, Marco is your choice.",
    dataPoint: "Den Code geknackt",
  },
];

const PER_PAGE = 4;

function TestimonialCard({ item, active, onToggle }: { item: typeof testimonials[0]; active: boolean; onToggle: () => void }) {
  return (
    <div
      className="group relative rounded-[20px] overflow-hidden border border-white/[0.07] hover:border-[#f59e0b]/20 transition-all duration-300 cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.025)",
        boxShadow: active ? "0 8px 40px rgba(245,158,11,0.12), 0 0 0 1px rgba(245,158,11,0.18)" : "0 1px 0 rgba(255,255,255,0.04) inset",
      }}
      onClick={onToggle}
    >
      {/* Thumbnail or embed */}
      <div className="relative aspect-video bg-[#111]">
        {active ? (
          <iframe
            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
            title={item.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
              alt={item.name}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/10" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                style={{
                  background: "rgba(245,158,11,0.9)",
                  boxShadow: "0 4px 24px rgba(245,158,11,0.4)",
                }}
              >
                <Play className="w-5 h-5 text-[#080808] fill-[#080808] ml-0.5" />
              </div>
            </div>
            {/* Data point pill */}
            <div
              className="absolute bottom-3 left-3 rounded-full px-3 py-1"
              style={{ background: "rgba(8,8,8,0.82)", border: "1px solid rgba(245,158,11,0.25)", backdropFilter: "blur(8px)" }}
            >
              <span className="font-inter text-[10px] text-[#f59e0b] font-bold uppercase tracking-wider">{item.dataPoint}</span>
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start gap-2 mb-3">
          <Quote className="w-4 h-4 text-[#f59e0b]/40 shrink-0 mt-0.5" />
          <p className="font-inter text-white/50 text-sm leading-[1.7] italic">{item.quote}</p>
        </div>
        <div className="border-t border-white/[0.06] pt-3 flex items-center justify-between">
          <div>
            <p className="font-inter font-bold text-white text-sm">{item.name}</p>
            <p className="font-inter text-white/30 text-xs mt-0.5">{item.role}</p>
          </div>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center border border-white/10 group-hover:border-[#f59e0b]/30 transition-colors"
            style={{ background: active ? "rgba(245,158,11,0.15)" : "rgba(255,255,255,0.03)" }}
          >
            <Play className={`w-3 h-3 ml-0.5 ${active ? "text-[#f59e0b]" : "text-white/30"}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

const VideoTestimonials = () => {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);
  const totalPages = Math.ceil(testimonials.length / PER_PAGE);
  const visible = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="video-ergebnisse" className="py-40 bg-[#060606] px-6"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out" }}>
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-[11px] text-[#f59e0b] uppercase tracking-[0.22em] mb-4 font-medium">Echte Stimmen · Echte Resultate</p>
          <h2 className="font-inter font-black text-white leading-[1.05] mb-5" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
            Vertrau nicht mir.{" "}
            <span style={{ background: "linear-gradient(135deg, #f59e0b, #fcd34d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Vertrau ihnen.
            </span>
          </h2>
          <p className="font-inter text-white/30 max-w-lg mx-auto text-base leading-relaxed">
            Führungskräfte, Spitzensportler und Entscheider. Keine Inszenierung. Keine Skripte.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {visible.map((item, i) => (
            <div key={item.youtubeId}
              style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: `opacity 0.7s ease-out ${i * 0.08}s, transform 0.7s ease-out ${i * 0.08}s` }}>
              <TestimonialCard item={item} active={activeId === item.youtubeId} onToggle={() => setActiveId(activeId === item.youtubeId ? null : item.youtubeId)} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={() => { setPage(p => Math.max(0, p - 1)); setActiveId(null); }} disabled={page === 0}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#f59e0b]/30 hover:text-[#f59e0b] transition-all disabled:opacity-20 disabled:cursor-not-allowed">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => { setPage(i); setActiveId(null); }}
                className="rounded-full transition-all duration-200"
                style={{ width: page === i ? 24 : 8, height: 8, background: page === i ? "#f59e0b" : "rgba(255,255,255,0.15)" }} />
            ))}
          </div>
          <button onClick={() => { setPage(p => Math.min(totalPages - 1, p + 1)); setActiveId(null); }} disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#f59e0b]/30 hover:text-[#f59e0b] transition-all disabled:opacity-20 disabled:cursor-not-allowed">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default VideoTestimonials;
