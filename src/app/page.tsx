import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import TrustBadges from "@/components/TrustBadges";
import Gallery from "@/components/Gallery";
import Compare from "@/components/Compare";
import ServiceCards from "@/components/ServiceCards";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <BeforeAfter />
        <Gallery />
        <Compare />
        <ServiceCards />
        <TrustBadges />
        <Reviews />
        <Location />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
