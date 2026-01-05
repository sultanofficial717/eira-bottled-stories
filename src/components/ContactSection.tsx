import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
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
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-ivory">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Text Content */}
          <div>
            <div className="divider-elegant mb-8" />
            <h2 className="headline-section text-primary mb-6">
              Let's bottle your story.
            </h2>
            <p className="body-elegant text-muted-foreground mb-8">
              Whether you're a neighborhood café or a five-star resort, we craft 
              custom water bottles that become part of your identity.
            </p>
            <p className="text-poetic">
              "The details are not the details.
              <br />
              They make the design."
            </p>
            <p className="body-small text-muted-foreground mt-4">— Charles Eames</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
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
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-border focus:border-primary outline-none transition-colors duration-500 body-elegant"
                placeholder="Your establishment name"
              />
            </div>

            <div>
              <label
                htmlFor="quantity"
                className="block body-small text-foreground mb-3"
              >
                Estimated Monthly Quantity
              </label>
              <select
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-border focus:border-primary outline-none transition-colors duration-500 body-elegant cursor-pointer"
              >
                <option value="">Select quantity</option>
                <option value="100-500">100 - 500 bottles</option>
                <option value="500-1000">500 - 1,000 bottles</option>
                <option value="1000-5000">1,000 - 5,000 bottles</option>
                <option value="5000+">5,000+ bottles</option>
              </select>
            </div>

            <div>
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
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-border focus:border-primary outline-none transition-colors duration-500 body-elegant"
                placeholder="City for delivery"
              />
            </div>

            <div>
              <label htmlFor="notes" className="block body-small text-foreground mb-3">
                Custom Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-border focus:border-primary outline-none transition-colors duration-500 body-elegant resize-none"
                placeholder="Tell us about your vision..."
              />
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto">
              Start Your Custom Bottles
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
