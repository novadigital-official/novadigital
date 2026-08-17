import { TrendingUp, Users, Zap, Clock } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const metrics = [
  { value: "+%187", label: "Organik Google Trafiği", subtext: "60 Günlük SEO Kampanyası", icon: TrendingUp },
  { value: "3.4×",  label: "Daha Fazla Müşteri Talebi", subtext: "Dönüşüm Odaklı Tasarım",  icon: Users },
  { value: "0.4 sn",label: "Mobil Sayfa Açılış Hızı",  subtext: "Google PageSpeed 98+ Puan", icon: Zap },
  { value: "48 Saat",label: "En Hızlı Teslimat",        subtext: "Standart Web Paketi",       icon: Clock },
];

export default function ProvenResults() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-10 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`glass-box p-5 sm:p-7 rounded-2xl border-blue-500/15 bg-gradient-to-r from-blue-950/15 via-[#0D1528]/70 to-blue-950/15 ${
            isVisible ? "reveal-scale in-view" : "reveal-scale"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {metrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center p-4 rounded-xl bg-white/[0.025] border border-white/5 hover:border-blue-500/25 transition-colors text-center ${
                    isVisible ? `reveal-up in-view stagger-${idx + 1}` : "reveal-up"
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center mb-2">
                    <Icon className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className={`text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight ${isVisible ? "metric-glow" : ""}`}>
                    {m.value}
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-1">{m.label}</div>
                  <div className="text-[10px] text-blue-300/70 mt-0.5 font-medium">{m.subtext}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
