import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Users,
  Shield,
  Award,
  Calendar,
  MessageCircle,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { SITE_CONFIG } from "@/lib/siteConfig";

const talentSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(100),
  whatsapp: z.string().trim().min(10, "Valid 10-digit WhatsApp number required").max(15),
  email: z.string().trim().email("Invalid email").optional().or(z.literal("")),
  city: z.string().trim().min(2, "City is required").max(60),
  age: z.string().trim().min(1, "Age is required"),
  role: z.string().min(1, "Please select preferred role"),
  experience: z.string().min(1, "Please select experience level"),
  availability: z.string().min(1, "Please select availability"),
  notes: z.string().trim().max(1000).optional(),
});

export function JoinOurTeam() {
  const [submitting, setSubmitting] = useState(false);
  const url = `${SITE_CONFIG.url}/join-our-team`;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = talentSchema.safeParse(raw);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check form entries");
      return;
    }

    setSubmitting(true);
    const d = parsed.data;

    const lines = [
      `*New Talent Registration — Evenza Crew*`,
      `*Name:* ${d.fullName}`,
      `*WhatsApp:* ${d.whatsapp}`,
      d.email ? `*Email:* ${d.email}` : null,
      `*City:* ${d.city}`,
      `*Age:* ${d.age}`,
      `*Role Preference:* ${d.role}`,
      `*Experience:* ${d.experience}`,
      `*Availability:* ${d.availability}`,
      d.notes ? `*Notes:* ${d.notes}` : null,
    ].filter(Boolean);

    const waText = encodeURIComponent(lines.join("\n"));
    const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${waText}`;

    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);

    toast.success("Registration submitted!", {
      description: "Redirecting you to Evenza Talent Desk on WhatsApp...",
    });

    window.location.href = waUrl;
    form.reset();
  };

  const faqs = [
    {
      q: "Does Evenza charge any registration or training fee?",
      a: "No! Evenza never asks for any money, registration fees, or uniform deposits. Working or volunteering with Evenza is 100% free.",
    },
    {
      q: "How do I get notified about upcoming event opportunities?",
      a: "Once you register, our talent desk connects with you on WhatsApp and adds you to the verified Evenza Crew broadcast channel where event calls are posted with dates, roles, and payouts.",
    },
    {
      q: "Can college students apply for weekend events?",
      a: "Yes! The majority of our volunteer and hospitality assignments happen on weekends and evenings, making it ideal for college students balancing coursework.",
    },
    {
      q: "Do you provide safety and transport for outstation events?",
      a: "Yes. For destination weddings or events outside your home city, Evenza provides supervised group travel, secure hotel accommodation, and meals for all crew members.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": "Join Our Team | Work with Evenza Event Crew & Volunteers",
        "description": "Register to work with Evenza as event manpower, hospitality staff, backstage crew, or volunteer in Jaipur and Rajasthan.",
        "isPartOf": { "@id": `${SITE_CONFIG.url}/#website` },
        "about": { "@id": `${SITE_CONFIG.url}/#organization` },
        "breadcrumb": { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_CONFIG.url}/` },
          { "@type": "ListItem", "position": 2, "name": "Join Our Team", "item": url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a,
          },
        })),
      },
    ],
  };

  return (
    <main id="main" className="pt-24 min-h-screen-dvh">
      <Helmet>
        <title>Join Our Team | Event Crew & Volunteer Registration | Evenza</title>
        <meta
          name="description"
          content="Register to work with Evenza in Jaipur and Rajasthan. Paid event jobs, hospitality hostess roles, backstage crew, and volunteering opportunities for students and freelancers."
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Join Our Team | Evenza Event Crew Registration" />
        <meta
          property="og:description"
          content="Join Evenza's verified event crew network in Jaipur and Rajasthan. Zero registration fees, prompt pay, and verified work certificates."
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
          <li className="text-gold">Join Our Team</li>
        </ol>
      </nav>

      {/* ── Header ── */}
      <section className="py-12 md:py-16 text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border gold-border text-gold text-xs tracking-widest uppercase mb-6">
          <Sparkles className="w-3 h-3" /> Talent & Crew Registration
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight">
          Join Evenza Event Crew & Volunteer Network in Jaipur & Rajasthan
        </h1>
        <p className="text-base md:text-lg text-cream/70 leading-relaxed max-w-2xl mx-auto mb-8">
          Work on royal destination weddings, major concerts, business summits, and cultural festivals. 
          Gain valuable event management experience, earn competitive event stipends, and receive verified certificates.
        </p>

        {/* E-E-A-T Trust Highlights */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left mb-12">
          <div className="p-4 rounded-xl bg-card border border-white/5 flex gap-3">
            <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-sm font-semibold text-foreground">100% Free To Join</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Zero registration fees or deposits. Beware of scams asking for money.</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-card border border-white/5 flex gap-3">
            <Award className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-sm font-semibold text-foreground">Official Certificates</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Verified certificates from Shree Ji Company Pvt. Ltd. to boost your resume.</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-card border border-white/5 flex gap-3">
            <Calendar className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-sm font-semibold text-foreground">Flexible Dates</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Choose weekend or holiday shifts that suit your study schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className="pb-20 px-6 max-w-3xl mx-auto">
        <div className="bg-card border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="mb-8 border-b border-white/10 pb-6">
            <h2 id="register-form" className="font-display text-2xl text-foreground mb-2">
              Talent Registration Form
            </h2>
            <p className="text-sm text-muted-foreground">
              Fill in your details below. We review applications daily and invite shortlisted candidates to the official Evenza Crew roster.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium">
                  Full Name <span className="text-rose-400">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  autoComplete="name"
                  className="bg-background/50 border-white/10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-sm font-medium">
                  WhatsApp Number <span className="text-rose-400">*</span>
                </Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  className="bg-background/50 border-white/10"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  className="bg-background/50 border-white/10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city" className="text-sm font-medium">
                  Current City <span className="text-rose-400">*</span>
                </Label>
                <Input
                  id="city"
                  name="city"
                  type="text"
                  required
                  placeholder="e.g. Jaipur, Udaipur, Kota"
                  autoComplete="address-level2"
                  className="bg-background/50 border-white/10"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              <div className="space-y-2">
                <Label htmlFor="age" className="text-sm font-medium">
                  Age <span className="text-rose-400">*</span>
                </Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  min="18"
                  max="45"
                  required
                  placeholder="e.g. 21"
                  className="bg-background/50 border-white/10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium">
                  Preferred Role <span className="text-rose-400">*</span>
                </Label>
                <select
                  id="role"
                  name="role"
                  required
                  className="w-full h-10 px-3 rounded-md bg-background/50 border border-white/10 text-sm focus:outline-none focus:ring-1 focus:ring-gold text-foreground"
                >
                  <option value="">Select role...</option>
                  <option value="Guest Hospitality & Hostess">Guest Hospitality / Hostess</option>
                  <option value="Event Volunteer & Registration">Event Volunteer / Registration</option>
                  <option value="Backstage & Production Crew">Backstage & Production Crew</option>
                  <option value="Tour Escort / Manager">Tour Escort / Manager</option>
                  <option value="Crowd Marshal / Bouncer">Crowd Marshal / Bouncer</option>
                  <option value="General Event Operations">General Event Operations</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience" className="text-sm font-medium">
                  Past Experience <span className="text-rose-400">*</span>
                </Label>
                <select
                  id="experience"
                  name="experience"
                  required
                  className="w-full h-10 px-3 rounded-md bg-background/50 border border-white/10 text-sm focus:outline-none focus:ring-1 focus:ring-gold text-foreground"
                >
                  <option value="">Select experience...</option>
                  <option value="Fresher (No event experience)">Fresher (No event experience)</option>
                  <option value="1-5 Events done">1–5 Events done</option>
                  <option value="6-15 Events done">6–15 Events done</option>
                  <option value="Experienced Pro (15+ events)">Experienced Pro (15+ events)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="availability" className="text-sm font-medium">
                Availability <span className="text-rose-400">*</span>
              </Label>
              <select
                id="availability"
                name="availability"
                required
                className="w-full h-10 px-3 rounded-md bg-background/50 border border-white/10 text-sm focus:outline-none focus:ring-1 focus:ring-gold text-foreground"
              >
                <option value="">Select availability...</option>
                <option value="Weekends Only (Saturday/Sunday)">Weekends Only (Saturday/Sunday)</option>
                <option value="Full-Time Freelance (Any Day)">Full-Time Freelance (Any Day)</option>
                <option value="Evening Events Only">Evening Events Only</option>
                <option value="Available during College Vacations">Available during College Vacations</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-sm font-medium">
                Languages Spoken & Brief Bio (Optional)
              </Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Mention languages (e.g. English, Hindi, Marwari), college name, or past events you have worked on..."
                rows={3}
                className="bg-background/50 border-white/10 text-sm resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full btn-primary h-12 text-base font-medium flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {submitting ? "Submitting Application..." : "Submit Application via WhatsApp"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              By submitting, you agree to receive event calls and briefing updates from Evenza via WhatsApp.
            </p>
          </form>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 bg-muted/30 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 id="faqs" className="font-display text-2xl md:text-3xl text-center mb-8">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border border-white/5">
                <h3 className="font-semibold text-foreground text-base mb-2">{f.q}</h3>
                <p className="text-sm text-cream/70 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export default JoinOurTeam;
