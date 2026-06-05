import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { CITIES } from "@/lib/constants";

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
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="px-5 py-2.5 border gold-border rounded-full text-cream/85 hover:bg-gold hover:text-coffee hover:border-gold hover:scale-105 transition-all duration-300 cursor-default"
            >
              {c}
            </motion.span>
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
