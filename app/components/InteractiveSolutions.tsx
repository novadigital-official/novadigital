"use client";

import { useState } from "react";
import Balancer from "react-wrap-balancer";
import {
  Monitor,
  ShoppingBag,
  Megaphone,
  Smartphone,
  Code2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface SolutionItem {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  icon: any;
  features: string[];
  metrics: { label: string; value: string };
  ctaText: string;  // Per expert: CTA hierarchy, not uniformity
}

export default function InteractiveSolutions() {
  const [activeTab, setActiveTab] = useState("web");

  const solutions: SolutionItem[] = [
    {
      id: "web",
      title: "Kurumsal Web Tasarım",
      shortDesc:
        "Google SEO uyumlu, 2 günde teslim, doğrudan müşteri kazandıran dönüşüm odaklı kurumsal web sitesi.",
      badge: "Starter & Growth",
      icon: Monitor,
      features: [
        "%100 Mobil uyumlu & Google PageSpeed 98+ hız puanı",
        "Google Haritalar (Business) kurulumu ve harita SEO",
        "WhatsApp ve doğrudan telefon arama entegrasyonu",
        "Kolay yönetim paneli ile anında içerik güncelleme",
      ],
      metrics: { label: "Ortalama Teslimat", value: "48 Saat" },
      ctaText: "Web Sitesi Teklifi Al →",
    },
    {
      id: "eticaret",
      title: "E-Ticaret & Online Satış",
      shortDesc:
        "7/24 kesintisiz ödeme alan, anlık stok takipli ve kargo entegrasyonlu modern online satış mağazası.",
      badge: "Performance Paket",
      icon: ShoppingBag,
      features: [
        "İyzico, PayTR ve Stripe 3D güvenli sanal POS",
        "Otomatik kargo fişi ve e-Fatura entegrasyonu",
        "Dinamik sepet ve tek tıkla sipariş tamamlama",
        "Kategori, varyant ve stok takip yönetim paneli",
      ],
      metrics: { label: "E-Ticaret Dönüşüm", value: "+%340" },
      ctaText: "E-Ticaret Detayı İncele →",
    },
    {
      id: "reklam",
      title: "Google Ads & Meta Reklamları",
      shortDesc:
        "Hedef kitlenize nokta atışı ulaşan, dönüşüm takibiyle ölçülebilir ciro getiren profesyonel reklam yönetimi.",
      badge: "Performans Pazarlama",
      icon: Megaphone,
      features: [
        "Arama ağı için negatif anahtar kelime filtreleri",
        "Instagram & Facebook hikaye/reels reklam kurgusu",
        "A/B testli yüksek tıklama oranlı reklam metinleri",
        "Haftalık şeffaf harcama & performans raporu",
      ],
      metrics: { label: "Müşteri Kazanım Maliyeti", value: "-%45" },
      ctaText: "Reklam Analizi Başlat →",
    },
    {
      id: "mobil",
      title: "Mobil Uygulama (iOS & Android)",
      shortDesc:
        "App Store ve Google Play'de yayınlanan, push bildirimli ve yüksek performanslı mobil uygulamalar.",
      badge: "App Store & Google Play",
      icon: Smartphone,
      features: [
        "React Native & Flutter çapraz platform mimari",
        "Kullanıcılara anlık kampanya push bildirimleri",
        "Giriş, profil, favori ve sepet yönetimi",
        "Hızlı backend API entegrasyonu",
      ],
      metrics: { label: "Yayınlama Süresi", value: "10-15 Gün" },
      ctaText: "Mobil Projenizi Konuşalım →",
    },
    {
      id: "yazilim",
      title: "Özel Yazılım & CRM Sistemleri",
      shortDesc:
        "İşletmenizin operasyonlarını hızlandıran, müşteri ve teklif takibini otomatikleştiren özel web yazılımları.",
      badge: "Özel İşletme Yazılımları",
      icon: Code2,
      features: [
        "Müşteri ve lead takip (CRM) panelleri",
        "Teklif hazırlama ve otomatik PDF sözleşme üretimi",
        "Çoklu şube ve yetkilendirilmiş personel yönetimi",
        "Veritabanı yedekleme ve kurumsal veri güvenliği",
      ],
      metrics: { label: "Operasyonel Tasarruf", value: "20+ Saat/Hf" },
      ctaText: "Yazılım Talebi Oluştur →",
    },
  ];

  const current = solutions.find((s) => s.id === activeTab) || solutions[0];

  return (
    <section id="cozumler" className="py-14 sm:py-16 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            İşletmeniz İçin{" "}
            <span className="text-shimmer">Hangi Sistem?</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2.5">
            İhtiyacınıza uygun çözümü seçin, özellikleri ve canlı demoları inceleyin.
          </p>
        </div>

        {/* Mobile: horizontal card scroll */}
        <div className="md:hidden overflow-x-auto pb-4 flex gap-4 no-scrollbar -mx-4 px-4 snap-x snap-mandatory">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-box p-6 rounded-2xl flex-[0_0_86%] snap-center flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono text-[10px] font-bold border border-blue-500/25">
                    {item.badge}
                  </span>
                  <div className="p-2 rounded-xl bg-blue-600/15 text-blue-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{item.shortDesc}</p>
                <div className="space-y-2 mb-5">
                  {item.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500">{item.metrics.label}</div>
                    <div className="text-sm font-extrabold font-mono text-white">{item.metrics.value}</div>
                  </div>
                  <a
                    href="#iletisim"
                    className="btn-shimmer px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md"
                  >
                    Teklif Al
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: interactive tabs */}
        <div className="hidden md:block">
          {/* Tab bar - 5 items balanced in 1 row on lg */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6 w-full">
            {solutions.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-xs font-bold transition-all text-center ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/40"
                      : "bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Studio panel */}
          <div className="glass-box p-8 rounded-2xl w-full">
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Left info */}
              <div className="col-span-7">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-300 font-mono text-xs font-bold mb-3 border border-blue-500/25">
                  {current.badge}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{current.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">{current.shortDesc}</p>
                <div className="space-y-2.5 mb-7">
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                {/* CTA hierarchy per expert advice */}
                <a
                  href="#iletisim"
                  className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white shadow-md transition-all"
                >
                  <span>{current.ctaText}</span>
                </a>
              </div>

              {/* Right: video + metric badge */}
              <div className="col-span-5">
                <div className="relative rounded-2xl overflow-hidden p-1.5 bg-gradient-to-b from-blue-500/20 via-white/5 to-transparent border border-white/15 shadow-2xl shadow-black/60">
                  <div className="relative aspect-[16/11] bg-slate-950 rounded-xl overflow-hidden">
                    <video
                      src="/images/5585983-hd_1080_1920_30fps.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090E]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-mono text-slate-400">{current.metrics.label}</div>
                        <div className="text-base font-extrabold font-mono text-white">{current.metrics.value}</div>
                      </div>
                      <span className="px-2 py-1 rounded bg-blue-600/30 text-blue-300 border border-blue-500/30 text-[10px] font-bold">
                        Canlı Demo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
