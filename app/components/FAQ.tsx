"use client";

import { useState } from "react";
import Balancer from "react-wrap-balancer";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: "Web sitem tam olarak kaç gün içinde yayına alınır?",
      a: "Standart Paketler 48 saat (2 iş günü), Kurumsal Paketler 3-5 iş günü, özel ödeme ve CRM entegrasyonlu Profesyonel Paketler ise 7-12 iş günü içerisinde anahtar teslim yayına alınır.",
    },
    {
      q: "Memnuniyet garantisi tam olarak ne anlama geliyor?",
      a: "Web sitenizi alan adınıza bağlamadan önce canlı test ortamında (staging) beğeninize sunarız. Tasarım onayınızı alana kadar talep ettiğiniz revizyonları eksiksiz yaparız. Siz onay vermeden siteyi yayına almayız ve %100 memnuniyet sağlamadan süreci tamamlamayız.",
    },
    {
      q: "Ödeme süreci ve fatura nasıl işliyor?",
      a: "Tüm paketlerimizde şeffaf fiyatlandırma geçerlidir. Anlaşılan tutarın %50'si proje başlangıcında, kalan %50'si ise site canlı test ortamında onayınıza sunulup alan adına yayına alınırken ödenir. Şirketinize resmi kurumsal e-Fatura kesilir.",
    },
    {
      q: "Site tesliminden sonra teknik destek ve güncelleme alabilir miyim?",
      a: "Evet. Paket türünüze göre 15 ile 60 gün arasında ücretsiz teknik destek ve revizyon garantisi dahildir. Ayrıca yönetim paneli sayesinde telefonunuzdan veya bilgisayarınızdan metin ve fotoğrafları kendiniz de kolayca güncelleyebilirsiniz.",
    },
    {
      q: "Google Haritalar ve SEO kaydını siz mi yapıyorsunuz?",
      a: "Evet. Standart ve Kurumsal paketlerimizde Google Haritalar (Google Business Profile) işletme kaydı, arama motoru optimizasyonu (SEO) ve harita yerel anahtar kelime etiketlemeleri anahtar teslim ekibimizce tamamlanır.",
    },
    {
      q: "Mevcut bir web sitem var, yenileme yapabilir misiniz?",
      a: "Kesinlikle. Eski ve yavaş web sitenizi modern Next.js ve mobil uyumlu altyapımıza taşıyarak Google PageSpeed hızını 98+ puana çıkarıyor, doğrudan müşteri kazandıran yeni bir tasarıma kavuşturuyoruz.",
    },
  ];

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
            <Balancer>Süreç, ödeme ve teknik konular hakkında merak edilen tüm net cevaplar.</Balancer>
          </p>
        </div>

        {/* Symmetrical 2-Col Grid */}
        <div className="grid md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`glass-box rounded-2xl transition-all duration-200 overflow-hidden border ${
                  isOpen ? "border-blue-500/40 bg-[#10172A]" : "border-white/5 hover:border-white/15"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left focus:outline-none"
                >
                  <span className="font-bold text-xs sm:text-sm text-white leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg bg-white/5 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-500/20 text-blue-300" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-150">
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
