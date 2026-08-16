import { Wand2, Cpu, Gauge, MessageCircle, TrendingUp, LifeBuoy } from "lucide-react";

export default function WhyNova() {
  const reasons = [
    {
      icon: Wand2,
      title: "Modern 2026 Tasarım",
      desc: "Eski moda şablonlar değil; estetik, kullanıcı dostu ve sektör lideri modern arayüzler.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Cpu,
      title: "Güncel Next.js & React",
      desc: "En güncel, güvenli ve Google PageSpeed 98+ puan alan yüksek performanslı yazılım mimarisi.",
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },
    {
      icon: Gauge,
      title: "2 Günde Hızlı Teslim",
      desc: "Modüler altyapımız sayesinde haftalarca beklemeden 48 saat içinde siteniz canlıda.",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      icon: MessageCircle,
      title: "Birebir & Şeffaf İletişim",
      desc: "Robotik yanıtlar yok. WhatsApp ve telefonla projenizin her adımında doğrudan görüşürüz.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: TrendingUp,
      title: "Dönüşüm & Ciro Odaklı",
      desc: "Sadece güzel görünen değil; doğrudan telefon çaldıran ve satış getiren sayfalar.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      icon: LifeBuoy,
      title: "Satış Sonrası Destek",
      desc: "Site teslim edildikten sonra kaybolmuyoruz; teknik destek ve güncellemelerle yanınızdayız.",
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-[11px] font-bold uppercase tracking-wider mb-2">
            Neden Nova Digital?
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Şeffaflık & <span className="text-gradient">Sonuç Odaklı Yaklaşım</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-clean rounded-xl p-6"
              >
                <div className={`p-2.5 rounded-lg ${item.bg} ${item.color} w-fit mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
