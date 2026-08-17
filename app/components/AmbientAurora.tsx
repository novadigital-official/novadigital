"use client";

export default function AmbientAurora() {
  // Tüm aurora orbs'ları pure CSS ile çalıştır — hiç JS, hiç useState, hiç useEffect yok.
  // Mobilde filter:blur değerlerini küçülttük, will-change:transform ile GPU hızlandırması açık.
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none -z-10 select-none"
      aria-hidden="true"
    >
      <div className="aurora-orb-1" />
      <div className="aurora-orb-2" />
      <div className="aurora-orb-3" />

      <style>{`
        .aurora-orb-1 {
          position: absolute;
          top: -10%;
          left: 10%;
          width: min(650px, 90vw);
          height: min(450px, 60vw);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(14,165,233,0.06) 45%, transparent 70%);
          filter: blur(60px);
          will-change: transform;
          animation: floatOrb1 22s ease-in-out infinite alternate;
        }
        .aurora-orb-2 {
          position: absolute;
          top: 35%;
          right: -5%;
          width: min(500px, 80vw);
          height: min(440px, 60vw);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6,182,212,0.14) 0%, rgba(59,130,246,0.05) 50%, transparent 70%);
          filter: blur(70px);
          will-change: transform;
          animation: floatOrb2 26s ease-in-out infinite alternate;
        }
        .aurora-orb-3 {
          position: absolute;
          bottom: 5%;
          left: 5%;
          width: min(550px, 85vw);
          height: min(380px, 55vw);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(30,58,138,0.20) 0%, rgba(6,182,212,0.05) 50%, transparent 70%);
          filter: blur(70px);
          will-change: transform;
          animation: floatOrb3 24s ease-in-out infinite alternate;
        }

        /* Mobilde blur daha hafif — performans öncelikli */
        @media (max-width: 768px) {
          .aurora-orb-1 { filter: blur(35px); opacity: 0.7; }
          .aurora-orb-2 { filter: blur(40px); opacity: 0.6; }
          .aurora-orb-3 { filter: blur(40px); opacity: 0.65; }
        }

        @keyframes floatOrb1 {
          0%   { transform: translate(0px, 0px) scale(1); }
          100% { transform: translate(60px, 70px) scale(1.08); }
        }
        @keyframes floatOrb2 {
          0%   { transform: translate(0px, 0px) scale(1); }
          100% { transform: translate(-50px, -60px) scale(1.10); }
        }
        @keyframes floatOrb3 {
          0%   { transform: translate(0px, 0px) scale(1); }
          100% { transform: translate(40px, -30px) scale(1.05); }
        }
      `}</style>
    </div>
  );
}
