import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeader } from "./SectionHeader";

// Mapping from display name → SEO page path (only cities that have SEO pages)
const CITY_LINKS: Record<string, string> = {
  Jaipur: "/event-manpower-jaipur",
  Udaipur: "/event-manpower-udaipur",
  Jodhpur: "/event-manpower-jodhpur",
  "Delhi NCR": "/event-manpower-delhi",
  Mumbai: "/event-manpower-mumbai",
  Bengaluru: "/event-manpower-bengaluru",
  Hyderabad: "/event-manpower-hyderabad",
  Chennai: "/event-manpower-chennai",
  Kolkata: "/event-manpower-kolkata",
  Goa: "/event-manpower-goa",
  Pune: "/event-manpower-pune",
  Ahmedabad: "/event-manpower-ahmedabad",
  Chandigarh: "/event-manpower-chandigarh",
  Lucknow: "/event-manpower-lucknow",
  Indore: "/event-manpower-indore",
  Surat: "/event-manpower-surat",
};

const CITIES = Object.keys(CITY_LINKS);

export function Coverage() {
  return (
    <section id="coverage" className="section-padding bg-muted">
      <SectionHeader
        kicker="Pan-India Coverage"
        title={
          <>
            From <span className="italic text-gold">Jaipur</span> to every
            corner of India
          </>
        }
        sub="Our crew travels with us. Stay, travel and food — fully managed on our end. You focus on the event; we move the people."
      />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {CITIES.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <Link
                to={CITY_LINKS[c]}
                className="block px-5 py-2.5 border border-border rounded-full text-foreground hover:bg-gold/10 hover:text-gold hover:border-gold/40 hover:scale-105 transition-all duration-300"
                aria-label={`Event manpower in ${c}`}
              >
                {c}
              </Link>
            </motion.div>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="px-5 py-2.5 rounded-full text-gold italic font-display text-lg"
          >
            & everywhere else
          </motion.span>
        </div>
      </div>
    </section>
  );
}
