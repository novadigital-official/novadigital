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
    title: "Sektör tecrübesiyle test ediyoruz.",
    desc: "Tadilat, klima, nakliyat ve endüstriyel zemin — bu sistemleri gerçek saha verisi ve talep akışıyla optimize ettik.",
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
    <section id="neden-nova" className="py-16 md:py-24 relative bg-[#0f172a] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-[400px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className={`mb-12 text-center max-w-2xl mx-auto ${isVisible ? "reveal-up in-view" : "reveal-up"}`}>
          <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-cyan-400 uppercase mb-2">
            Farklılaştırıcımız
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Neden <span className="text-shimmer">Nova Digital?</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Teknik bilgi ile ticari satışı birleştiren modern dijital iş ortağınız.
          </p>
        </div>

        {/* 2×2 pillars */}
        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className={`bg-[#121c32]/80 border border-slate-800 hover:border-slate-700 p-6 sm:p-7 rounded-2xl flex gap-4 transition-all duration-300 ${
                  isVisible ? `reveal-up in-view stagger-${idx + 1}` : "reveal-up"
                }`}
              >
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="text-[11px] font-mono font-extrabold text-cyan-400/70 tracking-widest">
                    {p.number}
                  </span>
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-extrabold text-white text-sm sm:text-base mb-1.5 leading-snug tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Positioning statement */}
        <div className={`p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center ${
          isVisible ? "reveal-up in-view stagger-5" : "reveal-up"
        }`}>
          <p className="text-xs sm:text-sm font-semibold text-slate-200">
            <span className="text-cyan-400 font-mono">NovaDigital</span> — İşletmeler için dijital müşteri edinme sistemleri.{" "}
            <span className="text-slate-400 font-normal">Web sitesi + Google + Meta + dönüşüm + otomasyon.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
