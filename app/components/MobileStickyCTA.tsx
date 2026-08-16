"use client";

import { MessageSquare, Phone } from "lucide-react";

export default function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#090D18]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-12 gap-2">
        <a
          href="https://wa.me/905070871789?text=Merhaba,%20web%20sitesi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-7 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg active:scale-95 transition-all text-center"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp Teklif Al</span>
        </a>

        <a
          href="tel:05070871789"
          className="col-span-5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-white/10 active:scale-95 transition-all text-center"
        >
          <Phone className="w-3.5 h-3.5 text-blue-400" />
          <span>Hemen Ara</span>
        </a>
      </div>
    </div>
  );
}
