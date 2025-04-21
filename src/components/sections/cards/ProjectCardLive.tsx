
import React from "react";
import { Button } from "@/components/ui/button";
import type { Project } from "../projectsData";

interface ProjectCardLiveProps {
  project: Project;
  index: number;
  onLearnMore: (index: number) => void;
}

const ProjectCardLive = ({ project, index, onLearnMore }: ProjectCardLiveProps) => (
  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 transition-all hover:shadow-md relative overflow-hidden">
    <span className="absolute left-6 top-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 animate-fade-in">LIVE</span>
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
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold w-full" variant="default">
            Visit Website
          </Button>
        </a>
        <Button
          variant="outline"
          className="border-green-300 text-green-600 hover:bg-green-50 w-full"
          onClick={() => onLearnMore(index)}
        >
          Learn more
        </Button>
      </div>
    </div>
  </div>
);

export default ProjectCardLive;
