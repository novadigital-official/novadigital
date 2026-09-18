import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Antalya Mobil Uygulama Geliştirme | iOS & Android — Nova Global Bilişim",
  description:
    "Antalya'daki işletmeler, oteller ve girişimler için özel iOS ve Android mobil uygulama geliştirme. React Native / Flutter ile yüksek performanslı, App Store ve Google Play onaylı çözümler.",
  alternates: {
    canonical: "https://novadigital.com.tr/mobil-uygulama",
  },
  openGraph: {
    title: "Antalya Mobil Uygulama Geliştirme | Nova Global Bilişim",
    description: "iOS ve Android mobil uygulama çözümleri. Hızlı prototip, modern UI/UX ve anahtar teslim yayın.",
    url: "https://novadigital.com.tr/mobil-uygulama",
    siteName: "Nova Global Bilişim",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antalya Mobil Uygulama Geliştirme | Nova Global Bilişim",
    description: "İşletmenize özel iOS ve Android uygulamalar. App Store ve Play Store yayını dahil.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://novadigital.com.tr/mobil-uygulama/#webpage",
      "url": "https://novadigital.com.tr/mobil-uygulama",
      "name": "Antalya Mobil Uygulama Geliştirme | iOS & Android",
      "isPartOf": { "@id": "https://novadigital.com.tr/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://novadigital.com.tr" },
          { "@type": "ListItem", "position": 2, "name": "Mobil Uygulama", "item": "https://novadigital.com.tr/mobil-uygulama" },
        ],
      },
    },
    {
      "@type": "Service",
      "name": "Antalya Özel Mobil Uygulama Geliştirme",
      "description": "Oteller, turizm şirketleri, saha operasyonları ve B2B işletmeler için iOS ve Android mobil uygulama tasarımı, kodlaması ve mağaza yayını.",
      "provider": { "@id": "https://novadigital.com.tr/#localbusiness" },
      "areaServed": [
        { "@type": "City", "name": "Antalya" },
        { "@type": "Country", "name": "Türkiye" }
      ],
      "serviceType": "Mobil Yazılım Geliştirme",
    },
  ],
};

export default function MobilUygulamaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#050D1A] text-slate-100">
        <nav className="max-w-5xl mx-auto px-4 pt-6 text-xs text-slate-500" aria-label="Breadcrumb">
          <ol className="flex gap-2">
            <li><Link href="/" className="hover:text-blue-400 transition">Ana Sayfa</Link></li>
            <li>/</li>
            <li className="text-slate-300">Mobil Uygulama</li>
          </ol>
        </nav>

        <section className="max-w-5xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold text-sm mb-3 tracking-wide uppercase">
              Mobil Yazılım Mühendisliği
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              İşletmenizin Cebinde:<br />
              <span className="text-blue-400">iOS & Android Uygulamaları</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Antalya turizm, otelcilik, gayrimenkul ve servis sektörleri için özel mobil çözümler.
              Kullanıcı dostu arayüz, anlık bildirimler, güvenli veri altyapısı ve mağaza onay garantisi.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/905070871789?text=Merhaba,%20mobil%20uygulama%20projem%20icin%20on%20gorusme%20yapmak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
              >
                Projenizi Danışın
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

        <section className="max-w-5xl mx-auto px-4 py-12 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white mb-8">Uygulama Alanları</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white/3 rounded-2xl p-6 border border-white/8">
              <h3 className="text-blue-400 font-bold mb-2">Otel & Turizm</h3>
              <p className="text-slate-300 text-sm">Oda servisi, QR menü, spa rezervasyonu ve misafir rehberi mobil uygulamaları.</p>
            </div>
            <div className="bg-white/3 rounded-2xl p-6 border border-white/8">
              <h3 className="text-blue-400 font-bold mb-2">Saha Operasyon & CRM</h3>
              <p className="text-slate-300 text-sm">Teknik servis takip, personel görev yönetimi ve gerçek zamanlı lokasyon onayları.</p>
            </div>
            <div className="bg-white/3 rounded-2xl p-6 border border-white/8">
              <h3 className="text-blue-400 font-bold mb-2">Müşteri Sadakat (Loyalty)</h3>
              <p className="text-slate-300 text-sm">Puan toplama, kupon kazanma ve özel kampanya bildirimleriyle tekrar eden sipariş.</p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 border-t border-white/5 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Mobil Fikrinizi Hayata Geçirelim</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm">
            Tasarım, prototip, test ve mağaza yükleme dahil uçtan uca anahtar teslim geliştirme.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/905070871789?text=Merhaba,%20mobil%20uygulama%20fiyatlandirma%20hakkinda%20bilgi%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl transition-all"
            >
              WhatsApp ile İletişim
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
          </p>
        </section>
      </main>
    </>
  );
}
