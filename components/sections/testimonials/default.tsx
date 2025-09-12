"use client";

import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Building2, Users, Award } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Dr. Ahmed Hassan",
      role: "Directeur",
      school: "École Internationale de Djibouti",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "SmartAcademie a révolutionné notre gestion administrative. La réduction du temps de traitement des inscriptions de 80% nous a permis de nous concentrer sur l'essentiel : l'éducation de nos étudiants.",
      metrics: {
        students: "1,200+ étudiants",
        improvement: "80% gain de temps",
        satisfaction: "98% satisfaction"
      }
    },
    {
      name: "Mme Fatima Al-Rashid",
      role: "Responsable Financière",
      school: "Lycée Moderne de Djibouti",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "Le module financier a transformé notre gestion des paiements. Fini les erreurs de calcul et les retards de facturation. Nos parents apprécient la transparence et la rapidité du système.",
      metrics: {
        students: "800+ étudiants",
        improvement: "95% paiements à temps",
        satisfaction: "Zéro erreur comptable"
      }
    },
    {
      name: "M. Omar Youssef",
      role: "Enseignant Principal",
      school: "École Primaire Al-Nour",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "L'interface enseignant est remarquable. Je peux gérer mes classes, saisir les notes et communiquer avec les parents depuis une seule plateforme. Mes collègues et moi économisons 2 heures par jour.",
      metrics: {
        students: "450+ étudiants",
        improvement: "2h économisées/jour",
        satisfaction: "100% adoption"
      }
    },
    {
      name: "Mme Aisha Mohamed",
      role: "Parent d'élève",
      school: "Utilisatrice du Portail Parent",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "Enfin un système qui me permet de suivre la scolarité de mes enfants en temps réel ! Les notifications SMS et la transparence des finances scolaires ont grandement amélioré ma relation avec l'école.",
      metrics: {
        students: "3 enfants suivis",
        improvement: "Suivi en temps réel",
        satisfaction: "Communication améliorée"
      }
    }
  ];

  const stats = [
    {
      icon: <Building2 className="h-8 w-8" />,
      number: "500+",
      label: "Établissements",
      description: "Font confiance à SmartAcademie"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "50K+",
      label: "Utilisateurs",
      description: "Actifs quotidiennement"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "98.5%",
      label: "Satisfaction",
      description: "Taux de recommandation"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full mb-6">
            <Quote className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">Témoignages Clients</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment SmartAcademie transforme la gestion des établissements scolaires à travers Djibouti
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                <div className="text-blue-600">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
                  "{testimonials[currentSlide].quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentSlide].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentSlide].name}
                    </div>
                    <div className="text-blue-600 font-medium">
                      {testimonials[currentSlide].role}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonials[currentSlide].school}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 ml-8">
                <Quote className="h-16 w-16 text-blue-100" />
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              {Object.entries(testimonials[currentSlide].metrics).map(([key, value], index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-bold text-blue-600">{value}</div>
                  <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-blue-300 transition-all duration-300 shadow-sm"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-blue-300 transition-all duration-300 shadow-sm"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Plus de 500 établissements font confiance à SmartAcademie pour gérer leur administration scolaire. 
              Découvrez pourquoi ils nous recommandent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                Demander une référence client
              </button>
              <button className="border border-blue-300 text-blue-600 px-8 py-3 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300">
                Voir plus de témoignages
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;