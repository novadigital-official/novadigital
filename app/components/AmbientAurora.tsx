"use client";

import { useEffect, useState } from "react";

export default function AmbientAurora() {
  const [introSweep, setIntroSweep] = useState(true);

  useEffect(() => {
    // End the initial 4-second opening spotlight sweep
    const timer = setTimeout(() => {
      setIntroSweep(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* ── 1. BİRİNCİ IŞIK BULUTU (Üst Sol — Elektrik Mavisi) ── */}
      <div className="aurora-orb-1" />

      {/* ── 2. İKİNCİ IŞIK BULUTU (Orta Sağ — Canlı Turkuaz & Cyan) ── */}
      <div className="aurora-orb-2" />

      {/* ── 3. ÜÇÜNCÜ IŞIK BULUTU (Alt Sol — Derin İndigo / Gece Mavisi) ── */}
      <div className="aurora-orb-3" />

      {/* ── 4. İLK 4 SANİYE "SAHNE IŞIĞI SÜPÜRME" EFEKTİ (Ambient Light Sweep) ── */}
      {introSweep && <div className="intro-spotlight-sweep" />}

      <style jsx>{`
        /* 1. Orb: Yavaşça süzülen elektrik mavisi ışık bulutu */
        .aurora-orb-1 {
          position: absolute;
          top: -10%;
          left: 10%;
          width: 650px;
          height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.22) 0%, rgba(14, 165, 233, 0.08) 45%, transparent 70%);
          filter: blur(100px);
          animation: floatOrb1 20s ease-in-out infinite alternate;
        }

        /* 2. Orb: Sağ tarafta süzülen parlak turkuaz ışık */
        .aurora-orb-2 {
          position: absolute;
          top: 35%;
          right: -5%;
          width: 550px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(59, 130, 246, 0.06) 50%, transparent 70%);
          filter: blur(110px);
          animation: floatOrb2 24s ease-in-out infinite alternate;
        }

        /* 3. Orb: Alt kısımdaki derin gece mavisi ışık */
        .aurora-orb-3 {
          position: absolute;
          bottom: 5%;
          left: 5%;
          width: 600px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(30, 58, 138, 0.25) 0%, rgba(6, 182, 212, 0.07) 50%, transparent 70%);
          filter: blur(120px);
          animation: floatOrb3 22s ease-in-out infinite alternate;
        }

        /* İlk 4 saniye sahne ışığı süpürme efekti */
        .intro-spotlight-sweep {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(56, 189, 248, 0.15) 0%,
            rgba(37, 99, 235, 0.08) 40%,
            transparent 80%
          );
          animation: sweepDown 4.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes floatOrb1 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(80px, 60px) scale(1.12);
          }
          100% {
            transform: translate(-40px, 90px) scale(0.95);
          }
        }

        @keyframes floatOrb2 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-70px, -50px) scale(1.15);
          }
          100% {
            transform: translate(50px, -80px) scale(0.9);
          }
        }

        @keyframes floatOrb3 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(60px, -40px) scale(1.08);
          }
          100% {
            transform: translate(-30px, 30px) scale(0.98);
          }
        }

        @keyframes sweepDown {
          0% {
            opacity: 0;
            transform: translateY(-40%) scaleY(0.6);
          }
          25% {
            opacity: 1;
            transform: translateY(0%) scaleY(1);
          }
          75% {
            opacity: 0.6;
            transform: translateY(20%) scaleY(1.1);
          }
          100% {
            opacity: 0;
            transform: translateY(50%) scaleY(1.2);
          }
        }
      `}</style>
    </div>
  );
}
