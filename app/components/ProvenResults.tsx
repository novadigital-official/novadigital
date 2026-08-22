import Balancer from "react-wrap-balancer";
import { TrendingUp, Users, Zap, Clock, Star, Quote } from "lucide-react";

export default function ProvenResults() {
  const metrics = [
    {
      value: "+%187",
      label: "Organik Google Trafiği",
      subtext: "Antalya Epoksi Zemin (60 Günlük Veri)",
      icon: TrendingUp,
    },
    {
      value: "3.4×",
      label: "Daha Fazla Keşif Talebi",
      subtext: "Antalya'da Tadilat Projesi",
      icon: Users,
    },
    {
      value: "0.4 sn",
      label: "Mobil Sayfa Açılış Hızı",
      subtext: "Google PageSpeed 98+ Puan",
      icon: Zap,
    },
    {
      value: "48 Saat",
      label: "En Hızlı Teslimat",
      subtext: "Standart Web Paketlerinde",
      icon: Clock,
    },
  ];

  const testimonials = [
    {
      quote: "Norwood saç analiz modülü sayesinde yurt dışından gelen hasta başvuru formlarımız ilk 2 ayda 2 katına çıktı. Tasarım ve hız beklentimizin çok üstünde.",
      name: "Dr. Ahmet K.",
      role: "Medikal Direktör — Antalya DHI Saç Ekimi",
      rating: 5,
    },
    {
      quote: "Web sitemiz üzerinden her hafta 15-20 arası doğrudan villa tadilat ve keşif talebi alıyoruz. 48 saat içinde teslim edip Google haritamızı da kurdular.",
      name: "Mimar Serkan V.",
      role: "Kurucu Mimar — Antalya'da Tadilat",
      rating: 5,
    },
    {
      quote: "Online rezervasyon ve QR menü modülü sayesinde telefon trafiğimiz azaldı, masalarımız hafta sonu erkenden doluyor. Çok pratik ve şık bir sistem.",
      name: "Ece Y.",
      role: "İşletme Müdürü — Nova Cafe & Bistro",
      rating: 5,
    },
  ];

  return (
    <section className="py-10 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Metric Proof Bar */}
        <div className="glass-box p-6 sm:p-8 rounded-2xl border-blue-500/20 bg-gradient-to-r from-blue-950/20 via-[#0D1528]/80 to-blue-950/20">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              <Balancer>İşletmeler İçin Ölçülebilir Gerçek Sonuçlar</Balancer>
            </h3>
            <p className="text-xs text-slate-400">
              <Balancer>Nova Digital altyapısını kullanan projelerimizden doğrulanmış canlı performans verileri.</Balancer>
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
                  <div className="text-[10px] text-blue-300/80 mt-0.5 font-medium">{m.subtext}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Real Local Testimonials */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              <Balancer>Müşterilerimizin Gerçek Deneyimleri</Balancer>
            </h3>
            <p className="text-xs text-slate-400">
              <Balancer>Teslim ettiğimiz web sistemleri sonrası işletme sahiplerinin geri bildirimleri.</Balancer>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="glass-box p-5 sm:p-6 rounded-2xl flex flex-col justify-between border-white/10 relative"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(item.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <div className="font-bold text-xs text-white">{item.name}</div>
                  <div className="text-[10px] text-slate-400">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
