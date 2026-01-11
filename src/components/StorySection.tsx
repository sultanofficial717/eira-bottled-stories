import bottleImage from "@/assets/eira-bottle.jpg";
import useScrollReveal from "@/hooks/useScrollReveal";

const StorySection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="story" className="py-24 md:py-32 lg:py-40 bg-ivory relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-mist/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-stone/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div 
            ref={sectionRef}
            className={`order-2 lg:order-1 reveal-left ${isVisible ? 'visible' : ''}`}
          >
            <h2 className="headline-section text-primary mb-8">
              Some stories are told in words.
            </h2>
            <p className="text-poetic mb-8">
              Some in silence.
              <br />
              Some in a sip of water.
            </p>
            <div className="space-y-6">
              <p className={`body-elegant text-muted-foreground reveal ${isVisible ? 'visible delay-100' : ''}`}>
                EIRA is more than water it's an experience. Every bottle carries the 
                quiet elegance of moments shared, tables set with care, and conversations 
                that linger.
              </p>
              <p className={`body-elegant text-muted-foreground reveal ${isVisible ? 'visible delay-200' : ''}`}>
                In the details that define hospitality, water plays a role often 
                overlooked. We believe it deserves intention. It deserves identity.
              </p>
              <p className={`body-elegant text-muted-foreground reveal ${isVisible ? 'visible delay-300' : ''}`}>
                Because the finest restaurants aren't remembered just for their food 
                they're remembered for how they made you feel.
              </p>
            </div>
          </div>

          {/* Image */}
          <div 
            ref={imageRef}
            className={`order-1 lg:order-2 relative reveal-scale ${imageVisible ? 'visible' : ''}`}
          >
            <div className="aspect-[3/4] rounded overflow-hidden group">
              <img
                src={bottleImage}
                alt="EIRA luxury water bottle"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            {/* Decorative Elements */}
            <div className={`absolute -bottom-8 -left-8 w-32 h-32 border border-primary/20 rounded-sm -z-10 transition-all duration-1000 ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
            <div className={`absolute -top-4 -right-4 w-20 h-20 bg-mist/30 rounded-sm -z-10 transition-all duration-1000 delay-200 ${imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
