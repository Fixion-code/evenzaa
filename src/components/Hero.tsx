import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";
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
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yContent = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <header
      id="top"
      className="relative min-h-screen-dvh flex flex-col justify-between overflow-hidden pt-24"
    >
      {/* Decorative background with parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[#F7F5F1] dark:to-background" />
        {/* Animated Glow Orbs */}
        <motion.div
          animate={{ x: [0, 80, -80, 0], y: [0, -80, 80, 0], scale: [1, 1.15, 0.85, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full blur-[80px] pointer-events-none"
          style={{ background: 'rgba(200, 154, 66, 0.4)' }}
        />
        <motion.div
          animate={{ x: [0, -100, 100, 0], y: [0, 100, -100, 0], scale: [1, 1.25, 0.75, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[80px] pointer-events-none"
          style={{ background: 'rgba(200, 154, 66, 0.3)' }}
        />
        <motion.div
          animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0], scale: [1, 0.8, 1.2, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full blur-[80px] pointer-events-none"
          style={{ background: 'rgba(200, 154, 66, 0.25)' }}
        />
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(#c89a42 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="particles-container">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div className="flex-1 flex items-center w-full py-12 lg:py-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center w-full">
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

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] hero-title">
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
                className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 text-cream/90"
              >
                & Hospitality Partner.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 text-lg text-cream/80 max-w-2xl leading-relaxed"
            >
              Hire the best event staffing agency in Jaipur. From intimate wedding hospitality teams in the Pink City to large-scale corporate event staffing, exhibition staff, and trained event volunteers across India — Evenza delivers flawless on-ground execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="btn-primary shadow-soft w-full sm:w-auto justify-center"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => {
                  toast.success("Connecting to WhatsApp...", {
                    description: "Redirecting you to our chat securely.",
                  });
                  setTimeout(() => {
                    window.open(`https://wa.me/${WHATSAPP}`, "_blank");
                  }, 1000);
                }}
                className="btn-secondary w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </button>
            </motion.div>
          </motion.div>

          {/* Right decorative card with parallax */}
          <motion.div
            style={{ y: yContent }}
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-[rgba(86,98,56,0.15)] shadow-deep group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
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
      </div>

      {/* Stats strip */}
      <div className="w-full relative z-10 stats backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((s) => (
            <StatItem key={s.label} number={s.number} label={s.label} />
          ))}
        </div>
      </div>
    </header>
  );
}