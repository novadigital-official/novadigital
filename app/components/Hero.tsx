"use client";

import { ArrowRight, CheckCircle2, Clock, Smartphone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 md:pb-24 overflow-hidden bg-[#0a1628]">
      {/* Subtle grid mesh & radial ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(56,189,248,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(56,189,248,0.04) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%,#000 60%,transparent 100%)",
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Brand mono tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              NOVA DIGITAL WEB AJANSI
            </div>

            {/* Clean Static Power Headline */}
            <h1 className="text-[2.2rem] sm:text-5xl lg:text-[3.3rem] font-extrabold tracking-tight text-white leading-[1.12] mb-5">
              İşletmenize{" "}
              <span className="text-shimmer">müşteri getiren</span>{" "}
              bir web sitesi hayal edin.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-7 max-w-lg">
              Web sitenizi tasarlıyor, Google&apos;da üst sıralara taşıyor ve
              reklam sisteminizi kuruyoruz. Türkiye genelindeki işletmeler için{" "}
              <strong className="text-white font-semibold">
                anahtar teslim dijital çözümler.
              </strong>
            </p>

            {/* Primary CTA Button */}
            <a
              href="https://wa.me/905070871789?text=Merhaba%2C%20%C3%BCcretsiz%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 active:scale-[0.96] transition-all mb-7"
            >
              <span>Ücretsiz Teklif Al</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Canlı Sayaç / Güven Bandı (Social Proof Grid) */}
            <div className="w-full bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3.5 sm:p-4 backdrop-blur-md">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
                <div className="flex flex-col sm:border-r border-slate-800/60 sm:pr-3">
                  <span className="text-base sm:text-lg font-extrabold font-mono text-white flex items-center justify-center sm:justify-start gap-1">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    10+
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">Canlı Demo</span>
                </div>
                <div className="flex flex-col sm:border-r border-slate-800/60 sm:pr-3">
                  <span className="text-base sm:text-lg font-extrabold font-mono text-white flex items-center justify-center sm:justify-start gap-1">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    48 Saat
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">Hızlı Teslim</span>
                </div>
                <div className="flex flex-col sm:border-r border-slate-800/60 sm:pr-3">
                  <span className="text-base sm:text-lg font-extrabold font-mono text-white flex items-center justify-center sm:justify-start gap-1">
                    <Smartphone className="w-4 h-4 text-cyan-400" />
                    %100
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">Mobil & SEO</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-extrabold font-mono text-white flex items-center justify-center sm:justify-start gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    4.9 ★
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">Müşteri Skoru</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Clean Original Video Mockup Frame ── */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="w-full max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden p-1.5 bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-transparent border border-slate-700/60 shadow-2xl shadow-black/80">
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
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
