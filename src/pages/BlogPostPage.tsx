import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, User, ChevronRight, MessageCircle, Phone, ArrowLeft, CheckCircle2 } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SITE_CONFIG } from "@/lib/siteConfig";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const url = `${SITE_CONFIG.url}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        "url": url,
        "headline": post.title,
        "name": post.title,
        "description": post.metaDescription,
        "datePublished": post.datePublished,
        "dateModified": post.dateModified,
        "inLanguage": "en-IN",
        "isPartOf": { "@id": `${SITE_CONFIG.url}/blog#blog` },
        "author": {
          "@type": "Person",
          "@id": post.author.id,
          "name": post.author.name,
          "jobTitle": post.author.role,
          "url": post.author.url,
        },
        "publisher": {
          "@type": "Organization",
          "@id": `${SITE_CONFIG.url}/#organization`,
          "name": SITE_CONFIG.businessName,
          "url": SITE_CONFIG.url,
          "logo": {
            "@type": "ImageObject",
            "url": `${SITE_CONFIG.url}/evenza-profile.png`,
          },
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": url,
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".answer-lead", "h1"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_CONFIG.url}/` },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_CONFIG.url}/blog` },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": url },
        ],
      },
      ...(post.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              "mainEntity": post.faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <main id="main" className="pt-24 min-h-screen-dvh">
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={post.seoTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_IN" />
        <meta property="article:published_time" content={post.datePublished} />
        <meta property="article:modified_time" content={post.dateModified} />
        <meta property="article:author" content={post.author.name} />
        <meta property="og:image" content={`${SITE_CONFIG.url}/og-image.jpg`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-4 pb-2">
        <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-gold transition-colors">
              Home
            </Link>
          </li>
          <ChevronRight className="w-3 h-3" />
          <li>
            <Link to="/blog" className="hover:text-gold transition-colors">
              Blog
            </Link>
          </li>
          <ChevronRight className="w-3 h-3" />
          <li className="text-gold truncate max-w-[200px] sm:max-w-xs">{post.title}</li>
        </ol>
      </nav>

      {/* ── Article Header ── */}
      <article className="max-w-4xl mx-auto px-6 py-8">
        <header className="mb-10 pb-8 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
            <span className="px-3 py-1 rounded-full bg-gold/10 text-gold font-medium border border-gold/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Published: <time dateTime={post.datePublished}>{post.datePublished}</time>
            </span>
            <span className="flex items-center gap-1">
              Updated: <time dateTime={post.dateModified}>{post.dateModified}</time>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readingTime}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center font-bold text-gold text-sm">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                <Link to={post.author.url} className="hover:text-gold transition-colors">
                  {post.author.name}
                </Link>
              </p>
              <p className="text-xs text-muted-foreground">{post.author.role}</p>
            </div>
          </div>
        </header>

        {/* ── Direct Answer Lead Paragraph ── */}
        <div className="answer-lead p-6 rounded-2xl bg-gold/5 border border-gold/20 mb-10 text-base sm:text-lg text-cream/90 font-medium leading-relaxed">
          {post.leadParagraph}
        </div>

        {/* ── Sections ── */}
        <div className="prose prose-invert max-w-none space-y-12">
          {post.sections.map((sec) => (
            <section key={sec.id} aria-labelledby={sec.id}>
              <h2 id={sec.id} className="font-display text-2xl sm:text-3xl text-foreground mb-4 pt-4">
                {sec.heading}
              </h2>
              <p className="text-base text-cream/80 leading-relaxed mb-6">{sec.content}</p>

              {sec.list && (
                <ul className="space-y-3 mb-6 pl-0 list-none">
                  {sec.list.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-cream/70 text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {sec.table && (
                <div className="overflow-x-auto my-8 border border-white/10 rounded-xl">
                  <table className="w-full text-left text-sm text-cream/80">
                    <thead className="bg-muted text-xs uppercase tracking-wider text-gold border-b border-white/10">
                      <tr>
                        {sec.table.headers.map((h, i) => (
                          <th key={i} scope="col" className="px-5 py-3 font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {sec.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`px-5 py-3.5 ${cIdx === 0 ? "font-medium text-foreground" : ""}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* ── In-Article FAQs ── */}
        {post.faqs.length > 0 && (
          <section className="mt-16 pt-10 border-t border-white/10" aria-label="Frequently Asked Questions">
            <h2 id="faqs" className="font-display text-2xl sm:text-3xl text-foreground mb-6">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <div className="space-y-4">
              {post.faqs.map((f, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border border-white/5">
                  <h3 className="font-semibold text-foreground text-base mb-2">{f.q}</h3>
                  <p className="text-sm text-cream/70 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Related Services ── */}
        {post.relatedServices.length > 0 && (
          <section className="mt-12 pt-8 border-t border-white/10">
            <h2 id="related-services" className="font-display text-xl text-foreground mb-4">
              Related Event Staffing Services:
            </h2>
            <div className="flex flex-wrap gap-3">
              {post.relatedServices.map((rs) => (
                <Link
                  key={rs.path}
                  to={rs.path}
                  className="px-4 py-2 rounded-full border border-border hover:border-gold/50 hover:text-gold text-cream/70 transition-colors text-xs font-medium"
                >
                  {rs.label} →
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── In-Content CTA Box ── */}
        <section className="mt-16 p-8 rounded-2xl bg-card border border-gold/30 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-xl mx-auto">
            <h2 id="cta-hire" className="font-display text-2xl sm:text-3xl text-foreground mb-3">
              Planning an Event in <span className="text-gold">Jaipur or Rajasthan</span>?
            </h2>
            <p className="text-sm text-cream/70 mb-6 leading-relaxed">
              Get trained event manpower, hospitality hostesses, and backstage crew backed by dedicated supervisors. Transparent quotes delivered in 2–4 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
                  `Hi Evenza! I read your guide "${post.title}" and would like to enquire about event manpower.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us Now
              </a>
              <a href={`tel:${SITE_CONFIG.phoneTel}`} className="btn-secondary justify-center inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-gold transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to All Guides
          </Link>
        </div>
      </article>
    </main>
  );
}
export default BlogPostPage;
