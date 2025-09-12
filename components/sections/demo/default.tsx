'use client';

import React, { useState } from 'react';
import { Monitor, Smartphone, Tablet, Eye, ArrowRight, Users, GraduationCap, CreditCard, BookOpen, MessageSquare, BarChart3, User, Sparkles } from "lucide-react";

interface DemoSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  gradient: string;
}

const Demo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string>('dashboard');
  const [isRegistrationOpen, setIsRegistrationOpen] = useState<boolean>(false);

  const demoSections: DemoSection[] = [
    {
      id: 'dashboard',
      title: 'Tableau de Bord',
      description: 'Vue d\'ensemble complète avec statistiques en temps réel',
      icon: <BarChart3 className="w-6 h-6" />,
      features: ['Statistiques en temps réel', 'Graphiques interactifs', 'Notifications importantes'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'students',
      title: 'Gestion Étudiants',
      description: 'Interface complète pour gérer les profils étudiants',
      icon: <Users className="w-6 h-6" />,
      features: ['Profils détaillés', 'Historique académique', 'Suivi des présences'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'financial',
      title: 'Module Financier',
      description: 'Système de paiements et facturation automatisé',
      icon: <CreditCard className="w-6 h-6" />,
      features: ['Paiements en ligne', 'Facturation automatique', 'Rapports financiers'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'academic',
      title: 'Gestion Académique',
      description: 'Emplois du temps, notes et planning des examens',
      icon: <BookOpen className="w-6 h-6" />,
      features: ['Emplois du temps', 'Saisie des notes', 'Génération de bulletins'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'communications',
      title: 'Communications',
      description: 'Hub de communication avec parents et enseignants',
      icon: <MessageSquare className="w-6 h-6" />,
      features: ['Messages instantanés', 'Notifications SMS', 'Groupes de diffusion'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'reports',
      title: 'Rapports & Analytics',
      description: 'Tableaux de bord avancés et analyses prédictives',
      icon: <BarChart3 className="w-6 h-6" />,
      features: ['Rapports personnalisés', 'Analyses prédictives', 'Export multi-formats'],
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  const currentSection = demoSections.find(section => section.id === activeDemo) || demoSections[0];

  const handleRegistrationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Registration form submitted');
  };

  const renderDemoContent = () => {
    switch (activeDemo) {
      case 'dashboard':
        return (
          <div className="p-8 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
            <h3 className="mb-6 text-2xl font-bold text-blue-900">Tableau de Bord Principal</h3>
            <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4">
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-blue-600">5,247</div>
                <div className="text-sm text-gray-600">Étudiants actifs</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-green-600">98.2%</div>
                <div className="text-sm text-gray-600">Taux présence</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-yellow-600">2.4M</div>
                <div className="text-sm text-gray-600">DJF collectés</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-purple-600">45</div>
                <div className="text-sm text-gray-600">Enseignants</div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="mb-2 font-semibold">Revenus mensuels</h4>
              <div className="text-sm text-gray-600">Graphique des revenus par mois</div>
            </div>
          </div>
        );
      
      case 'students':
        return (
          <div className="p-8 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
            <h3 className="mb-6 text-2xl font-bold text-purple-900">Gestion des Étudiants</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 font-bold text-white bg-blue-500 rounded-full">AH</div>
                  <div>
                    <div className="font-semibold">Ahmed Hassan</div>
                    <div className="text-sm text-gray-600">Classe: 1ère S - Présent</div>
                  </div>
                </div>
                <span className="px-3 py-1 text-sm text-white bg-green-500 rounded-full">Actif</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 font-bold text-white bg-green-500 rounded-full">FM</div>
                  <div>
                    <div className="font-semibold">Fatima Mohamed</div>
                    <div className="text-sm text-gray-600">Classe: Terminal L - Présente</div>
                  </div>
                </div>
                <span className="px-3 py-1 text-sm text-white bg-green-500 rounded-full">Actif</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 font-bold text-white bg-yellow-500 rounded-full">OY</div>
                  <div>
                    <div className="font-semibold">Omar Youssef</div>
                    <div className="text-sm text-gray-600">Classe: 2ème S - Absent</div>
                  </div>
                </div>
                <span className="px-3 py-1 text-sm text-white bg-yellow-500 rounded-full">Absent</span>
              </div>
            </div>
          </div>
        );
      
      case 'financial':
        return (
          <div className="p-8 rounded-lg bg-gradient-to-br from-green-50 to-green-100">
            <h3 className="mb-6 text-2xl font-bold text-green-900">Module Financier</h3>
            <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
              <div className="p-6 bg-white rounded-lg shadow">
                <div className="mb-2 text-sm text-gray-600">Revenus du mois</div>
                <div className="text-3xl font-bold text-green-600">2.4M</div>
                <div className="text-sm text-gray-600">DJF (+15%)</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow">
                <div className="mb-2 text-sm text-gray-600">Paiements reçus</div>
                <div className="text-3xl font-bold text-blue-600">1,247</div>
                <div className="text-sm text-gray-600">Transactions</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow">
                <div className="mb-2 text-sm text-gray-600">En attente</div>
                <div className="text-3xl font-bold text-yellow-600">347</div>
                <div className="text-sm text-gray-600">Factures</div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="mb-4 font-semibold">Méthodes de paiement populaires</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 text-center rounded bg-gray-50">
                  <div className="font-semibold">Carte</div>
                  <div className="text-sm text-gray-600">45%</div>
                </div>
                <div className="p-3 text-center rounded bg-gray-50">
                  <div className="font-semibold">Mobile</div>
                  <div className="text-sm text-gray-600">35%</div>
                </div>
                <div className="p-3 text-center rounded bg-gray-50">
                  <div className="font-semibold">Virement</div>
                  <div className="text-sm text-gray-600">20%</div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="p-8 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100">
            <h3 className="mb-6 text-2xl font-bold text-indigo-900">{currentSection.title}</h3>
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="space-y-4">
                {currentSection.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="px-6 py-2 mt-6 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700">
                Voir plus
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="demo" className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute rounded-full top-1/4 right-1/4 w-96 h-96 bg-blue-400/5 filter blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 left-1/4 w-96 h-96 bg-purple-400/5 filter blur-3xl animate-pulse"></div>
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
            <Eye className="w-4 h-4 mr-2 text-blue-300" />
            <span className="text-sm font-medium text-blue-200">Interface SmartAcademie</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Découvrez nos interfaces intuitives
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-blue-100">
            Explorez les différents modules de SmartAcademie et découvrez comment notre plateforme simplifie la gestion scolaire
          </p>
        </div>

        {/* Demo Interface */}
       
      </div>

      {/* Registration Modal */}
    
    </section>
  );
};

export default Demo;