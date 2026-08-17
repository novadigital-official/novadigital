"use client";

import { useState, useEffect, useRef } from "react";
import {
  Check, Clock, ShieldCheck, Receipt, Handshake,
  ArrowRight, Flame, X, MessageSquare, Users, Zap,
  Globe, BarChart3, CreditCard, Languages, Database, Headphones,
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
  idealFor: string[];
  groups: FeatureGroup[];
  waText: string;
}

const packages: PackageDetail[] = [
  {
    id: "standart",
    name: "Standart",
    tagline: "Kurumsal Web Sitesi",
    price: "4.999",
    delivery: "48 Saat",
    desc: "Yerel hizmet işletmeleri için hızlı yayına giren, Google uyumlu site.",
    cta: "Standart Paketi İncele",
    highlight: false,
    badge: null,
    summaryFeatures: [
      { text: "Mobil uyumlu modern tasarım", bold: true },
      { text: "Google Haritalar & yerel SEO kurulumu", bold: true },
      { text: "WhatsApp + doğrudan arama entegrasyonu", bold: false },
      { text: "SSL & 15 gün teknik destek", bold: false },
    ],
    idealFor: ["Kafe & Restoran", "Kuaför & Güzellik Salonu", "Klima / Nakliyat / Temizlik", "Küçük yerel hizmet firmaları"],
    groups: [
      {
        label: "Tasarım & Altyapı",
        icon: Globe,
        items: [
          "5–8 sayfalı mobil uyumlu modern web sitesi",
          "Özel marka renk paleti ve tipografi",
          "SSL sertifikası ve güvenli hosting kurulumu",
          "Domain bağlantısı ve teknik yayına alma",
        ],
      },
      {
        label: "Müşteri Edinme",
        icon: Users,
        items: [
          "WhatsApp butonuyla doğrudan mesaj hattı",
          "Tıklanabilir telefon arama entegrasyonu",
          "İletişim ve talep formu",
          "Google Haritalar (Business) kaydı ve kurulumu",
        ],
      },
      {
        label: "SEO & Hız",
        icon: Zap,
        items: [
          "Yerel anahtar kelime optimizasyonu",
          "Google PageSpeed 95+ hedefi",
          "Temel meta başlık & açıklama etiketleri",
          "Mobil öncelikli sayfa hızı optimizasyonu",
        ],
      },
      {
        label: "Destek",
        icon: Headphones,
        items: [
          "15 gün teknik destek",
          "İçerik güncelleme paneli (metin & fotoğraf)",
          "Tek seferlik revizyon hakkı",
        ],
      },
    ],
    waText: "Merhaba, Standart Paket (4.999 TL) hakkında bilgi almak istiyorum.",
  },
  {
    id: "kurumsal",
    name: "Kurumsal",
    tagline: "Web + SEO + Dönüşüm Sistemi",
    price: "14.999",
    delivery: "3–5 Gün",
    desc: "Klinik, otel ve hizmet firmaları için randevudan WhatsApp'a tam dönüşüm sistemi.",
    cta: "Kurumsal Paketi İncele",
    highlight: true,
    badge: "Çoğu işletme için önerilir",
    summaryFeatures: [
      { text: "Gelişmiş SEO & Google Harita optimizasyonu", bold: true },
      { text: "Online randevu & keşif formu + bildirim", bold: true },
      { text: "GA4 & Meta Pixel dönüşüm takibi", bold: true },
      { text: "30 gün VIP destek & WhatsApp akışı", bold: false },
    ],
    idealFor: ["Klinik & Diş / Estetik", "Otel & Apart", "Hukuk Bürosu & Muhasebe", "Tadilat & İnşaat Firmaları"],
    groups: [
      {
        label: "Tasarım & Altyapı",
        icon: Globe,
        items: [
          "10–15 sayfalı premium kurumsal web sitesi",
          "Özel UI/UX tasarım (Figma prototip + onay)",
          "SSL, CDN ve hız optimizasyonlu hosting",
          "Yönetim paneli ile bağımsız içerik güncelleme",
        ],
      },
      {
        label: "Dönüşüm Sistemi",
        icon: Users,
        items: [
          "Online randevu veya keşif talep formu",
          "WhatsApp ile anlık bildirim entegrasyonu",
          "Fiyat hesaplayıcı veya teklif modülü",
          "Çoklu CTA buton hiyerarşisi (arama / mesaj / form)",
        ],
      },
      {
        label: "SEO & Analitik",
        icon: BarChart3,
        items: [
          "Google Analytics 4 (GA4) kurulumu",
          "Meta (Facebook) Pixel entegrasyonu",
          "Google Haritalar gelişmiş optimizasyonu",
          "Sayfa başı hedefli anahtar kelime stratejisi",
          "Schema.org yerel işletme yapılandırması",
        ],
      },
      {
        label: "Destek",
        icon: Headphones,
        items: [
          "30 gün VIP teknik destek",
          "3 revizyon hakkı",
          "Aylık hız ve SEO performans raporu",
        ],
      },
    ],
    waText: "Merhaba, Kurumsal Paket (14.999 TL) hakkında bilgi almak istiyorum.",
  },
  {
    id: "profesyonel",
    name: "Profesyonel",
    tagline: "Web + SEO + Reklam + Otomasyon",
    price: "39.999",
    delivery: "7–12 Gün",
    desc: "Sağlık turizmi ve e-ticaret için çok dilli, 3D ödemeli tam dijital operasyon.",
    cta: "Profesyonel Paketi İncele",
    highlight: false,
    badge: null,
    summaryFeatures: [
      { text: "İyzico / PayTR 3D güvenli ödeme", bold: true },
      { text: "Çoklu dil (EN / DE / RU)", bold: true },
      { text: "Özel CRM & lead yönetim paneli", bold: false },
      { text: "60 gün yazılımcı desteği & SLA", bold: false },
    ],
    idealFor: ["Sağlık Turizmi & Klinik", "E-Ticaret Mağazaları", "Çok Şubeli Markalar", "Otel Grubu & Gayrimenkul"],
    groups: [
      {
        label: "Platform & Altyapı",
        icon: Globe,
        items: [
          "Sınırsız sayfalı ölçeklenebilir web platformu",
          "Çoklu dil desteği (Türkçe, İngilizce, Almanca, Rusça)",
          "Yüksek trafiğe hazır sunucu ve CDN altyapısı",
          "Özel admin paneli ve rol bazlı yönetim",
        ],
      },
      {
        label: "Ödeme & E-Ticaret",
        icon: CreditCard,
        items: [
          "İyzico / PayTR 3D Secure sanal POS entegrasyonu",
          "Stripe ile uluslararası kart altyapısı",
          "Otomatik e-Fatura ve kargo entegrasyonu",
          "Ürün / hizmet kataloğu ve stok yönetimi",
        ],
      },
      {
        label: "CRM & Otomasyon",
        icon: Database,
        items: [
          "Özel müşteri & lead takip (CRM) paneli",
          "Otomatik teklif PDF üretimi",
          "WhatsApp API entegrasyonu (toplu bildirim)",
          "Google Ads & Meta reklam kampanya kurulumu",
        ],
      },
      {
        label: "Destek & SLA",
        icon: Headphones,
        items: [
          "60 gün baş yazılımcı erişimi",
          "Sınırsız revizyon (geliştirme süresi boyunca)",
          "Öncelikli yanıt SLA (4 saat içinde)",
          "Aylık teknik ve performans analiz raporu",
        ],
      },
    ],
    waText: "Merhaba, Profesyonel Paket (39.999 TL) hakkında bilgi almak istiyorum.",
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

  // Close on Escape key
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

  // Close on backdrop click
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      style={{ animation: "fadeInOverlay 0.2s ease forwards" }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-white/12 bg-[#0C1222] shadow-2xl shadow-black/60 no-scrollbar"
        style={{ animation: "scaleInModal 0.22s cubic-bezier(0.16,1,0.3,1) forwards" }}
      >
        {/* Header */}
        <div
          className={`sticky top-0 z-10 px-5 sm:px-6 py-4 border-b border-white/8 flex items-start justify-between gap-4 backdrop-blur-xl ${
            pkg.highlight ? "bg-[#0C1222]/95" : "bg-[#0C1222]/95"
          }`}
        >
          <div>
            {pkg.badge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                <Flame className="w-2.5 h-2.5 fill-cyan-200 text-cyan-200" />
                {pkg.badge}
              </span>
            )}
            <div className="flex items-baseline gap-2">
              <span className="text-[10px] font-mono font-extrabold tracking-[0.22em] text-blue-400 uppercase">
                {pkg.name}
              </span>
              <span className="text-slate-600 text-[10px]">·</span>
              <span className="text-sm font-bold text-white">{pkg.tagline}</span>
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className={`text-2xl font-extrabold font-mono ${pkg.highlight ? "text-blue-400" : "text-white"}`}>
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
          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed">{pkg.desc}</p>

          {/* Ideal for */}
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 mb-2.5">
              Kimler için ideal?
            </p>
            <div className="flex flex-wrap gap-2">
              {pkg.idealFor.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Feature groups */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pkg.groups.map((group, gi) => {
              const Icon = group.icon;
              return (
                <div key={gi} className="p-4 rounded-xl bg-white/[0.025] border border-white/6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-200">{group.label}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {group.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3 h-3 text-blue-400/70 shrink-0 mt-0.5" />
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
        <div className="sticky bottom-0 px-5 sm:px-6 py-4 border-t border-white/8 bg-[#0C1222]/95 backdrop-blur-xl flex flex-col sm:flex-row gap-2.5">
          <a
            href={`https://wa.me/905070871789?text=${encodeURIComponent(pkg.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer flex-1 py-3 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp ile Teklif Al</span>
          </a>
          <a
            href="#iletisim"
            onClick={onClose}
            className="flex-1 sm:flex-none sm:px-5 py-3 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 transition-all"
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
                    {pkg.summaryFeatures.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${pkg.highlight ? "text-cyan-400" : "text-blue-400"}`} />
                        <span className={f.bold ? "text-slate-200 font-semibold" : "text-slate-400"}>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA — opens modal */}
                <div className="mt-auto">
                  {pkg.highlight ? (
                    <button
                      onClick={() => setActiveModal(pkg.id)}
                      className="btn-shimmer w-full py-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow-lg"
                    >
                      {pkg.cta}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveModal(pkg.id)}
                      className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-1.5 transition-all"
                    >
                      {pkg.cta}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
