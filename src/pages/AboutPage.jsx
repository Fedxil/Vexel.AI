import { AboutHeaderSection } from "../components/about/AboutHeaderSection";
import { VisionMissionSection } from "../components/about/VisionMissionSection";
import { PhilosophyValuesSection } from "../components/about/PhilosophyValuesSection";
import { TeamSection } from "../components/about/TeamSection";

export function AboutPage() {
  return (
    <main>
      <AboutHeaderSection />
      <VisionMissionSection />
      <PhilosophyValuesSection />
      <TeamSection />
    </main>
  );
}
