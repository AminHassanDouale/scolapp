import React from 'react';
import { 
  Users, 
  GraduationCap, 
  CreditCard, 
  Eye, 
  UserCheck, 
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Award
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Portail Administrateur",
      subtitle: "Contrôle total de votre établissement",
      description: "Interface complète pour gérer tous les aspects de votre école avec des droits d'accès complets et une vue d'ensemble sur toutes les opérations.",
      features: [
        "Gestion des utilisateurs et permissions",
        "Inscriptions et validation des étudiants",
        "Structure académique complète",
        "Personnel enseignant et moniteurs",
        "Paramètres système avancés",
        "Rapports et statistiques détaillés"
      ],
      benefits: [
        "Contrôle centralisé complet",
        "Sécurité des données renforcée",
        "Processus automatisés",
        "Vision globale en temps réel"
      ],
      gradient: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50",
      route: "/admin/dashboard",
      stats: { users: "100+", uptime: "99.9%" }
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Module Financier",
      subtitle: "Gestion financière intégrée",
      description: "Solution complète pour gérer tous les aspects financiers de votre établissement scolaire avec automatisation et reporting avancé.",
      features: [
        "Paiements et encaissements",
        "Factures et échéances",
        "Frais scolaires personnalisés",
        "Budgets et prévisions",
        "Réconciliation bancaire",
        "Rapports financiers avancés"
      ],
      benefits: [
        "Réduction des impayés",
        "Automatisation des processus",
        "Transparence financière totale",
        "Meilleur contrôle des flux"
      ],
      gradient: "from-green-600 to-emerald-600",
      bgColor: "bg-green-50",
      route: "/financial/dashboard",
      stats: { payments: "10K+", accuracy: "99.8%" }
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Portail Enseignant",
      subtitle: "Outils pédagogiques modernes",
      description: "Interface dédiée aux enseignants pour une gestion efficace de leurs classes et évaluations avec des outils pédagogiques avancés.",
      features: [
        "Gestion des classes assignées",
        "Création et suivi des examens",
        "Saisie des notes et évaluations",
        "Contrôle des présences",
        "Emploi du temps personnel",
        "Communication avec les parents"
      ],
      benefits: [
        "Gain de temps considérable",
        "Suivi pédagogique amélioré",
        "Communication facilitée",
        "Flexibilité d'enseignement"
      ],
      gradient: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-50",
      route: "/teacher/dashboard",
      stats: { teachers: "200+", satisfaction: "96%" }
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Portail Étudiant",
      subtitle: "Espace personnel étudiant",
      description: "Interface intuitive permettant aux étudiants de suivre leur parcours académique et financier avec un accès simplifié à toutes leurs informations.",
      features: [
        "Consultation des notes et bulletins",
        "Historique des présences",
        "Emploi du temps personnalisé",
        "Suivi des paiements",
        "Communication institutionnelle",
        "Téléchargement de documents"
      ],
      benefits: [
        "Autonomie complète",
        "Suivi en temps réel",
        "Communication directe",
        "Accès 24/7 sécurisé"
      ],
      gradient: "from-orange-600 to-red-600",
      bgColor: "bg-orange-50",
      route: "/student/dashboard",
      stats: { students: "5K+", engagement: "94%" }
    },
    {
      icon: <UserCheck className="w-12 h-12" />,
      title: "Portail Tuteur/Parent",
      subtitle: "Suivi parental complet",
      description: "Plateforme dédiée aux parents pour suivre la scolarité et les finances de leurs enfants avec notifications automatiques et communication directe.",
      features: [
        "Suivi académique des enfants",
        "Consultation des notes et bulletins",
        "Historique des présences",
        "Gestion des paiements",
        "Communication avec l'école",
        "Alertes et notifications SMS"
      ],
      benefits: [
        "Implication parentale renforcée",
        "Suivi en temps réel",
        "Communication simplifiée",
        "Alertes automatiques"
      ],
      gradient: "from-teal-600 to-cyan-600",
      bgColor: "bg-teal-50",
      route: "/guardian/dashboard",
      stats: { parents: "3K+", notifications: "Real-time" }
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Portail Surveillant",
      subtitle: "Supervision et discipline",
      description: "Interface spécialisée pour les surveillants et le personnel de supervision avec outils de gestion disciplinaire et de sécurité.",
      features: [
        "Surveillance des étudiants",
        "Gestion des incidents disciplinaires",
        "Contrôle des présences générales",
        "Rapports de surveillance",
        "Communication avec l'administration",
        "Suivi comportemental"
      ],
      benefits: [
        "Discipline efficace",
        "Sécurité renforcée",
        "Suivi comportemental",
        "Communication rapide"
      ],
      gradient: "from-gray-600 to-slate-600",
      bgColor: "bg-gray-50",
      route: "/monitor/dashboard",
      stats: { monitors: "50+", incidents: "Tracked 24/7" }
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-blue-100 rounded-full">
            <Shield className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Services Complets</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text">
            Six portails spécialisés pour chaque utilisateur
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            ScolApp propose des interfaces dédiées pour chaque type d'utilisateur, optimisant l'expérience et l'efficacité
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
                    {service.title}
                  </h3>
                  
                  <p className="mb-4 text-lg font-medium text-gray-600">
                    {service.subtitle}
                  </p>
                  
                  <p className="mb-6 leading-relaxed text-gray-700">
                    {service.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 mb-6">
                    {Object.entries(service.stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-semibold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="flex items-center mb-3 text-sm font-semibold text-gray-900">
                      <Award className="w-4 h-4 mr-2 text-yellow-500" />
                      Avantages clés
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 text-sm font-medium text-gray-600 rounded-lg bg-white/80"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                 
                </div>

                {/* Features List */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="p-6 border shadow-sm bg-white/80 backdrop-blur-sm rounded-2xl border-white/50">
                    <h4 className="mb-4 text-lg font-semibold text-gray-900">
                      Fonctionnalités principales :
                    </h4>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="p-8 text-white bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl">
            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/20">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium text-white/90">Solution Complète</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">
              Une plateforme, six expériences utilisateur optimisées
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-blue-100">
              Chaque portail est conçu spécifiquement pour répondre aux besoins uniques de chaque type d'utilisateur, 
              garantissant une expérience fluide et efficace pour tous.
            </p>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;