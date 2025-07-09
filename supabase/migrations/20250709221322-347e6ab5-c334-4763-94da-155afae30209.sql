-- Update the projects category constraint to include 'Tools'
ALTER TABLE public.projects 
DROP CONSTRAINT projects_category_check;

ALTER TABLE public.projects 
ADD CONSTRAINT projects_category_check 
CHECK (category = ANY (ARRAY['Healthcare'::text, 'Public Safety'::text, 'Education'::text, 'Tools'::text]));

-- Now populate projects table with existing frontend data
INSERT INTO public.projects (
  title,
  subtitle,
  description,
  status,
  category,
  image_url,
  icon_url,
  launch_date,
  sort_order
) VALUES
-- EMS Study Buddy (Live)
(
  'EMS Study Buddy',
  'AI-Powered EMS Study Companion',
  'An AI-powered platform designed to help EMS students and professionals master their studies and exam prep through smart practice questions, personalized study plans, and on-demand explanations.',
  'Live',
  'Education',
  '/lovable-uploads/e1ef3005-1935-4a5b-8e0e-198a76807149.png',
  '/lovable-uploads/d840fc98-f5c1-406e-8e70-1b71c06f3590.png',
  NULL,
  1
),
-- Veritas Value (Beta)
(
  'Veritas Value',
  'Healthcare Value Analysis Platform',
  'Integrated with AI to support Value Analysis Professionals in making data-driven decisions for healthcare procurement and resource allocation.',
  'Beta',
  'Healthcare',
  '/lovable-uploads/3aa7a363-13ef-4176-8e66-3f38e0cb7a14.png',
  NULL,
  '2025-12-31',
  2
),
-- Veritas NarcTrack (Beta)
(
  'Veritas NarcTrack',
  'Medication Administration Analysis',
  'Enables healthcare agencies to evaluate trends and identify potential issues with medication administrations, providing early identification of risks.',
  'Beta',
  'Healthcare',
  '/lovable-uploads/5731fde4-2b21-42b8-b936-bd947c7015bd.png',
  NULL,
  '2025-12-31',
  3
),
-- Veritas EventRisk (Beta)
(
  'Veritas EventRisk',
  'Event Safety Management',
  'A centralized platform allowing event planners and public safety agencies to collaborate on ensuring the safe planning and execution of public events.',
  'Beta',
  'Public Safety',
  '/lovable-uploads/1103b072-005c-4f89-8c9d-93c9b001315b.png',
  NULL,
  '2025-12-31',
  4
),
-- Veritas CertTrack (Beta)
(
  'Veritas CertTrack',
  'Blockchain Certificate Verification',
  'Provides verified blockchain certificates of authentication for a wide variety of providers, ensuring secure and transparent continuing education and professional certification verification.',
  'Beta',
  'Education',
  '/lovable-uploads/8ac690d4-4b56-46a4-979c-4fa5839d09c7.png',
  NULL,
  '2025-12-31',
  5
),
-- Veritas Elevate (Development)
(
  'Veritas Elevate',
  'AI Learning & Knowledge Platform',
  'A next-generation AI-powered platform for professional learning, growth, and upskilling—with advanced course recommendations, progress tracking, and certification management.',
  'Development',
  'Education',
  '/lovable-uploads/69138c17-cab0-46f0-8cfe-e2170b10f21e.png',
  NULL,
  '2025-12-31',
  6
),
-- Veritas Nexus (Development)
(
  'Veritas Nexus',
  'Command Center · CRM · Helpdesk System',
  'An advanced command center, CRM, and helpdesk system for centralized operations. Combines powerful client management, knowledge bases, analytics, and support desk in a unified platform.',
  'Development',
  'Tools',
  '/lovable-uploads/dce229ee-0694-42e1-8056-37c94bdda106.png',
  NULL,
  '2025-12-31',
  7
),
-- Veritas Web Studio (Development)
(
  'Veritas Web Studio',
  'AI-Powered Turnkey Web Design',
  'Turnkey web design and development platform using the latest AI-driven features for organizations needing beautiful, effective modern websites. Launch with advanced tools and AI-powered integrations.',
  'Development',
  'Tools',
  '/lovable-uploads/4f8403aa-58a6-46c8-8f81-2128e021eb8f.png',
  NULL,
  '2025-06-30',
  8
);

