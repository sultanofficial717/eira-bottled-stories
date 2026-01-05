import restaurantImage from "@/assets/restaurant-table.jpg";
import cafeImage from "@/assets/cafe-interior.jpg";
import hotelImage from "@/assets/hotel-room.jpg";
import resortImage from "@/assets/resort-terrace.jpg";

const collections = [
  {
    image: restaurantImage,
    title: "Fine Dining",
    caption: "Where every detail speaks of intention.",
  },
  {
    image: cafeImage,
    title: "Modern Café",
    caption: "Morning light and quiet conversations.",
  },
  {
    image: hotelImage,
    title: "Boutique Hotel",
    caption: "A welcome that begins with a glass of water.",
  },
  {
    image: resortImage,
    title: "Beach Resort",
    caption: "The ocean on the table, the horizon in view.",
  },
];

const CollectionSection = () => {
  return (
    <section id="collection" className="py-24 md:py-32 lg:py-40 bg-stone-section">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="divider-elegant mx-auto mb-8" />
          <h2 className="headline-section text-primary mb-6">
            Where water becomes story.
          </h2>
          <p className="body-elegant text-muted-foreground">
            From intimate dining rooms to sun-drenched terraces, EIRA finds its 
            place wherever moments are crafted with care.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {collections.map((item, index) => (
            <div
              key={item.title}
              className="group relative aspect-square overflow-hidden rounded"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                <h3 className="font-serif text-2xl text-primary-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-serif italic text-primary-foreground/80">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
