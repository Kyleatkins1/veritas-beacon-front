
import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TestimonialsProps {
  onEarlyAccessClick?: () => void;
}

const Testimonials = ({ onEarlyAccessClick }: TestimonialsProps) => {
  const testimonials = [
    {
      content:
        "As we prepare for our 2025 launch, we're partnering with leading healthcare organizations to refine our solutions through beta testing and collaborative development.",
      author: "Veritas Leadership Team",
      position: "Beta Program Announcement",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      content:
        "Our AI implementation framework is designed specifically for healthcare environments, addressing the unique ethical and operational challenges of this sensitive sector.",
      author: "Veritas AI Team",
      position: "AI Implementation Overview",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      content:
        "Safety and security are foundational elements of our development process. Every solution we create undergoes rigorous security testing to protect sensitive healthcare data.",
      author: "Veritas Security Team",
      position: "Security Framework",
      image: "https://i.pravatar.cc/150?img=23",
    },
    {
      content: 
        "We're currently accepting applications for our Early Adopter Program, allowing select organizations to gain early access to our solutions before the official 2025 launch.",
      author: "Veritas Product Team",
      position: "Early Adopter Program",
      image: "https://i.pravatar.cc/150?img=5",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-veritas-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-veritas-primary mb-4">From Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Learn more about our vision, approach, and upcoming product launches as we prepare for our 2025 debut.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote decoration */}
          <div className="absolute -top-6 -left-6 text-veritas-primary/10">
            <Quote size={80} />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative z-10">
            {/* Current testimonial */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-center">{testimonials[currentIndex].author}</h4>
                <p className="text-sm text-gray-500 text-center">{testimonials[currentIndex].position}</p>
              </div>

              <div className="md:w-2/3">
                <p className="text-gray-700 text-lg italic mb-6">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    {currentIndex + 1} of {testimonials.length}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="rounded-full h-10 w-10"
                    >
                      <ArrowLeft size={18} />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="rounded-full h-10 w-10"
                    >
                      <ArrowRight size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial indicator dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? "bg-veritas-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Vision section instead of logos */}
        <div className="mt-20">
          <p className="text-center text-gray-700 font-semibold mb-8">Preparing for launch in 2025</p>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Join Our Early Access Program</h3>
              <p className="text-gray-600 mb-6">
                Be among the first to experience our innovative healthcare and safety solutions as we prepare for our official launch. 
                We're looking for organizations interested in partnering with us during our beta testing phase.
              </p>
              <Button 
                className="bg-veritas-primary hover:bg-veritas-primary/90"
                onClick={onEarlyAccessClick}
              >
                Apply for Beta Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
