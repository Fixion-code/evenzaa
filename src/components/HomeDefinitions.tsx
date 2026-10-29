import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DEFINITIONS = [
  {
    term: "Event Manpower",
    definition:
      "Event manpower is a professionally trained workforce deployed at events to handle operations, logistics, guest management, crowd control, and on-ground execution. Evenza provides event manpower in Jaipur, Rajasthan, and across 30+ cities in India.",
    link: "/event-manpower-jaipur",
  },
  {
    term: "Hospitality Team",
    definition:
      "A hospitality team refers to specialised staff responsible for guest relations, F&B service, VIP handling, and creating a premium experience at events. Evenza deploys trained hospitality teams for weddings, corporate events, and exhibitions in Jaipur.",
    link: "/hospitality-team-jaipur",
  },
  {
    term: "Event Volunteers",
    definition:
      "Event volunteers are energetic, bilingual individuals deployed for registration management, ushering, crowd guidance, and information desks at conferences, marathons, expos, and festivals. Evenza's volunteers are college-educated and tech-savvy.",
    link: "/event-volunteers-jaipur",
  },
  {
    term: "Event Crew",
    definition:
      "Event crew includes backstage staff, stage managers, logistics coordinators, AV technicians, and production support personnel who ensure the technical and operational aspects of an event run smoothly.",
    link: "/corporate-event-staffing-jaipur",
  },
  {
    term: "Wedding Staff",
    definition:
      "Wedding staff are trained hospitality professionals deployed for destination weddings and luxury celebrations. This includes shadow staff, porters, F&B servers, guest coordinators, and logistics managers for multi-day wedding events.",
    link: "/wedding-staff-jaipur",
  },
  {
    term: "Tour Manager",
    definition:
      "A tour manager coordinates travel logistics, venue coordination, artist or VIP itineraries, and on-ground operations for touring events, concerts, and multi-city corporate programs. Evenza provides experienced tour managers for events across India.",
    link: "/event-manpower-india",
  },
];

const COMPARISON = [
  {
    feature: "Trained & Uniformed Staff",
    evenza: "✅ Yes — background-checked, trained, uniformed",
    typical: "❌ Often untrained, casual",
  },
  {
    feature: "On-ground Supervisor",
    evenza: "✅ Dedicated supervisor on every event",
    typical: "❌ No supervision provided",
  },
  {
    feature: "Transparent Pricing",
    evenza: "✅ Direct, no middlemen",
    typical: "⚠️ Multiple layers of brokers",
  },
  {
    feature: "Pan-India Deployment",
    evenza: "✅ 30+ cities, travel managed",
    typical: "❌ City-specific only",
  },
  {
    feature: "Same-day Response",
    evenza: "✅ Quote within hours",
    typical: "⚠️ 2-5 days typical",
  },
  {
    feature: "Founder Accountability",
    evenza: "✅ Founder-led, single point of contact",
    typical: "❌ Impersonal, no accountability",
  },
];

export function HomeDefinitions() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Hire Event Manpower in Jaipur",
    "description":
      "A step-by-step guide to hiring professional event staff, volunteers, and hospitality teams in Jaipur through Evenza.",
    "image": "https://evenzaa-sable.vercel.app/og-image.jpg",
    "totalTime": "PT2H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "Request Quote"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Share Your Requirements",
        "text": "Tell us your event date, location, number of staff needed, and the roles you require. We respond within a few hours.",
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "We Select & Brief Your Crew",
        "text": "We shortlist, train, and brief the right crew for your specific event — covering your brand standards and event flow.",
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "We Deploy & Supervise",
        "text": "Your uniformed, groomed crew arrives on time. An Evenza supervisor manages the team on the ground.",
      },
    ],
  };

  return (
    <section id="glossary" className="section-padding">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(howToJsonLd)}
        </script>
      </Helmet>

      <SectionHeader
        kicker="Industry Glossary"
        title={
          <>
            What is <span className="italic text-gold">event manpower</span>?
          </>
        }
        sub="Clear definitions of event staffing terminology — helping you understand exactly what you're hiring."
      />

      {/* Definition List — highly extractable by LLMs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <dl className="space-y-6">
          {DEFINITIONS.map((item, idx) => (
            <motion.div
              key={item.term}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="card p-6 hover:border-gold/20 transition-colors duration-300"
            >
              <dt id={`term-${item.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="font-display text-xl text-gold mb-2">{item.term}</dt>
              <dd className="mb-3">
                <p className="text-muted-foreground leading-relaxed">
                  {item.definition}
                </p>
              </dd>
              <Link
                to={item.link}
                aria-label={`Explore ${item.term} in Jaipur`}
                className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold/80 transition-colors font-medium tracking-wide uppercase"
              >
                Explore {item.term} <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          ))}
        </dl>
      </div>

      {/* How to Hire — targets "How to" featured snippets */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <h2 id="how-to-hire" className="font-display text-3xl md:text-4xl text-center mb-4">
          How to hire <span className="text-gold">event manpower in Jaipur</span>?
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Three simple steps to get professional event staff for your next event.
        </p>
        <ol className="space-y-4">
          {howToJsonLd.step.map((step, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="flex gap-4 items-start card p-5"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-background font-bold text-sm flex items-center justify-center">
                {idx + 1}
              </span>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">{step.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* Comparison Table — targets table featured snippets */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 id="why-evenza" className="font-display text-3xl md:text-4xl text-center mb-4">
          Why choose <span className="text-gold">Evenza</span> over typical manpower agencies?
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          A side-by-side comparison of Evenza's professional event staffing vs. traditional manpower agencies.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-card border-b border-border">
                <th className="text-left p-4 font-display text-foreground">Feature</th>
                <th className="text-left p-4 font-display text-gold">Evenza</th>
                <th className="text-left p-4 font-display text-muted-foreground">Typical Agency</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, idx) => (
                <tr key={idx} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-medium text-foreground">{row.feature}</td>
                  <td className="p-4 text-muted-foreground">{row.evenza}</td>
                  <td className="p-4 text-muted-foreground">{row.typical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
