'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  ChevronUp,
  HelpCircle, 
  Users, 
  CreditCard, 
  Settings, 
  Shield, 
  Smartphone,
  MessageCircle,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Book,
  Video,
  Download
} from "lucide-react";

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'Toutes les questions', icon: HelpCircle },
    { id: 'getting-started', name: 'Démarrage', icon: Book },
    { id: 'account', name: 'Compte & Profil', icon: Users },
    { id: 'billing', name: 'Facturation', icon: CreditCard },
    { id: 'technical', name: 'Technique', icon: Settings },
    { id: 'security', name: 'Sécurité', icon: Shield },
    { id: 'mobile', name: 'Application Mobile', icon: Smartphone }
  ];

  const faqData = [
    {
      id: 1,
      category: 'getting-started',
      question: 'Comment démarrer avec SmartAcademie ?',
      answer: 'Pour commencer avec SmartAcademie, vous devez d\'abord créer un compte administrateur, configurer les informations de votre établissement, puis ajouter vos premiers utilisateurs (enseignants et étudiants). Notre équipe vous accompagne dans cette configuration initiale avec une formation dédiée.'
    },
    {
      id: 2,
      category: 'getting-started',
      question: 'Combien de temps faut-il pour mettre en place le système ?',
      answer: 'La mise en place standard prend entre 48 heures et 1 semaine selon la taille de votre établissement. Cela inclut la configuration, l\'import des données existantes, la formation de votre équipe et les tests de validation.'
    },
    {
      id: 3,
      category: 'getting-started',
      question: 'Proposez-vous une formation pour notre équipe ?',
      answer: 'Oui, nous incluons une formation complète dans tous nos plans. Cela comprend des sessions en présentiel pour les administrateurs, des webinaires pour les enseignants, et un accès à notre centre de ressources en ligne avec tutoriels vidéo.'
    },
    {
      id: 4,
      category: 'account',
      question: 'Comment créer des comptes pour les enseignants ?',
      answer: 'Depuis votre tableau de bord administrateur, allez dans "Gestion des utilisateurs" > "Enseignants" > "Ajouter un enseignant". Remplissez les informations requises et le système enverra automatiquement les identifiants de connexion par email.'
    },
    {
      id: 5,
      category: 'account',
      question: 'Comment les parents accèdent-ils aux informations de leurs enfants ?',
      answer: 'Les parents reçoivent automatiquement leurs identifiants de connexion lors de l\'inscription de leur enfant. Ils peuvent accéder au portail parents via le site web ou l\'application mobile pour consulter les notes, absences, et recevoir les communications.'
    },
    {
      id: 6,
      category: 'account',
      question: 'Puis-je gérer plusieurs établissements avec un seul compte ?',
      answer: 'Oui, notre plan Enterprise permet la gestion multi-établissements avec un tableau de bord centralisé. Vous pouvez basculer entre les établissements et avoir une vue consolidée des données.'
    },
    {
      id: 7,
      category: 'billing',
      question: 'Quels sont les modes de paiement acceptés ?',
      answer: 'Nous acceptons les virements bancaires, les paiements par mobile money (Telesom, Evolis), et les chèques. Pour les plans annuels, nous offrons des facilités de paiement en plusieurs fois.'
    },
    {
      id: 8,
      category: 'billing',
      question: 'Y a-t-il des frais cachés ?',
      answer: 'Non, nos tarifs sont totalement transparents. Le prix affiché inclut toutes les fonctionnalités du plan choisi, l\'hébergement, les mises à jour, et le support technique. Seuls les services additionnels (formation sur site, migration de données) sont facturés séparément.'
    },
    {
      id: 9,
      category: 'billing',
      question: 'Puis-je changer de plan à tout moment ?',
      answer: 'Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement et la facturation est ajustée au prorata pour la période en cours.'
    },
    {
      id: 10,
      category: 'billing',
      question: 'Offrez-vous une garantie de remboursement ?',
      answer: 'Oui, nous offrons une garantie de remboursement de 30 jours si vous n\'êtes pas satisfait de notre solution. Aucune question ne sera posée si vous décidez d\'annuler dans les 30 premiers jours.'
    },
    {
      id: 11,
      category: 'technical',
      question: 'Puis-je accéder à SmartAcademie hors ligne ?',
      answer: 'L\'application mobile permet un accès limité hors ligne pour consulter les informations déjà synchronisées. Cependant, SmartAcademie est une solution cloud qui nécessite une connexion internet pour la plupart des fonctionnalités.'
    },
    {
      id: 12,
      category: 'technical',
      question: 'Comment sont sauvegardées nos données ?',
      answer: 'Vos données sont sauvegardées automatiquement plusieurs fois par jour sur nos serveurs sécurisés. Nous maintenons également des sauvegardes géographiquement distribuées et pouvons restaurer vos données à tout moment en cas de besoin.'
    },
    {
      id: 13,
      category: 'technical',
      question: 'Que se passe-t-il si nous avons un problème technique ?',
      answer: 'Notre équipe support technique est disponible du lundi au vendredi de 8h à 17h. Pour les clients Premium, nous offrons un support prioritaire avec des temps de réponse garantis. Vous pouvez nous contacter par chat, email ou téléphone.'
    },
    {
      id: 14,
      category: 'security',
      question: 'Nos données sont-elles sécurisées ?',
      answer: 'Absolument. Nous utilisons un chiffrement SSL/TLS pour toutes les communications, un chiffrement AES-256 pour le stockage des données, et nous sommes conformes aux normes RGPD et ISO 27001. Vos données sont hébergées dans des centres de données certifiés.'
    },
    {
      id: 15,
      category: 'security',
      question: 'Qui peut accéder aux données des étudiants ?',
      answer: 'L\'accès aux données est strictement contrôlé par un système de permissions granulaires. Seules les personnes autorisées par votre établissement peuvent accéder aux informations, et toutes les actions sont tracées dans un journal d\'audit.'
    },
    {
      id: 16,
      category: 'security',
      question: 'Proposez-vous l\'authentification à deux facteurs ?',
      answer: 'Oui, l\'authentification à deux facteurs (2FA) est disponible pour tous les comptes et fortement recommandée pour les administrateurs. Elle peut être activée via SMS ou application d\'authentification.'
    },
    {
      id: 17,
      category: 'mobile',
      question: 'Y a-t-il une application mobile ?',
      answer: 'Oui, nous proposons des applications mobiles natives pour iOS et Android, disponibles gratuitement sur l\'App Store et Google Play. Elles permettent l\'accès à toutes les fonctionnalités principales de SmartAcademie.'
    },
    {
      id: 18,
      category: 'mobile',
      question: 'L\'application mobile fonctionne-t-elle hors ligne ?',
      answer: 'L\'application mobile peut fonctionner en mode hors ligne limité pour consulter les informations déjà synchronisées (emploi du temps, notes récentes, messages). La synchronisation se fait automatiquement dès que la connexion est rétablie.'
    }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const supportOptions = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Chat en direct',
      description: 'Discutez avec notre équipe',
      availability: '24h / 7 jour'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Support téléphonique',
      description: '+253 77 04 94 95',
      availability: '24/7 pour urgences'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email support',
      description: 'support@smartacademie.com',
      availability: 'Réponse < 24h'
    }
  ];

  const resources = [
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Tutoriels vidéo',
      description: '25+ vidéos explicatives',
      link: '/tutorials'
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Documentation',
      description: 'Guides détaillés',
      link: '/docs'
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: 'Guides PDF',
      description: 'À télécharger',
      link: '/downloads'
    }
  ];

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
              <a href="/faq" className="font-medium text-blue-600">FAQ</a>
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
            <span className="text-sm font-medium text-gray-700">Questions Fréquentes</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text"
          >
            Toutes vos réponses en un clic
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-12 text-xl text-gray-600"
          >
            Trouvez rapidement les réponses aux questions les plus courantes sur SmartAcademie
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
              placeholder="Rechercher dans la FAQ..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="w-full py-4 pl-12 pr-4 text-lg bg-white border border-gray-200 shadow-lg rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
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

            {/* FAQ List */}
            <div className="lg:w-3/4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {filteredFAQs.length} question{filteredFAQs.length > 1 ? 's' : ''} trouvée{filteredFAQs.length > 1 ? 's' : ''}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <AnimatePresence>
                    {filteredFAQs.map((faq, index) => (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl"
                      >
                        <button
                          onClick={() => toggleExpanded(faq.id)}
                          className="flex items-center justify-between w-full text-left"
                        >
                          <h3 className="pr-4 text-lg font-semibold text-gray-900">
                            {faq.question}
                          </h3>
                          {expandedItems.includes(faq.id) ? (
                            <ChevronUp className="flex-shrink-0 w-5 h-5 text-blue-600" />
                          ) : (
                            <ChevronDown className="flex-shrink-0 w-5 h-5 text-gray-400" />
                          )}
                        </button>
                        
                        <AnimatePresence>
                          {expandedItems.includes(faq.id) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 overflow-hidden"
                            >
                              <div className="pt-4 border-t border-gray-100">
                                <p className="leading-relaxed text-gray-600">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {filteredFAQs.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-12 text-center bg-white rounded-2xl"
                    >
                      <HelpCircle className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">
                        Aucune question trouvée
                      </h3>
                      <p className="text-gray-600">
                        Essayez de modifier votre recherche ou de sélectionner une autre catégorie.
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
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
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-xl text-gray-600">
              Notre équipe support est là pour vous aider
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 text-center transition-all duration-300 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg group"
              >
                <div className="inline-flex p-4 mb-4 text-blue-600 transition-colors bg-blue-100 rounded-xl group-hover:bg-blue-600 group-hover:text-white">
                  {option.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{option.title}</h3>
                <p className="mb-2 text-gray-600">{option.description}</p>
                <p className="text-sm text-gray-500">{option.availability}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Ressources d&apos;aide supplémentaires
            </h2>
            <p className="text-xl text-gray-600">
              Explorez nos autres ressources pour maîtriser SmartAcademie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                <p className="mb-4 text-sm text-gray-600">{resource.description}</p>
               
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
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Prêt à commencer ?</span>
            </motion.div>
            
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Démarrez votre essai gratuit
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
              Testez SmartAcademie pendant 30 jours gratuitement. 
              Aucune carte de crédit requise.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl"
              >
                <span>Essai gratuit 30 jours</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 font-semibold text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:bg-gray-50"
              >
                Contacter les ventes
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

export default FAQPage;