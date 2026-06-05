import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { SERVICES } from "@/lib/constants";

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

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group p-8 rounded-lg border gold-border bg-card shadow-soft hover:shadow-gold hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <s.icon className="w-8 h-8 text-gold mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-2xl text-cream mb-3">
                {s.title}
              </h3>
              <p className="text-cream/65 leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}