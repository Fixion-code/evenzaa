import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { FloatingContact } from "./components/FloatingContact";
import { Home } from "./pages/Home";
import { ServicePageTemplate } from "./pages/ServicePageTemplate";
import { Volunteers } from "./pages/Volunteers";
import { SEO_PAGES } from "./lib/seo-pages";
import { CaseStudies } from "./pages/CaseStudies";
import { CaseStudyTemplate } from "./pages/CaseStudyTemplate";
import { ThemeProvider } from "./components/theme-provider";
import NotFound from "./pages/NotFound";
import { Links } from "./pages/Links";

function AppContent() {
  const location = useLocation();
  const isLinksPage = location.pathname === "/links" || location.pathname === "/links/";

  return (
    <div className="min-h-screen-dvh bg-background text-foreground">
      <Toaster position="top-center" />
      {!isLinksPage && <FloatingContact />}
      {!isLinksPage && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyTemplate />} />
        <Route path="/links" element={<Links />} />
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
      </BrowserRouter>
    </ThemeProvider>
  );
}