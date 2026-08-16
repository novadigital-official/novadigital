import Balancer from "react-wrap-balancer";
import { ClipboardList, PenTool, Rocket, CheckCircle2 } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: ClipboardList,
      title: "1. Gün: Brief & Kurgu",
      desc: "İşletme bilgilerinizi ve logonuzu alırız. Sektörünüze özel dönüşüm yapısını 2 saat içinde planlarız.",
      tag: "Hızlı Başlangıç",
    },
    {
      num: "02",
      icon: PenTool,
      title: "2. Gün: Tasarım & Onay",
      desc: "Web sitenizi canlı test ortamında kodlarız. İncelemenize sunar, onayınızı aldıktan sonra tamamlarız.",
      tag: "Onay Garantili",
    },
    {
      num: "03",
      icon: Rocket,
      title: "2. Gün: Yayın & Açılış",
      desc: "Domain ve SSL kurulumunu bağlar, sitenizi alan adınızda yayına alır ve Google'a kaydederiz.",
      tag: "Anahtar Teslim",
    },
  ];

  return (
    <section id="surec" className="py-12 sm:py-14 relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2">
            <Balancer>
              2 Günde Web Siteniz <span className="text-shimmer">Nasıl Yayına Giriyor?</span>
            </Balancer>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            <Balancer>
              Haftalarca süren gereksiz toplantılar yok. 3 adımda sıfır risk ile siteniz canlıda.
            </Balancer>
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="glass-box p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold font-mono text-white/20">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{step.tag}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
