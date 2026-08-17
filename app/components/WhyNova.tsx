import { Monitor, FlaskConical, MapPin, BarChart3 } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const pillars = [
  {
    number: "01",
    icon: Monitor,
    title: "Sadece site yapmıyoruz.",
    desc: "Satışa dönüşmeyen güzel sitelerin anlamı yok. Her projeyi müşteri kazandırma sistemi olarak tasarlarız.",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Kendi işletmelerimizde test ediyoruz.",
    desc: "Nova Tadilat, Nova Klima, Nova Nakliyat ve Nova Epoksi — bu sistemleri sahada işlettik, verisiyle öğrendik.",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Yerel aramayı biliyoruz.",
    desc: "Google harita SEO, sektör bazlı anahtar kelime stratejisi ve bölgesel reklam hedeflemesi.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Sonuç ölçüyoruz.",
    desc: "Ziyaretçi → Lead → Teklif → Satış. Her adımı GA4, Meta Pixel ve WhatsApp dönüşüm takibiyle kayıt altına alırız.",
  },
];

export default function WhyNova() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="neden-nova" className="py-12 sm:py-14 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className={isVisible ? "reveal-up in-view mb-8" : "reveal-up mb-8"}>
          <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-blue-400 uppercase mb-3">
            Farklılaştırıcımız
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white max-w-2xl">
            Neden <span className="text-shimmer">Nova Digital?</span>
          </h2>
        </div>

        {/* 2×2 pillars */}
        <div className="grid sm:grid-cols-2 gap-4">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className={`glass-box p-5 sm:p-6 flex gap-4 hover:border-blue-500/25 transition-colors ${
                  isVisible ? `reveal-up in-view stagger-${idx + 1}` : "reveal-up"
                }`}
              >
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="text-[10px] font-mono font-extrabold text-slate-600 tracking-widest">
                    {p.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold text-white text-sm mb-1.5 leading-snug">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Positioning statement */}
        <div className={`mt-4 p-4 rounded-2xl bg-blue-950/20 border border-blue-500/12 text-center ${
          isVisible ? "reveal-up in-view stagger-5" : "reveal-up"
        }`}>
          <p className="text-xs sm:text-sm font-semibold text-slate-200">
            <span className="text-blue-400 font-mono">NovaDigital</span> — İşletmeler için dijital müşteri edinme sistemleri.{" "}
            <span className="text-slate-400 font-normal">Web sitesi + Google + Meta + dönüşüm + otomasyon.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
