import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PortfolioBackground from "./components/PortfolioBackground";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#041329] font-sans text-[#d6e3ff] selection:bg-[#38debb] selection:text-[#00382d]">
      <PortfolioBackground />
      <Navbar />

      <main className="relative">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
