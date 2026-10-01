import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin, CheckCircle2, Eye, ShieldCheck, Zap, Clock, Award, Coffee, Plane } from "lucide-react";

export interface EventProofItem {
  id: string;
  title: string;
  role: string;
  category: "Corporate Event" | "Wedding Event" | "Concert Event" | "Project-Based Work" | "Sports Event";
  pay: string;
  shift: string;
  tag: string;
  image: string;
  location: string;
  perks: string[];
  proofText: string;
  crewCount: string;
  highlights: string;
  pricingNote: string;
}

export const EVENT_PROOFS: EventProofItem[] = [
  {
    id: "destination-wedding",
    title: "Royal Destination Palace Wedding",
    role: "Guest Welcome & Coordination Crew",
    category: "Wedding Event",
    pay: "₹1,300 – ₹2,500 / Day",
    shift: "Wedding Event (Multi-Day / Coordination)",
    tag: "👑 Royal Wedding",
    image: "/assets/img/portfolio/optimized/destination-wedding-hospitality-rajasthan.webp",
    location: "Udaipur & Jaipur Palaces",
    perks: [
      "Stay Covered (From Our Side)",
      "Travel Covered (From Our Side)",
      "Food Provided (From Our Side)",
      "Official Certificate Provided",
      "Dynamic Pay Based on Profile & Experience",
    ],
    proofText: "Hospitality crew welcomed luxury wedding guests, coordinated banquet arrangements, and managed royal decor operations. Full stay, travel, and food provided by Evenza.",
    crewCount: "75+ Hospitality Crew",
    highlights: "Stay + Travel + Food From Evenza • Royal Palace Experience",
    pricingNote: "₹1,300 to ₹2,500/day depending on profile and experience. Stay, travel & food 100% from our side.",
  },
  {
    id: "corporate-conference",
    title: "Rajasthan Tech Leadership Summit",
    role: "Delegate Registration & Help Desk",
    category: "Corporate Event",
    pay: "₹500 – ₹1,000 / Day",
    shift: "Corporate 12h Shift (Full Day)",
    tag: "💼 Corporate 12h Shift",
    image: "/assets/img/portfolio/optimized/corporate-conference-team-jaipur.webp",
    location: "JECC Sitapura, Jaipur",
    perks: [
      "Corporate 12h Full Day Shift",
      "Official Experience Certificate Provided",
      "Buffet Lunch & High Tea Included",
      "Corporate Resume & LinkedIn Boost",
      "Dynamic Pay Based on Experience",
    ],
    proofText: "Managed 2,500+ corporate delegate check-ins, kit distribution, and VIP attendee escorts at Jaipur Exhibition Centre. 12h full day shift with official certificate.",
    crewCount: "40+ Students Placed",
    highlights: "12h Full Day Shift • Certificate Provided • Top Corporate Networking",
    pricingNote: "₹500 to ₹1,000/day for 12h full day shift. Pricing is dynamic based on your profile & experience.",
  },
  {
    id: "concert-crew",
    title: "Sunburn Arena & Live Concerts",
    role: "Artist Hospitality & Stage Crew",
    category: "Concert Event",
    pay: "₹600 – ₹1,200 / Gig",
    shift: "Concert: Half Day Shift",
    tag: "🔥 Concert Half Day",
    image: "/assets/img/portfolio/optimized/concert-backstage-crew-jaipur.webp",
    location: "Jaipur, Rajasthan",
    perks: [
      "Concert: Half Day Shift",
      "Official Certificate Provided",
      "Free Artist Passes & Crew Meals",
      "Direct Backstage Music Industry Access",
      "Spot Cash / Fast UPI Transfer",
    ],
    proofText: "Fast-paced half-day shift managing artist greenrooms, backline support, and VIP entry. Flexible college timing with official certificate and passes.",
    crewCount: "50+ Students Hired",
    highlights: "Half Day Shift • Official Certificate • Spot Fast Payout",
    pricingNote: "Half day shift for live concerts. Fast payout with passes & certificate provided.",
  },
  {
    id: "volunteer-leads",
    title: "Evenza Youth Volunteer Network",
    role: "On-Ground Team Leads & Operations",
    category: "Project-Based Work",
    pay: "Project-Based (As Per Exp)",
    shift: "Project-Based Work (Flexible)",
    tag: "⭐ Project-Based Work",
    image: "/assets/img/portfolio/optimized/event-volunteer-management-team-jaipur.webp",
    location: "Pan-India / Rajasthan",
    perks: [
      "Project-Based Work As Per Capabilities",
      "Pricing Based on Profile & Experience",
      "Official Experience Certificate Provided",
      "Team Leadership & Freelance Career",
      "Pan-India Travel Gigs",
    ],
    proofText: "Dedicated project coordinators and supervisor roles. Compensation is project-based, tailored directly to your proven capabilities, leadership skills, and track record.",
    crewCount: "25+ Team Leads",
    highlights: "Dynamic Project-Based Pricing • Tailored to Experience & Profile",
    pricingNote: "Project-based work: pricing is decided as per your experience, profile, and capabilities.",
  },
  {
    id: "sports-tournament",
    title: "Jaipur Premier Sports Tournament",
    role: "Ground Operations & Dugout Crew",
    category: "Sports Event",
    pay: "₹600 – ₹1,200 / Day",
    shift: "Match Day Shift (Full / Half)",
    tag: "🏆 Live Sports Crew",
    image: "/assets/img/portfolio/optimized/sports-tournament-event-crew-jaipur.webp",
    location: "SMS Stadium, Jaipur",
    perks: [
      "Match Day Shifts",
      "Official Certificate Provided",
      "Official Crew Jersey & Cap",
      "Energy Drinks & Meals Included",
      "Watch the Game Live While Earning",
    ],
    proofText: "Managed player dugouts, boundary lines, ticket turnstiles, and stadium logistics at live sports matches. Official certificate and same-day payout.",
    crewCount: "60+ Ground Staff",
    highlights: "Official Certificate Provided • Stadium Access • Fast Payout",
    pricingNote: "Dynamic pay based on role and experience. Certificate & refreshments provided.",
  },
  {
    id: "corporate-kits",
    title: "Pan-India Medical & Leadership Conclave",
    role: "Registration & Kit Distribution Staff",
    category: "Corporate Event",
    pay: "₹500 – ₹1,000 / Day",
    shift: "Corporate 12h Shift (Full Day)",
    tag: "🤝 Corporate 12h Shift",
    image: "/assets/img/portfolio/optimized/corporate-event-kit-distribution-staff-jaipur.webp",
    location: "Birla Auditorium, Jaipur",
    perks: [
      "Corporate 12h Full Day Shift",
      "Official Certificate Provided",
      "Buffet Lunch & Tea Included",
      "Professional Working Environment",
      "100% Genuine — Zero Registration Fees",
    ],
    proofText: "Coordinated registration desk, kit handovers, and delegate guidance. 12h corporate full day shift with official certificate and verified safe environment.",
    crewCount: "30+ Students Placed",
    highlights: "12h Full Day Shift • Certificate Included • 100% Genuine",
    pricingNote: "₹500 to ₹1,000/day for 12h shift. Dynamic pricing based on your profile & experience.",
  },
  {
    id: "trade-expo",
    title: "JECC International Trade & Auto Expo",
    role: "Brand Promoters & Stall Coordinators",
    category: "Corporate Event",
    pay: "₹600 – ₹1,000 / Day",
    shift: "Corporate 12h Shift (Full Day)",
    tag: "🚀 Expo 12h Shift",
    image: "/assets/img/portfolio/optimized/exhibition-promoter-team-rajasthan.webp",
    location: "JECC Jaipur",
    perks: [
      "Corporate 12h Full Day Shift",
      "Official Certificate Provided",
      "Direct Client Networking",
      "Meals & Tea Included",
      "Communication Skills Practice",
    ],
    proofText: "Student promoters managed brand pavilions, attendee lead generation, product demonstrations, and catalog distribution across 3-day expos.",
    crewCount: "35+ Promoters Placed",
    highlights: "12h Full Day Shift • Certificate Included • Great For BBA/MBA",
    pricingNote: "₹500 to ₹1,000/day for corporate 12h shift based on profile & communication.",
  },
  {
    id: "wedding-welcome",
    title: "Luxury Heritage Wedding Hospitality",
    role: "Guest Welcome & VIP Ushering",
    category: "Wedding Event",
    pay: "₹1,300 – ₹2,500 / Day",
    shift: "Wedding Event (Multi-Day)",
    tag: "👑 Royal Wedding",
    image: "/assets/img/portfolio/optimized/wedding-hospitality-team-jaipur.webp",
    location: "Jaipur Heritage Palaces",
    perks: [
      "Stay Covered (From Our Side)",
      "Travel Covered (From Our Side)",
      "Food Provided (From Our Side)",
      "Official Certificate Provided",
      "Earn ₹3,900–₹7,500 Across 3 Days",
    ],
    proofText: "Welcoming international and VIP wedding guests, coordinating luggage, and managing hospitality counters. Evenza takes care of stay, travel, and food.",
    crewCount: "50+ Hospitality Crew",
    highlights: "Stay, Travel & Food From Evenza • Official Certificate",
    pricingNote: "₹1,300 to ₹2,500/day. Stay, travel, and food provided from our side.",
  },
];

