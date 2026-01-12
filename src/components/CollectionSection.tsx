import restaurantImage from "@/assets/restaurant-table.jpg";
import hotelImage from "@/assets/hotel-room.jpg";
import resortImage from "@/assets/resort-terrace.jpg";
import useScrollReveal from "@/hooks/useScrollReveal";

const collections = [
  {
    image: restaurantImage,
    title: "Fine Dining",
    caption: "Where every detail speaks of intention.",
  },
  {
    image: hotelImage,
    title: "Boutique Hotel",
    caption: "A welcome that begins with a glass of water.",
  },
  {
    image: resortImage,
    title: "Beach Resort",
    caption: "Just vibing with my own story.",
  },
];

const CollectionSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="collection" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-stone-section">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-radial from-mist/30 to-transparent animate-breathe" />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 reveal ${headerVisible ? 'visible' : ''}`}
        >

          <h2 className="headline-section text-primary mb-6">
            Where water becomes story.
          </h2>
          <p className="body-elegant text-muted-foreground">
            From intimate dining rooms to sun-drenched terraces, EIRA finds its 
            place wherever moments are crafted with care.
          </p>
        </div>

        {/* Gallery Grid */}
        <div 
          ref={galleryRef}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {collections.map((item, index) => (
            <div
              key={item.title}
              className={`group relative aspect-square overflow-hidden rounded reveal-scale ${galleryVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
              />
              
              {/* Gradient Overlay - Always visible, intensifies on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Shimmer Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0" 
                     style={{ background: 'linear-gradient(135deg, transparent 40%, hsl(var(--primary-foreground) / 0.1) 50%, transparent 60%)', transform: 'translateX(-100%)' }} 
                     />
              </div>
              
              {/* Content - Always visible at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-8 transition-all duration-700">
                <h3 className="font-serif text-2xl text-primary-foreground mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="font-serif italic text-primary-foreground/80 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {item.caption}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary-foreground/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
