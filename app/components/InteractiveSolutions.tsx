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
  ctaText: string;
}

export default function InteractiveSolutions() {
  const [activeTab, setActiveTab] = useState("web");

  const solutions: SolutionItem[] = [
    {
      id: "web",
      title: "Kurumsal Web Tasarım",
      shortDesc: "Google SEO uyumlu, 2 günde teslim, doğrudan müşteri kazandıran dönüşüm odaklı kurumsal web sitesi.",
      badge: "48 Saatte Teslimat",
      icon: Monitor,
      features: [
        "%100 Mobil uyumlu ve Google PageSpeed 98+ hız puanı",
        "Google Haritalar (Business) profil kurulumu ve harita SEO",
        "WhatsApp ve doğrudan telefon arama entegrasyonu",
        "Kolay yönetim paneli ile anında içerik güncelleme",
      ],
      metrics: { label: "Ortalama Teslimat", value: "48 Saat" },
      ctaText: "Web Sitesi Teklifi Al",
    },
    {
      id: "eticaret",
      title: "E-Ticaret & Online Satış",
      shortDesc: "7/24 kesintisiz ödeme alan, anlık stok takipli ve kargo entegrasyonlu modern online satış mağazası.",
      badge: "İyzico & PayTR Altyapısı",
      icon: ShoppingBag,
      features: [
        "İyzico, PayTR ve Stripe 3D güvenli sanal POS altyapısı",
        "Otomatik kargo fişi ve e-Fatura entegrasyonu",
        "Dinamik sepet drawer ve tek tıkla sipariş tamamlama",
        "Kategori, varyant ve stok takip yönetim paneli",
      ],
      metrics: { label: "Dönüşüm Oranı", value: "+%340 Artış" },
      ctaText: "E-Ticaret Paketi İncele",
    },
    {
      id: "reklam",
      title: "Google Ads & Meta Reklamları",
      shortDesc: "Hedef kitlenize nokta atışı ulaşan, dönüşüm takibi (GA4 & Pixel) ile ölçülebilir ciro getiren profesyonel yönetim.",
      badge: "Performans Pazarlama",
      icon: Megaphone,
      features: [
        "Arama ağı için negatif anahtar kelime filtreleri",
        "Instagram & Facebook hikaye/reels reklam kurgusu",
        "A/B testli yüksek tıklama oranlı (CTR) reklam metinleri",
        "Haftalık ve aylık şeffaf harcama/performans raporu",
      ],
      metrics: { label: "Müşteri Kazanım Maliyeti", value: "-%45 Düşüş" },
      ctaText: "Reklam Analizi Başlat",
    },
    {
      id: "mobil",
      title: "Mobil Uygulama (iOS & Android)",
      shortDesc: "App Store ve Google Play'de yayınlanan, push bildirimli ve yüksek performanslı mobil uygulamalar.",
      badge: "App Store & Google Play",
      icon: Smartphone,
      features: [
        "React Native & Flutter ile çapraz platform hibrit mimari",
        "Kullanıcılara anlık kampanya push bildirimleri",
        "Kullanıcı girişi, profil ve favori/sepet yönetimi",
        "Hızlı ve kesintisiz backend API entegrasyonu",
      ],
      metrics: { label: "Yayınlama Süresi", value: "10-15 Gün" },
      ctaText: "Mobil Projenizi Konuşalım",
    },
    {
      id: "yazilim",
      title: "Özel Yazılım & CRM Sistemleri",
      shortDesc: "İşletmenizin operasyonlarını hızlandıran, müşteri ve teklif takibini otomatikleştiren özel web yazılımları.",
      badge: "Özel İşletme Yazılımları",
      icon: Code2,
      features: [
        "Müşteri ve lead takip (CRM) panelleri",
        "Teklif hazırlama ve otomatik PDF sözleşme üretimi",
        "Çoklu şube ve yetkilendirilmiş personel yönetimi",
        "Veritabanı yedekleme ve kurumsal veri güvenliği",
      ],
      metrics: { label: "Operasyonel Tasarruf", value: "Haftada 20+ Saat" },
      ctaText: "Özel Yazılım Talebi Oluştur",
    },
  ];

  const current = solutions.find((s) => s.id === activeTab) || solutions[0];

  return (
    <section id="cozumler" className="py-12 sm:py-14 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2">
            <Balancer>
              İşletmeniz İçin <span className="text-shimmer">Neler Yapıyoruz?</span>
            </Balancer>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            <Balancer>İhtiyacınız olan sistemi seçin ve canlı panel üzerinden inceleyin.</Balancer>
          </p>
        </div>

        {/* Responsive Tab Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar">
          {solutions.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Studio Screen with Embedded 2nd Video */}
        <div className="glass-box p-6 sm:p-8 rounded-2xl w-full">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 font-mono text-xs font-bold mb-3 border border-blue-500/30">
                {current.badge}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {current.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {current.shortDesc}
              </p>

              <div className="space-y-2.5 mb-6">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <a
                href="#iletisim"
                className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white shadow-md transition-all active:scale-95"
              >
                <span>{current.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right Column: 2. Video - Gömülü & Saf Video Çerçevesi + Canlı Metrik Rozeti */}
            <div className="md:col-span-5 flex flex-col justify-center">
              <div className="relative rounded-2xl overflow-hidden p-1.5 bg-gradient-to-b from-blue-500/20 via-white/5 to-transparent border border-white/15 shadow-2xl shadow-black/80 group">
                <div className="relative aspect-[16/11] bg-slate-950 rounded-xl overflow-hidden">
                  <video
                    src="/images/5585983-hd_1080_1920_30fps.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090E]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Dynamic Metric Badge Floating Over Video */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-400">
                        {current.metrics.label}
                      </div>
                      <div className="text-base font-extrabold font-mono text-white">
                        {current.metrics.value}
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded bg-blue-600/30 text-blue-300 border border-blue-500/30 text-[10px] font-bold">
                      Canlı Test
                    </span>
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
