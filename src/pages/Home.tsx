import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Roles } from "@/components/Roles";
import { Events } from "@/components/Events";
import { Coverage } from "@/components/Coverage";
import { Extras } from "@/components/AdditionalServices";
import { Founders } from "@/components/Team";
import { Contact } from "@/components/Contact";

export function Home() {
  return (
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
  );
}
