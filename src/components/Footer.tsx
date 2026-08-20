import { Link } from "react-router-dom";
import { NAV, PHONE, PHONE_TEL, PHONE_SHLOK, PHONE_SHLOK_TEL, EMAIL, ADDRESS, INSTAGRAM, FACEBOOK, THREADS, LINKEDIN, TELEGRAM } from "@/lib/constants";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Send } from "lucide-react";

const SEO_LINKS = [
  { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
  { label: "Hospitality Team Jaipur", path: "/hospitality-team-jaipur" },
  { label: "Wedding Staff Jaipur", path: "/wedding-staff-jaipur" },
  { label: "Corporate Event Staffing", path: "/corporate-event-staffing-jaipur" },
  { label: "Event Staffing Rajasthan", path: "/event-staffing-rajasthan" },
  { label: "Event Volunteers Jaipur", path: "/event-volunteers-jaipur" },
  { label: "Exhibition Staff Jaipur", path: "/exhibition-staff-jaipur" },
  { label: "Manpower Agency Jaipur", path: "/manpower-agency-jaipur" },
];

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@evenzaevent",
    href: INSTAGRAM,
  },
  {
    icon: Facebook,
    label: "Facebook",
    handle: "Evenza India",
    href: FACEBOOK,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Evenza India",
    href: LINKEDIN,
  },
  {
    // Threads — no icon in lucide, use a T text badge
    icon: null,
    label: "Threads",
    handle: "@evenzaevent",
    href: THREADS,
  },
  {
    icon: Send,
    label: "Telegram",
    handle: "Join our channel",
    href: TELEGRAM,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

        {/* Brand */}
        <div className="lg:col-span-1">
          <a href="/" className="flex items-baseline gap-2 group">
            <span className="font-display text-2xl text-primary tracking-wide group-hover:opacity-80 transition-opacity">
              Evenza
            </span>
          </a>
          <div className="text-muted-foreground text-sm mt-1">
            Hospitality Services
          </div>
          <p className="text-muted-foreground/80 text-sm mt-4 leading-relaxed max-w-xs">
            A brand of Shree Ji Company Pvt. Ltd. — Jaipur's trusted event manpower and hospitality staffing partner.
          </p>

          {/* Social Icons */}
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label="Evenza on Instagram"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-all duration-300"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noreferrer"
              aria-label="Evenza on Facebook"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-all duration-300"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="Evenza on LinkedIn"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-all duration-300"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={THREADS}
              target="_blank"
              rel="noreferrer"
              aria-label="Evenza on Threads"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-all duration-300 font-bold text-xs"
            >
              T
            </a>
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label="Evenza on Telegram"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-all duration-300"
            >
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-xs uppercase tracking-widest text-gold mb-4">
            Quick Links
          </div>
          <ul className="space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SEO Service Pages */}
        <div>
          <div className="text-xs uppercase tracking-widest text-gold mb-4">
            Our Services
          </div>
          <ul className="space-y-2.5 text-sm">
            {SEO_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-xs uppercase tracking-widest text-gold mb-4">
            Reach Us
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 hover:text-gold transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{PHONE}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${PHONE_SHLOK_TEL}`}
                className="flex items-center gap-2 hover:text-gold transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{PHONE_SHLOK}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 hover:text-gold transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>{EMAIL}</span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>{ADDRESS}</span>
            </li>
            <li>
              <a
                href={`https://wa.me/919161710849`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-gold transition-colors duration-300"
              >
                {/* WhatsApp icon via SVG */}
                <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp · @evenzaevent</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="gold-divider my-8 max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-muted-foreground/60 text-xs">
        <span>© {new Date().getFullYear()} Shree Ji Company Pvt. Ltd. All rights reserved.</span>
        <span>Jaipur · Rajasthan · India</span>
      </div>
    </footer>
  );
}