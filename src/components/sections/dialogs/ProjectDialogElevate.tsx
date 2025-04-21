
import React from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { projects } from "../projectsData";

const ProjectDialogElevate = () => (
  <>
    <DialogHeader>
      <DialogTitle className="text-xl font-bold text-veritas-primary">
        {projects[5].title} - {projects[5].subtitle}
      </DialogTitle>
    </DialogHeader>
    <div className="mt-4 space-y-4">
      <img
        src="/lovable-uploads/6c6d4791-5dcb-4686-b5ee-10c7fc4e4597.png"
        alt="Veritas Elevate Overview"
        className="w-full rounded-md shadow-md"
      />
      <img
        src="/lovable-uploads/69138c17-cab0-46f0-8cfe-e2170b10f21e.png"
        alt="Veritas Elevate Platform"
        className="w-full rounded-md shadow-md"
      />
      <p className="mt-4 text-gray-600">
        A next-generation AI-powered platform for professional learning, growth, and upskilling — with advanced course recommendations, progress tracking, and certification management.
      </p>
    </div>
  </>
);

export default ProjectDialogElevate;
