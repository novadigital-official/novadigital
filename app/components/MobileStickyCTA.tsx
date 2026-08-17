"use client";

import { Phone } from "lucide-react";

export default function MobileStickyCTA() {
  return (
    <a
      href="tel:05070871789"
      aria-label="Hemen Telefonla Arayın: 0507 087 17 89"
      className="fixed bottom-[5.25rem] right-5 sm:bottom-24 sm:right-7 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-2xl shadow-cyan-500/35 border border-cyan-400/30 transition-all hover:scale-110 active:scale-95 group"
    >
      <Phone className="w-6 h-6 text-white animate-pulse" />
      {/* Tooltip on hover/desktop */}
      <span className="hidden group-hover:inline-block absolute right-16 px-3 py-1.5 rounded-xl bg-slate-950/90 text-white text-xs font-bold whitespace-nowrap border border-slate-800 shadow-xl backdrop-blur-md">
        📞 Hemen Ara: 0507 087 17 89
      </span>
    </a>
  );
}
