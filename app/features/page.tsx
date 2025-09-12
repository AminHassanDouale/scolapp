'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Globe, 
  Shield, 
  Headphones, 
  Target,
  GraduationCap,
  CreditCard,
  Calendar,
  ClipboardCheck,
  MessageSquare,
  Settings,
  FileText,
  UserCheck,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Award,
  TrendingUp
} from "lucide-react";

const FeaturesPage = () => {
  const heroFeatures = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Gestion Académique",
      description: "Gérez facilement les cours, notes, emplois du temps et bulletins scolaires",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Portail Parents",
      description: "Communication directe avec les familles via SMS et notifications",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Rapports Avancés",
      description: "Analyses détaillées des performances et statistiques en temps réel",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Interface Bilingue",
      description: "Support complet français/arabe adapté au contexte djiboutien",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité Renforcée",
      description: "Données protégées et conformes aux normes internationales",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Support 24/7",
      description: "Équipe technique locale disponible pendant les heures scolaires",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const detailedFeatures = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Gestion des Étudiants",
      description: "Système complet de gestion des profils étudiants avec suivi académique détaillé",
      features: [
        "Profils complets avec photos",
        "Historique académique détaillé",
        "Gestion des tuteurs et contacts",
        "Suivi des présences automatisé"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Portail Enseignants",
      description: "Interface dédiée aux enseignants pour la gestion des classes et évaluations",
      features: [
        "Gestion des classes assignées",
        "Saisie de notes en ligne",
        "Création d'examens personnalisés",
        "Planning et emploi du temps"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Système Financier",
      description: "Gestion complète des finances avec paiements automatisés et reporting",
      features: [
        "Gestion des frais scolaires",
        "Paiements en ligne sécurisés",
        "Facturation automatisée",
        "Rapports financiers avancés"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Emplois du Temps",
      description: "Planification automatique et optimisation des calendriers",
      features: [
        "Planification automatique",
        "Gestion des contraintes",
        "Optimisation des créneaux",
        "Synchronisation temps réel"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: "Examens & Évaluations",
      description: "Système complet d'évaluation avec création automatisée de bulletins",
      features: [
        "Création d'examens en ligne",
        "Saisie de notes simplifiée",
        "Calculs automatiques",
        "Génération de bulletins"
      ],
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Communications",
      description: "Hub de communication multicanal intégré",
      features: [
        "SMS automatiques",
        "Notifications push",
        "Messagerie interne",
        "Emails personnalisés"
      ],
      gradient: "from-blue-600 to-indigo-600"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Amélioration des performances",
      description: "Augmentation de 40% de l'efficacité administrative"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Satisfaction garantie",
      description: "98% de taux de satisfaction client"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité maximale",
      description: "Conformité RGPD et chiffrement end-to-end"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Déploiement rapide",
      description: "Mise en place en moins de 48 heures"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Navigation Placeholder */}
      <nav className="bg-white border-b shadow-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-blue-600">ScolApp</div>
            <div className="hidden space-x-8 md:flex">
              <a href="/" className="text-gray-700 hover:text-blue-600">Accueil</a>
              <a href="/features" className="font-medium text-blue-600">Fonctionnalités</a>
              <a href="/pricing" className="text-gray-700 hover:text-blue-600">Tarifs</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600">À propos</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative pt-20 pb-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-6 py-3 mb-8 rounded-full shadow-lg bg-white/80 backdrop-blur-sm"
          >
            <Target className="w-5 h-5 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Fonctionnalités Complètes</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text"
          >
            Tout ce dont votre école a besoin
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto mb-12 text-xl text-gray-600"
          >
            Une suite complète d&apos;outils conçus spécialement pour les établissements scolaires djiboutiens. 
            Modernisez votre gestion avec notre plateforme tout-en-un.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Features Grid */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl hover:border-blue-200"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Fonctionnalités détaillées
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Découvrez en détail tous les modules qui composent ScolApp
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {detailedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-start p-8 space-y-4 transition-all duration-300 md:flex-row md:space-y-0 md:space-x-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg"
              >
                <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="mb-4 leading-relaxed text-gray-600">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Pourquoi choisir ScolApp ?
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Des résultats concrets pour votre établissement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
              >
                <div className="inline-flex p-4 mb-4 text-blue-600 bg-blue-100 rounded-2xl">
                  {benefit.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="p-12 border border-blue-100 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/80"
            >
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Démo Gratuite</span>
            </motion.div>
            
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Prêt à découvrir ScolApp ?
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
              Réservez une démonstration personnalisée et voyez comment nos fonctionnalités 
              peuvent transformer la gestion de votre établissement.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl"
              >
                <span>Demander une démo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 font-semibold text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:bg-gray-50"
              >
                Voir tous les modules
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-16 text-white bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 text-2xl font-bold text-blue-400">ScolApp</div>
            <p className="max-w-2xl mx-auto text-gray-400">
              La solution de gestion scolaire moderne adaptée aux établissements djiboutiens.
            </p>
            <div className="pt-8 mt-8 border-t border-gray-800">
              <p className="text-gray-500">&copy; 2025 ScolApp. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FeaturesPage;