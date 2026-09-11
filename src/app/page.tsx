import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PeekingSection from "@/components/PeekingSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import NewarrivalSection from "@/components/NewArrivalsSection";
import GroundBreakingSection from "@/components/GroundBreakingSection";
import HandedOverSection from "@/components/HandedOverSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0d203c]">
      <Navbar />
      <HeroSection />
      <PeekingSection />
      <ServicesSection/>
      <PortfolioSection/>
      <NewarrivalSection/>
      <GroundBreakingSection/>
      <HandedOverSection/>
    </main>
  );
}