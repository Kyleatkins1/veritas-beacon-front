import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";
import ErrorBoundary from "@/components/ui/error-boundary";
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
  sort_order: number | null;
}

interface ProjectsProps {
  onEarlyAccessClick?: () => void;
}

const Projects = ({ onEarlyAccessClick }: ProjectsProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetchProjects();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'projects'
        },
        () => fetchProjects()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchProjects = async () => {
    console.log('📊 Projects: Starting fetch...');
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) {
        console.error('📊 Projects: Database error:', error);
        throw error;
      }
      
      console.log('📊 Projects: Fetched successfully:', data?.length || 0, 'projects');
      setProjects(data || []);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      console.error('📊 Projects: Fetch failed:', errorMsg);
      setError(errorMsg);
      setProjects([]);
    } finally {
      console.log('📊 Projects: Fetch completed, clearing loading state');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto mb-8" />
            <div className="flex justify-center items-center gap-6">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-8 w-8 mb-4" />
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-24" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
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
      <section id="projects" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-lg">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle>Unable to load projects</CardTitle>
              <CardDescription>
                We're having trouble loading our projects. Please try again later.
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

  // Group projects by category
  const categorizedProjects = {
    all: projects,
    healthcare: projects.filter(p => p.category === 'Healthcare'),
    'public-safety': projects.filter(p => p.category === 'Public Safety'), 
    education: projects.filter(p => p.category === 'Education'),
    tools: projects.filter(p => p.category === 'Tools')
  };

  const categoryLabels = {
    all: 'All Projects',
    healthcare: 'Healthcare',
    'public-safety': 'Public Safety',
    education: 'Education', 
    tools: 'Tools & Platforms'
  };

  // Count projects by status
  const statusCounts = {
    live: projects.filter(p => p.status === 'Live').length,
    beta: projects.filter(p => p.status === 'Beta').length,
    development: projects.filter(p => p.status === 'Development').length
  };

  const currentProjects = categorizedProjects[activeTab as keyof typeof categorizedProjects];

  return (
    <ErrorBoundary>
      <section id="projects" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-veritas-primary mb-4">Our Projects</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
              Discover our innovative solutions across healthcare, public safety, education, and professional tools. 
              From live platforms revolutionizing industries to cutting-edge developments coming soon.
            </p>
            
            {/* Status Summary */}
            <div className="flex justify-center items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">{statusCounts.live} Live</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span className="text-gray-600">{statusCounts.beta} Beta</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">{statusCounts.development} In Development</span>
              </div>
            </div>
          </div>

        {/* Category Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12 bg-gray-100">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <TabsTrigger 
                key={key} 
                value={key}
                className="data-[state=active]:bg-veritas-primary data-[state=active]:text-white"
              >
                {label}
                <span className="ml-2 text-xs opacity-75">
                  ({categorizedProjects[key as keyof typeof categorizedProjects].length})
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(categoryLabels).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categorizedProjects[category as keyof typeof categorizedProjects].map((project, index) => {
                  return (
                    <ProjectCard
                      key={project.id}
                      project={{
                        icon: project.icon_url ? 
                          <img src={project.icon_url} alt={`${project.title} Logo`} className="w-8 h-8 mb-4 rounded-md" /> :
                          <div className="w-8 h-8 mb-4 bg-veritas-primary/10 rounded-md"></div>,
                        title: project.title,
                        subtitle: project.subtitle || '',
                        description: project.description || '',
                        status: project.status as 'Live' | 'Beta' | 'Development',
                        category: project.category as 'Healthcare' | 'Public Safety' | 'Education' | 'Tools',
                        previewImage: project.image_url || '',
                        releaseDate: project.launch_date || undefined
                      }}
                      index={index}
                      onLearnMore={setSelectedProject}
                    />
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-gray-500 italic mb-6">Additional innovative products are currently in development</p>
          <Button className="bg-veritas-primary hover:bg-veritas-primary/90" onClick={onEarlyAccessClick}>
            Request Early Access
          </Button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 italic">
            * Disclaimer: Project interface images are conceptual representations and may differ from the final product. 
            Actual interfaces are subject to change during beta and development stages.
          </p>
        </div>
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="sm:max-w-[800px]">
          <ProjectDialog selectedProject={selectedProject} />
        </DialogContent>
      </Dialog>
      </section>
    </ErrorBoundary>
  );
};

export default Projects;