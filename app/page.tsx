import Navbar from "@/components/sections/navbar/default";
import CTA from "@/components/sections/cta/default";
import FAQ from "@/components/sections/faq/default";
import Footer from "@/components/sections/footer/default";
import Hero from "@/components/sections/hero/default";
import Features from "@/components/sections/features/default";
import Services from "@/components/sections/services/default";
import Stats from "@/components/sections/stats/default";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="stats">
        <Stats />
      </section>
      
      <section id="features">
        <Features />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <section id="faq">
        <FAQ />
      </section>
      
      <section id="cta">
        <CTA />
      </section>
      
      <Footer />
    </main>
  );
}