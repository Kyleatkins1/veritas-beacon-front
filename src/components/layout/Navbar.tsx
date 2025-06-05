
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onEarlyAccessClick?: () => void;
}

const Navbar = ({ onEarlyAccessClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Solutions", href: "#services" },
    { name: "Ethical AI", href: "#ethical-ai" },
    { name: "Projects", href: "#projects" },
    { name: "Features", href: "#features" },
    { name: "Founder's Vision", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-veritas-primary to-veritas-secondary flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="ml-2 text-xl font-bold text-veritas-primary">
              Veritas<span className="text-veritas-secondary">Tech</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-700 hover:text-veritas-primary transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-veritas-primary hover:bg-veritas-primary/90"
            onClick={onEarlyAccessClick}
          >
            Request Early Access
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-veritas-primary py-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-veritas-primary hover:bg-veritas-primary/90 w-full"
              onClick={onEarlyAccessClick}
            >
              Request Early Access
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
