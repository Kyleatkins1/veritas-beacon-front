
import React, { useState } from "react";
import { Stethoscope, ShieldCheck, Activity, Database, Laptop, Users, Lightbulb, Search, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ConsultationForm from "@/components/forms/ConsultationForm";

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [consultationDialogOpen, setConsultationDialogOpen] = useState(false);

  const services = [
    {
      icon: <Stethoscope className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "Healthcare SaaS Solutions",
      description: "Specialized software applications designed specifically for healthcare providers to streamline workflows and improve patient outcomes.",
      detailedDescription: "Our Healthcare SaaS Solutions offer comprehensive software tools tailored to the unique challenges of healthcare providers. We leverage cutting-edge technology to enhance operational efficiency, improve patient care coordination, and provide actionable insights through advanced analytics."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "Safety & Risk Management",
      description: "Integrated platforms for safety-focused agencies to identify, assess, and mitigate risks through data-driven insights.",
      detailedDescription: "Our Safety & Risk Management solutions provide robust tools for identifying potential risks, performing comprehensive assessments, and developing strategic mitigation strategies. We help organizations proactively manage and minimize potential safety challenges."
    },
    {
      icon: <Activity className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "Analytics & Reporting",
      description: "Advanced data analytics solutions to transform healthcare and safety data into actionable insights for better decision-making.",
      detailedDescription: "Transform raw data into strategic insights with our advanced Analytics & Reporting tools. We help organizations decode complex data sets, providing clear, actionable intelligence that drives informed decision-making and operational excellence."
    },
    {
      icon: <Database className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "Custom SaaS Development",
      description: "Tailored software solutions designed to address specific challenges in healthcare and public safety sectors.",
      detailedDescription: "We specialize in creating bespoke SaaS solutions that precisely address your organization's unique challenges. Our custom development approach ensures that your software not only meets but exceeds your specific operational requirements."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "AI Implementation",
      description: "Guidance on ethically implementing AI in healthcare and safety environments, from framework development to practical integration.",
      detailedDescription: "Navigate the complex landscape of AI implementation with our expert guidance. We provide comprehensive support from ethical framework development to practical, responsible AI integration that enhances organizational capabilities."
    },
    {
      icon: <Search className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "SEO Support",
      description: "Specialized SEO services for healthcare organizations to improve their digital presence and reach their target audience effectively.",
      detailedDescription: "Boost your digital visibility with our specialized SEO services. We help healthcare organizations optimize their online presence, improve search rankings, and effectively connect with their target audience through strategic digital marketing techniques."
    },
    {
      icon: <Users className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "AI Education & Training",
      description: "Comprehensive training programs to help your team understand and leverage artificial intelligence in healthcare and safety contexts.",
      detailedDescription: "Empower your team with our comprehensive AI Education & Training programs. We provide in-depth learning experiences that demystify AI technologies and provide practical skills for implementation in healthcare and safety environments."
    },
    {
      icon: <Gauge className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "Organizational AI Transition",
      description: "End-to-end support for organizations adopting AI technologies, covering ethics, governance, implementation, and operational integration.",
      detailedDescription: "Facilitate a smooth, responsible AI transition with our end-to-end support. We guide organizations through ethical considerations, governance frameworks, seamless implementation, and strategic operational integration of AI technologies."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-veritas-primary mb-4">Our Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We deliver specialized technology solutions designed specifically for healthcare 
            and safety-focused agencies, driving efficiency and improving outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardHeader className="pb-2">
                <div>{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="text-veritas-primary p-0 hover:bg-transparent hover:text-veritas-primary/80"
                  onClick={() => setSelectedService(index)}
                >
                  Learn more &rarr;
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Discover how our healthcare and safety solutions can transform your agency.
          </p>
          <Button 
            className="bg-veritas-primary hover:bg-veritas-primary/90"
            onClick={() => setConsultationDialogOpen(true)}
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>

      {selectedService !== null && (
        <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{services[selectedService].title}</DialogTitle>
              <DialogDescription>
                {services[selectedService].detailedDescription}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}

      {/* Consultation Request Dialog */}
      <Dialog open={consultationDialogOpen} onOpenChange={setConsultationDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-veritas-primary">
              Schedule a Consultation
            </DialogTitle>
          </DialogHeader>
          <ConsultationForm onClose={() => setConsultationDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
