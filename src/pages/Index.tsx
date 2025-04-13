
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import EarlyAccessForm from "@/components/forms/EarlyAccessForm";

const Index = () => {
  const [earlyAccessDialogOpen, setEarlyAccessDialogOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onEarlyAccessClick={() => setEarlyAccessDialogOpen(true)} />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Early Access Dialog */}
      <Dialog open={earlyAccessDialogOpen} onOpenChange={setEarlyAccessDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-veritas-primary">
              Request Early Access
            </DialogTitle>
          </DialogHeader>
          <EarlyAccessForm onClose={() => setEarlyAccessDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
