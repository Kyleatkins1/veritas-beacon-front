
import React from "react";
import { BarChart3, Activity, Calendar, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      icon: <Activity size={24} className="text-veritas-primary mb-4" />,
      title: "Veritas Value",
      subtitle: "Healthcare Value Analysis Platform",
      description: "Integrated with AI to support Value Analysis Professionals in making data-driven decisions for healthcare procurement and resource allocation.",
      status: "Beta testing - Release in late 2025"
    },
    {
      icon: <AlertTriangle size={24} className="text-veritas-primary mb-4" />,
      title: "Veritas NarcTrack",
      subtitle: "Medication Administration Analysis",
      description: "Enables healthcare agencies to evaluate trends and identify potential issues with medication administrations, providing early identification of risks.",
      status: "Beta testing - Release in late 2025"
    },
    {
      icon: <Calendar size={24} className="text-veritas-primary mb-4" />,
      title: "Veritas EventRisk",
      subtitle: "Event Safety Management",
      description: "A centralized platform allowing event planners and public safety agencies to collaborate on ensuring the safe planning and execution of public events.",
      status: "Beta testing - Release in late 2025"
    },
    {
      icon: <BarChart3 size={24} className="text-veritas-primary mb-4" />,
      title: "Veritas System",
      subtitle: "Core System",
      description: "Our foundational platform that powers all Veritas solutions with integrated analytics, security, and healthcare-specific functionality.",
      status: "Beta testing - Release in late 2025"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-veritas-primary mb-4">Projects in Beta</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our innovative healthcare and safety-focused platforms currently in beta development, 
            designed to revolutionize how organizations manage data, risk, and safety. Scheduled for release in late 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 transition-all hover:shadow-md"
            >
              <div className="flex flex-col h-full">
                <div>
                  {project.icon}
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-veritas-primary font-medium mb-3">{project.subtitle}</p>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mt-auto">
                  <p className="text-sm font-medium text-amber-600 mb-4">{project.status}</p>
                  <Button 
                    variant="outline" 
                    className="border-veritas-primary/30 text-veritas-primary hover:bg-veritas-primary/5"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 italic mb-6">Additional innovative products are currently in development</p>
          <Button className="bg-veritas-primary hover:bg-veritas-primary/90">
            Request Early Access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
