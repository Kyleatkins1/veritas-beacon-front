
import React from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { projects } from "../projectsData";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const eventRiskImages = [
  "/lovable-uploads/5f00421a-42f9-4447-a174-5f0cc1163f65.png",
  "/lovable-uploads/c1d45e37-366f-4717-b1f5-e2c2b68bcb0f.png",
  "/lovable-uploads/0d5b5c1e-6cf6-41bc-b83a-de90f9c8f26b.png",
  "/lovable-uploads/fa9aa82b-2b08-4772-a2aa-022544c573e0.png",
  "/lovable-uploads/ce3c141a-24f9-44fa-9ca2-40450b0ac7d8.png"
];

const ProjectDialogEventRisk = () => (
  <>
    <DialogHeader>
      <DialogTitle className="text-xl font-bold text-veritas-primary">
        {projects[3].title} - {projects[3].subtitle}
      </DialogTitle>
    </DialogHeader>
    <div className="mt-4">
      <Carousel className="w-full relative max-w-3xl mx-auto">
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

