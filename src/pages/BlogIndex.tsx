import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SITE_CONFIG } from "@/lib/siteConfig";

export function BlogIndex() {
  const url = `${SITE_CONFIG.url}/blog`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${url}#blog`,
        "url": url,
        "name": "Evenza Event Management & Manpower Blog",
        "description": "Expert guides, cost breakdowns, and staffing strategies for event planners, wedding hosts, and organizers in Jaipur, Rajasthan, and India.",
        "publisher": { "@id": `${SITE_CONFIG.url}/#organization` },
        "blogPost": BLOG_POSTS.map((post) => ({
          "@type": "BlogPosting",
          "@id": `${SITE_CONFIG.url}/blog/${post.slug}#post`,
          "headline": post.title,
          "url": `${SITE_CONFIG.url}/blog/${post.slug}`,
          "datePublished": post.datePublished,
          "dateModified": post.dateModified,
          "author": {
            "@type": "Person",
            "name": post.author.name,
            "url": post.author.url,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_CONFIG.url}/` },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": url },
        ],
      },
    ],
  };

  return (
    <main id="main" className="pt-24 min-h-screen-dvh">
      <Helmet>
        <title>Event Staffing & Manpower Guides | Evenza Blog Jaipur</title>
        <meta
          name="description"
          content="Industry guides on event manpower costs, wedding hospitality ratios, volunteer management, and event planning tips in Jaipur, Rajasthan, and India."
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Evenza Event Staffing & Manpower Blog" />
        <meta
          property="og:description"
          content="Practical guides on event manpower costs, staffing ratios, and hospitality teams across Rajasthan and India."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content={`${SITE_CONFIG.url}/og-image.jpg`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
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
          <li className="text-gold">Blog</li>
        </ol>
      </nav>

      {/* ── Hero ── */}
      <section className="py-12 md:py-16 text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border gold-border text-gold text-xs tracking-widest uppercase mb-6">
          <Sparkles className="w-3 h-3" /> Event Insights & Staffing Guides
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight">
          Evenza Event Staffing & Management Blog
        </h1>
        <p className="text-base md:text-lg text-cream/70 leading-relaxed max-w-2xl mx-auto">
          Practical budgeting guides, hospitality ratio calculators, and insider advice for planning seamless events across Jaipur, Rajasthan, and pan-India.
        </p>
      </section>

      {/* ── Blog Grid ── */}
      <section className="pb-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-card rounded-2xl border border-white/10 hover:border-gold/30 transition-all duration-300 flex flex-col overflow-hidden group shadow-lg"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-gold/10 text-gold font-medium border border-gold/20">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readingTime}
                  </span>
                </div>

                <h2 className="font-display text-xl text-foreground mb-3 group-hover:text-gold transition-colors leading-snug">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-sm text-cream/70 line-clamp-3 mb-6 leading-relaxed flex-1">
                  {post.metaDescription}
                </p>

                <div className="border-t border-white/5 pt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-gold" /> {post.author.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <time dateTime={post.datePublished}>{post.datePublished}</time>
                  </span>
                </div>

                <div className="mt-4 pt-2">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:underline"
                  >
                    Read Full Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
export default BlogIndex;
