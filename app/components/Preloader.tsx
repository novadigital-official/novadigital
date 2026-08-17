"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [phase, setPhase] = useState<"show" | "fade" | "done">("show");

  useEffect(() => {
    // Session check: only show once per session
    if (typeof window !== "undefined" && sessionStorage.getItem("nova_loaded")) {
      setPhase("done");
      return;
    }

    const fadeTimer = setTimeout(() => setPhase("fade"), 900);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("nova_loaded", "true");
    }, 1350);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070e1b] pointer-events-none transition-opacity duration-400 ${
        phase === "fade" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-cyan-400/40 shadow-xl shadow-cyan-500/20 bg-[#0a1628] flex items-center justify-center">
          <Image
            src="/images/logo-nova-digital.png"
            alt="Nova Digital Logo"
            fill
            sizes="80px"
            className="object-cover"
            priority
          />
        </div>

        {/* Brand text */}
        <div className="mt-4 text-center">
          <p className="text-base font-extrabold font-mono tracking-widest text-white">
            NOVA <span className="text-cyan-400">DIGITAL</span>
          </p>
          <p className="text-[10px] font-mono tracking-[0.28em] uppercase text-slate-500 mt-0.5">
            Web Tasarım & Yazılım
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-32 h-[2px] bg-slate-800 rounded-full mt-5 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 rounded-full animate-preloader-bar" />
        </div>
      </div>

      <style>{`
        @keyframes preloaderBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .animate-preloader-bar {
          animation: preloaderBar 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}
