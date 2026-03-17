import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { StructureSection } from "@/components/StructureSection";
import { RulesSection } from "@/components/RulesSection";
import { EvaluationSection } from "@/components/EvaluationSection";
import { RegisterSection } from "@/components/RegisterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StructureSection />
      <RulesSection />
      <EvaluationSection />
      <RegisterSection />
      <Footer />
    </div>
  );
};

export default Index;
