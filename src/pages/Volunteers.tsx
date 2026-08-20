import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Users,
  Star,
  Shield,
  Zap,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  GraduationCap,
  Briefcase,
  Heart,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Trophy,
  Phone,
} from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP, EMAIL } from "@/lib/constants";

const SITE = "https://evenzaa-sable.vercel.app";
const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/HBcHsXhBeGbIS9yAbSwTP1";

// ──────────────────── DATA ────────────────────

const BENEFITS = [
  {
    icon: GraduationCap,
    title: "Real Event Experience",
    desc: "Work on live events — concerts, corporate summits, weddings, expos. The experience you build here is the kind that looks great on your resume and actually teaches you how the industry works.",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: Briefcase,
    title: "Earn Part-Time",
    desc: "Get paid for each event you work. No monthly commitments, no fixed schedules. Pick events that fit your college timetable and earn while you learn.",
    color: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: Shield,
    title: "100% Genuine — No Scam",
    desc: "Evenza is a registered company (brand of Shree Ji Company Pvt. Ltd.). We don't charge registration fees, we don't ask for deposits. If any company asks you to pay to volunteer — walk away.",
    color: "from-emerald-500/20 to-green-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: Users,
    title: "Join the Evenza Community",
    desc: "Become part of our WhatsApp volunteer community. Get first-access notifications for upcoming events in your city, connect with other volunteers, and grow your network in the event industry.",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Star,
    title: "Freelance Flexibility",
    desc: "Work as a freelancer. There's no boss telling you when to show up — you choose your events. Whether you're in college or maintaining another career, fit Evenza events around your life.",
    color: "from-rose-500/20 to-pink-500/10",
    border: "border-rose-500/20",
  },
  {
    icon: Trophy,
    title: "Grow Into a Full Role",
    desc: "Many of our supervisors and event managers started as volunteers. Show up, perform well, and the door to a full-time role — or a consistent freelance career in events — opens naturally.",
    color: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/20",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Join the WhatsApp Community",
    desc: "Click the button below to join the Evenza Volunteers WhatsApp community. This is where we post all upcoming event opportunities.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Get Event Notifications",
    desc: "When a new event is coming up in your city, we post the details — date, location, role, and pay. You choose whether you want to apply.",
    icon: Zap,
  },
  {
    step: "03",
    title: "Get Shortlisted & Briefed",
    desc: "We select volunteers based on availability and suitability. If you're selected, you receive a briefing before the event covering exactly what's expected.",
    icon: CheckCircle,
  },
  {
    step: "04",
    title: "Work the Event & Get Paid",
    desc: "Show up, do your role, represent Evenza well. After the event, your payment is processed. Build your track record and access more events over time.",
    icon: Trophy,
  },
];

const ROLES = [
  { title: "Event Volunteer", desc: "General support — registration desks, ushering, crowd guidance, and guest assistance." },
  { title: "Registration Volunteer", desc: "Manage check-in, badge collection, and delegate queues at corporate events and conferences." },
  { title: "Hospitality Volunteer", desc: "Guest welcome, seating coordination, and guest care at weddings and private events." },
  { title: "Exhibition Volunteer", desc: "Booth support, visitor engagement, and data collection at trade fairs and expos." },
  { title: "Marathon / Outdoor Volunteer", desc: "Crowd management, route guidance, and participant support at marathons and outdoor events." },
  { title: "Production Support", desc: "Backstage and show-floor assistance for concerts, stage events, and award shows." },
];

