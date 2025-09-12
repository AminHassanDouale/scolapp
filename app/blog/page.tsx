'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Users,
  Lightbulb,
  Settings,
  Globe,
  Award,
  Eye,
  MessageCircle,
  Share2,
  Filter,
  ChevronDown
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  views: string;
  comments: number;
  featured: boolean;
  image: string;
}

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', name: 'Tous les articles', count: 24 },
    { id: 'education', name: 'Éducation', count: 8 },
    { id: 'technology', name: 'Technologie', count: 6 },
    { id: 'product', name: 'Produit', count: 5 },
    { id: 'tips', name: 'Conseils', count: 3 },
    { id: 'news', name: 'Actualités', count: 2 }
  ];

  const sortOptions = [
    { id: 'latest', name: 'Plus récents' },
    { id: 'popular', name: 'Plus populaires' },
    { id: 'trending', name: 'Tendances' }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Comment la digitalisation transforme l\'éducation à Djibouti',
      slug: 'digitalisation-education-djibouti',
      excerpt: 'Découvrez comment les outils numériques révolutionnent l\'enseignement dans les établissements djiboutiens et les défis à relever.',
      content: '',
      author: {
        name: 'Ahmed Hassan',
        role: 'CEO & Fondateur',
        avatar: '/avatars/ahmed.jpg'
      },
      publishDate: '2025-01-15',
      readTime: '8 min',
      category: 'education',
      tags: ['digitalisation', 'éducation', 'innovation'],
      views: '2.4K',
      comments: 18,
      featured: true,
      image: '/blog/education-digitale.jpg'
    },
    {
      id: '2',
      title: 'Les 10 fonctionnalités indispensables d\'un système de gestion scolaire',
      slug: 'fonctionnalites-systeme-gestion-scolaire',
      excerpt: 'Guide complet des fonctionnalités essentielles que tout établissement scolaire devrait rechercher dans une solution de gestion.',
      content: '',
      author: {
        name: 'Fatima Mohamed',
        role: 'CTO',
        avatar: '/avatars/fatima.jpg'
      },
      publishDate: '2025-01-10',
      readTime: '12 min',
      category: 'product',
      tags: ['gestion scolaire', 'fonctionnalités', 'guide'],
      views: '1.8K',
      comments: 24,
      featured: true,
      image: '/blog/fonctionnalites-sms.jpg'
    },
    {
      id: '3',
      title: 'Intelligence artificielle et personnalisation de l\'apprentissage',
      slug: 'ia-personnalisation-apprentissage',
      excerpt: 'Comment l\'IA peut aider les enseignants à adapter leur pédagogie aux besoins spécifiques de chaque élève.',
      content: '',
      author: {
        name: 'Omar Abdillahi',
        role: 'Directeur Produit',
        avatar: '/avatars/omar.jpg'
      },
      publishDate: '2025-01-05',
      readTime: '6 min',
      category: 'technology',
      tags: ['IA', 'apprentissage', 'personnalisation'],
      views: '3.1K',
      comments: 32,
      featured: false,
      image: '/blog/ia-education.jpg'
    },
    {
      id: '4',
      title: 'Guide pratique : Migrer vers un système de gestion numérique',
      slug: 'guide-migration-systeme-numerique',
      excerpt: 'Étapes clés et meilleures pratiques pour réussir la transition de votre établissement vers le numérique.',
      content: '',
      author: {
        name: 'Amina Said',
        role: 'Responsable Support',
        avatar: '/avatars/amina.jpg'
      },
      publishDate: '2024-12-28',
      readTime: '15 min',
      category: 'tips',
      tags: ['migration', 'transformation', 'guide pratique'],
      views: '1.5K',
      comments: 15,
      featured: false,
      image: '/blog/migration-numerique.jpg'
    },
    {
      id: '5',
      title: 'Sécurité des données : Protéger les informations sensibles des élèves',
      slug: 'securite-donnees-eleves',
      excerpt: 'Les enjeux de la protection des données personnelles dans les établissements scolaires et les solutions disponibles.',
      content: '',
      author: {
        name: 'Youssouf Ali',
        role: 'Expert Sécurité',
        avatar: '/avatars/youssouf.jpg'
      },
      publishDate: '2024-12-20',
      readTime: '10 min',
      category: 'technology',
      tags: ['sécurité', 'RGPD', 'protection des données'],
      views: '2.2K',
      comments: 28,
      featured: false,
      image: '/blog/securite-donnees.jpg'
    },
    {
      id: '6',
      title: 'Améliorer la communication école-famille grâce au numérique',
      slug: 'communication-ecole-famille-numerique',
      excerpt: 'Comment les outils digitaux peuvent renforcer le lien entre les établissements scolaires et les parents d\'élèves.',
      content: '',
      author: {
        name: 'Khadija Farah',
        role: 'Responsable Communication',
        avatar: '/avatars/khadija.jpg'
      },
      publishDate: '2024-12-15',
      readTime: '7 min',
      category: 'education',
      tags: ['communication', 'parents', 'engagement'],
      views: '1.9K',
      comments: 21,
      featured: false,
      image: '/blog/communication-parents.jpg'
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = regularPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      education: 'bg-blue-100 text-blue-700',
      technology: 'bg-purple-100 text-purple-700',
      product: 'bg-green-100 text-green-700',
      tips: 'bg-orange-100 text-orange-700',
      news: 'bg-red-100 text-red-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
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
              <a href="/blog" className="font-medium text-blue-600">Blog</a>
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
        <div className="relative max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-6 py-3 mb-8 rounded-full shadow-lg bg-white/80 backdrop-blur-sm"
          >
            <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Blog SmartAcademie</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text"
          >
            Actualités & Insights
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-12 text-xl text-gray-600"
          >
            Découvrez nos derniers articles sur l&apos;éducation numérique, 
            les nouvelles fonctionnalités et les meilleures pratiques
          </motion.p>

          {/* Search and Filters */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <div className="relative flex-1 max-w-md mx-auto">
              <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-12 pr-4 bg-white border border-gray-200 shadow-lg rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-3">
              <select
                value={selectedCategory}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white border border-gray-200 shadow-lg rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white border border-gray-200 shadow-lg rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Articles à la une</h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl">
                    <div className="relative h-64 bg-gradient-to-r from-blue-500 to-purple-500">
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                          <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <div className="text-sm opacity-75">Image à venir</div>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getCategoryColor(post.category)}`}>
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-3 space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <time>{formatDate(post.publishDate)}</time>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                        {post.title}
                      </h3>
                      
                      <p className="mb-4 text-gray-600 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-10 h-10 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                            {post.author.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{post.author.name}</div>
                            <div className="text-sm text-gray-500">{post.author.role}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''}
                </h2>
              </motion.div>

              <div className="space-y-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="overflow-hidden transition-all duration-300 bg-white shadow-lg cursor-pointer rounded-2xl hover:shadow-xl group"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="relative md:w-1/3 h-48 md:h-auto bg-gradient-to-r from-blue-500 to-purple-500">
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                          <BookOpen className="w-12 h-12 opacity-50" />
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getCategoryColor(post.category)}`}>
                            {categories.find(c => c.id === post.category)?.name}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1 p-6">
                        <div className="flex items-center mb-3 space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <time>{formatDate(post.publishDate)}</time>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                          {post.title}
                        </h3>
                        
                        <p className="mb-4 text-gray-600 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-md"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-8 h-8 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                              {post.author.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{post.author.name}</div>
                              <div className="text-xs text-gray-500">{post.author.role}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{post.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{post.comments}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}

                {filteredPosts.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-12 text-center bg-white rounded-2xl"
                  >
                    <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      Aucun article trouvé
                    </h3>
                    <p className="text-gray-600">
                      Essayez de modifier votre recherche ou de sélectionner une autre catégorie.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <div className="sticky space-y-8 top-6">
                {/* Newsletter */}
                <div className="p-6 bg-white shadow-lg rounded-2xl">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">Newsletter</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Recevez nos derniers articles et actualités directement dans votre boîte mail.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="w-full px-4 py-3 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-lg">
                      S'abonner
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="p-6 bg-white shadow-lg rounded-2xl">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">Catégories</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center justify-between ${
                          selectedCategory === category.id
                            ? 'bg-blue-100 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-sm font-medium">{category.name}</span>
                        <span className="text-xs text-gray-500">({category.count})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="p-6 bg-white shadow-lg rounded-2xl">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">Tags populaires</h3>
                  <div className="flex flex-wrap gap-2">
                    {['éducation', 'technologie', 'innovation', 'digitalisation', 'IA', 'sécurité', 'guide', 'conseils'].map((tag, index) => (
                      <button
                        key={index}
                        className="px-3 py-1 text-sm text-gray-600 transition-colors bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="p-6 bg-white shadow-lg rounded-2xl">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">Suivez-nous</h3>
                  <div className="flex space-x-3">
                    <button className="flex items-center justify-center w-10 h-10 text-white transition-colors bg-blue-600 rounded-xl hover:bg-blue-700">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 text-white transition-colors bg-blue-400 rounded-xl hover:bg-blue-500">
                      <Users className="w-5 h-5" />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 text-white transition-colors bg-gray-800 rounded-xl hover:bg-gray-900">
                      <Globe className="w-5 h-5" />
                    </button>
                  </div>
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
        className="py-20 bg-white"
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
              <Lightbulb className="w-4 h-4 mr-2 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Envie de contribuer ?</span>
            </motion.div>
            
            <h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Partagez votre expertise
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
              Vous êtes expert en éducation, technologie ou innovation ? 
              Rejoignez notre blog et partagez vos connaissances avec notre communauté.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl"
              >
                <span>Proposer un article</span>
                <ArrowRight className="w-5 h-5" />
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

export default BlogPage;