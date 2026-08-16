"use client";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import {
  ArrowRight,
  Eye,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Award,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-12 overflow-hidden">
      {/* Grid Alignment Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Prestigious Institutional Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium tracking-wide mb-5 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Kurumsal Web Yazılım & Dijital Büyüme Stüdyosu</span>
            </div>

            {/* Prestigious Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.2rem] font-extrabold tracking-tight text-white leading-[1.14] mb-5">
              <Balancer>
                İşletmenizin Dijital Gücünü ve{" "}
                <span className="text-shimmer">
                  Müşteri Hacmini Büyütüyoruz.
                </span>
              </Balancer>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl mb-7">
              <Balancer>
                Google SEO altyapısı, modern UI/UX mimarisi ve yüksek dönüşümlü web sistemleri ile markanızı internette sektör lideri konuma taşıyoruz.
              </Balancer>
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <Link
                href="#iletisim"
                className="btn-shimmer inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-xl transition-all"
              >
                <span>Projenizi Birlikte Başlatalım</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#portfoy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <Eye className="w-4 h-4 text-blue-400" />
                <span>Canlı Demoları İncele</span>
              </Link>
            </div>

            {/* 4 Trust Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-white/10 w-full text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>10+ Canlı Proje</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-400 shrink-0" />
                <span>48 Saatte Teslim</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Google PageSpeed 98+</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Memnuniyet Garantisi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Symmetrical Video Frame */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-none relative">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
