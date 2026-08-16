"use client";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import {
  Check,
  Zap,
  Clock,
  ShieldCheck,
  Receipt,
  Handshake,
  ArrowRight,
  TrendingUp,
  Flame,
} from "lucide-react";

export default function Packages() {
  return (
    <section id="paketler" className="py-12 sm:py-14 relative bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2">
            <Balancer>
              Rakiplerinizi Geride Bırakacak <span className="text-shimmer">Büyüme Paketleri</span>
            </Balancer>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            <Balancer>
              Müşteri kazandırmayan sıradan sitelere para kaybetmeyin. 48 saatte doğrudan satış ve talep getiren altyapınızı kuralım.
            </Balancer>
          </p>
        </div>

        {/* 3 High-Conversion Tactile Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch mb-8 w-full">
          {/* Package 1: Standart */}
          <div className="glass-box p-6 sm:p-7 flex flex-col justify-between h-full relative group">
            {/* Contained Ambient SVG */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <svg
                className="absolute -right-8 -top-8 w-40 h-40 text-blue-500/5 group-hover:text-blue-500/15 group-hover:scale-110 transition-all duration-300"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                <polygon points="50,15 85,75 15,75" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                  <span>Standart Paket</span>
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 font-mono text-[11px] font-semibold border border-blue-500/20">
                  Standart
                </span>
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">4.999</span>
                <span className="text-xs font-bold text-slate-400">TL</span>
              </div>

              {/* Guerrilla Hook */}
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-blue-300 mb-3">
                <TrendingUp className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform text-blue-400" />
                <span>48 Saatte İlk Müşteri Aramalarını Alın</span>
              </div>

              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Kafe, kuaför, butik ve yerel esnaflar için rakiplerden önce Google aramalarında öne çıkma kiti.
              </p>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 text-xs font-medium mb-5 border border-white/10">
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                <span>2-3 Gün İçinde Yayında</span>
              </div>

              {/* Features List */}
              <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                {[
                  "Google PageSpeed 98+ ışık hızında açılış",
                  "Tek tıkla doğrudan WhatsApp & Arama butonu",
                  "Google Haritalar 1. sıra navigasyon kaydı",
                  "Mobil, tablet ve bilgisayar kusursuz uyum",
                  "Temel SEO & yerel arama etiketleri",
                  "Ömür boyu SSL & güvenli cloud sunucu",
                  "15 Gün ücretsiz teknik destek",
                ].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 group/item">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="#iletisim"
              className="w-full py-3 rounded-xl text-center text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-all block mt-auto relative z-10"
            >
              Hemen Başlatın
            </Link>
          </div>

          {/* Package 2: Kurumsal */}
          <div className="glass-box p-6 sm:p-7 flex flex-col justify-between h-full border-blue-500/40 bg-gradient-to-b from-blue-950/20 via-[#0E1526]/80 to-transparent relative shadow-2xl group">
            {/* Contained Ambient SVG */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <svg
                className="absolute -right-6 -bottom-6 w-48 h-48 text-blue-400/10 group-hover:text-blue-400/25 group-hover:scale-110 transition-all duration-300"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M10 80 Q 30 20, 50 60 T 90 20" />
                <circle cx="90" cy="20" r="4" fill="currentColor" />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Contained Top Hype Bar */}
              <div className="mb-3 -mt-1 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider shadow-md shadow-blue-500/20">
                  <Flame className="w-3 h-3 fill-cyan-200 text-cyan-200" />
                  <span>Sektör Liderlerinin Tercihi</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono text-[11px] font-bold border border-blue-500/30">
                  Kurumsal
                </span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                  <span>Kurumsal Paket</span>
                </h3>
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-400">14.999</span>
                <span className="text-xs font-bold text-slate-400">TL</span>
              </div>

              {/* Guerrilla Hook */}
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-cyan-300 mb-3">
                <Check className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                <span>Otomatik Teklif & Müşteri Toplama Makinesi</span>
              </div>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Hukuk büroları, oteller, tadilat ve klinikler için Google'da arayan müşterileri doğrudan randevuya çeviren sistem.
              </p>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-300 text-xs font-semibold mb-5 border border-blue-500/30">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>3-7 Gün İçinde Anahtar Teslim</span>
              </div>

              {/* Features List */}
              <ul className="space-y-2.5 text-xs text-slate-200 mb-6">
                {[
                  "Standart paketteki tüm özellikler",
                  "Google Haritalar VIP onay & harita optimizasyonu",
                  "Google Analytics 4 & Meta reklam dönüşüm takibi",
                  "Online randevu & 10 saniyede keşif teklif formu",
                  "Talepler anında WhatsApp ve e-postanıza düşer",
                  "Kolay yönetim paneli ile fotoğraf ve metin düzenleme",
                  "Gelişmiş yerel anahtar kelime SEO motoru",
                  "30 Gün VIP teknik destek & revizyon garantisi",
                ].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 group/item">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className={idx === 1 || idx === 3 ? "font-bold text-white" : ""}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="#iletisim"
              className="btn-shimmer w-full py-3 rounded-xl text-center text-xs font-bold text-white shadow-lg transition-all flex items-center justify-center gap-1.5 block mt-auto relative z-10"
            >
              <span>Hemen Başlayın & Öne Geçin</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Package 3: Profesyonel */}
          <div className="glass-box p-6 sm:p-7 flex flex-col justify-between h-full relative group">
            {/* Contained Ambient SVG */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <svg
                className="absolute -right-8 -top-8 w-44 h-44 text-blue-500/5 group-hover:text-blue-500/15 group-hover:scale-110 transition-all duration-300"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="20" y="20" width="60" height="60" rx="10" strokeDasharray="5 5" />
                <circle cx="50" cy="50" r="15" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                  <span>Profesyonel Portal</span>
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-300 font-mono text-[11px] font-semibold border border-blue-500/25">
                  Profesyonel
                </span>
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">39.999</span>
                <span className="text-xs font-bold text-slate-400">TL</span>
              </div>

              {/* Guerrilla Hook */}
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-blue-300 mb-3">
                <Check className="w-3.5 h-3.5 shrink-0 text-blue-400" />
                <span>Global Ölçekte Dijital Satış & CRM Portalı</span>
              </div>

              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Sağlık turizmi, e-ticaret ve büyük ölçekli işletmeler için 3D ödemeli, çok dilli tam dijital operasyon portalı.
              </p>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 text-xs font-medium mb-5 border border-white/10">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>7-15 Gün İçinde Teslim</span>
              </div>

              {/* Features List */}
              <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                {[
                  "Kurumsal web + özel satış/portal altyapısı",
                  "İyzico & PayTR 3D güvenli ödeme & sanal POS",
                  "Çoklu dil desteği (İngilizce / Almanca / Rusça)",
                  "Özel analiz, portföy veya ROI hesaplayıcı motoru",
                  "VIP Google Harita & Yerel SEO entegrasyonu",
                  "Google Analytics (GA4) & Meta Pixel kurulumu",
                  "Özel CRM müşteri & lead yönetim veritabanı",
                  "60 Gün 1-e-1 Baş Yazılımcı desteği & SLA",
                ].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 group/item">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="#iletisim"
              className="w-full py-3 rounded-xl text-center text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-all block mt-auto relative z-10"
            >
              Projenizi Planlayalım
            </Link>
          </div>
        </div>

        {/* 3 Trust Elements Bar (Harmonious Monochromatic Tone) */}
        <div className="grid sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center w-full">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-xs font-semibold text-slate-300">
              Net Fiyat — Gizli Maliyet Yok
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Receipt className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-xs font-semibold text-slate-300">
              KDV Dahil & Kurumsal Fatura
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Handshake className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-xs font-semibold text-slate-300">
              %50 Başlangıç / %50 Teslimatta
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
