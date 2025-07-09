
import React from "react";
import type { Project } from "./projectsData";
import ProjectCardLive from "./cards/ProjectCardLive";
import ProjectCardBeta from "./cards/ProjectCardBeta";

interface ProjectCardProps {
  project: Project;
  index: number;
  onLearnMore: (index: number) => void;
}

const ProjectCard = ({ project, index, onLearnMore }: ProjectCardProps) => {
  // Use LIVE card for Live status, Beta card for others
  if (project.status === "Live") {
    return <ProjectCardLive project={project} index={index} onLearnMore={onLearnMore} />;
  }
  return <ProjectCardBeta project={project} index={index} onLearnMore={onLearnMore} />;
};

export default ProjectCard;
