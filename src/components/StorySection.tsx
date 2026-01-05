import bottleImage from "@/assets/eira-bottle.jpg";

const StorySection = () => {
  return (
    <section id="story" className="py-24 md:py-32 lg:py-40 bg-ivory">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="divider-elegant mb-8" />
            <h2 className="headline-section text-primary mb-8">
              Some stories are told in words.
            </h2>
            <p className="text-poetic mb-8">
              Some in silence.
              <br />
              Some in a sip of water.
            </p>
            <div className="space-y-6">
              <p className="body-elegant text-muted-foreground">
                EIRA is more than water — it's an experience. Every bottle carries the 
                quiet elegance of moments shared, tables set with care, and conversations 
                that linger.
              </p>
              <p className="body-elegant text-muted-foreground">
                In the details that define hospitality, water plays a role often 
                overlooked. We believe it deserves intention. It deserves identity.
              </p>
              <p className="body-elegant text-muted-foreground">
                Because the finest restaurants aren't remembered just for their food — 
                they're remembered for how they made you feel.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[3/4] rounded overflow-hidden">
              <img
                src={bottleImage}
                alt="EIRA luxury water bottle"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-primary/20 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
