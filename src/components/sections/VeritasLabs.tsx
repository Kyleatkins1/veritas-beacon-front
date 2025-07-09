import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Target, Cpu, Lightbulb, Zap, ArrowRight } from "lucide-react";

const VeritasLabs = () => {
  const labsProjects = [
    {
      title: "BLACKBOX://",
      subtitle: "ARG Game Platform",
      description: "Interactive alternate reality game platform with immersive storytelling",
      status: "Beta",
      icon: <Gamepad2 className="h-6 w-6" />
    },
    {
      title: "WARGAMES",
      subtitle: "Simulation Platform", 
      description: "Advanced scenario simulation and strategic planning tools",
      status: "In Development",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Scenario Creator Toolkit",
      subtitle: "Training Scenarios",
      description: "Comprehensive toolkit for creating realistic training scenarios",
      status: "Now Testing",
      icon: <Cpu className="h-6 w-6" />
    }
  ];

  return (
    <section id="veritas-labs" className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Lightbulb className="h-4 w-4" />
            Veritas Labs
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Where bold ideas become real tools
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Veritas Labs is our sandbox for experimental projects, early-stage innovation, and community-driven development. 
            This is where next-gen tools are born.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {labsProjects.map((project, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white">{project.icon}</div>
                  <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full border border-white/30">{project.status}</span>
                </div>
                <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                <p className="text-gray-300 text-sm font-medium">{project.subtitle}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Join the Innovation</h3>
            <p className="text-gray-300 mb-6">
              Be part of our experimental ecosystem. Test new tools and help shape the future.
            </p>
            <Button className="bg-veritas-primary hover:bg-veritas-primary/90">
              Join Beta Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeritasLabs;