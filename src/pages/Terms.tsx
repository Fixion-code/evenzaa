import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE = "https://evenzaa-sable.vercel.app";

export function Terms() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Terms of Service", item: `${SITE}/terms` },
    ],
  };

  return (
    <main id="main-content" className="pt-24 min-h-screen-dvh">
      <Helmet>
        <title>Terms of Service | Evenza Hospitality Services</title>
        <meta name="description" content="Terms of service for Evenza Hospitality Services. Read about our event manpower deployment policies, booking terms, and service agreements." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE}/terms`} />
        <meta property="og:title" content="Terms of Service | Evenza Hospitality Services" />
        <meta property="og:url" content={`${SITE}/terms`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-4 pb-2">
        <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
          <li className="text-gold">› Terms of Service</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">
          <time dateTime="2026-10-29">Last updated: 29 October 2026</time>
        </p>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 id="acceptance" className="font-display text-2xl text-foreground mt-8 mb-3">Acceptance of Terms</h2>
            <p>By using the Evenza Hospitality Services website or engaging our event manpower services, you agree to these Terms of Service. Evenza is a brand of Shree Ji Company Pvt. Ltd., a registered company based in Jaipur, Rajasthan, India.</p>
          </section>

          <section>
            <h2 id="services-offered" className="font-display text-2xl text-foreground mt-8 mb-3">Services Offered</h2>
            <p>Evenza provides event manpower, hospitality teams, event volunteers, event crew, tour managers, and on-ground event support for weddings, corporate events, exhibitions, concerts, sports events, and all types of gatherings across Jaipur, Rajasthan, and pan-India.</p>
          </section>

          <section>
            <h2 id="booking" className="font-display text-2xl text-foreground mt-8 mb-3">Booking & Confirmation</h2>
            <p>Event staffing bookings are confirmed upon mutual agreement of scope, staffing count, timeline, and pricing. A confirmation is shared via WhatsApp or email. Advance payment terms are communicated at the time of booking.</p>
          </section>

          <section>
            <h2 id="cancellation" className="font-display text-2xl text-foreground mt-8 mb-3">Cancellation Policy</h2>
            <p>Cancellations made 48 hours or more before the event date are eligible for a full refund. Cancellations within 48 hours may be subject to a cancellation fee depending on crew mobilisation status. Contact us to discuss specific situations.</p>
          </section>

          <section>
            <h2 id="liability" className="font-display text-2xl text-foreground mt-8 mb-3">Limitation of Liability</h2>
            <p>Evenza's liability is limited to the value of the contracted services. We are not responsible for event outcomes beyond the scope of our staffing deployment. Our crew operates under the direction of the event organiser or their designated coordinator.</p>
          </section>

          <section>
            <h2 id="intellectual-property" className="font-display text-2xl text-foreground mt-8 mb-3">Intellectual Property</h2>
            <p>All content on this website, including text, images, logos, and design, is the intellectual property of Evenza Hospitality Services and Shree Ji Company Pvt. Ltd. Unauthorised reproduction is prohibited.</p>
          </section>

          <section>
            <h2 id="governing-law" className="font-display text-2xl text-foreground mt-8 mb-3">Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.</p>
          </section>

          <section>
            <h2 id="contact-terms" className="font-display text-2xl text-foreground mt-8 mb-3">Contact</h2>
            <p>For questions about these terms, contact Evenza Hospitality Services at <a href="mailto:indiaevenza@gmail.com" className="text-gold hover:underline">indiaevenza@gmail.com</a> or call <a href="tel:+919161710849" className="text-gold hover:underline">+91 91617 10849</a>.</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/" className="text-sm text-muted-foreground hover:text-gold transition-colors">← Back to Evenza Home</Link>
        </div>
      </article>
    </main>
  );
}
