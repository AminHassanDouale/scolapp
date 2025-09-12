"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Users, GraduationCap, Building2, TrendingUp, Clock, Award, BookOpen, CreditCard } from "lucide-react";

const Stats = () => {
  const [animatedStats, setAnimatedStats] = useState({
    schools: 0,
    students: 0,
    teachers: 0,
    revenue: 0
  });

  const finalStats = {
    schools: 3,
    students: 205,
    teachers: 2500,
    revenue: 98.5
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        schools: Math.floor(finalStats.schools * progress),
        students: Math.floor(finalStats.students * progress),
        teachers: Math.floor(finalStats.teachers * progress),
        revenue: Math.floor(finalStats.revenue * progress * 10) / 10
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: <Building2 className="w-8 h-8" />,
      number: animatedStats.schools,
      label: "Établissements",
      suffix: "+",
      description: "Écoles utilisent ScolApp",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: animatedStats.students,
      label: "Étudiants",
      suffix: "+",
      description: "Étudiants gérés quotidiennement",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      number: animatedStats.teachers,
      label: "Enseignants",
      suffix: "+",
      description: "Professeurs utilisent nos outils",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: animatedStats.revenue,
      label: "Satisfaction",
      suffix: "%",
      description: "Taux de satisfaction client",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Économie de temps",
      value: "75%",
      description: "Réduction du temps administratif"
    },
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      title: "Performance",
      value: "99.9%",
      description: "Disponibilité du système"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-purple-600" />,
      title: "Modules",
      value: "15+",
      description: "Fonctionnalités intégrées"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-orange-600" />,
      title: "ROI",
      value: "300%",
      description: "Retour sur investissement"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-blue-400/5 filter blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 filter blur-3xl animate-pulse"></div>
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            ScolApp en Chiffres
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-blue-100">
            Plus de 5 ans d'expérience au service de l'éducation.
          </p>
        </div>

        {/* Main Stats 
        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20 hover:bg-white/15"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.gradient} text-white mb-6`}>
                {stat.icon}
              </div>
              <div className="mb-2 text-4xl font-bold text-white">
                {typeof stat.number === 'number' ? stat.number.toLocaleString() : stat.number}{stat.suffix}
              </div>
              <div className="mb-2 text-lg font-semibold text-blue-100">{stat.label}</div>
              <div className="text-sm text-blue-200">{stat.description}</div>
            </div>
          ))}
        </div>
        */}

        {/* Additional Features */}
        <div className="p-8 border bg-white/5 backdrop-blur-sm rounded-3xl border-white/10">
          <h3 className="mb-8 text-2xl font-bold text-center text-white">
            Pourquoi choisir ScolApp ?
          </h3>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-white/10 rounded-xl">
                  {feature.icon}
                </div>
                <div className="mb-1 text-2xl font-bold text-white">{feature.value}</div>
                <div className="mb-2 text-sm font-medium text-blue-100">{feature.title}</div>
                <div className="text-xs text-blue-200">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-blue-100">
            Rejoignez les centaines d'établissements qui nous font confiance
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default Stats;