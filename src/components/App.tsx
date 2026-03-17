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
    <div className="bg-white dark:bg-black min-h-screen text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300 relative selection:bg-red-500/30">
      
      {/* Global UI & Gamification Elements */}
      <CustomCursor />
      <Navbar />
      <XPBar />
      <InteractiveAvatar />
      <AchievementPopup />
      <KonamiCode />

      {/* Main Content Sections */}
      <main className="pb-16"> {/* padding bottom for XP Bar */}
        <Section1CV />
        <Section2About />
        <Section3Skills />
        <Section4Projects />
        <Section5Experience />
        <Section6Achievements />
      </main>

      <Footer />
      
    </div>
  );
}
