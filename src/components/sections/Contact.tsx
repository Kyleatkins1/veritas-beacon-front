import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import ConsultationForm from "@/components/forms/ConsultationForm";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [consultationDialogOpen, setConsultationDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    // Format email body
    const emailSubject = encodeURIComponent('Contact from Veritas Tech Website');
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Subject: ${subject}\n\n` +
      `Message:\n${message}`
    );
    
    // Open email client with pre-populated fields
    window.location.href = `mailto:info@veritastech.io?subject=${emailSubject}&body=${body}`;
    
    // Show success toast
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
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
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <Input 
                  id="name" 
                  name="name"
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
                  name="email"
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
                  name="subject"
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
                  name="message"
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

          <div>
            <div className="bg-veritas-primary rounded-xl text-white p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-veritas-accent shrink-0" />
                  <div>
                    <h4 className="font-medium">Our Location</h4>
                    <p className="text-white/80">
                      Serving clients across the USA<br />
                      Remote-first technology solutions
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-veritas-accent shrink-0" />
                  <div>
                    <h4 className="font-medium">Email Addresses</h4>
                    <p className="text-white/80">
                      General Inquiries: info@veritastech.io<br />
                      Technical Support: support@veritastech.io
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
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-4">Ready to transform your business?</h4>
              <p className="text-gray-600 mb-6">
                Schedule a free consultation with our experts to discuss your technology needs.
              </p>
              <Button 
                className="bg-veritas-secondary hover:bg-veritas-secondary/90"
                onClick={() => setConsultationDialogOpen(true)}
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

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

export default Contact;
