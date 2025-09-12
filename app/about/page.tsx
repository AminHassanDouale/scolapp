'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Target, 
  Eye, 
  Users, 
  Award, 
  Calendar,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Globe,
  Building,
  TrendingUp,
  Shield,
  Lightbulb,
  ArrowRight,
  Rocket,
  Star,
  Gift
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: '2025', label: 'Année de lancement' },
    { number: '100%', label: 'Innovation locale' },
    { number: '30 jours', label: 'Essai gratuit' },
    { number: '6 mois', label: 'Développement intensif' }
  ];

  const team = [
    {
      name: 'Khalid Abdi Adaweh',
      role: 'Fondateur & CEO',
      bio: 'Expert en éducation avec 15+ années d\'expérience dans les systèmes éducatifs djiboutiens.',
      image: '/team/ahmed.jpg',
      linkedin: '#'
    },
    {
      name: 'Amin Hassan Douale',
      role: 'CTO',
      bio: 'Ingénieure logiciel spécialisée dans les solutions éducatives et la transformation digitale.',
      image: '/team/fatima.jpg',
      linkedin: '#'
    },
    {
      name: 'Abdourahman Abdoulhakim',
      role: 'Directeur Commercial',
      bio: 'Expert en développement commercial avec une connaissance approfondie du marché éducatif.',
      image: '/team/omar.jpg',
      linkedin: '#'
    },
    {
      name: 'Abdillahi Omar',
      role: 'Responsable Support',
      bio: 'Spécialiste en support client et formation, dédiée à la réussite de nos partenaires.',
      image: '/team/amina.jpg',
      linkedin: '#'
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion pour l\'éducation',
      description: 'Nous croyons fermement que l\'éducation est la clé du développement de Djibouti.',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Excellence technique',
      description: 'Nous développons des solutions robustes, sécurisées et adaptées aux besoins locaux.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Proximité client',
      description: 'Nous accompagnons nos partenaires à chaque étape de leur transformation digitale.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation continue',
      description: 'Nous évoluons constamment pour répondre aux défis de l\'éducation moderne.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const milestones = [
    {
      year: 'Sept 2024',
      title: 'Conception de SmartAcademie',
      description: 'Début du développement de notre solution innovante'
    },
    {
      year: 'Déc 2024',
      title: 'Tests et validation',
      description: 'Phase intensive de tests et d\'optimisation'
    },
    {
      year: 'Jan 2025',
      title: 'Lancement officiel',
      description: 'Ouverture pour l\'année scolaire 2025-2026'
    },
  
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
              <a href="/about" className="font-medium text-blue-600">À propos</a>
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
            <Rocket className="w-5 h-5 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Nouvelle Génération EdTech</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text"
          >
            L&apos;avenir de l&apos;éducation commence maintenant
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-4xl mx-auto mb-12 text-xl text-gray-600"
          >
            Lancé en janvier 2025 pour l&apos;année scolaire 2025-2026, SmartAcademie est une solution 
            révolutionnaire conçue spécialement pour les établissements scolaires djiboutiens. 
            Nous commençons notre mission de transformation numérique de l&apos;éducation.
          </motion.p>

          {/* Launch Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-flex items-center px-8 py-4 mb-8 rounded-full bg-gradient-to-r from-green-100 to-blue-100"
          >
            <Star className="w-6 h-6 mr-3 text-green-600" />
            <span className="font-semibold text-gray-800">
              Tout nouveau ! Essai gratuit de 30 jours disponible
            </span>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold text-blue-600 md:text-5xl">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 text-center bg-white shadow-lg rounded-3xl"
            >
              <div className="inline-flex p-4 mb-6 text-blue-600 bg-blue-100 rounded-2xl">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Notre Mission</h3>
              <p className="leading-relaxed text-gray-600">
                Démocratiser l&apos;accès aux outils numériques éducatifs pour tous les établissements 
                djiboutiens, en commençant par ceux qui osent innover dès maintenant.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 text-center bg-white shadow-lg rounded-3xl"
            >
              <div className="inline-flex p-4 mb-6 text-purple-600 bg-purple-100 rounded-2xl">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Notre Vision</h3>
              <p className="leading-relaxed text-gray-600">
                Faire de Djibouti un pionnier de la transformation digitale de l&apos;éducation 
                en Afrique de l&apos;Est et devenir la référence EdTech de la région.
              </p>
            </motion.div>

            {/* Values Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-8 text-center bg-white shadow-lg rounded-3xl"
            >
              <div className="inline-flex p-4 mb-6 text-green-600 bg-green-100 rounded-2xl">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Nos Valeurs</h3>
              <p className="leading-relaxed text-gray-600">
                Innovation, audace, proximité et engagement pour l&apos;éducation 
                guident chacune de nos actions dès le premier jour.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Values */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Ce qui nous anime
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Nos valeurs fondamentales guident notre approche innovante et notre engagement 
              envers l&apos;éducation djiboutienne.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start p-8 space-x-6 transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
              >
                <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-r ${value.gradient} text-white`}>
                  {value.icon}
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="leading-relaxed text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Notre parcours
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              De l&apos;idée au lancement, découvrez notre roadmap ambitieuse pour révolutionner l&apos;éducation djiboutienne.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const isPast = index <= 2; // Sept 2024, Déc 2024, Jan 2025 are past
                const isCurrent = index === 2; // Jan 2025 is current
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute z-10 w-4 h-4 transform border-4 border-white rounded-full shadow-lg left-4 md:left-1/2 md:-translate-x-1/2 ${
                      isCurrent ? 'bg-green-500' : isPast ? 'bg-blue-600' : 'bg-gray-300'
                    }`}></div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className={`p-6 shadow-lg rounded-2xl ${
                        isCurrent ? 'bg-green-50 border border-green-200' : isPast ? 'bg-white' : 'bg-gray-50 border border-gray-200'
                      }`}>
                        <div className={`mb-2 text-2xl font-bold ${
                          isCurrent ? 'text-green-600' : isPast ? 'text-blue-600' : 'text-gray-400'
                        }`}>
                          {milestone.year}
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-gray-900">
                          {milestone.title}
                          {isCurrent && <span className="px-2 py-1 ml-2 text-xs text-white bg-green-500 rounded-full">ACTUEL</span>}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Notre équipe fondatrice
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Une équipe passionnée et expérimentée, prête à révolutionner l&apos;éducation djiboutienne 
              avec audace et innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 text-center transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
              >
                <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 text-2xl font-bold text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{member.name}</h3>
                <div className="mb-3 font-medium text-blue-600">{member.role}</div>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">{member.bio}</p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-700"
                >
                  <Linkedin className="w-4 h-4 mr-1" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info & Early Adopter Benefits */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Basés au cœur de Djibouti
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                Notre équipe locale comprend parfaitement les défis du système éducatif djiboutien. 
                Nous avons conçu SmartAcademie spécifiquement pour répondre à vos besoins.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="flex-shrink-0 w-6 h-6 mt-1 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Adresse</div>
                    <div className="text-gray-600">Avenue Hassan Gouled, Djibouti-Ville</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="flex-shrink-0 w-6 h-6 mt-1 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Téléphone</div>
                    <div className="text-gray-600">+253 21 XX XX XX</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="flex-shrink-0 w-6 h-6 mt-1 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">contact@smartacademie.dj</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="flex-shrink-0 w-6 h-6 mt-1 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Site web</div>
                    <div className="text-gray-600">www.smartacademie.dj</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl"
            >
              <div className="mb-8 text-center">
                <Gift className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="mb-4 text-2xl font-bold text-gray-900">Avantages Early Adopter</h3>
                <p className="text-gray-600">Soyez parmi les premiers à adopter SmartAcademie !</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <div className="flex-shrink-0 w-2 h-2 mr-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">30 jours d'essai gratuit complet</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <div className="flex-shrink-0 w-2 h-2 mr-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Support personnalisé prioritaire</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <div className="flex-shrink-0 w-2 h-2 mr-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Formation complète incluse</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl">
                  <div className="flex-shrink-0 w-2 h-2 mr-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Tarifs préférentiels à vie</span>
                </div>
              </div>
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
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Rejoignez la révolution éducative
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
              Soyez parmi les pionniers qui transforment l&apos;éducation djiboutienne. 
              Découvrez SmartAcademie dès aujourd&apos;hui avec notre essai gratuit de 30 jours.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl hover:shadow-xl group"
              >
                <div className="absolute px-2 py-1 text-xs font-bold text-green-700 bg-yellow-300 rounded-full -top-2 -right-2 animate-pulse">
                  NOUVEAU
                </div>
                <Gift className="w-5 h-5" />
                <span>Commencer l'essai gratuit</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 font-semibold text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:bg-gray-50"
              >
                Nous contacter
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
              La nouvelle solution de gestion scolaire conçue pour les établissements djiboutiens modernes.
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

export default AboutPage;