
import React from "react";

const VERITAS_ELEVATE_SCREENSHOT = "/lovable-uploads/b3aaf244-4333-49d5-b54f-9a35a0e943b5.png";
const VERITAS_ELEVATE_DASHBOARD = "/lovable-uploads/69138c17-cab0-46f0-8cfe-e2170b10f21e.png";

const ProjectDialogElevate = () => (
  <div>
    <h2 className="text-2xl font-bold text-veritas-primary mb-2">Veritas Elevate</h2>
    <p className="mb-4 text-gray-700">
      <strong>Veritas Elevate</strong> is a next-generation AI-powered learning and knowledge platform, designed to elevate professional growth across industries.
      It will offer personalized learning journeys, certification tracking, and robust analytics for workforce upskilling, leadership development, and career progression.
      <br />
      <span className="inline-block mt-2 text-amber-600 font-medium">
        In development – Anticipated release in late 2025
      </span>
    </p>
    <div className="flex flex-col md:flex-row gap-5 mb-4">
      <img
        src={VERITAS_ELEVATE_DASHBOARD}
        alt="Veritas Elevate Dashboard"
        className="rounded-lg shadow w-full md:w-1/2 object-cover"
      />
      <img
        src={VERITAS_ELEVATE_SCREENSHOT}
        alt="Veritas Elevate Course Screenshot"
        className="rounded-lg shadow w-full md:w-1/2 object-cover"
      />
    </div>
    <ul className="list-disc pl-5 text-gray-600">
      <li>Smart course recommendations powered by AI.</li>
      <li>Real-time progress, certificate, and skill tracking.</li>
      <li>Leadership and competence development for modern teams.</li>
      <li>Modern, intuitive interface for learners and admins.</li>
    </ul>
  </div>
);

export default ProjectDialogElevate;
