import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Markalarımız & Ekosistemimiz | NOVA GLOBAL",
  description:
    "NOVA GLOBAL; Antalya merkezli teknoloji, web yazılımı, endüstriyel zemin sistemleri ve mimari renovasyon dikeylerinde faaliyet gösteren kurumsal hizmet ve teknoloji şirketidir.",
  alternates: {
    canonical: "https://novadigital.com.tr/markalarimiz",
  },
  openGraph: {
    title: "Markalarımız & Ekosistemimiz | NOVA GLOBAL",
    description: "NOVA GLOBAL çatısı altındaki uzmanlık dikeyleri: Nova Digital, Nova Epoksi, Nova Tadilat.",
    url: "https://novadigital.com.tr/markalarimiz",
    siteName: "NOVA GLOBAL",
    locale: "tr_TR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://novadigital.com.tr/#organization",
      "name": "NOVA GLOBAL",
      "alternateName": ["NOVA GRUP", "NOVA GROUP", "NOVA GLOBAL GROUP"],
      "legalName": "NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON DANIŞMANLIK VE LİMİTED ŞİRKETİ",
      "url": "https://novadigital.com.tr",
      "logo": "https://novadigital.com.tr/images/logo-nova-digital.png",
      "telephone": "+905070871789",
      "email": "info@novadigital.com.tr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kültür Mah. 3856 Sokak No:2 D:1",
        "addressLocality": "Kepez",
        "addressRegion": "Antalya",
        "postalCode": "07090",
        "addressCountry": "TR"
      },
      "subOrganization": [
        {
          "@type": "LocalBusiness",
          "name": "NOVA DIGITAL",
          "url": "https://novadigital.com.tr",
          "description": "Web yazılımı, dijital pazarlama, SEO, yapay zekâ ve dijital ürün çözümleri.",
          "telephone": "+905070871789"
        },
        {
          "@type": "LocalBusiness",
          "name": "NOVA EPOKSİ",
          "url": "https://antalyaepoksizemin.com.tr",
          "description": "Fabrika, depo, otopark, otel ve ticari tesisler için endüstriyel zemin ve epoksi uygulamaları.",
          "telephone": "+905070871789"
        },
        {
          "@type": "LocalBusiness",
          "name": "NOVA TADİLAT",
          "url": "https://antalyadatadilat.com.tr",
          "description": "Konut, ticari alan ve işletmeler için anahtar teslim tadilat, mimari renovasyon ve proje yönetimi.",
          "telephone": "+905070871789"
        },
        {
          "@type": "LocalBusiness",
          "name": "NOVA NAKLİYAT",
          "url": "https://antalyadanakliyat.com.tr",
          "description": "Antalya asansörlü evden eve nakliyat, kurumsal ofis ve eşya taşımacılığı.",
          "telephone": "+905070871789"
        },
        {
          "@type": "LocalBusiness",
          "name": "NOVA KLİMA",
          "url": "https://antalyadaklimaservisi.com.tr",
          "description": "Antalya acil klima teknik servisi, ilaçlı yıkama bakımı ve gaz dolumu.",
          "telephone": "+905070871789"
        },
        {
          "@type": "LocalBusiness",
          "name": "NOVA ORGANİZASYON",
          "url": "https://www.novaorganizasyon7.com.tr",
          "description": "5 yıldızlı oteller ve tesisler için profesyonel departman işletimi, saha koordinasyonu ve danışmanlık.",
          "telephone": "+905070871789"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://novadigital.com.tr/markalarimiz/#webpage",
      "url": "https://novadigital.com.tr/markalarimiz",
      "name": "Markalarımız & Ekosistemimiz | NOVA GLOBAL",
      "isPartOf": { "@id": "https://novadigital.com.tr/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://novadigital.com.tr" },
          { "@type": "ListItem", "position": 2, "name": "Markalarımız", "item": "https://novadigital.com.tr/markalarimiz" },
        ],
      },
    }
  ]
};

