"use client";

import Image from "next/image";
import Link from "next/link";
import { LegalTab } from "./LegalModal";

interface FooterProps {
  onOpenLegal?: (tab: LegalTab) => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const navLinks = [
    { name: "Çözümler",     href: "#cozumler" },
    { name: "Canlı Demolar", href: "#portfoy" },
    { name: "Paketler",     href: "#paketler" },
    { name: "Süreç",        href: "#surec" },
    { name: "SSS",          href: "#sss" },
    { name: "İletişim",     href: "#iletisim" },
  ];

  return (
    <footer className="relative bg-transparent border-t border-white/8 pt-6 pb-[4.5rem] md:pb-6 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Single compact row — logo | nav links | legal */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Brand */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="relative w-7 h-7 rounded-lg overflow-hidden border border-white/15 shadow-sm shrink-0">
              <Image
                src="/images/logo-nova-digital.png"
                alt="Nova Digital Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-sm tracking-tight text-white font-mono">
                NOVA DIGITAL
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Web Tasarım & Dijital Ajans
              </span>
            </div>
          </div>

          {/* Nav links — single scrollable row on mobile */}
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium text-slate-400">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Legal links */}
          <div className="flex items-center gap-3 text-[11px] text-slate-500 shrink-0">
            <button
              onClick={() => onOpenLegal && onOpenLegal("kvkk")}
              className="hover:text-slate-200 transition"
            >
              KVKK
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal && onOpenLegal("gizlilik")}
              className="hover:text-slate-200 transition"
            >
              Gizlilik
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal && onOpenLegal("cerez")}
              className="hover:text-slate-200 transition"
            >
              Çerez
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-5 pt-4 border-t border-white/5 text-[10px] text-slate-600 text-center">
          © 2026 Nova Digital Web Tasarım & Yazılım Stüdyosu. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
