import { NAV, PHONE, PHONE_SHLOK, EMAIL, ADDRESS, INSTAGRAM } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t gold-border bg-card py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Brand */}
        <div>
          <div className="font-display text-2xl text-gold">Evenza</div>
          <div className="text-cream/60 text-sm mt-1">
            Hospitality Services
          </div>
          <p className="text-cream/50 text-sm mt-4 max-w-xs">
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
                  className="text-cream/70 hover:text-gold transition-colors duration-300"
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
          <ul className="space-y-2 text-sm text-cream/70">
            <li>Stuti · {PHONE}</li>
            <li>Shlok · {PHONE_SHLOK}</li>
            <li>{EMAIL}</li>
            <li>{ADDRESS}</li>
            <li>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold transition-colors duration-300"
              >
                Instagram · @EvenzaEvent
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="gold-divider my-8 max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto text-center text-cream/50 text-xs">
        © {new Date().getFullYear()} Shree Ji Company Pvt. Ltd. All rights
        reserved.
      </div>
    </footer>
  );
}