const BRANDS = [
  {
    id: "digital",
    badge: "Bilişim & Yazılım",
    name: "NOVA DIGITAL",
    tagline: "Web Yazılımı, Reklam Yönetimi & Dijital Ürünler",
    description:
      "Kurumsal web siteleri, e-ticaret altyapıları, mobil uygulamalar, Google Ads ve Meta reklam yönetimi ile işletmelerin dijital satış altyapısını kurar.",
    href: "https://novadigital.com.tr",
    external: false,
    color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    features: [
      "48 Saatte Anahtar Teslim Kurumsal Web",
      "ROI Odaklı Google Ads & Meta Reklamları",
      "Özel E-Ticaret & Sanal POS Kurulumu",
      "iOS & Android Mobil Uygulama Mühendisliği"
    ]
  },
  {
    id: "epoksi",
    badge: "Endüstriyel Zemin",
    name: "NOVA EPOKSİ",
    tagline: "Fabrika, Depo & Otopark Zemin Sistemleri",
    description:
      "Antalya OSB ve çevre sanayi bölgelerindeki fabrikalar, lojistik depolar ve ticari tesisler için yüksek mukavemetli epoksi zemin kaplama ve elmas silim zemin hazırlığı sunar.",
    href: "https://antalyaepoksizemin.com.tr",
    external: true,
    color: "from-amber-500/20 to-orange-500/10 border-amber-500/30",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    features: [
      "Lazerli Kot & Nem Analizi ile Keşif",
      "Ağır Forklift ve Kimyasal Mukavemet",
      "Gıda Standartlarına Uygun (HACCP)",
      "Sabit Fiyat Sözleşmeli Uygulama"
    ]
  },
  {
    id: "tadilat",
    badge: "Mimari & Renovasyon",
    name: "NOVA TADİLAT",
    tagline: "Anahtar Teslim Konut & Ticari Alan Yenileme",
    description:
      "Antalya merkez, Lara, Konyaaltı ve Döşemealtı bölgelerindeki villa, daire ve ticari işletmeler için 3D projelendirmeli, sabit bütçeli anahtar teslim tadilat çözümleri sağlar.",
    href: "https://antalyadatadilat.com.tr",
    external: true,
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    features: [
      "3D Mimari Projelendirme & Ön Görselleştirme",
      "Sözleşmeli Sabit Bütçe & Gecikme Teminatı",
      "Komple Mutfak, Banyo ve İzolasyon",
      "Tek Muhatap ile Şantiye Yönetimi"
    ]
  },
  {
    id: "nakliyat",
    badge: "Lojistik & Taşımacılık",
    name: "NOVA NAKLİYAT",
    tagline: "Asansörlü & Sigortalı Evden Eve Nakliyat",
    description:
      "Antalya şehir içi ve ilçeler arası 15. kat hidrolik dış cephe asansörlü, marangozlu demontaj ve emtia sigortalı kurumsal evden eve ve ofis taşımacılığı sağlar.",
    href: "https://antalyadanakliyat.com.tr",
    external: true,
    color: "from-purple-500/20 to-indigo-500/10 border-purple-500/30",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    features: [
      "15. Kat Modüler Dış Cephe Asansörü",
      "Tam Kapsamlı Emtia Taşıma Sigortası",
      "Marangozlu Mobilya Demontaj & Montaj",
      "Havalı Naylon ve Köpüklü Özel Ambalaj"
    ]
  },
  {
    id: "klima",
    badge: "İklimlendirme & Servis",
    name: "NOVA KLİMA",
    tagline: "Acil Klima Servisi, İlaçlı Yıkama & Montaj",
    description:
      "Antalya sıcaklarında 30 dakikada adrese ulaşım garantisiyle ilaçlı hijyenik klima yıkama bakımı, R32/R410 gaz dolumu, montaj ve 1 yıl garantili teknik servis sunar.",
    href: "https://antalyadaklimaservisi.com.tr",
    external: true,
    color: "from-sky-500/20 to-blue-500/10 border-sky-500/30",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    features: [
      "Özel Basınçlı İlaçlı İç-Dış Ünite Yıkama",
      "Orijinal R32 & R410 Gaz Dolum Garantisi",
      "30 Dakikada Hızlı Adrese Müdahale",
      "1 Yıl Yazılı Kurumsal Servis Garantisi"
    ]
  },
  {
    id: "organizasyon",
    badge: "Turizm & Tesis Yönetimi",
    name: "NOVA ORGANİZASYON",
    tagline: "Otel Departman İşletimi & Saha Operasyonu",
    description:
      "Antalya'daki 5 yıldızlı oteller, resort tesisler ve sanayi işletmeleri için profesyonel departman işletimi, saha koordinasyonu ve kurumsal danışmanlık sağlar.",
    href: "https://www.novaorganizasyon7.com.tr",
    external: true,
    color: "from-rose-500/20 to-pink-500/10 border-rose-500/30",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    features: [
      "5 Yıldızlı Otel Departman İşletim Modeli",
      "Saha Denetimi, Oryantasyon & Koordinasyon",
      "Yabancı Personel İdari Süreç Danışmanlığı",
      "Tesis Sezonluk ve Yıllık Operasyon Yönetimi"
    ]
  }
];

