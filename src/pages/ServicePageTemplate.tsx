import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import {
  Sparkles,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Phone,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Users,
  Zap,
} from "lucide-react";
import { WHATSAPP, PHONE_TEL, PHONE, EMAIL } from "@/lib/constants";
import type { FAQ, RelatedPage } from "@/lib/seo-pages";

interface ServicePageProps {
  path?: string;
  seoTitle: string;
  metaDescription: string;
  keyword: string;
  subtitle: string;
  description: string;
  features: string[];
  faqs?: FAQ[];
  relatedPages?: RelatedPage[];
}

const SITE = "https://evenzaa-sable.vercel.app";

const HOW_IT_WORKS = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Tell Us Your Requirements",
    desc: "Share your event date, location, number of staff needed, and the roles you require. We respond within a few hours with a detailed quote.",
  },
  {
    icon: Users,
    step: "02",
    title: "We Select & Brief Your Crew",
    desc: "We shortlist, train, and brief the right crew for your specific event — covering your brand standards, event flow, and any special requirements.",
  },
  {
    icon: Zap,
    step: "03",
    title: "We Deploy & Supervise",
    desc: "Your uniformed, groomed crew arrives on time. An Evenza supervisor manages the ground team so you focus on your event, not your staff.",
  },
];

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="border border-white/10 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-card hover:bg-white/5 transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="font-medium text-foreground leading-snug">{faq.q}</span>
        <ChevronDown
          className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 pt-1 text-cream/70 leading-relaxed text-sm border-t border-white/5">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ServicePageTemplate({
  seoTitle,
  metaDescription,
  keyword,
  subtitle,
  description,
  features,
  faqs = [],
  relatedPages = [],
}: ServicePageProps) {
  const { pathname } = useLocation();
  const url = `${SITE}${pathname}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: keyword,
    description: metaDescription,
    provider: {
      "@type": "Organization",
      name: "Evenza Hospitality Services",
      url: SITE,
      telephone: "+91-91617-10849",
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Choti Chaupad",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
    },
    url,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: keyword, item: url },
    ],
  };

  const isVolunteer = props.type === "volunteer";

  return (
    <main className="pt-24 min-h-screen">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Evenza" />
        <meta property="og:image" content={`${SITE}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${keyword} — Evenza Event Staffing India`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@evenzaevent" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`${SITE}/og-image.jpg`} />
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 lg:px-12 pt-4 pb-2">
        <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-gold transition-colors">
              Home
            </Link>
          </li>
          <ChevronRight className="w-3 h-3" />
          <li className="text-gold truncate max-w-[200px]">{keyword}</li>
        </ol>
      </nav>

      {/* ── Hero ── */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[#F7F5F1] dark:to-background -z-10" />
        {/* Ambient glow */}
        <motion.div
          animate={{ x: [0, 60, -60, 0], y: [0, -60, 60, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none -z-10"
          style={{ background: "rgba(200, 154, 66, 0.18)" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border gold-border text-gold text-xs tracking-widest uppercase mb-8">
              <Sparkles className="w-3 h-3" /> Professional Event Staffing
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 capitalize leading-tight">
              {keyword}
            </h1>
            <p className="text-xl text-cream/90 font-medium mb-4">{subtitle}</p>
            <p className="text-base md:text-lg text-cream/70 leading-relaxed mb-10 max-w-3xl mx-auto">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary justify-center">
                Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <button
                onClick={() => window.open(`https://wa.me/${WHATSAPP}`, "_blank")}
                className="btn-secondary justify-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Features / Why Choose ── */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-4">
            Why Choose Our <span className="text-gold">{keyword}</span>?
          </h2>
          <p className="text-center text-cream/60 mb-14 max-w-2xl mx-auto">
            Every Evenza deployment is backed by rigorous training, on-ground supervision,
            and a commitment to making your event flawless.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-card p-6 rounded-2xl border border-white/5 flex gap-4 hover:border-gold/20 transition-colors duration-300"
              >
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-cream/80 leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-4">
            How It <span className="text-gold">Works</span>
          </h2>
          <p className="text-center text-cream/60 mb-14 max-w-xl mx-auto">
            Simple, transparent, and accountable — from your first enquiry to event wrap.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative text-center p-8 rounded-2xl bg-card border border-white/5 hover:border-gold/20 transition-colors duration-300"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold text-background font-bold text-xs flex items-center justify-center">
                  {step.step}
                </div>
                <step.icon className="w-8 h-8 text-gold mx-auto mb-4 mt-2" />
                <h3 className="font-display text-xl mb-3">{step.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      {faqs.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/30" aria-label="Frequently Asked Questions">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl md:text-4xl text-center mb-4">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <p className="text-center text-cream/60 mb-12">
              Everything you need to know about booking {keyword} with Evenza.
            </p>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} faq={faq} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related Pages ── */}
      {relatedPages.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="font-display text-2xl md:text-3xl text-center mb-10">
              Explore Related <span className="text-gold">Services</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedPages.map((rp) => (
                <Link
                  key={rp.path}
                  to={rp.path}
                  className="px-5 py-2.5 rounded-full border border-border hover:border-gold/50 hover:text-gold text-cream/70 transition-all duration-300 text-sm"
                >
                  {rp.label} <ChevronRight className="inline w-3 h-3 ml-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA / Contact ── */}
      <section id="contact" className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border gold-border text-gold text-xs tracking-widest uppercase mb-6">
            <Sparkles className="w-3 h-3" /> {isVolunteer ? "Ready to Join?" : "Ready to Book?"}
          </div>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            {isVolunteer ? "Start Working in " : "Hire "}<span className="text-gold">{keyword}</span>
          </h2>
          <p className="text-cream/60 mb-10 leading-relaxed">
            {isVolunteer 
              ? "Join our WhatsApp community today to get instant updates on upcoming paid event jobs and volunteering opportunities across Rajasthan."
              : "Contact Evenza now and get a detailed staffing proposal within a few hours. No middlemen, transparent pricing, and a supervisor on every deployment."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => window.open(`https://wa.me/${WHATSAPP}`, "_blank")}
              className="btn-primary justify-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" /> {isVolunteer ? "Join WhatsApp Group" : "WhatsApp Us Now"}
            </button>
            {!isVolunteer && (
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary justify-center">
                <Phone className="w-4 h-4 mr-2" /> Call {PHONE}
              </a>
            )}
          </div>
          {!isVolunteer && (
            <p className="text-cream/40 text-xs">
              Or email us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-gold hover:underline">
                {EMAIL}
              </a>
            </p>
          )}
          <div className="mt-10 pt-8 border-t border-white/5">
            <Link to="/" className="text-sm text-cream/50 hover:text-gold transition-colors">
              ← Back to Evenza Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
