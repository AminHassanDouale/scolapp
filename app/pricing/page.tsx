'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Crown, 
  Building, 
  Users, 
  Calculator,
  ArrowRight,
  Shield,
  Headphones,
  Database,
  Globe,
  Award,
  Target,
  Mail
} from "lucide-react";

const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Parfait pour les petites écoles',
      icon: <Users className="w-8 h-8" />,
      price: billingPeriod === 'monthly' ? 15000 : 150000,
      originalPrice: billingPeriod === 'monthly' ? null : 180000,
      period: billingPeriod === 'monthly' ? 'mois' : 'an',
      maxStudents: '100 étudiants',
      gradient: 'from-blue-500 to-cyan-500',
      popular: false,
      websiteIncluded: true,
      emailAccounts: 5,
      features: [
        'Gestion des étudiants',
        'Notes et bulletins',
        'Présences de base',
        'Communications SMS',
        'Rapports standards',
        'Site web votreschool.smartacademie.dj',
        '5 emails professionnels @votreschool.com',
        'Support email'
      ],
      notIncluded: [
        'Modules financiers',
        'Planning automatique',
        'API avancées',
        'Support prioritaire',
        'Domaine personnalisé'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Solution complète recommandée',
      icon: <Star className="w-8 h-8" />,
      price: billingPeriod === 'monthly' ? 25000 : 250000,
      originalPrice: billingPeriod === 'monthly' ? null : 300000,
      period: billingPeriod === 'monthly' ? 'mois' : 'an',
      maxStudents: '500 étudiants',
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
      websiteIncluded: true,
      emailAccounts: 25,
      features: [
        'Tous les modules inclus',
        'Système financier complet',
        'Planning automatique',
        'Rapports avancés',
        'Interface bilingue',
        'Site web avec domaine personnalisé',
        '25 emails professionnels @votreschool.com',
        'Support prioritaire',
        'Formation incluse',
        'Sauvegardes automatiques'
      ],
      notIncluded: [
        'Personnalisations avancées',
        'Intégrations tierces'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Pour les grands établissements',
      icon: <Building className="w-8 h-8" />,
      price: billingPeriod === 'monthly' ? 45000 : 450000,
      originalPrice: billingPeriod === 'monthly' ? null : 540000,
      period: billingPeriod === 'monthly' ? 'mois' : 'an',
      maxStudents: 'Illimité',
      gradient: 'from-orange-500 to-red-500',
      popular: false,
      websiteIncluded: true,
      emailAccounts: 'unlimited',
      features: [
        'Fonctionnalités Premium',
        'Étudiants illimités',
        'Site web multi-domaines',
        'Emails professionnels illimités',
        'Personnalisations avancées',
        'Intégrations tierces',
        'API complète',
        'Support dédié 24/7',
        'Formation sur site',
        'SLA garantie'
      ],
      notIncluded: []
    }
  ];

  const additionalServices = [
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Migration de données',
      description: 'Transfer de vos données existantes',
      price: '50,000 DJF'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Formation personnalisée',
      description: 'Sessions de formation sur site',
      price: '25,000 DJF/jour'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Support étendu',
      description: 'Support prioritaire 24/7',
      price: '15,000 DJF/mois'
    }
  ];

  const faq = [
    {
      question: "Y a-t-il des frais cachés ?",
      answer: "Non, nos tarifs sont transparents. Le prix affiché inclut toutes les fonctionnalités du plan choisi."
    },
    {
      question: "Puis-je changer de plan à tout moment ?",
      answer: "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement."
    },
    {
      question: "Offrez-vous une garantie de remboursement ?",
      answer: "Oui, nous offrons une garantie de remboursement de 30 jours si vous n'êtes pas satisfait."
    },
    {
      question: "Le support technique est-il inclus ?",
      answer: "Oui, tous nos plans incluent un support technique. Le niveau de support varie selon le plan choisi."
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
              <a href="/pricing" className="font-medium text-blue-600">Tarifs</a>
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
            <Calculator className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-sm font-medium text-gray-700">Tarifs Transparents</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text"
          >
            Choisissez votre plan
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto mb-12 text-xl text-gray-600"
          >
            Des tarifs adaptés à tous les établissements scolaires djiboutiens. 
            Commencez votre transformation numérique dès aujourd&apos;hui.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center mb-16 space-x-4"
          >
            <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-blue-600' : 'text-gray-500'}`}>
              Mensuel
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex items-center h-6 transition-colors bg-gray-200 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-blue-600' : 'text-gray-500'}`}>
              Annuel
              <span className="px-2 py-1 ml-2 text-xs text-green-700 bg-green-100 rounded-full">-17%</span>
            </span>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                  plan.popular ? 'border-blue-500 scale-105' : 'border-gray-100 hover:border-blue-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 to-purple-500">
                    <Crown className="inline w-4 h-4 mr-1" />
                    Plan Recommandé
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                  {/* Plan Header */}
                  <div className="mb-8 text-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.gradient} text-white mb-4`}>
                      {plan.icon}
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8 text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price.toLocaleString()}
                      </span>
                      <span className="ml-1 text-gray-600">DJF</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        {plan.originalPrice.toLocaleString()} DJF
                      </div>
                    )}
                    <div className="mt-1 text-gray-600">par {plan.period}</div>
                    <div className="mt-2 text-sm font-medium text-blue-600">{plan.maxStudents}</div>
                  </div>

                  {/* Features */}
                  <div className="mb-8 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3 opacity-50">
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                        : selectedPlan === plan.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Plan Sélectionné' : 'Choisir ce plan'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Website & Email Features Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Site web et emails professionnels inclus</h2>
            <p className="text-xl text-gray-600">Renforcez votre présence en ligne avec des outils professionnels</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Website Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-white shadow-lg rounded-3xl"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 mr-4 text-blue-600 bg-blue-100 rounded-2xl">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Site web professionnel</h3>
                  <p className="text-gray-600">Vitrine moderne pour votre établissement</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="flex-shrink-0 w-5 h-5 mt-1 text-green-500" />
                  <div>
                    <div className="font-medium text-gray-900">Design responsive</div>
                    <div className="text-sm text-gray-600">Optimisé pour tous les appareils</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Check className="flex-shrink-0 w-5 h-5 mt-1 text-green-500" />
                  <div>
                    <div className="font-medium text-gray-900">Pages personnalisables</div>
                    <div className="text-sm text-gray-600">Présentation, programmes, actualités</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Check className="flex-shrink-0 w-5 h-5 mt-1 text-green-500" />
                  <div>
                    <div className="font-medium text-gray-900">Portail parents intégré</div>
                    <div className="text-sm text-gray-600">Accès sécurisé aux informations</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Check className="flex-shrink-0 w-5 h-5 mt-1 text-green-500" />
                  <div>
                    <div className="font-medium text-gray-900">Certificat SSL inclus</div>
                    <div className="text-sm text-gray-600">Sécurité et confiance garanties</div>
                  </div>
                </div>
              </div>

              <div className="p-4 mt-6 bg-blue-50 rounded-xl">
                <div className="text-sm text-blue-700">
                  <span className="font-medium">Starter:</span> votreschool.smartacademie.dj<br />
                  <span className="font-medium">Premium & Enterprise:</span> Domaine personnalisé votreschool.com
                </div>
              </div>
            </motion.div>

            {/* Email Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-white shadow-lg rounded-3xl"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 mr-4 text-purple-600 bg-purple-100 rounded-2xl">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Emails professionnels</h3>
                  <p className="text-gray-600">Communication professionnelle assurée</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="flex-shrink-0 w-5 h-5 mt-1 text-green-500" />
                  <div>
                    <div className="font-medium text-gray-900">Adresses personnalisées</div>
                    <div className="text-sm text-gray-600">directeur@votreschool.com, info@votreschool.com</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Check className="flex-shrink-0 w-5 h-5 mt-1 text-green-500" />
                  <div>
                    <div className="font-medium text-gray-900">Interface webmail moderne</div>
                    <div className="text-sm text-gray-600">Accès depuis n'importe où</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Check className="flex-shrink-0 w-5 h-5 mt-1 text-green-500" />
                  <div>
                    <div className="font-medium text-gray-900">Protection anti-spam</div>
                    <div className="text-sm text-gray-600">Filtrage avancé inclus</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Check className="flex-shrink-0 w-5 h-5 mt-1 text-green-500" />
                  <div>
                    <div className="font-medium text-gray-900">Sauvegarde automatique</div>
                    <div className="text-sm text-gray-600">Vos emails toujours protégés</div>
                  </div>
                </div>
              </div>

              <div className="p-4 mt-6 bg-purple-50 rounded-xl">
                <div className="text-sm text-purple-700">
                  <span className="font-medium">Starter:</span> 5 comptes email<br />
                  <span className="font-medium">Premium:</span> 25 comptes email<br />
                  <span className="font-medium">Enterprise:</span> Comptes illimités
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Services additionnels</h2>
            <p className="text-xl text-gray-600">Personnalisez votre expérience avec nos services complémentaires</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 text-center transition-all duration-300 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg"
              >
                <div className="inline-flex p-3 mb-4 text-blue-600 bg-blue-100 rounded-xl">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="mb-4 text-sm text-gray-600">{service.description}</p>
                <div className="text-xl font-bold text-blue-600">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Questions fréquentes</h2>
            <p className="text-xl text-gray-600">Tout ce que vous devez savoir sur nos tarifs</p>
          </motion.div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 bg-white shadow-lg rounded-2xl"
              >
                <h3 className="mb-3 text-lg font-bold text-gray-900">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              <Award className="w-4 h-4 mr-2 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Satisfaction Garantie</span>
            </motion.div>
            
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Prêt à commencer ?
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
              Rejoignez plus de 500 établissements qui font déjà confiance à SmartAcademie. 
              Essai gratuit de 30 jours, sans engagement.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl"
              >
                <span>Commencer l'essai gratuit</span>
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

export default PricingPage;