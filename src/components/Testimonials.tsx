import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Wedding Client",
    content: "Evenza's team was absolutely incredible for our destination wedding in Jaipur. The hospitality staff were so courteous and handled everything flawlessly. We didn't have to worry about a thing!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Corporate Event Manager",
    content: "We hired 50+ volunteers and registration staff for our tech summit. Evenza delivered highly professional and trained individuals on very short notice. Highly recommended for corporate events.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Anjali Desai",
    role: "Exhibition Organizer",
    content: "The level of professionalism from Evenza is unmatched. Their ushers and VIP handlers made our 3-day exhibition a huge success. Will definitely partner with them again.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-section-bg to-background relative overflow-hidden">
      {/* Decorative quotes background */}
      <div className="absolute top-20 right-10 opacity-[0.03] text-gold pointer-events-none">
        <Quote size={400} />
      </div>

      <SectionHeader
        kicker="Client Feedback"
        title={
          <>
            What people say about <span className="italic text-gold">Evenza</span>
          </>
        }
        sub="Don't just take our word for it. Here's what our clients have to say about our hospitality and event staffing services."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="card p-8 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 shadow-soft"
            >
              <div className="flex text-gold mb-6 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed flex-grow italic mb-8 relative">
                <span className="absolute -top-4 -left-2 text-4xl text-gold/20 font-serif leading-none">"</span>
                {testimonial.content}
                <span className="absolute -bottom-4 text-4xl text-gold/20 font-serif leading-none">"</span>
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div aria-hidden="true">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} — ${testimonial.role} review of Evenza Hospitality Services`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold/20"
                    width={150}
                    height={150}
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted-foreground/50 text-xs mt-8">
          * Representative testimonials. Client details shared with permission.
        </p>
      </div>
    </section>
  );
}