const FAQS = [
  {
    q: "Is there a registration fee to join Evenza as a volunteer?",
    a: "No. Evenza charges absolutely nothing to register as a volunteer. If any company or individual claims to be affiliated with Evenza and asks for a fee — do not pay them. Report it to us at indiaevenza@gmail.com. We do not and will never charge volunteers.",
  },
  {
    q: "Do I need prior event experience to apply?",
    a: "No prior experience is required for your first event. We provide a briefing before every event so you know exactly what's expected. Your willingness to show up, communicate, and work as a team matters more to us than experience.",
  },
  {
    q: "Can I work as an Evenza volunteer while I'm still in college?",
    a: "Absolutely — and we encourage it. Most of our volunteers are college students or recent graduates. Events typically happen on weekends or during college holidays, and you can choose which events to apply for based on your schedule.",
  },
  {
    q: "How and when do I get paid?",
    a: "Payment is processed after the event is completed. Rates vary based on the event type, duration, and role. All payment terms are shared clearly before you confirm your participation — no surprises.",
  },
  {
    q: "Can I work as a freelance volunteer from any city?",
    a: "Yes. Evenza operates across India. If you're in a city where we have an event, you can apply. We currently have the highest volume of opportunities in Jaipur and Rajasthan, with growing activity across Delhi, Mumbai, and other metros.",
  },
  {
    q: "What happens after I join the WhatsApp community?",
    a: "You'll start receiving notifications about upcoming events in your city. For each event, we share the role, date, location, and pay. Reply if you're interested, and our team will reach out to shortlisted volunteers.",
  },
  {
    q: "Can volunteering with Evenza lead to a full-time or ongoing role?",
    a: "Yes — and it happens regularly. Several of our team members started as one-time volunteers and now work with us consistently as supervisors, event managers, or part of our core crew. Performance on events is how you build that path.",
  },
];

// ──────────────────── SUB-COMPONENTS ────────────────────

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-white/10 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-card hover:bg-white/5 transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="font-medium text-foreground leading-snug">{faq.q}</span>
        <ChevronDown
          className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
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
            <div className="px-5 pb-5 pt-1 text-cream/70 leading-relaxed text-sm border-t border-white/5">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ──────────────────── MAIN PAGE ────────────────────

