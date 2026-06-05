import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { FloatingContact } from "./components/FloatingContact";
import { Home } from "./pages/Home";
import { ServicePageTemplate } from "./pages/ServicePageTemplate";
import { SEO_PAGES } from "./lib/seo-pages";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Toaster theme="dark" position="top-center" />
        <FloatingContact />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {SEO_PAGES.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={<ServicePageTemplate {...page} />}
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}