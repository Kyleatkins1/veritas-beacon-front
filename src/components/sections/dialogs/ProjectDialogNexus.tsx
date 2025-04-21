
import React from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projects } from "../projectsData";

const nexusImages = [
  "/lovable-uploads/dce229ee-0694-42e1-8056-37c94bdda106.png",
  "/lovable-uploads/4f8403aa-58a6-46c8-8f81-2128e021eb8f.png"
];

const ProjectDialogNexus = () => (
  <>
    <DialogHeader>
      <DialogTitle className="text-xl font-bold text-veritas-primary">
        {projects[6].title} – {projects[6].subtitle}
      </DialogTitle>
    </DialogHeader>
    <div className="mt-4">
      <Carousel className="w-full relative max-w-3xl mx-auto mb-4">
        <CarouselContent>
          {nexusImages.map((img, idx) => (
            <CarouselItem key={idx}>
              <img
                src={img}
                alt={`Veritas Nexus dashboard preview ${idx + 1}`}
                className="w-full max-h-[500px] object-contain rounded-md shadow-md"
                draggable={false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="space-y-3 mt-4 text-gray-600">
        <p>
          <b>Veritas Nexus</b> is an integrated command center, CRM, and helpdesk system for professionals and organizations needing centralized control and top-tier support tools.
        </p>
        <ul className="list-disc list-inside">
          <li>Unified client and ticket management across teams</li>
          <li>Rich knowledge base and analytics modules</li>
          <li>Seamless communication and support ticketing</li>
          <li>Instant insights through customizable dashboards</li>
          <li>Designed for public safety, healthcare, and enterprise workflows</li>
        </ul>
        <span className="inline-block mt-2 text-amber-600 font-medium">
          Release planned for late 2025
        </span>
      </div>
    </div>
  </>
);

export default ProjectDialogNexus;
