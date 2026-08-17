"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-14 overflow-hidden">
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
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Brand mono tag */}
            <p className="text-[11px] font-mono font-bold tracking-[0.25em] text-blue-400 uppercase mb-4">
              NOVA DIGITAL
            </p>

            {/* H1 Headline */}
            <h1 className="text-[2rem] sm:text-5xl lg:text-[3.2rem] font-extrabold tracking-tight text-white leading-[1.1] mb-5">
              İşletmenize{" "}
              <span className="text-shimmer">müşteri getiren</span>{" "}
              bir web sitesi hayal edin.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-lg">
              Web sitenizi tasarlıyor, Google&apos;da üst sıralara taşıyor ve
              reklam sisteminizi kuruyoruz. Türkiye genelindeki işletmeler için{" "}
              <strong className="text-white font-semibold">
                anahtar teslim dijital çözümler.
              </strong>
            </p>

            {/* Primary CTA */}
            <a
              href="https://wa.me/905070871789?text=Merhaba%2C%20%C3%BCcretsiz%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-xl transition-all"
            >
              <span>Ücretsiz Teklif Al</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* ── RIGHT COLUMN — Video ── */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="w-full max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden p-1.5 bg-gradient-to-b from-blue-500/20 via-white/5 to-transparent border border-white/15 shadow-2xl shadow-black/80">
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
