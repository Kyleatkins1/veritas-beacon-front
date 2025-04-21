
import React from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { projects } from "../projectsData";

const ProjectDialogVeritasValue = () => (
  <>
    <DialogHeader>
      <DialogTitle className="text-xl font-bold text-veritas-primary">
        {projects[1].title} - {projects[1].subtitle}
      </DialogTitle>
    </DialogHeader>
    <div className="mt-4">
      <img src={projects[1].previewImage} alt="Veritas Value Dashboard" className="w-full rounded-md shadow-md" />
      <p className="mt-4 text-gray-600">
        The Veritas Value platform provides an intuitive dashboard for healthcare professionals, 
        featuring AI Literature Review Tools, Value Analysis Systems, and Saved Reports & Searches. 
        This comprehensive solution helps Value Analysis Professionals make data-driven decisions for 
        healthcare procurement and resource allocation.
      </p>
    </div>
  </>
);

export default ProjectDialogVeritasValue;
