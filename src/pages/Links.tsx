import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Send,
  MessageCircle,
  Globe,
  Users,
  Facebook,
  UserPlus,
  ArrowUpRight,
  Briefcase,
  X,
  Handshake,
  Building2,
  Heart,
  Phone,
  Mail,
  Sparkles,
  ShieldCheck,
  Award,
  CalendarCheck,
  MapPin,
  CheckCircle2,
  Zap,
  ExternalLink,
  GraduationCap,
  Plane,
  Compass,
} from "lucide-react";
import { useState } from "react";
import {
  INSTAGRAM,
  LINKEDIN,
  TELEGRAM,
  WHATSAPP,
  FACEBOOK,
  PHONE_TEL,
  EMAIL,
} from "@/lib/constants";
import { TopProofSlider, EventProofItem } from "@/components/TopProofSlider";

const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/EGyArsmV7TrA9MEFfCGt8V";
const SITE_URL = "https://evenzaa-sable.vercel.app";

const MAIN_LINKS = [
  {
    title: "Visit Our Website",
    href: "/",
    icon: Globe,
    desc: "Explore our full range of event services",
    primary: true,
  },
  {
    title: "Join Volunteer Community",
    href: WHATSAPP_COMMUNITY,
    icon: Users,
    desc: "Part-time gigs, student network & travel events",
    primary: true,
  },
  {
    title: "Our Work & Case Studies",
    href: "/case-studies",
    icon: Briefcase,
    desc: "See the scale of events we've managed",
    primary: false,
  },
  {
    title: "Telegram Updates",
    href: TELEGRAM,
    icon: Send,
    desc: "Fast alerts for new opportunities",
    primary: false,
  },
];

const SOCIAL_LINKS = [
  { icon: Instagram, href: INSTAGRAM, label: "Instagram" },
  { icon: Facebook, href: FACEBOOK, label: "Facebook" },
  { icon: Linkedin, href: LINKEDIN, label: "LinkedIn" },
];

const WHATSAPP_OPTIONS = [
  {
    role: "Fresher & Student",
    icon: GraduationCap,
    desc: "Earn while studying, travel free & get certificates",
    message: "Hi Evenza! I'm a student/fresher looking to join your volunteer community, earn part-time, and gain live event experience.",
  },
  {
    role: "Experienced Freelancer",
    icon: Award,
    desc: "Team leads, supervisors & high-responsibility gigs",
    message: "Hi Evenza! I'm an experienced event freelancer / crew lead interested in leading on-ground operations for upcoming events.",
  },
  {
    role: "Event Planner & Agency",
    icon: Briefcase,
    desc: "Reliable, vetted on-ground manpower pan-India",
    message: "Hi Evenza, I'm an event planner/agency looking for a reliable manpower and hospitality partner for my upcoming events.",
  },
  {
    role: "Corporate Company",
    icon: Building2,
    desc: "Annual days, brand launches & employee summits",
    message: "Hi Evenza! We represent a corporate company and need professional manpower and coordinators for our upcoming corporate event.",
  },
  {
    role: "MICE Company",
    icon: Globe,
    desc: "Conferences, exhibitions & multi-thousand delegate care",
    message: "Hi Evenza! We are a MICE agency looking for large-scale registration desk management, crowd ushers, and conference crew.",
  },
  {
    role: "Tour Manager",
    icon: Compass,
    desc: "Airport transfers, guest welcome & luggage logistics",
    message: "Hi Evenza! I'm a tour manager / travel coordinator looking for on-ground hospitality staff and guest coordination.",
  },
  {
    role: "Wedding Company & Host",
    icon: Heart,
    desc: "Royal welcoming girls, banquet hospitality & shadow crew",
    message: "Hi Evenza! We are a wedding company / hosts looking for professional hospitality staff, shadow coordinators, and guest management.",
  },
  {
    role: "Event Organizer",
    icon: Zap,
    desc: "Concerts, marathons & sports arena ground crew",
    message: "Hi Evenza! I'm organizing a concert/sports event and need experienced ground operations, crowd marshals, and backstage crew.",
  },
  {
    role: "Hospitality Team",
    icon: Users,
    desc: "VIP lounge hostesses, banquet staff & ushering",
    message: "Hi Evenza! I'm interested in joining your VIP hospitality and hostess team for luxury events and high-profile summits.",
  },
  {
    role: "Mediator & Partner",
    icon: Handshake,
    desc: "Vendor collaboration, cross-agency liaisons & referrals",
    message: "Hi Evenza! I'm an event mediator / vendor interested in exploring collaboration and partnership opportunities with Evenza.",
  },
  {
    role: "General Support",
    icon: MessageCircle,
    desc: "General inquiries or custom requirements",
    message: "Hi Evenza, I have a general inquiry and would like to speak with your team.",
  }
];

