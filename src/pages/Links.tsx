import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Send,
  MessageCircle,
  Globe,
  Users,
  Facebook,
} from "lucide-react";
import {
  INSTAGRAM,
  LINKEDIN,
  TELEGRAM,
  WHATSAPP,
  FACEBOOK,
} from "@/lib/constants";

const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/HBcHsXhBeGbIS9yAbSwTP1";

const LINKS = [
  {
    title: "Visit Our Website",
    href: "/",
    icon: Globe,
    desc: "India's Premier Event Manpower Partner",
    primary: true,
  },
  {
    title: "Join Volunteer Community",
    href: WHATSAPP_COMMUNITY,
    icon: Users,
    desc: "Get notified about paid event gigs in your city",
    primary: true,
  },
  {
    title: "Chat on WhatsApp",
    href: `https://wa.me/${WHATSAPP}`,
    icon: MessageCircle,
    desc: "Directly message us for quotes & queries",
  },
  {
    title: "Instagram",
    href: INSTAGRAM,
    icon: Instagram,
    desc: "Follow our event highlights",
  },
  {
    title: "LinkedIn",
    href: LINKEDIN,
    icon: Linkedin,
    desc: "Connect with us professionally",
  },
  {
    title: "Facebook",
    href: FACEBOOK,
    icon: Facebook,
    desc: "Join our Facebook community",
  },
  {
    title: "Telegram Channel",
    href: TELEGRAM,
    icon: Send,
    desc: "Updates and alerts on Telegram",
  },
];

export function Links() {
  return (
    <main className="min-h-screen-dvh relative overflow-x-hidden bg-background">
      <Helmet>
        <title>Connect with Evenza | Links & Socials</title>
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="Connect with Evenza Hospitality Services. Find all our official links, social media, and contact channels in one place."
        />
      </Helmet>

      {/* Background styling similar to Hero */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#F7F5F1] to-background dark:via-background" />
        {/* Animated Glow Orbs */}
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-[80px]"
          style={{ background: 'rgba(200, 154, 66, 0.15)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#c89a42 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-xl mx-auto px-6 py-16 flex flex-col items-center min-h-screen-dvh">
        {/* Profile / Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="w-24 h-24 rounded-full border border-gold/30 shadow-gold bg-card flex items-center justify-center mb-5 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="font-display text-5xl text-gold italic">E</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Evenza India
          </h1>
          <p className="text-muted-foreground text-sm max-w-sm">
            India's Premier Event Manpower & Hospitality Partner.
          </p>
        </motion.div>

        {/* Links List */}
        <div className="w-full space-y-4">
          {LINKS.map((link, index) => {
            const isInternal = link.href.startsWith("/");
            const LinkWrapper = isInternal ? Link : "a";
            
            return (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              >
                <LinkWrapper
                  to={isInternal ? link.href : undefined}
                  href={!isInternal ? link.href : undefined}
                  target={!isInternal ? "_blank" : undefined}
                  rel={!isInternal ? "noreferrer" : undefined}
                  className={`relative overflow-hidden group flex items-center p-4 rounded-xl border transition-all duration-300 w-full min-h-[64px] ${
                    link.primary
                      ? "bg-gold/5 border-gold/30 hover:border-gold hover:bg-gold/10 shadow-soft"
                      : "bg-card border-border hover:border-gold/50 hover:shadow-soft"
                  }`}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 mr-4 ${
                    link.primary ? "bg-gold/20 text-gold" : "bg-muted text-muted-foreground group-hover:text-gold transition-colors"
                  }`}>
                    <link.icon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-foreground text-sm sm:text-base group-hover:text-gold transition-colors">
                      {link.title}
                    </div>
                    {link.desc && (
                      <div className="text-xs text-muted-foreground mt-0.5 hidden sm:block">
                        {link.desc}
                      </div>
                    )}
                  </div>
                </LinkWrapper>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-xs text-muted-foreground/60 text-center"
        >
          © {new Date().getFullYear()} Shree Ji Company Pvt. Ltd. <br />
          All rights reserved.
        </motion.div>
      </div>
    </main>
  );
}
