import { CustomCursor } from "./global/CustomCursor";
import { Navbar } from "./global/Navbar";
import { XPBar } from "./global/XPBar";
import { InteractiveAvatar } from "./global/InteractiveAvatar";
import { AchievementPopup } from "./global/AchievementPopup";
import { KonamiCode } from "./global/KonamiCode";
import { Footer } from "./global/Footer";

import { Section1CV } from "./sections/Section1CV";
import { Section2About } from "./sections/Section2About";
import { Section3Skills } from "./sections/Section3Skills";
import { Section4Projects } from "./sections/Section4Projects";
import { Section5Experience } from "./sections/Section5Experience";
import { Section6Achievements } from "./sections/Section6Achievements";

export default function App() {
  return (
    <div className="bg-base-100 min-h-screen text-base-content font-sans transition-colors duration-300 relative selection:bg-primary/30 selection:text-primary-content">
      
      {/* Global UI & Gamification Elements */}
      <CustomCursor />
      <Navbar />
      <XPBar />
      <InteractiveAvatar />
      <AchievementPopup />
      <KonamiCode />

      {/* Main Content Sections */}
      <main className="pb-16"> {/* padding bottom for XP Bar */}
        <div id="top"><Section1CV /></div>
        <div id="about"><Section2About /></div>
        <div id="skills"><Section3Skills /></div>
        <div id="projects"><Section4Projects /></div>
        <div id="experience"><Section5Experience /></div>
        <div id="achievements"><Section6Achievements /></div>
      </main>

      <Footer />
      
    </div>
  );
}
