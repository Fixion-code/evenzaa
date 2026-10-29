import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const HOME_FAQS = [
  {
    q: "What is event manpower and why do you need it?",
    a: "Event manpower refers to trained, professional staff deployed on-ground at events to handle operations, logistics, guest management, and hospitality. Whether it's a 50-person corporate dinner or a 10,000-person rally, you need reliable crew — runners, supervisors, F&B service, porters, and show-flow managers — to deliver a seamless experience. Evenza provides vetted, uniformed, and supervised event manpower across Jaipur, Rajasthan, and all of India.",
  },
  {
    q: "How do I hire event staff or volunteers in Jaipur?",
    a: "Hiring event staff in Jaipur is simple with Evenza. Share your event date, location, number of staff needed, and roles required. We respond within hours with a detailed staffing plan and transparent pricing. Our crew is trained, background-checked, and deployed with a dedicated on-ground supervisor. No middlemen, no hidden costs — just professional event manpower ready to deliver.",
  },
  {
    q: "What types of events does Evenza provide manpower for?",
    a: "Evenza provides manpower for all event types — destination weddings, corporate summits, exhibitions, trade expos, concerts, live shows, political rallies, sports events, college festivals, product launches, AGMs, and private RSVP events. We operate across Jaipur, Rajasthan, Delhi NCR, Mumbai, Bengaluru, and 30+ cities in India.",
  },
  {
    q: "How is Evenza different from other manpower agencies in Jaipur?",
    a: "Evenza is not a typical manpower agency. We are a founder-led, Jaipur-based event staffing company that directly trains and deploys crew without middlemen. Every deployment includes a dedicated on-ground supervisor. Our crew is vetted, uniformed, and briefed specifically for your event. We serve premium clients at venues like Rambagh Palace, City Palace, JECC, and heritage properties across Rajasthan.",
  },
  {
    q: "What is the cost of hiring event manpower in Jaipur?",
    a: "Pricing depends on the type of role, number of staff, event duration, and complexity. Evenza offers transparent, competitive rates with no hidden fees. Most clients receive a detailed proposal within a few hours of enquiry. Contact us via WhatsApp or phone for a free, no-obligation quote for your event.",
  },
  {
    q: "How can I volunteer or get part-time event work with Evenza?",
    a: "If you're a student, fresher, or professional looking for part-time event work, volunteering opportunities, or freelance event jobs in Jaipur and Rajasthan, join Evenza's volunteer community. We offer paid event gigs, flexible schedules, professional training, and experience at top events. Sign up on our volunteers page or join our WhatsApp group for instant updates on upcoming opportunities.",
  },
  {
    q: "Does Evenza provide hospitality teams for destination weddings in Rajasthan?",
    a: "Yes. Destination wedding hospitality is one of Evenza's core specialities. We deploy trained hospitality teams — including shadow staff, VIP handlers, F&B service crew, porters, and logistics coordinators — for royal weddings at Rajasthan's heritage venues. From mehendi to reception, our team ensures every guest is cared for with grace and precision.",
  },
  {
    q: "Can Evenza deploy event crew outside Jaipur and Rajasthan?",
    a: "Absolutely. Evenza is pan-India deployable. We manage travel, stay, and food for our crew, delivering the same quality of service whether the event is in Delhi, Mumbai, Goa, Bengaluru, or any other city. Our local Jaipur base gives us cost and coordination advantages for events anywhere in India.",
  },
];

function FAQAccordionItem({ faq, index }: { faq: typeof HOME_FAQS[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-card hover:bg-muted/50 transition-colors duration-200"
        aria-expanded={open}
      >
        <h3 className="font-medium text-foreground leading-snug text-base">{faq.q}</h3>
        <ChevronDown
          className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
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
            <div className="px-5 pb-5 pt-2 text-muted-foreground leading-relaxed text-sm border-t border-border">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function HomeFAQ() {
  // FAQPage JSON-LD for Google "People Also Ask" and featured snippets
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": HOME_FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-background to-section-bg">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <SectionHeader
        kicker="Frequently Asked Questions"
        title={
          <>
            Everything you need to know about{" "}
            <span className="italic text-gold">event manpower</span>
          </>
        }
        sub="Get answers to the most common questions about hiring event staff, volunteers, and hospitality teams in Jaipur and across India."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="space-y-3">
          {HOME_FAQS.map((faq, idx) => (
            <FAQAccordionItem key={idx} faq={faq} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
