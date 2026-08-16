import { Monitor, ShoppingBag, Megaphone, Smartphone, Code2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      num: "01",
      icon: Monitor,
      title: "Kurumsal Web Tasarım",
      desc: "Müşterilerin sizi internette kolayca bulmasını, güven duymasını ve doğrudan telefon veya WhatsApp ile iletişime geçmesini sağlayan ultra hızlı web altyapısı.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      num: "02",
      icon: ShoppingBag,
      title: "E-Ticaret Sistemleri",
      desc: "7/24 kesintisiz ödeme alan (İyzico/PayTR), otomatik kargo ve fatura entegrasyonlu, mobil dönüşümü maksimize eden online satış mağazası.",
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },
    {
      num: "03",
      icon: Megaphone,
      title: "Google & Meta Reklam Yönetimi",
      desc: "Doğru hedef kitle, negatif kelime filtreleri ve dönüşüm takibi ile reklam bütçenizden maksimum ciro ve müşteri kazandıran profesyonel yönetim.",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      num: "04",
      icon: Smartphone,
      title: "Mobil Uygulama (iOS & Android)",
      desc: "Markanıza özel, App Store ve Google Play'de yayınlanan, push bildirimli, yüksek performanslı hibrit ve native mobil uygulama geliştirme.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      num: "05",
      icon: Code2,
      title: "Özel Yazılım & Otomasyon",
      desc: "İş süreçlerinizi hızlandıran, müşteri taleplerini otomatik kaydeden, stok, teklif ve operasyonlarınızı tek ekrandan yöneten özel yazılım sistemleri.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <section id="hizmetler" className="py-16 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-[11px] font-bold uppercase tracking-wider mb-2">
            Uçtan Uca Çözümler
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            İşletmeniz İçin <span className="text-gradient">Komple Dijital Hizmetler</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="card-clean rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-lg ${srv.bg} ${srv.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-extrabold font-mono text-slate-200">
                      {srv.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{srv.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-blue-600">
                  <span>Detaylı Bilgi</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
