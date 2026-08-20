export interface CaseStudy {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  eventType: string;
  location: string;
  date: string;
  client?: string;
  manpowerSupplied: string;
  thumbnail: string;
  images: string[];
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "royal-destination-wedding-jaipur",
    title: "Managing 1,000+ Guests at a Jaipur Royal Destination Wedding",
    seoTitle: "Wedding Hospitality Case Study Jaipur | Evenza",
    metaDescription: "See how Evenza managed RSVP, luggage, and hospitality for a 1,000+ guest royal destination wedding at Rambagh Palace, Jaipur.",
    eventType: "Destination Wedding",
    location: "Jaipur, Rajasthan",
    date: "December 2025",
    manpowerSupplied: "65+ Hospitality & Logistics Staff",
    thumbnail: "https://evenzaa-sable.vercel.app/placeholder.svg",
    images: [],
    challenge: "Managing arrivals for 1,000+ VIP guests across 5 different hotels in Jaipur, ensuring seamless RSVP tracking, luggage handling, and 24/7 shadow support for the bride and groom's immediate family.",
    solution: "Evenza deployed a multi-tier team: Airport welcome executives, hotel check-in coordinators, luggage handlers, and dedicated shadow staff. We used a centralized digital RSVP system to track guest movements in real-time.",
    result: "Zero luggage misplacements. 100% smooth check-ins. The family was able to completely enjoy the 3-day event without worrying about on-ground logistics.",
    tags: ["Wedding", "Hospitality", "RSVP Management", "VIP Handlers"],
  },
  {
    slug: "corporate-tech-summit-jecc",
    title: "On-Ground Execution for a Major Tech Summit in Rajasthan",
    seoTitle: "Corporate Event Manpower Case Study JECC | Evenza",
    metaDescription: "Evenza provided registration staff, ushers, and technical event crew for a 2,000-delegate tech summit at JECC, Jaipur.",
    eventType: "Corporate Summit",
    location: "JECC, Jaipur",
    date: "February 2026",
    manpowerSupplied: "40+ Event Volunteers & Registration Staff",
    thumbnail: "https://evenzaa-sable.vercel.app/placeholder.svg",
    images: [],
    challenge: "A rapidly growing tech summit needed tech-savvy volunteers capable of handling high-speed digital registrations, QR code badge printing, and crowd flow management for 2,000 delegates over 2 days.",
    solution: "We deployed bilingual, college-educated event volunteers trained specifically on the client's event app. A dedicated Evenza supervisor managed rotational shifts to ensure registration desks were never understaffed.",
    result: "Average check-in time was reduced to under 45 seconds per delegate. The client praised the proactive nature and tech-literacy of the Evenza crew.",
    tags: ["Corporate Event", "Registration", "Event Volunteers", "Tech Staff"],
  },
  {
    slug: "live-music-concert-crew",
    title: "Backstage & Crowd Management for an International Concert",
    seoTitle: "Concert Manpower Case Study Rajasthan | Evenza",
    metaDescription: "Discover how Evenza supplied robust event crew, security support, and backstage runners for an international live music concert.",
    eventType: "Live Concert",
    location: "Jaipur, Rajasthan",
    date: "March 2026",
    manpowerSupplied: "50+ Event Crew & Runners",
    thumbnail: "https://evenzaa-sable.vercel.app/placeholder.svg",
    images: [],
    challenge: "A high-energy international concert required robust backstage runners, artist liaison support, barricade management, and F&B service staff capable of working in a high-pressure, loud environment.",
    solution: "Evenza provided a specialized heavy-duty logistics crew alongside refined hospitality staff for the VIP lounges. Our teams were briefed on emergency protocols and crowd de-escalation.",
    result: "Seamless backstage operations and a secure, well-managed VIP section, leading to the event agency retaining Evenza as their exclusive manpower partner for Rajasthan.",
    tags: ["Concert", "Event Crew", "Runners", "VIP Hospitality"],
  }
];
