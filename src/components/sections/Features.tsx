
import React from "react";
import { ShieldCheck, Clock, Lightbulb, Users, Lock, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck />,
      title: "HIPAA Compliant",
      description: "Our solutions are fully HIPAA compliant, ensuring the security and privacy of sensitive healthcare data.",
    },
    {
      icon: <Clock />,
      title: "Future-Ready",
      description: "We design with the future in mind, creating versatile systems that adapt to evolving healthcare and safety needs.",
    },
    {
      icon: <Lightbulb />,
      title: "AI-Powered Insights",
      description: "Advanced AI algorithms analyze data to provide actionable insights for healthcare and safety decisions.",
    },
    {
      icon: <Users />,
      title: "Industry Expertise",
      description: "Our team brings deep healthcare and public safety experience to every solution we develop.",
    },
    {
      icon: <Lock />,
      title: "Enterprise Security",
      description: "Advanced security protocols to protect sensitive healthcare and safety data from threats.",
    },
    {
      icon: <BarChart3 />,
      title: "Data-Driven Decisions",
      description: "Transform raw data into meaningful insights that drive better clinical and safety outcomes.",
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-veritas-primary mb-4">Why Choose Veritas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our healthcare and safety-focused technology solutions are designed to deliver measurable 
            improvements in outcomes, efficiency, and risk reduction when they launch in 2025.
          </p>
        </div>

        <div className="relative z-10">
          {/* Background gradient elements */}
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-veritas-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-veritas-secondary/5 rounded-full blur-3xl -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={cn(
                  "bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300",
                  "transform hover:-translate-y-1",
                  index % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right"
                )}
              >
                <div className="w-12 h-12 bg-veritas-primary/10 rounded-lg flex items-center justify-center text-veritas-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section instead of Stats */}
        <div className="mt-24 bg-veritas-primary text-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-4">Our Vision for 2025</h3>
            <p className="max-w-2xl mx-auto">
              As we prepare for our 2025 launch, we're building solutions that will revolutionize healthcare 
              and safety technology, creating measurable improvements in outcomes and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-8">
            <div className="flex flex-col">
              <span className="text-4xl font-bold mb-2">Innovation</span>
              <span className="text-sm text-white/80">AI-Driven Solutions</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold mb-2">Security</span>
              <span className="text-sm text-white/80">HIPAA Compliance</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold mb-2">Efficiency</span>
              <span className="text-sm text-white/80">Streamlined Workflows</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold mb-2">Safety</span>
              <span className="text-sm text-white/80">Risk Reduction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
