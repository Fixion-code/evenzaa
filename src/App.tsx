import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { FloatingContact } from "./components/FloatingContact";
import { Home } from "./pages/Home";
import { ServicePageTemplate } from "./pages/ServicePageTemplate";
import { Volunteers } from "./pages/Volunteers";
import { SEO_PAGES } from "./lib/seo-pages";
import { CaseStudies } from "./pages/CaseStudies";
import { Portfolio } from "./pages/Portfolio";
import { CaseStudyTemplate } from "./pages/CaseStudyTemplate";
import { ThemeProvider } from "./components/theme-provider";
import NotFound from "./pages/NotFound";
import { Links } from "./pages/Links";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Terms } from "./pages/Terms";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { FAQPage } from "./pages/FAQPage";
import { JoinOurTeam } from "./pages/JoinOurTeam";
import { BlogIndex } from "./pages/BlogIndex";
import { BlogPostPage } from "./pages/BlogPostPage";
import { SITE_CONFIG } from "./lib/siteConfig";

function AppContent() {
  const location = useLocation();
  const isLinksPage = location.pathname === "/links" || location.pathname === "/links/";

  return (
    <div className="min-h-screen-dvh bg-background text-foreground">
      <Helmet>
        <link rel="canonical" href={`${SITE_CONFIG.url}${location.pathname}`} />
      </Helmet>
      <Toaster position="top-center" />
      {!isLinksPage && <FloatingContact />}
      {!isLinksPage && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/join-our-team" element={<JoinOurTeam />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyTemplate />} />
        <Route path="/links" element={<Links />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        {SEO_PAGES.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<ServicePageTemplate {...page} />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isLinksPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="evenza-theme">
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AppContent />
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </ThemeProvider>
  );
}