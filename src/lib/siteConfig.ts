/**
 * siteConfig.ts — Central Configuration for Evenza
 * ─────────────────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for domain, brand, legal, NAP (Name, Address, Phone),
 * geo coordinates, social channels, founders, and defaults.
 *
 * To change the domain or contact details later, edit this file ONLY.
 */

export const siteConfig = {
  // Domain & Site
  SITE_URL: "https://evenzaa-sable.vercel.app",
  name: "Evenza Hospitality Services",
  shortName: "Evenza",
  tagline: "India's Premier Event Manpower & Hospitality Partner",
  description:
    "Hire trained event manpower, volunteers, and hospitality staff in Jaipur, Rajasthan, and across India. Fast deployment for weddings, corporate summits, exhibitions, concerts, and sports events.",

  // Legal & Parent Company
  legalName: "Shree Ji Company Pvt. Ltd.",
  foundingYear: "2024",

  // NAP (Name, Address, Phone) — exact and consistent everywhere
  address: {
    streetAddress: "Choti Chaupad",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302002",
    addressCountry: "IN",
    landmark: "Near City Palace, Jaipur",
  },
  geo: {
    latitude: 26.9124,
    longitude: 75.7873,
  },
  openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 09:00-21:00",
  openingHoursSpecification: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  priceRange: "₹₹",

  // Contact Points
  phone: "+91 91617 10849",
  phoneTel: "+919161710849",
  phoneSecondary: "+91 92194 65819",
  phoneSecondaryTel: "+919219465819",
  phoneShlok: "+91 80819 45789",
  phoneShlokTel: "+918081945789",
  whatsapp: "919161710849",
  whatsappUrl: "https://wa.me/919161710849",
  email: "indiaevenza@gmail.com",

  // Founders & E-E-A-T
  founders: [
    {
      name: "Shlok Aggarwal",
      jobTitle: "Founder & Director",
      url: "https://www.linkedin.com/in/evenza-india",
      sameAs: [
        "https://www.linkedin.com/in/evenza-india",
        "https://instagram.com/evenzaevent",
      ],
      image: "https://evenzaa-sable.vercel.app/og-image.jpg",
    },
    {
      name: "Stuti Shukla",
      jobTitle: "Co-Founder & Operations Lead",
      url: "https://instagram.com/evenzaevent",
      sameAs: ["https://instagram.com/evenzaevent"],
      image: "https://evenzaa-sable.vercel.app/og-image.jpg",
    },
  ],

  // Social Channels
  social: {
    instagram: "https://instagram.com/evenzaevent",
    facebook: "https://www.facebook.com/people/Evenza-India/61591730651713/",
    threads: "https://www.threads.com/@evenzaevent",
    linkedin: "https://www.linkedin.com/in/evenza-india",
    telegram: "https://t.me/+78a-D_drgro2MTk1",
  },

  // Assets
  logo: "/evenza-profile-small.webp",
  logoFull: "/evenza-profile.png",
  defaultOgImage: "/og-image.jpg",
  defaultOgWidth: 1200,
  defaultOgHeight: 630,

  // Knowledge & Authority
  knowsAbout: [
    "Event Manpower",
    "Hospitality Staffing",
    "Event Volunteers",
    "Destination Wedding Staffing",
    "Concert Backstage Crew",
    "Corporate Event Staffing",
    "Exhibition Booth Staff",
    "Tour Management",
    "Crowd Control & Ushering",
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export const SITE_CONFIG = {
  ...siteConfig,
  url: siteConfig.SITE_URL,
  businessName: siteConfig.name,
};

export default siteConfig;
