
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-veritas-light to-white pt-20"
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-veritas-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-veritas-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in-left">
            <div className="inline-block mb-4 bg-veritas-primary/10 text-veritas-primary px-4 py-2 rounded-full text-sm font-medium">
              Launching 2025: Healthcare & Safety SaaS Solutions
            </div>
            <h1 className="font-bold text-veritas-dark mb-6">
              Empowering Healthcare & Safety 
              <span className="text-veritas-primary"> Through Technology</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Veritas Technology Solutions is a new startup delivering specialized SaaS and custom software 
              development for healthcare and safety-focused agencies, enhancing efficiency
              and improving outcomes through innovative technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-veritas-primary hover:bg-veritas-primary/90 flex items-center gap-2">
                Schedule a Consultation <ArrowRight size={16} />
              </Button>
              <Button 
                variant="outline" 
                className="border-veritas-primary/30 text-veritas-primary hover:bg-veritas-primary/5"
                onClick={scrollToServices}
              >
                Explore Solutions
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Coming soon:</span> Beta release in late 2025
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-veritas-primary/10 transform rotate-6 rounded-2xl"></div>
              <div className="relative bg-gradient-to-br from-veritas-primary to-veritas-secondary p-1 rounded-2xl shadow-xl">
                <div className="bg-white rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Healthcare technology solutions" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-veritas-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-veritas-primary font-bold">2025</span>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-600">Launch</p>
                    <p className="font-medium">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToServices}
            className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-veritas-primary"
          >
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
