import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
    
    // TODO: Implement actual email sending to info@veritastech.io
    window.location.href = `mailto:info@veritastech.io?subject=${encodeURIComponent('Contact from Veritas Tech Website')}`;
    
    // Show success message
    alert("Thank you for your message. We'll get back to you soon!");
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-veritas-primary mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions about our services or want to discuss a project? 
            Get in touch with our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  required 
                  className="border-gray-300 focus:border-veritas-primary focus:ring-veritas-primary"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  className="border-gray-300 focus:border-veritas-primary focus:ring-veritas-primary"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="How can we help you?" 
                  required 
                  className="border-gray-300 focus:border-veritas-primary focus:ring-veritas-primary"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Tell us about your project..." 
                  required 
                  className="border-gray-300 focus:border-veritas-primary focus:ring-veritas-primary"
                />
              </div>
              <Button type="submit" className="bg-veritas-primary hover:bg-veritas-primary/90 w-full">
                Send Message <ArrowRight className="ml-2" size={16} />
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div>
            <div className="bg-veritas-primary rounded-xl text-white p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-veritas-accent shrink-0" />
                  <div>
                    <h4 className="font-medium">Our Location</h4>
                    <p className="text-white/80">
                      Serving clients across Georgia<br />
                      Remote-first technology solutions
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-veritas-accent shrink-0" />
                  <div>
                    <h4 className="font-medium">Email Address</h4>
                    <p className="text-white/80">
                      info@veritastech.io<br />
                      support@veritastech.io
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mr-4 h-6 w-6 text-veritas-accent shrink-0" />
                  <div>
                    <h4 className="font-medium">Business Hours</h4>
                    <p className="text-white/80">
                      Monday - Friday: 9am - 5pm<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-4">Ready to transform your business?</h4>
              <p className="text-gray-600 mb-6">
                Schedule a free consultation with our experts to discuss your technology needs.
              </p>
              <Button className="bg-veritas-secondary hover:bg-veritas-secondary/90">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
