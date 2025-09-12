"use client";

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Sparkles, Star, Zap, Users, BookOpen, CreditCard, BarChart3 } from "lucide-react";

const Hero = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const features = [
    'Gestion des Étudiants', 
    'Portail Enseignants', 
    'Système Financier', 
    'Rapports Avancés',
    'Portail Parents',
    'Gestion des Examens'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 bg-blue-300/30 mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute w-64 h-64 rounded-full top-3/4 right-1/4 bg-purple-300/30 mix-blend-multiply filter blur-xl animate-float-delayed"></div>
        <div className="absolute w-32 h-32 rounded-full top-1/2 left-1/2 bg-pink-300/30 mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 pt-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-blue-100 rounded-full animate-appear">
              <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">ScolApp - Le numérique au service de l’éducation.</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight delay-100 md:text-6xl lg:text-7xl animate-appear">
              <span className="text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text">
                Révolutionnez
              </span>
              <br />
              <span className="text-gray-900">votre école avec</span>
              <br />
              <span className="relative">
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  {features[currentFeature]}
                </span>
                <div className="absolute left-0 right-0 h-1 rounded-full bottom-2 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></div>
              </span>
            </h1>

          <p className="max-w-2xl mb-8 text-xl text-gray-600 delay-200 animate-appear">
  Solution de gestion scolaire complète pour tous les niveaux : maternelle, primaire, collège, lycée et université. 
  Disponible sur Web, iOS et Android avec gestion des étudiants, finances, examens, emplois du temps et bien plus.
</p>

            

            {/* Key Modules Preview */}
            <div className="grid grid-cols-2 gap-4 mb-12 md:grid-cols-4 animate-appear delay-400">
              <div className="p-4 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl">
                <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="text-sm font-medium text-gray-700">Gestion Étudiants</div>
              </div>
              <div className="p-4 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl">
                <CreditCard className="w-6 h-6 mx-auto mb-2 text-green-600" />
                <div className="text-sm font-medium text-gray-700">Finances</div>
              </div>
              <div className="p-4 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl">
                <BookOpen className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                <div className="text-sm font-medium text-gray-700">Académique</div>
              </div>
              <div className="p-4 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl">
                <BarChart3 className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                <div className="text-sm font-medium text-gray-700">Rapports</div>
              </div>
            </div>

            {/* Trust Indicators 
            <div className="grid grid-cols-2 gap-6 delay-500 md:grid-cols-4 animate-appear">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Écoles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">50K+</div>
                <div className="text-sm text-gray-600">Étudiants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
            */}
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative animate-appear delay-600">
            <div className="relative p-8 bg-white border border-gray-100 shadow-2xl rounded-3xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">ScolApp Dashboard</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">1,247</div>
                  <div className="text-sm text-gray-600">Étudiants actifs</div>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">98.2%</div>
                  <div className="text-sm text-gray-600">Taux de présence</div>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">45</div>
                  <div className="text-sm text-gray-600">Enseignants</div>
                </div>
                <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">25</div>
                  <div className="text-sm text-gray-600">Classes</div>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span>Inscriptions cette année</span>
                    <span className="font-medium">1,247/1,500</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-[83%] animate-pulse"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span>Revenus mensuels</span>
                    <span className="font-medium">2.5M DJF</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-[75%] animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Module Icons */}
            <div className="absolute p-3 text-white shadow-lg -top-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl animate-float">
              <Star className="w-6 h-6" />
            </div>
            <div className="absolute p-3 text-white shadow-lg -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl animate-float-delayed">
              <Zap className="w-6 h-6" />
            </div>
            <div className="absolute p-2 text-white rounded-lg shadow-lg top-1/2 -left-8 bg-gradient-to-r from-purple-500 to-pink-500 animate-float">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;