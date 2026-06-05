import { motion } from "framer-motion";

interface SectionHeaderProps {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
}

export function SectionHeader({ kicker, title, sub }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto text-center mb-10 md:mb-12"
    >
      <div className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
        {kicker}
      </div>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
        {title}
      </h2>
      {sub && (
        <p className="mt-5 text-muted-foreground text-base md:text-lg">{sub}</p>
      )}
      <div className="gold-divider w-24 mx-auto mt-8" />
    </motion.div>
  );
}
