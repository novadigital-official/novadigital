import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Antalya Web Tasarım | 48 Saatte Kurumsal Site — Nova Global Bilişim",
  description:
    "Antalya'daki işletmeler için 48 saatte anahtar teslim, SEO uyumlu, mobil öncelikli kurumsal web siteleri. Sabit fiyat, sözleşmeli teslim, 1 yıl teknik destek.",
  alternates: {
    canonical: "https://novadigital.com.tr/antalya-web-tasarim",
  },
  openGraph: {
    title: "Antalya Web Tasarım | 48 Saatte Kurumsal Site",
    description: "Nova Global Bilişim — Antalya işletmelerine özel dönüşüm odaklı web sitesi tasarımı.",
    url: "https://novadigital.com.tr/antalya-web-tasarim",
    siteName: "Nova Global Bilişim",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antalya Web Tasarım | Nova Global Bilişim",
    description: "48 saatte anahtar teslim kurumsal web sitesi. Sabit fiyat, sözleşmeli teslim.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://novadigital.com.tr/antalya-web-tasarim/#webpage",
      "url": "https://novadigital.com.tr/antalya-web-tasarim",
      "name": "Antalya Web Tasarım | 48 Saatte Kurumsal Site",
      "description": "Antalya'daki işletmeler için 48 saatte anahtar teslim web sitesi tasarımı ve geliştirme.",
      "isPartOf": { "@id": "https://novadigital.com.tr/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://novadigital.com.tr" },
          { "@type": "ListItem", "position": 2, "name": "Antalya Web Tasarım", "item": "https://novadigital.com.tr/antalya-web-tasarim" },
        ],
      },
    },
    {
      "@type": "Service",
      "name": "Antalya Kurumsal Web Sitesi Tasarımı",
      "description": "Antalya'daki işletmeler için 48 saatte anahtar teslim, Next.js ile geliştirilmiş, Core Web Vitals uyumlu, dönüşüm odaklı kurumsal web siteleri. SEO altyapısı, mobil uyum ve 1 yıl teknik destek dahil.",
      "provider": { "@id": "https://novadigital.com.tr/#localbusiness" },
      "areaServed": [
        { "@type": "City", "name": "Antalya" },
        { "@type": "AdministrativeArea", "name": "Kepez" },
        { "@type": "AdministrativeArea", "name": "Muratpaşa" },
        { "@type": "AdministrativeArea", "name": "Konyaaltı" },
        { "@type": "AdministrativeArea", "name": "Alanya" },
      ],
      "serviceType": "Web Tasarım ve Geliştirme",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "TRY",
        "price": "4999",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "4999",
          "priceCurrency": "TRY",
          "name": "Başlangıç Paketi (tek sayfa)",
        },
      },
    },
  ],
};

export default function AntalyaWebTasarimPage() {
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
            <li className="text-slate-300">Antalya Web Tasarım</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold text-sm mb-3 tracking-wide uppercase">
              Antalya Web Tasarım
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              48 Saatte Anahtar Teslim<br />
              <span className="text-blue-400">Kurumsal Web Sitesi</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Antalya'daki işletmeniz için hızlı açılan, arama motorlarında bulunan
              ve ziyaretçiyi müşteriye dönüştüren web sitesi. Sabit fiyat,
              sözleşmeli teslim, 1 yıl teknik destek.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/905070871789?text=Merhaba,%20web%20tasarim%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
              >
                Ücretsiz Keşif Al
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

        {/* Sorun — Çözüm */}
        <section className="max-w-5xl mx-auto px-4 py-12 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white mb-8">
            Neden Bu Hizmet Gerekiyor?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/3 rounded-2xl p-6 border border-white/8">
              <h3 className="font-bold text-red-400 mb-3">Tipik Problem</h3>
              <ul className="space-y-2 text-slate-300 text-sm leading-relaxed">
                <li>→ Eski ve yavaş web sitesi Google'da alt sıralarda</li>
                <li>→ Mobilde bozuk görünen tasarım, müşteri kaçıyor</li>
                <li>→ Aylar süren ajans projeleri, belirsiz fiyatlar</li>
                <li>→ Ziyaretçi geliyor ama iletişime geçmiyor</li>
              </ul>
            </div>
            <div className="bg-blue-950/40 rounded-2xl p-6 border border-blue-500/20">
              <h3 className="font-bold text-blue-300 mb-3">Nova Global Çözümü</h3>
              <ul className="space-y-2 text-slate-200 text-sm leading-relaxed">
                <li>✓ 48 saatte canlıya alınan site (yazılım teslim garantisi)</li>
                <li>✓ PageSpeed 95+ hedefi, Core Web Vitals uyumu</li>
                <li>✓ Sabit fiyat — sözleşme imzalanır, sürpriz ek ücret yok</li>
                <li>✓ WhatsApp / form lead yakalama sistemi dahil</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Nasıl Çalışır */}
        <section className="max-w-5xl mx-auto px-4 py-12 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white mb-8">Süreç Nasıl İşliyor?</h2>
          <ol className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Keşif Görüşmesi", desc: "WhatsApp veya telefon ile 15 dakikalık keşif. Sektör, hedef, rakip analizi." },
              { step: "2", title: "Tasarım Onayı", desc: "24 saat içinde taslak sunum. Renk, yapı, içerik üzerinde mutabakat." },
              { step: "3", title: "Geliştirme", desc: "Next.js ile kodlama, SEO altyapısı, mobil test, form kurulumu." },
              { step: "4", title: "Canlıya Alma", desc: "Domain bağlantısı, SSL, hız testi — 48 saatte teslim." },
            ].map((item) => (
              <li key={item.step} className="bg-white/3 rounded-2xl p-5 border border-white/8">
                <div className="text-blue-400 font-black text-2xl mb-2">{item.step}</div>
                <div className="font-bold text-white text-sm mb-1">{item.title}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{item.desc}</div>
              </li>
            ))}
          </ol>
        </section>

        {/* Fiyat Sinyali */}
        <section className="max-w-5xl mx-auto px-4 py-12 border-t border-white/5">
          <h2 className="text-2xl font-bold text-white mb-2">Hangi Durumlarda Uygun?</h2>
          <p className="text-slate-400 mb-6 text-sm">
            Bu hizmet her ölçekteki Antalya işletmesi için uygundur — tek kişilik danışmanlık bürosundan
            çok şubeli işletmelere kadar.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "Yeni İşletme", desc: "Sektörde itibar oluşturmak, Google'da görünmek ve ilk müşteriye ulaşmak." },
              { title: "Mevcut Siteyi Yenileme", desc: "Yavaş, eski veya mobil uyumsuz sitesini modern, hızlı yapıya taşımak." },
              { title: "Lead Üretimi", desc: "Telefon ve WhatsApp aracılığıyla ölçülü müşteri talebi oluşturmak." },
            ].map((c) => (
              <div key={c.title} className="bg-white/3 rounded-xl p-5 border border-white/8">
                <div className="font-bold text-white text-sm mb-2">{c.title}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA bottom */}
        <section className="max-w-5xl mx-auto px-4 py-16 border-t border-white/5 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Antalya'da Web Sitenizi 48 Saatte Kuralım
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm">
            Ücretsiz keşif görüşmesi — telefon veya WhatsApp üzerinden, 15 dakika.
            Proje kapsamı, fiyat ve teslim tarihi netleşir.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/905070871789?text=Merhaba,%20Antalya%20web%20tasarim%20hizmeti%20icin%20keşif%20almak%20istiyorum."
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
          </p>
        </section>
      </main>
    </>
  );
}
