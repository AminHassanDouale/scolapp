'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Target,
  ChevronRight,
  Check,
  Star,
  ArrowRight,
  Zap,
  Globe,
  Lock,
  Database,
  Smartphone,
  Cloud,
  Award,
  TrendingUp,
  Filter,
  X,
  LucideIcon
} from 'lucide-react';
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";

interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

interface ModuleData {
  id: string;
  icon: LucideIcon;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  gradient: string;
  modules: string[];
  stats: { [key: string]: string };
}

interface TechFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ModulesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const categories: Category[] = [
    { id: 'all', name: 'Tous les modules', icon: Target },
    { id: 'academic', name: 'Académique', icon: BookOpen },
    { id: 'management', name: 'Gestion', icon: Users },
    { id: 'financial', name: 'Finance', icon: CreditCard },
    { id: 'communication', name: 'Communication', icon: MessageSquare },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'system', name: 'Système', icon: Settings }
  ];

  const modules: ModuleData[] = [
    {
      id: 'student-management',
      icon: Users,
      title: "Gestion des Étudiants",
      category: 'management',
      description: "Système complet de gestion des profils étudiants avec suivi académique détaillé",
      longDescription: "Module central pour la gestion complète des étudiants incluant les profils détaillés, l'historique académique, le suivi des présences, la gestion des tuteurs et l'archivage des données. Permet une vue 360° de chaque étudiant.",
      features: [
        "Profils complets avec photos",
        "Historique académique détaillé", 
        "Gestion des tuteurs et contacts",
        "Suivi des présences automatisé",
        "Documents et certificats",
        "Rapports personnalisés"
      ],
      benefits: [
        "Accès rapide aux informations",
        "Meilleur suivi individuel",
        "Communication facilitée",
        "Conformité administrative"
      ],
      gradient: "from-blue-500 to-cyan-500",
      modules: ["Inscriptions", "Profils", "Tuteurs", "Historique"],
      stats: { users: "5000+", satisfaction: "98%" }
    },
    {
      id: 'teacher-portal',
      icon: GraduationCap,
      title: "Portail Enseignants",
      category: 'academic',
      description: "Interface dédiée aux enseignants pour la gestion des classes et évaluations",
      longDescription: "Plateforme complète permettant aux enseignants de gérer leurs classes, noter les étudiants, créer des examens, suivre les présences et communiquer avec les parents. Interface intuitive adaptée aux besoins pédagogiques.",
      features: [
        "Gestion des classes assignées",
        "Saisie de notes en ligne",
        "Création d'examens personnalisés",
        "Suivi des présences par cours",
        "Planning et emploi du temps",
        "Communication avec parents"
      ],
      benefits: [
        "Gain de temps administratif",
        "Suivi pédagogique amélioré",
        "Communication directe",
        "Flexibilité d'enseignement"
      ],
      gradient: "from-purple-500 to-pink-500",
      modules: ["Classes", "Notes", "Examens", "Planning"],
      stats: { users: "500+", satisfaction: "96%" }
    },
    {
      id: 'financial-system',
      icon: CreditCard,
      title: "Système Financier",
      category: 'financial',
      description: "Gestion complète des finances avec paiements automatisés et reporting",
      longDescription: "Solution financière intégrée pour la gestion des frais scolaires, paiements, factures et budgets. Inclut le suivi des échéances, la réconciliation bancaire et les rapports financiers détaillés.",
      features: [
        "Gestion des frais scolaires",
        "Paiements en ligne sécurisés",
        "Facturation automatisée",
        "Suivi des échéances",
        "Rapports financiers avancés",
        "Réconciliation bancaire"
      ],
      benefits: [
        "Réduction des impayés",
        "Automatisation des processus",
        "Transparence financière",
        "Meilleur cash-flow"
      ],
      gradient: "from-green-500 to-emerald-500",
      modules: ["Paiements", "Factures", "Frais", "Budgets"],
      stats: { processing: "1M+ DJF/mois", accuracy: "99.9%" }
    },
    {
      id: 'academic-management',
      icon: BookOpen,
      title: "Gestion Académique",
      category: 'academic',
      description: "Organisation de la structure académique: programmes, niveaux et matières",
      longDescription: "Module central pour structurer l'organisation académique avec la gestion des programmes d'études, niveaux scolaires, classes, sections et matières. Permet une organisation cohérente et évolutive.",
      features: [
        "Structure des programmes",
        "Gestion des niveaux scolaires",
        "Organisation des classes",
        "Attribution des matières",
        "Coefficients et pondérations",
        "Calendrier académique"
      ],
      benefits: [
        "Structure claire et cohérente",
        "Évolutivité du système",
        "Standardisation des processus",
        "Facilité de navigation"
      ],
      gradient: "from-orange-500 to-red-500",
      modules: ["Programmes", "Niveaux", "Classes", "Matières"],
      stats: { programs: "50+", subjects: "200+" }
    },
    {
      id: 'advanced-reports',
      icon: BarChart3,
      title: "Rapports Avancés",
      category: 'analytics',
      description: "Analytics en temps réel avec tableaux de bord interactifs",
      longDescription: "Système d'analytics avancé offrant des rapports détaillés, des tableaux de bord interactifs et des analyses prédictives pour une prise de décision éclairée basée sur les données.",
      features: [
        "Tableaux de bord interactifs",
        "Rapports personnalisables",
        "Analytics en temps réel",
        "Analyses prédictives",
        "Export multi-formats",
        "Alertes automatiques"
      ],
      benefits: [
        "Décisions basées sur les données",
        "Identification des tendances",
        "Optimisation des performances",
        "Reporting automatisé"
      ],
      gradient: "from-indigo-500 to-purple-500",
      modules: ["Analytics", "Exports", "Statistiques", "KPI"],
      stats: { reports: "1000+/mois", insights: "Real-time" }
    },
    {
      id: 'scheduling',
      icon: Calendar,
      title: "Emplois du Temps",
      category: 'academic',
      description: "Planification automatique et optimisation des calendriers",
      longDescription: "Solution intelligente de planification des emplois du temps avec algorithmes d'optimisation, gestion des contraintes et synchronisation en temps réel pour tous les acteurs.",
      features: [
        "Planification automatique",
        "Gestion des contraintes",
        "Optimisation des créneaux",
        "Synchronisation temps réel",
        "Gestion des remplacements",
        "Calendrier partagé"
      ],
      benefits: [
        "Optimisation des ressources",
        "Réduction des conflits",
        "Flexibilité de planification",
        "Synchronisation globale"
      ],
      gradient: "from-pink-500 to-rose-500",
      modules: ["Planning", "Calendrier", "Événements", "Horaires"],
      stats: { schedules: "500+", efficiency: "95%" }
    },
    {
      id: 'examinations',
      icon: ClipboardCheck,
      title: "Examens & Évaluations",
      category: 'academic',
      description: "Système complet d'évaluation avec création automatisée de bulletins",
      longDescription: "Plateforme d'évaluation complète permettant la création d'examens, la saisie de notes, le calcul automatique de moyennes et la génération automatisée de bulletins et relevés de notes.",
      features: [
        "Création d'examens en ligne",
        "Saisie de notes simplifiée",
        "Calculs automatiques",
        "Génération de bulletins",
        "Système de notation flexible",
        "Historique des évaluations"
      ],
      benefits: [
        "Processus d'évaluation fluide",
        "Réduction des erreurs",
        "Communication transparente",
        "Archivage automatique"
      ],
      gradient: "from-teal-500 to-green-500",
      modules: ["Examens", "Notes", "Bulletins", "Résultats"],
      stats: { exams: "10K+/an", accuracy: "99.8%" }
    },
    {
      id: 'attendance',
      icon: UserCheck,
      title: "Présences",
      category: 'management',
      description: "Suivi automatisé des présences avec notifications temps réel",
      longDescription: "Système de pointage avancé avec reconnaissance biométrique, notifications automatiques aux parents et rapports détaillés de présence pour un suivi optimal des étudiants.",
      features: [
        "Pointage digital/biométrique",
        "Notifications automatiques",
        "Rapports de présence",
        "Suivi des retards",
        "Justifications d'absence",
        "Statistiques individuelles"
      ],
      benefits: [
        "Suivi précis et automatisé",
        "Communication immédiate",
        "Réduction de l'absentéisme",
        "Conformité réglementaire"
      ],
      gradient: "from-yellow-500 to-orange-500",
      modules: ["Pointage", "Absences", "Retards", "Rapports"],
      stats: { accuracy: "99.9%", notifications: "Real-time" }
    },
    {
      id: 'communications',
      icon: MessageSquare,
      title: "Communications",
      category: 'communication',
      description: "Hub de communication multicanal intégré",
      longDescription: "Centre de communication unifié permettant l'envoi de SMS, notifications push, emails et messages internes avec gestion des groupes et historique complet des échanges.",
      features: [
        "SMS automatiques",
        "Notifications push",
        "Messagerie interne",
        "Emails personnalisés",
        "Groupes de diffusion",
        "Historique des communications"
      ],
      benefits: [
        "Communication centralisée",
        "Engagement amélioré",
        "Réactivité accrue",
        "Traçabilité complète"
      ],
      gradient: "from-blue-600 to-indigo-600",
      modules: ["SMS", "Notifications", "Messages", "Alertes"],
      stats: { messages: "50K+/mois", delivery: "98%" }
    },
    {
      id: 'security',
      icon: Shield,
      title: "Sécurité & Accès",
      category: 'system',
      description: "Gestion granulaire des rôles et sécurité renforcée",
      longDescription: "Système de sécurité multicouche avec gestion fine des permissions, authentification à deux facteurs, audit trail complet et protection des données sensibles.",
      features: [
        "Gestion des rôles granulaire",
        "Authentification 2FA",
        "Journal d'audit complet",
        "Chiffrement des données",
        "Contrôle d'accès avancé",
        "Monitoring sécurité"
      ],
      benefits: [
        "Sécurité maximale",
        "Conformité RGPD",
        "Traçabilité complète",
        "Contrôle granulaire"
      ],
      gradient: "from-gray-600 to-gray-800",
      modules: ["Rôles", "Permissions", "Logs", "Sécurité"],
      stats: { uptime: "99.9%", security: "Grade A+" }
    },
    {
      id: 'documents',
      icon: FileText,
      title: "Gestion Documentaire",
      category: 'management',
      description: "Stockage cloud sécurisé avec indexation intelligente",
      longDescription: "Solution de gestion documentaire complète avec stockage cloud sécurisé, indexation automatique, versioning et partage contrôlé pour tous les documents administratifs et pédagogiques.",
      features: [
        "Stockage cloud sécurisé",
        "Indexation automatique",
        "Versioning des documents",
        "Partage contrôlé",
        "Recherche avancée",
        "Archivage automatique"
      ],
      benefits: [
        "Accès facilité aux documents",
        "Sécurité renforcée",
        "Gain d'espace physique",
        "Collaboration améliorée"
      ],
      gradient: "from-cyan-500 to-blue-500",
      modules: ["Fichiers", "Archives", "Téléchargements", "Stockage"],
      stats: { storage: "10TB+", files: "100K+" }
    },
    {
      id: 'administration',
      icon: Settings,
      title: "Administration Système",
      category: 'system',
      description: "Configuration avancée et maintenance automatisée",
      longDescription: "Interface d'administration complète pour la configuration système, maintenance automatisée, gestion des sauvegardes et monitoring des performances en temps réel.",
      features: [
        "Configuration centralisée",
        "Maintenance automatisée",
        "Gestion des sauvegardes",
        "Monitoring performances",
        "Mise à jour système",
        "Support technique intégré"
      ],
      benefits: [
        "Système toujours optimisé",
        "Prévention des pannes",
        "Support réactif",
        "Évolutivité garantie"
      ],
      gradient: "from-purple-600 to-pink-600",
      modules: ["Paramètres", "Configuration", "Maintenance", "Sauvegarde"],
      stats: { uptime: "99.9%", performance: "A+" }
    }
  ];

  const filteredModules = selectedCategory === 'all' 
    ? modules 
    : modules.filter(module => module.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring" as const, damping: 25, stiffness: 300 }
    },
    exit: { opacity: 0, scale: 0.8 }
  };

  const techFeatures: TechFeature[] = [
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Architecture cloud scalable avec haute disponibilité"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Interface responsive optimisée pour tous les appareils"
    },
    {
      icon: Lock,
      title: "Sécurité Avancée",
      description: "Chiffrement end-to-end et conformité RGPD"
    },
    {
      icon: Database,
      title: "Big Data Ready",
      description: "Traitement de millions d'enregistrements en temps réel"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Navbar />
      
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
            <Zap className="w-5 h-5 mr-2 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">15+ Modules Intégrés</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text"
          >
            Découvrez tous nos modules
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto mb-12 text-xl text-gray-600"
          >
            Une solution complète et intégrée pour la gestion moderne des établissements scolaires. 
            Chaque module est conçu pour optimiser vos processus et améliorer l&apos;expérience utilisateur.
          </motion.p>

          {/* Stats */}
       
        </div>
      </motion.section>

      {/* Filter Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="sticky top-0 z-40 py-4 border-b border-gray-200 bg-white/80 backdrop-blur-md"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center px-4 py-2 space-x-2 text-white bg-blue-600 rounded-lg md:hidden"
              >
                <Filter className="w-4 h-4" />
                <span>Filtres</span>
              </button>
              
              <div className={`${isFilterOpen ? 'flex' : 'hidden'} md:flex flex-wrap gap-2`}>
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setIsFilterOpen(false);
                      }}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="whitespace-nowrap">{category.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            
            <div className="text-sm text-gray-600">
              {filteredModules.length} module{filteredModules.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Modules Grid */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <motion.div
                    key={module.id}
                    variants={itemVariants}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg cursor-pointer group rounded-2xl hover:shadow-2xl hover:border-blue-200"
                    onClick={() => setSelectedModule(module)}
                  >
                    {/* Header */}
                    <div className="p-6 pb-4">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${module.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                        {module.title}
                      </h3>
                      
                      <p className="mb-4 text-sm leading-relaxed text-gray-600">
                        {module.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between mb-4">
                        {Object.entries(module.stats).map(([key, value], idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-sm font-semibold text-blue-600">{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Module Tags */}
                    <div className="px-6 pb-4">
                      <div className="flex flex-wrap gap-1">
                        {module.modules.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-2 py-1 text-xs font-medium text-gray-600 transition-colors bg-gray-100 rounded-md group-hover:bg-blue-50 group-hover:text-blue-700"
                          >
                            {tag}
                          </span>
                        ))}
                        {module.modules.length > 3 && (
                          <span className="inline-block px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded-md">
                            +{module.modules.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 transition-colors bg-gray-50 group-hover:bg-blue-50">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 group-hover:text-blue-600">
                          En savoir plus
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-400 transition-all group-hover:text-blue-600 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16"
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
              <span className="text-sm font-medium text-gray-700">Solution Complète</span>
            </motion.div>
            
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Prêt à transformer votre établissement ?
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
              Rejoignez plus de 500 établissements qui font déjà confiance à SmartAcademie 
              pour moderniser leur gestion scolaire.
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
                Essai gratuit 30 jours
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Module Detail Modal */}
      <AnimatePresence>
        {selectedModule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedModule(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 flex items-center justify-between p-6 bg-white border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${selectedModule.gradient} text-white`}>
                    <selectedModule.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedModule.title}</h2>
                    <p className="text-sm text-gray-600">Module {selectedModule.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="p-2 transition-colors rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">Description détaillée</h3>
                  <p className="leading-relaxed text-gray-600">{selectedModule.longDescription}</p>
                </div>

                {/* Features & Benefits Grid */}
                <div className="grid gap-8 mb-8 md:grid-cols-2">
                  {/* Features */}
                  <div>
                    <h4 className="flex items-center mb-4 text-lg font-semibold text-gray-900">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      Fonctionnalités principales
                    </h4>
                    <ul className="space-y-3">
                      {selectedModule.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="flex items-center mb-4 text-lg font-semibold text-gray-900">
                      <Star className="w-5 h-5 mr-2 text-yellow-500" />
                      Avantages clés
                    </h4>
                    <ul className="space-y-3">
                      {selectedModule.benefits.map((benefit, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* All Module Tags */}
                <div className="mb-8">
                  <h4 className="mb-4 text-lg font-semibold text-gray-900">Sous-modules inclus</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedModule.modules.map((module, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="inline-block px-3 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-lg"
                      >
                        {module}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="p-6 mb-8 bg-gray-50 rounded-xl">
                  <h4 className="mb-4 text-lg font-semibold text-gray-900">Statistiques</h4>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {Object.entries(selectedModule.stats).map(([key, value], idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold text-blue-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center flex-1 px-6 py-3 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl"
                  >
                    <span>Tester ce module</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-6 py-3 font-semibold text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:bg-gray-50"
                  >
                    Documentation
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Technical Features Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Technologie de pointe
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Nos modules sont construits avec les dernières technologies pour garantir 
              performance, sécurité et évolutivité.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {techFeatures.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 text-center transition-all duration-300 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg"
              >
                <div className="inline-flex p-4 mb-4 text-blue-600 bg-blue-100 rounded-2xl">
                  <tech.icon className="w-8 h-8" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">{tech.title}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ModulesPage;