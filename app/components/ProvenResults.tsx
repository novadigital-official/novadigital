import { TrendingUp, Users, Zap, Clock } from "lucide-react";

const metrics = [
  {
    value: "+%187",
    label: "Organik Google Trafiği",
    subtext: "Nova Epoksi — 60 Günlük Ölçüm",
    icon: TrendingUp,
  },
  {
    value: "3.4×",
    label: "Keşif Talebi Artışı",
    subtext: "Nova Tadilat Projesi",
    icon: Users,
  },
  {
    value: "0.4 sn",
    label: "Mobil Sayfa Hızı",
    subtext: "Google PageSpeed 98+ Puan",
    icon: Zap,
  },
  {
    value: "48 Saat",
    label: "En Hızlı Teslimat",
    subtext: "Standart Paket",
    icon: Clock,
  },
];

export default function ProvenResults() {
  return (
    <section className="py-10 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-box p-6 sm:p-8 rounded-2xl border-blue-500/15 bg-gradient-to-r from-blue-950/15 via-[#0D1528]/70 to-blue-950/15">
          <div className="text-center mb-6">
            <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-blue-400 uppercase mb-2">
              Kendi Projelerimizden Doğrulanmış Veriler
            </p>
            <p className="text-xs text-slate-400">
              Aşağıdaki rakamlar, Nova Digital'in kendi yönettiği canlı işletmelerden elde edilmiştir.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 text-center">
            {metrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center p-4 rounded-xl bg-white/[0.025] border border-white/5 hover:border-blue-500/25 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
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
