
import React from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ProjectDialogEMS = () => (
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

export default ProjectDialogEMS;
