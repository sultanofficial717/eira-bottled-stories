import heroImage from "@/assets/hero-water-light.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Drift Animation */}
      <div className="absolute inset-0 animate-drift">
        <img
          src={heroImage}
          alt="Abstract water light patterns"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="animate-fade-up body-small text-primary tracking-[0.3em] uppercase mb-6">
            Every Sip. A Story.
          </p>

          {/* Headline */}
          <h1 className="animate-fade-up delay-200 headline-hero text-primary mb-8 text-balance">
            Every sip has a story.
          </h1>

          {/* Subtext */}
          <p className="animate-fade-up delay-400 text-poetic max-w-2xl mx-auto mb-12">
            Water crafted not just for taste — 
            <br className="hidden md:block" />
            but for moments, tables, and memories.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-600 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#custom" className="btn-primary">
              Customize Your Bottles
            </a>
            <a href="#contact" className="btn-secondary">
              Partner With EIRA
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up delay-800">
        <div className="flex flex-col items-center gap-3">
          <span className="body-small text-muted-foreground tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
