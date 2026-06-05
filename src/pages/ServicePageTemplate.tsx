import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { Sparkles, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/constants";

interface ServicePageProps {
  path?: string;
  seoTitle: string;
  metaDescription: string;
  keyword: string;
  subtitle: string;
  description: string;
  features: string[];
}

const SITE = "https://evenzaa.lovable.app";

export function ServicePageTemplate({
  seoTitle,
  metaDescription,
  keyword,
  subtitle,
  description,
  features,
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
    },
    areaServed: keyword.split(" ").slice(-1)[0],
    url,
  };

  return (
    <main className="pt-24 min-h-screen">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[#F7F5F1] -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border gold-border text-gold text-xs tracking-widest uppercase mb-8">
              <Sparkles className="w-3 h-3" /> Professional Services
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 capitalize leading-tight">
              {keyword}
            </h1>
            <p className="text-xl text-cream/90 font-medium mb-4">{subtitle}</p>
            <p className="text-lg text-cream/70 leading-relaxed mb-10">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary justify-center">
                Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <button
                onClick={() => {
                  window.open(`https://wa.me/${WHATSAPP}`, "_blank");
                }}
                className="btn-secondary justify-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-16">
            Why Choose Our <span className="text-gold">{keyword}</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-white/5 flex gap-4"
              >
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
                <p className="text-cream/80">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section mapping */}
      <section id="contact" className="py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl mb-6">Ready to hire {keyword}?</h2>
          <p className="text-cream/70 mb-8">Contact Evenza today for the best event staffing and hospitality solutions.</p>
          <a href="/" className="btn-primary mx-auto w-max">
            Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}
