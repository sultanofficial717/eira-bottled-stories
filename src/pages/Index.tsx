import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import CustomBottlesSection from "@/components/CustomBottlesSection";
import CollectionSection from "@/components/CollectionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title and meta description
    document.title = "EIRA — Every Sip. A Story. | Custom Branded Water Bottles";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "EIRA creates custom-branded luxury water bottles for restaurants, hotels, and cafés. Transform your guest experience with premium water at the same price as generic mineral water."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "EIRA creates custom-branded luxury water bottles for restaurants, hotels, and cafés. Transform your guest experience with premium water at the same price as generic mineral water.";
      document.head.appendChild(meta);
    }
  }, []);

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
