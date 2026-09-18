import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nova Global Bilişim | Antalya Web Tasarım, Yazılım & Dijital Ajans",
  description:
    "Nova Global Bilişim — 2 günde teslim dönüşüm odaklı kurumsal web siteleri, e-ticaret sistemleri, B2B yazılım çözümleri ve reklam yönetimi ajansı. Antalya ve Türkiye geneli.",
  keywords: [
    "antalya web tasarım",
    "antalya dijital ajans",
    "kurumsal web sitesi",
    "e-ticaret paketleri",
    "google ads yönetimi",
    "meta ads reklam",
    "mobil uygulama geliştirme",
    "nova global bilişim",
    "nova bilişim",
  ],
  authors: [{ name: "Nova Global Bilişim" }],
  creator: "NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON DANIŞMANLIK VE LİMİTED ŞİRKETİ",
  publisher: "NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON DANIŞMANLIK VE LİMİTED ŞİRKETİ",
  metadataBase: new URL("https://novadigital.com.tr"),
  alternates: {
    canonical: "https://novadigital.com.tr",
  },
  openGraph: {
    type: "website",
    url: "https://novadigital.com.tr",
    title: "Nova Global Bilişim | Antalya Web Tasarım & Dijital Ajans",
    description:
      "Web siteniz sadece görünmesin, işletmenize müşteri getirsin. 2 günde anahtar teslim, SEO uyumlu dijital çözümler.",
    siteName: "Nova Global Bilişim",
    locale: "tr_TR",
    images: [
      {
        url: "https://novadigital.com.tr/images/logo-nova-digital.png",
        width: 1200,
        height: 630,
        alt: "Nova Global Bilişim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Global Bilişim | Web Tasarım & Yazılım Ajansı",
    description: "2 günde anahtar teslim web siteleri ve kurumsal yazılım çözümleri.",
    images: ["https://novadigital.com.tr/images/logo-nova-digital.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "TR-07",
    "geo.placename": "Antalya",
    "geo.position": "36.8848;30.7056",
    ICBM: "36.8848, 30.7056",
    "google-site-verification": "ksJLIBROnT_hba5bZMxV-sHA63Afc5RRF2J-gqphWuA",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://novadigital.com.tr/#organization",
      "name": "NOVA GLOBAL",
      "alternateName": ["NOVA GRUP", "NOVA GROUP", "NOVA GLOBAL GROUP", "NOVA GRUP BİLİŞİM"],
      "legalName": "NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON DANIŞMANLIK VE LİMİTED ŞİRKETİ",
      "url": "https://novadigital.com.tr",
      "logo": "https://novadigital.com.tr/images/logo-nova-digital.png",
      "telephone": "+905070871789",
      "email": "info@novadigital.com.tr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kültür Mah. 3856 Sokak",
        "addressLocality": "Kepez",
        "addressRegion": "Antalya",
        "postalCode": "07090",
        "addressCountry": "TR"
      },
      "sameAs": [
        "https://instagram.com/novadigitalllll",
        "https://threads.net/@novadigitalllll"
      ],
      "knowsAbout": [
        "Web Tasarım",
        "Kurumsal Yazılım",
        "E-Ticaret",
        "Mobil Uygulama Geliştirme",
        "Dijital Pazarlama",
        "Google Ads",
        "Antalya Dijital Ajans"
      ],
      "areaServed": [
        { "@type": "City", "name": "Antalya" },
        { "@type": "Country", "name": "Türkiye" }
      ],
      "subOrganization": [
        {
          "@type": "LocalBusiness",
          "name": "Nova Epoksi Zemin Çözümleri",
          "url": "https://antalyaepoksizemin.com.tr",
          "telephone": "+905070871789",
          "description": "Antalya OSB ve fabrika endüstriyel epoksi zemin sistemleri."
        },
        {
          "@type": "LocalBusiness",
          "name": "Nova Tadilat & Renovasyon",
          "url": "https://antalyadatadilat.com.tr",
          "telephone": "+905070871789",
          "description": "Antalya anahtar teslim villa ve daire tadilatı, mimari renovasyon."
        },
        {
          "@type": "LocalBusiness",
          "name": "Nova Nakliyat",
          "url": "https://antalyadanakliyat.com.tr",
          "telephone": "+905070871789",
          "description": "Antalya asansörlü evden eve ve kurumsal nakliyat hizmetleri."
        },
        {
          "@type": "LocalBusiness",
          "name": "Nova Klima Servisi",
          "url": "https://antalyadaklimaservisi.com.tr",
          "telephone": "+905070871789",
          "description": "Antalya acil klima bakım, ilaçlı yıkama ve teknik servis hizmetleri."
        },
        {
          "@type": "LocalBusiness",
          "name": "Nova Enerji Çatı GES",
          "url": "https://antalyacatiges.com.tr",
          "telephone": "+905070871789",
          "description": "Antalya otel ve fabrika endüstriyel güneş enerjisi kurulumu."
        },
        {
          "@type": "LocalBusiness",
          "name": "Nova Organizasyon",
          "url": "https://www.novaorganizasyon7.com.tr",
          "telephone": "+905070871789",
          "description": "Antalya 5 yıldızlı oteller için profesyonel departman işletimi ve saha koordinasyonu."
        }
      ]
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://novadigital.com.tr/#localbusiness",
      "name": "Nova Global Bilişim Yazılım & Danışmanlık",
      "legalName": "NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON DANIŞMANLIK VE LİMİTED ŞİRKETİ",
      "image": "https://novadigital.com.tr/images/logo-nova-digital.png",
      "url": "https://novadigital.com.tr/",
      "telephone": "+905070871789",
      "email": "info@novadigital.com.tr",
      "priceRange": "₺₺",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kültür Mah. 3856 Sokak",
        "addressLocality": "Kepez",
        "addressRegion": "Antalya",
        "postalCode": "07090",
        "addressCountry": "TR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 36.9081,
        "longitude": 30.6558
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      "sameAs": [
        "https://instagram.com/novadigitalllll",
        "https://threads.net/@novadigitalllll"
      ],
      "areaServed": [
        { "@type": "City", "name": "Antalya" },
        { "@type": "Country", "name": "Türkiye" }
      ],
      "parentOrganization": { "@id": "https://novadigital.com.tr/#organization" }
    },
    {
      "@type": "WebSite",
      "@id": "https://novadigital.com.tr/#website",
      "url": "https://novadigital.com.tr/",
      "name": "Nova Global Bilişim",
      "publisher": { "@id": "https://novadigital.com.tr/#organization" },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "Service",
      "name": "Kurumsal Web Sitesi Tasarımı",
      "description": "Antalya ve Türkiye'deki işletmeler için 48 saatte anahtar teslim, hızlı açılan ve dönüşüm odaklı kurumsal web siteleri.",
      "provider": { "@id": "https://novadigital.com.tr/#localbusiness" },
      "areaServed": "Antalya, Türkiye",
      "serviceType": "Web Tasarım ve Geliştirme"
    },
    {
      "@type": "Service",
      "name": "E-Ticaret Sistemi Kurulumu",
      "description": "Ürün yönetimi, ödeme entegrasyonu ve mobil uyumlu e-ticaret altyapısı. Antalya işletmelerine özel.",
      "provider": { "@id": "https://novadigital.com.tr/#localbusiness" },
      "areaServed": "Antalya, Türkiye",
      "serviceType": "E-Ticaret Yazılımı"
    },
    {
      "@type": "Service",
      "name": "Mobil Uygulama Geliştirme",
      "description": "iOS ve Android için kurumsal mobil uygulamalar. Hızlı prototipleme ve anahtar teslim teslim.",
      "provider": { "@id": "https://novadigital.com.tr/#localbusiness" },
      "areaServed": "Türkiye",
      "serviceType": "Mobil Yazılım Geliştirme"
    },
    {
      "@type": "Service",
      "name": "Google Ads ve Meta Reklam Yönetimi",
      "description": "Google Ads, Meta (Facebook/Instagram) reklam kampanya kurulumu ve optimize yönetimi.",
      "provider": { "@id": "https://novadigital.com.tr/#localbusiness" },
      "areaServed": "Türkiye",
      "serviceType": "Dijital Reklamcılık"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <head>
        <link
          rel="preload"
          href="/images/hero-reklam-visual.jpg"
          as="image"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-mesh-wave text-slate-300 antialiased selection:bg-blue-600 selection:text-white min-h-screen">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9MKQLGP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Analytics />
        <SpeedInsights />

        {/* All tracking scripts moved AFTER content, with lazyOnload */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W9MKQLGP');
          `}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8Q9GMZWFK6"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8Q9GMZWFK6');
            gtag('config', 'AW-549184982');
          `}
        </Script>

        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2904049929937214');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
