import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ROLES } from "@/lib/constants";

export function Roles() {
  return (
    <section
      id="roles"
      className="section-padding bg-gradient-to-b from-background to-[hsl(var(--blush))]/40"
    >
      <SectionHeader
        kicker="Our Crew"
        title={
          <>
            Every role,{" "}
            <span className="italic text-gold">trained and ready</span>
          </>
        }
        sub="Mix and match the team you need — from a single runner to a 200-person crew."
      />

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/20 rounded-lg overflow-hidden border gold-border">
        {ROLES.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-card p-8 hover:bg-card/80 hover:shadow-gold transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-6 bg-gold group-hover:h-8 transition-all duration-300" />
              <h3 className="font-display text-2xl text-cream">{r.title}</h3>
            </div>
            <p className="text-cream/65 leading-relaxed pl-4">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
