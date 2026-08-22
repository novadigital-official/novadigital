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
    { name: "Canlı Demolar", href: "#portfoy" },
    { name: "Paketler", href: "#paketler" },
    { name: "Süreç", href: "#surec" },
    { name: "SSS", href: "#sss" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090E]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/15 shadow-md group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo-nova-digital.png"
                alt="Nova Digital Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white font-mono group-hover:text-blue-400 transition-colors leading-tight">
                NOVA DIGITAL
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                Web Studio
              </span>
            </div>
          </Link>

          {/* Prominent Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="relative py-1 text-sm font-semibold tracking-tight text-slate-200 hover:text-white transition-colors group"
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
              className="btn-shimmer px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2 shadow-lg transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ücretsiz Teklif Al</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl glass-box border border-white/15 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/5 transition"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-white/10">
                <a
                  href="https://wa.me/905070871789?text=Merhaba,%20web%20sitesi%20hakk%C4%B1nda%20teklif%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer w-full py-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
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
