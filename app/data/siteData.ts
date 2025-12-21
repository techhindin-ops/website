// Central data file for all dynamic website content
// Update this file to change content across the entire website

export const siteData = {
  // Company Information
  company: {
    name: "techHind",
    shortName: "TH",
    tagline: "India's most powerful CRM platform for Solar EPC companies.",
    description:
      "techHind is a newly established company dedicated to revolutionizing how solar EPC companies manage their business operations. Our platform is designed specifically for the Indian solar market, understanding the unique challenges and opportunities in this rapidly growing industry.",
    additionalInfo:
      "We combine deep industry knowledge with modern technology to deliver a solution that truly makes a difference. Our team is committed to supporting your business growth every step of the way.",
  },

  // SEO & Metadata
  seo: {
    title: "techHind - India's Most Powerful CRM for Solar EPC Companies",
    description:
      "From Lead generation to project completion — Manage your entire solar business with one powerful, cloud-based platform designed specifically for Indian solar companies.",
  },

  // Contact Information
  contact: {
    email: "contact@techhind.com",
    phone: "+91-8485949461",
    address: "47,Ambica society, Vijapur, Gujarat, 382870, India",
    socialMedia: {
      linkedin: "https://linkedin.com/company/techhind",
      twitter: "https://twitter.com/techhind",
      facebook: "https://facebook.com/techhind",
    },
  },

  // Navigation
  navigation: {
    items: [
      { name: "Product", hasDropdown: true },
      { name: "Resources", hasDropdown: true },
      { name: "Pricing", hasDropdown: true },
      { name: "About Us", hasDropdown: true },
      { name: "Contact Us", hasDropdown: true },
    ],
    ctaButtons: {
      login: "Login",
      bookDemo: "Book a Demo",
    },
  },

  // Hero Section
  hero: {
    banner: {
      icon: "⚡",
      text: "Built for Solar EPC Companies",
    },
    headline: {
      prefix: "India's Most Powerful",
      crm: "CRM",
      middle: "for",
      industry: "Solar EPC",
      suffix: "Companies",
    },
    subheadline:
      "From Lead generation to project completion — Manage your entire solar business with one powerful, cloud-based platform designed specifically for Indian solar companies.",
    ctaButtons: {
      primary: "Get Started Today",
      secondary: "Book a Demo",
    },
    featureHighlights: ["Residential", "Commercial", "Ground Mounted"],
  },

  // Features Section
  features: {
    title: "Everything You Need to Manage Your Solar Business",
    titleHighlight: "Manage Your Solar Business",
    description:
      "A comprehensive platform designed to streamline operations and accelerate growth for solar EPC companies.",
  },

  // About Section
  about: {
    title: "Why Choose techHind?",
    subtitle:
      "We're not just another CRM. We're your partner in building a more efficient and profitable solar business.",
  },

  // Testimonials
  testimonials: {
    title: "Trusted by Leading Solar EPC Companies Across India",
    description:
      "We proudly support EPC companies, manufacturers, and service providers from every corner of the solar industry.",
    items: [
    //   {
    //     name: "Client Name 1",
    //     company: "Company Name 1",
    //     role: "CEO",
    //     content:
    //       "This platform has transformed how we manage our solar projects. The efficiency gains are remarkable.",
    //     rating: 5,
    //   },
    //   {
    //     name: "Client Name 2",
    //     company: "Company Name 2",
    //     role: "Operations Manager",
    //     content:
    //       "techHind has streamlined our entire workflow. Highly recommended for any solar EPC company.",
    //     rating: 5,
    //   },
    //   {
    //     name: "Client Name 3",
    //     company: "Company Name 3",
    //     role: "Project Director",
    //     content:
    //       "The best investment we've made for our business. It pays for itself in time saved alone.",
    //     rating: 5,
    //   },
    ],
  },

  // Contact Section
  contactSection: {
    title: "Get in Touch",
    subtitle:
      "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  },

  // Stats Section
  stats: {
    title: "Trusted by Solar EPC Companies Across India",
    items: [
      { value: "500+", label: "Active Projects", icon: "📊" },
      { value: "50+", label: "EPC Companies", icon: "🏢" },
      { value: "95%", label: "Customer Satisfaction", icon: "⭐" },
      { value: "40%", label: "Time Saved", icon: "⚡" },
    ],
  },

  // Value Proposition
  valueProposition: {
    title: "Transform Your Solar Business Operations",
    subtitle: "See measurable results in weeks, not months",
    benefits: [
      {
        title: "Reduce Project Delays",
        description: "Cut project completion time by up to 40% with real-time tracking and automated workflows",
        icon: "⏱️",
      },
      {
        title: "Increase Revenue",
        description: "Close 30% more deals with intelligent lead management and automated follow-ups",
        icon: "💰",
      },
      {
        title: "Improve Efficiency",
        description: "Eliminate manual data entry and reduce administrative overhead by 60%",
        icon: "🚀",
      },
      {
        title: "Better Decision Making",
        description: "Make data-driven decisions with comprehensive analytics and real-time insights",
        icon: "📈",
      },
    ],
  },

  // Social Proof
  socialProof: {
    title: "Trusted by Leading Solar Companies",
    logos: [
      { name: "Solar Energy Corp", placeholder: "SEC" },
      { name: "Green Power Solutions", placeholder: "GPS" },
      { name: "Sunshine EPC", placeholder: "SEPC" },
      { name: "Renewable Energy Co", placeholder: "REC" },
      { name: "Solar Tech India", placeholder: "STI" },
      { name: "Clean Energy Partners", placeholder: "CEP" },
    ],
  },

  // Use Cases
  useCases: {
    title: "Built for Every Solar Business Need",
    subtitle: "Whether you're a startup or enterprise, techHind scales with you",
    cases: [
      {
        title: "Small EPC Companies",
        description: "Start managing up to 50 projects efficiently with our Starter plan",
        features: ["Basic lead management", "Project tracking", "Mobile access"],
      },
      {
        title: "Growing Businesses",
        description: "Scale operations with unlimited projects and advanced features",
        features: ["Advanced analytics", "Team collaboration", "Custom integrations"],
      },
      {
        title: "Enterprise Organizations",
        description: "Enterprise-grade solution with dedicated support and custom development",
        features: ["Dedicated account manager", "Custom features", "On-premise option"],
      },
    ],
  },

  // Footer
  footer: {
    links: {
      product: ["Features", "Pricing", "Integrations", "Updates"],
      company: ["About Us", "Careers", "Blog", "Contact"],
      resources: ["Documentation", "Help Center", "API Reference", "Community"],
      legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  },
};