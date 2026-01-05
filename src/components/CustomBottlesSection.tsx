import { Palette, Tag, Droplets, Truck } from "lucide-react";

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
  return (
    <section id="custom" className="py-24 md:py-32 lg:py-40 bg-mist-section">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="divider-elegant mx-auto mb-8" />
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-background/60 backdrop-blur-sm rounded hover:bg-background transition-all duration-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon
                size={32}
                className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500"
                strokeWidth={1.5}
              />
              <h3 className="headline-card text-primary mb-3">{feature.title}</h3>
              <p className="body-small text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#contact" className="btn-primary">
            Partner With EIRA
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomBottlesSection;
