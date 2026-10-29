import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronDown, Search, ArrowRight, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const ALL_FAQS = [
  {
    category: "Hiring & Pricing",
    q: "What is event manpower and why is professional staffing critical?",
    a: "Event manpower refers to trained, vetted on-ground staff deployed to manage operational, logistical, and guest-handling functions at events. Rather than relying on untrained casual labor, Evenza provides groomed, uniformed, and supervised personnel who ensure seamless registration, guest relations, luggage handling, and crowd flow.",
  },
  {
    category: "Hiring & Pricing",
    q: "How much does event manpower cost in Jaipur?",
    a: "Pricing depends on role type (runners, porters, registration executives, shadow staff, or supervisors), shift duration, event location, and team size. Evenza provides transparent, direct pricing with no middleman markups. Inquiries receive an itemized proposal within 2 hours.",
  },
  {
    category: "Hiring & Pricing",
    q: "How quickly can Evenza deploy event staff in Jaipur?",
    a: "For standard Jaipur events, we can deploy teams within 24 to 48 hours. For large-scale conferences or destination weddings requiring 50+ staff, we recommend booking 5 to 7 days in advance to ensure thorough briefing and role allocation.",
  },
  {
    category: "Weddings",
    q: "How many hospitality staff do I need for a 500-guest wedding in Rajasthan?",
    a: "A 500-guest wedding typically requires 20 to 35 hospitality and logistics crew, including airport welcome staff, luggage handlers, guest shadow teams, and on-ground supervisors. The exact ratio varies by number of sub-functions and venue spread across hotels.",
  },
  {
    category: "Weddings",
    q: "What services do wedding hospitality shadow staff perform?",
    a: "Shadow staff provide dedicated, discreet personal assistance to the bride, groom, and immediate family members. They manage personal belongings, hydration, wardrobe adjustments, schedule reminders, and coordinate urgent on-ground tasks throughout celebrations.",
  },
  {
    category: "Corporate & Expos",
    q: "What roles does Evenza supply for corporate summits and trade expos?",
    a: "We supply digital QR registration executives, RFID badge distribution teams, keynote hall ushers, VIP speaker liaisons, help desk operators, direction marshals, and booth attendants at premier venues including JECC, Jaipur Marriott, and Clarks Amer.",
  },
  {
    category: "Concerts & Festivals",
    q: "Can Evenza provide backstage crew and concert runners?",
    a: "Yes. Our concert crews handle technical rider setups, green room hospitality, artist liaisons, barricade crowd management, pass verification, and production runner support for large-scale live music festivals and public shows.",
  },
  {
    category: "Volunteering & Careers",
    q: "How can students and freshers get part-time event work or volunteer with Evenza?",
    a: "College students, freshers, and freelancers can register via our Volunteers page or join our official WhatsApp group. Evenza offers genuine paid event gigs, flexible weekend schedules, professional grooming training, and verified experience certificates.",
  },
  {
    category: "Operations & Trust",
    q: "Are Evenza event staff vetted, background-checked, and uniformed?",
    a: "Yes. Every crew member undergoes strict identity verification and background vetting. All staff are deployed in formal, crisp event uniforms (black suits, bandhgala, or branded formal attire) and are supervised directly by experienced Evenza team leaders.",
  },
  {
    category: "Operations & Trust",
    q: "Does Evenza deploy crew outside Jaipur across Rajasthan and India?",
    a: "Yes. Evenza operates pan-India. We frequently manage deployments across Udaipur, Jodhpur, Pushkar, Kota, Delhi NCR, Mumbai, and Bengaluru, managing all travel and lodging logistics internally for consistent service quality.",
  },
];

export function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const url = `${siteConfig.SITE_URL}/faq`;

  const categories = ["All", ...Array.from(new Set(ALL_FAQS.map((f) => f.category)))];

  const filtered = ALL_FAQS.filter((f) => {
    const matchesCat = activeCategory === "All" || f.category === activeCategory;
    const matchesSearch =
      f.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": "Frequently Asked Questions (FAQ) | Evenza Event Manpower",
        "description": "Comprehensive FAQ on event manpower, wedding hospitality, corporate staffing, and volunteer jobs in Jaipur and India.",
        "isPartOf": { "@id": `${siteConfig.SITE_URL}/#website` },
        "datePublished": "2024-01-15",
        "dateModified": "2026-10-29",
        "breadcrumb": { "@id": `${url}#breadcrumb` },
        "mainEntity": ALL_FAQS.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.SITE_URL },
          { "@type": "ListItem", "position": 2, "name": "FAQ", "item": url },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="pt-24 min-h-screen-dvh bg-background">
      <Helmet>
        <title>Frequently Asked Questions (FAQ) | Evenza Event Manpower</title>
        <meta
          name="description"
          content="Get answers to common questions about hiring event manpower, wedding hospitality staff, volunteers, and event crews in Jaipur, Rajasthan, and pan-India."
        />
        <meta name="robots" content="index, follow" />
        <meta name="date" content="2024-01-15" />
        <meta name="last-modified" content="2026-10-29" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Evenza FAQ | Event Manpower &amp; Staffing Questions" />
        <meta property="og:description" content="Transparent answers regarding event manpower costs, deployment timelines, wedding staff ratios, and volunteer opportunities." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-4 pb-2">
        <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
          <li className="text-gold">› FAQ</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-16 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-3 block">
            Knowledge Base &amp; Answers
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4 leading-tight">
            Frequently Asked <span className="text-gold italic">Questions</span>
          </h1>
          <p className="text-xs text-muted-foreground mb-4">
            <time dateTime="2026-10-29">Updated 29 October 2026</time> · Complete Event Staffing Guide
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about hiring event manpower, hospitality teams, destination wedding crew, and volunteering opportunities in Jaipur and India.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. pricing, weddings, staff count)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-card border border-border text-foreground text-sm focus:outline-none focus:border-gold/60"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  activeCategory === cat
                    ? "bg-gold text-black border-gold"
                    : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {filtered.map((item, idx) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div key={idx} className="card rounded-xl overflow-hidden border border-border">
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-muted/30 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-foreground text-base leading-snug">{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/50">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground text-sm py-8">
                No matching questions found. Contact us directly on WhatsApp for instant assistance.
              </p>
            )}
          </div>

          {/* Bottom Help Card */}
          <div className="card p-6 mt-12 text-center bg-card/40">
            <HelpCircle className="w-8 h-8 text-gold mx-auto mb-3" />
            <h2 className="font-display text-xl text-foreground mb-1">Have a specific question not covered here?</h2>
            <p className="text-xs text-muted-foreground mb-4 max-w-md mx-auto">
              Our Jaipur team is available 7 days a week to advise on staffing numbers, roles, and event logistics.
            </p>
            <div className="flex justify-center gap-3">
              <Link to="/contact" className="btn-primary px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
                Contact Operations
              </Link>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-border px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-foreground hover:border-gold hover:text-gold transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
