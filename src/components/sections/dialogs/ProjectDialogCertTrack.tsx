
import React from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { projects } from "../projectsData";

interface CertTrackProps {
  selectedProject: number;
}

const ProjectDialogCertTrack = ({ selectedProject }: CertTrackProps) => (
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
);

export default ProjectDialogCertTrack;