export function Volunteers() {
  const url = `${SITE}/volunteers`;

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Volunteer with Evenza | Event Volunteering Opportunities in India",
    description:
      "Join Evenza as an event volunteer. Genuine paid opportunities for freshers, students, and freelancers. Earn part-time, gain real event experience, and grow your career in the events industry.",
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
      { "@type": "ListItem", position: 2, name: "Volunteer with Evenza", item: url },
    ],
  };

  return (
    <main className="pt-24 min-h-screen-dvh">
      <Helmet>
        <title>Volunteer with Evenza | Genuine Event Volunteering Jobs in India</title>
        <meta
          name="description"
          content="Join Evenza as a paid event volunteer. Real opportunities for freshers, students & freelancers. No fees, no scam — earn part-time, gain event experience, grow your network. Join our WhatsApp community."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Volunteer with Evenza | Genuine Event Volunteering in India" />
        <meta
          property="og:description"
          content="Paid event volunteering for freshers, students, and freelancers. No registration fee. Join the Evenza Volunteers WhatsApp community and get real event opportunities."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Volunteer with Evenza | Event Volunteering India" />
        <meta
          name="twitter:description"
          content="Genuine paid volunteering opportunities for freshers & students. Join the Evenza Volunteers WhatsApp community."
        />
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
          <li className="text-gold truncate max-w-[240px]">Volunteer with Evenza</li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background -z-10" />
        <motion.div
          animate={{ x: [0, 80, -80, 0], y: [0, -60, 60, 0], scale: [1, 1.15, 0.9, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none -z-10"
          style={{ background: "rgba(200, 154, 66, 0.12)" }}
        />
        <motion.div
          animate={{ x: [0, -60, 60, 0], y: [0, 80, -40, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none -z-10"
          style={{ background: "rgba(86, 98, 56, 0.15)" }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border gold-border text-gold text-xs tracking-widest uppercase mb-8"
            >
              <Shield className="w-3 h-3" /> 100% Genuine · No Fees Ever
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground mb-6 leading-tight">
              Volunteer With{" "}
              <span className="text-gold italic">Evenza</span>
            </h1>

            <p className="text-xl md:text-2xl text-cream/80 font-medium mb-4">
              Real Events. Real Pay. Real Experience.
            </p>

            <p className="text-base md:text-lg text-cream/60 leading-relaxed mb-4 max-w-3xl mx-auto">
              Are you a fresher, student, or freelancer looking for genuine event volunteering
              opportunities? Tired of companies that ask you to pay a registration fee or
              ghost you after your application? You found the right place.
            </p>

            <p className="text-base md:text-lg text-cream/60 leading-relaxed mb-12 max-w-3xl mx-auto">
              Evenza is a registered event staffing company based in Jaipur that works across
              India. We are always looking for enthusiastic individuals to join our volunteer
              community — to work events, earn part-time, build real experience, and grow
              into the events industry.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={WHATSAPP_COMMUNITY}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all duration-300 shadow-lg"
                style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Join Evenza Volunteers Community
              </motion.a>

              <motion.a
                href={`tel:${PHONE_TEL}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary justify-center text-base"
              >
                <Phone className="w-4 h-4" />
                Call Us: {PHONE}
              </motion.a>
            </div>

            {/* Small trust footnote */}
            <p className="mt-6 text-xs text-cream/40">
              Free to join · No registration fee · Paid opportunities · Real events
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SCAM WARNING BANNER ── */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 items-start p-5 rounded-2xl border border-red-500/30 bg-red-500/5"
          >
            <Shield className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-400 mb-1">Important: Protect Yourself from Scams</p>
              <p className="text-sm text-cream/60 leading-relaxed">
                Evenza <strong className="text-cream/80">never charges a registration fee</strong> to
                join as a volunteer. We do not ask for any deposit, advance payment, or
                "training fee." If anyone contacts you claiming to be from Evenza and asks
                for money — it is a scam. Contact us directly to verify any communication.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY VOLUNTEER WITH EVENZA ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border gold-border text-gold text-xs tracking-widest uppercase mb-6">
              <Sparkles className="w-3 h-3" /> Why Join Us
            </div>
            <h2 className="font-display text-3xl md:text-5xl mb-4">
              What You Get By{" "}
              <span className="text-gold">Volunteering With Evenza</span>
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto text-lg">
              This isn't about filling seats. It's about building real skills, real connections,
              and a real career path in one of India's most exciting industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-6 rounded-2xl border bg-gradient-to-br ${b.color} ${b.border} backdrop-blur-sm`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{b.title}</h3>
                <p className="text-cream/65 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl mb-4">
              How It <span className="text-gold">Works</span>
            </h2>
            <p className="text-cream/60 max-w-xl mx-auto">
              Four simple steps from joining the community to working your first event.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="relative text-center p-8 rounded-2xl bg-card border border-white/5 hover:border-gold/20 transition-colors duration-300"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold text-background font-bold text-xs flex items-center justify-center">
                  {step.step}
                </div>
                <step.icon className="w-8 h-8 text-gold mx-auto mb-4 mt-2" />
                <h3 className="font-display text-lg mb-3">{step.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VOLUNTEER ROLES ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl mb-4">
              Roles You Can <span className="text-gold">Work</span>
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto">
              Evenza deploys volunteers in a range of roles across different event types.
              No prior experience is needed for most roles — we brief you before every event.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ROLES.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="bg-card p-6 rounded-2xl border border-white/5 flex gap-4 hover:border-gold/20 transition-colors duration-300"
              >
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{role.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{role.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD JOIN ── */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl mb-4">
              This Is For <span className="text-gold">You</span> If…
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: GraduationCap, text: "You're a student or fresher looking for your first break in the events industry" },
              { icon: Clock, text: "You want a part-time income that works around your college or existing schedule" },
              { icon: Briefcase, text: "You're a freelancer who wants consistent event work without being tied to one employer" },
              { icon: MapPin, text: "You're based in Jaipur, Rajasthan, or any major Indian city where events happen" },
              { icon: Shield, text: "You're tired of shady 'volunteering agencies' that charge fees or never respond" },
              { icon: Heart, text: "You have a genuine interest in events, hospitality, or the entertainment industry" },
              { icon: Users, text: "You want to build a professional network in the events industry from day one" },
              { icon: Star, text: "You want experience that actually looks good on your CV — not just a certificate" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-white/5 hover:border-gold/15 transition-colors"
              >
                <item.icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-cream/70 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHATSAPP COMMUNITY CTA (BIG) ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,211,102,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* WhatsApp icon large */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </motion.div>

            <h2 className="font-display text-3xl md:text-5xl mb-4">
              Join the <span className="text-gold">Evenza Volunteers</span> Community
            </h2>
            <p className="text-cream/60 mb-4 leading-relaxed text-lg">
              This is our official WhatsApp community for volunteers across India. Join to get
              first-access notifications for upcoming events, connect with fellow volunteers,
              and stay updated on new opportunities.
            </p>
            <p className="text-cream/50 mb-10 text-sm">
              Free to join. No spam. Event alerts only. You can leave any time.
            </p>

            <motion.a
              href={WHATSAPP_COMMUNITY}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-white text-lg transition-all duration-300 shadow-2xl mb-6"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Open WhatsApp Community →
            </motion.a>

            <p className="text-xs text-cream/30">
              Community link:{" "}
              <a
                href={WHATSAPP_COMMUNITY}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold/60 hover:text-gold transition-colors break-all"
              >
                {WHATSAPP_COMMUNITY}
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 bg-muted/30" aria-label="Frequently Asked Questions">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <p className="text-cream/60">
              Everything freshers, students, and freelancers ask us about volunteering with Evenza.
            </p>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED PAGES ── */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-2xl md:text-3xl text-center mb-10">
            Explore Related <span className="text-gold">Services</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Event Volunteers Jaipur", path: "/event-volunteers-jaipur" },
              { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
              { label: "Corporate Event Staffing", path: "/corporate-event-staffing-jaipur" },
              { label: "Exhibition Staff Jaipur", path: "/exhibition-staff-jaipur" },
              { label: "Event Staffing Rajasthan", path: "/event-staffing-rajasthan" },
              { label: "Hospitality Team Jaipur", path: "/hospitality-team-jaipur" },
            ].map((rp) => (
              <Link
                key={rp.path}
                to={rp.path}
                className="px-5 py-2.5 rounded-full border border-border hover:border-gold/50 hover:text-gold text-cream/70 transition-all duration-300 text-sm"
              >
                {rp.label} <ChevronRight className="inline w-3 h-3 ml-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border gold-border text-gold text-xs tracking-widest uppercase mb-6">
            <Sparkles className="w-3 h-3" /> Ready to Start?
          </div>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Your First <span className="text-gold">Event</span> Is Waiting
          </h2>
          <p className="text-cream/60 mb-10 leading-relaxed">
            Join the community, watch for events near you, and show up. It's that simple.
            Evenza has been the starting point for hundreds of event professionals across
            India — and it can be yours too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={WHATSAPP_COMMUNITY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all duration-300 shadow-lg hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Join Volunteers Community
            </a>
            <a href={`tel:${PHONE_TEL}`} className="btn-secondary justify-center">
              <Phone className="w-4 h-4 mr-2" /> Call {PHONE}
            </a>
          </div>
          <p className="text-cream/40 text-xs">
            Or email us at{" "}
            <a href={`mailto:${EMAIL}`} className="text-gold hover:underline">
              {EMAIL}
            </a>
          </p>
          <div className="mt-10 pt-8 border-t border-white/5">
            <Link to="/" className="text-sm text-cream/50 hover:text-gold transition-colors">
              ← Back to Evenza Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
