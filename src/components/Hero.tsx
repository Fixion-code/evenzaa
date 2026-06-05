import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP, STATS } from "@/lib/constants";

// Animated counter hook
function useCountUp(target: string, duration: number = 2000) {
  const [count, setCount] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Extract numeric part
          const numericMatch = target.match(/(\d+)/);
          if (!numericMatch) {
            setCount(target);
            return;
          }

          const endNum = parseInt(numericMatch[1], 10);
          const suffix = target.replace(/\d+/, "");
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentNum = Math.floor(eased * endNum);
            setCount(`${currentNum}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatItem({ number, label }: { number: string; label: string }) {
  const { count, ref } = useCountUp(number);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl md:text-4xl stats-number">{count}</div>
      <div className="text-xs uppercase tracking-widest stats-label mt-1">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[#F7F5F1]" />
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(#c89a42 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="particles-container">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border gold-border text-gold text-xs tracking-widest uppercase mb-8"
          >
            <Sparkles className="w-3 h-3" /> Jaipur · Pan-India
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[1.02] hero-title">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="block"
            >
              India's Premier
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="block highlight"
            >
              Event Manpower
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="block"
            >
              & Hospitality Partner.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 text-lg text-cream/75 max-w-2xl leading-relaxed"
          >
            From intimate weddings in the Pink City to large-scale corporate
            summits and concerts across India — Evenza delivers trained crews,
            zero mediators, and flawless on-ground execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="btn-primary shadow-soft"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </motion.div>
        </motion.div>

        {/* Right decorative card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lg:col-span-4 hidden lg:block"
        >
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-[rgba(86,98,56,0.15)] shadow-deep group">
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #7a8450, #586237, #394126)" }} />
            {/* Shimmer overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="font-display text-7xl text-gold italic leading-none">
                E
              </div>
              <div className="gold-divider my-4" />
              <p className="text-white/80 text-sm">
                A brand of Shree Ji Company Pvt. Ltd.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="absolute bottom-0 left-0 right-0 stats">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <StatItem key={s.label} number={s.number} label={s.label} />
          ))}
        </div>
      </div>
    </header>
  );
}