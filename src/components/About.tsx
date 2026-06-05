import { motion } from "framer-motion";
import { ABOUT_FEATURES } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            About Evenza
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight">
            Crafted in Jaipur.{" "}
            <span className="italic text-gold">Trusted across India.</span>
          </h2>
          <div className="gold-divider w-24 mt-8 mb-8" />
          <p className="text-cream/80 leading-relaxed mb-5">
            Evenza Hospitality Services is the flagship brand of{" "}
            <strong className="text-cream">Shree Ji Company Pvt. Ltd.</strong> —
            founded by{" "}
            <strong className="text-cream">Shlok Aggarwal</strong> and
            co-founded by{" "}
            <strong className="text-cream">Stuti Shukla</strong>. Born from
            years of frontline experience in India's events and wedding
            industry, Evenza is more than a staffing agency; we are a
            full-spectrum hospitality partner.
          </p>
          <p className="text-cream/70 leading-relaxed">
            We place the right people in the right roles — runners, porters,
            shadows, supervisors, managers and entire production crews — so your
            event runs like clockwork, whether it's a 100-guest soirée or a
            10,000-attendee festival.
          </p>
        </motion.div>

        {/* Right feature cards */}
        <div className="grid grid-cols-2 gap-4">
          {ABOUT_FEATURES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-lg border gold-border bg-card shadow-soft hover:shadow-gold hover:-translate-y-1 transition-all duration-300 group"
            >
              <c.icon className="w-6 h-6 text-gold mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="font-display text-xl text-cream">{c.title}</div>
              <div className="text-sm text-cream/60 mt-2">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}