import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Gallery from "@/components/Gallery";
import ServiceCards from "@/components/ServiceCards";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <ServiceCards />
        <Gallery />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
