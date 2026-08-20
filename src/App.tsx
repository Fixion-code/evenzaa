import { BrowserRouter, Routes, Route } from "react-router-dom";
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

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="evenza-theme">
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="min-h-screen bg-background text-foreground">
          <Toaster position="top-center" />
          <FloatingContact />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyTemplate />} />
            {SEO_PAGES.map((page) => (
              <Route
                key={page.path}
                path={page.path}
                element={<ServicePageTemplate {...page} />}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}