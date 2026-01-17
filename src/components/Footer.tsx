import logoImg from "@/assets/logoeira.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div>
            <img
              src={logoImg}
              alt="EIRA Logo"
              className="h-20 w-auto mb-6 filter drop-shadow-md transform hover:scale-105 transition-transform duration-500"
            />
            <p className="font-serif italic text-primary-foreground/70">
              Every Sip. A Story.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-sm tracking-[0.2em] uppercase mb-6 text-primary-foreground/60">
              Explore
            </h3>
            <nav className="space-y-4">
              <a
                href="#story"
                className="block body-small text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-500"
              >
                The Story
              </a>
              <a
                href="#custom"
                className="block body-small text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-500"
              >
                Custom Bottles
              </a>
              <a
                href="#collection"
                className="block body-small text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-500"
              >
                Collection
              </a>
              <a
                href="#contact"
                className="block body-small text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-500"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-sm tracking-[0.2em] uppercase mb-6 text-primary-foreground/60">
              Connect
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:talharehman717@gmail.com"
                className="block body-small text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-500"
              >
                talharehman717@gmail.com
              </a>
              <p className="body-small text-primary-foreground/60">
                For partnership inquiries
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="body-small text-primary-foreground/50">
            © {currentYear} EIRA. All rights reserved.
          </p>
          <p className="body-small text-primary-foreground/50">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
