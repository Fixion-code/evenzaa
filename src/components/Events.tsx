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

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4 md:gap-8 relative z-10">
        {EVENTS.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="card p-6 md:p-8 group"
          >
            <e.icon className="w-7 h-7 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 id={`event-${e.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="font-display text-xl text-foreground mb-2">
              {e.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
