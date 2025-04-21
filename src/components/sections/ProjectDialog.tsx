
import React from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { projects } from "./projectsData";

interface ProjectDialogProps {
  selectedProject: number | null;
}

const ProjectDialog = ({ selectedProject }: ProjectDialogProps) => {
  if (selectedProject === null) return null;

  if (selectedProject === 0) {
    // EMS Study Buddy
    return (
      <>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-green-700 flex items-center gap-2">
            <img src="/lovable-uploads/d840fc98-f5c1-406e-8e70-1b71c06f3590.png" alt="EMS Study Buddy Logo" className="w-7 h-7 rounded" />
            EMS Study Buddy &mdash; AI EMS Study Companion
            <span className="bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded ml-2">LIVE</span>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <img alt="EMS Study Buddy Screenshot" className="w-full max-h-[400px] object-contain rounded-md shadow-md mb-4" src="/lovable-uploads/e2df78e3-e8f8-4945-9401-3cf816cb7706.png" />
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold">EMS Study Buddy</span> is your always-available, AI-powered study partner designed for EMT and paramedic students as well as instructors.
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-2">
              <li>Custom practice questions and adaptive quizzes</li>
              <li>On-demand explanations powered by advanced AI</li>
              <li>Personalized study plans to maximize learning</li>
              <li>Instructor tools for assigning, tracking, and reviewing progress</li>
              <li>Mobile-friendly interface</li>
              <li>Trusted by EMS educators and students</li>
            </ul>
            <p>
              <a href="https://emsstudybuddy.veritastech.io" target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold">
                  Visit emsstudybuddy.veritastech.io
                </Button>
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }

  if (selectedProject === 1) {
    return (
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
  }

  if (selectedProject === 2) {
    return (
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
  }

  if (selectedProject === 3) {
    return (
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
  }

  // For index 4+ (Veritas CertTrack etc)
  return (
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
};

export default ProjectDialog;
