
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import EthicalAI from "@/components/sections/EthicalAI";
import Projects from "@/components/sections/Projects";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import InvestorRequestForm from "@/components/forms/InvestorRequestForm";

const Index = () => {
  const [investorDialogOpen, setInvestorDialogOpen] = useState(false);

  const handleInvestorInfoClick = () => {
    setInvestorDialogOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onEarlyAccessClick={handleInvestorInfoClick} />
      <main>
        <Hero />
        <Services />
        <EthicalAI />
        <Projects onEarlyAccessClick={handleInvestorInfoClick} />
        <Features />
        <Testimonials onEarlyAccessClick={handleInvestorInfoClick} />
        <Contact />
      </main>
      <Footer />

      {/* Investor Information Dialog */}
      <Dialog open={investorDialogOpen} onOpenChange={setInvestorDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-veritas-primary">
              Request Investor Information
            </DialogTitle>
          </DialogHeader>
          <InvestorRequestForm onClose={() => setInvestorDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
