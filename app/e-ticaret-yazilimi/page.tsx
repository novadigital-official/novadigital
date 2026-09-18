import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Antalya E-Ticaret Sitesi Kurulumu | Hızlı & Güvenli — Nova Global Bilişim",
  description:
    "Antalya işletmelerine özel anahtar teslim e-ticaret altyapısı: İyzico/PayTR ödeme entegrasyonu, kargo modülü, mobil uyumlu yönetim paneli ve fatura entegrasyonu.",
  alternates: {
    canonical: "https://novadigital.com.tr/e-ticaret-yazilimi",
  },
  openGraph: {
    title: "Antalya E-Ticaret Sitesi Kurulumu | Nova Global Bilişim",
    description: "Sanal pos, kargo entegrasyonu ve mobil uyumlu modern e-ticaret sistemleri.",
    url: "https://novadigital.com.tr/e-ticaret-yazilimi",
    siteName: "Nova Global Bilişim",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antalya E-Ticaret Sitesi Kurulumu | Nova Global Bilişim",
    description: "Anahtar teslim e-ticaret çözümleri. Güvenli ödeme ve kargo entegrasyonu dahil.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://novadigital.com.tr/e-ticaret-yazilimi/#webpage",
      "url": "https://novadigital.com.tr/e-ticaret-yazilimi",
      "name": "Antalya E-Ticaret Sitesi Kurulumu | Güvenli Sanal Pos & Kargo",
      "isPartOf": { "@id": "https://novadigital.com.tr/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://novadigital.com.tr" },
          { "@type": "ListItem", "position": 2, "name": "E-Ticaret Yazılımı", "item": "https://novadigital.com.tr/e-ticaret-yazilimi" },
        ],
      },
    },
    {
      "@type": "Service",
      "name": "Antalya E-Ticaret Sistemi Kurulumu ve Danışmanlığı",
      "description": "Antalya ve çevre illerdeki perakendeciler, toptancılar ve üreticiler için sanal POS (İyzico, PayTR, Garanti, vb.), kargo takip otomasyonu, ERP/muhasebe entegrasyonu ve SEO altyapılı e-ticaret platformları kurulumu.",
      "provider": { "@id": "https://novadigital.com.tr/#localbusiness" },
      "areaServed": [
        { "@type": "City", "name": "Antalya" },
        { "@type": "Country", "name": "Türkiye" }
      ],
      "serviceType": "E-Ticaret Yazılımı Geliştirme",
    },
  ],
};

export default function ETicaretPage() {
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
            <li className="text-slate-300">E-Ticaret Yazılımı</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold text-sm mb-3 tracking-wide uppercase">
              Antalya E-Ticaret Çözümleri
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Satış Yapan, Hızlı Açılan<br />
              <span className="text-blue-400">E-Ticaret Altyapısı</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Ürünlerinizi internetten güvenle satın. İyzico / PayTR sanal POS kurulumu,
              Yurtiçi/Aras/MNG kargo entegrasyonu, sepette terk oranını düşüren tek adımlı ödeme ekranı.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/905070871789?text=Merhaba,%20e-ticaret%20sitesi%20kurulumu%20icin%20fiyat%20ve%20detay%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
              >
                E-Ticaret Teklifi Al
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

        {/* Özellikler */}
        <section className="max-w-5xl mx-auto px-4 py-12 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white mb-8">
            Neden Hazır Şablonlar Değil, Özel E-Ticaret Mimarisi?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/3 rounded-2xl p-6 border border-white/8">
              <div className="text-blue-400 font-bold text-lg mb-2">01. Yıldırım Hızı</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Yavaş açılan e-ticaret siteleri her 1 saniyelik gecikmede %7 ciro kaybeder. Next.js ile 1 saniyenin altında açılan ürün sayfaları.
              </p>
            </div>
            <div className="bg-white/3 rounded-2xl p-6 border border-white/8">
              <div className="text-blue-400 font-bold text-lg mb-2">02. Komisyonsuz Altyapı</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Aylık fahiş kira veya cirodan pay alan sistemler yerine tek seferlik kurulum ve mülkiyeti tamamen sizde olan bağımsız mağaza.
              </p>
            </div>
            <div className="bg-white/3 rounded-2xl p-6 border border-white/8">
              <div className="text-blue-400 font-bold text-lg mb-2">03. Tam Entegrasyon</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Bankaların sanal posları, kargo fişi otomasyonu, e-fatura sistemleri ve Google Merchant Center ürün kataloğu entegre.
              </p>
            </div>
          </div>
        </section>

        {/* Neler Dahil */}
        <section className="max-w-5xl mx-auto px-4 py-12 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white mb-8">Kurulum Paketine Dahil Olanlar</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Özelleştirilmiş mobil öncelikli mağaza tasarımı",
              "İyzico, PayTR veya Banka Sanal POS Kurulumu",
              "Otomatik kargo barkod ve takip entegrasyonu",
              "Sınırsız kategori, ürün ve varyant yönetimi",
              "Ürün bazlı SEO ve Schema Product işaretlemeleri",
              "Kupon, indirim kodu ve promosyon modülleri",
              "WhatsApp hızlı sipariş butonu",
              "1 Yıl Ücretsiz SSL, Hosting ve Teknik Bakım",
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
            Antalya'da Online Mağazanızı Birlikte Açalım
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm">
            Fiziksel dükkanınızı veya üretiminizi tüm Türkiye'ye açın. Sabit bütçe, şeffaf teslim süreci.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/905070871789?text=Merhaba,%20e-ticaret%20paketleri%20hakkinda%20gorusmek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl transition-all"
            >
              WhatsApp ile Danışın
            </a>
            <a
              href="tel:05070871789"
              className="border border-white/20 hover:border-white/40 text-slate-300 font-semibold px-8 py-3 rounded-xl transition-all"
            >
              0507 087 17 89
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            <Link href="/" className="hover:text-slate-400 transition">← Ana Sayfa</Link>
            {" · "}
            <Link href="/antalya-web-tasarim" className="hover:text-slate-400 transition">Web Tasarım</Link>
            {" · "}
            <Link href="/google-ads-yonetimi" className="hover:text-slate-400 transition">Google Ads</Link>
          </p>
        </section>
      </main>
    </>
  );
}
