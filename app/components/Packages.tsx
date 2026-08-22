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

export default function Packages() {
  return (
    <section id="paketler" className="py-12 sm:py-14 relative bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2">
            <Balancer>
              İşletmenize Uygun <span className="text-shimmer">Web Paketleri</span>
            </Balancer>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            <Balancer>
              Gizli maliyet yok. İhtiyacınıza göre ölçeklenebilir 3 şeffaf paket.
            </Balancer>
          </p>
        </div>

        {/* 3 Ultra-Clean Symmetrical Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch mb-8 w-full">
          {/* Package 1: Standart Paket */}
          <div className="glass-box p-6 sm:p-7 flex flex-col justify-between h-full relative group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white">Standart Paket</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 font-mono text-[11px] font-semibold border border-blue-500/20">
                  Standart
                </span>
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">4.999</span>
                <span className="text-xs font-bold text-slate-400">TL</span>
              </div>

              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Kafe, kuaför ve yerel işletmeler için hızlı, mobil uyumlu ve Google harita kayıtlı web sitesi.
              </p>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-300 text-xs font-semibold mb-5 border border-blue-500/20">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>48 Saatte (2 İş Günü) Yayında</span>
              </div>

              {/* 4 Essential Core Features */}
              <ul className="space-y-3 text-xs text-slate-300 mb-6">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>%100 Mobil & Tablet Uyumlu</strong> modern arayüz</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Google Haritalar (Business)</strong> ve yerel SEO kaydı</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>WhatsApp & Doğrudan Arama</strong> entegrasyonu</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>SSL Güvenlik</strong> & 15 gün teknik destek</span>
                </li>
              </ul>
            </div>

            <Link
              href="#iletisim"
              className="w-full py-3 rounded-xl text-center text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-all block mt-auto relative z-10"
            >
              Ücretsiz Teklif Al
            </Link>
          </div>

          {/* Package 2: Kurumsal Paket */}
          <div className="glass-box p-6 sm:p-7 flex flex-col justify-between h-full border-blue-500/40 bg-gradient-to-b from-blue-950/20 via-[#0E1526]/80 to-transparent relative shadow-2xl group">
            <div className="relative z-10">
              {/* Top Hype Bar */}
              <div className="mb-3 -mt-1 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider shadow-md shadow-blue-500/20">
                  <Flame className="w-3 h-3 fill-cyan-200 text-cyan-200" />
                  <span>En Çok Tercih Edilen</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono text-[11px] font-bold border border-blue-500/30">
                  Kurumsal
                </span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white">Kurumsal Paket</h3>
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-400">14.999</span>
                <span className="text-xs font-bold text-slate-400">TL</span>
              </div>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Klinikler, oteller, hukuk büroları ve tadilat firmaları için randevu formlu, Google SEO odaklı sistem.
              </p>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-300 text-xs font-semibold mb-5 border border-blue-500/30">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>3-5 İş Günü İçinde Teslim</span>
              </div>

              {/* 5 Essential Core Features */}
              <ul className="space-y-3 text-xs text-slate-200 mb-6">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Gelişmiş Yerel Google SEO</strong> & Harita optimizasyonu</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Online Randevu & Keşif Formu</strong> (Anlık bildirim)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Kolay Yönetim Paneli</strong> (Fotoğraf & içerik güncelleme)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>GA4 & Meta Pixel</strong> reklam dönüşüm takibi</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>30 Gün VIP Destek</strong> & revizyon garantisi</span>
                </li>
              </ul>
            </div>

            <Link
              href="#iletisim"
              className="btn-shimmer w-full py-3 rounded-xl text-center text-xs font-bold text-white shadow-lg transition-all flex items-center justify-center gap-1.5 block mt-auto relative z-10"
            >
              <span>Ücretsiz Teklif Al</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Package 3: Profesyonel Paket */}
          <div className="glass-box p-6 sm:p-7 flex flex-col justify-between h-full relative group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white">Profesyonel Paket</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-300 font-mono text-[11px] font-semibold border border-blue-500/25">
                  Profesyonel
                </span>
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">39.999</span>
                <span className="text-xs font-bold text-slate-400">TL</span>
              </div>

              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Sağlık turizmi, e-ticaret ve çok şubeli markalar için 3D ödemeli, çok dilli tam dijital operasyon portalı.
              </p>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs font-semibold mb-5 border border-blue-500/20">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>7-12 İş Günü İçinde Teslim</span>
              </div>

              {/* 5 Essential Core Features */}
              <ul className="space-y-3 text-xs text-slate-300 mb-6">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>İyzico / PayTR 3D Güvenli Ödeme</strong> & Sanal POS</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Çoklu Dil Desteği</strong> (İngilizce / Almanca / Rusça)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Özel Teklif / Analiz Modülü</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Özel CRM & Lead Yönetim Veritabanı</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>60 Gün 1-e-1 Baş Yazılımcı Desteği</strong> & SLA</span>
                </li>
              </ul>
            </div>

            <Link
              href="#iletisim"
              className="w-full py-3 rounded-xl text-center text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-all block mt-auto relative z-10"
            >
              Ücretsiz Teklif Al
            </Link>
          </div>
        </div>

        {/* 3 Trust Elements Bar */}
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
