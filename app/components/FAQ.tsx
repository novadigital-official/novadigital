"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Web sitem tam olarak kaç gün içinde yayına alınır?",
    a: "Starter Paket 48 saat (2 iş günü), Growth Paket 3-5 iş günü, özel ödeme ve CRM entegrasyonlu Performance Paket ise 7-12 iş günü içerisinde anahtar teslim yayına alınır. Süre müşterinin logo, metin ve domain erişimini iletmesinin ardından başlar.",
  },
  {
    q: "Memnuniyet garantisi ne anlama geliyor?",
    a: "Web sitenizi alan adına bağlamadan önce canlı test ortamında beğeninize sunarız. Tasarım onayınızı alana kadar revizyonları eksiksiz yaparız. Siz onay vermeden siteyi yayına almayız.",
  },
  {
    q: "Ödeme süreci nasıl işliyor?",
    a: "Tüm paketlerde %50 başlangıçta, kalan %50 canlı test ortamı onayının ardından ödenir. Kurumsal e-Fatura kesilir.",
  },
  {
    q: "Site tesliminden sonra güncelleme yapabilir miyim?",
    a: "Evet. Yönetim paneli sayesinde metin ve fotoğrafları kendiniz güncelleyebilirsiniz. Teknik destek süresi pakete göre 15-60 gün dahildir.",
  },
  {
    q: "Google Haritalar ve SEO kaydını siz mi yapıyorsunuz?",
    a: "Evet. Growth ve Performance paketlerde Google Haritalar işletme kaydı, yerel anahtar kelime optimizasyonu ve harita etiketlemeleri ekibimizce tamamlanır.",
  },
  {
    q: "NovaDigital neden kendi işletmelerini yönetiyor?",
    a: "Nova Tadilat, Nova Klima, Nova Nakliyat ve Nova Epoksi — bu sistemleri önce sahada biz test ettik. Kendi işletmelerimizde çalışmayan bir sistemi müşterilerimize önermiyoruz.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="py-14 sm:py-16 relative bg-transparent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-blue-400 uppercase mb-3">
            Sık Sorulan Sorular
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Aklınızdaki{" "}
            <span className="text-shimmer">tüm sorulara</span> net cevaplar.
          </h2>
        </div>

        {/* Single-column accordion */}
        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-blue-500/35 bg-[#0E1526]"
                    : "border-white/8 glass-box"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <span className="font-semibold text-sm text-white leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "rotate-180 bg-blue-500/20 text-blue-300"
                        : "bg-white/5 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
