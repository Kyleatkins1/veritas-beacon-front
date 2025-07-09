import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Shield, Puzzle, Beaker, Zap, ArrowRight } from "lucide-react";

const HowWeBuild = () => {
  const methodSteps = [
    {
      number: "01",
      title: "Problem First, Tech Second",
      description: "We start by understanding real-world challenges, then select the right technology to solve them.",
      icon: <Target className="h-8 w-8" />,
      color: "text-blue-600"
    },
    {
      number: "02", 
      title: "User-Informed Design",
      description: "Every feature is designed with direct input from professionals who use these tools daily.",
      icon: <Users className="h-8 w-8" />,
      color: "text-green-600"
    },
    {
      number: "03",
      title: "Ethical AI Core",
      description: "All AI implementations follow our ethical AI pledge, ensuring transparency and accountability.",
      icon: <Shield className="h-8 w-8" />,
      color: "text-purple-600"
    },
    {
      number: "04",
      title: "Modular Architecture", 
      description: "We build flexible systems that can adapt and scale with your organization's needs.",
      icon: <Puzzle className="h-8 w-8" />,
      color: "text-orange-600"
    },
    {
      number: "05",
      title: "Iterative Testing in Labs",
      description: "New features are rigorously tested in our Veritas Labs environment first.",
      icon: <Beaker className="h-8 w-8" />,
      color: "text-teal-600"
    },
    {
      number: "06",
      title: "Built for Reality",
      description: "Our solutions work in real-world conditions with actual operational constraints.",
      icon: <Zap className="h-8 w-8" />,
      color: "text-red-600"
    }
  ];

  return (
    <section id="how-we-build" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-veritas-primary mb-4">How We Build: The Veritas Method</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Every Veritas product follows a purposeful development process grounded in solving real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {methodSteps.map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold bg-gray-100 ${step.color}`}>
                    {step.number}
                  </div>
                  <div className={step.color}>
                    {step.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-veritas-primary to-veritas-secondary text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Our Commitment to Ethical AI</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Transparency, accountability, and human-centered design are at the core of everything we build.
          </p>
          <Button className="bg-white text-veritas-primary hover:bg-gray-100" asChild>
            <a href="https://pledge.veritastech.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Read the Ethical AI Pledge <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowWeBuild;