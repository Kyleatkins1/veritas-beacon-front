import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface Testimonial {
  id: string;
  name: string;
  title: string | null;
  company: string | null;
  content: string;
  avatar_url: string | null;
  sort_order: number | null;
}

interface TestimonialsProps {
  onEarlyAccessClick?: () => void;
}

const Testimonials = ({ onEarlyAccessClick }: TestimonialsProps) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchTestimonials();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'testimonials'
        },
        () => fetchTestimonials()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="testimonials" className="section-padding bg-veritas-light">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading testimonials...</div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

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
          <h2 className="text-veritas-primary mb-4">A Word From Our Founder</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Insights from Kyle P. Atkins, Founder and Systems Architect of Veritas Technology Solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-6 -left-6 text-veritas-primary/10">
            <Quote size={80} />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={testimonials[currentIndex].avatar_url || '/placeholder.svg'}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-center">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-500 text-center">
                  {testimonials[currentIndex].title}
                  {testimonials[currentIndex].company && `, ${testimonials[currentIndex].company}`}
                </p>
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

        <div className="mt-20">
          <p className="text-center text-gray-700 font-semibold mb-8">Launching in 2025 with your support</p>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex justify-center mb-4 text-veritas-secondary">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Investment Opportunity</h3>
              <p className="text-gray-600 mb-6">
                Be part of the future of healthcare safety. We're currently seeking strategic investors who share our vision 
                for revolutionizing patient safety through innovative technology solutions. 
                Join us in making healthcare safer for everyone.
              </p>
              <Button 
                className="bg-veritas-secondary hover:bg-veritas-secondary/90"
                onClick={onEarlyAccessClick}
              >
                Request Investor Information
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
