import { HeroSection } from "../components/home/HeroSection";
import { TechStackSection } from "../components/home/TechStackSection";
import { WorkflowSection } from "../components/home/WorkflowSection";
import { MetricsSegmentsSection } from "../components/home/MetricsSegmentsSection";
import { FaqSection } from "../components/home/FaqSection";
import { ContactCtaSection } from "../components/home/ContactCtaSection";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <TechStackSection />
      <WorkflowSection />
      <MetricsSegmentsSection />
      <FaqSection />
      <ContactCtaSection />
    </main>
  );
}
