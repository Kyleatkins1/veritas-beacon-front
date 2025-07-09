
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProductLanes from "@/components/sections/ProductLanes";
import EthicalAI from "@/components/sections/EthicalAI";
import VeritasLabs from "@/components/sections/VeritasLabs";
import HowWeBuild from "@/components/sections/HowWeBuild";
import Projects from "@/components/sections/Projects";
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
        <ProductLanes />
        <EthicalAI />
        <VeritasLabs />
        <HowWeBuild />
        <Projects onEarlyAccessClick={handleInvestorInfoClick} />
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
