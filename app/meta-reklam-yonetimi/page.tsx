import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Antalya Meta Reklam Yönetimi | Instagram & Facebook Ads — Nova Global Bilişim",
  description:
    "Antalya işletmeleri için Instagram ve Facebook reklam yönetimi. Meta Piksel kurulumu, CAPI entegrasyonu, yeniden hedefleme (retargeting) ve WhatsApp yönlendirmeli lead kampanyaları.",
  alternates: {
    canonical: "https://novadigital.com.tr/meta-reklam-yonetimi",
  },
  openGraph: {
    title: "Antalya Meta Reklam Yönetimi | Instagram & Facebook Ads",
    description: "Düşük maliyetli mesaj ve form dönüşümleri. Antalya yerel kitle hedeflemeli Meta reklamları.",
    url: "https://novadigital.com.tr/meta-reklam-yonetimi",
    siteName: "Nova Global Bilişim",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antalya Meta Reklam Yönetimi | Nova Global Bilişim",
    description: "Instagram ve Facebook reklamlarıyla potansiyel müşterilerinizi WhatsApp'a çekin.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://novadigital.com.tr/meta-reklam-yonetimi/#webpage",
      "url": "https://novadigital.com.tr/meta-reklam-yonetimi",
      "name": "Antalya Meta Reklam Yönetimi | Instagram & Facebook Ads",
      "isPartOf": { "@id": "https://novadigital.com.tr/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://novadigital.com.tr" },
          { "@type": "ListItem", "position": 2, "name": "Meta Reklam Yönetimi", "item": "https://novadigital.com.tr/meta-reklam-yonetimi" },
        ],
      },
    },
    {
      "@type": "Service",
      "name": "Antalya Instagram ve Facebook Reklam Yönetimi",
      "description": "Antalya'daki yerel işletmeler için Meta Reklam Yöneticisi optimizasyonu, kreatif görsel/video üretimi, Meta Conversions API (CAPI) kurulumu ve WhatsApp doğrudan mesaj kampanyaları.",
      "provider": { "@id": "https://novadigital.com.tr/#localbusiness" },
      "areaServed": [
        { "@type": "City", "name": "Antalya" },
        { "@type": "Country", "name": "Türkiye" }
      ],
      "serviceType": "Sosyal Medya Reklamcılığı",
    },
  ],
};

export default function MetaReklamPage() {
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
            <li className="text-slate-300">Meta Reklam Yönetimi</li>
          </ol>
        </nav>

        <section className="max-w-5xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold text-sm mb-3 tracking-wide uppercase">
              Instagram & Facebook Reklamları
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Müşterilerinizi WhatsApp'a Getiren<br />
              <span className="text-blue-400">Meta Reklam Yönetimi</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              "Gönderiyi Öne Çıkar" butonuna basıp bütçenizi tüketmeyin. Doğru hedef kitle,
              retargeting ve direkt WhatsApp dönüşüm hunisi ile Antalya'daki müşterilerinizi yakalayın.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/905070871789?text=Merhaba,%20Instagram%20ve%20Facebook%20reklamlari%20icin%20danismanlik%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
              >
                Reklam Danışmanlığı Al
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
          <h2 className="text-2xl font-bold text-white mb-8">Neden Meta Reklamları?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/3 rounded-2xl p-6 border border-white/8">
              <h3 className="font-bold text-white mb-2">Doğrudan WhatsApp Mesajı</h3>
              <p className="text-slate-300 text-sm">
                Reklama tıklayan potansiyel müşteri doğrudan WhatsApp hattınıza yönlendirilir. Anında sıcak satış görüşmesi başlar.
              </p>
            </div>
            <div className="bg-white/3 rounded-2xl p-6 border border-white/8">
              <h3 className="font-bold text-white mb-2">Piksel & CAPI Takibi</h3>
              <p className="text-slate-300 text-sm">
                Web sitenizi ziyaret eden kişileri işaretler, Instagram gezinirken tekrar karşısına çıkarırız (Retargeting).
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 border-t border-white/5 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Instagram'dan Müşteri Çekmeye Başlayın</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm">
            Kreatif tasarım, metin yazımı ve haftalık optimizasyon dahil anahtar teslim reklam yönetimi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/905070871789?text=Merhaba,%20Meta%20reklam%20yonetimi%20fiyatlari%20hakkinda%20bilgi%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl transition-all"
            >
              WhatsApp ile Başlayın
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            <Link href="/" className="hover:text-slate-400 transition">← Ana Sayfa</Link>
            {" · "}
            <Link href="/google-ads-yonetimi" className="hover:text-slate-400 transition">Google Ads</Link>
            {" · "}
            <Link href="/antalya-web-tasarim" className="hover:text-slate-400 transition">Web Tasarım</Link>
          </p>
        </section>
      </main>
    </>
  );
}
