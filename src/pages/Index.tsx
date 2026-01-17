import { useSEO } from "@/hooks/useSEO";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import CustomBottlesSection from "@/components/CustomBottlesSection";
import CollectionSection from "@/components/CollectionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useSEO({

    description: "EIRA creates custom-branded luxury water bottles for restaurants, hotels, and cafés. Transform your guest experience with premium water at the same price as generic mineral water.",
  });

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StorySection />
      <CustomBottlesSection />
      <CollectionSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
