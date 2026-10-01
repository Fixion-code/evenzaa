import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin, CheckCircle2, Eye, ShieldCheck, Zap } from "lucide-react";

export interface EventProofItem {
  id: string;
  title: string;
  role: string;
  category: string;
  pay: string;
  tag: string;
  image: string;
  location: string;
  perks: string[];
  proofText: string;
  crewCount: string;
  highlights: string;
}

export const EVENT_PROOFS: EventProofItem[] = [
  {
    id: "concert-crew",
    title: "Sunburn Arena & Live Concerts",
    role: "Artist Hospitality & Stage Crew",
    category: "Live Concerts & Festivals",
    pay: "₹1,500 – ₹2,500 / Day",
    tag: "🔥 Live Concert Crew",
    image: "/assets/img/portfolio/optimized/concert-backstage-crew-jaipur.webp",
    location: "Jaipur, Rajasthan",
    perks: ["Spot UPI / Cash Payout", "Free Artist Passes & Meals", "Official Crew ID Badge", "Celebrity Event Exposure"],
    proofText: "Over 50 college students worked backstage coordination, greenroom assistance, and VIP entry management. Payouts cleared on the spot.",
    crewCount: "50+ Students Hired",
    highlights: "High Energy • Direct Music Industry Experience",
  },
  {
    id: "corporate-conference",
    title: "Rajasthan Tech Leadership Summit",
    role: "Delegate Registration & Help Desk",
    category: "Corporate Summits & Expos",
    pay: "₹1,200 – ₹1,800 / Day",
    tag: "💼 Corporate Desk",
    image: "/assets/img/portfolio/optimized/corporate-conference-team-jaipur.webp",
    location: "JECC Sitapura, Jaipur",
    perks: ["Official Experience Certificate", "Buffet Lunch & High Tea", "AC Venue Operations", "Valuable Corporate Networking"],
    proofText: "Managed 2,500+ corporate delegate check-ins, VIP ushering, and QR badge scanning. Perfect for college students looking for corporate resume credentials.",
    crewCount: "40+ Students Placed",
    highlights: "Resume Booster • Certificate Provided",
  },
  {
    id: "destination-wedding",
    title: "Royal Destination Palace Wedding",
    role: "Guest Welcome & Coordination Crew",
    category: "Luxury Destination Weddings",
    pay: "₹1,800 – ₹3,000 / Day",
    tag: "👑 Royal Hospitality",
    image: "/assets/img/portfolio/optimized/destination-wedding-hospitality-rajasthan.webp",
    location: "Udaipur & Jaipur Palaces",
    perks: ["5-Star Palace Stay & Food", "Travel / Cab Allowance", "Designer Attire / Uniform", "High Earning Multi-Day Gig"],
    proofText: "Evenza student hospitality crew welcomed domestic & NRI guests, luggage coordination, and royal banquet management across 3 days.",
    crewCount: "75+ Hospitality Staff",
    highlights: "Palace Venues • 3-Day Earning ₹5,000-₹9,000",
  },
  {
    id: "sports-tournament",
    title: "National Cricket & Sports League",
    role: "Ground Operations & Dugout Crew",
    category: "Live Sports Events",
    pay: "₹1,200 – ₹2,000 / Day",
    tag: "🏆 Live Sports Gigs",
    image: "/assets/img/portfolio/optimized/sports-tournament-event-crew-jaipur.webp",
    location: "SMS Stadium, Jaipur",
    perks: ["Stadium Match Passes", "Official Crew Jersey & Cap", "Energy Drinks & Meals", "Evening Same-Day Payout"],
    proofText: "College sports enthusiasts and volunteers managed player dugouts, boundary lines, ticket turnstiles, and stadium logistics.",
    crewCount: "60+ Ground Staff",
    highlights: "Watch the Game Live While Earning • Fast Pay",
  },
  {
    id: "trade-expo",
    title: "International Trade & Auto Expo",
    role: "Brand Promoters & Stall Coordinators",
    category: "Trade Shows & Exhibitions",
    pay: "₹1,200 – ₹2,000 / Day",
    tag: "🚀 Trade Expo Promoters",
    image: "/assets/img/portfolio/optimized/exhibition-promoter-team-rajasthan.webp",
    location: "JECC Jaipur",
    perks: ["Direct Corporate Interaction", "Flexible Shift Timings", "Experience Certificate", "Meals & Refreshments"],
    proofText: "Student promoters managed brand pavilions, attendee lead generation, product demonstrations, and catalog distribution.",
    crewCount: "35+ Promoters Placed",
    highlights: "Communication Skills • Top Brand Connections",
  },
  {
    id: "crowd-management",
    title: "Mega Arena Marathon & Run",
    role: "Gate & Crowd Management Crew",
    category: "Sports & Arena Events",
    pay: "₹1,000 – ₹1,800 / Day",
    tag: "⚡ Instant Payout",
    image: "/assets/img/portfolio/optimized/sports-event-crowd-management-jaipur.webp",
    location: "Jaipur City Circuit",
    perks: ["Early Half-Day Shifts", "Breakfast & Energy Kits", "Medal Ceremony Assist", "Same-Day Instant UPI Transfer"],
    proofText: "Volunteers manned water stations, marathon guidance routes, finish line medals, and crowd safety. Work completed in 4-6 hours with instant UPI payment.",
    crewCount: "80+ Volunteers",
    highlights: "Half-Day Gig • Instant UPI Transfer",
  },
  {
    id: "medical-conclave",
    title: "Pan-India Medical Doctors Conclave",
    role: "Delegate Registration & Kits Desk",
    category: "Medical & Academic Summits",
    pay: "₹1,200 – ₹1,600 / Day",
    tag: "🤝 Verified Safe Gigs",
    image: "/assets/img/portfolio/optimized/corporate-event-kit-distribution-staff-jaipur.webp",
    location: "Birla Auditorium, Jaipur",
    perks: ["Buffet Lunch Included", "Formal Working Environment", "Zero Registration Cost", "Verified Genuine Work"],
    proofText: "Coordinated distribution of welcome conference bags, badges, and guest guidance. 100% genuine company, zero joining fee.",
    crewCount: "30+ Students",
    highlights: "Professional Atmosphere • Great For First-Timers",
  },
  {
    id: "volunteer-leads",
    title: "Evenza Youth Volunteer Network",
    role: "On-Ground Team Leads & Supervisors",
    category: "Youth Leadership & Career",
    pay: "₹1,800 – ₹2,800 / Day",
    tag: "⭐ Team Lead Role",
    image: "/assets/img/portfolio/optimized/event-volunteer-management-team-jaipur.webp",
    location: "Pan-India / Rajasthan",
    perks: ["Promotion from Volunteer to Lead", "Higher Daily Stipends", "Management Credential", "Long-Term Freelance Network"],
    proofText: "Top performing student volunteers are promoted to Team Supervisors to lead crews of 10-20 volunteers at major festivals.",
    crewCount: "25+ Team Leads",
    highlights: "Career Growth • Lead Your Own Event Crew",
  },
];

