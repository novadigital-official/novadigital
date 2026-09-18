/**
 * useAnalytics — Merkezi GA4 Event Tracking Hook
 *
 * NOVA GLOBAL portföyü için lead attribution tracking.
 * Her site kendi GTM/GA4 ID'siyle çalışır; eventler tutarlı.
 *
 * Tracked Events:
 *   - tel_click        : Telefon linki tıklaması
 *   - whatsapp_click   : WhatsApp butonu/linki tıklaması
 *   - form_submit      : İletişim formu gönderimi
 *   - quote_request    : Teklif/keşif talebi
 *   - cta_click        : Hero/pakete tıklama (hangi CTA bilinmeli)
 *
 * Usage:
 *   const { trackTel, trackWhatsApp, trackFormSubmit } = useAnalytics();
 *   <a href="tel:..." onClick={() => trackTel({ source: 'hero', site: 'nova-digital' })} />
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

interface EventParams {
  /** Hangi site (attribution için kritik) */
  site: string;
  /** Sayfanın hangi bölümünden (hero, footer, sticky-bar, faq, packages) */
  source?: string;
  /** Hangi hizmet bağlamında (web-tasarim, e-ticaret, google-ads, vb.) */
  service?: string;
  /** Varyant (A/B test için) */
  variant?: string;
  /** Ek serbest alan */
  [key: string]: unknown;
}

function gtag_event(eventName: string, params: EventParams) {
  if (typeof window === "undefined") return;
  if (window.gtag) {
    window.gtag("event", eventName, params);
  } else if (window.dataLayer) {
    // GTM dataLayer fallback
    window.dataLayer.push({ event: eventName, ...params });
  }
}

export function useAnalytics() {
  /**
   * Telefon tıklaması — tel: link onClick'te çağır
   */
  function trackTel(params: EventParams) {
    gtag_event("tel_click", {
      ...params,
      event_category: "lead_action",
      event_label: `tel_click__${params.site}__${params.source ?? "unknown"}`,
    });
  }

  /**
   * WhatsApp tıklaması — wa.me link onClick'te çağır
   */
  function trackWhatsApp(params: EventParams) {
    gtag_event("whatsapp_click", {
      ...params,
      event_category: "lead_action",
      event_label: `wa_click__${params.site}__${params.source ?? "unknown"}`,
    });
  }

  /**
   * Form gönderimi — handleSubmit içinde onSubmit'te çağır
   */
  function trackFormSubmit(params: EventParams & { service_selected?: string }) {
    gtag_event("form_submit", {
      ...params,
      event_category: "lead_action",
      event_label: `form_submit__${params.site}__${params.service_selected ?? "unknown"}`,
    });
  }

  /**
   * Teklif/keşif talebi — paket CTA butonlarında çağır
   */
  function trackQuoteRequest(params: EventParams & { package_name?: string; package_price?: string }) {
    gtag_event("quote_request", {
      ...params,
      event_category: "lead_action",
      event_label: `quote__${params.site}__${params.package_name ?? "unknown"}`,
    });
  }

  /**
   * Genel CTA tıklaması — hero butonu, paket, vs.
   */
  function trackCTA(params: EventParams & { cta_text?: string }) {
    gtag_event("cta_click", {
      ...params,
      event_category: "engagement",
      event_label: `cta__${params.site}__${params.cta_text ?? "unknown"}`,
    });
  }

  return { trackTel, trackWhatsApp, trackFormSubmit, trackQuoteRequest, trackCTA };
}
