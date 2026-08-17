"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible");

  useEffect(() => {
    // Skip entirely on page refresh within same session
    if (sessionStorage.getItem("nova_loaded")) {
      setPhase("gone");
      return;
    }

    const fadeTimer = setTimeout(() => setPhase("fading"), 1600);
    const goneTimer = setTimeout(() => {
      setPhase("gone");
      sessionStorage.setItem("nova_loaded", "true");
    }, 2100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#070d1a",
        pointerEvents: "none",
        transition: "opacity 0.5s ease",
        opacity: phase === "fading" ? 0 : 1,
      }}
    >
      {/* Soft ambient glow behind logo */}
      <div
        style={{
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.25) 0%, rgba(37,99,235,0.12) 50%, transparent 70%)",
          filter: "blur(30px)",
          animation: "pulseGlow 2s ease-in-out infinite",
        }}
      />

      {/* Logo container — fixed px size, no fill prop issues */}
      <div
        style={{
          position: "relative",
          width: 88,
          height: 88,
          borderRadius: 20,
          overflow: "hidden",
          border: "1.5px solid rgba(6,182,212,0.35)",
          boxShadow:
            "0 0 30px rgba(6,182,212,0.2), 0 20px 40px rgba(0,0,0,0.5)",
          background: "#0a1628",
          animation: "scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards",
          zIndex: 1,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo-nova-digital.png"
          alt="Nova Digital"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Brand name */}
      <div
        style={{
          marginTop: 20,
          textAlign: "center",
          zIndex: 1,
          animation: "fadeUp 0.5s ease 0.2s both",
        }}
      >
        <p
          style={{
            fontFamily: "monospace",
            fontSize: 15,
            fontWeight: 800,
            letterSpacing: "0.22em",
            color: "#ffffff",
            margin: 0,
          }}
        >
          NOVA{" "}
          <span style={{ color: "#22d3ee" }}>DIGITAL</span>
        </p>
        <p
          style={{
            fontFamily: "monospace",
            fontSize: 10,
            letterSpacing: "0.3em",
            color: "#475569",
            marginTop: 4,
            textTransform: "uppercase",
          }}
        >
          Web Tasarım & Yazılım
        </p>
      </div>

      {/* Slim progress bar */}
      <div
        style={{
          marginTop: 28,
          width: 120,
          height: 2,
          borderRadius: 999,
          background: "rgba(255,255,255,0.08)",
          overflow: "hidden",
          zIndex: 1,
          animation: "fadeUp 0.5s ease 0.3s both",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 999,
            background: "linear-gradient(90deg, #2563eb, #22d3ee)",
            animation: "loadBar 1.6s cubic-bezier(0.4,0,0.2,1) forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.15); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.75); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes loadBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