export default function MarkalarimizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#050D1A] text-slate-100 pb-20">
        
        {/* Breadcrumb */}
        <nav className="max-w-6xl mx-auto px-4 pt-6 text-xs text-slate-500" aria-label="Breadcrumb">
          <ol className="flex gap-2">
            <li><Link href="/" className="hover:text-blue-400 transition">Ana Sayfa</Link></li>
            <li>/</li>
            <li className="text-slate-300">Markalarımız & Ekosistem</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-cyan-400 mb-6 tracking-wide uppercase">
            <span>Kurumsal Ekosistem Mimarisi</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl mx-auto mb-6">
            NOVA GLOBAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Hizmet & Teknoloji Dikeyleri
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            NOVA GLOBAL, Antalya merkezli çok sektörlü bir hizmet ve teknoloji organizasyonudur.
            Faaliyetlerini farklı uzmanlık alanlarında geliştirdiği bağımsız operasyon markalarıyla yürütür.
          </p>
        </section>

        {/* Brands Grid */}
        <section className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRANDS.map((b) => (
            <div
              key={b.id}
              className={`rounded-3xl p-7 bg-gradient-to-b ${b.color} border backdrop-blur-sm flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${b.badgeColor} uppercase tracking-wider`}>
                    {b.badge}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">NOVA GROUP</span>
                </div>

                <h2 className="text-2xl font-black text-white tracking-tight mb-2">
                  {b.name}
                </h2>
                <p className="text-xs font-semibold text-slate-300 mb-4">
                  {b.tagline}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {b.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/10 mb-8">
                  {b.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 shrink-0 mt-0.5">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {b.external ? (
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/15 transition-colors"
                  >
                    <span>Web Sitesini Ziyaret Et</span>
                    <span>↗</span>
                  </a>
                ) : (
                  <Link
                    href="/"
                    className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Hizmetleri İncele</span>
                    <span>→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Corporate Legal Footer Banner */}
        <section className="max-w-4xl mx-auto px-4 mt-16 text-center">
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6 sm:p-8 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Tüzel Kişilik & Tescil Bilgileri
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tüm operasyonel markalar, <strong className="text-slate-200">NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON DANIŞMANLIK VE LİMİTED ŞİRKETİ</strong> tüzel kişiliği ve kurumsal standartları altında faaliyet göstermektedir.
            </p>
            <div className="pt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-mono">
              <span>📍 Kepez / Antalya</span>
              <span>📞 0507 087 17 89</span>
              <span>✉️ info@novadigital.com.tr</span>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
