import { BarChart3, Activity, Calendar, AlertTriangle, Shield, Laptop, Folder } from "lucide-react";

export interface Project {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  previewImage: string;
  link?: string;
}

export const projects: Project[] = [
  {
    icon: <img src="/lovable-uploads/d840fc98-f5c1-406e-8e70-1b71c06f3590.png" alt="EMS Study Buddy Logo" className="w-8 h-8 mb-4 rounded-md" />,
    title: "EMS Study Buddy",
    subtitle: "AI-Powered EMS Study Companion",
    description:
      "An AI-powered platform designed to help EMS students and professionals master their studies and exam prep through smart practice questions, personalized study plans, and on-demand explanations. Empowering learners and instructors across the EMS field.",
    status: "LIVE",
    previewImage: "/lovable-uploads/e1ef3005-1935-4a5b-8e0e-198a76807149.png",
    link: "https://emsstudybuddy.veritastech.io"
  },
  {
    icon: <Activity size={24} className="text-veritas-primary mb-4" />,
    title: "Veritas Value",
    subtitle: "Healthcare Value Analysis Platform",
    description:
      "Integrated with AI to support Value Analysis Professionals in making data-driven decisions for healthcare procurement and resource allocation.",
    status: "Beta testing - Release in late 2025",
    previewImage: "/lovable-uploads/3aa7a363-13ef-4176-8e66-3f38e0cb7a14.png"
  },
  {
    icon: <AlertTriangle size={24} className="text-veritas-primary mb-4" />,
    title: "Veritas NarcTrack",
    subtitle: "Medication Administration Analysis",
    description:
      "Enables healthcare agencies to evaluate trends and identify potential issues with medication administrations, providing early identification of risks.",
    status: "Beta testing - Release in late 2025",
    previewImage: "/lovable-uploads/5731fde4-2b21-42b8-b936-bd947c7015bd.png"
  },
  {
    icon: <Calendar size={24} className="text-veritas-primary mb-4" />,
    title: "Veritas EventRisk",
    subtitle: "Event Safety Management",
    description:
      "A centralized platform allowing event planners and public safety agencies to collaborate on ensuring the safe planning and execution of public events.",
    status: "Beta testing - Release in late 2025",
    previewImage: "/lovable-uploads/1103b072-005c-4f89-8c9d-93c9b001315b.png"
  },
  {
    icon: <Shield size={24} className="text-veritas-primary mb-4" />,
    title: "Veritas CertTrack",
    subtitle: "Blockchain Certificate Verification",
    description:
      "Provides verified blockchain certificates of authentication for a wide variety of providers, ensuring secure and transparent continuing education and professional certification verification.",
    status: "Beta testing - Release in late 2025",
    previewImage: "/lovable-uploads/8ac690d4-4b56-46a4-979c-4fa5839d09c7.png"
  },
  {
    icon: <Laptop size={24} className="text-veritas-primary mb-4" />,
    title: "Veritas Elevate",
    subtitle: "AI Learning & Knowledge Platform",
    description:
      "A next-generation AI-powered platform for professional learning, growth, and upskilling—with advanced course recommendations, progress tracking, and certification management. ",
    status: "In development – Release in late 2025",
    previewImage: "/lovable-uploads/69138c17-cab0-46f0-8cfe-e2170b10f21e.png"
  },
  {
    icon: <Folder size={24} className="text-veritas-primary mb-4" />,
    title: "Veritas Nexus",
    subtitle: "Command Center · CRM · Helpdesk System",
    description:
      "An advanced command center, CRM, and helpdesk system for centralized operations. Veritas Nexus combines powerful client management, knowledge bases, analytics, and support desk—all in a single unified platform designed for public safety, healthcare, and professional organizations.",
    status: "Release in late 2025",
    previewImage: "/lovable-uploads/dce229ee-0694-42e1-8056-37c94bdda106.png"
  },
  {
    icon: <Laptop size={24} className="text-veritas-primary mb-4" />,
    title: "Veritas Web Studio",
    subtitle: "AI-Powered Turnkey Web Design",
    description:
      "Turnkey web design and development platform using the latest AI-driven features for organizations needing beautiful, effective modern websites. Launch with advanced tools, stunning design, and AI-powered integrations—no coding or tech skills needed.",
    status: "Releasing May/June 2025",
    previewImage: "/lovable-uploads/4f8403aa-58a6-46c8-8f81-2128e021eb8f.png"
  }
];
