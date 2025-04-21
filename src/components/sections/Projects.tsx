import React, { useState } from "react";
import { BarChart3, Activity, Calendar, AlertTriangle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ProjectsProps {
  onEarlyAccessClick?: () => void;
}

const Projects = ({ onEarlyAccessClick }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const projects = [
    {
      icon: <img src="/lovable-uploads/d840fc98-f5c1-406e-8e70-1b71c06f3590.png" alt="EMS Study Buddy Logo" className="w-8 h-8 mb-4 rounded-md" />,
      title: "EMS Study Buddy",
      subtitle: "AI-Powered EMS Study Companion",
      description: "An AI-powered platform designed to help EMS students and professionals master their studies and exam prep through smart practice questions, personalized study plans, and on-demand explanations. Empowering learners and instructors across the EMS field.",
      status: "LIVE",
      previewImage: "/lovable-uploads/e1ef3005-1935-4a5b-8e0e-198a76807149.png",
      link: "https://emsstudybuddy.veritastech.io"
    },
    {
      icon: <Activity size={24} className="text-veritas-primary mb-4" />,
      title: "Veritas Value",
      subtitle: "Healthcare Value Analysis Platform",
      description: "Integrated with AI to support Value Analysis Professionals in making data-driven decisions for healthcare procurement and resource allocation.",
      status: "Beta testing - Release in late 2025",
      previewImage: "/lovable-uploads/3aa7a363-13ef-4176-8e66-3f38e0cb7a14.png"
    },
    {
      icon: <AlertTriangle size={24} className="text-veritas-primary mb-4" />,
      title: "Veritas NarcTrack",
      subtitle: "Medication Administration Analysis",
      description: "Enables healthcare agencies to evaluate trends and identify potential issues with medication administrations, providing early identification of risks.",
      status: "Beta testing - Release in late 2025",
      previewImage: "/lovable-uploads/5731fde4-2b21-42b8-b936-bd947c7015bd.png"
    },
    {
      icon: <Calendar size={24} className="text-veritas-primary mb-4" />,
      title: "Veritas EventRisk",
      subtitle: "Event Safety Management",
      description: "A centralized platform allowing event planners and public safety agencies to collaborate on ensuring the safe planning and execution of public events.",
      status: "Beta testing - Release in late 2025",
      previewImage: "/lovable-uploads/1103b072-005c-4f89-8c9d-93c9b001315b.png"
    },
    {
      icon: <Shield size={24} className="text-veritas-primary mb-4" />,
      title: "Veritas CertTrack",
      subtitle: "Blockchain Certificate Verification",
      description: "Provides verified blockchain certificates of authentication for a wide variety of providers, ensuring secure and transparent continuing education and professional certification verification.",
      status: "Beta testing - Release in late 2025",
      previewImage: "/lovable-uploads/8ac690d4-4b56-46a4-979c-4fa5839d09c7.png"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-veritas-primary mb-4">Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our innovative <span className="font-semibold">healthcare</span> and <span className="font-semibold">public safety</span> focused platforms. Some are already revolutionizing the industry, while others are in beta and coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-gray-50 rounded-xl p-6 border border-gray-100 transition-all hover:shadow-md relative overflow-hidden`}
            >
              {index === 0 && (
                <span className="absolute left-6 top-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 animate-fade-in">LIVE</span>
              )}
              <div className="flex flex-col h-full">
                <div>
                  {project.icon}
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-veritas-primary font-medium mb-3">{project.subtitle}</p>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mt-auto flex flex-col gap-3">
                  {index === 0 ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button 
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold w-full"
                        variant="default"
                      >
                        Visit Website
                      </Button>
                    </a>
                  ) : (
                    <>
                      <p className="text-sm font-medium text-amber-600 mb-1">{project.status}</p>
                      <Button 
                        variant="outline" 
                        className="border-veritas-primary/30 text-veritas-primary hover:bg-veritas-primary/5"
                        onClick={() => setSelectedProject(index)}
                      >
                        Learn more
                      </Button>
                    </>
                  )}
                  {index === 0 && (
                    <Button 
                      variant="outline"
                      className="border-green-300 text-green-600 hover:bg-green-50 w-full"
                      onClick={() => setSelectedProject(index)}
                    >
                      Learn more
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 italic mb-6">Additional innovative products are currently in development</p>
          <Button 
            className="bg-veritas-primary hover:bg-veritas-primary/90"
            onClick={onEarlyAccessClick}
          >
            Request Early Access
          </Button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 italic">
            * Disclaimer: Project interface images are conceptual representations and may differ from the final product. 
            Actual interfaces are subject to change during beta and development stages.
          </p>
        </div>
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="sm:max-w-[800px]">
          {selectedProject === 0 && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-green-700 flex items-center gap-2">
                  <img src="/lovable-uploads/d840fc98-f5c1-406e-8e70-1b71c06f3590.png" alt="EMS Study Buddy Logo" className="w-7 h-7 rounded" />
                  EMS Study Buddy &mdash; AI EMS Study Companion
                  <span className="bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded ml-2">LIVE</span>
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <img 
                  src="/lovable-uploads/e1ef3005-1935-4a5b-8e0e-198a76807149.png"
                  alt="EMS Study Buddy Screenshot"
                  className="w-full max-h-[400px] object-contain rounded-md shadow-md mb-4"
                />
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">EMS Study Buddy</span> is your always-available, AI-powered study partner designed for EMT and paramedic students as well as instructors.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-2">
                    <li>Custom practice questions and adaptive quizzes</li>
                    <li>On-demand explanations powered by advanced AI</li>
                    <li>Personalized study plans to maximize learning</li>
                    <li>Instructor tools for assigning, tracking, and reviewing progress</li>
                    <li>Mobile-friendly interface</li>
                    <li>Trusted by EMS educators and students</li>
                  </ul>
                  <p>
                    <a
                      href="https://emsstudybuddy.veritastech.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2"
                    >
                      <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold">
                        Visit emsstudybuddy.veritastech.io
                      </Button>
                    </a>
                  </p>
                </div>
              </div>
            </>
          )}

          {selectedProject === 1 && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-veritas-primary">
                  {projects[1].title} - {projects[1].subtitle}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <img 
                  src={projects[1].previewImage} 
                  alt="Veritas Value Dashboard" 
                  className="w-full rounded-md shadow-md" 
                />
                <p className="mt-4 text-gray-600">
                  The Veritas Value platform provides an intuitive dashboard for healthcare professionals, 
                  featuring AI Literature Review Tools, Value Analysis Systems, and Saved Reports & Searches. 
                  This comprehensive solution helps Value Analysis Professionals make data-driven decisions for 
                  healthcare procurement and resource allocation.
                </p>
              </div>
            </>
          )}

          {selectedProject === 2 && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-veritas-primary">
                  {projects[2].title} - {projects[2].subtitle}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <img 
                  src={projects[2].previewImage} 
                  alt="Veritas NarcTrack Dashboard" 
                  className="w-full max-h-[400px] object-cover rounded-md shadow-md" 
                />
                <p className="mt-4 text-gray-600">
                  The Veritas NarcTrack platform provides real-time monitoring and analytics for medication 
                  administration tracking. With features like inventory management, usage summaries, and 
                  automated alerts for discrepancies, healthcare facilities can effectively manage controlled 
                  substances and ensure compliance with regulations while identifying potential risks.
                </p>
              </div>
            </>
          )}

          {selectedProject === 3 && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-veritas-primary">
                  {projects[3].title} - {projects[3].subtitle}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <img 
                  src={projects[3].previewImage} 
                  alt="Veritas EventRisk Dashboard" 
                  className="w-full max-h-[500px] object-contain rounded-md shadow-md" 
                />
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">
                    Veritas EventRisk is a comprehensive event safety management platform designed to help event 
                    planners and public safety agencies collaborate effectively. Key features include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Interactive dashboard for real-time event risk monitoring</li>
                    <li>FEMA/NCS4 compliance tracking</li>
                    <li>Emergency services coordination</li>
                    <li>Detailed risk factor assessment</li>
                    <li>Proactive mitigation strategy implementation</li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {selectedProject !== null && selectedProject > 3 && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-veritas-primary">
                  {projects[selectedProject].title} - {projects[selectedProject].subtitle}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                {projects[selectedProject].previewImage && (
                  <img 
                    src={projects[selectedProject].previewImage} 
                    alt={`${projects[selectedProject].title} Dashboard`} 
                    className="w-full max-h-[500px] object-contain rounded-md shadow-md mb-4" 
                  />
                )}
                <div className="space-y-2">
                  <p className="text-gray-600">{projects[selectedProject].description}</p>
                  <p className="text-sm font-medium text-amber-600">
                    {projects[selectedProject].status}
                  </p>
                  <div className="mt-4">
                    <p className="text-gray-700 font-semibold">Key Features:</p>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Blockchain-verified certificates</li>
                      <li>Secure professional credential authentication</li>
                      <li>Transparent verification process</li>
                      <li>Support for multiple certification types</li>
                      <li>Easy-to-use verification platform</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
