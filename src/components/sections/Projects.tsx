
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";

interface ProjectsProps {
  onEarlyAccessClick?: () => void;
}

const Projects = ({ onEarlyAccessClick }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onLearnMore={setSelectedProject}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 italic mb-6">Additional innovative products are currently in development</p>
          <Button className="bg-veritas-primary hover:bg-veritas-primary/90" onClick={onEarlyAccessClick}>
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
          <ProjectDialog selectedProject={selectedProject} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
