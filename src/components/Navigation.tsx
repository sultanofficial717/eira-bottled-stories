import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#story", label: "The Story" },
    { href: "#custom", label: "Custom Bottles" },
    { href: "#collection", label: "Collection" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md py-4"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-2xl md:text-3xl tracking-tight text-primary transition-opacity duration-500 hover:opacity-70"
        >
          EIRA
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-foreground/80 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <a href="#contact" className="hidden md:block btn-primary">
          Partner With Us
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
        className={`md:hidden fixed inset-0 top-[72px] bg-background/98 backdrop-blur-lg transition-all duration-700 ${
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
              className="font-serif text-3xl text-foreground/80 hover:text-primary transition-colors duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="btn-primary mt-8 text-center"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
