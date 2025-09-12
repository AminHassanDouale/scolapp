'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  MapPin,
  Clock,
  Users,
  Code,
  Briefcase,
  Heart,
  Coffee,
  Wifi,
  Car,
  GraduationCap,
  Shield,
  TrendingUp,
  Globe,
  Award,
  Target,
  Zap,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Filter
} from "lucide-react";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'CDI' | 'CDD' | 'Stage' | 'Freelance';
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  tags: string[];
}

const CareersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const departments = [
    { id: 'all', name: 'Tous les départements', count: 12 },
    { id: 'engineering', name: 'Ingénierie', count: 5 },
    { id: 'product', name: 'Produit', count: 3 },
    { id: 'sales', name: 'Commercial', count: 2 },
    { id: 'support', name: 'Support Client', count: 2 }
  ];

  const jobTypes = [
    { id: 'all', name: 'Tous les types' },
    { id: 'CDI', name: 'CDI' },
    { id: 'CDD', name: 'CDD' },
    { id: 'Stage', name: 'Stage' },
    { id: 'Freelance', name: 'Freelance' }
  ];

  const positions: JobPosition[] = [
    {
      id: '1',
      title: 'Développeur Full Stack Senior',
      department: 'engineering',
      location: 'Djibouti-Ville',
      type: 'CDI',
      experience: '5+ ans',
      salary: '800K - 1.2M DJF/an',
      description: 'Nous recherchons un développeur full stack expérimenté pour rejoindre notre équipe technique et contribuer au développement de SmartAcademie.',
      requirements: [
        'Maîtrise de React, Node.js et TypeScript',
        'Expérience avec les bases de données PostgreSQL',
        'Connaissance des APIs REST et GraphQL',
        'Expérience en méthodologies Agile',
        'Français et anglais courants'
      ],
      responsibilities: [
        'Développer de nouvelles fonctionnalités',
        'Maintenir et améliorer le code existant',
        'Collaborer avec l\'équipe produit',
        'Participer aux code reviews',
        'Mentorer les développeurs juniors'
      ],
      tags: ['React', 'Node.js', 'PostgreSQL', 'Remote OK']
    },
    {
      id: '2',
      title: 'Designer UX/UI',
      department: 'product',
      location: 'Djibouti-Ville',
      type: 'CDI',
      experience: '3+ ans',
      salary: '600K - 900K DJF/an',
      description: 'Rejoignez notre équipe produit pour créer des expériences utilisateur exceptionnelles pour nos utilisateurs scolaires.',
      requirements: [
        'Portfolio démontrant votre expertise UX/UI',
        'Maîtrise de Figma et Adobe Creative Suite',
        'Expérience en design d\'applications web et mobile',
        'Compréhension des principes d\'accessibilité',
        'Sensibilité au contexte culturel djiboutien'
      ],
      responsibilities: [
        'Concevoir des interfaces utilisateur intuitives',
        'Conduire des recherches utilisateur',
        'Créer des prototypes et wireframes',
        'Collaborer avec les développeurs',
        'Maintenir le design system'
      ],
      tags: ['Figma', 'UX Research', 'Mobile Design', 'Accessibility']
    },
    {
      id: '3',
      title: 'Ingénieur DevOps',
      department: 'engineering',
      location: 'Djibouti-Ville',
      type: 'CDI',
      experience: '4+ ans',
      salary: '700K - 1M DJF/an',
      description: 'Nous cherchons un expert DevOps pour optimiser notre infrastructure cloud et nos processus de déploiement.',
      requirements: [
        'Expertise en AWS/GCP et Kubernetes',
        'Maîtrise des outils CI/CD (Jenkins, GitLab)',
        'Expérience avec Docker et Terraform',
        'Connaissances en monitoring (Prometheus, Grafana)',
        'Compétences en scripting (Python, Bash)'
      ],
      responsibilities: [
        'Gérer l\'infrastructure cloud',
        'Optimiser les pipelines CI/CD',
        'Assurer la sécurité des systèmes',
        'Monitorer les performances',
        'Automatiser les déploiements'
      ],
      tags: ['AWS', 'Kubernetes', 'CI/CD', 'Terraform']
    },
    {
      id: '4',
      title: 'Commercial Senior',
      department: 'sales',
      location: 'Djibouti-Ville',
      type: 'CDI',
      experience: '5+ ans',
      salary: '600K - 1M DJF/an + commissions',
      description: 'Développez notre présence sur le marché éducatif djiboutien en tant que commercial senior expérimenté.',
      requirements: [
        'Expérience confirmée dans la vente B2B',
        'Connaissance du secteur éducatif djiboutien',
        'Excellent relationnel et sens de la négociation',
        'Maîtrise du français et de l\'arabe',
        'Permis de conduire valide'
      ],
      responsibilities: [
        'Prospecter de nouveaux clients',
        'Gérer un portefeuille d\'établissements',
        'Présenter nos solutions lors de démos',
        'Négocier les contrats',
        'Assurer le suivi client'
      ],
      tags: ['B2B Sales', 'Education', 'Relationship Building', 'Arabic']
    },
    {
      id: '5',
      title: 'Spécialiste Support Client',
      department: 'support',
      location: 'Djibouti-Ville',
      type: 'CDD',
      experience: '2+ ans',
      salary: '400K - 600K DJF/an',
      description: 'Rejoignez notre équipe support pour accompagner nos clients dans leur utilisation quotidienne de SmartAcademie.',
      requirements: [
        'Expérience en support client B2B',
        'Excellentes compétences en communication',
        'Patience et orientation solution',
        'Connaissance des outils SaaS',
        'Bilinguisme français-arabe'
      ],
      responsibilities: [
        'Répondre aux demandes clients',
        'Résoudre les problèmes techniques',
        'Créer de la documentation',
        'Former les utilisateurs',
        'Escalader les cas complexes'
      ],
      tags: ['Customer Success', 'Technical Support', 'Training', 'SaaS']
    },
    {
      id: '6',
      title: 'Stagiaire Marketing Digital',
      department: 'product',
      location: 'Djibouti-Ville',
      type: 'Stage',
      experience: 'Étudiant',
      salary: '150K DJF/mois',
      description: 'Stage de 6 mois pour découvrir le marketing digital dans le secteur EdTech au sein d\'une startup en croissance.',
      requirements: [
        'Étudiant en Marketing/Communication',
        'Créativité et curiosité',
        'Maîtrise des réseaux sociaux',
        'Bases en analytics web',
        'Motivation et esprit d\'équipe'
      ],
      responsibilities: [
        'Créer du contenu pour les réseaux sociaux',
        'Analyser les performances marketing',
        'Assister aux événements sectoriels',
        'Contribuer aux campagnes publicitaires',
        'Veiller concurrentielle'
      ],
      tags: ['Digital Marketing', 'Social Media', 'Content Creation', 'Internship']
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Assurance santé',
      description: 'Couverture médicale complète pour vous et votre famille'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Horaires flexibles',
      description: 'Équilibre travail-vie privée avec horaires adaptables'
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Télétravail',
      description: 'Possibilité de travail à distance 2 jours/semaine'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Formation continue',
      description: 'Budget formation et conférences professionnelles'
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: 'Transport',
      description: 'Indemnités de transport ou véhicule de fonction'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Primes performance',
      description: 'Rémunération variable basée sur les résultats'
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Impact social',
      description: 'Votre travail contribue directement à améliorer l\'éducation à Djibouti',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Esprit d\'équipe',
      description: 'Culture collaborative et bienveillante au sein d\'une équipe diverse',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Croissance',
      description: 'Opportunités d\'évolution rapide dans une entreprise en pleine expansion',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Environnement dynamique encourageant la créativité et l\'innovation',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '25', label: 'Employés talentueux' },
    { number: '95%', label: 'Taux de rétention' },
    { number: '4.8/5', label: 'Satisfaction équipe' },
    { number: '15+', label: 'Nationalités' }
  ];

  const filteredPositions = positions.filter(position => {
    const matchesSearch = searchQuery === '' ||
      position.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      position.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      position.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesDepartment = selectedDepartment === 'all' || position.department === selectedDepartment;
    const matchesType = selectedType === 'all' || position.type === selectedType;

    return matchesSearch && matchesDepartment && matchesType;
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
              <a href="/about" className="text-gray-700 hover:text-blue-600">À propos</a>
              <a href="/careers" className="font-medium text-blue-600">Carrières</a>
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
                <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Rejoignez notre équipe</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text"
              >
                Transformez l&apos;éducation avec nous
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mb-8 text-xl text-gray-600"
              >
                Rejoignez une équipe passionnée qui révolutionne l&apos;éducation à Djibouti. 
                Découvrez des opportunités uniques dans une startup EdTech en pleine croissance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <button className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl">
                  <span>Voir les postes ouverts</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 font-semibold text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:bg-gray-50">
                  Candidature spontanée
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

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Vous ne trouvez pas le poste idéal ?
            </h2>
            <p className="max-w-3xl mx-auto mb-8 text-xl text-blue-100">
              Envoyez-nous votre candidature spontanée. Nous sommes toujours à la recherche 
              de talents exceptionnels pour rejoindre notre équipe.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="px-8 py-4 font-semibold text-blue-600 transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:bg-gray-50">
                Candidature spontanée
              </button>
              <button className="px-8 py-4 font-semibold text-white transition-all duration-300 border-2 border-white rounded-xl hover:bg-white hover:text-blue-600">
                Nous contacter
              </button>
            </div>
          </motion.div>
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

export default CareersPage;