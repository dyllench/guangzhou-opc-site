import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import ProblemSection from "@/components/ProblemSection";
import OpcModelSection from "@/components/OpcModelSection";
import ServiceSection from "@/components/ServiceSection";
import AudienceSection from "@/components/AudienceSection";
import JourneySection from "@/components/JourneySection";
import AdvantageSection from "@/components/AdvantageSection";
import CooperationSection from "@/components/CooperationSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="site-shell">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <VisionSection />
      <ProblemSection />
      <OpcModelSection />
      <ServiceSection />
      <AudienceSection />
      <JourneySection />
      <AdvantageSection />
      <CooperationSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
