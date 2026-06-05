import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { EVENTS } from "@/lib/constants";

export function Events() {
  return (
    <section id="events" className="section-padding">
      <SectionHeader
        kicker="Events We Power"
        title={
          <>
            From <span className="italic text-gold">sangeets</span> to{" "}
            <span className="italic text-gold">summits</span>
          </>
        }
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EVENTS.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="p-8 rounded-lg border gold-border bg-card shadow-soft hover:shadow-gold hover:-translate-y-1 transition-all duration-300 group"
          >
            <e.icon className="w-7 h-7 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-display text-xl text-cream mb-2">
              {e.title}
            </h3>
            <p className="text-cream/65 text-sm leading-relaxed">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
