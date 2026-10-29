import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE = "https://evenzaa-sable.vercel.app";

export function PrivacyPolicy() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${SITE}/privacy-policy` },
    ],
  };

  return (
    <main id="main-content" className="pt-24 min-h-screen-dvh">
      <Helmet>
        <title>Privacy Policy | Evenza Hospitality Services</title>
        <meta name="description" content="Evenza's privacy policy outlines how we collect, use, and protect your personal information when you use our event manpower and hospitality staffing services." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE}/privacy-policy`} />
        <meta property="og:title" content="Privacy Policy | Evenza Hospitality Services" />
        <meta property="og:url" content={`${SITE}/privacy-policy`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-4 pb-2">
        <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
          <li className="text-gold">› Privacy Policy</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          <time dateTime="2026-10-29">Last updated: 29 October 2026</time>
        </p>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 id="information-collection" className="font-display text-2xl text-foreground mt-8 mb-3">Information We Collect</h2>
            <p>When you contact Evenza Hospitality Services through our website, WhatsApp, phone, or contact form, we may collect your name, phone number, email address, event details, city, and any additional information you share. This information is used solely to process your enquiry and provide event staffing services.</p>
          </section>

          <section>
            <h2 id="how-we-use" className="font-display text-2xl text-foreground mt-8 mb-3">How We Use Your Information</h2>
            <p>We use your personal information to respond to your enquiry and provide a staffing proposal, deploy event manpower for your event, communicate about your booking and event logistics, improve our services and website experience, and send relevant updates about our services if you opt in.</p>
          </section>

          <section>
            <h2 id="data-sharing" className="font-display text-2xl text-foreground mt-8 mb-3">Data Sharing</h2>
            <p>Evenza does not sell, trade, or share your personal information with third parties for marketing purposes. We may share limited information with our deployed crew strictly for event execution purposes, such as venue name and event schedule.</p>
          </section>

          <section>
            <h2 id="data-security" className="font-display text-2xl text-foreground mt-8 mb-3">Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal data. Our website uses HTTPS encryption, and all data is stored securely. We do not store payment information on our servers.</p>
          </section>

          <section>
            <h2 id="cookies" className="font-display text-2xl text-foreground mt-8 mb-3">Cookies & Analytics</h2>
            <p>Our website uses Vercel Analytics for performance monitoring and basic usage statistics. These tools collect anonymised data about page visits and performance metrics. No personally identifiable information is collected through analytics.</p>
          </section>

          <section>
            <h2 id="your-rights" className="font-display text-2xl text-foreground mt-8 mb-3">Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information at any time. To exercise these rights, contact us at <a href="mailto:indiaevenza@gmail.com" className="text-gold hover:underline">indiaevenza@gmail.com</a> or call <a href="tel:+919161710849" className="text-gold hover:underline">+91 91617 10849</a>.</p>
          </section>

          <section>
            <h2 id="contact-privacy" className="font-display text-2xl text-foreground mt-8 mb-3">Contact Us</h2>
            <p>For any privacy-related questions, contact Evenza Hospitality Services — a brand of Shree Ji Company Pvt. Ltd., Choti Chaupad, Jaipur, Rajasthan, India. Email: <a href="mailto:indiaevenza@gmail.com" className="text-gold hover:underline">indiaevenza@gmail.com</a>.</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/" className="text-sm text-muted-foreground hover:text-gold transition-colors">← Back to Evenza Home</Link>
        </div>
      </article>
    </main>
  );
}
