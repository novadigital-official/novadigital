"use client";

import { ArrowRight, Clock, Star, Zap } from "lucide-react";

export default function Hero() {
  const sectors = [
    { label: "Villa Tadilat", href: "https://antalyadatadilat.com.tr" },
    { label: "Klima Servisi", href: "https://antalyadaklimaservisi.com.tr" },
    { label: "Nakliyat", href: "https://antalyadanakliyat.com.tr" },
    { label: "Epoksi Zemin", href: "https://antalyaepoksizemin.com.tr" },
  ];

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 overflow-hidden">
      {/* Subtle grid mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(30,41,59,0.07) 1px,transparent 1px),linear-gradient(to bottom,rgba(30,41,59,0.07) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%,#000 60%,transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Brand mono tag */}
            <p className="text-[11px] font-mono font-bold tracking-[0.25em] text-blue-400 uppercase mb-4">
              NOVA DIGITAL
            </p>

            {/* Power headline */}
            <h1 className="text-[2.1rem] sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-white leading-[1.1] mb-5">
              İşletmenize{" "}
              <span className="text-shimmer">müşteri getiren</span>{" "}
              bir web sitesi hayal edin.
            </h1>

            {/* Sub-headline — clear, accessible, reflects 70/20/10 mix */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-lg">
              Web sitenizi tasarlıyor, Google&apos;da üst sıralara taşıyor ve reklam sisteminizi kuruyoruz.
              Türkiye genelindeki işletmeler için{" "}
              <strong className="text-white font-semibold">anahtar teslim dijital çözümler.</strong>
            </p>

            {/* Primary CTA */}
            <a
              href="https://wa.me/905070871789?text=Merhaba%2C%20%C3%BCcretsiz%20dijital%20analiz%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-xl mb-4 transition-all"
            >
              <span>Ücretsiz Dijital Analiz Al</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Trust micro-copy */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mb-8 font-medium">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                10 dk görüşme
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-slate-500" />
                Ücretsiz ön analiz
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-slate-500" />
                Satış baskısı yok
              </span>
            </div>

            {/* 4 Real Sector Proof Tags */}
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
                Kendi işletmelerimizde uyguladığımız sistemler:
              </p>
              <div className="flex flex-wrap gap-2">
                {sectors.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:border-blue-500/40 hover:bg-white/8 transition-all"
                  >
                    {s.label}
                    <span className="text-blue-500 text-[10px]">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — System Diagram ── */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="w-full max-w-md lg:max-w-none">
              {/* Frosted video frame */}
              <div className="relative rounded-2xl overflow-hidden p-1.5 bg-gradient-to-b from-blue-500/20 via-white/5 to-transparent border border-white/15 shadow-2xl shadow-black/80 mb-4">
                <div className="relative aspect-[16/10] bg-slate-950 rounded-xl overflow-hidden">
                  <video
                    src="/images/8937986-hd_1080_1920_30fps.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* System flow diagram below video */}
              <div className="glass-box px-4 py-3.5 rounded-xl">
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2.5 font-semibold">
                  Müşteri Edinme Sistemi
                </p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {[
                    "Web Sitesi",
                    "Google / Meta",
                    "Lead",
                    "WhatsApp",
                    "Satış",
                  ].map((step, i, arr) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white bg-white/5 border border-white/10 px-2.5 py-1 rounded-md whitespace-nowrap">
                        {step}
                      </span>
                      {i < arr.length - 1 && (
                        <span className="text-slate-600 text-xs font-bold">
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
