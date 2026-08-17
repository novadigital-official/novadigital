import { Monitor, FlaskConical, MapPin, BarChart3 } from "lucide-react";

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
    desc: "Antalya odaklı Google harita SEO, sektör bazlı anahtar kelime stratejisi ve reklam hedeflemesi.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Sonuç ölçüyoruz.",
    desc: "Ziyaretçi → Lead → Teklif → Satış. Her adımı GA4, Meta Pixel ve WhatsApp dönüşüm takibiyle kayıt altına alırız.",
  },
];

export default function WhyNova() {
  return (
    <section id="neden-nova" className="py-14 sm:py-16 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-blue-400 uppercase mb-3">
            Farklılaştırıcımız
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white max-w-2xl">
            Neden{" "}
            <span className="text-shimmer">Nova Digital?</span>
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="glass-box p-6 sm:p-7 flex gap-4 group hover:border-blue-500/30 transition-colors"
              >
                {/* Number + Icon column */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="text-[10px] font-mono font-extrabold text-slate-600 tracking-widest">
                    {p.number}
                  </span>
                  <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold text-white text-sm sm:text-base mb-1.5 leading-snug">
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
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-950/20 border border-blue-500/15 text-center">
          <p className="text-xs sm:text-sm font-semibold text-slate-200">
            <span className="text-blue-400 font-mono">NovaDigital</span> — İşletmeler için dijital müşteri edinme sistemleri.{" "}
            <span className="text-slate-400 font-normal">
              Web sitesi + Google + Meta + dönüşüm + otomasyon.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
