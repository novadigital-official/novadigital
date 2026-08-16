import Balancer from "react-wrap-balancer";
import { TrendingUp, Users, Zap, Clock } from "lucide-react";

export default function ProvenResults() {
  const metrics = [
    {
      value: "+%187",
      label: "Google Organik Trafik",
      subtext: "İlk 60 günde arama motoru görünürlüğü",
      icon: TrendingUp,
    },
    {
      value: "3.4×",
      label: "Daha Fazla Teklif & Arama",
      subtext: "Eski web sitesine kıyasla dönüşüm",
      icon: Users,
    },
    {
      value: "0.4 sn",
      label: "Mobil Sayfa Açılış Hızı",
      subtext: "Google PageSpeed 98+ Core Web Vitals",
      icon: Zap,
    },
    {
      value: "48 Saat",
      label: "Canlıya Alınış Süresi",
      subtext: "Sıfırdan Google Harita ve yayına teslim",
      icon: Clock,
    },
  ];

  return (
    <section className="py-8 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-box p-6 sm:p-8 rounded-2xl border-blue-500/20 bg-gradient-to-r from-blue-950/20 via-[#0D1528]/80 to-blue-950/20">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              <Balancer>İşletmeler İçin Ölçülebilir Gerçek Sonuçlar</Balancer>
            </h3>
            <p className="text-xs text-slate-400">
              <Balancer>Sadece güzel görünüm değil; kasanıza giren gerçek müşteri ve arama verileri.</Balancer>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {metrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center hover:border-blue-500/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-1">{m.label}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{m.subtext}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