interface TopProofSliderProps {
  onSelectProof: (proof: EventProofItem) => void;
}

export function TopProofSlider({ onSelectProof }: TopProofSliderProps) {
  // We duplicate the list to create a seamless infinite CSS marquee loop
  const marqueeItems = [...EVENT_PROOFS, ...EVENT_PROOFS];

  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-b from-[#2a3219] via-[#1c2211] to-[#12160b] select-none">
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a3219] via-[#1c2211] to-[#12160b] opacity-95" />

      {/* Decorative Gold Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#c89a42 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Ambient Glow Orbs */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-12 -left-12 w-48 h-48 rounded-full blur-[50px] bg-gold/20 pointer-events-none"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full blur-[60px] bg-[#67773f]/30 pointer-events-none"
      />

      {/* Left and Right Smooth Vignette Edge Masks */}
      <div className="absolute left-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-r from-[#161a0f] via-[#161a0f]/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-l from-[#161a0f] via-[#161a0f]/80 to-transparent z-20 pointer-events-none" />

      {/* Container Content */}
      <div className="relative z-10 pt-3 pb-14 sm:pb-16 flex flex-col justify-between">
        {/* Top Micro-Header / Live Ticker Strip */}
        <div className="px-4 mb-2.5 flex items-center justify-between max-w-5xl mx-auto w-full gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-bold tracking-wide uppercase text-white/90 truncate flex items-center gap-1.5">
              Live Working Manpower Proofs
              <span className="hidden sm:inline-block text-gold/80 font-normal">| Pan-India Gigs</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-gold bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold/30 shrink-0">
            <Award className="w-3 h-3 text-gold shrink-0" />
            <span className="hidden xs:inline">Dynamic Pay • </span>
            <span>Certificate Provided</span>
          </div>
        </div>

        {/* Sliding Infinite Track */}
        <div className="w-full overflow-hidden relative cursor-pointer group">
          <div className="animate-proof-marquee flex gap-3 sm:gap-4 px-2">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                onClick={() => onSelectProof(item)}
                className="w-48 sm:w-60 h-32 sm:h-36 rounded-2xl overflow-hidden relative shrink-0 border border-white/15 bg-card/10 shadow-lg hover:border-gold/60 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group/card"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading={index < 4 ? "eager" : "lazy"}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/25" />

                {/* Top Badge: Earning & Shift */}
                <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1 z-10">
                  <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-amber-300 border border-amber-400/30 flex items-center gap-1 shadow-sm truncate">
                    <span>{item.pay}</span>
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-medium px-1.5 py-0.5 rounded-md bg-emerald-500/85 backdrop-blur-md text-white shadow-sm flex items-center gap-0.5 shrink-0">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Bottom Info: Title & Shift Tag */}
                <div className="absolute bottom-2 left-2 right-2 z-10 text-left">
                  <div className="text-[10px] sm:text-[11px] font-bold text-white line-clamp-1 group-hover/card:text-gold transition-colors flex items-center gap-1">
                    {item.title}
                  </div>
                  <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-white/80 mt-0.5">
                    <span className="truncate max-w-[125px] text-amber-200/90 font-medium">
                      {item.shift}
                    </span>
                    <span className="flex items-center gap-0.5 text-white/60 shrink-0">
                      <Eye className="w-2.5 h-2.5 text-gold/80" />
                      Details
                    </span>
                  </div>
                </div>

                {/* Subtle Hover Glow Line */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Subtitle / Tap Hint */}
        <div className="px-4 mt-2 flex items-center justify-center gap-2 text-center text-[10px] sm:text-[11px] text-white/60">
          <span>👆 Tap any proof for shift timing, stay/food perks & pay details</span>
        </div>
      </div>
    </div>
  );
}
