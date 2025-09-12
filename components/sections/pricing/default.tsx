import React from 'react';
import Link from 'next/link';
import { GraduationCap, Users, Building2, Check, Star, Zap, Shield, BookOpen, BarChart3, CreditCard } from "lucide-react";

interface PricingColumnProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  price: number;
  priceNote: string;
  cta: {
    label: string;
  };
  features: string[];
  variant?: "default" | "glow-brand" | "glow";
  isPopular?: boolean;
  savings?: string | null;
}

const PricingColumn: React.FC<PricingColumnProps> = ({ 
  name, 
  icon, 
  description, 
  price, 
  priceNote, 
  cta, 
  features, 
  variant = "default",
  isPopular = false,
  savings = null
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'glow-brand':
        return 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-xl transform scale-105 relative';
      case 'glow':
        return 'bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-xl';
      default:
        return 'bg-white/80 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1';
    }
  };

  return (
    <div className={`relative p-6 rounded-2xl ${getVariantClasses()}`}>
      {isPopular && (
        <div className="absolute transform -translate-x-1/2 -top-4 left-1/2">
          <div className="flex items-center gap-1 px-4 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
            <Star className="w-4 h-4" />
            Plus populaire
          </div>
        </div>
      )}
      
      {savings && (
        <div className="absolute -top-2 -right-2">
          <div className="px-3 py-1 text-xs font-bold text-white bg-green-500 rounded-full">
            Économisez {savings}
          </div>
        </div>
      )}

      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          {price === 0 ? (
            <span className="text-3xl font-bold text-gray-900">Sur devis</span>
          ) : (
            <>
              <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                {price.toLocaleString()}
              </span>
              <span className="text-lg font-medium text-gray-600">DJF</span>
              <span className="text-sm text-gray-500">/mois</span>
            </>
          )}
        </div>
        <p className="mt-2 text-sm text-gray-600">{priceNote}</p>
      </div>

      <ul className="mb-8 space-y-3">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-green-600" />
            </div>
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Link href="/contact">
        <button className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
          variant === 'glow-brand' 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl' 
            : variant === 'glow'
            ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 shadow-lg hover:shadow-xl'
            : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
        }`}>
          {cta.label}
        </button>
      </Link>
    </div>
  );
};

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "École Primaire",
      icon: <GraduationCap className="text-blue-600 size-5" />,
      description: "Solution complète pour écoles primaires",
      price: 25000,
      priceNote: "Jusqu'à 300 étudiants + formation incluse",
      cta: {
        label: "Commencer l'essai gratuit",
      },
      features: [
        "Gestion des étudiants et tuteurs",
        "Portail enseignant complet",
        "Module financier et paiements",
        "Système de présences",
        "Communications SMS intégrées",
        "Rapports académiques",
        "Calendrier et emplois du temps",
        "Support technique 24/7",
      ],
      variant: "default" as const,
    },
    {
      name: "Collège & Lycée",
      icon: <Users className="text-purple-600 size-5" />,
      description: "Plateforme avancée multi-niveaux",
      price: 45000,
      priceNote: "Jusqu'à 800 étudiants + modules avancés",
      cta: {
        label: "Choisir cette offre",
      },
      features: [
        "Tous les modules de base",
        "Gestion par programmes et niveaux",
        "Système d'examens et évaluations",
        "Portail tuteur/parent avancé",
        "Module discipline et surveillance",
        "Rapports analytiques avancés",
        "API et intégrations tierces",
        "Formation équipe complète",
      ],
      variant: "glow-brand" as const,
      isPopular: true,
      savings: "20%",
    },
    {
      name: "Établissement Privé",
      icon: <Building2 className="text-green-600 size-5" />,
      description: "Solution premium multi-campus",
      price: 75000,
      priceNote: "Étudiants illimités + fonctionnalités premium",
      cta: {
        label: "Voir les détails",
      },
      features: [
        "Toutes les fonctionnalités avancées",
        "Gestion multi-campus",
        "Système de budgets avancé",
        "Réconciliation bancaire",
        "Collections et récouvrements",
        "Personnalisation complète",
        "Maintenance prioritaire",
        "Consulting mensuel inclus",
      ],
      variant: "default" as const,
    },
    {
      name: "Solution Entreprise",
      icon: <BarChart3 className="text-orange-600 size-5" />,
      description: "Plateforme sur mesure",
      price: 0,
      priceNote: "Analyse des besoins et devis personnalisé",
      cta: {
        label: "Consultation gratuite",
      },
      features: [
        "Architecture personnalisée",
        "Intégrations sur mesure",
        "Modules spécifiques métier",
        "Déploiement sur infrastructure privée",
        "SLA garantie 99.9%",
        "Support dédié 24/7",
        "Formation équipe technique",
        "Évolutions continues",
      ],
      variant: "glow" as const,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 bg-blue-300 rounded-full left-1/4 w-96 h-96 mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 delay-1000 bg-purple-300 rounded-full right-1/4 w-96 h-96 mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 border border-blue-200 rounded-full bg-white/80 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Tarifs transparents</span>
          </div>
          
          <h2 className="mb-6 text-4xl font-bold leading-tight text-transparent md:text-6xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text">
            Solutions SmartAcademie adaptées à votre établissement
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg font-medium leading-relaxed text-gray-600 md:text-xl">
            Plateforme complète de gestion scolaire avec tous les modules intégrés. Tarifs transparents en francs djiboutiens.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <PricingColumn key={plan.name} {...plan} />
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="p-8 border shadow-xl bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-3xl border-gray-200/50">
          <h3 className="mb-8 text-2xl font-bold text-center text-transparent md:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            Pourquoi choisir SmartAcademie à Djibouti ?
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-transform duration-300 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl group-hover:scale-110">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-gray-900">Plateforme éducative complète</h4>
              <p className="leading-relaxed text-gray-600">15+ modules intégrés : gestion étudiants, enseignants, finances, examens, présences</p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-transform duration-300 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl group-hover:scale-110">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-gray-900">Sécurité et fiabilité</h4>
              <p className="leading-relaxed text-gray-600">Données sécurisées, sauvegardes automatiques et contrôle d'accès par rôles</p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-transform duration-300 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl group-hover:scale-110">
                <CreditCard className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-gray-900">Gestion financière intégrée</h4>
              <p className="leading-relaxed text-gray-600">Paiements, factures, échéances, rapports financiers et réconciliation bancaire</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;