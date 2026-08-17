"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Çözümler", href: "#cozumler" },
    { name: "Fiyatlar", href: "#paketler" },
    { name: "Canlı Demolar", href: "#portfoy" },
    { name: "Süreç", href: "#surec" },
    { name: "SSS", href: "#sss" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070e1b]/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-700 shadow-md group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo-nova-digital.png"
                alt="Nova Digital Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white font-mono group-hover:text-cyan-400 transition-colors leading-tight">
                NOVA DIGITAL
              </span>
              <span className="text-[10px] text-cyan-400/80 font-medium tracking-wide">
                Web Tasarım & Yazılım
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="relative py-1 text-sm font-semibold tracking-tight text-slate-300 hover:text-white transition-colors group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-200 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Right Action Button: Standardized CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/905070871789?text=Merhaba,%20web%20sitesi%20hakk%C4%B1nda%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ücretsiz Teklif Al</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* 4. Mobile Menu Overlay — Solid Dark Background with Zero Bleed-through */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-5 rounded-2xl bg-slate-950/98 backdrop-blur-2xl border border-slate-800 shadow-2xl shadow-black z-50 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-800">
                <a
                  href="https://wa.me/905070871789?text=Merhaba,%20web%20sitesi%20hakk%C4%B1nda%20teklif%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ücretsiz Teklif Al</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
