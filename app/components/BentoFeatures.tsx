import {
  SearchCheck,
  Cloud,
  Code2,
  Gauge,
  Zap,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function BentoFeatures() {
  return (
    <section className="py-20 bg-[#080B11] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Mühendislik Standartlarımız</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
            Her Pikseli <span className="text-shimmer">Müşteri Dönüşümü</span> İçin Tasarlıyoruz.
          </h2>
        </div>

        {/* Compact 2026 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Item 1: Performance (Span 2) */}
          <div className="md:col-span-2 spotlight-card p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold mb-4">
                <Gauge className="w-4 h-4" />
                <span>Google PageSpeed: 98/100 Puan</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2">
                Ultra Hızlı Mobil Performans & Core Web Vitals
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl mb-6">
                Next.js App Router ve Vercel Edge sunucuları ile sayfa yüklenme süresini 0.4 saniyenin altına indirerek reklam tıklamalarını maksimum dönüşüme çeviriyoruz.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
              <div className="p-3 rounded-lg bg-white/[0.03] text-center border border-white/5">
                <div className="text-lg sm:text-xl font-extrabold font-mono text-emerald-400">0.4s</div>
                <div className="text-[10px] text-slate-500 mt-0.5">İlk İçerik (FCP)</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] text-center border border-white/5">
                <div className="text-lg sm:text-xl font-extrabold font-mono text-blue-400">0.00</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Kayma Yok (CLS)</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] text-center border border-white/5">
                <div className="text-lg sm:text-xl font-extrabold font-mono text-cyan-400">100%</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Mobil Uyum</div>
              </div>
            </div>
          </div>

          {/* Item 2: SEO (Span 1) */}
          <div className="spotlight-card p-6 flex flex-col justify-between">
            <div>
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit mb-4">
                <SearchCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1.5">
                Google SEO & Schema.org
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Google arama motoruna işletmenizi tanıtan JSON-LD mikro verileri ve yerel SEO optimizasyonu dahildir.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-between text-xs font-bold text-blue-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Google Haritalar Uyumlu</span>
              </span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </div>
          </div>

          {/* Item 3: Cloud (Span 1) */}
          <div className="spotlight-card p-6 flex flex-col justify-between">
            <div>
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit mb-4">
                <Cloud className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-white mb-1.5">
                Vercel Edge Cloud & SSL
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Otomatik SSL güvenlik sertifikası ve %99.99 kesintisiz yayın altyapısı ile siteniz asla çökmez.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs font-mono font-bold text-slate-300">
              <span>Uptime Garantisi</span>
              <span className="text-emerald-400">%99.99</span>
            </div>
          </div>

          {/* Item 4: Modern Tech Stack (Span 2) */}
          <div className="md:col-span-2 spotlight-card p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-mono font-bold mb-4">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>Modern Tech Stack 2026</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2">
                Next.js 16 + TypeScript & Tailwind CSS
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl mb-4">
                Hantal ve güvenlik açığı dolu eklentiler yerine, dünyanın en büyük teknoloji şirketlerinin kullandığı modern yazılım mimarisiyle sitenizi kodluyoruz.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5 text-[11px] font-mono font-bold text-slate-300">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10">Next.js App Router</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10">TypeScript Tip Güvenliği</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10">Lenis 60fps Smooth Scroll</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10">Vercel Global CDN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
