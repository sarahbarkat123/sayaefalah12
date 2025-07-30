# This file is only for editing file nodes, do not break the structure

/src
├── assets/          # Static resources directory, storing static files like images and fonts
│
├── components/      # Components directory
│   ├── ui/         # Pre-installed shadcn/ui components, avoid modifying or rewriting unless necessary
│   ├── Navbar.tsx  # Site navigation component with responsive menu
│   ├── Hero.tsx    # Hero banner with main call-to-action
│   ├── About.tsx   # Mission and vision section with statistics
│   ├── Services.tsx # Core modules displayed as cards (Missing People, Adoption, Ambulance)
│   ├── AuthForm.tsx # Authentication form for login/signup with slider functionality
│   ├── MissingPersonForm.tsx # Enhanced form for reporting missing people with detailed fields
│   ├── AdoptionForm.tsx # Enhanced form for adoption services with toggle for adopting or giving up
│   ├── AmbulanceModal.tsx # Modal for displaying ambulance service unavailable message
│   ├── HowItWorks.tsx # Timeline of steps for using services
│   ├── Testimonials.tsx # User testimonials carousel
│   ├── CTA.tsx     # Call-to-action section for volunteers
│   ├── Footer.tsx  # Site footer with links and contact information
│   └── WhatsAppButton.tsx # Floating WhatsApp contact button
│
├── hooks/          # Custom Hooks directory
│   ├── use-mobile.ts # Pre-installed mobile detection Hook from shadcn (import { useIsMobile } from '@/hooks/use-mobile')
│   └── use-toast.ts  # Toast notification system hook for displaying toast messages (import { useToast } from '@/hooks/use-toast')
│
├── lib/            # Utility library directory
│   └── utils.ts    # Utility functions, including the cn function for merging Tailwind class names
│
├── pages/          # Page components directory, based on React Router structure
│   ├── HomePage.tsx # Home page component for the Saya-e-Falah website, assembling all components
│   └── NotFoundPage.tsx # 404 error page component, displays when users access non-existent routes
│
├── App.tsx         # Root component, with React Router routing system configured
│                   # Add new route configurations in this file
│                   # Includes catch-all route (*) for 404 page handling
│
├── main.tsx        # Entry file, rendering the root component and mounting to the DOM
│
├── index.css       # Global styles file, containing Tailwind configuration and custom styles
│                   # Modified to include soft blue theme for Saya-e-Falah
│
└── tailwind.config.js  # Tailwind CSS v3 configuration file
                      # Contains theme customization, plugins, and content paths
                      # Includes shadcn/ui theme configuration 
