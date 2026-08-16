"use client";

import { Phone } from "lucide-react";

export default function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#07090E]/95 backdrop-blur-xl border-t border-white/10 px-4 py-2.5 shadow-2xl">
      <a
        href="tel:05070871789"
        className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all"
      >
        <Phone className="w-4 h-4 text-cyan-300 animate-pulse" />
        <span>Hemen Ara: 0507 087 17 89</span>
      </a>
    </div>
  );
}
