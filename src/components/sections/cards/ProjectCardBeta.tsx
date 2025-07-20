
import React from "react";
import { Button } from "@/components/ui/button";
import type { Project } from "../projectsData";

interface ProjectCardBetaProps {
  project: Project;
  index: number;
  onLearnMore: (index: number) => void;
}

const ProjectCardBeta = ({ project, index, onLearnMore }: ProjectCardBetaProps) => (
  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 transition-all hover:shadow-md relative overflow-hidden">
    <div className="flex flex-col h-full">
      <div>
        {project.icon}
        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
        <p className="text-sm text-veritas-primary font-medium mb-3">
          {project.subtitle}
        </p>
      </div>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="mt-auto flex flex-col gap-3">
        <p className="text-sm font-medium text-amber-600 mb-1">
          {project.status}
        </p>
        <Button
          variant="outline"
          className="border-veritas-primary/30 text-veritas-primary hover:bg-veritas-primary/5"
          onClick={() => onLearnMore(index)}
        >
          Learn more
        </Button>
      </div>
    </div>
  </div>
);

export default ProjectCardBeta;
