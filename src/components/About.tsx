import { motion } from "framer-motion";
import { ABOUT_FEATURES } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
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
          <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
            The faces behind the execution
          </h2>
          <div className="gold-divider w-16 my-8" />
          <p className="text-muted-foreground leading-relaxed mb-5">
            Founded by industry veterans{" "}
            <strong className="text-foreground">Shree Ji Company Pvt. Ltd.</strong> —
            Spearheaded by{" "}
            <strong className="text-foreground">Shlok Aggarwal</strong> and{" "}
            <strong className="text-foreground">Stuti Shukla</strong>. Born from
            the realization that most event management companies struggled with
            unreliable temporary staff, Evenza was built to professionalize
            on-ground manpower.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We don't outsource. We train, we manage, and we deliver.
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
              className="card p-5 md:p-6 group"
            >
              <c.icon className="w-6 h-6 text-gold mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-display text-xl text-foreground">{c.title}</div>
              <div className="text-sm text-muted-foreground mt-2">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}