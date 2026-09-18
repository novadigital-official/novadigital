import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // OAI-SearchBot: ChatGPT Search'te içerik indeksleme ve alıntı için kritik (OpenAI resmi dok.)
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      // GPTBot: OpenAI genel web tarayıcısı
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      // ChatGPT-User: ChatGPT browsing modu
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      // PerplexityBot: Perplexity AI arama
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // ClaudeBot: Anthropic Claude arama tarayıcısı
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      // anthropic-ai: Anthropic genel tarayıcısı
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      // Google-Extended: Gemini model eğitimi / grounding kontrolü
      // NOT: Google Search sıralamasını ETKİLEMEZ — sadece Gemini eğitimi için
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
    ],
    sitemap: "https://novadigital.com.tr/sitemap.xml",
  };
}
