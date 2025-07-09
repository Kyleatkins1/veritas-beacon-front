import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Edit, Trash2, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SiteSetting {
  id: string;
  key: string;
  value: any;
  description: string | null;
  updated_by: string | null;
  created_at: string;
  updated_at: string;
}

interface Service {
  id: string;
  title: string;
  description: string | null;
  features: string[] | null;
  icon_url: string | null;
  is_active: boolean | null;
  sort_order: number | null;
  created_at: string;
  updated_at: string;
}

const Settings = () => {
  const [settings, setSettings] = useState<SiteSetting[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);
  const { toast } = useToast();

  const [serviceFormData, setServiceFormData] = useState({
    title: '',
    description: '',
    features: '',
    icon_url: '',
    is_active: true,
    sort_order: 0
  });

  useEffect(() => {
    fetchSettings();
    fetchServices();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .order('key', { ascending: true });

      if (error) throw error;
      setSettings(data || []);
    } catch (error) {
      console.error('Error fetching settings:', error);
      toast({
        title: "Error",
        description: "Failed to fetch settings",
        variant: "destructive",
      });
    }
  };

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
      toast({
        title: "Error",
        description: "Failed to fetch services",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateSetting = async (key: string, value: any, description?: string) => {
    try {
      const { error } = await supabase
        .from('site_settings')
        .upsert([{
          key,
          value,
          description
        }]);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Setting updated successfully",
      });
      
      fetchSettings();
    } catch (error) {
      console.error('Error updating setting:', error);
      toast({
        title: "Error",
        description: "Failed to update setting",
        variant: "destructive",
      });
    }
  };

  const resetServiceForm = () => {
    setServiceFormData({
      title: '',
      description: '',
      features: '',
      icon_url: '',
      is_active: true,
      sort_order: 0
    });
    setEditingService(null);
  };

  const openServiceDialog = (service?: Service) => {
    if (service) {
      setEditingService(service);
      setServiceFormData({
        title: service.title,
        description: service.description || '',
        features: service.features?.join(', ') || '',
        icon_url: service.icon_url || '',
        is_active: service.is_active || false,
        sort_order: service.sort_order || 0
      });
    } else {
      resetServiceForm();
    }
    setIsServiceDialogOpen(true);
  };

  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviceData = {
      ...serviceFormData,
      features: serviceFormData.features ? serviceFormData.features.split(',').map(s => s.trim()) : null
    };

    try {
      if (editingService) {
        const { error } = await supabase
          .from('services')
          .update(serviceData)
          .eq('id', editingService.id);
        
        if (error) throw error;
        toast({
          title: "Success",
          description: "Service updated successfully",
        });
      } else {
        const { error } = await supabase
          .from('services')
          .insert([serviceData]);
        
        if (error) throw error;
        toast({
          title: "Success", 
          description: "Service created successfully",
        });
      }
      
      setIsServiceDialogOpen(false);
      resetServiceForm();
      fetchServices();
    } catch (error) {
      console.error('Error saving service:', error);
      toast({
        title: "Error",
        description: "Failed to save service",
        variant: "destructive",
      });
    }
  };

  const handleDeleteService = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    
    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      toast({
        title: "Success",
        description: "Service deleted successfully",
      });
      fetchServices();
    } catch (error) {
      console.error('Error deleting service:', error);
      toast({
        title: "Error",
        description: "Failed to delete service",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Configure site settings and services</p>
      </div>

      {/* Services Management */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Services</CardTitle>
            <CardDescription>Manage your service offerings</CardDescription>
          </div>
          <Dialog open={isServiceDialogOpen} onOpenChange={setIsServiceDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => openServiceDialog()}>
                <Plus className="h-4 w-4 mr-2" />
                Add Service
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{editingService ? 'Edit Service' : 'Add New Service'}</DialogTitle>
                <DialogDescription>
                  {editingService ? 'Update service details' : 'Create a new service offering'}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleServiceSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="service_title">Title *</Label>
                  <Input
                    id="service_title"
                    value={serviceFormData.title}
                    onChange={(e) => setServiceFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="service_description">Description</Label>
                  <Textarea
                    id="service_description"
                    value={serviceFormData.description}
                    onChange={(e) => setServiceFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="service_features">Features (comma-separated)</Label>
                  <Textarea
                    id="service_features"
                    value={serviceFormData.features}
                    onChange={(e) => setServiceFormData(prev => ({ ...prev, features: e.target.value }))}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="service_icon_url">Icon URL</Label>
                    <Input
                      id="service_icon_url"
                      value={serviceFormData.icon_url}
                      onChange={(e) => setServiceFormData(prev => ({ ...prev, icon_url: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="service_sort_order">Sort Order</Label>
                    <Input
                      id="service_sort_order"
                      type="number"
                      value={serviceFormData.sort_order}
                      onChange={(e) => setServiceFormData(prev => ({ ...prev, sort_order: Number(e.target.value) }))}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="service_is_active"
                    checked={serviceFormData.is_active}
                    onChange={(e) => setServiceFormData(prev => ({ ...prev, is_active: e.target.checked }))}
                  />
                  <Label htmlFor="service_is_active">Active</Label>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsServiceDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingService ? 'Update' : 'Create'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-4">Loading...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Features</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell className="font-medium">{service.title}</TableCell>
                    <TableCell>
                      <div className="max-w-xs truncate">
                        {service.description || '-'}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-xs truncate">
                        {service.features?.join(', ') || '-'}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        service.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {service.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openServiceDialog(service)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteService(service.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Site Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Site Settings</CardTitle>
          <CardDescription>Configure global site settings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="site_title">Site Title</Label>
                <div className="flex space-x-2">
                  <Input
                    id="site_title"
                    placeholder="Veritas Technology"
                    onBlur={(e) => {
                      if (e.target.value) {
                        updateSetting('site_title', e.target.value, 'Main site title');
                      }
                    }}
                  />
                  <Button size="sm" variant="outline">
                    <Save className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div>
                <Label htmlFor="site_description">Site Description</Label>
                <div className="flex space-x-2">
                  <Input
                    id="site_description"
                    placeholder="Building the future of technology"
                    onBlur={(e) => {
                      if (e.target.value) {
                        updateSetting('site_description', e.target.value, 'Site meta description');
                      }
                    }}
                  />
                  <Button size="sm" variant="outline">
                    <Save className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <Label htmlFor="contact_email">Contact Email</Label>
              <div className="flex space-x-2">
                <Input
                  id="contact_email"
                  type="email"
                  placeholder="contact@veritastech.io"
                  onBlur={(e) => {
                    if (e.target.value) {
                      updateSetting('contact_email', e.target.value, 'Primary contact email');
                    }
                  }}
                />
                <Button size="sm" variant="outline">
                  <Save className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="company_address">Company Address</Label>
              <div className="flex space-x-2">
                <Textarea
                  id="company_address"
                  placeholder="123 Tech Street, Innovation City, TC 12345"
                  onBlur={(e) => {
                    if (e.target.value) {
                      updateSetting('company_address', e.target.value, 'Company physical address');
                    }
                  }}
                />
                <Button size="sm" variant="outline">
                  <Save className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {settings.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">Current Settings</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Key</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Updated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {settings.map((setting) => (
                    <TableRow key={setting.id}>
                      <TableCell className="font-mono text-sm">{setting.key}</TableCell>
                      <TableCell>
                        <div className="max-w-xs truncate">
                          {typeof setting.value === 'string' ? setting.value : JSON.stringify(setting.value)}
                        </div>
                      </TableCell>
                      <TableCell>{setting.description || '-'}</TableCell>
                      <TableCell>
                        {new Date(setting.updated_at).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;