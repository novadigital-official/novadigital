"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    { name: "48 Saat Süreç", href: "#surec" },
    { name: "SSS", href: "#sss" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090E]/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-1 ring-blue-500/40 group-hover:ring-blue-400 transition-all shadow-md">
            <Image
              src="/images/logo-nova-digital.png"
              alt="Nova Digital"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors flex items-center gap-1">
              NOVA <span className="text-blue-500 font-bold">DIGITAL</span>
            </span>
            <span className="text-[9px] tracking-widest uppercase text-slate-400 font-mono -mt-1 font-semibold">
              Software & Studio
            </span>
          </div>
        </Link>

        {/* Prominent, Ultra-Modern Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="relative py-1 text-slate-300 hover:text-white transition-colors duration-200 group text-sm"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300 ease-out" />
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:05070871789"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>0507 087 17 89</span>
          </a>
          <a
            href="https://wa.me/905070871789?text=Merhaba,%20Nova%20Digital%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all active:scale-95 shadow-lg"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Teklif</span>
            <ArrowUpRight className="w-3 h-3 opacity-80" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
          className="md:hidden p-2 rounded-xl text-slate-300 hover:bg-white/5 border border-white/10"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#07090E]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-5 space-y-3 shadow-2xl animate-in slide-in-from-top-3">
          <div className="flex flex-col space-y-2.5 font-medium text-base text-slate-200">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 border-b border-white/5 hover:text-blue-400 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:05070871789"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs bg-white/5 text-slate-200 border border-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>0507 087 17 89</span>
            </a>
            <a
              href="https://wa.me/905070871789?text=Merhaba,%20web%20sitesi%20teklifi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs text-white"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp ile Başla</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
