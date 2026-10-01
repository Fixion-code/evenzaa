import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin, CheckCircle2, Eye, ShieldCheck, Award, Users, Compass, Globe, Briefcase } from "lucide-react";

export interface EventProofItem {
  id: string;
  title: string;
  role: string;
  category: "Conferences" | "Concerts" | "Sports & Gaming" | "Luxury Weddings" | "Exhibitions" | "MICE & Corporate" | "Project-Based Work" | "Sports Event";
  tag: string;
  badge: string;
  image: string;
  location: string;
  scale: string;
  perks: string[];
  proofText: string;
  audience: string;
  highlights: string;
}

export const EVENT_PROOFS: EventProofItem[] = [
  {
    id: "destination-wedding",
    title: "Luxury Palace Destination Wedding",
    role: "Guest Welcome & VIP Hospitality Crew",
    category: "Luxury Weddings",
    tag: "👑 Royal Hospitality",
    badge: "✈️ Free Stay, Travel & Food",
    image: "/assets/img/portfolio/optimized/destination-wedding-hospitality-rajasthan.webp",
    location: "Udaipur & Jaipur Palaces",
    scale: "75+ Hospitality Crew Deployed",
    audience: "Wedding Planners • Tour Managers • Volunteers",
    perks: [
      "Free 5-Star Stay & Food Covered",
      "All Outstation Travel Covered",
      "Official Experience Certificate",
      "High-Profile Networking & Luxury Exposure",
      "Multi-Day Event Operations Experience",
    ],
    proofText: "End-to-end luxury hospitality operations. Vetted student volunteers and experienced freelancers handled airport transfers, royal guest welcomes, banquet coordination, and palace hospitality.",
    highlights: "Travel & Explore While Doing Volunteering • 5-Star Luxury Experience",
  },
  {
    id: "corporate-conference",
    title: "Rajasthan Leadership & Tech Summit",
    role: "Delegate Registration & Help Desk",
    category: "Conferences",
    tag: "💼 Corporate Summit",
    badge: "🏛️ 2,500+ Delegates Managed",
    image: "/assets/img/portfolio/optimized/corporate-conference-team-jaipur.webp",
    location: "JECC Sitapura, Jaipur",
    scale: "40+ Corporate Crew",
    audience: "MICE Companies • Event Agencies • Students",
    perks: [
      "Official Experience Certificate",
      "Corporate Networking with Industry Leaders",
      "Executive Resume & LinkedIn Booster",
      "High-Tea & Buffet Meals Provided",
      "AC Hall Registration & QR Pass Coordination",
    ],
    proofText: "Managed registration counters, badge printing, and delegate navigation for India's leading corporate conclave. Ideal ground experience for management students and corporate coordinators.",
    highlights: "Real Corporate Exposure • Direct Networking with CXOs & Planners",
  },
  {
    id: "concert-crew",
    title: "Sunburn Arena & Mega Live Concerts",
    role: "Artist Hospitality & Backstage Crew",
    category: "Concerts",
    tag: "🔥 Live Concert Crew",
    badge: "🎵 Backstage Artist Access",
    image: "/assets/img/portfolio/optimized/concert-backstage-crew-jaipur.webp",
    location: "Jaipur, Rajasthan",
    scale: "50+ Production & Crowd Crew",
    audience: "Concert Promoters • Music Enthusiasts • Youth",
    perks: [
      "Live Concert Entry & Free Artist Passes",
      "Official Crew Identity Card & Certificate",
      "Artist Greenroom & Backline Coordination",
      "Crew Meals & Refreshments Provided",
      "High-Energy Live Production Skills",
    ],
    proofText: "Fast-paced live show management. Volunteers and production crew coordinated artist hospitality, backstage security escorts, stage backline, and VIP lounge entry for headline performers.",
    highlights: "Be Part of Bigger Events • Live Music Industry Hands-On Work",
  },
  {
    id: "sports-tournament",
    title: "National Cricket & Sports Tournament",
    role: "Ground Operations & Dugout Crew",
    category: "Sports & Gaming",
    tag: "🏆 Sports & Gaming Crew",
    badge: "⚡ Stadium Operations",
    image: "/assets/img/portfolio/optimized/sports-tournament-event-crew-jaipur.webp",
    location: "SMS Stadium, Jaipur",
    scale: "60+ Stadium Operations Staff",
    audience: "Sports Leagues • Gaming Brands • Sports Volunteers",
    perks: [
      "Match Day Access & Official Crew Gear",
      "Player Dugout & Boundary Management",
      "Official Experience Certificate & Recognition",
      "Energy Drinks & Crew Meals Included",
      "Dynamic Arena Crowd Management Experience",
    ],
    proofText: "Ground crew and sports volunteers managed player dugouts, boundary logistics, VIP boxes, spectator turnstiles, and live arena gaming activations.",
    highlights: "Watch the Game Live While Working • High Team Spirit",
  },
  {
    id: "trade-expo",
    title: "International Trade & Auto Expo",
    role: "Brand Promoters & Stall Coordinators",
    category: "Exhibitions",
    tag: "🚀 Mega Expo Crew",
    badge: "🤝 Top Brand Connect",
    image: "/assets/img/portfolio/optimized/exhibition-promoter-team-rajasthan.webp",
    location: "JECC Jaipur",
    scale: "35+ Brand Promoters Placed",
    audience: "Exhibition Organizers • Corporate Brands • College Youth",
    perks: [
      "Direct Brand & Exhibitor Interaction",
      "Official Certificate & Performance Letter",
      "Communication & Lead Generation Skills",
      "Buffet Meals & Beverage Coupons",
      "Flexible Shifts for College Students",
    ],
    proofText: "Student promoters and brand advocates managed major exhibition pavilions, attendee inquiries, product demonstrations, and corporate networking for multinational brands.",
    highlights: "Build Communications & Sales Skills • Connect with Top Corporates",
  },
  {
    id: "volunteer-leads",
    title: "Evenza Youth Volunteer Network",
    role: "On-Ground Team Leads & Operations",
    category: "MICE & Corporate",
    tag: "⭐ Team Lead Network",
    badge: "👥 Pan-India Youth Network",
    image: "/assets/img/portfolio/optimized/event-volunteer-management-team-jaipur.webp",
    location: "Pan-India / Rajasthan",
    scale: "1,500+ Community Members",
    audience: "Event Experts • Mediators • Experienced Freelancers",
    perks: [
      "Career Progression to Team Lead & Manager",
      "Official Leadership Certificate & Letter of Recommendation",
      "Pan-India Travel Gigs & Interstate Events",
      "Collaborate with Tour Managers & Mediators",
      "Community of Motivated Students & Event Pros",
    ],
    proofText: "Evenza provides a complete pathway: start as a volunteer, learn on-ground event management, and step up to become team leads overseeing crews of 10 to 50 members at large-scale festivals.",
    highlights: "Real Growth • Become an Event Expert & Community Leader",
  },
  {
    id: "medical-conclave",
    title: "Pan-India Medical & Doctors Conclave",
    role: "Delegate Help Desk & Kit Coordination",
    category: "Conferences",
    tag: "🤝 National Convention",
    badge: "📜 Official Certification",
    image: "/assets/img/portfolio/optimized/corporate-event-kit-distribution-staff-jaipur.webp",
    location: "Birla Auditorium, Jaipur",
    scale: "30+ Registration Volunteers",
    audience: "MICE Planners • Association Organizers • Students",
    perks: [
      "Official Certificate of Event Operations",
      "Formal Professional Working Environment",
      "Zero Registration Fees — 100% Genuine",
      "Buffet Lunch & High-Tea Included",
      "Valuable Interpersonal & Organizational Experience",
    ],
    proofText: "Organized registration desks, conference bag distribution, and audio-visual room support for senior medical professionals and delegates from across India.",
    highlights: "Disciplined Professional Setting • Ideal for First-Time Volunteers",
  },
  {
    id: "crowd-management",
    title: "Arena Marathon & Sports Run",
    role: "Route Marshals & Crowd Crew",
    category: "Sports & Gaming",
    tag: "⚡ Live Arena Ops",
    badge: "🏅 Medal & Stage Crew",
    image: "/assets/img/portfolio/optimized/sports-event-crowd-management-jaipur.webp",
    location: "Jaipur City Circuit",
    scale: "80+ Volunteers Placed",
    audience: "Marathon Organizers • Athletic Clubs • Youth Volunteers",
    perks: [
      "Official Crew Jersey, Cap & Medals",
      "Early Morning Energetic Shift",
      "Official Certificate of Contribution",
      "Breakfast, Energy Drinks & Snacks",
      "Teamwork & City-Scale Coordination",
    ],
    proofText: "High-energy outdoor event execution. Volunteers managed hydration stations, timing-chip checkpoints, participant guidance, and finish-line medal ceremonies.",
    highlights: "Energizing Atmosphere • City-Wide Impact & Real Teamwork",
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
      <div className="absolute left-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-r from-[#12160b] via-[#12160b]/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-l from-[#12160b] via-[#12160b]/80 to-transparent z-20 pointer-events-none" />

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
              Evenza For Everyone
              <span className="hidden sm:inline-block text-gold/80 font-normal">| Live Manpower & Volunteer Network</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-gold bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold/30 shrink-0">
            <Sparkles className="w-3 h-3 text-gold shrink-0" />
            <span>Pan-India • 10+ Event Roles</span>
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

                {/* Top Badge: Role Scale & Verification */}
                <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1 z-10">
                  <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-amber-300 border border-amber-400/30 flex items-center gap-1 shadow-sm truncate">
                    <span>{item.badge}</span>
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-medium px-1.5 py-0.5 rounded-md bg-emerald-500/85 backdrop-blur-md text-white shadow-sm flex items-center gap-0.5 shrink-0">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Bottom Info: Title & Role Tag */}
                <div className="absolute bottom-2 left-2 right-2 z-10 text-left">
                  <div className="text-[10px] sm:text-[11px] font-bold text-white line-clamp-1 group-hover/card:text-gold transition-colors flex items-center gap-1">
                    {item.title}
                  </div>
                  <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-white/80 mt-0.5">
                    <span className="truncate max-w-[125px] text-amber-200/90 font-medium">
                      {item.role}
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
          <span>👆 Tap any proof to view event operations, perks & community details</span>
        </div>
      </div>
    </div>
  );
}
