
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";

interface ProjectsProps {
  onEarlyAccessClick?: () => void;
}

const Projects = ({ onEarlyAccessClick }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  // Group projects by category
  const categorizedProjects = {
    all: projects,
    healthcare: projects.filter(p => p.category === 'Healthcare'),
    'public-safety': projects.filter(p => p.category === 'Public Safety'), 
    education: projects.filter(p => p.category === 'Education'),
    tools: projects.filter(p => p.category === 'Tools')
  };

  const categoryLabels = {
    all: 'All Projects',
    healthcare: 'Healthcare',
    'public-safety': 'Public Safety',
    education: 'Education', 
    tools: 'Tools & Platforms'
  };

  // Count projects by status
  const statusCounts = {
    live: projects.filter(p => p.status === 'Live').length,
    beta: projects.filter(p => p.status === 'Beta').length,
    development: projects.filter(p => p.status === 'Development').length
  };

  const currentProjects = categorizedProjects[activeTab as keyof typeof categorizedProjects];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-veritas-primary mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
            Discover our innovative solutions across healthcare, public safety, education, and professional tools. 
            From live platforms revolutionizing industries to cutting-edge developments coming soon.
          </p>
          
          {/* Status Summary */}
          <div className="flex justify-center items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">{statusCounts.live} Live</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <span className="text-gray-600">{statusCounts.beta} Beta</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">{statusCounts.development} In Development</span>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12 bg-gray-100">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <TabsTrigger 
                key={key} 
                value={key}
                className="data-[state=active]:bg-veritas-primary data-[state=active]:text-white"
              >
                {label}
                <span className="ml-2 text-xs opacity-75">
                  ({categorizedProjects[key as keyof typeof categorizedProjects].length})
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(categoryLabels).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categorizedProjects[category as keyof typeof categorizedProjects].map((project, index) => {
                  // Find the original index in the full projects array
                  const originalIndex = projects.findIndex(p => p.title === project.title);
                  return (
                    <ProjectCard
                      key={originalIndex}
                      project={project}
                      index={originalIndex}
                      onLearnMore={setSelectedProject}
                    />
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
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
