"use client";

import Link from "next/link";
import {
  Check, Clock, ShieldCheck, Receipt, Handshake, ArrowRight, Flame,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Balancer from "react-wrap-balancer";

const packages = [
  {
    id: "standart",
    name: "Standart",
    tagline: "Kurumsal Web Sitesi",
    price: "4.999",
    delivery: "48 Saat",
    desc: "Yerel hizmet işletmeleri için hızlı yayına giren, Google uyumlu site.",
    cta: "Standart Paketi İncele",
    ctaHref: "#iletisim",
    highlight: false,
    badge: null,
    features: [
      { text: "Mobil uyumlu modern tasarım", bold: true },
      { text: "Google Haritalar & yerel SEO kurulumu", bold: true },
      { text: "WhatsApp + doğrudan arama entegrasyonu", bold: false },
      { text: "SSL & 15 gün teknik destek", bold: false },
    ],
  },
  {
    id: "kurumsal",
    name: "Kurumsal",
    tagline: "Web + SEO + Dönüşüm",
    price: "14.999",
    delivery: "3–5 Gün",
    desc: "Klinik, otel ve hizmet firmaları için randevudan WhatsApp'a tam sistem.",
    cta: "Kurumsal Paketi İncele",
    ctaHref: "#iletisim",
    highlight: true,
    badge: "Çoğu işletme için önerilir",
    features: [
      { text: "Gelişmiş SEO & Google Harita optimizasyonu", bold: true },
      { text: "Online randevu & keşif formu + bildirim", bold: true },
      { text: "GA4 & Meta Pixel dönüşüm takibi", bold: true },
      { text: "30 gün VIP destek & WhatsApp akışı", bold: false },
    ],
  },
  {
    id: "profesyonel",
    name: "Profesyonel",
    tagline: "Web + SEO + Reklam + Otomasyon",
    price: "39.999",
    delivery: "7–12 Gün",
    desc: "Sağlık turizmi ve e-ticaret için çok dilli, 3D ödemeli tam operasyon.",
    cta: "Profesyonel Paketi İncele",
    ctaHref: "#iletisim",
    highlight: false,
    badge: null,
    features: [
      { text: "İyzico / PayTR 3D güvenli ödeme", bold: true },
      { text: "Çoklu dil (EN / DE / RU)", bold: true },
      { text: "Özel CRM & lead yönetim paneli", bold: false },
      { text: "60 gün yazılımcı desteği & SLA", bold: false },
    ],
  },
];

export default function Packages() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="paketler" className="py-12 sm:py-14 relative bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className={isVisible ? "reveal-up in-view mb-8" : "reveal-up mb-8"}>
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
            Gizli maliyet yok. Şeffaf fiyatlandırma.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 items-start mb-6">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              className={`glass-box flex flex-col h-full relative p-5 sm:p-6 transition-all duration-300 ${
                pkg.highlight
                  ? "border-blue-500/45 bg-gradient-to-b from-blue-950/25 via-[#0E1526]/80 to-transparent shadow-xl shadow-blue-900/15 md:scale-[1.04] md:-translate-y-1"
                  : "md:scale-[0.97] md:translate-y-1 opacity-90 hover:opacity-100"
              } ${isVisible ? `reveal-up in-view stagger-${idx + 1}` : "reveal-up"}`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-blue-600/30">
                    <Flame className="w-3 h-3 fill-cyan-200 text-cyan-200" />
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className={pkg.badge ? "mt-3" : ""}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-extrabold tracking-[0.22em] text-blue-400 uppercase">
                    {pkg.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-600">{pkg.id}</span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                  {pkg.tagline}
                </h3>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-2xl sm:text-3xl font-extrabold font-mono ${pkg.highlight ? "text-blue-400" : "text-white"}`}>
                    {pkg.price}
                  </span>
                  <span className="text-xs text-slate-500 font-bold">TL</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 border border-white/8 text-xs text-slate-400 mb-3">
                  <Clock className="w-3 h-3 text-blue-400" />
                  {pkg.delivery}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">{pkg.desc}</p>

                <ul className="space-y-2 mb-5 text-xs">
                  {pkg.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${pkg.highlight ? "text-cyan-400" : "text-blue-400"}`} />
                      <span className={f.bold ? "text-slate-200 font-semibold" : "text-slate-400"}>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                {pkg.highlight ? (
                  <Link
                    href={pkg.ctaHref}
                    className="btn-shimmer w-full py-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow-lg"
                  >
                    {pkg.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link
                    href={pkg.ctaHref}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-1.5 transition-all"
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
        <div className="grid sm:grid-cols-3 gap-2 p-3.5 rounded-xl bg-white/[0.02] border border-white/8">
          {[
            { icon: ShieldCheck, text: "Net Fiyat — Gizli Maliyet Yok" },
            { icon: Receipt,     text: "KDV Dahil & Kurumsal Fatura" },
            { icon: Handshake,   text: "%50 Başlangıç / %50 Teslimatta" },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300">
              <Icon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
