export const siteConfig = {
  name: "ScolApp",
  url: "https://scolapp.com", // Replace with your actual domain
  getStartedUrl: "/contact", // Or wherever you want users to get started
  ogImage: "/og-image.jpg", // Add your Open Graph image to public folder
  description: "Application de gestion scolaire moderne pour simplifier l'administration éducative.",
  
  // Social and contact links
  links: {
    twitter: "https://twitter.com/scolapp", // Replace with your Twitter
    github: "https://github.com/yourcompany/scolapp", // Replace with your GitHub
    email: "mailto:contact@scolapp.com", // Replace with your email
    linkedin: "https://linkedin.com/company/scolapp", // Add if you have LinkedIn
    facebook: "https://facebook.com/scolapp", // Add if you have Facebook
  },
  
  // Pricing/subscription links (if applicable)
  pricing: {
    basic: "/pricing#basic",
    pro: "/pricing#pro",
    enterprise: "/pricing#enterprise",
  },
  
  // App statistics and metrics
  stats: {
    users: 2500, // Number of active users
    schools: 150, // Number of schools using the app
    students: 45000, // Number of students managed
    downloads: 8500, // App downloads
    total: "50k+", // Total interactions/users
    updated: "12 Sep 2025", // Last update date
    features: 25, // Number of features
    integrations: 8, // Number of integrations
    languages: 3, // Supported languages (French, English, etc.)
    countries: 5, // Countries where it's used
  },
  
  // App-specific configuration
  app: {
    version: "2.1.0",
    releaseDate: "2025-09-01",
    supportedPlatforms: ["Web", "iOS", "Android"],
    minRequirements: {
      browser: "Chrome 90+, Firefox 88+, Safari 14+",
      mobile: "iOS 13+, Android 8+",
    },
  },
  
  // Contact information
  contact: {
    support: "mailto:support@scolapp.com",
    sales: "mailto:sales@scolapp.com",
    phone: "+33 1 23 45 67 89", // Replace with actual phone
    address: "123 Rue de l'Éducation, 75001 Paris, France", // Replace with actual address
  },
  
  // SEO and metadata
  seo: {
    keywords: [
      "gestion scolaire",
      "administration éducative",
      "logiciel école",
      "gestion étudiants",
      "planning scolaire",
      "notes élèves",
      "communication parents",
    ],
    author: "ScolApp Team",
    robots: "index, follow",
    canonical: "https://scolapp.com",
  },
  
  // Feature flags or toggles
  features: {
    multiLanguage: true,
    darkMode: true,
    notifications: true,
    mobileApp: true,
    apiAccess: true,
    customBranding: true,
  },
};

export type SiteConfig = typeof siteConfig;