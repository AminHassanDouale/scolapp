import React from 'react';
import Link from 'next/link';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Smartphone, Monitor, Download } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Produit",
      links: [
        { name: "Fonctionnalités", href: "/features" },
        { name: "Tarifs", href: "/pricing" },
        { name: "Démo", href: "#demo" },
        { name: "Modules", href: "/modules" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Centre d'aide", href: "/help" },
        { name: "Documentation", href: "/docs" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Partenaires", href: "/partners" },
        { name: "Carrières", href: "/careers" }
      ]
    }
  ];

  // X (Twitter) SVG Icon component
  const XIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  // Apple App Store Icon
  const AppStoreIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );

  // Google Play Icon
  const PlayStoreIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
    </svg>
  );

  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6 group">
              <div className="p-2 transition-transform duration-300 rounded-xl group-hover:scale-105">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold">ScolApp</span>
            </Link>
            <p className="max-w-md mb-6 leading-relaxed text-gray-400">
              La solution complète de gestion scolaire pour tous les niveaux d'enseignement : 
              maternelle, primaire, collège, lycée et université. Interface bilingue, SMS intégré et support local inclus.
            </p>

            {/* Educational Levels */}
            

            {/* Platform Availability */}
            <div className="mb-6">
              <h4 className="mb-3 text-sm font-semibold tracking-wider text-white uppercase">
                Disponible sur toutes les plateformes
              </h4>
              <div className="flex items-center mb-4 space-x-4">
                <div className="flex items-center space-x-2">
                  <Monitor className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">Web</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">iOS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">Android</span>
                </div>
              </div>
              
              {/* App Store Links */}
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="flex items-center px-4 py-2 text-sm transition-colors duration-200 bg-black border border-gray-600 rounded-lg hover:bg-gray-800"
                >
                  <AppStoreIcon className="w-5 h-5 mr-2" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Télécharger sur</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a 
                  href="#" 
                  className="flex items-center px-4 py-2 text-sm transition-colors duration-200 bg-black border border-gray-600 rounded-lg hover:bg-gray-800"
                >
                  <PlayStoreIcon className="w-5 h-5 mr-2" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Disponible sur</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/ScolApp" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105"
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/ScolApp" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-black rounded-lg hover:bg-gray-800 hover:scale-105"
                aria-label="Suivez-nous sur X"
              >
                <XIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/company/ScolApp" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-blue-700 rounded-lg hover:bg-blue-800 hover:scale-105"
                aria-label="Suivez-nous sur LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/ScolApp" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-pink-600 rounded-lg hover:bg-pink-700 hover:scale-105"
                aria-label="Suivez-nous sur Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="pt-12 mt-12 border-t border-gray-800">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-center">
              <Phone className="flex-shrink-0 w-5 h-5 mr-3 text-blue-500" />
              <div>
                <p className="font-medium">Téléphone</p>
                <a 
                  href="tel:+25377049495" 
                  className="text-gray-400 transition-colors duration-200 hover:text-blue-400"
                >
                  +253 77 04 94 95
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="flex-shrink-0 w-5 h-5 mr-3 text-blue-500" />
              <div>
                <p className="font-medium">Email</p>
                <a 
                  href="mailto:contact@scolapp.com" 
                  className="text-gray-400 transition-colors duration-200 hover:text-blue-400"
                >
                  contact@scolapp.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="flex-shrink-0 w-5 h-5 mr-3 text-blue-500" />
              <div>
                <p className="font-medium">Adresse</p>
                <p className="text-gray-400">Djibouti-Ville, Djibouti</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between pt-8 mt-12 border-t border-gray-800 md:flex-row">
          <p className="text-sm text-gray-400">
            © {currentYear} ScolApp. Tous droits réservés.
          </p>
          <div className="flex items-center mt-4 text-sm text-gray-400 md:mt-0">
            <Download className="w-4 h-4 mr-2" />
            <span>Disponible sur Web, iOS et Android</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;