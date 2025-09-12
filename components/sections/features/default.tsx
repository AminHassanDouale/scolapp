import React from 'react';
import Link from 'next/link';

import { 
  Users, 
  GraduationCap, 
  CreditCard, 
  BarChart3, 
  BookOpen, 
  Calendar, 
  ClipboardCheck, 
  MessageSquare,
  Shield,
  Settings,
  FileText,
  UserCheck,
  Target 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestion des Étudiants",
      description: "Profils complets, suivi académique, historique des notes et présences",
      gradient: "from-blue-500 to-cyan-500",
      modules: ["Inscriptions", "Profils", "Tuteurs", "Historique"]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Portail Enseignants",
      description: "Gestion des classes, notes, emplois du temps et évaluations",
      gradient: "from-purple-500 to-pink-500",
      modules: ["Classes", "Notes", "Examens", "Planning"]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Système Financier",
      description: "Paiements, factures, échéances et rapports financiers complets",
      gradient: "from-green-500 to-emerald-500",
      modules: ["Paiements", "Factures", "Frais", "Budgets"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Gestion Académique",
      description: "Programmes, niveaux, classes, sections et matières",
      gradient: "from-orange-500 to-red-500",
      modules: ["Programmes", "Niveaux", "Classes", "Matières"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Rapports Avancés",
      description: "Analyses détaillées et statistiques en temps réel",
      gradient: "from-indigo-500 to-purple-500",
      modules: ["Analytics", "Exports", "Statistiques", "KPI"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Emplois du Temps",
      description: "Planification automatique et gestion des calendriers",
      gradient: "from-pink-500 to-rose-500",
      modules: ["Planning", "Calendrier", "Événements", "Horaires"]
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Examens & Évaluations",
      description: "Organisation d'examens et gestion des résultats",
      gradient: "from-teal-500 to-green-500",
      modules: ["Examens", "Notes", "Bulletins", "Résultats"]
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Présences",
      description: "Suivi automatisé des présences et absences",
      gradient: "from-yellow-500 to-orange-500",
      modules: ["Pointage", "Absences", "Retards", "Rapports"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Communications",
      description: "SMS, notifications et messages entre utilisateurs",
      gradient: "from-blue-600 to-indigo-600",
      modules: ["SMS", "Notifications", "Messages", "Alertes"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité & Accès",
      description: "Gestion des rôles, permissions et journal d'activité",
      gradient: "from-gray-600 to-gray-800",
      modules: ["Rôles", "Permissions", "Logs", "Sécurité"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Documents",
      description: "Gestion centralisée des fichiers et documents",
      gradient: "from-cyan-500 to-blue-500",
      modules: ["Fichiers", "Archives", "Téléchargements", "Stockage"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Administration",
      description: "Paramètres système et configuration complète",
      gradient: "from-purple-600 to-pink-600",
      modules: ["Paramètres", "Configuration", "Maintenance", "Sauvegarde"]
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-blue-100 rounded-full">
            <Target className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Fonctionnalités Complètes</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text">
            Tous les outils pour gérer votre établissement
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            ScolApp offre une suite complète de modules intégrés pour une gestion scolaire efficace et moderne
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-300 transform bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                {feature.title}
              </h3>
              
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>

              {/* Module Tags */}
              <div className="flex flex-wrap gap-1">
                {feature.modules.map((module, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2 py-1 text-xs font-medium text-gray-600 transition-colors bg-gray-100 rounded-md group-hover:bg-blue-50 group-hover:text-blue-700"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="p-8 border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Plus de 15 modules intégrés dans une seule plateforme
            </h3>
            <p className="max-w-2xl mx-auto mb-6 text-gray-600">
              Éliminez la complexité de multiples systèmes. ScolApp centralise toute la gestion de votre établissement.
            </p>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;