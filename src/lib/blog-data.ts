import { SITE_CONFIG } from "./siteConfig";

export interface BlogSection {
  heading: string;
  id: string;
  content: string;
  list?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  datePublished: string;
  dateModified: string;
  author: {
    name: string;
    role: string;
    url: string;
    id: string;
  };
  category: string;
  readingTime: string;
  leadParagraph: string;
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  relatedServices: { label: string; path: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "event-manpower-cost-jaipur",
    title: "Event Manpower Cost in Jaipur: Complete 2026 Price Guide",
    seoTitle: "Event Manpower Cost in Jaipur: 2026 Price Guide | Evenza",
    metaDescription: "How much does event staff cost in Jaipur? Compare 2026 daily rates for hospitality hostesses, volunteers, bouncers, and tour managers. Transparent price ranges.",
    datePublished: "2026-10-10",
    dateModified: "2026-10-29",
    author: {
      name: "Shlok Aggarwal",
      role: "Co-Founder, Evenza",
      url: `${SITE_CONFIG.url}/about`,
      id: `${SITE_CONFIG.url}/about#shlok`,
    },
    category: "Cost & Budgeting",
    readingTime: "5 min read",
    leadParagraph:
      "Event manpower cost in Jaipur typically ranges from ₹800 to ₹3,500 per person per 8-hour shift, depending on whether you require general event volunteers, groomed hospitality hostesses, technical backstage runners, or senior tour managers. Hiring directly through a licensed agency with on-ground supervisors prevents unexpected overtime charges and ensures verified staff conduct.",
    sections: [
      {
        heading: "What Factors Determine Event Staff Pricing in Jaipur?",
        id: "pricing-factors",
        content:
          "Staffing costs in Rajasthan are primarily driven by four variables: role specialization, shift duration, attire specifications, and venue location. General registration runners command lower day rates, whereas bilingual hospitality hostesses fluent in English and Hindi for heritage destination weddings require higher compensation.",
        list: [
          "Role Complexity: Highly trained VIP hostesses vs general queue volunteers.",
          "Shift Timing: Standard daytime shifts (8 hours) vs overnight concert load-outs.",
          "Location & Logistics: Venues within Jaipur city limits vs outstation destination resorts in Kukas, Jamwaramgarh, or Pushkar requiring crew transport.",
          "Supervision Ratio: Having a dedicated supervisor on-site eliminates coordination overhead for the event planner.",
        ],
      },
      {
        heading: "2026 Event Staff Rate Card for Jaipur & Rajasthan",
        id: "rate-card",
        content:
          "Below is an indicative benchmark of daily rates per crew member for standard 8-hour shifts across corporate events, luxury weddings, and concerts in Jaipur:",
        table: {
          headers: ["Role", "Typical Shift", "Estimated Rate (₹ / Day)", "Best Suited For"],
          rows: [
            ["Event Volunteer / Usher", "8 Hours", "₹800 – ₹1,200", "Conferences, badge scanning, marathons"],
            ["Hospitality Hostess", "8–10 Hours", "₹1,500 – ₹2,500", "Destination weddings, VIP lounges, galas"],
            ["Backstage / Concert Crew", "8–12 Hours", "₹1,200 – ₹2,000", "Stage props, cable running, band support"],
            ["Bouncer / Crowd Marshal", "8 Hours", "₹1,800 – ₹3,000", "Barricade security, gate entry, VIP safety"],
            ["Tour Manager / Escort", "Full Day", "₹2,500 – ₹4,500", "MICE group transfers, Rajasthan tour escorts"],
            ["On-Ground Operations Lead", "Full Day", "Included (8+ staff)", "End-to-end team management & client liaison"],
          ],
        },
      },
      {
        heading: "How to Avoid Hidden Manpower Costs",
        id: "avoid-hidden-costs",
        content:
          "When hiring temporary manpower for events, unexpected charges often arise from meal allowances, late-night drop-offs, and unbriefed overtime. Always insist on a line-item quotation that clearly states meal provisions, overtime hourly caps, and travel arrangements before signing an agreement.",
      },
    ],
    faqs: [
      {
        q: "Is an on-ground supervisor included in the staffing quote?",
        a: "At Evenza, any deployment of 8 or more crew members includes a dedicated on-ground supervisor at no additional charge to handle briefings, check-ins, and shift rotations.",
      },
      {
        q: "What payment terms apply to event staffing in Jaipur?",
        a: "Industry standard involves a 50% advance upon contract confirmation to lock the crew roster, with the remaining 50% settled upon successful event delivery.",
      },
    ],
    relatedServices: [
      { label: "Event Staff Pricing Guide", path: "/event-staff-pricing-jaipur" },
      { label: "Event Manpower in Jaipur", path: "/event-manpower-jaipur" },
      { label: "Hospitality Staff Jaipur", path: "/hospitality-staff-jaipur" },
    ],
  },
  {
    slug: "how-many-hospitality-staff-for-wedding",
    title: "How Many Hospitality Staff Do You Need for a Wedding? (Staffing Ratios)",
    seoTitle: "Wedding Hospitality Staff Ratio Guide (By Guest Count) | Evenza",
    metaDescription: "Calculate exact wedding hospitality staff needed for 200, 500, or 1000+ guest weddings. Staffing ratios for airport desks, hotel check-ins, and sangeet.",
    datePublished: "2026-10-18",
    dateModified: "2026-10-29",
    author: {
      name: "Stuti Shukla",
      role: "Co-Founder, Evenza",
      url: `${SITE_CONFIG.url}/about`,
      id: `${SITE_CONFIG.url}/about#stuti`,
    },
    category: "Wedding Planning",
    readingTime: "6 min read",
    leadParagraph:
      "For a 500-guest destination wedding in Jaipur or Rajasthan, you typically need 16 to 24 hospitality staff, including 4 airport coordinators, 6 hotel check-in desk hosts, 8 dining and venue ushers, 2 dedicated bride/groom shadow managers, and 2 senior supervisors. Proper staffing ratios ensure guests never wait in lobby queues and family members can enjoy the wedding stress-free.",
    sections: [
      {
        heading: "Key Hospitality Touchpoints at a Destination Wedding",
        id: "wedding-touchpoints",
        content:
          "Destination weddings in heritage palaces like Rambagh Palace, Leela Palace, or Fairmont Jaipur have extensive physical layouts. Hospitality teams are organized around four core touchpoints:",
        list: [
          "Arrivals & Transit: Welcoming guests at Jaipur International Airport (JAI) or railway stations with name boards and managing tempo traveler / coach luggage loading.",
          "Hotel Hospitality Desk: Distributing personalized welcome letters, room key cards, traditional tikka welcomes, and managing baggage delivery directly to guest suites.",
          "Event Venue Ushering: Guiding guests between separate lawns for Mehendi, Sangeet, and Varmala, plus distributing sangeet props and shawls during winter evenings.",
          "Personal Shadows: Dedicated crew members who stay exclusively with the bride, groom, and key parents to handle water, makeup retouches, timings, and urgent requests.",
        ],
      },
      {
        heading: "Recommended Staff-to-Guest Ratios by Wedding Scale",
        id: "staff-ratios",
        content:
          "Use the following recommended ratios as a practical planning guideline for luxury weddings across Rajasthan:",
        table: {
          headers: ["Guest Count", "Hospitality Desk", "Venue Ushers", "Luggage / Shadows", "Total Crew Recommended"],
          rows: [
            ["150 – 250 Guests", "4 Hosts", "4 Ushers", "2 Runners + 1 Shadow", "11 Crew + 1 Supervisor"],
            ["250 – 500 Guests", "6 Hosts", "8 Ushers", "4 Runners + 2 Shadows", "20 Crew + 2 Supervisors"],
            ["500 – 1,000 Guests", "10 Hosts", "16 Ushers", "8 Runners + 4 Shadows", "38 Crew + 3 Supervisors"],
            ["1,000+ Guests", "Custom Allocation", "Custom Allocation", "Custom Allocation", "50+ Crew with Zonal Leads"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "What is the role of a bride/groom shadow manager?",
        a: "A shadow manager is a trusted, polite hospitality professional who stays 2 to 3 steps away from the bride or groom at all times, carrying emergency kits, coordinating stage cues, and ensuring family needs are promptly met.",
      },
      {
        q: "Do wedding hospitality staff work multi-day shifts?",
        a: "Yes. For 3-day destination weddings, staff are scheduled in structured shifts with designated rest periods and uniform rotations to maintain fresh energy throughout the celebration.",
      },
    ],
    relatedServices: [
      { label: "Wedding Event Staff Jaipur", path: "/wedding-event-staff-jaipur" },
      { label: "Hospitality Staff Jaipur", path: "/hospitality-staff-jaipur" },
      { label: "Tour Managers Rajasthan", path: "/tour-managers-rajasthan" },
    ],
  },
  {
    slug: "event-volunteer-vs-paid-staff",
    title: "Event Volunteer vs Paid Event Staff: Which Should You Choose?",
    seoTitle: "Event Volunteer vs Paid Staff: Which to Hire? | Evenza",
    metaDescription: "Comparing event volunteers vs paid professional event staff. Pros, cons, legal considerations, reliability, and cost impact for event organisers.",
    datePublished: "2026-10-22",
    dateModified: "2026-10-29",
    author: {
      name: "Shlok Aggarwal",
      role: "Co-Founder, Evenza",
      url: `${SITE_CONFIG.url}/about`,
      id: `${SITE_CONFIG.url}/about#shlok`,
    },
    category: "Management Insights",
    readingTime: "4 min read",
    leadParagraph:
      "Choose event volunteers for high-volume, community-focused tasks like marathon water stations, college fest ushering, or trade expo badge scanning where enthusiasm and learning are primary motivators. Choose paid professional event staff for guest-critical roles like luxury wedding hospitality, VIP dignitary management, and technical concert stage handling where zero-margin-for-error and strict accountability are mandatory.",
    sections: [
      {
        heading: "Direct Comparison: Volunteers vs Professional Manpower",
        id: "comparison-table",
        content:
          "Understanding the operational tradeoffs between student volunteers and paid professionals prevents common event-day failures:",
        table: {
          headers: ["Attribute", "Event Volunteers", "Paid Professional Staff"],
          rows: [
            ["Primary Motivation", "Experience, networking, certificates", "Professional remuneration & career growth"],
            ["Attendance Reliability", "80% – 90% (attrition risk)", "99%+ with contracted backup guarantees"],
            ["Training Required", "Requires 1–2 hours briefing on site", "Pre-trained in etiquette and role protocols"],
            ["Supervision Need", "Requires 1 lead per 8–10 volunteers", "Self-managing with standard supervisor ratio"],
            ["Best Event Types", "Marathons, literature festivals, expos", "Weddings, AGMs, VIP galas, concerts"],
          ],
        },
      },
      {
        heading: "The Hybrid Model: Best of Both Worlds",
        id: "hybrid-model",
        content:
          "At Evenza, large conferences and festivals frequently employ a hybrid staffing structure. Senior hospitality leads and supervisors are deployed as paid professionals to manage critical zones, while student volunteers handle registration queues and direction guidance under direct supervision. This provides cost efficiency while ensuring high operational rigor.",
      },
    ],
    faqs: [
      {
        q: "Can Evenza supply both volunteers and paid staff?",
        a: "Yes. Evenza provides fully managed volunteer cohorts with certified attendance as well as seasoned, groomed hospitality professionals across Rajasthan and India.",
      },
      {
        q: "Do Evenza volunteers receive compensation?",
        a: "Evenza ensures all volunteers receive verified certificates, meals, branded event kits, and travel stipends for full-day event commitments.",
      },
    ],
    relatedServices: [
      { label: "Event Volunteers in Jaipur", path: "/event-volunteers-jaipur" },
      { label: "Event Manpower in Jaipur", path: "/event-manpower-jaipur" },
      { label: "Join Our Team", path: "/join-our-team" },
    ],
  },
];
