import { Toaster } from "@/components/ui/sonner";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Roles } from "./components/Roles";
import { Events } from "./components/Events";
import { Coverage } from "./components/Coverage";
import { Extras } from "./components/AdditionalServices";
import { Founders } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster theme="dark" position="top-center" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Roles />
        <Events />
        <Coverage />
        <Extras />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}