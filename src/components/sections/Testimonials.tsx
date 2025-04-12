
import React, { useState } from "react";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      content:
        "Veritas Technology transformed our business operations with their custom software solution. The team's expertise and commitment to quality exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO, Global Innovations",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      content:
        "Our migration to cloud infrastructure with Veritas was seamless. They provided expert guidance throughout the process and delivered exceptional results within our timeline.",
      author: "Michael Chen",
      position: "IT Director, NextGen Retail",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      content:
        "The cybersecurity assessment conducted by Veritas identified critical vulnerabilities in our systems. Their remediation plan was comprehensive and implemented efficiently.",
      author: "Emily Rodriguez",
      position: "Security Manager, FinTech Solutions",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=23",
    },
    {
      content: 
        "Veritas' data analytics solution has given us valuable insights that have directly contributed to a 30% increase in our revenue. Highly recommended!",
      author: "David Thompson",
      position: "CEO, Analytics Pro",
      rating: 5,
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
          <h2 className="text-veritas-primary mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Hear from our satisfied clients about 
            their experience working with Veritas Technology Solutions.
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
                <div className="flex items-center mb-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
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

        {/* Logos section */}
        <div className="mt-20">
          <p className="text-center text-gray-500 mb-8">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-12 w-24 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
