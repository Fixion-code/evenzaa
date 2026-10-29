import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { SERVICES } from "@/lib/constants";

// Map each service title to its primary SEO landing page
const SERVICE_LINKS: Record<string, string> = {
  "Event Manpower": "/event-manpower-jaipur",
  "Hospitality Crew": "/hospitality-team-jaipur",
  "Volunteers": "/event-volunteers-jaipur",
  "Production Team": "/corporate-event-staffing-jaipur",
  "Event Management": "/corporate-event-staffing-jaipur",
  "On-ground Supervision": "/event-manpower-jaipur",
};

export function Services() {
  return (
    <section id="services" className="section-padding">
      <SectionHeader
        kicker="What We Do"
        title={
          <>
            Full-spectrum{" "}
            <span className="italic text-gold">hospitality services</span>
          </>
        }
        sub="Every role you need to run an event — under one trusted roof."
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {SERVICES.map((s, i) => {
          const href = SERVICE_LINKS[s.title];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="card p-6 md:p-8 relative overflow-hidden group"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex flex-col h-full">
                <s.icon className="w-8 h-8 text-gold mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300" />
                <h3 id={`service-${s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="font-display text-2xl text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                {href && (
                  <Link
                    to={href}
                    className="inline-flex items-center gap-1.5 mt-5 text-xs text-gold hover:text-gold/80 transition-colors duration-200 font-medium tracking-wide uppercase"
                    aria-label={`Explore ${s.title} in Jaipur`}
                  >
                    Explore {s.title} <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}