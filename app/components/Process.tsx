import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    title: "Analiz & Brief",
    desc: "İşletme bilgilerinizi, rakiplerinizi ve hedef kitlenizi birlikte analiz ederiz. Sektörünüze özel sistem kurgusunu 2 saat içinde planlarız.",
    tag: "Hızlı Başlangıç",
  },
  {
    num: "02",
    title: "Tasarım & Onay",
    desc: "Web sistemini canlı test ortamında kurar, beğeninize sunarız. Siz onay vermeden bir sonraki adıma geçmeyiz.",
    tag: "Tasarım Garantisi",
  },
  {
    num: "03",
    title: "Geliştirme",
    desc: "Onaylanan tasarımı kod ortamında hayata geçirir, tüm entegrasyonları (WhatsApp, form, ödeme, API) tamamlarız.",
    tag: "Teknik Mükemmellik",
  },
  {
    num: "04",
    title: "Yayına Alma",
    desc: "Domain & SSL bağlantısını yapar, Google Haritalar kaydını tamamlar, sitenizi canlıya alırız.",
    tag: "Anahtar Teslim",
  },
  {
    num: "05",
    title: "Büyütme",
    desc: "Google Ads, Meta reklamları, SEO içerikleri ve dönüşüm optimizasyonuyla sistemi büyütmeye devam ederiz.",
    tag: "Sürekli Büyüme",
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="surec" className="py-12 sm:py-14 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className={isVisible ? "reveal-up in-view mb-8" : "reveal-up mb-8"}>
          <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-blue-400 uppercase mb-3">
            Nasıl Çalışıyoruz?
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white max-w-2xl">
            5 adımda{" "}
            <span className="text-shimmer">dijital müşteri sisteminizi</span>{" "}
            kuruyoruz.
          </h2>
          <p className="text-sm text-slate-400 mt-3 max-w-xl">
            Haftalarca süren toplantı yok. Her adımda tam kontrol sizde.
          </p>
        </div>

        {/* Desktop: horizontal timeline with animated connector */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Animated connector line */}
            <div
              className={`absolute top-8 left-[6.5%] right-[6.5%] h-px bg-gradient-to-r from-transparent via-blue-500/35 to-transparent ${
                isVisible ? "timeline-line in-view" : "timeline-line"
              }`}
            />
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center group ${
                    isVisible ? `reveal-up in-view stagger-${idx + 1}` : "reveal-up"
                  }`}
                >
                  {/* Step circle */}
                  <div className="w-16 h-16 rounded-2xl glass-box border border-blue-500/20 flex flex-col items-center justify-center mb-4 group-hover:border-blue-500/50 group-hover:bg-blue-900/20 transition-all duration-300">
                    <span className="text-[10px] font-mono font-extrabold text-blue-400 tracking-widest">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1.5">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-2">{step.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] text-blue-400 font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    {step.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-10 h-10 rounded-xl glass-box border border-blue-500/20 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-mono font-extrabold text-blue-400 tracking-wider">
                    {step.num}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-blue-500/25 to-transparent my-2 min-h-[2rem]" />
                )}
              </div>
              <div className="pb-7">
                <h3 className="text-sm font-bold text-white mb-1.5">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-2">{step.desc}</p>
                <span className="inline-flex items-center gap-1 text-[10px] text-blue-400 font-semibold">
                  <CheckCircle2 className="w-3 h-3" />
                  {step.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
