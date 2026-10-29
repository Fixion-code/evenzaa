import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronRight, ArrowLeft, Users, Calendar, MapPin, CheckCircle, ShieldCheck } from "lucide-react";
import { CASE_STUDIES } from "@/lib/case-studies";

const SITE = "https://evenzaa-sable.vercel.app";

export function CaseStudyTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const study = CASE_STUDIES.find((c) => c.slug === slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  const url = `${SITE}/case-studies/${study.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.metaDescription,
    image: study.thumbnail,
    author: {
      "@type": "Organization",
      name: "Evenza Hospitality Services",
      url: SITE,
    },
    publisher: {
      "@type": "Organization",
      name: "Evenza Hospitality Services",
      url: SITE,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/og-image.jpg`,
      },
    },
    datePublished: new Date().toISOString(), // In a real app, this should be the actual publish date
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE}/case-studies` },
      { "@type": "ListItem", position: 3, name: study.title, item: url },
    ],
  };

  return (
    <main className="pt-24 min-h-screen-dvh bg-background">
      <Helmet>
        <title>{study.seoTitle}</title>
        <meta name="description" content={study.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 lg:px-12 pt-4 pb-8">
        <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
          <ChevronRight className="w-3 h-3" />
          <li><Link to="/case-studies" className="hover:text-gold transition-colors">Case Studies</Link></li>
          <ChevronRight className="w-3 h-3" />
          <li className="text-gold truncate max-w-[200px] sm:max-w-[400px]">{study.title}</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        {/* Back button */}
        <Link 
          to="/case-studies"
          className="inline-flex items-center text-sm font-medium text-cream/60 hover:text-gold mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all work
        </Link>

        {/* ── HEADER ── */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider rounded-full border border-gold/20">
              {study.eventType}
            </span>
            {study.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/5 text-cream/70 text-xs font-medium rounded-full border border-white/5">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-10 max-w-5xl">
            {study.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-12 gap-y-6 py-8 border-y border-white/10">
            <div>
              <p className="text-xs text-cream/40 uppercase tracking-widest mb-1.5">Location</p>
              <div className="flex items-center gap-2 font-medium text-cream/90">
                <MapPin className="w-4 h-4 text-gold" /> {study.location}
              </div>
            </div>
            <div>
              <p className="text-xs text-cream/40 uppercase tracking-widest mb-1.5">Date</p>
              <div className="flex items-center gap-2 font-medium text-cream/90">
                <Calendar className="w-4 h-4 text-gold" /> {study.date}
              </div>
            </div>
            <div>
              <p className="text-xs text-cream/40 uppercase tracking-widest mb-1.5">Manpower Deployed</p>
              <div className="flex items-center gap-2 font-medium text-cream/90">
                <Users className="w-4 h-4 text-gold" /> {study.manpowerSupplied}
              </div>
            </div>
          </div>
        </header>

        {/* ── CONTENT ── */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <article className="prose prose-invert prose-lg max-w-none">
            {/* Main hero image */}
            <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-white/10">
              <img src={study.thumbnail} alt={study.title} className="w-full h-full object-cover" />
            </div>

            <div className="mb-12">
              <h2 className="flex items-center gap-3 text-2xl font-display text-foreground mb-6">
                <ShieldCheck className="w-6 h-6 text-gold" /> The Challenge
              </h2>
              <p className="text-cream/80 leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/10">
                {study.challenge}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="flex items-center gap-3 text-2xl font-display text-foreground mb-6">
                <Users className="w-6 h-6 text-gold" /> Our Solution
              </h2>
              <p className="text-cream/80 leading-relaxed p-6 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent border border-gold/10">
                {study.solution}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="flex items-center gap-3 text-2xl font-display text-foreground mb-6">
                <CheckCircle className="w-6 h-6 text-gold" /> The Result
              </h2>
              <p className="text-cream/80 leading-relaxed border-l-4 border-gold pl-6 py-2">
                {study.result}
              </p>
            </div>
          </article>

          {/* Sidebar CTA */}
          <aside className="sticky top-32 bg-card p-8 rounded-2xl border border-gold/20 shadow-2xl">
            <h3 className="font-display text-2xl mb-4 text-foreground">Need a similar team?</h3>
            <p className="text-cream/60 text-sm leading-relaxed mb-8">
              Whether it's a royal wedding, a corporate summit, or a large-scale concert, Evenza provides the trained manpower to execute flawlessly.
            </p>
            <div className="space-y-4">
              <Link to="/#contact" className="w-full btn-primary justify-center text-sm py-4">
                Request a Proposal
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
