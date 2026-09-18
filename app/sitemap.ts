import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://novadigital.com.tr";

  // NOT: Anchor URL'ler (#iletisim, #hizmetler vb.) sitemap URL'si DEĞİLDİR.
  // Yalnızca arama motorlarının dizine eklemesi gereken gerçek ticari sayfalar.
  return [
    {
      url: baseUrl,
      lastModified: "2026-09-18",
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/antalya-web-tasarim`,
      lastModified: "2026-09-18",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/google-ads-yonetimi`,
      lastModified: "2026-09-18",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/e-ticaret-yazilimi`,
      lastModified: "2026-09-18",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mobil-uygulama`,
      lastModified: "2026-09-18",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/meta-reklam-yonetimi`,
      lastModified: "2026-09-18",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
