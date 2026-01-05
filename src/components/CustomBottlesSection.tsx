import { Palette, Tag, Droplets, Truck } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const features = [
  {
    icon: Palette,
    title: "Your Colors",
    description: "Custom label design that matches your brand identity perfectly.",
  },
  {
    icon: Tag,
    title: "Your Name",
    description: "Premium bottles featuring your restaurant or hotel logo.",
  },
  {
    icon: Droplets,
    title: "Same Price",
    description: "Luxury perception without the premium cost of specialty water.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description: "Consistent delivery schedules tailored to your needs.",
  },
];

const CustomBottlesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  return (
    <section id="custom" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-mist-section">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-radial from-background to-transparent animate-pulse-soft" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-radial from-stone/60 to-transparent animate-pulse-soft delay-500" />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 reveal ${headerVisible ? 'visible' : ''}`}
        >
          <div className={`divider-elegant mx-auto mb-8 transition-all duration-1000 ${headerVisible ? 'w-16' : 'w-0'}`} />
          <h2 className="headline-section text-primary mb-6">
            Put your name on every table.
          </h2>
          <p className="body-elegant text-muted-foreground">
            Transform generic mineral water into a signature element of your 
            guest experience. Custom-branded bottles that elevate perception 
            without elevating costs.
          </p>
        </div>

        {/* Features Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-8 bg-background/60 backdrop-blur-sm rounded hover:bg-background transition-all duration-700 reveal-scale ${gridVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <feature.icon
                  size={32}
                  className="text-primary group-hover:scale-110 transition-transform duration-500"
                  strokeWidth={1.5}
                />
                {/* Icon Glow */}
                <div className="absolute inset-0 -m-2 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10" />
              </div>
              <h3 className="headline-card text-primary mb-3">{feature.title}</h3>
              <p className="body-small text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          ref={ctaRef}
          className={`text-center reveal ${ctaVisible ? 'visible' : ''}`}
        >
          <a href="#contact" className="btn-primary group">
            <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-500">
              Partner With EIRA
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomBottlesSection;
