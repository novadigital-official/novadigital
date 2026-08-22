/* ═══════════════════════════════════════════════════════════════
   NOVA DIGITAL — SİTE KONFİGÜRASYONU (config.js)
   ───────────────────────────────────────────────────────────────
   Tüm iletişim bilgileri, paket fiyatları, analitik ve dijital pazarlama
   takip sistemleri bu dosyadan yönetilir.
   ═══════════════════════════════════════════════════════════════ */

const SITE_CONFIG = {

    // ─── Firma Bilgileri ─────────────────────────────────────
    firma: {
        ad:       "Nova Digital",
        slogan:   "Dijital Çözümler",
        unvan:    "Nova Digital Yazılım & Dijital Pazarlama",
        adres:    "Antalya & Kocaeli / Türkiye",
        eposta:   "info@novadigital.com.tr",
        telefon:  "+90 507 087 17 89",
    },

    // ─── WhatsApp ────────────────────────────────────────────
    whatsapp: {
        numara:   "905070871789",
        mesaj:    "Merhaba, Nova Digital hizmetleriniz hakkında bilgi almak istiyorum.",
    },

    // ─── Sosyal Medya ────────────────────────────────────────
    sosyal: {
        instagram: "https://instagram.com/novadigitalllll",
        threads:   "https://threads.net/@novadigitalllll",
    },

    // ─── Dijital Pazarlama, Analiz & Takip Kodları (GTM, GA4, Ads, Meta, Clarity) ─
    tracking: {
        ga4Id:                 "G-8Q9GMZWFK6",                             // Google Analytics 4 ID
        gtmId:                 "GTM-W9MKQLGP",                           // Google Tag Manager ID
        googleAdsId:           "AW-549184982",                            // Google Ads Global Site Tag
        googleAdsConversionId: "AW-NOVADIGITAL/form_submit_conv",          // Google Ads Conversion ID
        metaPixelId:           "2904049929937214",                           // Meta Pixel (FB/IG) ID
        clarityId:             "clarity-novadigital",                       // Microsoft Clarity ID
        searchConsoleMeta:     "google-site-verification=ksJLIBROnT_hba5bZMxV-sHA63Afc5RRF2J-gqphWuA", // GSC Doğrulama
    },

    // ─── Web Sitesi Paketleri (Stratejik Konumlandırma) ──────
    // Merdiven: 4.999 (giriş) → 14.999 (ana satış) → 39.999 (premium)
    paketler: {
        baslangic: {
            ad:         "Başlangıç Web Sitesi",
            altBaslik:  "Dijitalde İlk Adım",
            fiyat:      "4.999",
            birim:      "TL",
            aciklama:   "Küçük işletmeler ve kişisel markalar için hızlı, modern ve mobil uyumlu web sitesi.",
            kimlerIcin: [
                "Kuaför",
                "Güzellik Merkezi",
                "Cafe & Restoran",
                "Butik",
                "Emlak Danışmanı",
                "Yerel işletmeler",
            ],
            teslim:     "2-3 Gün İçinde Yayında",
            cta:        "Teklif Al",
            odeme:      "2.500 TL ön ödeme + 2.499 TL teslimde",
            ozellikler: [
                "Mobil uyumlu özel tasarım",
                "Firma tanıtım sayfaları",
                "WhatsApp iletişim entegrasyonu",
                "Google Harita bağlantısı",
                "Temel SEO ayarları",
                "SSL & hızlı yayın altyapısı",
                "15 gün teknik destek",
            ],
        },
        kurumsal: {
            ad:         "Kurumsal Web Sistemi",
            altBaslik:  "Markanızı Dijitalde Güçlendirin",
            fiyat:      "14.999",
            birim:      "TL",
            rozet:      "En Çok Tercih Edilen",
            aciklama:   "Profesyonel görünüm, yönetilebilir altyapı ve Google görünürlüğü isteyen işletmeler için.",
            kimlerIcin: [
                "Hukuk Büroları",
                "Oteller",
                "İnşaat Firmaları",
                "Mimarlık Ofisleri",
                "Sağlık Merkezleri",
                "Danışmanlık Şirketleri",
                "Üretici Firmalar",
            ],
            teslim:     "3-7 Gün İçinde Teslim",
            cta:        "Detayları İncele",
            odeme:      "7.500 TL ön ödeme + 7.499 TL teslimde",
            ozellikler: [
                "Başlangıç paketindeki tüm özellikler",
                "Yönetim paneli",
                "Hizmet ve içerik yönetimi",
                "Blog sistemi",
                "Gelişmiş SEO altyapısı",
                "Google Analytics kurulumu",
                "Form ve müşteri talepleri yönetimi",
                "30 gün teknik destek",
            ],
        },
        premium: {
            ad:         "Premium Dijital Sistem",
            altBaslik:  "Web + E-Ticaret + Müşteri Yönetimi",
            fiyat:      "39.999",
            birim:      "TL",
            aciklama:   "Satış yapmak, müşteri toplamak ve dijital operasyon kurmak isteyen işletmeler için gelişmiş çözüm.",
            kimlerIcin: [
                "Sağlık Turizmi",
                "Klinikler",
                "Güzellik Merkezleri",
                "E-Ticaret Markaları",
                "Oteller",
                "Gayrimenkul Firmaları",
                "Kozmetik Markaları",
                "Tekstil Firmaları",
                "Üretici Firmalar",
            ],
            teslim:     "7-15 Gün İçinde Teslim",
            cta:        "Projemizi Konuşalım",
            odeme:      "20.000 TL ön ödeme + 19.999 TL teslimde",
            ozellikler: [
                "Premium özel tasarım",
                "Kurumsal web sistemi altyapısı",
                "E-ticaret mağazası",
                "Online ödeme entegrasyonu",
                "Ürün ve stok yönetimi",
                "CRM müşteri takip sistemi",
                "Kampanya yönetimi",
                "Çoklu dil altyapısı",
                "SEO & performans optimizasyonu",
                "WhatsApp satış entegrasyonu",
                "60 gün teknik destek",
            ],
        },
    },
};
