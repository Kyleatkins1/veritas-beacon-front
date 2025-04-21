
import React from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { projects } from "../projectsData";

const ProjectDialogEventRisk = () => (
  <>
    <DialogHeader>
      <DialogTitle className="text-xl font-bold text-veritas-primary">
        {projects[3].title} - {projects[3].subtitle}
      </DialogTitle>
    </DialogHeader>
    <div className="mt-4">
      <img src={projects[3].previewImage} alt="Veritas EventRisk Dashboard" className="w-full max-h-[500px] object-contain rounded-md shadow-md" />
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
);

export default ProjectDialogEventRisk;
