
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MusicSection from "@/components/MusicSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <MusicSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
