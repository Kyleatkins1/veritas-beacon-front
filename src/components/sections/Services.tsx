
import React from "react";
import { Code, Cloud, Database, Shield, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to address your specific business needs and challenges.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.",
    },
    {
      icon: <Database className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "Data Analytics",
      description:
        "Turn your data into actionable insights with our advanced analytics and BI solutions.",
    },
    {
      icon: <Shield className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "Cybersecurity Services",
      description:
        "Protect your business from threats with our comprehensive security assessments and solutions.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "IT Consulting",
      description:
        "Strategic guidance to help you leverage technology for sustainable business growth.",
    },
    {
      icon: <Users className="h-10 w-10 text-veritas-primary mb-6" />,
      title: "Managed IT Services",
      description:
        "Proactive monitoring and maintenance to ensure your systems run smoothly and efficiently.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-veritas-primary mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer a comprehensive range of technology services to help your business 
            navigate the digital landscape and achieve sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            Not sure which service best fits your needs?
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
