import React from 'react';
import { BookOpen, Users, BarChart3, Globe, Shield, HeadphonesIcon, Target } from "lucide-react";

const Items = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Gestion Académique",
      description: "Gérez facilement les cours, notes, emplois du temps et bulletins scolaires",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Portail Parents",
      description: "Communication directe avec les familles via SMS et notifications",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Rapports Avancés",
      description: "Analyses détaillées des performances et statistiques en temps réel",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Interface Bilingue",
      description: "Support complet français/arabe adapté au contexte djiboutien",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Sécurité Renforcée",
      description: "Données protégées et conformes aux normes internationales",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: "Support 24/7",
      description: "Équipe technique locale disponible pendant les heures scolaires",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full mb-6">
            <Target className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">Fonctionnalités</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Tout ce dont votre école a besoin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une suite complète d'outils conçus spécialement pour les établissements scolaires djiboutiens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Items;