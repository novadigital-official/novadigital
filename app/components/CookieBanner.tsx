"use client";

import { useState, useEffect } from "react";
import { Cookie, Check, X } from "lucide-react";

interface CookieBannerProps {
  onOpenLegal: () => void;
}

export default function CookieBanner({ onOpenLegal }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("nova_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("nova_cookie_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("nova_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="p-4 rounded-2xl glass-box border border-white/15 bg-[#090D18]/95 shadow-2xl space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <Cookie className="w-4 h-4 text-blue-400 shrink-0" />
            <h4 className="text-xs font-bold text-white font-mono">Çerez Bildirimi</h4>
          </div>
          <button
            onClick={handleDecline}
            aria-label="Kapat"
            className="text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] text-slate-300 leading-relaxed">
          Sitemizdeki kullanıcı deneyimini ve Google analiz performansını iyileştirmek amacıyla çerezler kullanıyoruz.{" "}
          <button
            onClick={onOpenLegal}
            className="text-blue-400 underline hover:text-blue-300"
          >
            Detaylı Bilgi
          </button>
        </p>

        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleAccept}
            className="btn-shimmer flex-1 py-1.5 px-3 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Kabul Et</span>
          </button>
          <button
            onClick={handleDecline}
            className="py-1.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10"
          >
            Reddet
          </button>
        </div>
      </div>
    </div>
  );
}
