// Google Analytics 4 (GA4) Custom Event Tracking Helper

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        ...params,
        timestamp: new Date().toISOString(),
      });
    } else if (process.env.NODE_ENV === "development") {
      console.log(`[GA4 Event] ${eventName}:`, params);
    }
  } catch (err) {
    // Fail silently so tracking never disrupts UX
  }
}

export const Analytics = {
  formSubmit: (formName: string, meta: Record<string, any> = {}) => {
    trackEvent("form_submit", {
      form_name: formName,
      ...meta,
    });
  },

  clickWhatsApp: (source: string, prefillText?: string) => {
    trackEvent("click_whatsapp", {
      source,
      prefill_length: prefillText?.length || 0,
    });
  },

  clickCall: (source: string, phone: string) => {
    trackEvent("click_call", {
      source,
      phone,
    });
  },

  clickEmail: (source: string) => {
    trackEvent("click_email", {
      source,
    });
  },

  viewServicePage: (service: string, city?: string) => {
    trackEvent("view_service_page", {
      service,
      city: city || "Jaipur",
    });
  },
};
