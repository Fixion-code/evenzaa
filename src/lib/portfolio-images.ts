/**
 * portfolio-images.ts — Evenza Proof-of-Work Portfolio Data
 * ─────────────────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for all portfolio images across the entire site.
 */

export type PortfolioCategory =
  | "All"
  | "Concerts"
  | "Corporate"
  | "Exhibitions"
  | "Weddings"
  | "Festivals"
  | "Political"
  | "College"
  | "Sports";

export const PORTFOLIO_CATEGORIES: readonly PortfolioCategory[] = [
  "All",
  "Concerts",
  "Corporate",
  "Exhibitions",
  "Weddings",
  "Festivals",
  "Political",
  "College",
  "Sports",
];

export interface PortfolioImage {
  id: string;
  publicId: string;
  alt: string;
  caption: string;
  category: Exclude<PortfolioCategory, "All">;
  eventName: string;
  location: string;
  teamSize?: string;
  width: number;
  height: number;
  isFeatured?: boolean;
}

export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  {
    id: "concert-backstage-crew-jaipur",
    publicId: "evenza/concerts/concert-backstage-crew-jaipur",
    category: "Concerts",
    eventName: "Concert Backstage Crew",
    location: "Jaipur",
    alt: "Evenza Concert Backstage Crew team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional concert backstage crew managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    isFeatured: true,
  },
  {
    id: "concert-event-manpower-jaipur",
    publicId: "evenza/concerts/concert-event-manpower-jaipur",
    category: "Concerts",
    eventName: "Concert Manpower",
    location: "Jaipur",
    alt: "Evenza Concert Manpower team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional concert manpower managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "conference-onground-operations-team-jaipur",
    publicId: "evenza/corporate/conference-onground-operations-team-jaipur",
    category: "Corporate",
    eventName: "Conference Onground Operations Team",
    location: "Jaipur",
    alt: "Evenza Conference Onground Operations Team team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional conference onground operations team managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    isFeatured: true,
  },
  {
    id: "corporate-conference-registration-staff-jaipur",
    publicId: "evenza/corporate/corporate-conference-registration-staff-jaipur",
    category: "Corporate",
    eventName: "Corporate Conference Registration Staff",
    location: "Jaipur",
    alt: "Evenza Corporate Conference Registration Staff team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional corporate conference registration staff managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "corporate-conference-team-jaipur",
    publicId: "evenza/corporate/corporate-conference-team-jaipur",
    category: "Corporate",
    eventName: "Corporate Conference Team",
    location: "Jaipur",
    alt: "Evenza Corporate Conference Team team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional corporate conference team managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "corporate-event-backstage-management-jaipur",
    publicId: "evenza/corporate/corporate-event-backstage-management-jaipur",
    category: "Corporate",
    eventName: "Corporate Backstage Management",
    location: "Jaipur",
    alt: "Evenza Corporate Backstage Management team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional corporate backstage management managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "corporate-event-badge-distribution-jaipur",
    publicId: "evenza/corporate/corporate-event-badge-distribution-jaipur",
    category: "Corporate",
    eventName: "Corporate Badge Distribution",
    location: "Jaipur",
    alt: "Evenza Corporate Badge Distribution team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional corporate badge distribution managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "corporate-event-desk-management-jaipur",
    publicId: "evenza/corporate/corporate-event-desk-management-jaipur",
    category: "Corporate",
    eventName: "Corporate Desk Management",
    location: "Jaipur",
    alt: "Evenza Corporate Desk Management team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional corporate desk management managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "corporate-event-ground-operations-jaipur",
    publicId: "evenza/corporate/corporate-event-ground-operations-jaipur",
    category: "Corporate",
    eventName: "Corporate Ground Operations",
    location: "Jaipur",
    alt: "Evenza Corporate Ground Operations team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional corporate ground operations managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "corporate-event-help-desk-team-jaipur",
    publicId: "evenza/corporate/corporate-event-help-desk-team-jaipur",
    category: "Corporate",
    eventName: "Corporate Help Desk Team",
    location: "Jaipur",
    alt: "Evenza Corporate Help Desk Team team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional corporate help desk team managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "corporate-event-in-jaipur",
    publicId: "evenza/corporate/corporate-event-in-jaipur",
    category: "Corporate",
    eventName: "Corporate In",
    location: "Jaipur",
    alt: "Evenza Corporate In team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional corporate in managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "corporate-event-in-jaipur1",
    publicId: "evenza/corporate/corporate-event-in-jaipur1",
    category: "Corporate",
    eventName: "Corporate In1",
    location: "Jaipur",
    alt: "Evenza Corporate In1 team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional corporate in1 managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "corporate-event-kit-distribution-staff-jaipur",
    publicId: "evenza/corporate/corporate-event-kit-distribution-staff-jaipur",
    category: "Corporate",
    eventName: "Corporate Kit Distribution Staff",
    location: "Jaipur",
    alt: "Evenza Corporate Kit Distribution Staff team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional corporate kit distribution staff managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "corporate-event-navigation-staff-jaipur",
    publicId: "evenza/corporate/corporate-event-navigation-staff-jaipur",
    category: "Corporate",
    eventName: "Corporate Navigation Staff",
    location: "Jaipur",
    alt: "Evenza Corporate Navigation Staff team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional corporate navigation staff managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "corporate-event-registration-team-jaipur",
    publicId: "evenza/corporate/corporate-event-registration-team-jaipur",
    category: "Corporate",
    eventName: "Corporate Registration Team",
    location: "Jaipur",
    alt: "Evenza Corporate Registration Team team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional corporate registration team managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "corporate-event-volunteers-rajasthan",
    publicId: "evenza/corporate/corporate-event-volunteers-rajasthan",
    category: "Corporate",
    eventName: "Corporate Volunteers",
    location: "Rajasthan",
    alt: "Evenza Corporate Volunteers team in Rajasthan, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional corporate volunteers managed by Evenza's experienced hospitality and on-ground operations team in Rajasthan.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "destination-wedding-hospitality-rajasthan",
    publicId: "evenza/weddings/destination-wedding-hospitality-rajasthan",
    category: "Weddings",
    eventName: "Destination Wedding Hospitality",
    location: "Rajasthan",
    alt: "Evenza Destination Wedding Hospitality team in Rajasthan, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional destination wedding hospitality managed by Evenza's experienced hospitality and on-ground operations team in Rajasthan.",
    width: 1200,
    height: 800,
    isFeatured: true,
  },
  {
    id: "destination-wedding-logistics-crew-jaipur",
    publicId: "evenza/weddings/destination-wedding-logistics-crew-jaipur",
    category: "Weddings",
    eventName: "Destination Wedding Logistics Crew",
    location: "Jaipur",
    alt: "Evenza Destination Wedding Logistics Crew team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional destination wedding logistics crew managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "event-backstage-crew-jaipur",
    publicId: "evenza/festivals/event-backstage-crew-jaipur",
    category: "Festivals",
    eventName: "Backstage Crew",
    location: "Jaipur",
    alt: "Evenza Backstage Crew team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional backstage crew managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    isFeatured: true,
  },
  {
    id: "event-gift-distribution-team-jaipur",
    publicId: "evenza/festivals/event-gift-distribution-team-jaipur",
    category: "Festivals",
    eventName: "Gift Distribution Team",
    location: "Jaipur",
    alt: "Evenza Gift Distribution Team team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional gift distribution team managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "event-help-desk-staff-rajasthan",
    publicId: "evenza/exhibitions/event-help-desk-staff-rajasthan",
    category: "Exhibitions",
    eventName: "Help Desk Staff",
    location: "Rajasthan",
    alt: "Evenza Help Desk Staff team in Rajasthan, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional help desk staff managed by Evenza's experienced hospitality and on-ground operations team in Rajasthan.",
    width: 1200,
    height: 800,
    isFeatured: true,
  },
  {
    id: "event-manpower-jaipur-rajasthan",
    publicId: "evenza/festivals/event-manpower-jaipur-rajasthan",
    category: "Festivals",
    eventName: "Manpower",
    location: "Rajasthan",
    alt: "Evenza Manpower team in Rajasthan, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional manpower managed by Evenza's experienced hospitality and on-ground operations team in Rajasthan.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "event-manpower-udaipur-rajasthan",
    publicId: "evenza/festivals/event-manpower-udaipur-rajasthan",
    category: "Festivals",
    eventName: "Manpower Udaipur",
    location: "Rajasthan",
    alt: "Evenza Manpower Udaipur team in Rajasthan, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional manpower udaipur managed by Evenza's experienced hospitality and on-ground operations team in Rajasthan.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "event-on-ground-support-crew-jaipur",
    publicId: "evenza/festivals/event-on-ground-support-crew-jaipur",
    category: "Festivals",
    eventName: "On Ground Support Crew",
    location: "Jaipur",
    alt: "Evenza On Ground Support Crew team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional on ground support crew managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "event-production-support-staff-jaipur",
    publicId: "evenza/festivals/event-production-support-staff-jaipur",
    category: "Festivals",
    eventName: "Production Support Staff",
    location: "Jaipur",
    alt: "Evenza Production Support Staff team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional production support staff managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "event-promoter-team-rajasthan",
    publicId: "evenza/exhibitions/event-promoter-team-rajasthan",
    category: "Exhibitions",
    eventName: "Promoter Team",
    location: "Rajasthan",
    alt: "Evenza Promoter Team team in Rajasthan, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional promoter team managed by Evenza's experienced hospitality and on-ground operations team in Rajasthan.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "event-registration-manpower-jaipur",
    publicId: "evenza/corporate/event-registration-manpower-jaipur",
    category: "Corporate",
    eventName: "Registration Manpower",
    location: "Jaipur",
    alt: "Evenza Registration Manpower team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional registration manpower managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "event-volunteer-management-team-jaipur",
    publicId: "evenza/college/event-volunteer-management-team-jaipur",
    category: "College",
    eventName: "Volunteer Management Team",
    location: "Jaipur",
    alt: "Evenza Volunteer Management Team team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional volunteer management team managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    isFeatured: true,
  },
  {
    id: "exhibition-booth-management-staff-jaipur",
    publicId: "evenza/exhibitions/exhibition-booth-management-staff-jaipur",
    category: "Exhibitions",
    eventName: "Exhibition Booth Management Staff",
    location: "Jaipur",
    alt: "Evenza Exhibition Booth Management Staff team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional exhibition booth management staff managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "exhibition-manpower-jaipur",
    publicId: "evenza/exhibitions/exhibition-manpower-jaipur",
    category: "Exhibitions",
    eventName: "Exhibition Manpower",
    location: "Jaipur",
    alt: "Evenza Exhibition Manpower team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional exhibition manpower managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "exhibition-promoter-team-rajasthan",
    publicId: "evenza/exhibitions/exhibition-promoter-team-rajasthan",
    category: "Exhibitions",
    eventName: "Exhibition Promoter Team",
    location: "Rajasthan",
    alt: "Evenza Exhibition Promoter Team team in Rajasthan, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional exhibition promoter team managed by Evenza's experienced hospitality and on-ground operations team in Rajasthan.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "exhibition-registration-desk-team-jaipur",
    publicId: "evenza/exhibitions/exhibition-registration-desk-team-jaipur",
    category: "Exhibitions",
    eventName: "Exhibition Registration Desk Team",
    location: "Jaipur",
    alt: "Evenza Exhibition Registration Desk Team team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional exhibition registration desk team managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "exhibition-stall-management-staff-jaipur",
    publicId: "evenza/exhibitions/exhibition-stall-management-staff-jaipur",
    category: "Exhibitions",
    eventName: "Exhibition Stall Management Staff",
    location: "Jaipur",
    alt: "Evenza Exhibition Stall Management Staff team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional exhibition stall management staff managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "political-event-manpower-rajasthan",
    publicId: "evenza/political/political-event-manpower-rajasthan",
    category: "Political",
    eventName: "Political Manpower",
    location: "Rajasthan",
    alt: "Evenza Political Manpower team in Rajasthan, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional political manpower managed by Evenza's experienced hospitality and on-ground operations team in Rajasthan.",
    width: 1200,
    height: 800,
    isFeatured: true,
  },
  {
    id: "registration-team-jaipur",
    publicId: "evenza/corporate/registration-team-jaipur",
    category: "Corporate",
    eventName: "Registration Team",
    location: "Jaipur",
    alt: "Evenza Registration Team team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional registration team managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "sports-event-crowd-management-jaipur-ground-crew",
    publicId: "evenza/sports/sports-event-crowd-management-jaipur-ground-crew",
    category: "Sports",
    eventName: "Sports Crowd Management Ground Crew",
    location: "Jaipur",
    alt: "Evenza Sports Crowd Management Ground Crew team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional sports crowd management ground crew managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    isFeatured: true,
  },
  {
    id: "sports-event-crowd-management-jaipur",
    publicId: "evenza/sports/sports-event-crowd-management-jaipur",
    category: "Sports",
    eventName: "Sports Crowd Management",
    location: "Jaipur",
    alt: "Evenza Sports Crowd Management team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional sports crowd management managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "sports-event-gate-management-jaipur",
    publicId: "evenza/sports/sports-event-gate-management-jaipur",
    category: "Sports",
    eventName: "Sports Gate Management",
    location: "Jaipur",
    alt: "Evenza Sports Gate Management team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional sports gate management managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "sports-event-ground-operations-jaipur",
    publicId: "evenza/sports/sports-event-ground-operations-jaipur",
    category: "Sports",
    eventName: "Sports Ground Operations",
    location: "Jaipur",
    alt: "Evenza Sports Ground Operations team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional sports ground operations managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "sports-event-help-desk-team-jaipur",
    publicId: "evenza/sports/sports-event-help-desk-team-jaipur",
    category: "Sports",
    eventName: "Sports Help Desk Team",
    location: "Jaipur",
    alt: "Evenza Sports Help Desk Team team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional sports help desk team managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "sports-event-manpower-jaipur",
    publicId: "evenza/sports/sports-event-manpower-jaipur",
    category: "Sports",
    eventName: "Sports Manpower",
    location: "Jaipur",
    alt: "Evenza Sports Manpower team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional sports manpower managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "sports-event-registration-staff-jaipur",
    publicId: "evenza/sports/sports-event-registration-staff-jaipur",
    category: "Sports",
    eventName: "Sports Registration Staff",
    location: "Jaipur",
    alt: "Evenza Sports Registration Staff team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional sports registration staff managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "sports-tournament-event-crew-jaipur",
    publicId: "evenza/sports/sports-tournament-event-crew-jaipur",
    category: "Sports",
    eventName: "Sports Tournament Crew",
    location: "Jaipur",
    alt: "Evenza Sports Tournament Crew team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional sports tournament crew managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "wedding-all-rounder-event-staff-jaipur",
    publicId: "evenza/weddings/wedding-all-rounder-event-staff-jaipur",
    category: "Weddings",
    eventName: "Wedding All Rounder Staff",
    location: "Jaipur",
    alt: "Evenza Wedding All Rounder Staff team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional wedding all rounder staff managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "wedding-desk-management-staff-jaipur",
    publicId: "evenza/weddings/wedding-desk-management-staff-jaipur",
    category: "Weddings",
    eventName: "Wedding Desk Management Staff",
    location: "Jaipur",
    alt: "Evenza Wedding Desk Management Staff team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional wedding desk management staff managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "wedding-hospitality-team-jaipur",
    publicId: "evenza/weddings/wedding-hospitality-team-jaipur",
    category: "Weddings",
    eventName: "Wedding Hospitality Team",
    location: "Jaipur",
    alt: "Evenza Wedding Hospitality Team team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional wedding hospitality team managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
  {
    id: "wedding-welcoming-girls-jaipur",
    publicId: "evenza/weddings/wedding-welcoming-girls-jaipur",
    category: "Weddings",
    eventName: "Wedding Welcoming Girls",
    location: "Jaipur",
    alt: "Evenza Wedding Welcoming Girls team in Jaipur, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional wedding welcoming girls managed by Evenza's experienced hospitality and on-ground operations team in Jaipur.",
    width: 1200,
    height: 800,
    
  },
];

export const HOMEPAGE_GALLERY = PORTFOLIO_IMAGES.filter((img) => img.isFeatured).slice(0, 8);

export const PORTFOLIO_STATS = {
  totalImages: PORTFOLIO_IMAGES.length,
  categories: PORTFOLIO_CATEGORIES.length - 1,
};
