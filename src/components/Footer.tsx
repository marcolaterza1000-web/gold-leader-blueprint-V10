import { Linkedin, Youtube, Instagram, Twitter, Facebook, Phone, MapPin } from "lucide-react";

const social = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/marco-laterza/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCMPQ4avjkYuDbKICyU8M_2w", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/marcolaterza/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/mlaterza", label: "X" },
  { icon: Facebook, href: "https://www.facebook.com/marcolaterzafit", label: "Facebook" },
];

const Footer = () => (
  <footer className="bg-[#070707] border-t border-white/5 py-16 px-6">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <p className="font-inter font-black text-xl text-white mb-3">
            ML <span className="text-[#f59e0b]">COACHING</span>
          </p>
          <p className="font-inter text-white/30 text-sm leading-relaxed">
            High Performance Coaching für Führungskräfte, Unternehmer und Spitzensportler in Zürich.
          </p>
        </div>
        <div>
          <p className="font-inter text-[10px] text-white/25 uppercase tracking-[0.15em] mb-4">Standorte</p>
          <div className="space-y-3">
            {["ML Coaching Studio · Urdorf", "Ultimate Personal Training · Zürich 8002"].map((loc, i) => (
              <div key={i} className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#f59e0b] mt-0.5 shrink-0" />
                <span className="font-inter text-white/35 text-sm">{loc}</span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
              <a href="tel:+41794445851" className="font-inter text-white/35 text-sm hover:text-[#f59e0b] transition">
                +41 79 444 58 51
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="font-inter text-[10px] text-white/25 uppercase tracking-[0.15em] mb-4">Folge Marco</p>
          <div className="flex gap-3">
            {social.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/30 hover:border-[#f59e0b]/40 hover:text-[#f59e0b] transition-all duration-200">
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-inter text-xs text-white/20">© {new Date().getFullYear()} Marco Laterza Coaching. Alle Rechte vorbehalten.</p>
        <p className="font-inter text-xs text-white/15">Zürich · Schweiz</p>
      </div>
    </div>
  </footer>
);

export default Footer;
