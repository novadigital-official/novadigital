"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Balancer from "react-wrap-balancer";

const faqs = [
  {
    q: "Web sitem tam olarak kaç gün içinde yayına alınır?",
    a: "Standart Paket 48 saat (2 iş günü), Kurumsal Paket 3-5 iş günü, Profesyonel Paket 7-12 iş günü içinde anahtar teslim yayına alınır. Süreç, içerik ve brief onayınızın ardından başlar.",
  },
  {
    q: "Tasarım ve memnuniyet garantisi ne anlama geliyor?",
    a: "Web sitenizi alan adına bağlamadan önce canlı test ortamında beğeninize sunarız. Tasarım onayınızı alana kadar revizyonları eksiksiz yaparız. Siz onay vermeden siteyi yayına almayız.",
  },
  {
    q: "Ödeme süreci ve koşulları nasıl işliyor?",
    a: "Tüm paketlerde %50 başlangıçta iş avansı, kalan %50 ise canlı test ortamı onayınızın ardından alınır. Kurumsal e-Fatura kesilir.",
  },
  {
    q: "Site tesliminden sonra güncelleme yapabilir miyim?",
    a: "Evet. Kolay yönetim paneli sayesinde metin, fotoğraf ve fiyatları kendiniz tek tıkla güncelleyebilirsiniz. Paketinize göre 15–60 gün ücretsiz teknik destek dahildir.",
  },
  {
    q: "Google Haritalar ve SEO kaydını siz mi yapıyorsunuz?",
    a: "Evet. Kurumsal ve Profesyonel paketlerde Google Haritalar işletme kaydı, yerel anahtar kelime optimizasyonu ve harita etiketlemeleri ekibimizce anahtar teslim tamamlanır.",
  },
  {
    q: "Paketler arasında sonradan geçiş yapabilir miyim?",
    a: "Kesinlikle. Standart paketle başlayıp işleriniz büyüdükçe aradaki farkı ödeyerek Kurumsal veya Profesyonel e-ticaret/reklam altyapısına kolayca geçiş yapabilirsiniz.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="sss" className="py-16 md:py-24 relative bg-[#0a1628] overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className={`mb-10 text-center ${isVisible ? "reveal-up in-view" : "reveal-up"}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            <Balancer>
              Aklınızdaki <span className="text-shimmer">Tüm Sorulara</span> Net Cevaplar
            </Balancer>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Aklınıza takılan diğer sorular için WhatsApp&apos;tan 7/24 yazabilirsiniz.
          </p>
        </div>

        {/* Accordion with #1e293b/40 blocks */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-cyan-500/40 bg-[#121c32] shadow-lg shadow-cyan-500/5"
                    : "border-slate-800 bg-[#10192d]/60 hover:border-slate-700"
                } ${isVisible ? `reveal-up in-view stagger-${Math.min(idx + 1, 5)}` : "reveal-up"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <span className="font-extrabold text-sm text-white tracking-tight leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg shrink-0 transition-all duration-200 ${
                      isOpen ? "rotate-180 bg-cyan-500/20 text-cyan-300" : "bg-slate-800/80 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
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
