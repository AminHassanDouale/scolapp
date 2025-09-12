'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users,
  Building,
  Globe,
  Award,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Handshake,
  Target,
  Lightbulb,
  Heart,
  Star,
  Zap
} from "lucide-react";

interface Partner {
  id: string;
  name: string;
  category: string;
  logo: string;
  description: string;
  website: string;
  location: string;
  partnerSince: string;
  type: 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
  services: string[];
}

const PartnersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous les partenaires', count: 15 },
    { id: 'technology', name: 'Technologie', count: 6 },
    { id: 'education', name: 'Éducation', count: 4 },
    { id: 'integration', name: 'Intégration', count: 3 },
    { id: 'consulting', name: 'Conseil', count: 2 }
  ];

  const partners: Partner[] = [
    {
      id: '1',
      name: 'Microsoft',
      category: 'technology',
      logo: '/partners/microsoft.png',
      description: 'Partenariat stratégique pour l\'intégration Microsoft Azure et Office 365 dans nos solutions éducatives.',
      website: 'https://microsoft.com',
      location: 'Global',
      partnerSince: '2023',
      type: 'Platinum',
      services: ['Cloud Infrastructure', 'Office Integration', 'Teams Education']
    },
    {
      id: '2',
      name: 'Ministère de l\'Éducation Nationale',
      category: 'education',
      logo: '/partners/men-djibouti.png',
      description: 'Partenariat officiel avec le gouvernement djiboutien pour la digitalisation du système éducatif national.',
      website: 'https://education.gov.dj',
      location: 'Djibouti',
      partnerSince: '2022',
      type: 'Platinum',
      services: ['Certification Officielle', 'Support Gouvernemental', 'Formation Nationale']
    },
    {
      id: '3',
      name: 'Université de Djibouti',
      category: 'education',
      logo: '/partners/univ-djibouti.png',
      description: 'Collaboration pour la recherche et développement en technologies éducatives et formation des futurs enseignants.',
      website: 'https://univ.edu.dj',
      location: 'Djibouti',
      partnerSince: '2023',
      type: 'Gold',
      services: ['Recherche & Développement', 'Formation Enseignants', 'Innovation Pédagogique']
    },
    {
      id: '4',
      name: 'Djibouti Telecom',
      category: 'technology',
      logo: '/partners/djibouti-telecom.png',
      description: 'Infrastructure télécom et connectivité pour assurer une couverture optimale dans tout le pays.',
      website: 'https://djiboutitelecom.dj',
      location: 'Djibouti',
      partnerSince: '2022',
      type: 'Gold',
      services: ['Connectivité Internet', 'Solutions Mobile', 'Infrastructure Réseau']
    },
    {
      id: '5',
      name: 'EduTech Solutions',
      category: 'integration',
      logo: '/partners/edutech.png',
      description: 'Spécialiste en intégration de systèmes éducatifs et migration de données scolaires.',
      website: 'https://edutech-solutions.com',
      location: 'France/Djibouti',
      partnerSince: '2023',
      type: 'Silver',
      services: ['Intégration Système', 'Migration Données', 'Formation Technique']
    },
    {
      id: '6',
      name: 'African Development Bank',
      category: 'consulting',
      logo: '/partners/afdb.png',
      description: 'Financement et support pour l\'expansion des solutions éducatives numériques en Afrique de l\'Est.',
      website: 'https://afdb.org',
      location: 'Abidjan/Regional',
      partnerSince: '2024',
      type: 'Platinum',
      services: ['Financement', 'Expansion Régionale', 'Développement Stratégique']
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Croissance partagée',
      description: 'Développons ensemble de nouveaux marchés et opportunités',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Réseau étendu',
      description: 'Accédez à notre réseau de 500+ établissements partenaires',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation collaborative',
      description: 'Co-créons les solutions éducatives de demain',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expertise reconnue',
      description: 'Bénéficiez de notre expertise en EdTech africaine',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const partnershipTypes = [
    {
      type: 'Technology Partner',
      icon: <Zap className="w-12 h-12" />,
      description: 'Intégrez vos solutions techniques avec SmartAcademie',
      benefits: ['API complète', 'Support technique', 'Co-marketing'],
      level: 'Platinum/Gold'
    },
    {
      type: 'Education Partner',
      icon: <Building className="w-12 h-12" />,
      description: 'Collaborez sur le contenu pédagogique et la formation',
      benefits: ['Contenu exclusif', 'Certification', 'Formation continue'],
      level: 'Gold/Silver'
    },
    {
      type: 'Integration Partner',
      icon: <Target className="w-12 h-12" />,
      description: 'Aidez nos clients dans leur déploiement et formation',
      benefits: ['Commission partenaire', 'Formation certifiée', 'Support dédié'],
      level: 'Silver/Bronze'
    },
    {
      type: 'Strategic Partner',
      icon: <Handshake className="w-12 h-12" />,
      description: 'Partenariat stratégique long terme et co-développement',
      benefits: ['Roadmap partagée', 'Investissement conjoint', 'Expansion régionale'],
      level: 'Platinum'
    }
  ];

  const stats = [
    { number: '15+', label: 'Partenaires actifs' },
    { number: '50+', label: 'Projets conjoints' },
    { number: '95%', label: 'Satisfaction partenaires' },
    { number: '25+', label: 'Pays couverts' }
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

  const getPartnerTypeColor = (type: string) => {
    const colors = {
      Platinum: 'from-gray-400 to-gray-600',
      Gold: 'from-yellow-400 to-yellow-600',
      Silver: 'from-gray-300 to-gray-500',
      Bronze: 'from-orange-400 to-orange-600'
    };
    return colors[type as keyof typeof colors] || 'from-gray-400 to-gray-600';
  };

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
              <a href="/about" className="text-gray-700 hover:text-blue-600">À propos</a>
              <a href="/partners" className="font-medium text-blue-600">Partenaires</a>
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
        <div className="relative max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center px-6 py-3 mb-8 rounded-full shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <Handshake className="w-5 h-5 mr-2 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Écosystème Partenaires</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text"
              >
                Construisons ensemble l&apos;avenir de l&apos;éducation
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mb-8 text-xl text-gray-600"
              >
                Rejoignez notre écosystème de partenaires et participez à la transformation 
                numérique de l&apos;éducation en Afrique de l&apos;Est.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <button className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl">
                  <span>Devenir partenaire</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 font-semibold text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:bg-gray-50">
                  Découvrir les opportunités
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="p-6 text-center bg-white shadow-lg rounded-2xl"
                  >
                    <div className="mb-2 text-3xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
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
              Pourquoi devenir partenaire ?
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Découvrez les avantages d&apos;un partenariat avec SmartAcademie et les opportunités 
              de croissance dans le secteur EdTech africain.
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
                className="p-6 text-center transition-all duration-300 rounded-2xl hover:shadow-lg group bg-gray-50 hover:bg-white"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Types de partenariats
            </h2>
            <p className="text-xl text-gray-600">
              Différentes façons de collaborer selon votre expertise et vos objectifs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-3 text-blue-600 bg-blue-100 rounded-2xl">
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{type.type}</h3>
                      <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                        {type.level}
                      </span>
                    </div>
                    <p className="mb-4 text-gray-600">{type.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-gray-900">Avantages inclus :</div>
                      <ul className="space-y-1">
                        {type.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Nos partenaires</h2>
                <p className="text-xl text-gray-600">
                  Ils nous font confiance et collaborent à notre mission
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl">
                        <Building className="w-8 h-8 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {partner.name}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <span>{partner.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getPartnerTypeColor(partner.type)} text-white text-xs font-semibold`}>
                      {partner.type}
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                    {partner.description}
                  </p>

                  <div className="mb-4">
                    <div className="mb-2 text-sm font-semibold text-gray-900">Services :</div>
                    <div className="flex flex-wrap gap-1">
                      {partner.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs text-blue-700 bg-blue-100 rounded-md"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>Depuis {partner.partnerSince}</span>
                    </div>
                    <button className="flex items-center space-x-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700">
                      <span>En savoir plus</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Comment devenir partenaire ?
            </h2>
            <p className="text-xl text-gray-600">
              Un processus simple et transparent en 4 étapes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Candidature',
                description: 'Soumettez votre demande de partenariat via notre formulaire en ligne'
              },
              {
                step: '02',
                title: 'Évaluation',
                description: 'Notre équipe évalue votre profil et vos compétences'
              },
              {
                step: '03',
                title: 'Discussion',
                description: 'Entretien pour définir le type de partenariat optimal'
              },
              {
                step: '04',
                title: 'Lancement',
                description: 'Signature de l\'accord et démarrage de la collaboration'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="absolute top-8 left-full w-full h-0.5 bg-gray-200 hidden md:block transform -translate-x-1/2"></div>
                  )}
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
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
              <Heart className="w-4 h-4 mr-2 text-red-500" />
              <span className="text-sm font-medium text-gray-700">Rejoignez l&apos;aventure</span>
            </motion.div>
            
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Prêt à devenir partenaire ?
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
              Contactez-nous dès aujourd&apos;hui pour explorer les opportunités de collaboration 
              et construire ensemble l&apos;avenir de l&apos;éducation numérique.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl"
              >
                <span>Démarrer la candidature</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:bg-gray-50"
              >
                <Mail className="w-4 h-4" />
                <span>Nous contacter</span>
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

export default PartnersPage;