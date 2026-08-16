import { Smartphone, SearchCheck, Cloud, Code2 } from "lucide-react";

export default function TrustStrip() {
  const items = [
    {
      icon: Smartphone,
      title: "100% Mobil Uyum",
      desc: "Tüm cihazlarda kusursuz hız ve duyarlılık",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: SearchCheck,
      title: "SEO Hazırlıklı",
      desc: "Google arama motoruna tam optimize altyapı",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Cloud,
      title: "Vercel Cloud Altyapı",
      desc: "Yüksek performans ve %99.9 kesintisiz yayın",
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },
    {
      icon: Code2,
      title: "Modern Next.js & React",
      desc: "Geliştirilebilir, güvenli ve en güncel teknoloji",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <section className="py-8 bg-white border-y border-slate-200/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 p-3 rounded-xl"
              >
                <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">{item.title}</h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
