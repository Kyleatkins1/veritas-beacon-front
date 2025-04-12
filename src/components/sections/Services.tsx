
import React from "react";
import { Stethoscope, ShieldCheck, Activity, Database, Laptop, Users, Lightbulb, Search, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "Healthcare SaaS Solutions",
      description:
        "Specialized software applications designed specifically for healthcare providers to streamline workflows and improve patient outcomes.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "Safety & Risk Management",
      description:
        "Integrated platforms for safety-focused agencies to identify, assess, and mitigate risks through data-driven insights.",
    },
    {
      icon: <Activity className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "Analytics & Reporting",
      description:
        "Advanced data analytics solutions to transform healthcare and safety data into actionable insights for better decision-making.",
    },
    {
      icon: <Database className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "Custom SaaS Development",
      description:
        "Tailored software solutions designed to address specific challenges in healthcare and public safety sectors.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "AI Implementation",
      description:
        "Guidance on ethically implementing AI in healthcare and safety environments, from framework development to practical integration.",
    },
    {
      icon: <Search className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "SEO Support",
      description:
        "Specialized SEO services for healthcare organizations to improve their digital presence and reach their target audience effectively.",
    },
    {
      icon: <Users className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "AI Education & Training",
      description:
        "Comprehensive training programs to help your team understand and leverage artificial intelligence in healthcare and safety contexts.",
    },
    {
      icon: <Gauge className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "Organizational AI Transition",
      description:
        "End-to-end support for organizations adopting AI technologies, covering ethics, governance, implementation, and operational integration.",
    },
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
                <Button variant="ghost" className="text-veritas-primary p-0 hover:bg-transparent hover:text-veritas-primary/80">
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
          <Button className="bg-veritas-primary hover:bg-veritas-primary/90">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
