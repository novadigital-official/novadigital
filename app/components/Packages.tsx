"use client";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import {
  Check,
  Clock,
  ShieldCheck,
  Receipt,
  Handshake,
  ArrowRight,
  Flame,
} from "lucide-react";

const packages = [
  {
    id: "standart",
    name: "Standart",
    tagline: "Kurumsal Web Sitesi",
    price: "4.999",
    delivery: "48 Saat (2 İş Günü)",
    desc: "Kafe, kuaför ve yerel hizmet işletmeleri için hızlı yayına giren, müşteri arayan, Google uyumlu site.",
    cta: "Standart Paketi İncele",
    ctaHref: "#iletisim",
    highlight: false,
    badge: null,
    features: [
      { text: "Mobil & tablet uyumlu modern tasarım", bold: true },
      { text: "Google Haritalar (Business) & yerel SEO kurulumu", bold: true },
      { text: "WhatsApp + doğrudan arama entegrasyonu", bold: false },
      { text: "SSL güvenliği & 15 gün teknik destek", bold: false },
    ],
  },
  {
    id: "kurumsal",
    name: "Kurumsal",
    tagline: "Web + SEO + Dönüşüm Sistemi",
    price: "14.999",
    delivery: "3–5 İş Günü",
    desc: "Klinik, otel, hukuk bürosu ve tadilat firması için randevudan WhatsApp'a tam dönüşüm sistemi.",
    cta: "Kurumsal Paketi İncele",
    ctaHref: "#iletisim",
    highlight: true,
    badge: "Çoğu işletme için önerilir",
    features: [
      { text: "Gelişmiş yerel SEO & Google Harita optimizasyonu", bold: true },
      { text: "Online randevu & keşif formu + anlık bildirim", bold: true },
      { text: "GA4 & Meta Pixel dönüşüm takibi", bold: true },
      { text: "Kolay yönetim paneli + 30 gün VIP destek", bold: false },
      { text: "WhatsApp satış akışı kurulumu", bold: false },
    ],
  },
  {
    id: "profesyonel",
    name: "Profesyonel",
    tagline: "Web + SEO + Reklam + Otomasyon",
    price: "39.999",
    delivery: "7–12 İş Günü",
    desc: "Sağlık turizmi, e-ticaret ve çok şubeli markalar için 3D ödemeli, çok dilli tam dijital operasyon.",
    cta: "Profesyonel Paketi İncele",
    ctaHref: "#iletisim",
    highlight: false,
    badge: null,
    features: [
      { text: "İyzico / PayTR 3D güvenli ödeme & sanal POS", bold: true },
      { text: "Çoklu dil (İngilizce / Almanca / Rusça)", bold: true },
      { text: "Özel CRM & lead yönetim veritabanı", bold: false },
      { text: "Google Ads + Meta reklam kurulumu & yönetimi", bold: false },
      { text: "60 gün baş yazılımcı desteği & SLA garantisi", bold: false },
    ],
  },
];

export default function Packages() {
  return (
    <section id="paketler" className="py-14 sm:py-16 relative bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-blue-400 uppercase mb-3">
            Fiyatlandırma
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white max-w-2xl">
            <Balancer>
              İhtiyacınıza göre{" "}
              <span className="text-shimmer">3 net paket.</span>
            </Balancer>
          </h2>
          <p className="text-sm text-slate-400 mt-3 max-w-xl">
            Gizli maliyet yok. Şeffaf fiyatlandırma — pakete karar verin, biz de sistemi kuralım.
          </p>
        </div>

        {/* 3 cards — Kurumsal slightly elevated */}
        <div className="grid md:grid-cols-3 gap-5 items-start mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`glass-box flex flex-col h-full relative transition-all duration-300 p-6 sm:p-7 ${
                pkg.highlight
                  ? "border-blue-500/45 bg-gradient-to-b from-blue-950/25 via-[#0E1526]/80 to-transparent shadow-2xl shadow-blue-900/20 md:scale-[1.04] md:-translate-y-1"
                  : "border-white/8 md:scale-[0.97] md:translate-y-1 opacity-90 hover:opacity-100"
              }`}
            >
              {/* Recommended badge */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-blue-600/30">
                    <Flame className="w-3 h-3 fill-cyan-200 text-cyan-200" />
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className={pkg.badge ? "mt-3" : ""}>
                {/* Name tag + id */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-extrabold tracking-[0.22em] text-blue-400 uppercase">
                    {pkg.name}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-500">
                    {pkg.id}
                  </span>
                </div>

                {/* Tagline */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug">
                  {pkg.tagline}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={`text-3xl sm:text-4xl font-extrabold font-mono ${
                      pkg.highlight ? "text-blue-400" : "text-white"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span className="text-xs font-bold text-slate-500">TL</span>
                </div>

                {/* Delivery */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-4">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  {pkg.delivery}
                </div>

                {/* Desc */}
                <p className="text-xs text-slate-400 leading-relaxed mb-5">{pkg.desc}</p>

                {/* Features */}
                <ul className="space-y-2.5 mb-7 text-xs">
                  {pkg.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          pkg.highlight ? "text-cyan-400" : "text-blue-400"
                        }`}
                      />
                      <span className={f.bold ? "text-slate-200 font-semibold" : "text-slate-400"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-auto">
                {pkg.highlight ? (
                  <Link
                    href={pkg.ctaHref}
                    className="btn-shimmer w-full py-3 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow-lg"
                  >
                    {pkg.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link
                    href={pkg.ctaHref}
                    className="w-full py-3 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-1.5 transition-all"
                  >
                    {pkg.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="grid sm:grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/8">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
            Net Fiyat — Gizli Maliyet Yok
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300">
            <Receipt className="w-4 h-4 text-blue-400 shrink-0" />
            KDV Dahil & Kurumsal Fatura
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300">
            <Handshake className="w-4 h-4 text-blue-400 shrink-0" />
            %50 Başlangıç / %50 Teslimatta
          </div>
        </div>
      </div>
    </section>
  );
}
