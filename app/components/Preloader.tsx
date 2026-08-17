"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const hasLoaded = sessionStorage.getItem("nova_loaded");

    // Smooth sequence timing (total ~1.4s for snappy premium feel)
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 1100);

    const removeTimer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("nova_loaded", "true");
    }, 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070e1b] transition-all duration-500 ease-in-out pointer-events-none ${
        fade ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-blue-600/25 to-cyan-400/20 blur-[90px] animate-pulse" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Glowing Logo */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-transparent border border-cyan-400/40 shadow-2xl shadow-cyan-500/30 animate-bounce-slow">
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0a1628] flex items-center justify-center">
            <Image
              src="/images/logo-nova-digital.png"
              alt="Nova Digital Logo"
              fill
              sizes="96px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Brand Text with shimmer */}
        <div className="mt-5 text-center">
          <h1 className="text-lg sm:text-xl font-extrabold font-mono tracking-widest text-white">
            NOVA <span className="text-cyan-400">DIGITAL</span>
          </h1>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-slate-400 mt-1">
            WEB STUDIO
          </p>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-36 sm:w-44 h-1 bg-slate-800 rounded-full mt-6 overflow-hidden border border-slate-700/60">
          <div className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 rounded-full animate-loader-progress" />
        </div>
      </div>

      <style jsx>{`
        @keyframes loaderProgress {
          0% {
            width: 0%;
            transform: translateX(0%);
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-6px) scale(1.03);
          }
        }
        .animate-loader-progress {
          animation: loaderProgress 1.1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        .animate-bounce-slow {
          animation: bounceSlow 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
