import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import { CASE_STUDIES } from "@/lib/case-studies";
import { cloudinaryUrl } from "@/lib/cloudinary";

const SITE = "https://evenzaa-sable.vercel.app";

export function CaseStudies() {
  const url = `${SITE}/case-studies`;

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Our Work & Case Studies | Evenza Event Manpower",
    description:
      "Explore real-world case studies of events managed by Evenza in Jaipur and Rajasthan. From royal destination weddings to corporate summits and live concerts.",
    url,
    publisher: {
      "@type": "Organization",
      name: "Evenza Hospitality Services",
      url: SITE,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: url },
    ],
  };

  return (
    <main className="pt-24 min-h-screen-dvh bg-background">
      <Helmet>
        <title>Our Work & Case Studies | Evenza Event Manpower</title>
        <meta
          name="description"
          content="Explore real-world case studies of events managed by Evenza in Jaipur and Rajasthan. See how we deliver flawless manpower and hospitality on the ground."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">{JSON.stringify(pageJsonLd)}</script>
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
          <li className="text-gold truncate max-w-[240px]">Case Studies</li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 leading-tight">
              Our <span className="text-gold italic">Work</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/70 leading-relaxed mb-8">
              We don't just supply manpower; we deliver successful events. Explore our recent case studies across destination weddings, corporate summits, and large-scale concerts in Rajasthan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CASE STUDIES GRID ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, idx) => (
              <motion.article
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-card rounded-2xl border border-white/5 hover:border-gold/30 transition-colors duration-300 overflow-hidden"
              >
                {/* Thumbnail */}
                <Link to={`/case-studies/${study.slug}`} className="block relative aspect-video overflow-hidden bg-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <img
                    src={cloudinaryUrl(study.thumbnail, { width: 600, height: 400 })}
                    alt={study.title}
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block px-3 py-1 bg-background/80 backdrop-blur text-gold text-xs font-medium rounded-full border border-white/10">
                      {study.eventType}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center gap-4 text-xs text-cream/50 mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> {study.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {study.date}
                    </div>
                  </div>

                  <Link to={`/case-studies/${study.slug}`} className="block group-hover:text-gold transition-colors">
                    <h2 className="font-display text-xl text-foreground mb-3 leading-snug line-clamp-2">
                      {study.title}
                    </h2>
                  </Link>
                  
                  <p className="text-sm text-cream/60 leading-relaxed mb-6 line-clamp-3">
                    {study.challenge}
                  </p>

                  <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium text-cream/80">
                      <Users className="w-4 h-4 text-gold" />
                      {study.manpowerSupplied}
                    </div>
                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-gold hover:text-gold/80 transition-colors"
                    >
                      Read Case Study <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
