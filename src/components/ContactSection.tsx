import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import useScrollReveal from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { toast } = useToast();
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal({ threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    brandName: "",
    quantity: "",
    city: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest",
      description: "We'll be in touch within 24 hours to discuss your custom bottles.",
    });
    setFormData({ brandName: "", quantity: "", city: "", notes: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 bg-ivory">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-gradient-radial from-mist/40 to-transparent animate-breathe" />
          <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-gradient-radial from-stone/30 to-transparent animate-pulse-soft" />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Text Content */}
          <div 
            ref={textRef}
            className={`reveal-left ${textVisible ? 'visible' : ''}`}
          >
            <h2 className="headline-section text-primary mb-6">
              Let's bottle your story.
            </h2>
            <p className="body-elegant text-muted-foreground mb-8">
              Whether you're a neighborhood café or a five-star resort, we craft 
              custom water bottles that become part of your identity.
            </p>
            <blockquote className="relative pl-6 border-l-2 border-primary/30">
              <p className="text-poetic">
                "The details are not the details.
                <br />
                They make the design."
              </p>
              <footer className="body-small text-muted-foreground mt-4">— Charles Eames</footer>
            </blockquote>
          </div>

          {/* Form */}
          <div 
            ref={formRef}
            className={`reveal-right ${formVisible ? 'visible' : ''}`}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
            <div className={`reveal ${formVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <label
                htmlFor="brandName"
                className="block body-small text-foreground mb-3"
              >
                Brand / Restaurant Name
              </label>
              <input
                type="text"
                id="brandName"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                required
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-border focus:border-primary outline-none transition-all duration-500 body-elegant focus:pl-2"
                placeholder="Your establishment name"
              />
            </div>

            <div className={`reveal ${formVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <label
                htmlFor="quantity"
                className="block body-small text-foreground mb-3"
              >
                Estimated Monthly Quantity (Cartons)
              </label>
              <select
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-border focus:border-primary outline-none transition-all duration-500 body-elegant cursor-pointer focus:pl-2"
              >
                <option value="">Select cartons</option>
                <option value="100-150">100 - 150 cartons</option>
                <option value="150-200">150 - 200 cartons</option>
                <option value="300-400">300 - 400 cartons</option>
                <option value="custom">Custom entry</option>
              </select>
            </div>

            <div className={`reveal ${formVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <label htmlFor="city" className="block body-small text-foreground mb-3">
                Delivery City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-border focus:border-primary outline-none transition-all duration-500 body-elegant focus:pl-2"
                placeholder="City for delivery"
              />
            </div>

            <div className={`reveal ${formVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <label htmlFor="notes" className="block body-small text-foreground mb-3">
                Custom Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-border focus:border-primary outline-none transition-all duration-500 body-elegant resize-none focus:pl-2"
                placeholder="Tell us about your vision..."
              />
            </div>

            <div className={`reveal ${formVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
              <button type="submit" className="btn-primary w-full sm:w-auto group">
                <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-500">
                  Start Your Custom Bottles
                </span>
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
