
import React from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { projects } from "../projectsData";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// List of the new EventRisk preview images for the carousel
const eventRiskImages = [
  "/lovable-uploads/6a5d6fdf-979d-4d4e-9274-58bb3d41e958.png",
  "/lovable-uploads/204f8959-2e75-4646-a8f7-41531c72dd59.png",
  "/lovable-uploads/b08ee937-6d98-4ff4-bb22-84365df831e2.png"
];

const ProjectDialogEventRisk = () => (
  <>
    <DialogHeader>
      <DialogTitle className="text-xl font-bold text-veritas-primary">
        {projects[3].title} - {projects[3].subtitle}
      </DialogTitle>
    </DialogHeader>
    <div className="mt-4">
      <Carousel className="w-full relative max-w-3xl mx-auto mb-4">
        <CarouselContent>
          {eventRiskImages.map((img, idx) => (
            <CarouselItem key={idx}>
              <img
                src={img}
                alt={`Veritas EventRisk Dashboard view ${idx + 1}`}
                className="w-full max-h-[500px] object-contain rounded-md shadow-md"
                draggable={false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="mt-4 text-gray-600">
        The Veritas EventRisk platform is a centralized solution for public event planning, risk management, and safety operations. 
        It brings together event organizers, safety officials, and agencies in a single workspace to ensure incident prevention, 
        documentation, and real-time response collaboration.
      </p>
    </div>
  </>
);

export default ProjectDialogEventRisk;
