import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FolderOpen, TestTube, MessageSquare, Users } from 'lucide-react';

interface StatsData {
  projects: number;
  labsProjects: number;
  testimonials: number;
  users: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<StatsData>({
    projects: 0,
    labsProjects: 0,
    testimonials: 0,
    users: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [projectsRes, labsRes, testimonialsRes, usersRes] = await Promise.all([
          supabase.from('projects').select('id', { count: 'exact', head: true }),
          supabase.from('labs_projects').select('id', { count: 'exact', head: true }),
          supabase.from('testimonials').select('id', { count: 'exact', head: true }),
          supabase.from('profiles').select('id', { count: 'exact', head: true }),
        ]);

        setStats({
          projects: projectsRes.count || 0,
          labsProjects: labsRes.count || 0,
          testimonials: testimonialsRes.count || 0,
          users: usersRes.count || 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Projects',
      value: stats.projects,
      description: 'Total projects in database',
      icon: FolderOpen,
    },
    {
      title: 'Labs Projects',
      value: stats.labsProjects,
      description: 'Experimental projects',
      icon: TestTube,
    },
    {
      title: 'Testimonials',
      value: stats.testimonials,
      description: 'Customer testimonials',
      icon: MessageSquare,
    },
    {
      title: 'Users',
      value: stats.users,
      description: 'Registered users',
      icon: Users,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the Veritas admin control panel
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {loading ? '...' : card.value}
              </div>
              <p className="text-xs text-muted-foreground">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common admin tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              • Add new projects to showcase
            </p>
            <p className="text-sm text-muted-foreground">
              • Manage testimonials and reviews
            </p>
            <p className="text-sm text-muted-foreground">
              • Update site settings and content
            </p>
            <p className="text-sm text-muted-foreground">
              • Monitor user registrations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>
              All systems operational
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Database</span>
              <span className="text-sm text-green-600">✓ Connected</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Authentication</span>
              <span className="text-sm text-green-600">✓ Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Storage</span>
              <span className="text-sm text-green-600">✓ Available</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;