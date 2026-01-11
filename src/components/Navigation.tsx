import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logoeira.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide nav based on scroll direction
      if (currentScrollY < lastScrollY) {
        // Scrolling up - show nav
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide nav
        setIsVisible(false);
      }
      
      // Track if page is scrolled
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: "#story", label: "The Story" },
    { href: "#custom", label: "Custom Bottles" },
    { href: "#collection", label: "Collection" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Main Header Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isVisible 
            ? "translate-y-0 opacity-100" 
            : "translate-y-[-100%] opacity-0 pointer-events-none"
        } ${
          isScrolled
            ? "bg-white shadow-lg backdrop-blur-md py-2"
            : "bg-white shadow-md py-3 md:py-4"
        }`}
      >
        <nav className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo on Left */}
          <a
            href="#"
            className="transition-all duration-500 hover:opacity-70 transform hover:scale-105 inline-block flex-shrink-0"
          >
            <img
              src={logoImg}
              alt="EIRA Logo"
              className="h-12 md:h-16 w-auto filter drop-shadow-sm"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12 ml-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-primary/80 font-medium hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <a href="#contact" className="hidden md:block btn-primary group">
            <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-500">
              Partner With Us
            </span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 top-[72px] bg-white backdrop-blur-lg transition-all duration-700 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-6 py-12 flex flex-col gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-3xl text-primary hover:text-primary/80 transition-colors duration-500 animate-in fade-in slide-in-from-left-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary group w-full sm:w-auto mt-4"
            >
              <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-500">
                Partner With Us
              </span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