-- Populate services table with existing frontend data
INSERT INTO public.services (
  title,
  description,
  features,
  sort_order
) VALUES
(
  'Healthcare SaaS Solutions',
  'Specialized software applications designed specifically for healthcare providers to streamline workflows and improve patient outcomes.',
  ARRAY['Our Healthcare SaaS Solutions offer comprehensive software tools tailored to the unique challenges of healthcare providers. We leverage cutting-edge technology to enhance operational efficiency, improve patient care coordination, and provide actionable insights through advanced analytics.'],
  1
),
(
  'Safety & Risk Management',
  'Integrated platforms for safety-focused agencies to identify, assess, and mitigate risks through data-driven insights.',
  ARRAY['Our Safety & Risk Management solutions provide robust tools for identifying potential risks, performing comprehensive assessments, and developing strategic mitigation strategies. We help organizations proactively manage and minimize potential safety challenges.'],
  2
),
(
  'Analytics & Reporting',
  'Advanced data analytics solutions to transform healthcare and safety data into actionable insights for better decision-making.',
  ARRAY['Transform raw data into strategic insights with our advanced Analytics & Reporting tools. We help organizations decode complex data sets, providing clear, actionable intelligence that drives informed decision-making and operational excellence.'],
  3
),
(
  'Custom SaaS Development',
  'Tailored software solutions designed to address specific challenges in healthcare and public safety sectors.',
  ARRAY['We specialize in creating bespoke SaaS solutions that precisely address your organization''s unique challenges. Our custom development approach ensures that your software not only meets but exceeds your specific operational requirements.'],
  4
),
(
  'AI Implementation',
  'Guidance on ethically implementing AI in healthcare and safety environments, from framework development to practical integration.',
  ARRAY['Navigate the complex landscape of AI implementation with our expert guidance. We provide comprehensive support from ethical framework development to practical, responsible AI integration that enhances organizational capabilities.'],
  5
),
(
  'SEO Support',
  'Specialized SEO services for healthcare organizations to improve their digital presence and reach their target audience effectively.',
  ARRAY['Boost your digital visibility with our specialized SEO services. We help healthcare organizations optimize their online presence, improve search rankings, and effectively connect with their target audience through strategic digital marketing techniques.'],
  6
),
(
  'AI Education & Training',
  'Comprehensive training programs to help your team understand and leverage artificial intelligence in healthcare and safety contexts.',
  ARRAY['Empower your team with our comprehensive AI Education & Training programs. We provide in-depth learning experiences that demystify AI technologies and provide practical skills for implementation in healthcare and safety environments.'],
  7
),
(
  'Organizational AI Transition',
  'End-to-end support for organizations adopting AI technologies, covering ethics, governance, implementation, and operational integration.',
  ARRAY['Facilitate a smooth, responsible AI transition with our end-to-end support. We guide organizations through ethical considerations, governance frameworks, seamless implementation, and strategic operational integration of AI technologies.'],
  8
);

-- Populate testimonials table with founder quotes
INSERT INTO public.testimonials (
  name,
  title,
  company,
  content,
  avatar_url,
  sort_order
) VALUES
(
  'Kyle P. Atkins, Ed.S., NRP, FACHDM',
  'Founder & Systems Architect',
  'Veritas Technology Solutions',
  'We founded Veritas Technology Solutions with a vision to transform healthcare safety through innovative AI. Our mission is to build solutions that protect lives and improve outcomes.',
  '/lovable-uploads/e1ef3005-1935-4a5b-8e0e-198a76807149.png',
  1
),
(
  'Kyle P. Atkins, Ed.S., NRP, FACHDM',
  'Founder & Systems Architect',
  'Veritas Technology Solutions',
  'Healthcare safety is personal to me. After witnessing preventable errors in my own family, I committed to building technology that could change the system for the better.',
  '/lovable-uploads/e1ef3005-1935-4a5b-8e0e-198a76807149.png',
  2
),
(
  'Kyle P. Atkins, Ed.S., NRP, FACHDM',
  'Founder & Systems Architect',
  'Veritas Technology Solutions',
  'Our 2025 launch represents years of research, development, and collaboration with industry partners. We''re creating systems that can anticipate risks before they become dangers.',
  '/lovable-uploads/e1ef3005-1935-4a5b-8e0e-198a76807149.png',
  3
),
(
  'Kyle P. Atkins, Ed.S., NRP, FACHDM',
  'Founder & Systems Architect',
  'Veritas Technology Solutions',
  'Technology alone isn''t enough. We''re building a comprehensive approach that combines cutting-edge AI with human expertise and rigorous ethical standards.',
  '/lovable-uploads/e1ef3005-1935-4a5b-8e0e-198a76807149.png',
  4
);