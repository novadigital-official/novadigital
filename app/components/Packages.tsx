"use client";

import { useState, useEffect, useRef } from "react";
import {
  Check, Clock, ArrowRight, X, MessageSquare, Users, Zap,
  Globe, BarChart3, CreditCard, Database, Headphones, Sparkles, HelpCircle,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Balancer from "react-wrap-balancer";

// ─── Package detail data ───────────────────────────────────────────────────────
interface FeatureGroup {
  label: string;
  icon: any;
  items: string[];
}

interface PackageDetail {
  id: string;
  name: string;
  tagline: string;
  price: string;
  delivery: string;
  desc: string;
  cta: string;
  highlight: boolean;
  badge: string | null;
  summaryFeatures: { text: string; bold: boolean }[];
  idealFor: string;
  groups: FeatureGroup[];
  waText: string;
}

const packages: PackageDetail[] = [
  {
    id: "baslangic",
    name: "Başlangıç",
    tagline: "İşletmenizi Dijitale Taşıyın",
    price: "1.999",
    delivery: "48 Saatte Yayında",
    desc: "İşletmenizi Google'da görünür ve müşterileriniz için anında ulaşılabilir hale getirin.",
    cta: "Başlangıç Paketini İncele",
    highlight: false,
    badge: "Lansmana Özel",
    summaryFeatures: [
      { text: "Mobil uyumlu profesyonel web sitesi", bold: true },
      { text: "WhatsApp + tek tıkla doğrudan arama", bold: true },
      { text: "Google işletme ve harita bağlantısı", bold: false },
      { text: "Temel yerel SEO altyapısı", bold: false },
      { text: "SSL güvenlik sertifikası + hızlı hosting", bold: false },
      { text: "15 gün teknik destek", bold: false },
    ],
    idealFor: "Yeni web sitesi isteyen, Google'da profesyonel görünmek isteyen küçük işletmeler.",
    groups: [
      {
        label: "Tasarım ve Altyapı",
        icon: Globe,
        items: [
          "Mobil uyumlu yüksek hızlı web sitesi",
          "Markanıza özel kurumsal renk paleti ve tipografi",
          "SSL güvenlik sertifikası ve sunucu kurulumu",
          "Alan adı (Domain) bağlantısı ve anahtar teslim yayın",
        ],
      },
      {
        label: "İletişim ve Harita",
        icon: Users,
        items: [
          "WhatsApp butonu ile doğrudan mesajlaşma",
          "Tek tıkla telefon arama entegrasyonu",
          "Hızlı iletişim ve müşteri talep formu",
          "Google İşletme Profili ve Haritalar bağlantısı",
        ],
      },
      {
        label: "Arama ve Hız",
        icon: Zap,
        items: [
          "Temel yerel anahtar kelime altyapısı",
          "Google PageSpeed mobil hız optimizasyonu",
          "Temel arama motoru başlık ve açıklama etiketleri",
        ],
      },
      {
        label: "Destek ve Şartlar",
        icon: Headphones,
        items: [
          "15 gün ücretsiz teknik destek",
          "Maksimum 2 tur revizyon hakkı",
          "Tasarım onay garantisi",
        ],
      },
    ],
    waText: "Merhaba, Başlangıç Paketi (1.999 TL) hakkında bilgi almak istiyorum.",
  },
  {
    id: "buyume",
    name: "Büyüme",
    tagline: "Müşteri Toplama Sistemi Kurun",
    price: "9.999",
    delivery: "3–5 İş Gününde Teslim",
    desc: "Web sitenizi Google'dan ve reklamlardan düzenli müşteri toplayan aktif bir satış motoruna dönüştürün.",
    cta: "Büyüme Paketini İncele",
    highlight: true,
    badge: "En Çok Tercih Edilen",
    summaryFeatures: [
      { text: "Profesyonel kurumsal web sitesi", bold: true },
      { text: "Gelişmiş yerel SEO altyapısı", bold: true },
      { text: "Google Haritalar optimizasyon kurulumu", bold: true },
      { text: "Teklif / keşif / randevu talep formu", bold: false },
      { text: "WhatsApp satış akışı entegrasyonu", bold: false },
      { text: "Telefon + WhatsApp dönüşüm takibi", bold: false },
      { text: "Google & Meta reklam ölçüm altyapısı", bold: false },
      { text: "30 gün öncelikli teknik destek", bold: false },
    ],
    idealFor: "Google'dan ve sosyal medya reklamlarından düzenli sıcak müşteri almak isteyen işletmeler.",
    groups: [
      {
        label: "Kurumsal Altyapı",
        icon: Globe,
        items: [
          "Çok sayfalı lüks kurumsal web sitesi",
          "Özel arayüz tasarımı ve mikro animasyonlar",
          "Yüksek hızlı sunucu ve güvenlik kalkanı",
          "Kolay yönetim paneli ile metin/görsel güncelleme",
        ],
      },
      {
        label: "Müşteri Kazanım Akışı",
        icon: Users,
        items: [
          "Teklif, keşif ve online randevu formu",
          "WhatsApp üzerinden anlık müşteri yönlendirme",
          "Fiyat hesaplayıcı veya özel teklif motoru",
          "Dönüşüm odaklı arama ve mesaj butonları",
        ],
      },
      {
        label: "SEO & Reklam Ölçümü",
        icon: BarChart3,
        items: [
          "Google Haritalar gelişmiş optimizasyonu",
          "Sayfa bazlı hedef yerel anahtar kelime mimarisi",
          "Google Analytics 4 & Meta Pixel entegrasyonu",
          "Telefon ve WhatsApp buton tıklama dönüşüm takibi",
          "Yerel işletme yapısal veri (Schema.org) etiketleri",
        ],
      },
      {
        label: "Teknik Destek",
        icon: Headphones,
        items: [
          "30 gün öncelikli teknik destek",
          "Tasarım onay garantisi ve revizyon hakları",
          "Aylık hız ve arama performansı kontrolü",
        ],
      },
    ],
    waText: "Merhaba, Büyüme Paketi (9.999 TL) hakkında bilgi almak istiyorum.",
  },
  {
    id: "satis-otomasyon",
    name: "Satış & Otomasyon",
    tagline: "Online Satış Altyapınızı Kurun",
    price: "19.999",
    delivery: "7–12 İş Gününde Teslim",
    desc: "Web sitenizi 7/24 ödeme alan, sipariş ve talepleri yöneten tam bir dijital satış operasyonuna dönüştürün.",
    cta: "Satış Paketini İncele",
    highlight: false,
    badge: null,
    summaryFeatures: [
      { text: "E-ticaret ve online satış altyapısı", bold: true },
      { text: "Online ödeme / sanal POS entegrasyonu", bold: true },
      { text: "Çoklu dil desteği (Türkçe, İngilizce, Almanca)", bold: true },
      { text: "Ürün ve hizmet yönetim altyapısı", bold: false },
      { text: "Müşteri kayıt ve talep takip paneli", bold: false },
      { text: "Sipariş ve talep yönetim sistemi", bold: false },
      { text: "WhatsApp satış entegrasyonu", bold: false },
      { text: "Google & Meta dönüşüm altyapısı", bold: false },
      { text: "60 gün teknik destek + garanti", bold: false },
    ],
    idealFor: "Online satış yapan, sağlık turizmi yürüten veya iş operasyonunu dijitalleştirmek isteyen şirketler.",
    groups: [
      {
        label: "Platform ve Altyapı",
        icon: Globe,
        items: [
          "Geniş ölçekli güçlü web ve e-ticaret platformu",
          "Çoklu dil desteği (Türkçe, İngilizce, Almanca, Rusça)",
          "Yoğun ziyaretçi trafiğine dayanıklı sunucu mimarisi",
          "Gelişmiş yönetici paneli ve yetkilendirme sistemi",
        ],
      },
      {
        label: "Ödeme ve Ticaret",
        icon: CreditCard,
        items: [
          "İyzico ve PayTR sanal POS online ödeme altyapısı",
          "Yurt dışı kartlar için uluslararası ödeme desteği",
          "Otomatik fatura ve sipariş bilgilendirme",
          "Ürün ve hizmet kataloğu yönetim sistemi",
        ],
      },
      {
        label: "Otomasyon & Süreç",
        icon: Database,
        items: [
          "Özel müşteri ve talep takip paneli",
          "Otomatik PDF teklif hazırlama sistemi",
          "WhatsApp sipariş ve randevu bildirimleri",
          "Google Ads ve Meta reklam altyapı kurulumu",
        ],
      },
      {
        label: "Teknik Destek ve Garanti",
        icon: Headphones,
        items: [
          "60 gün teknik destek + operasyonel garanti",
          "Geliştirme süresince kapsamlı revizyon hakkı",
          "Aynı gün içinde öncelikli teknik yanıt garantisi",
          "Aylık teknik ve güvenlik kontrol raporu",
        ],
      },
    ],
    waText: "Merhaba, Satış & Otomasyon Paketi (19.999 TL) hakkında bilgi almak istiyorum.",
  },
];

// ─── Modal Component ─────────────────────────────────────────────────────────
function PackageModal({
  pkg,
  onClose,
}: {
  pkg: PackageDetail;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
      style={{ animation: "fadeInOverlay 0.2s ease forwards" }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-slate-700/80 bg-[#0c1324] shadow-2xl shadow-black/80 no-scrollbar"
        style={{ animation: "scaleInModal 0.22s cubic-bezier(0.16,1,0.3,1) forwards" }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 px-5 sm:px-6 py-4 border-b border-slate-800 flex items-start justify-between gap-4 backdrop-blur-xl bg-[#0c1324]/95">
          <div>
            {pkg.badge && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                {pkg.badge}
              </span>
            )}
            <div className="flex items-baseline gap-2">
              <span className="text-[10px] font-mono font-extrabold tracking-[0.22em] text-cyan-400 uppercase">
                {pkg.name}
              </span>
              <span className="text-slate-600 text-[10px]">·</span>
              <span className="text-sm font-bold text-white">{pkg.tagline}</span>
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className={`text-2xl font-extrabold font-mono ${pkg.highlight ? "text-cyan-400" : "text-white"}`}>
                {pkg.price}
              </span>
              <span className="text-xs text-slate-500 font-bold">TL</span>
              <span className="text-slate-600 mx-1.5 text-xs">·</span>
              <Clock className="w-3 h-3 text-slate-500" />
              <span className="text-xs text-slate-400 ml-1">{pkg.delivery}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Kapat"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0 mt-0.5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 sm:px-6 py-5 space-y-6">
          <p className="text-sm text-slate-300 leading-relaxed">{pkg.desc}</p>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 mb-1">
              Kimler İçin İdeal?
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">{pkg.idealFor}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pkg.groups.map((group, gi) => {
              const Icon = group.icon;
              return (
                <div key={gi} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-cyan-400">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-200">{group.label}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {group.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3 h-3 text-cyan-400/80 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="sticky bottom-0 px-5 sm:px-6 py-4 border-t border-slate-800 bg-[#0c1324]/95 backdrop-blur-xl flex flex-col sm:flex-row gap-2.5">
          <a
            href={`https://wa.me/905070871789?text=${encodeURIComponent(pkg.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp ile Teklif Al</span>
          </a>
          <a
            href="#iletisim"
            onClick={onClose}
            className="flex-1 sm:flex-none sm:px-5 py-3 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center gap-2 transition-all"
          >
            <span>Formu Doldur</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function Packages() {
  const { ref, isVisible } = useScrollReveal();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openPkg = packages.find((p) => p.id === activeModal) || null;

  return (
    <>
      <section id="paketler" className="py-16 md:py-24 relative bg-[#0a1628] overflow-hidden">
        {/* Subtle top/bottom gradient transitions */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div ref={ref} className={`mb-12 text-center max-w-2xl mx-auto ${isVisible ? "reveal-up in-view" : "reveal-up"}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              <Balancer>
                İhtiyacınıza Göre <span className="text-shimmer">3 Net Paket</span>
              </Balancer>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2.5">
              Gizli ek ücret yok. %50 başlangıçta, %50 canlı test ortamı onayınızdan sonra.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 items-center pt-2">
            {packages.map((pkg, idx) => (
              <div
                key={pkg.id}
                className={`rounded-2xl flex flex-col h-full relative p-6 sm:p-7 transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-gradient-to-b from-[#16274a] via-[#101e3a] to-[#0b162b] border-2 border-cyan-400/90 ring-4 ring-cyan-500/25 shadow-[0_20px_60px_-15px_rgba(6,182,212,0.30)] md:scale-105 z-10"
                    : "bg-gradient-to-b from-[#13203c] via-[#0e182e] to-[#091325] border border-slate-600/80 hover:border-cyan-400/80 shadow-[0_16px_45px_-10px_rgba(0,0,0,0.85)] hover:shadow-cyan-500/15 md:scale-[0.99]"
                } ${isVisible ? `reveal-up in-view stagger-${idx + 1}` : "reveal-up"}`}
              >
                {/* Clean Top Badge without Clipping */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-md shadow-cyan-500/25">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className={pkg.badge ? "mt-1.5" : ""}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-extrabold tracking-[0.22em] text-cyan-400 uppercase">
                      {pkg.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                      {pkg.id}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-white mb-3 tracking-tight">
                    {pkg.tagline}
                  </h3>

                  <div className="flex items-baseline gap-1.5 mb-2.5">
                    <span className={`text-3xl sm:text-4xl font-extrabold font-mono ${pkg.highlight ? "text-cyan-400" : "text-white"}`}>
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-500 font-bold">TL</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 mb-5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{pkg.delivery}</span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6 text-xs border-t border-slate-800/80 pt-4">
                    {pkg.summaryFeatures.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.highlight ? "text-cyan-400" : "text-blue-400"}`} />
                        <span className={f.bold ? "text-slate-100 font-semibold" : "text-slate-400"}>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA — opens modal */}
                <div className="mt-auto pt-2">
                  {pkg.highlight ? (
                    <button
                      onClick={() => setActiveModal(pkg.id)}
                      className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
                    >
                      <span>{pkg.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveModal(pkg.id)}
                      className="w-full py-3 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 flex items-center justify-center gap-2 transition-all"
                    >
                      <span>{pkg.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 🎯 "Hangisini Seçmeliyim?" Decision Helper Mini-Guide */}
          <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                Hangi Paketi Seçmelisiniz?
              </h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-3.5 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/60 flex flex-col justify-between">
                <p className="text-slate-300 mb-2">
                  &ldquo;Sadece Google&apos;da profesyonel görünen şık bir web sitesi istiyorum.&rdquo;
                </p>
                <div className="font-bold text-cyan-400 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                  <span>Başlangıç Paketi</span>
                  <span className="font-mono text-slate-200">1.999 TL</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex flex-col justify-between shadow-lg shadow-cyan-950/20">
                <p className="text-slate-200 mb-2 font-medium">
                  &ldquo;Google&apos;dan ve reklamlardan düzenli müşteri ve randevu kazanmak istiyorum.&rdquo;
                </p>
                <div className="font-bold text-cyan-300 pt-2 border-t border-cyan-500/20 flex items-center justify-between">
                  <span>Büyüme Paketi ⭐</span>
                  <span className="font-mono text-white">9.999 TL</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/60 flex flex-col justify-between">
                <p className="text-slate-300 mb-2">
                  &ldquo;Online ödeme almak, çok dilli satış ve operasyonel otomasyon istiyorum.&rdquo;
                </p>
                <div className="font-bold text-cyan-400 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                  <span>Satış &amp; Otomasyon</span>
                  <span className="font-mono text-slate-200">19.999 TL</span>
                </div>
              </div>
            </div>
          </div>

          {/* 🚨 Şeffaflık & Dahil Değildir Notu */}
          <p className="text-[11px] text-slate-500 text-center mt-6 max-w-2xl mx-auto leading-relaxed">
            * Google &amp; Meta reklam harcama bütçesi ve aylık reklam yönetimi paketlere dahil değildir.
            Alan adı (Domain) tescili, reklam harcamaları ve üçüncü taraf özel lisans ücretleri ayrıca faturalandırılır.
          </p>
        </div>
      </section>

      {/* Package Detail Modal */}
      {openPkg && (
        <PackageModal pkg={openPkg} onClose={() => setActiveModal(null)} />
      )}

      {/* Modal keyframe styles */}
      <style>{`
        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scaleInModal {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  );
}
