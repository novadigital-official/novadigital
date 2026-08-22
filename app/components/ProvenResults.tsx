"use client";

import { TrendingUp, Users, Zap, Award } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const metrics = [
  { value: "+%187", label: "Arama Trafiği", subtext: "60 Günlük SEO", icon: TrendingUp },
  { value: "3.4 Kat", label: "Müşteri Talebi", subtext: "Dönüşüm Odaklı", icon: Users },
  { value: "0.4 sn", label: "Açılış Hızı", subtext: "PageSpeed 98+", icon: Zap },
  { value: "%100", label: "Memnuniyet", subtext: "Tasarım Garantisi", icon: Award },
];

export default function ProvenResults() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-6 sm:py-8 relative bg-[#0a1628]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`p-3.5 sm:p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 shadow-lg ${
            isVisible ? "reveal-scale in-view" : "reveal-scale"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
            {metrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-[#0d1627]/60 border border-slate-800/60 hover:border-cyan-500/30 transition-colors ${
                    isVisible ? `reveal-up in-view stagger-${idx + 1}` : "reveal-up"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-base sm:text-lg font-extrabold font-mono text-white tracking-tight">
                        {m.value}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-200 truncate">
                      {m.label}
                    </span>
                    <span className="text-[10px] text-cyan-400/70 font-medium truncate">
                      {m.subtext}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
