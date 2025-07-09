import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Heart, Shield, GraduationCap, AlertTriangle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import ErrorBoundary from "@/components/ui/error-boundary";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

interface Project {
  id: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  status: string;
  category: string;
  image_url: string | null;
  icon_url: string | null;
  launch_date: string | null;
}

const ProductLanes = () => {
  const [expandedLane, setExpandedLane] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    console.log('🏗️ ProductLanes: Starting fetch...');
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .in('status', ['Live', 'Beta', 'Development'])
        .order('sort_order', { ascending: true });

      if (error) {
        console.error('🏗️ ProductLanes: Database error:', error);
        throw error;
      }
      
      console.log('🏗️ ProductLanes: Fetched successfully:', data?.length || 0, 'projects');
      setProjects(data || []);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      console.error('🏗️ ProductLanes: Fetch failed:', errorMsg);
      setError(errorMsg);
      setProjects([]);
    } finally {
      console.log('🏗️ ProductLanes: Fetch completed, clearing loading state');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="product-lanes" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-12 w-12 mb-4" />
                  <Skeleton className="h-6 w-32" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-6" />
                  <Skeleton className="h-8 w-24" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="product-lanes" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-lg">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle>Unable to load products</CardTitle>
              <CardDescription>
                We're having trouble loading our product information. Please try again later.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button onClick={fetchProjects} className="gap-2">
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  // Filter projects to only include Live, Beta, and Development (no planned/building)
  const activeProjects = projects;

  // Group projects by category and map to product lanes
  const productLanes = [
    {
      id: "healthcare",
      title: "Veritas Healthcare",
      icon: <Heart className="h-8 w-8" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      description: "AI-powered solutions for healthcare providers, value analysis, and medical governance",
      products: activeProjects
        .filter(p => p.category === 'Healthcare')
        .map(p => ({
          name: p.title,
          description: p.subtitle,
          status: p.status
        }))
    },
    {
      id: "public-safety",
      title: "Veritas Public Safety",
      icon: <Shield className="h-8 w-8" />,
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-700",
      description: "Safety management and risk assessment solutions for public safety agencies",
      products: activeProjects
        .filter(p => p.category === 'Public Safety')
        .map(p => ({
          name: p.title,
          description: p.subtitle,
          status: p.status
        }))
    },
    {
      id: "education",
      title: "Veritas Education",
      icon: <GraduationCap className="h-8 w-8" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      description: "AI-enhanced learning platforms and certification systems",
      products: activeProjects
        .filter(p => p.category === 'Education')
        .map(p => ({
          name: p.title,
          description: p.subtitle,
          status: p.status
        }))
    }
  ];

  return (
    <ErrorBoundary>
      <section id="product-lanes" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-veritas-primary mb-4">Our Three Core Verticals</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Veritas delivers specialized AI-powered solutions across three distinct verticals, 
            each designed to solve real-world problems with ethical innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {productLanes.map((lane) => (
            <Card 
              key={lane.id}
              className={cn(
                "transition-all duration-300 hover:shadow-lg border-2",
                lane.bgColor,
                lane.borderColor
              )}
            >
              <CardHeader className="pb-4">
                <div className={cn("flex items-center gap-3", lane.textColor)}>
                  {lane.icon}
                  <CardTitle className="text-xl">{lane.title}</CardTitle>
                </div>
                <p className="text-gray-600 text-sm">{lane.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button
                  variant="ghost"
                  onClick={() => setExpandedLane(expandedLane === lane.id ? null : lane.id)}
                  className={cn("w-full justify-between mb-4", lane.textColor)}
                >
                  View Products ({lane.products.length})
                  {expandedLane === lane.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>

                {expandedLane === lane.id && (
                  <div className="space-y-3 animate-fade-in">
                    {lane.products.map((product, index) => (
                       <div key={index} className="bg-white p-4 rounded-lg border shadow-sm">
                         <div className="flex items-start justify-between mb-2">
                           <h4 className="font-semibold text-gray-900">{product.name}</h4>
                           <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                             product.status === 'Live' 
                               ? 'bg-green-100 text-green-700' 
                               : product.status === 'Beta'
                               ? 'bg-amber-100 text-amber-700'
                               : 'bg-blue-100 text-blue-700'
                           }`}>
                             {product.status}
                           </span>
                         </div>
                         <p className="text-sm text-gray-600">{product.description}</p>
                       </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Explore how our vertical-specific solutions can transform your organization.
          </p>
          <Button className="bg-veritas-primary hover:bg-veritas-primary/90">
            Schedule a Consultation
          </Button>
        </div>
      </div>
      </section>
    </ErrorBoundary>
  );
};

export default ProductLanes;