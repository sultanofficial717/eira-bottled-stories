import heroImage from "@/assets/hero-water-light.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-mist/40 via-background to-stone/30" />
        
        {/* Main Image with Drift */}
        <div className="absolute inset-0 animate-drift-slow">
          <img
            src={heroImage}
            alt="Abstract water light patterns"
            className="w-full h-full object-cover scale-125 opacity-80"
          />
        </div>

        {/* Animated Light Overlay */}
        <div className="absolute inset-0 animate-breathe">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" 
               style={{ backgroundPosition: '30% 40%', backgroundSize: '80% 80%' }} />
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 animate-shimmer opacity-20"
               style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--mist) / 0.3), transparent)' }} />
        </div>

        {/* Top Fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/60 to-transparent" />
        
        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent" />

        {/* Vignette */}
        <div className="absolute inset-0" 
             style={{ background: 'radial-gradient(ellipse at center, transparent 40%, hsl(var(--background) / 0.4) 100%)' }} />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/10 animate-pulse-soft" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-ocean/20 animate-pulse-soft delay-200" />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 rounded-full bg-mist-foreground/10 animate-pulse-soft delay-400" />
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
            <a href="#custom" className="btn-primary group">
              <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-500">
                Customize Your Bottles
              </span>
            </a>
            <a href="#contact" className="btn-secondary group">
              <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-500">
                Partner With EIRA
              </span>
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
          <div className="relative w-px h-12">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent" />
            <div className="absolute top-0 w-px h-4 bg-primary/80 animate-bounce" 
                 style={{ animationDuration: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