export function Links() {
  const [showWaModal, setShowWaModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedProof, setSelectedProof] = useState<EventProofItem | null>(null);

  const handleDownloadVCard = () => {
    // Robust OS Identification
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.userAgent.includes("Mac") && "ontouchend" in document);

    // vCard content ensuring correct line breaks (\r\n is standard for vCard)
    const vcard = `BEGIN:VCARD\r
VERSION:3.0\r
FN:Evenza Manpower & Hospitality\r
ORG:Evenza Manpower & Hospitality Company\r
TITLE:Event Manpower & Hospitality Partner\r
TEL;TYPE=WORK,VOICE:+919161710849\r
TEL;TYPE=CELL,VOICE:+919219465819\r
EMAIL;TYPE=WORK:${EMAIL}\r
URL:${SITE_URL}\r
NOTE:Services: Event Manpower, Hospitality Crew, Volunteers, Production Team. Let's elevate your next event!\r
END:VCARD`;

    if (isIOS) {
      // iOS Safari blocks direct navigation to blob URLs but supports opening data URIs directly to trigger the native Contacts app
      const dataURI = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`;
      window.location.href = dataURI;
    } else {
      // Standard Blob download for Android, Windows, Mac Desktop (Chrome, Edge, Firefox, etc.)
      const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Evenza_Contact.vcf";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the URL object after a short delay
      setTimeout(() => URL.revokeObjectURL(url), 500);
    }
  };

  return (
    <main className="min-h-screen-dvh relative bg-background pb-12 overflow-x-hidden">
      <Helmet>
        <title>Connect with Evenza | Links & Socials</title>
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="Connect with Evenza Hospitality Services. Find all our official links, event manpower proofs, volunteer gigs, and contact channels in one place."
        />
      </Helmet>

      {/* Top Sliding Event & Manpower Working Proofs Showcase */}
      <TopProofSlider onSelectProof={(proof) => setSelectedProof(proof)} />

      <div className="max-w-xl mx-auto px-4 sm:px-6 relative z-20 -mt-16 sm:-mt-20">
        {/* Profile Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-6"
        >
          <div className="w-32 h-32 rounded-full border-4 border-background bg-[#191e10] shadow-[0_16px_40px_rgba(0,0,0,0.35)] ring-2 ring-gold/50 flex items-center justify-center overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
            <img
              src="/evenza-profile.png"
              width="128"
              height="128"
              alt="Evenza Logo"
              fetchpriority="high"
              loading="eager"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-1.5 flex items-center gap-2">
            Evenza India
            <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
              <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
          </h1>
          <p className="text-muted-foreground text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
            India's Premier Event Manpower & Hospitality Partner. Elevating experiences pan-India.
          </p>

          {/* Join Evenza Volunteer & Manpower Network (Poster-Inspired Value Pillars) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full mt-4 p-3.5 rounded-2xl bg-gold/5 border border-gold/25 shadow-sm text-left"
          >
            <div className="flex items-center justify-between gap-2 mb-2.5 px-0.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Join Evenza • Be Part of Bigger Events</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 shrink-0">
                Pan-India
              </span>
            </div>

            {/* 4 Core Value Pillars (No Pricing, Pure Opportunity & Growth) */}
            <div className="grid grid-cols-2 gap-2 text-left mb-2.5">
              {/* Earn While You Study */}
              <div className="p-2.5 rounded-xl bg-card border border-border/70 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 mb-1 text-gold font-bold text-xs">
                  <GraduationCap className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span className="text-foreground text-[11px] font-bold">Earn While You Study</span>
                </div>
                <div className="text-[10px] text-muted-foreground leading-snug">
                  Part-time event gigs for students from all states. Flexible around college.
                </div>
              </div>

              {/* Travel & Explore */}
              <div className="p-2.5 rounded-xl bg-card border border-border/70 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 mb-1 text-blue-600 font-bold text-xs">
                  <Plane className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span className="text-foreground text-[11px] font-bold">Travel & Explore Free</span>
                </div>
                <div className="text-[10px] text-muted-foreground leading-snug">
                  Free stay, food & travel covered on destination weddings & tours.
                </div>
              </div>

              {/* Build Connections */}
              <div className="p-2.5 rounded-xl bg-card border border-border/70 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 mb-1 text-emerald-600 font-bold text-xs">
                  <Users className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-foreground text-[11px] font-bold">Build Connections</span>
                </div>
                <div className="text-[10px] text-muted-foreground leading-snug">
                  Meet event planners, tour managers, MICE teams & industry experts.
                </div>
              </div>

              {/* Certificate & Growth */}
              <div className="p-2.5 rounded-xl bg-card border border-border/70 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 mb-1 text-purple-600 font-bold text-xs">
                  <Award className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                  <span className="text-foreground text-[11px] font-bold">Certificate & Growth</span>
                </div>
                <div className="text-[10px] text-muted-foreground leading-snug">
                  Official certificates & promotion to event supervisors & crew leads.
                </div>
              </div>
            </div>

            {/* Live Event Categories Strip */}
            <div className="p-2 rounded-xl bg-card border border-border/70 flex items-center justify-between gap-1.5 text-[9px] sm:text-[10px] text-muted-foreground overflow-hidden">
              <span className="font-semibold text-foreground shrink-0">Live Events:</span>
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar font-medium text-muted-foreground">
                <span className="px-1.5 py-0.5 rounded bg-muted/60">Conferences</span>
                <span>•</span>
                <span className="px-1.5 py-0.5 rounded bg-muted/60">Concerts</span>
                <span>•</span>
                <span className="px-1.5 py-0.5 rounded bg-muted/60">Sports & Gaming</span>
                <span>•</span>
                <span className="px-1.5 py-0.5 rounded bg-muted/60">Exhibitions</span>
                <span>•</span>
                <span className="px-1.5 py-0.5 rounded bg-muted/60">Weddings</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Evenza for Everyone - Interactive Role Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="w-full mb-6 text-left"
        >
          <div className="flex items-center justify-between mb-2.5 px-0.5">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
                Evenza For Everyone
              </h2>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Tap your role to connect instantly with our team
              </p>
            </div>
            <span className="text-[10px] font-semibold text-gold bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold/25 shrink-0">
              10 Ecosystem Roles
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
            {WHATSAPP_OPTIONS.slice(0, 10).map((item) => (
              <a
                key={item.role}
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(item.message)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 p-2 sm:p-2.5 rounded-xl bg-card border border-border/70 hover:border-gold/50 hover:bg-gold/5 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xs group"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold text-foreground truncate group-hover:text-gold transition-colors">
                    {item.role}
                  </div>
                  <div className="text-[9px] text-muted-foreground line-clamp-1 mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Primary Call to Actions (Save Contact & WhatsApp) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 gap-3 sm:gap-4 mb-8"
        >
          <button
            onClick={() => setShowContactModal(true)}
            className="flex flex-col items-center justify-center py-3.5 sm:py-4 px-2 rounded-2xl bg-foreground text-background hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
          >
            <UserPlus className="w-5 h-5 sm:w-6 sm:h-6 mb-1.5 sm:mb-2 text-gold" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">Save Contact</span>
          </button>
          
          <button
            onClick={() => setShowWaModal(true)}
            className="flex flex-col items-center justify-center py-3.5 sm:py-4 px-2 rounded-2xl bg-card border border-border hover:border-[#25D366]/50 hover:bg-[#25D366]/5 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm group w-full"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mb-1.5 sm:mb-2 text-muted-foreground group-hover:text-[#25D366] transition-colors" />
            <span className="text-xs sm:text-sm font-semibold text-foreground tracking-wide">WhatsApp Us</span>
          </button>
        </motion.div>

        {/* Links List */}
        <div className="w-full space-y-4 mb-10">
          {MAIN_LINKS.map((link, index) => {
            const isInternal = link.href.startsWith("/");
            const LinkWrapper = isInternal ? Link : "a";
            
            return (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              >
                <LinkWrapper
                  to={isInternal ? link.href : undefined}
                  href={!isInternal ? link.href : undefined}
                  target={!isInternal ? "_blank" : undefined}
                  rel={!isInternal ? "noreferrer" : undefined}
                  className={`relative overflow-hidden group flex items-center p-4 rounded-2xl border transition-all duration-300 w-full min-h-[72px] ${
                    link.primary
                      ? "bg-gold/5 border-gold/30 hover:border-gold hover:bg-gold/10 shadow-soft"
                      : "bg-card border-border hover:border-gold/30 hover:shadow-soft"
                  }`}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl shrink-0 mr-4 shadow-sm ${
                    link.primary ? "bg-gold/20 text-gold" : "bg-muted text-muted-foreground group-hover:text-gold transition-colors"
                  }`}>
                    <link.icon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-foreground text-[15px] group-hover:text-gold transition-colors pr-2">
                      {link.title}
                    </div>
                    {link.desc && (
                      <div className="text-xs text-muted-foreground mt-1 line-clamp-1">
                        {link.desc}
                      </div>
                    )}
                  </div>

                  <ArrowUpRight className={`w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                    link.primary ? "text-gold/50 group-hover:text-gold" : "text-border group-hover:text-gold/50"
                  }`} />
                </LinkWrapper>
              </motion.div>
            );
          })}
        </div>

        {/* Social Icons Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center items-center gap-6"
        >
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 pt-8 border-t border-border/50 text-xs text-muted-foreground/60 text-center"
        >
          <div className="font-display italic text-lg text-gold/40 mb-2">E</div>
          © {new Date().getFullYear()} Shree Ji Company Pvt. Ltd. <br />
          All rights reserved.
        </motion.div>
      </div>

      {/* Smart WhatsApp Modal */}
      {showWaModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowWaModal(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-card border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="p-6 pb-4 border-b border-border/50 flex items-center justify-between shrink-0">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">How can we help?</h3>
                <p className="text-xs text-muted-foreground mt-1">Select your profile to start chatting.</p>
              </div>
              <button
                onClick={() => setShowWaModal(false)}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Options (Scrollable) */}
            <div className="p-4 overflow-y-auto flex-1">
              <div className="space-y-3">
                {WHATSAPP_OPTIONS.map((opt) => (
                  <a
                    key={opt.role}
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(opt.message)}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setShowWaModal(false)}
                    className="flex items-center p-4 rounded-2xl border border-border bg-card hover:bg-[#25D366]/5 hover:border-[#25D366]/30 transition-all group w-full text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-muted group-hover:bg-[#25D366]/10 flex items-center justify-center shrink-0 mr-4 transition-colors">
                      <opt.icon className="w-5 h-5 text-muted-foreground group-hover:text-[#25D366] transition-colors" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground group-hover:text-[#25D366] transition-colors">
                        {opt.role}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {opt.desc}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Advanced Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContactModal(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-sm bg-card border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-6 pb-4 border-b border-border/50 flex items-center justify-between shrink-0">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Save Contact</h3>
                <p className="text-xs text-muted-foreground mt-1">Download or save manually</p>
              </div>
              <button
                onClick={() => setShowContactModal(false)}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-6 flex flex-col gap-6">
               <button onClick={handleDownloadVCard} className="btn-primary w-full justify-center py-3.5 text-sm rounded-xl shadow-soft">
                  <UserPlus className="w-4 h-4" /> Download Contact Card
               </button>

               <div className="space-y-4">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">Manual Save Info</div>
                  
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-foreground" />
                     </div>
                     <div>
                        <div className="text-sm font-semibold tracking-wide">+91 91617 10849</div>
                        <div className="text-xs text-muted-foreground">Primary Booking / Info</div>
                     </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-foreground" />
                     </div>
                     <div>
                        <div className="text-sm font-semibold tracking-wide">+91 92194 65819</div>
                        <div className="text-xs text-muted-foreground">Secondary / Alternate</div>
                     </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-foreground" />
                     </div>
                     <div className="overflow-hidden">
                        <div className="text-sm font-semibold tracking-wide truncate">{EMAIL}</div>
                        <div className="text-xs text-muted-foreground">Official Email</div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Event Proof & Earning Breakdown Modal */}
      {selectedProof && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProof(null)}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-card border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] z-10"
          >
            {/* Modal Image Header */}
            <div className="relative h-48 sm:h-56 w-full shrink-0 overflow-hidden bg-black/30">
              <img
                src={selectedProof.image}
                alt={selectedProof.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProof(null)}
                aria-label="Close modal"
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/90 hover:text-white hover:bg-black/80 transition-colors z-20"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Badges on Image */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-20">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/90 text-white backdrop-blur-md flex items-center gap-1 shadow-sm">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Event Proof
                </span>
                <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-black/60 text-amber-300 border border-amber-400/30 backdrop-blur-md">
                  {selectedProof.tag}
                </span>
              </div>

              {/* Title on Image */}
              <div className="absolute bottom-3 left-4 right-4 z-20 text-left">
                <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider mb-0.5">
                  {selectedProof.category}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {selectedProof.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-white/80 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span>{selectedProof.location}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-emerald-400 font-semibold">{selectedProof.scale}</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 text-left">
              {/* Event Scope & Stakeholders Highlight */}
              <div className="p-3.5 rounded-2xl bg-gold/10 border border-gold/25 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                      Event Scope & Operations
                    </div>
                    <div className="text-sm sm:text-base font-bold text-foreground flex items-center gap-1.5">
                      <span>{selectedProof.scale}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                      <Zap className="w-3 h-3" />
                      {selectedProof.badge}
                    </span>
                  </div>
                </div>

                {/* Stakeholder Relevance Note */}
                <div className="text-[11px] text-muted-foreground font-medium bg-card/60 px-2.5 py-1.5 rounded-xl border border-border/60">
                  👥 <strong>Designed For:</strong> {selectedProof.audience}
                </div>
              </div>

              {/* Role & On-Ground Operations */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-gold" />
                  Role & On-Ground Operations
                </h4>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed bg-muted/30 p-3 rounded-xl border border-border/50">
                  {selectedProof.proofText}
                </p>
              </div>

              {/* Included Perks & Value Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  Included Perks & Opportunities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProof.perks.map((perk, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2 rounded-xl bg-card border border-border/60 text-xs text-foreground"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate & Zero Fee Guarantee Note */}
              <div className="p-3 rounded-xl bg-muted/40 border border-border/60 flex items-start gap-2.5 text-xs text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Official Certificate & 100% Genuine:</strong> Evenza provides an official experience certificate and recognition for every event. Zero registration fees or deposits.
                </div>
              </div>
            </div>

            {/* Modal Actions for Planners & Volunteers */}
            <div className="p-4 sm:p-5 border-t border-border/50 bg-card shrink-0 flex flex-col sm:flex-row gap-2.5">
              <a
                href={WHATSAPP_COMMUNITY}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <Users className="w-4 h-4" />
                Join Volunteer Network
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  `Hi Evenza! I saw your work on "${selectedProof.title}". I'm an event planner / organizer interested in hiring professional manpower for an upcoming event.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl border border-border hover:bg-muted/50 text-foreground font-semibold text-xs sm:text-sm transition-all"
              >
                <Briefcase className="w-4 h-4 text-gold" />
                Hire Manpower
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
