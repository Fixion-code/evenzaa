import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Award, MapPin, Phone, Mail, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function AboutPage() {
  const url = `${siteConfig.SITE_URL}/about`;

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": `About Evenza Hospitality Services | Shree Ji Company Pvt. Ltd.`,
        "description": "Learn about Evenza Hospitality Services, a venture of Shree Ji Company Pvt. Ltd. Founded by Shlok Aggarwal and Stuti Shukla in Jaipur, Rajasthan.",
        "isPartOf": { "@id": `${siteConfig.SITE_URL}/#website` },
        "about": { "@id": `${siteConfig.SITE_URL}/#organization` },
        "datePublished": "2024-01-15",
        "dateModified": "2026-10-29",
        "breadcrumb": { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": url },
        ],
      },
      {
        "@type": "Person",
        "@id": `${url}#shlok`,
        "name": "Shlok Aggarwal",
        "jobTitle": "Founder & Director",
        "url": url,
        "image": `${siteConfig.SITE_URL}/og-image.jpg`,
        "sameAs": ["https://www.linkedin.com/in/evenza-india"],
        "worksFor": { "@id": `${siteConfig.SITE_URL}/#organization` },
      },
      {
        "@type": "Person",
        "@id": `${url}#stuti`,
        "name": "Stuti Shukla",
        "jobTitle": "Co-Founder & Operations Lead",
        "url": url,
        "image": `${siteConfig.SITE_URL}/og-image.jpg`,
        "sameAs": ["https://instagram.com/evenzaevent"],
        "worksFor": { "@id": `${siteConfig.SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <main id="main-content" className="pt-24 min-h-screen-dvh bg-background">
      <Helmet>
        <title>About Evenza | Event Manpower & Hospitality Agency Jaipur</title>
        <meta
          name="description"
          content="Evenza Hospitality Services is a brand of Shree Ji Company Pvt. Ltd., founded by Shlok Aggarwal and Stuti Shukla. Professional on-ground event manpower in Jaipur & pan-India."
        />
        <meta name="robots" content="index, follow" />
        <meta name="date" content="2024-01-15" />
        <meta name="last-modified" content="2026-10-29" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="About Evenza | Event Manpower Agency Jaipur" />
        <meta property="og:description" content="Discover the faces behind Evenza — professional event manpower, hospitality staff, and volunteer management across India." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(aboutJsonLd)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 pt-4 pb-2">
        <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
          <li className="text-gold">› About Us</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-3 block">
              Our Story & Leadership
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 leading-tight">
              About <span className="text-gold italic">Evenza Hospitality</span>
            </h1>
            <p className="text-xs text-muted-foreground mb-4">
              <time dateTime="2026-10-29">Updated 29 October 2026</time> · Shree Ji Company Pvt. Ltd.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Evenza Hospitality Services is a venture of <strong className="text-foreground">Shree Ji Company Pvt. Ltd.</strong>, 
              headquartered in Jaipur, Rajasthan. Born from the reality that event planners and families struggled with 
              unreliable, untrained temporary labor, Evenza was built to professionalize on-ground event manpower.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Mission & Philosophy */}
      <section className="py-16 md:py-20 bg-card/30">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl text-foreground mb-6">
              We Don&apos;t Outsource. <span className="text-gold italic">We Train, Deploy &amp; Supervise.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                In the event industry, temporary manpower is often treated as an afterthought — brokered through casual labor contractors with zero grooming, background checks, or role clarity.
              </p>
              <p>
                At Evenza, every deployment operates on a fundamentally different standard. Our staff are vetted, identity-verified, and put through rigorous grooming protocols before they step foot on an event floor.
              </p>
              <p>
                Whether managing a 1,000-guest royal wedding at Rambagh Palace or handling digital QR registrations for 2,000 delegates at JECC, an Evenza supervisor is always stationed on site to coordinate show flow and maintain accountability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="card p-5">
              <ShieldCheck className="w-8 h-8 text-gold mb-3" />
              <h3 className="font-display text-lg text-foreground mb-1">Vetted &amp; Verified</h3>
              <p className="text-xs text-muted-foreground">Comprehensive ID verification and background checks for complete peace of mind.</p>
            </div>
            <div className="card p-5">
              <Users className="w-8 h-8 text-gold mb-3" />
              <h3 className="font-display text-lg text-foreground mb-1">Dedicated Supervisors</h3>
              <p className="text-xs text-muted-foreground">Every deployment of 5+ staff includes a seasoned team leader on site.</p>
            </div>
            <div className="card p-5">
              <Award className="w-8 h-8 text-gold mb-3" />
              <h3 className="font-display text-lg text-foreground mb-1">Professional Grooming</h3>
              <p className="text-xs text-muted-foreground">Crisp formal uniforms, grooming standards, and polite etiquette training.</p>
            </div>
            <div className="card p-5">
              <MapPin className="w-8 h-8 text-gold mb-3" />
              <h3 className="font-display text-lg text-foreground mb-1">Pan-India Reach</h3>
              <p className="text-xs text-muted-foreground">Jaipur based with proven deployment capacity across Rajasthan and 30+ Indian cities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-2 block">
              Founders &amp; Leadership
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Spearheaded by Industry Veterans
            </h2>
            <p className="text-muted-foreground text-sm mt-3">
              Direct founder accountability on every event. You have a direct line to our executive team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Shlok Aggarwal */}
            <div className="card p-6 text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gold/40">
                <img src="/og-image.jpg" alt="Shlok Aggarwal - Founder Evenza" className="w-full h-full object-cover" width={96} height={96} />
              </div>
              <h3 className="font-display text-xl text-foreground">Shlok Aggarwal</h3>
              <p className="text-xs text-gold uppercase tracking-wider mt-0.5 mb-3">Founder &amp; Director</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                Overseeing pan-India operations, client partnerships, and large-scale deployment strategies across live concerts, political rallies, and corporate summits.
              </p>
              <a
                href="https://www.linkedin.com/in/evenza-india"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gold hover:underline"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn Profile
              </a>
            </div>

            {/* Stuti Shukla */}
            <div className="card p-6 text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gold/40">
                <img src="/og-image.jpg" alt="Stuti Shukla - Co-founder Evenza" className="w-full h-full object-cover" width={96} height={96} />
              </div>
              <h3 className="font-display text-xl text-foreground">Stuti Shukla</h3>
              <p className="text-xs text-gold uppercase tracking-wider mt-0.5 mb-3">Co-Founder &amp; Operations Lead</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                Spearheading destination wedding hospitality, guest shadow teams, quality assurance, and volunteer talent development across Rajasthan.
              </p>
              <a
                href="https://instagram.com/evenzaevent"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gold hover:underline"
              >
                <Instagram className="w-3.5 h-3.5" /> Instagram Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Registration & Contact Block */}
      <section className="py-14 border-t border-white/5 bg-card/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl text-foreground mb-3">Company Details &amp; Registration</h2>
          <p className="text-muted-foreground text-sm mb-6">
            <strong>Evenza Hospitality Services</strong> is a registered brand operating under <strong>Shree Ji Company Pvt. Ltd.</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-gold" /> Choti Chaupad, Jaipur, Rajasthan 302002</span>
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-gold" /> +91 91617 10849</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-gold" /> indiaevenza@gmail.com</span>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Link to="/#contact" className="btn-primary px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold">
              Request Staffing Quote
            </Link>
            <Link to="/portfolio" className="border border-border px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-foreground hover:border-gold hover:text-gold transition-colors">
              View Event Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
