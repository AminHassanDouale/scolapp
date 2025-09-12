'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Book,
  Code,
  Video,
  Download,
  ExternalLink,
  ChevronRight,
  Play,
  FileText,
  Users,
  Settings,
  CreditCard,
  Shield,
  Smartphone,
  Globe,
  BookOpen,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Clock
} from "lucide-react";

interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  articles: DocArticle[];
}

interface DocArticle {
  id: string;
  title: string;
  description: string;
  readTime: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  tags: string[];
}

const DocsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('all');

  const docSections: DocSection[] = [
    {
      id: 'getting-started',
      title: 'Démarrage',
      description: 'Premiers pas avec SmartAcademie',
      icon: <BookOpen className="w-6 h-6" />,
      articles: [
        {
          id: 'setup',
          title: 'Configuration initiale',
          description: 'Guide complet pour configurer votre établissement',
          readTime: '10 min',
          difficulty: 'Débutant',
          tags: ['configuration', 'setup']
        },
        {
          id: 'first-steps',
          title: 'Premiers pas',
          description: 'Les actions essentielles pour bien commencer',
          readTime: '5 min',
          difficulty: 'Débutant',
          tags: ['basics', 'tutorial']
        },
        {
          id: 'user-roles',
          title: 'Gestion des rôles utilisateur',
          description: 'Comprendre et configurer les permissions',
          readTime: '8 min',
          difficulty: 'Intermédiaire',
          tags: ['users', 'permissions']
        }
      ]
    },
    {
      id: 'student-management',
      title: 'Gestion des Étudiants',
      description: 'Tout sur la gestion des profils étudiants',
      icon: <Users className="w-6 h-6" />,
      articles: [
        {
          id: 'add-students',
          title: 'Ajouter des étudiants',
          description: 'Méthodes d\'inscription et d\'import en masse',
          readTime: '12 min',
          difficulty: 'Débutant',
          tags: ['students', 'enrollment']
        },
        {
          id: 'student-profiles',
          title: 'Profils détaillés',
          description: 'Gérer les informations complètes des étudiants',
          readTime: '15 min',
          difficulty: 'Intermédiaire',
          tags: ['profiles', 'data-management']
        },
        {
          id: 'attendance-tracking',
          title: 'Suivi des présences',
          description: 'Système de pointage et rapports d\'assiduité',
          readTime: '10 min',
          difficulty: 'Intermédiaire',
          tags: ['attendance', 'tracking']
        }
      ]
    },
    {
      id: 'academic',
      title: 'Gestion Académique',
      description: 'Notes, examens et bulletins',
      icon: <Book className="w-6 h-6" />,
      articles: [
        {
          id: 'grading-system',
          title: 'Système de notation',
          description: 'Configuration et utilisation du système de notes',
          readTime: '18 min',
          difficulty: 'Intermédiaire',
          tags: ['grades', 'assessment']
        },
        {
          id: 'exam-creation',
          title: 'Création d\'examens',
          description: 'Concevoir et planifier vos évaluations',
          readTime: '20 min',
          difficulty: 'Avancé',
          tags: ['exams', 'evaluation']
        },
        {
          id: 'report-cards',
          title: 'Bulletins scolaires',
          description: 'Génération automatique des bulletins',
          readTime: '12 min',
          difficulty: 'Intermédiaire',
          tags: ['reports', 'bulletins']
        }
      ]
    },
    {
      id: 'financial',
      title: 'Gestion Financière',
      description: 'Facturation et paiements',
      icon: <CreditCard className="w-6 h-6" />,
      articles: [
        {
          id: 'fee-management',
          title: 'Gestion des frais',
          description: 'Configuration des frais scolaires',
          readTime: '15 min',
          difficulty: 'Intermédiaire',
          tags: ['fees', 'billing']
        },
        {
          id: 'payment-processing',
          title: 'Traitement des paiements',
          description: 'Gérer les paiements en ligne et hors ligne',
          readTime: '12 min',
          difficulty: 'Avancé',
          tags: ['payments', 'transactions']
        },
        {
          id: 'financial-reports',
          title: 'Rapports financiers',
          description: 'Analyses et tableaux de bord financiers',
          readTime: '10 min',
          difficulty: 'Intermédiaire',
          tags: ['reports', 'analytics']
        }
      ]
    },
    {
      id: 'api',
      title: 'API & Intégrations',
      description: 'Documentation technique',
      icon: <Code className="w-6 h-6" />,
      articles: [
        {
          id: 'api-overview',
          title: 'Vue d\'ensemble de l\'API',
          description: 'Introduction à l\'API SmartAcademie',
          readTime: '8 min',
          difficulty: 'Avancé',
          tags: ['api', 'integration']
        },
        {
          id: 'authentication',
          title: 'Authentification',
          description: 'Gestion des tokens et sécurité API',
          readTime: '15 min',
          difficulty: 'Avancé',
          tags: ['auth', 'security']
        },
        {
          id: 'webhooks',
          title: 'Webhooks',
          description: 'Configuration des notifications en temps réel',
          readTime: '12 min',
          difficulty: 'Avancé',
          tags: ['webhooks', 'notifications']
        }
      ]
    },
    {
      id: 'mobile',
      title: 'Application Mobile',
      description: 'Guide de l\'app mobile',
      icon: <Smartphone className="w-6 h-6" />,
      articles: [
        {
          id: 'mobile-setup',
          title: 'Installation et configuration',
          description: 'Télécharger et configurer l\'app mobile',
          readTime: '5 min',
          difficulty: 'Débutant',
          tags: ['mobile', 'setup']
        },
        {
          id: 'mobile-features',
          title: 'Fonctionnalités mobiles',
          description: 'Tour complet des fonctionnalités disponibles',
          readTime: '15 min',
          difficulty: 'Débutant',
          tags: ['mobile', 'features']
        },
        {
          id: 'offline-mode',
          title: 'Mode hors ligne',
          description: 'Utiliser SmartAcademie sans connexion',
          readTime: '8 min',
          difficulty: 'Intermédiaire',
          tags: ['mobile', 'offline']
        }
      ]
    }
  ];

  const quickLinks = [
    { title: 'Guide de démarrage rapide', icon: <Lightbulb className="w-4 h-4" />, time: '5 min' },
    { title: 'FAQ', icon: <BookOpen className="w-4 h-4" />, time: '2 min' },
    { title: 'Vidéos tutoriels', icon: <Video className="w-4 h-4" />, time: '25 min' },
    { title: 'Support technique', icon: <Settings className="w-4 h-4" />, time: '24/7' }
  ];

  const popularArticles = [
    { title: 'Configuration initiale', views: '12.5K', category: 'Démarrage' },
    { title: 'Ajouter des étudiants', views: '8.2K', category: 'Gestion' },
    { title: 'Système de notation', views: '6.8K', category: 'Académique' },
    { title: 'Installation mobile', views: '5.4K', category: 'Mobile' }
  ];

  const allArticles = docSections.flatMap(section => 
    section.articles.map(article => ({ ...article, sectionId: section.id, sectionTitle: section.title }))
  );

  const filteredArticles = allArticles.filter(article => {
    const matchesSection = selectedSection === 'all' || article.sectionId === selectedSection;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSection && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white border-b shadow-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-blue-600">SmartAcademie</div>
            <div className="hidden space-x-8 md:flex">
              <a href="/" className="text-gray-700 hover:text-blue-600">Accueil</a>
              <a href="/features" className="text-gray-700 hover:text-blue-600">Fonctionnalités</a>
              <a href="/pricing" className="text-gray-700 hover:text-blue-600">Tarifs</a>
              <a href="/docs" className="font-medium text-blue-600">Documentation</a>
              <a href="/faq" className="text-gray-700 hover:text-blue-600">FAQ</a>
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
        <div className="relative max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center px-6 py-3 mb-8 rounded-full shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <Book className="w-5 h-5 mr-2 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Documentation</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text"
              >
                Maîtrisez SmartAcademie
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mb-8 text-xl text-gray-600"
              >
                Guides détaillés, tutoriels et documentation technique pour tirer le meilleur parti de votre solution de gestion scolaire.
              </motion.p>

              {/* Search Bar */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
                <input
                  type="text"
                  placeholder="Rechercher dans la documentation..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="w-full py-4 pl-12 pr-4 text-lg bg-white border border-gray-200 shadow-lg rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </motion.div>
            </div>

            <div>
              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 bg-white shadow-xl rounded-2xl"
              >
                <h3 className="mb-4 text-lg font-bold text-gray-900">Accès rapide</h3>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-center justify-between w-full p-3 text-left transition-colors rounded-xl hover:bg-blue-50 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-blue-600">{link.icon}</div>
                        <span className="font-medium text-gray-900 group-hover:text-blue-600">
                          {link.title}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">{link.time}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Popular Articles */}
      <section className="py-12 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Articles populaires</h2>
            <p className="text-gray-600">Les guides les plus consultés par nos utilisateurs</p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-4 transition-all duration-300 border border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 rounded-xl group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.views} vues</span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Documentation */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/4"
            >
              <div className="sticky p-6 bg-white shadow-lg rounded-2xl top-6">
                <h3 className="mb-4 text-lg font-bold text-gray-900">Sections</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedSection('all')}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center space-x-3 ${
                      selectedSection === 'all'
                        ? 'bg-blue-100 text-blue-600 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Globe className="w-5 h-5" />
                    <span className="text-sm font-medium">Toutes les sections</span>
                  </button>
                  {docSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setSelectedSection(section.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center space-x-3 ${
                        selectedSection === section.id
                          ? 'bg-blue-100 text-blue-600 border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {section.icon}
                      <span className="text-sm font-medium">{section.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Articles List */}
            <div className="lg:w-3/4">
              {selectedSection === 'all' ? (
                // All Sections View
                <div className="space-y-12">
                  {docSections.map((section, sectionIndex) => (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center mb-6 space-x-3">
                        <div className="p-2 text-blue-600 bg-blue-100 rounded-xl">
                          {section.icon}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                          <p className="text-gray-600">{section.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {section.articles.map((article, index) => (
                          <motion.div
                            key={article.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg cursor-pointer rounded-2xl hover:shadow-xl hover:border-blue-200 group"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                                {article.title}
                              </h3>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                article.difficulty === 'Débutant' 
                                  ? 'bg-green-100 text-green-700'
                                  : article.difficulty === 'Intermédiaire'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-red-100 text-red-700'
                              }`}>
                                {article.difficulty}
                              </span>
                            </div>
                            <p className="mb-4 text-sm text-gray-600">{article.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <Clock className="w-4 h-4" />
                                <span>{article.readTime}</span>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {article.tags.slice(0, 2).map((tag, idx) => (
                                  <span key={idx} className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-md">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Filtered Articles View
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900">
                      {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} trouvé{filteredArticles.length > 1 ? 's' : ''}
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    {filteredArticles.map((article, index) => (
                      <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg cursor-pointer rounded-2xl hover:shadow-xl hover:border-blue-200 group"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                              {article.title}
                            </h3>
                            <p className="text-sm text-blue-600">{article.sectionTitle}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            article.difficulty === 'Débutant' 
                              ? 'bg-green-100 text-green-700'
                              : article.difficulty === 'Intermédiaire'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {article.difficulty}
                          </span>
                        </div>
                        <p className="mb-4 text-gray-600">{article.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {article.tags.map((tag, idx) => (
                              <span key={idx} className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-md">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {filteredArticles.length === 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-12 text-center bg-white rounded-2xl"
                      >
                        <Book className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                          Aucun article trouvé
                        </h3>
                        <p className="text-gray-600">
                          Essayez de modifier votre recherche ou de sélectionner une autre section.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Autres ressources
            </h2>
            <p className="text-xl text-gray-600">
              Explorez nos autres formats d&apos;apprentissage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 text-center transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-lg group cursor-pointer"
            >
              <div className="inline-flex p-4 mb-6 text-blue-600 bg-blue-100 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Video className="w-8 h-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Vidéos Tutoriels</h3>
              <p className="mb-4 text-gray-600">
                Plus de 25 vidéos explicatives pour apprendre visuellement
              </p>
              <button className="flex items-center justify-center mx-auto space-x-1 text-blue-600 font-medium hover:text-blue-700">
                <span>Regarder</span>
                <Play className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 text-center transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg group cursor-pointer"
            >
              <div className="inline-flex p-4 mb-6 text-green-600 bg-green-100 rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Guides PDF</h3>
              <p className="mb-4 text-gray-600">
                Téléchargez nos guides complets pour une consultation hors ligne
              </p>
              <button className="flex items-center justify-center mx-auto space-x-1 text-green-600 font-medium hover:text-green-700">
                <span>Télécharger</span>
                <Download className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 text-center transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg group cursor-pointer"
            >
              <div className="inline-flex p-4 mb-6 text-purple-600 bg-purple-100 rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">API Documentation</h3>
              <p className="mb-4 text-gray-600">
                Documentation technique complète pour les développeurs
              </p>
              <button className="flex items-center justify-center mx-auto space-x-1 text-purple-600 font-medium hover:text-purple-700">
                <span>Explorer</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
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
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Besoin d&apos;aide personnalisée ?</span>
            </motion.div>
            
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Formation et support dédiés
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
              Notre équipe propose des formations personnalisées et un support technique 
              pour vous accompagner dans votre maîtrise de SmartAcademie.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl"
              >
                <span>Réserver une formation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 font-semibold text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:bg-gray-50"
              >
                Contacter le support
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-16 text-white bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 text-2xl font-bold text-blue-400">SmartAcademie</div>
            <p className="max-w-2xl mx-auto text-gray-400">
              La solution de gestion scolaire moderne adaptée aux établissements djiboutiens.
            </p>
            <div className="pt-8 mt-8 border-t border-gray-800">
              <p className="text-gray-500">&copy; 2025 SmartAcademie. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DocsPage;