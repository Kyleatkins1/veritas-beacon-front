
import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

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
              Transforming businesses through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-veritas-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-veritas-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-veritas-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-veritas-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
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
                <a href="#" className="text-gray-300 hover:text-veritas-accent transition-colors">
                  Custom Software Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-veritas-accent transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-veritas-accent transition-colors">
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-veritas-accent transition-colors">
                  Cybersecurity Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-veritas-accent transition-colors">
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-veritas-accent shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Tech Avenue, Innovation District
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-veritas-accent" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-veritas-accent" />
                <span className="text-gray-300">info@veritastech.com</span>
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
