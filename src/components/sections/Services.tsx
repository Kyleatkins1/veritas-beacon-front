import React, { useState, useEffect } from "react";
import { Stethoscope, ShieldCheck, Activity, Database, Laptop, Users, Lightbulb, Search, Gauge, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import ConsultationForm from "@/components/forms/ConsultationForm";
import ErrorBoundary from "@/components/ui/error-boundary";
import { supabase } from "@/integrations/supabase/client";

interface Service {
  id: string;
  title: string;
  description: string | null;
  features: string[] | null;
  sort_order: number | null;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [consultationDialogOpen, setConsultationDialogOpen] = useState(false);

  useEffect(() => {
    fetchServices();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'services'
        },
        () => fetchServices()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchServices = async () => {
    console.log('🛠️ Services: Starting fetch...');
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });

      if (error) {
        console.error('🛠️ Services: Database error:', error);
        throw error;
      }
      
      console.log('🛠️ Services: Fetched successfully:', data?.length || 0, 'services');
      setServices(data || []);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      console.error('🛠️ Services: Fetch failed:', errorMsg);
      setError(errorMsg);
      setServices([]);
    } finally {
      console.log('🛠️ Services: Fetch completed, clearing loading state');
      setLoading(false);
    }
  };

  const getServiceIcon = (title: string) => {
    const iconMap: Record<string, JSX.Element> = {
      "Healthcare SaaS Solutions": <Stethoscope className="h-10 w-10 text-veritas-primary mb-6" />,
      "Safety & Risk Management": <ShieldCheck className="h-10 w-10 text-veritas-primary mb-6" />,
      "Analytics & Reporting": <Activity className="h-10 w-10 text-veritas-primary mb-6" />,
      "Custom SaaS Development": <Database className="h-10 w-10 text-veritas-primary mb-6" />,
      "AI Implementation": <Lightbulb className="h-10 w-10 text-veritas-primary mb-6" />,
      "SEO Support": <Search className="h-10 w-10 text-veritas-primary mb-6" />,
      "AI Education & Training": <Users className="h-10 w-10 text-veritas-primary mb-6" />,
      "Organizational AI Transition": <Gauge className="h-10 w-10 text-veritas-primary mb-6" />
    };
    return iconMap[title] || <Database className="h-10 w-10 text-veritas-primary mb-6" />;
  };

  if (loading) {
    return (
      <section id="services" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <Skeleton className="h-10 w-10 mb-6" />
                  <Skeleton className="h-6 w-32" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-4 w-20" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="services" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-lg">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle>Unable to load services</CardTitle>
              <CardDescription>
                We're having trouble loading our services. Please try again later.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button onClick={fetchServices} className="gap-2">
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <ErrorBoundary>
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
                <div>{getServiceIcon(service.title)}</div>
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

      {selectedService !== null && services[selectedService] && (
        <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{services[selectedService].title}</DialogTitle>
              <DialogDescription>
                {services[selectedService].features?.[0] || services[selectedService].description}
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
    </ErrorBoundary>
  );
};

export default Services;