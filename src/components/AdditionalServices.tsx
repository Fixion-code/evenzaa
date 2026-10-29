import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { EXTRAS } from "@/lib/constants";

export function Extras() {
  return (
    <section className="section-padding">
      <SectionHeader
        kicker="Additional Services"
        title={
          <>
            Beyond manpower —{" "}
            <span className="italic text-gold">end-to-end execution</span>
          </>
        }
      />

      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {EXTRAS.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card p-7 text-center group"
          >
            <e.icon className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 id={`extra-${e.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="font-display text-lg text-foreground mb-2">
              {e.title}
            </h3>
            <p className="text-muted-foreground text-sm">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
