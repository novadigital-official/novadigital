import { CheckCircle2 } from "lucide-react";

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
  return (
    <section id="surec" className="py-14 sm:py-16 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-blue-400 uppercase mb-3">
            Nasıl Çalışıyoruz?
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white max-w-2xl">
            5 adımda{" "}
            <span className="text-shimmer">
              dijital müşteri sisteminizi
            </span>{" "}
            kuruyoruz.
          </h2>
          <p className="text-sm text-slate-400 mt-3 max-w-xl">
            Haftalarca süren toplantı yok. Şeffaf süreç — her adımda tam kontrol sizde.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative">
            <div className="absolute top-8 left-[6.5%] right-[6.5%] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Step circle */}
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-2xl glass-box border border-blue-500/25 flex flex-col items-center justify-center group-hover:border-blue-500/50 transition-colors">
                      <span className="text-[10px] font-mono font-extrabold text-blue-400 tracking-widest">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-sm font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {step.desc}
                  </p>
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
            <div key={idx} className="flex gap-4 group">
              {/* Left: Number + Connector */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-10 h-10 rounded-xl glass-box border border-blue-500/25 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-mono font-extrabold text-blue-400 tracking-wider">
                    {step.num}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-blue-500/25 to-transparent my-2 min-h-[2rem]" />
                )}
              </div>

              {/* Right: Content */}
              <div className="pb-8">
                <h3 className="text-sm font-bold text-white mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-2">
                  {step.desc}
                </p>
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
