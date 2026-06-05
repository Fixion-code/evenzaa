import { NAV, PHONE, PHONE_SHLOK, EMAIL, ADDRESS, INSTAGRAM } from "@/lib/constants";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Brand */}
        <div>
          <a href="#top" className="flex items-baseline gap-2 group">
            <span className="font-display text-2xl text-primary tracking-wide group-hover:opacity-80 transition-opacity">
              Evenza
            </span>
          </a>
          <div className="text-muted-foreground text-sm mt-1">
            Hospitality Services
          </div>
          <p className="text-muted-foreground/80 text-sm mt-4 max-w-xs">
            A brand of Shree Ji Company Pvt. Ltd. — Jaipur, India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-xs uppercase tracking-widest text-gold mb-3">
            Quick Links
          </div>
          <ul className="space-y-2 text-sm">
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

        {/* Contact */}
        <div>
          <div className="text-xs uppercase tracking-widest text-gold mb-3">
            Reach Us
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <span>Stuti · {PHONE}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <span>Shlok · {PHONE_SHLOK}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <span>{EMAIL}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>{ADDRESS}</span>
            </li>
            <li>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-gold transition-colors duration-300"
              >
                <Instagram className="w-4 h-4 text-gold shrink-0" />
                <span>Instagram · @EvenzaEvent</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="gold-divider my-8 max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto text-center text-muted-foreground/80 text-xs">
        © {new Date().getFullYear()} Shree Ji Company Pvt. Ltd. All rights
        reserved.
      </div>
    </footer>
  );
}