interface TopProofSliderProps {
  onSelectProof: (proof: EventProofItem) => void;
}

export function TopProofSlider({ onSelectProof }: TopProofSliderProps) {
  // We duplicate the list to create a seamless infinite CSS marquee loop
  const marqueeItems = [...EVENT_PROOFS, ...EVENT_PROOFS];

  return (
    <div className="w-full relative overflow-hidden bg-[#161a0f] border-b border-border/40 select-none">
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a3219] via-[#1c2211] to-[#13160c] opacity-95" />

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
        <div className="px-4 mb-2.5 flex items-center justify-between max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-bold tracking-wide uppercase text-white/90 flex items-center gap-1.5">
              Live Working Manpower Proofs
              <span className="hidden sm:inline-block text-gold/80 font-normal">| Pan-India Gigs</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-gold bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold/30">
            <Zap className="w-3 h-3 text-gold" />
            <span>Earn ₹1,000–₹2,500/day</span>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                {/* Top Badge: Earning / Proof */}
                <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1 z-10">
                  <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-amber-400/30 flex items-center gap-1 shadow-sm">
                    <span>{item.pay}</span>
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-medium px-1.5 py-0.5 rounded-md bg-emerald-500/80 backdrop-blur-md text-white shadow-sm flex items-center gap-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Bottom Info: Title & Tag */}
                <div className="absolute bottom-2 left-2 right-2 z-10 text-left">
                  <div className="text-[10px] sm:text-[11px] font-bold text-white line-clamp-1 group-hover/card:text-gold transition-colors flex items-center gap-1">
                    {item.title}
                  </div>
                  <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-white/75 mt-0.5">
                    <span className="truncate max-w-[130px] text-amber-200/90">{item.role}</span>
                    <span className="flex items-center gap-0.5 text-white/60 shrink-0">
                      <Eye className="w-2.5 h-2.5 text-gold/80" />
                      Proof
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
          <span>👆 Tap any proof card for event details, earnings & roles</span>
        </div>
      </div>

      {/* Bottom Gradient Fade to Page Background */}
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
}
