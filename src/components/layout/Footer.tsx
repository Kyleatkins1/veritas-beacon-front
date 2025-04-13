import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-veritas-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Veritas<span className="text-veritas-accent">Tech</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Transforming businesses through innovative technology solutions, focused on creating trusted solutions for healthcare and public safety organizations across the USA.
            </p>
            {/* Social media icons removed as requested */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-veritas-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-veritas-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-veritas-accent transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-veritas-accent transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-veritas-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-veritas-accent transition-colors">
                  Healthcare SaaS Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-veritas-accent transition-colors">
                  Safety & Risk Management
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-veritas-accent transition-colors">
                  Analytics & Reporting
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-veritas-accent transition-colors">
                  Custom SaaS Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-veritas-accent transition-colors">
                  AI Implementation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-veritas-accent" />
                <span className="text-gray-300">info@veritastech.io</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Veritas Technology Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
