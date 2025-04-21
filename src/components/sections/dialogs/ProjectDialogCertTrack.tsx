
import React from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { projects } from "../projectsData";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CertTrackProps {
  selectedProject: number;
}

// List of the new CertTrack preview images for the carousel
const certTrackImages = [
  "/lovable-uploads/3e365f37-c8d1-49bc-ad7b-3d0b2b0526cd.png",
  "/lovable-uploads/bb85efb2-27a3-4247-8bd5-fb52377dcf0b.png",
  "/lovable-uploads/13f9ab35-00b2-40d1-b3f5-a59fdacaa09f.png"
];

const ProjectDialogCertTrack = ({ selectedProject }: CertTrackProps) => (
  <>
    <DialogHeader>
      <DialogTitle className="text-xl font-bold text-veritas-primary">
        {projects[selectedProject].title} - {projects[selectedProject].subtitle}
      </DialogTitle>
    </DialogHeader>
    <div className="mt-4">
      <Carousel className="w-full relative max-w-3xl mx-auto mb-4">
        <CarouselContent>
          {certTrackImages.map((img, idx) => (
            <CarouselItem key={idx}>
              <img
                src={img}
                alt={`Veritas CertTrack Dashboard view ${idx + 1}`}
                className="w-full max-h-[500px] object-contain rounded-md shadow-md"
                draggable={false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
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
