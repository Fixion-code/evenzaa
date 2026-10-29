import {
  Sparkles,
  Users,
  Briefcase,
  PartyPopper,
  Music,
  Building2,
  Heart,
  Calendar,
  Printer,
  Package,
  ShieldCheck,
  Compass,
  BadgeCheck,
} from "lucide-react";

import { siteConfig } from "./siteConfig";

// ===== CONTACT CONFIG (derived from central siteConfig) =====
export const SITE_URL = siteConfig.SITE_URL;
export const PHONE = siteConfig.phoneSecondary;
export const PHONE_TEL = siteConfig.phoneSecondaryTel;
export const PHONE_STUTI = siteConfig.phone;
export const PHONE_STUTI_TEL = siteConfig.phoneTel;
export const PHONE_SHLOK = siteConfig.phoneShlok;
export const PHONE_SHLOK_TEL = siteConfig.phoneShlokTel;
export const WHATSAPP = siteConfig.whatsapp;
export const EMAIL = siteConfig.email;
export const ADDRESS = `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion}, India`;

// ===== SOCIAL MEDIA =====
export const INSTAGRAM = siteConfig.social.instagram;
export const FACEBOOK = siteConfig.social.facebook;
export const THREADS = siteConfig.social.threads;
export const LINKEDIN = siteConfig.social.linkedin;
export const TELEGRAM = siteConfig.social.telegram;

// ===== NAVIGATION =====
export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Roles", href: "#roles" },
  { label: "Events", href: "#events" },
  { label: "Our Work", href: "/case-studies" },
  { label: "Volunteers", href: "/volunteers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

// ===== SERVICES =====
export const SERVICES = [
  { icon: Users, title: "Event Manpower", desc: "Skilled crews deployed for events of any scale, anywhere in India." },
  { icon: Briefcase, title: "Hospitality Crew", desc: "F&B service, guest handling, VIP shadowing — handled with grace." },
  { icon: PartyPopper, title: "Volunteers", desc: "Trained volunteers for weddings, corporate, social and CSR events." },
  { icon: Building2, title: "Production Team", desc: "Show flow, logistics, backstage and stage management." },
  { icon: Calendar, title: "Event Management", desc: "End-to-end coordination — from planning to wrap." },
  { icon: ShieldCheck, title: "On-ground Supervision", desc: "Managers and supervisors to keep every moving part on cue." },
];

// ===== ROLES =====
export const ROLES = [
  { title: "Runner", desc: "Quick-on-feet support for any task that comes up mid-event." },
  { title: "Porter", desc: "Luggage, gifts and gear — handled with care from check-in to check-out." },
  { title: "Shadow", desc: "Discreet personal assistance for VIPs, families and guests of honour." },
  { title: "Logistics Crew", desc: "Movement of people, props and material — on time, every time." },
  { title: "Show Flow", desc: "Cue management to keep ceremonies and shows running to script." },
  { title: "F&B Service", desc: "Trained banquet service for buffet, plated and live counters." },
  { title: "Supervisor", desc: "Section leads who own a zone and brief their crew." },
  { title: "Event Manager", desc: "Single point of contact running the entire on-ground team." },
  { title: "Production Crew", desc: "Stage, AV and backstage support working with your production house." },
];

// ===== EVENTS =====
export const EVENTS = [
  { icon: Heart, title: "Weddings & Destination Weddings", desc: "Rajasthani royalty to beachfront vows — full hospitality crew." },
  { icon: Building2, title: "Corporate Summits & Conferences", desc: "Registration, hospitality and on-floor management." },
  { icon: Music, title: "Concerts & Live Shows", desc: "Crowd flow, artist handling and production support." },
  { icon: Briefcase, title: "Exhibitions & Expos", desc: "Booth staffing, badge printing and visitor management." },
  { icon: Heart, title: "Social & CSR Events", desc: "Volunteer mobilisation for cause-driven gatherings." },
  { icon: PartyPopper, title: "Private & RSVP Events", desc: "Discreet, polished service for intimate gatherings." },
];

// ===== COVERAGE CITIES =====
export const CITIES = [
  "Jaipur", "Udaipur", "Jodhpur", "Delhi NCR", "Mumbai", "Bengaluru",
  "Hyderabad", "Chennai", "Kolkata", "Goa", "Pune", "Ahmedabad",
  "Chandigarh", "Lucknow", "Indore", "Surat",
];

// ===== EXTRAS =====
export const EXTRAS = [
  { icon: Calendar, title: "Event Registration", desc: "Pre-event online registration with custom workflows." },
  { icon: BadgeCheck, title: "On-spot Registration", desc: "Walk-in registration desks with instant data capture." },
  { icon: Printer, title: "Badge Printing on Demand", desc: "Live, instant badge printing for delegates and guests." },
  { icon: Package, title: "Rental Services", desc: "Registration kits, printers, scanners and equipment on rent." },
];

// ===== ABOUT FEATURES =====
export const ABOUT_FEATURES = [
  { icon: ShieldCheck, title: "Vetted Crew", desc: "Background-checked, trained, uniformed." },
  { icon: Compass, title: "No Mediators", desc: "Direct from us — transparent pricing." },
  { icon: BadgeCheck, title: "Founder-Led", desc: "Accountability on every event." },
  { icon: Sparkles, title: "Pan-India", desc: "Stay, travel & food handled." },
];

// ===== STATS =====
export const STATS = [
  { number: "500+", label: "Events Delivered" },
  { number: "30+", label: "Cities Covered" },
  { number: "1000+", label: "Trained Crew" },
  { number: "100%", label: "Pan-India Reach" },
];

// ===== FOUNDERS =====
export const FOUNDERS = [
  {
    name: "Shlok Aggarwal",
    role: "Founder",
    bio: "Years on the ground in India's events industry, building Evenza into a trusted name for hospitality manpower.",
  },
  {
    name: "Stuti Shukla",
    role: "Co-founder",
    bio: "Operational backbone — training crew, building processes, and ensuring service standards are met on every event.",
  },
];
