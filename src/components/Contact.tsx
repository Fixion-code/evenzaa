import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { SectionHeader } from "./SectionHeader";
import {
  PHONE,
  PHONE_TEL,
  PHONE_SHLOK,
  PHONE_SHLOK_TEL,
  WHATSAPP,
  EMAIL,
  ADDRESS,
  INSTAGRAM,
  FACEBOOK,
  THREADS,
  LINKEDIN,
  TELEGRAM,
} from "@/lib/constants";
import { Instagram, Facebook, Linkedin, Send } from "lucide-react";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  phone: z.string().trim().min(5, "Valid phone required").max(20),
  email: z
    .string()
    .trim()
    .email("Invalid email")
    .max(255)
    .optional()
    .or(z.literal("")),
  event_type: z.string().trim().max(100).optional(),
  event_date: z.string().optional(),
  city: z.string().trim().max(100).optional(),
  headcount: z.string().optional(),
  roles: z.string().trim().max(500).optional(),
  message: z.string().trim().max(2000).optional(),
});

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

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

    // Build WhatsApp message with form data
    const d = parsed.data;
    const parts = [
      `Hi Evenza! I'd like to enquire about your services.`,
      `*Name:* ${d.name}`,
      `*Phone:* ${d.phone}`,
    ];
    if (d.email) parts.push(`*Email:* ${d.email}`);
    if (d.event_type) parts.push(`*Event:* ${d.event_type}`);
    if (d.event_date) parts.push(`*Date:* ${d.event_date}`);
    if (d.city) parts.push(`*City:* ${d.city}`);
    if (d.headcount) parts.push(`*Crew needed:* ${d.headcount}`);
    if (d.roles) parts.push(`*Roles:* ${d.roles}`);
    if (d.message) parts.push(`*Message:* ${d.message}`);

    const waText = encodeURIComponent(parts.join("\n"));
    const waUrl = `https://wa.me/${WHATSAPP}?text=${waText}`;

    // Simulate brief delay for UX
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);

    toast.success("Redirecting to WhatsApp…", {
      description: "Your enquiry details have been pre-filled.",
    });

    // Open WhatsApp with pre-filled message
    // Using window.location.href is more reliable on mobile devices and avoids popup blockers
    window.location.href = waUrl;

    (e.target as HTMLFormElement).reset();
  };

  const contactCards = [
    {
      href: `tel:${PHONE_TEL}`,
      icon: Phone,
      label: "Call Stuti",
      value: PHONE,
    },
    {
      href: `tel:${PHONE_SHLOK_TEL}`,
      icon: Phone,
      label: "Call Shlok",
      value: PHONE_SHLOK,
    },
    {
      href: `https://wa.me/${WHATSAPP}`,
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      external: true,
    },
    {
      href: `mailto:${EMAIL}`,
      icon: Mail,
      label: "Email",
      value: EMAIL,
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-background to-[hsl(var(--sky))]/40"
    >
      <SectionHeader
        kicker="Get In Touch"
        title={
          <>
            Let's build your{" "}
            <span className="italic text-gold">next event</span>
          </>
        }
        sub="Share a few details and we'll send a tailored quote within 24 hours."
      />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
        {/* Left contact cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-4"
        >
          {contactCards.map((c) => {
            const isWhatsApp = c.label === "WhatsApp";
            const isCall = c.label.includes("Call");
            
            const handleClick = (e: React.MouseEvent) => {
              if (isWhatsApp) {
                e.preventDefault();
                toast.success("Connecting to WhatsApp...", {
                  description: "Redirecting you to our chat securely.",
                });
                setTimeout(() => {
                  window.open(c.href, "_blank");
                }, 1000);
              } else if (isCall) {
                e.preventDefault();
                toast.info("Initiating call...", {
                  description: "Opening your phone dialer.",
                });
                setTimeout(() => {
                  window.location.href = c.href;
                }, 800);
              }
            };

            return (
              <a
                key={c.label}
                href={c.href}
                onClick={handleClick}
                target={c.external && !isWhatsApp ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                className="card p-5 group flex items-start gap-4 transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <c.icon className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="text-foreground font-medium mt-1">{c.value}</div>
                </div>
              </a>
            );
          })}

          {/* Address (non-link) */}
          <div className="card p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-gold" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Headquarters
              </div>
              <div className="text-foreground font-medium mt-1">{ADDRESS}</div>
            </div>
          </div>

          {/* Social Channels */}
          <div className="card p-5">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Official Social Media
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-gold/10 hover:text-gold border border-border text-xs text-muted-foreground transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-gold shrink-0" />
                <span className="truncate">@evenzaevent</span>
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-gold/10 hover:text-gold border border-border text-xs text-muted-foreground transition-all duration-300"
              >
                <Facebook className="w-4 h-4 text-gold shrink-0" />
                <span className="truncate">Evenza India</span>
              </a>
              <a
                href={THREADS}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-gold/10 hover:text-gold border border-border text-xs text-muted-foreground transition-all duration-300"
              >
                <span className="w-4 h-4 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold text-[10px] shrink-0">
                  @
                </span>
                <span className="truncate">Threads</span>
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-gold/10 hover:text-gold border border-border text-xs text-muted-foreground transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 text-gold shrink-0" />
                <span className="truncate">LinkedIn</span>
              </a>
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-gold/10 hover:text-gold border border-border text-xs text-muted-foreground transition-all duration-300 col-span-2"
              >
                <Send className="w-4 h-4 text-gold shrink-0" />
                <span className="truncate">Join our Telegram Channel</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-3 card p-5 md:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name" className="text-muted-foreground">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                required
                className="mt-2 bg-card border-border"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-muted-foreground">
                Phone *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-2 bg-card border-border"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="email" className="text-muted-foreground">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                className="mt-2 bg-card border-border"
              />
            </div>
            <div>
              <Label htmlFor="city" className="text-muted-foreground">
                City
              </Label>
              <Input
                id="city"
                name="city"
                className="mt-2 bg-card border-border"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            <div>
              <Label htmlFor="event_type" className="text-muted-foreground">
                Event Type
              </Label>
              <Input
                id="event_type"
                name="event_type"
                placeholder="Wedding / Corporate…"
                className="mt-2 bg-card border-border"
              />
            </div>
            <div>
              <Label htmlFor="event_date" className="text-muted-foreground">
                Date
              </Label>
              <Input
                id="event_date"
                name="event_date"
                type="date"
                className="mt-2 bg-card border-border"
              />
            </div>
            <div>
              <Label htmlFor="headcount" className="text-muted-foreground">
                Crew needed
              </Label>
              <Input
                id="headcount"
                name="headcount"
                type="number"
                min="1"
                className="mt-2 bg-card border-border"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="roles" className="text-muted-foreground">
              Roles required
            </Label>
            <Input
              id="roles"
              name="roles"
              placeholder="Runners, F&B, supervisors…"
              className="mt-2 bg-card border-border"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-muted-foreground">
              Tell us more
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 bg-card border-border"
            />
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full justify-center py-6 text-base"
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending…
              </span>
            ) : (
              "Send Enquiry"
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}