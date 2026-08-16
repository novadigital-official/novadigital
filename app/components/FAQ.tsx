"use client";

import { useState } from "react";
import Balancer from "react-wrap-balancer";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Web sitesi yaptırmak ne kadar sürer?",
      a: "Başlangıç Web Sitesi 2-3 iş günü, Kurumsal Web Sistemi 3-7 iş günü, Profesyonel Dijital Sistem ise 7-15 iş günü içinde anahtar teslim tamamlanarak yayına alınır.",
    },
    {
      q: "Web sitesi fiyatları ve ödeme koşulları nelerdir?",
      a: "Başlangıç Paketi 4.999 TL, Kurumsal Paket 14.999 TL ve Profesyonel Paket 39.999 TL'dir. Ödemeler %50 iş başlangıcında, %50 ise siteniz canlı test ortamında tarafınızca onaylandıktan sonra alınır.",
    },
    {
      q: "Web sitem Google'da ve aramalarda çıkar mı?",
      a: "Evet! Kodladığımız her web sitesi en güncel Google SEO standartlarına, Schema.org mikro verilerine, hızlı yüklenme mimarisine ve Google Haritalar (Business) entegrasyonuna tam uyumlu olarak teslim edilir.",
    },
    {
      q: "Google Ads ve Meta reklam yönetimi nasıl çalışır?",
      a: "Reklam yönetimimiz aylık profesyonel hizmet modelidir. Sektörünüze özel negatif kelimeler, A/B testli reklam metinleri ve dönüşüm takibi (conversion tracking) kurularak doğrudan müşteri araması veya WhatsApp mesajı getirilir.",
    },
    {
      q: "Teslimattan sonra teknik destek sağlıyor musunuz?",
      a: "Kesinlikle. Paket türüne göre 15, 30 veya 60 gün boyunca ücretsiz teknik destek ve revizyon garantisi veriyoruz.",
    },
    {
      q: "Kendi alan adım (domain) ve hostingim varsa kullanabilir miyim?",
      a: "Evet, dilerseniz mevcut altyapınızı kullanabiliriz; dilerseniz tüm sunucu, SSL ve domain kurulumlarını adınıza biz yönetebiliriz.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="sss" className="py-12 sm:py-14 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2">
            <Balancer>
              Sıkça Sorulan <span className="text-shimmer">Sorular</span>
            </Balancer>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            <Balancer>Süreç, fiyatlandırma ve teknik detaylarla ilgili en sık merak edilenler.</Balancer>
          </p>
        </div>

        {/* 2-Column Mathematical Symmetric Accordion Grid */}
        <div className="grid md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-box rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white hover:text-blue-400 transition-colors"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
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
