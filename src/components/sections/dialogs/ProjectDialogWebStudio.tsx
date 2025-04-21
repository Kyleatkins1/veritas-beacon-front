
import React from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { projects } from "../projectsData";

const ProjectDialogWebStudio = () => (
  <>
    <DialogHeader>
      <DialogTitle className="text-xl font-bold text-veritas-primary">
        {projects[7].title} – {projects[7].subtitle}
      </DialogTitle>
    </DialogHeader>
    <div className="mt-4">
      <img
        src="/lovable-uploads/efeb3832-edc8-4e9a-b921-0d1c2d73a481.png"
        alt="Veritas Web Studio mockup"
        className="w-full max-h-[400px] object-cover rounded-md shadow-md mb-4"
      />
      <div className="space-y-3 text-gray-600">
        <p>
          <b>Veritas Web Studio</b> is the easiest way for organizations to launch beautiful and powerful websites, fully powered by the latest in AI technology.
        </p>
        <ul className="list-disc list-inside">
          <li>Modern, responsive turnkey web design—no coding required</li>
          <li>Advanced analytics & integrations out of the box</li>
          <li>Custom templates for nonprofits, small businesses, and enterprises</li>
          <li>Instant publishing, built-in SEO, AI chatbot, and more</li>
        </ul>
        <span className="inline-block mt-2 text-amber-600 font-medium">
          Releasing May/June 2025
        </span>
      </div>
    </div>
  </>
);

export default ProjectDialogWebStudio;

