import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Provider as BalancerProvider } from "react-wrap-balancer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Nova Digital | Antalya Web Tasarım, E-Ticaret & Dijital Ajans",
  description:
    "Nova Digital — 2 günde teslim dönüşüm odaklı kurumsal web siteleri, e-ticaret sistemleri, Google Ads & Meta reklam yönetimi ve mobil yazılım ajansı. Antalya ve Türkiye geneli.",
  keywords: [
    "antalya web tasarım",
    "antalya dijital ajans",
    "kurumsal web sitesi",
    "e-ticaret paketleri",
    "google ads yönetimi",
    "meta ads reklam",
    "mobil uygulama geliştirme",
    "nova digital",
  ],
  authors: [{ name: "Nova Digital" }],
  creator: "Nova Digital",
  publisher: "Nova Digital",
  metadataBase: new URL("https://novadigital.com.tr"),
  alternates: {
    canonical: "https://novadigital.com.tr",
  },
  openGraph: {
    type: "website",
    url: "https://novadigital.com.tr",
    title: "Nova Digital | Antalya Web Tasarım & Dijital Ajans",
    description:
      "Web siteniz sadece görünmesin, işletmenize müşteri getirsin. 2 günde anahtar teslim, SEO uyumlu dijital çözümler.",
    siteName: "Nova Digital",
    locale: "tr_TR",
    images: [
      {
        url: "https://novadigital.com.tr/images/logo-nova-digital.png",
        width: 1200,
        height: 630,
        alt: "Nova Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Digital | Web Tasarım & Reklam Ajansı",
    description: "2 günde anahtar teslim web siteleri ve dijital reklam yönetimi.",
    images: ["https://novadigital.com.tr/images/logo-nova-digital.png"],
  },
  icons: {
    icon: [
      { url: "/images/logo-nova-digital.png", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/images/logo-nova-digital.png", sizes: "180x180" },
    ],
    shortcut: "/images/logo-nova-digital.png",
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
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://novadigital.com.tr/#localbusiness",
      name: "Nova Digital Yazılım & Dijital Pazarlama",
      image: "https://novadigital.com.tr/images/logo-nova-digital.png",
      url: "https://novadigital.com.tr/",
      telephone: "+905070871789",
      email: "info@novadigital.com.tr",
      priceRange: "₺₺",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kültür Mah. 3856 Sokak",
        addressLocality: "Kepez",
        addressRegion: "Antalya",
        postalCode: "07090",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.9081,
        longitude: 30.6558,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
      sameAs: [
        "https://instagram.com/novadigitalllll",
        "https://threads.net/@novadigitalllll",
      ],
      areaServed: [
        { "@type": "City", name: "Antalya" },
        { "@type": "Country", name: "Türkiye" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://novadigital.com.tr/#website",
      url: "https://novadigital.com.tr/",
      name: "Nova Digital",
      publisher: { "@id": "https://novadigital.com.tr/#localbusiness" },
      inLanguage: "tr-TR",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
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
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8Q9GMZWFK6');
            gtag('config', 'AW-549184982');
          `}
        </Script>

        <Script id="meta-pixel" strategy="afterInteractive">
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-mesh-wave text-slate-300 antialiased selection:bg-blue-600 selection:text-white min-h-screen">
        <BalancerProvider>
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
        </BalancerProvider>
      </body>
    </html>
  );
}
