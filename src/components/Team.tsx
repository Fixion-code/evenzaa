import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { FOUNDERS } from "@/lib/constants";

export function Founders() {
  return (
    <section className="section-padding bg-card">
      <SectionHeader
        kicker="Leadership"
        title={
          <>
            Founder-led,{" "}
            <span className="italic text-gold">accountable</span> by design
          </>
        }
      />

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {FOUNDERS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="p-8 rounded-lg border gold-border bg-card shadow-soft hover:shadow-gold transition-all duration-300 group"
          >
            {/* Monogram avatar */}
            <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center font-display text-2xl text-coffee mb-5 group-hover:scale-105 transition-transform duration-300 shadow-gold">
              {p.name
                .split(" ")
                .map((s) => s[0])
                .join("")}
            </div>
            <h3 className="font-display text-2xl text-cream">{p.name}</h3>
            <div className="text-gold text-sm uppercase tracking-widest mt-1 mb-4">
              {p.role}
            </div>
            <p className="text-cream/70 leading-relaxed">{p.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}