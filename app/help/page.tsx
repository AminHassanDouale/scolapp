'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Book, 
  Video, 
  MessageCircle, 
  Phone, 
  ChevronRight,
  Download,
  Play,
  FileText,
  HelpCircle,
  Users,
  Settings,
  CreditCard,
  Shield,
  Lightbulb,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  User
} from "lucide-react";

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes les catégories', icon: Book },
    { id: 'getting-started', name: 'Démarrage', icon: Play },
    { id: 'students', name: 'Étudiants', icon: Users },
    { id: 'teachers', name: 'Enseignants', icon: User },
    { id: 'billing', name: 'Facturation', icon: CreditCard },
    { id: 'technical', name: 'Technique', icon: Settings },
    { id: 'security', name: 'Sécurité', icon: Shield }
  ];

  const popularArticles = [
    {
      id: 1,
      title: 'Comment démarrer avec SmartAcademie',
      category: 'getting-started',
      views: 1240,
      readTime: '5 min',
      excerpt: 'Guide complet pour configurer votre établissement sur SmartAcademie'
    },
    {
      id: 2,
      title: 'Gestion des inscriptions d\'étudiants',
      category: 'students',
      views: 980,
      readTime: '3 min',
      excerpt: 'Processus étape par étape pour inscrire de nouveaux étudiants'
    },
    {
      id: 3,
      title: 'Configuration du système de notes',
      category: 'teachers',
      views: 856,
      readTime: '7 min',
      excerpt: 'Comment configurer et utiliser le système de notation'
    },
    {
      id: 4,
      title: 'Résolution des problèmes de connexion',
      category: 'technical',
      views: 743,
      readTime: '4 min',
      excerpt: 'Solutions aux problèmes courants de connexion'
    },
    {
      id: 5,
      title: 'Comprendre votre facture',
      category: 'billing',
      views: 621,
      readTime: '6 min',
      excerpt: 'Détail des éléments de votre facture mensuelle'
    },
    {
      id: 6,
      title: 'Paramètres de sécurité recommandés',
      category: 'security',
      views: 534,
      readTime: '8 min',
      excerpt: 'Meilleures pratiques pour sécuriser votre compte'
    }
  ];

  const supportOptions = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Chat en direct',
      description: 'Discutez avec notre équipe support en temps réel',
      availability: 'Lun-Ven 8h-17h',
      responseTime: '< 2 minutes',
      button: 'Commencer le chat',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Support téléphonique',
      description: 'Appelez-nous pour une assistance immédiate',
      availability: '24/7 pour urgences',
      responseTime: 'Immédiat',
      button: 'Nous appeler',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Ticket de support',
      description: 'Créez un ticket pour un suivi détaillé',
      availability: 'Toujours disponible',
      responseTime: '< 24 heures',
      button: 'Créer un ticket',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const resources = [
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Vidéos tutorielles',
      count: '25+ vidéos',
      description: 'Apprenez visuellement avec nos tutoriels step-by-step'
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: 'Guides PDF',
      count: '15+ guides',
      description: 'Téléchargez nos guides détaillés pour une référence hors ligne'
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Documentation API',
      count: 'Complet',
      description: 'Documentation technique pour les développeurs'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Communauté',
      count: '500+ membres',
      description: 'Rejoignez notre communauté d\'utilisateurs'
    }
  ];

  const quickLinks = [
    'Comment réinitialiser mon mot de passe?',
    'Ajouter un nouvel enseignant',
    'Configurer les notifications SMS',
    'Exporter les données des étudiants',
    'Paramétrer l\'année scolaire',
    'Gérer les permissions utilisateurs'
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? popularArticles 
    : popularArticles.filter(article => article.category === selectedCategory);

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
              <a href="/about" className="text-gray-700 hover:text-blue-600">À propos</a>
              <a href="/help" className="font-medium text-blue-600">Aide</a>
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
        <div className="relative max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-6 py-3 mb-8 rounded-full shadow-lg bg-white/80 backdrop-blur-sm"
          >
            <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Centre d'Aide</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text"
          >
            Comment pouvons-nous vous aider ?
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-12 text-xl text-gray-600"
          >
            Trouvez des réponses, des guides et obtenez l&apos;aide dont vous avez besoin
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative max-w-2xl mx-auto"
          >
            <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
            <input
              type="text"
              placeholder="Rechercher dans l'aide..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-4 pl-12 pr-4 text-lg bg-white border border-gray-200 shadow-lg rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute px-6 font-medium text-white transition-all duration-300 right-2 top-2 bottom-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-lg"
            >
              Rechercher
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Actions rapides</h2>
            <p className="text-gray-600">Les questions les plus fréquemment posées</p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -2 }}
                className="p-4 text-left transition-all duration-300 border border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 rounded-xl group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 transition-colors group-hover:text-blue-600">
                    {link}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 transition-colors group-hover:text-blue-600" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories and Articles */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Categories Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/4"
            >
              <div className="sticky p-6 bg-white shadow-lg rounded-2xl top-6">
                <h3 className="mb-4 text-lg font-bold text-gray-900">Catégories</h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center space-x-3 ${
                          selectedCategory === category.id
                            ? 'bg-blue-100 text-blue-600 border border-blue-200'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Articles List */}
            <div className="lg:w-3/4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Articles populaires</h2>
                
                <div className="space-y-4">
                  {filteredArticles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg cursor-pointer rounded-2xl hover:shadow-xl group hover:border-blue-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                            {article.title}
                          </h3>
                          <p className="mb-4 text-sm text-gray-600">{article.excerpt}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{article.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{article.views} vues</span>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 ml-4 text-gray-400 transition-colors group-hover:text-blue-600" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Besoin d&apos;aide supplémentaire ?</h2>
            <p className="text-xl text-gray-600">Notre équipe support est là pour vous accompagner</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 text-center transition-all duration-300 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${option.gradient} text-white mb-6`}>
                  {option.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{option.title}</h3>
                <p className="mb-4 text-sm text-gray-600">{option.description}</p>
                <div className="mb-6 space-y-2">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Disponibilité:</span> {option.availability}
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Temps de réponse:</span> {option.responseTime}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl"
                >
                  {option.button}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Ressources d&apos;apprentissage</h2>
            <p className="text-xl text-gray-600">Explorez nos différentes ressources pour maîtriser SmartAcademie</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 text-center transition-all duration-300 bg-white shadow-lg cursor-pointer rounded-2xl hover:shadow-xl group"
              >
                <div className="inline-flex p-3 mb-4 text-blue-600 transition-transform duration-300 bg-blue-100 rounded-xl group-hover:scale-110">
                  {resource.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {resource.title}
                </h3>
                <div className="mb-3 text-sm font-medium text-blue-600">{resource.count}</div>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

export default HelpPage;