import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  phone: z.string().trim().min(5, "Valid phone required").max(20),
  email: z.string().trim().email("Invalid email").optional().or(z.literal("")),
  city: z.string().trim().max(100).optional(),
  event_type: z.string().trim().max(100).optional(),
  event_date: z.string().optional(),
  headcount: z.string().optional(),
  roles: z.string().trim().max(500).optional(),
  message: z.string().trim().max(2000).optional(),
});

export function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const url = `${siteConfig.SITE_URL}/contact`;

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": "Contact Evenza Hospitality Services | Event Manpower Jaipur",
        "description": "Get in touch with Evenza Hospitality Services in Jaipur. Hire event manpower, request quotation, or inquire about event staffing services across Rajasthan and India.",
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
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": url },
        ],
      },
    ],
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = leadSchema.safeParse(raw);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setSubmitting(true);
    const d = parsed.data;
    const parts = [
      `Hi Evenza! I would like to request an event manpower quote:`,
      `*Name:* ${d.name}`,
      `*Phone:* ${d.phone}`,
    ];
    if (d.email) parts.push(`*Email:* ${d.email}`);
    if (d.city) parts.push(`*City:* ${d.city}`);
    if (d.event_type) parts.push(`*Event Type:* ${d.event_type}`);
    if (d.event_date) parts.push(`*Event Date:* ${d.event_date}`);
    if (d.headcount) parts.push(`*Staff Count:* ${d.headcount}`);
    if (d.roles) parts.push(`*Roles Required:* ${d.roles}`);
    if (d.message) parts.push(`*Notes:* ${d.message}`);

    const waText = encodeURIComponent(parts.join("\n"));
    const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${waText}`;

    await new Promise((r) => setTimeout(r, 500));
    setSubmitting(false);

    toast.success("Redirecting to WhatsApp with your enquiry details pre-filled...");
    window.location.href = waUrl;
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main id="main-content" className="pt-24 min-h-screen-dvh bg-background">
      <Helmet>
        <title>Contact Evenza | Hire Event Manpower in Jaipur &amp; Rajasthan</title>
        <meta
          name="description"
          content="Contact Evenza Hospitality Services in Jaipur for event manpower, wedding staff, and event crew hire. Instant quotes via WhatsApp or call +91 91617 10849."
        />
        <meta name="robots" content="index, follow" />
        <meta name="date" content="2024-01-15" />
        <meta name="last-modified" content="2026-10-29" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Contact Evenza | Event Manpower Agency Jaipur" />
        <meta property="og:description" content="Reach our Jaipur headquarters for event staffing consultations and proposals. Quick response within 2 hours." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(contactJsonLd)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 pt-4 pb-2">
        <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
          <li className="text-gold">› Contact Us</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-3 block">
              Direct Contact &amp; Consultations
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4 leading-tight">
              Contact <span className="text-gold italic">Evenza Hospitality</span>
            </h1>
            <p className="text-xs text-muted-foreground mb-4">
              <time dateTime="2026-10-29">Updated 29 October 2026</time> · Response time: Under 2 hours
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Planning a destination wedding, corporate summit, live concert, or exhibition? Share your staffing requirements below for a transparent, itemized quote and custom crew plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid: NAP cards & Form */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-10">
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="font-display text-2xl text-foreground mb-6">
              Get in Touch with Our Team
            </h2>

            {/* Address Card */}
            <div className="card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Headquarters</div>
                <div className="text-foreground font-medium mt-1">
                  {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode}, India
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{siteConfig.address.landmark}</div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Direct Calls</div>
                <div className="text-foreground font-medium mt-1">
                  <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-gold block">{siteConfig.phone} (Stuti Shukla)</a>
                  <a href={`tel:${siteConfig.phoneSecondaryTel}`} className="hover:text-gold block">{siteConfig.phoneSecondary} (Operations)</a>
                  <a href={`tel:${siteConfig.phoneShlokTel}`} className="hover:text-gold block">{siteConfig.phoneShlok} (Shlok Aggarwal)</a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="card p-5 flex items-start gap-4 hover:border-gold/50 transition-colors block"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp Direct</div>
                <div className="text-foreground font-medium mt-1">+91 91617 10849</div>
                <div className="text-xs text-muted-foreground mt-0.5">Instant messaging &amp; proposal sharing</div>
              </div>
            </a>

            {/* Email Card */}
            <a href={`mailto:${siteConfig.email}`} className="card p-5 flex items-start gap-4 hover:border-gold/50 transition-colors block">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Official Email</div>
                <div className="text-foreground font-medium mt-1">{siteConfig.email}</div>
                <div className="text-xs text-muted-foreground mt-0.5">Send RFPs, event decks, and briefs</div>
              </div>
            </a>

            {/* Operational Hours */}
            <div className="card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Working Hours</div>
                <div className="text-foreground font-medium mt-1">Monday – Sunday: 09:00 AM – 09:00 PM IST</div>
                <div className="text-xs text-emerald-400 mt-0.5">24/7 on-call support during live client events</div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="card p-6 sm:p-8">
              <h2 className="font-display text-2xl text-foreground mb-2">Request an Event Staffing Quote</h2>
              <p className="text-xs text-muted-foreground mb-6">
                Fill in the details below. Our operations team reviews all submissions and replies within 2 hours.
              </p>

              <form
                id="contact-page-form"
                onSubmit={onSubmit}
                className="space-y-4"
                {...({
                  toolname: "bookEventManpower",
                  tooldescription: "Submit an inquiry to book event manpower or hospitality teams in Jaipur and India",
                } as any)}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name" className="text-muted-foreground text-xs">Your Name *</Label>
                    <Input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="mt-1.5 bg-card border-border"
                      {...({ toolparamdescription: "Full name of client or event manager" } as any)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone" className="text-muted-foreground text-xs">Phone Number *</Label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      className="mt-1.5 bg-card border-border"
                      {...({ toolparamdescription: "Phone number with country code" } as any)}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-email" className="text-muted-foreground text-xs">Email Address</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      className="mt-1.5 bg-card border-border"
                      {...({ toolparamdescription: "Client email address for proposals" } as any)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-city" className="text-muted-foreground text-xs">Event City</Label>
                    <Input
                      id="contact-city"
                      name="city"
                      type="text"
                      placeholder="e.g. Jaipur, Udaipur, Delhi"
                      className="mt-1.5 bg-card border-border"
                      {...({ toolparamdescription: "City where event is hosted" } as any)}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="contact-event-type" className="text-muted-foreground text-xs">Event Type</Label>
                    <Input
                      id="contact-event-type"
                      name="event_type"
                      type="text"
                      placeholder="Wedding / Expo / Concert"
                      className="mt-1.5 bg-card border-border"
                      {...({ toolparamdescription: "Event category" } as any)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-date" className="text-muted-foreground text-xs">Event Date</Label>
                    <Input
                      id="contact-date"
                      name="event_date"
                      type="date"
                      className="mt-1.5 bg-card border-border"
                      {...({ toolparamdescription: "Date of event" } as any)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-headcount" className="text-muted-foreground text-xs">Staff Count Needed</Label>
                    <Input
                      id="contact-headcount"
                      name="headcount"
                      type="number"
                      min="1"
                      placeholder="e.g. 25"
                      className="mt-1.5 bg-card border-border"
                      {...({ toolparamdescription: "Estimated number of staff" } as any)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-roles" className="text-muted-foreground text-xs">Roles Needed</Label>
                  <Input
                    id="contact-roles"
                    name="roles"
                    type="text"
                    placeholder="e.g. Shadow staff, luggage porters, registration desk, ushers"
                    className="mt-1.5 bg-card border-border"
                    {...({ toolparamdescription: "Specific manpower roles" } as any)}
                  />
                </div>

                <div>
                  <Label htmlFor="contact-message" className="text-muted-foreground text-xs">Event Overview &amp; Special Requirements</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about the venue, timings, uniform preferences, or specific client requests..."
                    className="mt-1.5 bg-card border-border"
                    {...({ toolparamdescription: "Additional details or instructions" } as any)}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full py-5 text-sm uppercase tracking-wider font-semibold"
                >
                  {submitting ? "Sending Request..." : "Submit Enquiry via WhatsApp"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-12 border-t border-white/5 bg-card/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl text-foreground">Find Us in Jaipur</h2>
            <p className="text-xs text-muted-foreground mt-1">Choti Chaupad, Pink City, Jaipur, Rajasthan 302002</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border h-80 sm:h-96">
            <iframe
              title="Evenza Hospitality Services Location - Choti Chaupad Jaipur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.424409395276!2d75.82035937583626!3d26.92176495904803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db149021e1dd7%3A0xc47b93a9e6ebbe44!2sChhoti%20Chaupar%2C%20Jaipur%2C%20Rajasthan%20302002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
