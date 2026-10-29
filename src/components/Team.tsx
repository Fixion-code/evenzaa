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

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 md:gap-8">
        {FOUNDERS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="card p-6 md:p-8 group"
          >
            {/* Monogram avatar */}
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center font-display text-2xl text-gold mb-4 md:mb-5 group-hover:scale-105 transition-transform duration-300">
              {p.name
                .split(" ")
                .map((s) => s[0])
                .join("")}
            </div>
            <h3 id={`founder-${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="font-display text-2xl text-foreground">{p.name}</h3>
            <div className="text-gold text-sm tracking-widest uppercase mt-1 mb-4">
              {p.role}
            </div>
            <p className="text-muted-foreground leading-relaxed">{p.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}