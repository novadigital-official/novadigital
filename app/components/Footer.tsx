import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-transparent text-slate-400 pt-16 pb-10 relative z-10 text-xs border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden ring-1 ring-blue-500/30">
                <Image
                  src="/images/logo-nova-digital.png"
                  alt="Nova Digital"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">
                NOVA <span className="text-blue-500">DIGITAL</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm text-xs">
              Antalya ve Türkiye genelinde işletmeler için 2 günde yayına alınan,
              Google Ads & Meta reklamlarıyla tam entegre modern web yazılımları
              ve dijital dönüşüm sistemleri.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://instagram.com/novadigitalllll"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://threads.net/@novadigitalllll"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition"
                aria-label="Threads"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Menü */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Hızlı Menü</h4>
            <ul className="space-y-2">
              <li><Link href="#cozumler" className="hover:text-white transition">Çözümler</Link></li>
              <li><Link href="#portfoy" className="hover:text-white transition">Canlı Demolar</Link></li>
              <li><Link href="#paketler" className="hover:text-white transition">Web Paketleri</Link></li>
              <li><Link href="#surec" className="hover:text-white transition">48 Saat Süreç</Link></li>
              <li><Link href="#sss" className="hover:text-white transition">SSS</Link></li>
            </ul>
          </div>

          {/* Col 3: Paketler */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Paketler</h4>
            <ul className="space-y-2">
              <li><Link href="#paketler" className="hover:text-white transition">Başlangıç (4.999 TL)</Link></li>
              <li><Link href="#paketler" className="hover:text-white transition">Kurumsal (14.999 TL)</Link></li>
              <li><Link href="#paketler" className="hover:text-white transition">Profesyonel (39.999 TL)</Link></li>
              <li><Link href="#cozumler" className="hover:text-white transition">Google Ads Yönetimi</Link></li>
              <li><Link href="#cozumler" className="hover:text-white transition">Mobil Yazılım</Link></li>
            </ul>
          </div>

          {/* Col 4: İletişim */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">İletişim</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="tel:05070871789" className="hover:text-white transition">0507 087 17 89</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:info@novadigital.com.tr" className="hover:text-white transition">info@novadigital.com.tr</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Kepez / Antalya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>© 2026 Nova Digital Software & Studio. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <span>KVKK Aydınlatma Metni</span>
            <span>Gizlilik Politikası</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
