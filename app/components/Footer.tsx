"use client";

import Image from "next/image";
import Link from "next/link";
import { LegalTab } from "./LegalModal";

interface FooterProps {
  onOpenLegal?: (tab: LegalTab) => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const links = [
    { name: "Çözümler", href: "#cozumler" },
    { name: "Canlı Demolar", href: "#portfoy" },
    { name: "Paketler", href: "#paketler" },
    { name: "48 Saat Süreç", href: "#surec" },
    { name: "SSS", href: "#sss" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <footer className="relative bg-transparent border-t border-white/10 pt-8 pb-14 md:pb-8 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-4">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-2.5">
            <div className="relative w-7 h-7 rounded-lg overflow-hidden border border-white/15 shadow-sm shrink-0">
              <Image
                src="/images/logo-nova-digital.png"
                alt="Nova Digital Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-extrabold text-sm tracking-tight text-white font-mono">
              NOVA DIGITAL
            </span>
          </div>

          {/* Clean Symmetrical Nav Links */}
          <div className="grid grid-cols-3 sm:flex sm:items-center sm:justify-center gap-x-5 gap-y-2 text-center text-xs font-medium text-slate-300">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Clickable Legal Policies Trigger */}
          <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400">
            <button
              onClick={() => onOpenLegal && onOpenLegal("kvkk")}
              className="hover:text-slate-200 transition underline-offset-2 hover:underline"
            >
              KVKK
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal && onOpenLegal("gizlilik")}
              className="hover:text-slate-200 transition underline-offset-2 hover:underline"
            >
              Gizlilik
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal && onOpenLegal("cerez")}
              className="hover:text-slate-200 transition underline-offset-2 hover:underline"
            >
              Şartlar
            </button>
          </div>
        </div>

        {/* Bottom 1-Line Copyright */}
        <div className="pt-3 border-t border-white/5 text-[10px] text-slate-500 text-center">
          © 2026 Nova Digital Web Tasarım & Yazılım Stüdyosu. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
