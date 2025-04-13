
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Building, DollarSign, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(2, {
    message: "Company name is required.",
  }),
  position: z.string().min(2, {
    message: "Position is required.",
  }),
  investmentAmount: z.string().min(1, {
    message: "Please select an investment amount range.",
  }),
  experience: z.string().min(1, {
    message: "Please select your investment experience.",
  }),
  interests: z.string().min(10, {
    message: "Please tell us about your investment interests.",
  }),
});

interface InvestorRequestFormProps {
  onClose: () => void;
}

const InvestorRequestForm = ({ onClose }: InvestorRequestFormProps) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      position: "",
      investmentAmount: "",
      experience: "",
      interests: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Format email body from form values
    const subject = encodeURIComponent("Investor Information Request from Website");
    const body = encodeURIComponent(
      `Name: ${values.name}\n` +
      `Email: ${values.email}\n` +
      `Company: ${values.company}\n` +
      `Position: ${values.position}\n` +
      `Investment Range: ${values.investmentAmount}\n` +
      `Investment Experience: ${values.experience}\n` +
      `Investment Interests: ${values.interests}\n`
    );

    // Open email client with pre-populated fields
    window.location.href = `mailto:katkins@veritastech.io?subject=${subject}&body=${body}`;
    
    // Show success toast
    toast({
      title: "Request Submitted",
      description: "Your investor information request has been submitted successfully.",
    });
    
    // Close the modal
    onClose();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="John Doe" className="pl-10" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="john@company.com" className="pl-10" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company/Organization</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Company Name" className="pl-10" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position/Title</FormLabel>
                <FormControl>
                  <Input placeholder="CEO, Investment Manager, etc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="investmentAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Investment Amount Range</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="under_50k">Under $50,000</SelectItem>
                    <SelectItem value="50k_250k">$50,000 - $250,000</SelectItem>
                    <SelectItem value="250k_1m">$250,000 - $1 Million</SelectItem>
                    <SelectItem value="1m_5m">$1 Million - $5 Million</SelectItem>
                    <SelectItem value="over_5m">Over $5 Million</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Investment Experience</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="new_investor">New Investor</SelectItem>
                    <SelectItem value="angel_investor">Angel Investor</SelectItem>
                    <SelectItem value="vc">Venture Capitalist</SelectItem>
                    <SelectItem value="corporate_investor">Corporate Investor</SelectItem>
                    <SelectItem value="private_equity">Private Equity</SelectItem>
                    <SelectItem value="family_office">Family Office</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="interests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Investment Interests & Goals</FormLabel>
              <FormControl>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Textarea 
                    placeholder="Tell us about your investment goals, interests in healthcare technology, and what you're looking for in an investment opportunity..." 
                    className="min-h-[120px] pl-10" 
                    {...field} 
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-end gap-3 pt-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" className="bg-veritas-primary hover:bg-veritas-primary/90">
            Submit Request
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default InvestorRequestForm;
