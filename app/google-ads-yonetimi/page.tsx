import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Antalya Google Ads Yönetimi | ROI Odaklı Reklam — Nova Global Bilişim",
  description:
    "Antalya işletmelerine özel Google Arama Ağı ve Display reklam kampanya kurulumu ve yönetimi. Hedeflenmiş arama sorguları, negatif kelime optimizasyonu, haftalık raporlama.",
  alternates: {
    canonical: "https://novadigital.com.tr/google-ads-yonetimi",
  },
  openGraph: {
    title: "Antalya Google Ads Yönetimi | ROI Odaklı Kampanya",
    description: "Google Ads'te bütçeniz israf olmasın. Antalya yerel hedefleme + dönüşüm takibi ile gerçek sonuç.",
    url: "https://novadigital.com.tr/google-ads-yonetimi",
    siteName: "Nova Global Bilişim",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antalya Google Ads Yönetimi | Nova Global Bilişim",
    description: "Bütçeniz israf olmasın. Yerel hedefleme + dönüşüm takibi ile Google Ads.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://novadigital.com.tr/google-ads-yonetimi/#webpage",
      "url": "https://novadigital.com.tr/google-ads-yonetimi",
      "name": "Antalya Google Ads Yönetimi | ROI Odaklı Kampanya",
      "isPartOf": { "@id": "https://novadigital.com.tr/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://novadigital.com.tr" },
          { "@type": "ListItem", "position": 2, "name": "Google Ads Yönetimi", "item": "https://novadigital.com.tr/google-ads-yonetimi" },
        ],
      },
    },
    {
      "@type": "Service",
      "name": "Antalya Google Ads Kampanya Yönetimi",
      "description": "Antalya'daki yerel işletmeler için Google Arama, Display ve Performance Max kampanya kurulumu ve optimize yönetimi. Dönüşüm takibi, negatif kelime listesi ve haftalık ROI raporlaması.",
      "provider": { "@id": "https://novadigital.com.tr/#localbusiness" },
      "areaServed": { "@type": "City", "name": "Antalya" },
      "serviceType": "Dijital Reklamcılık",
    },
  ],
};

export default function GoogleAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#050D1A] text-slate-100">

        {/* Breadcrumb */}
        <nav className="max-w-5xl mx-auto px-4 pt-6 text-xs text-slate-500" aria-label="Breadcrumb">
          <ol className="flex gap-2">
            <li><Link href="/" className="hover:text-blue-400 transition">Ana Sayfa</Link></li>
            <li>/</li>
            <li className="text-slate-300">Google Ads Yönetimi</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold text-sm mb-3 tracking-wide uppercase">
              Antalya Google Ads Yönetimi
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Google Reklam Bütçeniz<br />
              <span className="text-blue-400">İsraf Olmasın</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Antalya'daki yerel rakiplerinizin önüne geçin. Hedeflenmiş arama
              sorguları, negatif kelime filtresi ve dönüşüm takibi ile her
              liranızın nereye gittiğini bilin.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/905070871789?text=Merhaba,%20Google%20Ads%20yonetimi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
              >
                Ücretsiz Kampanya Analizi
              </a>
              <a
                href="tel:05070871789"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-slate-300 font-semibold px-6 py-3 rounded-xl transition-all"
              >
                0507 087 17 89
              </a>
            </div>
          </div>
        </section>

        {/* Ortak Problemler */}
        <section className="max-w-5xl mx-auto px-4 py-12 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white mb-8">
            Google Ads'te En Yaygın Bütçe Hataları
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                problem: "Geniş eşleme anahtar kelimeler",
                desc: 'İşletmenizle alakasız aramalara para ödüyorsunuz. "klima tamiri" arayan kişiye villa kiralama reklamı gösteriliyor.',
              },
              {
                problem: "Dönüşüm takibi yok",
                desc: "Tıklama var ama kim aradı, kim WhatsApp mesajı attı, kim form doldurdu — bilinmiyor.",
              },
              {
                problem: "Geniş coğrafi hedefleme",
                desc: "Antalya'da hizmet verirken İstanbul, Ankara veya yurt dışı trafiğine bütçe gidiyor.",
              },
              {
                problem: "Landing page uyumsuzluğu",
                desc: '"Epoksi zemin" reklamı ana sayfaya düşüyor. Kullanıcı ne aradığını bulamıyor, geri dönüyor.',
              },
            ].map((item) => (
              <div key={item.problem} className="bg-white/3 rounded-2xl p-5 border border-red-500/10">
                <div className="text-red-400 font-bold text-sm mb-2">✗ {item.problem}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Servis İçeriği */}
        <section className="max-w-5xl mx-auto px-4 py-12 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white mb-8">Yönetim Paketinde Neler Var?</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Rakip analizi ve anahtar kelime araştırması",
              "Arama ağı kampanya kurulumu (Search)",
              "Negatif kelime listesi — haftalık güncelleme",
              "Antalya + ilçe bazlı coğrafi hedefleme",
              "GA4 + Google Ads dönüşüm entegrasyonu",
              "Tel click, WhatsApp click, form submit takibi",
              "Haftalık performans raporu (Impression, Click, CPA)",
              "A/B reklam metni testi",
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start text-sm text-slate-300">
                <span className="text-blue-400 mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-4 py-16 border-t border-white/5 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Mevcut Kampanyanız Analiz Edilsin
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm">
            Google Ads hesabınıza erişim verin, 24 saat içinde ücretsiz denetim
            raporu iletelim. Bütçe israfı nerede, nereden başlanmalı — netleşsin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/905070871789?text=Merhaba,%20Google%20Ads%20hesabim%20icin%20ucretsiz%20analiz%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl transition-all"
            >
              WhatsApp ile Başlayın
            </a>
            <a
              href="tel:05070871789"
              className="border border-white/20 hover:border-white/40 text-slate-300 font-semibold px-8 py-3 rounded-xl transition-all"
            >
              0507 087 17 89
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            <Link href="/" className="hover:text-slate-400 transition">← Nova Global Bilişim Ana Sayfa</Link>
            {" · "}
            <Link href="/antalya-web-tasarim" className="hover:text-slate-400 transition">Web Tasarım</Link>
          </p>
        </section>
      </main>
    </>
  );
}
