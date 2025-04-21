
import React from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { projects } from "../projectsData";

const ProjectDialogNarcTrack = () => (
  <>
    <DialogHeader>
      <DialogTitle className="text-xl font-bold text-veritas-primary">
        {projects[2].title} - {projects[2].subtitle}
      </DialogTitle>
    </DialogHeader>
    <div className="mt-4">
      <img src={projects[2].previewImage} alt="Veritas NarcTrack Dashboard" className="w-full max-h-[400px] object-cover rounded-md shadow-md" />
      <p className="mt-4 text-gray-600">
        The Veritas NarcTrack platform provides real-time monitoring and analytics for medication 
        administration tracking. With features like inventory management, usage summaries, and 
        automated alerts for discrepancies, healthcare facilities can effectively manage controlled 
        substances and ensure compliance with regulations while identifying potential risks.
      </p>
    </div>
  </>
);

export default ProjectDialogNarcTrack;
