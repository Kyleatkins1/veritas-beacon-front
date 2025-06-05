
import React from "react";
import { Shield, Users, Eye, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const EthicalAI = () => {
  const principles = [
    {
      icon: Shield,
      title: "Transparency",
      description: "We believe in clear, understandable AI systems that organizations can trust and rely on."
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "Our AI solutions enhance human capabilities rather than replace them, keeping people at the center."
    },
    {
      icon: Eye,
      title: "Accountability",
      description: "We maintain responsibility for our AI systems and their outcomes in healthcare and safety applications."
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "Built with rigorous testing and validation to ensure consistent, dependable performance."
    }
  ];

  return (
    <section id="ethical-ai" className="section-padding bg-gradient-to-br from-veritas-light/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 bg-veritas-primary/10 text-veritas-primary px-4 py-2 rounded-full text-sm font-medium">
            Our Foundation
          </div>
          <h2 className="font-bold text-veritas-dark mb-6">
            Committed to <span className="text-veritas-primary">Ethical AI</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Veritas Technology Solutions, we understand that AI in healthcare and public safety 
            requires the highest standards of ethics, transparency, and accountability. Our commitment 
            goes beyond compliance—it's about building technology that serves humanity responsibly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-veritas-primary/20 rounded-lg flex items-center justify-center mb-4">
                <principle.icon className="w-6 h-6 text-veritas-primary" />
              </div>
              <h3 className="text-xl font-semibold text-veritas-dark mb-3">
                {principle.title}
              </h3>
              <p className="text-gray-600">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild
            className="bg-veritas-primary hover:bg-veritas-primary/90"
          >
            <a 
              href="https://pledge.veritastech.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Shield size={16} />
              Read Our Full Ethical AI Pledge
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EthicalAI;
