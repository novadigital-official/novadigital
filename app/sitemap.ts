import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://novadigital.com.tr";

  // NOT: Anchor URL'ler (#iletisim, #hizmetler vb.) sitemap URL'si DEĞİLDİR.
  // Sitemap yalnızca canonical, indexlenebilir, gerçek sayfa URL'lerini içermelidir.
  // lastModified: Gerçek içerik güncelleme tarihi kullanılır — new Date() ile her build'de
  // sahte "güncellenmiş" sinyali üretmek arama motorlarına yanlış bilgi verir.
  return [
    {
      url: baseUrl,
      lastModified: "2026-09-18",
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
