import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { X, ZoomIn, ChevronRight, Users, MapPin } from "lucide-react";
import {
  PORTFOLIO_IMAGES,
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_STATS,
  type PortfolioImage,
} from "@/lib/portfolio-images";
import { cloudinaryUrl, cloudinarySrcSet } from "@/lib/cloudinary";

const SITE = "https://evenzaa-sable.vercel.app";

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? PORTFOLIO_IMAGES
        : PORTFOLIO_IMAGES.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  // Lock body scroll for lightbox
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  // ── JSON-LD Structured Data ─────────────────────────────────────────────
  const url = `${SITE}/portfolio`;

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Event Portfolio & Proof of Work | Evenza Hospitality Services",
    description:
      "Browse 50+ real event photographs from Evenza — concert manpower, destination wedding hospitality, corporate event staffing, exhibition crew, and sports event management across Rajasthan and India.",
    url,
    publisher: { "@id": `${SITE}/#organization` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: url },
    ],
  };

  // ImageGallery schema with first 15 images for rich results
  const imageGalleryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Evenza Event Management Portfolio — Proof of Work",
    description:
      "Professional event manpower and hospitality services portfolio showcasing real deployments across concerts, weddings, corporate events, exhibitions, festivals, political rallies, college events, and sports events in Jaipur, Rajasthan, and India.",
    url,
    image: PORTFOLIO_IMAGES.slice(0, 15).map((img) => ({
      "@type": "ImageObject",
      contentUrl: cloudinaryUrl(img.publicId, { width: 1200, height: 800 }),
      thumbnailUrl: cloudinaryUrl(img.publicId, { width: 600, height: 400 }),
      name: `${img.eventName} — ${img.location}`,
      description: img.caption,
      width: { "@type": "QuantitativeValue", value: 1200 },
      height: { "@type": "QuantitativeValue", value: 800 },
      creator: { "@id": `${SITE}/#organization` },
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What event types does Evenza staff across Rajasthan and India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evenza provides vetted event manpower and hospitality crews for luxury destination weddings, corporate summits, trade exhibitions, live music concerts, college festivals, and sports events across Jaipur, Rajasthan, and 30+ Indian cities.",
        },
      },
      {
        "@type": "Question",
        name: "Are all portfolio photographs verified proof of work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every photograph in our portfolio captures real on-ground staff deployments managed directly by Evenza supervisors without external subcontracting.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can Evenza deploy event manpower for an upcoming event?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide comprehensive staffing proposals within hours. For local Jaipur events, rapid crew deployments can be mobilized in as little as 24 to 48 hours.",
        },
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url,
    name: "Event Staffing Portfolio & Proof of Work | Evenza Jaipur",
    description: "Browse 50+ real event photographs from Evenza — concert manpower, destination wedding hospitality, corporate event staffing, exhibition crew, and sports event management across Rajasthan and India.",
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#organization` },
    datePublished: "2024-01-15",
    dateModified: "2026-10-29",
    breadcrumb: { "@id": `${url}#breadcrumb` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#portfolio-title", "#portfolio-overview", "#faq-heading"],
    },
  };

  const PORTFOLIO_FAQS = [
    {
      q: "What event types does Evenza staff across Rajasthan and India?",
      a: "Evenza provides vetted event manpower and hospitality crews for luxury destination weddings, corporate summits, trade exhibitions, live music concerts, college festivals, and sports events across Jaipur, Rajasthan, and 30+ Indian cities.",
    },
    {
      q: "Are all portfolio photographs verified proof of work?",
      a: "Yes. Every photograph in our portfolio captures real on-ground staff deployments managed directly by Evenza supervisors without external subcontracting.",
    },
    {
      q: "How quickly can Evenza deploy event manpower for an upcoming event?",
      a: "We provide comprehensive staffing proposals within hours. For local Jaipur events, rapid crew deployments can be mobilized in as little as 24 to 48 hours.",
    },
  ];

  const DEPLOYMENT_TABLE = [
    {
      category: "Destination Weddings",
      roles: "Shadow staff, luggage handlers, guest welcoming hostesses, F&B service crew",
      scale: "20 to 120+ staff per wedding",
      venues: "Rambagh Palace, Fairmont, City Palace Jaipur, Lake Pichola Udaipur",
    },
    {
      category: "Corporate Summits & Expos",
      roles: "QR registration desk, badge distribution, session ushers, help desk associates",
      scale: "15 to 80+ crew per summit",
      venues: "JECC Jaipur, Marriott, Clarks Amer, Novotel",
    },
    {
      category: "Concerts & Festivals",
      roles: "Backstage operations, artist liaisons, ticket scanners, gate marshals",
      scale: "30 to 200+ crew per show",
      venues: "SMS Stadium, Diggi Palace, Exhibition grounds",
    },
    {
      category: "Sports & Marathons",
      roles: "Route marshals, finish line medal crew, athlete kit counters, turnstile stewards",
      scale: "25 to 150+ marshals",
      venues: "JLN Marg, city circuits, sports complexes",
    },
  ];

  return (
    <main id="main-content" className="pt-24 min-h-screen-dvh bg-background">
      <Helmet>
        <title>Event Staffing Portfolio & Proof of Work | Evenza Jaipur</title>
        <meta
          name="description"
          content="See real proof of work — 50+ photographs from events managed by Evenza across Rajasthan. Concert manpower, wedding hospitality teams, corporate staffing, exhibition crews, and more."
        />
        <meta name="robots" content="index, follow" />
        <meta name="date" content="2024-01-15" />
        <meta name="last-modified" content="2026-10-29" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Event Portfolio | Evenza Hospitality Services" />
        <meta property="og:description" content="50+ real event photos — concerts, weddings, corporate events, exhibitions. See how Evenza delivers on-ground excellence across Rajasthan and India." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(pageJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(imageGalleryJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageJsonLd)}</script>
      </Helmet>

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 lg:px-12 pt-4 pb-2">
        <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          </li>
          <ChevronRight className="w-3 h-3" />
          <li className="text-gold truncate max-w-[240px]">Portfolio</li>
        </ol>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 id="portfolio-title" className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4 leading-tight">
              Event Staffing <span className="text-gold italic">Portfolio</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-cream/70 not-italic font-normal">Weddings, Concerts & Corporate Events Across Jaipur & India</span>
            </h1>
            <p className="text-xs text-muted-foreground mb-4">
              <time dateTime="2026-10-29">Updated October 2026</time> · Verified On-Ground Deliveries
            </p>
            <p id="portfolio-overview" className="text-lg md:text-xl text-cream/70 leading-relaxed mb-8">
              Every photograph is a real deployment. Real teams. Real events. Real results.
              From intimate destination weddings to 10,000-person public conclaves — see how
              Evenza delivers on-ground excellence across Rajasthan and India.
            </p>

            {/* Stats bar */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-6">
              <div className="text-center">
                <p className="text-3xl font-display text-gold">{PORTFOLIO_STATS.totalImages}+</p>
                <p className="text-xs text-cream/50 uppercase tracking-wider mt-1">Events Documented</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display text-gold">{PORTFOLIO_STATS.categories}</p>
                <p className="text-xs text-cream/50 uppercase tracking-wider mt-1">Event Categories</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display text-gold">Pan-Rajasthan</p>
                <p className="text-xs text-cream/50 uppercase tracking-wider mt-1">Coverage Area</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Portfolio Grid Section ── */}
      <section id="gallery" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Logical H2 heading maintaining correct heading nesting */}
          <h2 id="gallery-heading" className="font-display text-2xl sm:text-3xl text-center text-foreground mb-8">
            Event Deployments & <span className="text-gold italic">Visual Proof</span>
          </h2>

          {/* Category Filter Buttons */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-12"
            role="group"
            aria-label="Filter portfolio by event category"
          >
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50
                  ${
                    activeCategory === cat
                      ? "bg-gold text-black border-gold shadow-lg shadow-gold/20"
                      : "border-white/20 text-cream/70 hover:border-gold/50 hover:text-gold bg-transparent"
                  }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({PORTFOLIO_IMAGES.filter((i) => i.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, idx) => (
                <motion.figure
                  key={img.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.4) }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer bg-muted m-0 border border-white/5 hover:border-gold/20 transition-colors duration-300"
                  onClick={() => setSelectedImage(img)}
                  aria-label={`View: ${img.eventName} — ${img.location}`}
                >
                  <img
                    src={cloudinaryUrl(img.publicId, { width: 600, height: 400 })}
                    srcSet={cloudinarySrcSet(img.publicId, [400, 600, 900])}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt={img.alt}
                    title={`${img.eventName} — ${img.location}`}
                    width={600}
                    height={400}
                    loading={idx < 2 ? "eager" : "lazy"}
                    decoding="async"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hidden figcaption for SEO */}
                  <figcaption className="sr-only">{img.caption}</figcaption>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 md:p-6">
                    <ZoomIn className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 delay-100" />
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-2.5 py-0.5 bg-gold/90 text-black text-[10px] font-bold tracking-wider uppercase rounded-full mb-2">
                        {img.category}
                      </span>
                      <h3 className="text-white text-base font-semibold leading-snug">
                        {img.eventName}
                      </h3>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-white/60">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {img.location}
                        </span>
                        {img.teamSize && (
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" /> {img.teamSize}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>

          {/* Results count */}
          <p className="text-center text-cream/40 text-sm mt-8">
            Showing {filtered.length} of {PORTFOLIO_IMAGES.length} events
          </p>
        </div>
      </section>

      {/* ── Structured Data Table: Deployment Scale by Sector ── */}
      <section id="deployment-matrix" className="py-16 md:py-20 border-t border-white/5 bg-card/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="matrix-heading" className="font-display text-2xl md:text-3xl text-center text-foreground mb-4">
            Event Staffing <span className="text-gold italic">Deployment Scale</span>
          </h2>
          <p className="text-center text-muted-foreground text-sm max-w-2xl mx-auto mb-10">
            A comprehensive breakdown of Evenza's crew specializations, typical staffing ratios, and premier venue deployments.
          </p>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card border-b border-border text-left">
                  <th className="p-4 font-display text-gold">Sector</th>
                  <th className="p-4 font-display text-foreground">Core Crew Roles</th>
                  <th className="p-4 font-display text-foreground">Typical Scale</th>
                  <th className="p-4 font-display text-muted-foreground">Premier Venue Deployments</th>
                </tr>
              </thead>
              <tbody>
                {DEPLOYMENT_TABLE.map((row, idx) => (
                  <tr key={idx} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium text-gold whitespace-nowrap">{row.category}</td>
                    <td className="p-4 text-muted-foreground">{row.roles}</td>
                    <td className="p-4 text-foreground whitespace-nowrap">{row.scale}</td>
                    <td className="p-4 text-muted-foreground">{row.venues}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Portfolio Q&A Section (Targeting PAA & Featured Snippets) ── */}
      <section id="portfolio-faq" className="py-16 md:py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 id="faq-heading" className="font-display text-2xl md:text-3xl text-center text-foreground mb-4">
            Frequently Asked <span className="text-gold italic">Questions</span>
          </h2>
          <p className="text-center text-muted-foreground text-sm max-w-xl mx-auto mb-10">
            Common questions regarding our past event deployments, verification, and booking process.
          </p>

          <div className="space-y-4">
            {PORTFOLIO_FAQS.map((item, idx) => (
              <div key={idx} className="card p-6 border border-border rounded-xl">
                <h3 className="font-display text-lg text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 id="cta-heading" className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Need a team for your <span className="text-gold italic">next event</span>?
          </h2>
          <p className="text-cream/60 text-base mb-8 leading-relaxed">
            From 10-person intimate events to 10,000-person mega rallies — Evenza provides
            trained, uniformed, professional event manpower across Rajasthan and India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/#contact"
              className="px-8 py-3.5 bg-gold text-black font-semibold rounded-full hover:bg-gold/90 transition-colors text-sm tracking-wide uppercase"
            >
              Get a Quote
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-3.5 border-2 border-white/20 text-cream/80 font-semibold rounded-full hover:border-gold/50 hover:text-gold transition-all text-sm tracking-wide uppercase"
            >
              Read Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Enlarged view: ${selectedImage.eventName}`}
          >
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors z-50 p-2 rounded-full hover:bg-white/10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            <figure
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={cloudinaryUrl(selectedImage.publicId, { width: 1200, height: 800 })}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                loading="eager"
                className="max-w-full max-h-[72vh] object-contain rounded-md shadow-2xl mx-auto block"
              />
              <figcaption className="text-center mt-4 px-4 leading-relaxed">
                <strong className="text-gold text-base">
                  {selectedImage.eventName}, {selectedImage.location}
                </strong>
                {selectedImage.teamSize && (
                  <span className="text-white/70 text-sm"> · {selectedImage.teamSize}</span>
                )}
                <p className="text-white/90 text-sm mt-2">{selectedImage.caption}</p>
              </figcaption>
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
