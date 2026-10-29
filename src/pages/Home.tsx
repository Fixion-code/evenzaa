import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Roles } from "@/components/Roles";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Gallery";
import { Coverage } from "@/components/Coverage";
import { Extras } from "@/components/AdditionalServices";
import { Founders } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { HomeFAQ } from "@/components/HomeFAQ";
import { HomeDefinitions } from "@/components/HomeDefinitions";

const SITE = "https://evenzaa-sable.vercel.app";

export function Home() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    ],
  };

  return (
    <main id="main-content">
      <Helmet>
        <meta name="date" content="2024-01-15" />
        <meta name="last-modified" content="2026-10-29" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <Hero />
      <About />
      <Services />
      <Roles />
      <Events />
      <HomeDefinitions />
      <Gallery />
      <Coverage />
      <Extras />
      <Founders />
      <Testimonials />
      <HomeFAQ />
      <Contact />
    </main>
  );
}

