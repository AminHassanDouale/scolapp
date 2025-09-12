"use client";

import React, { useState } from 'react';
import { Plus, Minus, Brain } from "lucide-react";
import Link from 'next/link';


const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "ScolApp est-il disponible sur mobile (iOS et Android) ?",
      answer: "Oui ! ScolApp sera bientôt disponible sur toutes les plateformes : application web complète, application mobile iOS et Android. Vous pourrez gérer votre établissement depuis n'importe quel appareil, avec synchronisation en temps réel de toutes vos données."
    },
    {
      question: "ScolApp convient-il à tous les niveaux d'enseignement ?",
      answer: "Absolument ! ScolApp s'adapte parfaitement à tous les établissements : maternelle, primaire, collège, lycée et université. Chaque niveau dispose de modules spécifiques adaptés à ses besoins pédagogiques, administratifs et réglementaires particuliers."
    },
    {
      question: "Quels modules sont inclus dans ScolApp ?",
      answer: "ScolApp inclut plus de 15 modules intégrés : gestion des étudiants et tuteurs, portails enseignants et parents, système financier complet (paiements, factures, échéances), gestion académique (niveaux, classes, programmes), système d'examens, présences, discipline, rapports avancés, communications SMS, calendrier académique et bien plus."
    },
    {
      question: "Comment fonctionne le système de rôles et d'accès ?",
      answer: "Notre plateforme propose des portails dédiés pour chaque utilisateur : administrateurs avec accès complet, enseignants pour leurs classes et matières, étudiants pour consulter leurs notes et emplois du temps, tuteurs/parents pour suivre leurs enfants, et surveillants pour la discipline. Chaque rôle a des permissions spécifiques et sécurisées."
    },
    {
      question: "Le système financier peut-il gérer plusieurs types d'établissements ?",
      answer: "Oui, notre module financier s'adapte à tous types d'établissements : écoles primaires, collèges, lycées et universités. Il gère les inscriptions, frais scolaires, échéances de paiement, factures automatiques, réconciliation bancaire, budgets et rapports financiers détaillés."
    },
    {
      question: "ScolApp fonctionne-t-il hors ligne ?",
      answer: "ScolApp est une application web qui nécessite une connexion internet pour fonctionner. Cependant, nous proposons des solutions de sauvegarde locale et la synchronisation automatique des données pour assurer la continuité de service."
    },
    {
      question: "Comment migrer nos données existantes vers ScolApp ?",
      answer: "Nous proposons un service de migration gratuit pour tous vos abonnements. Notre équipe technique peut importer vos données depuis Excel, Access, ou tout autre système de gestion scolaire. La migration inclut les étudiants, enseignants, notes, et historiques financiers."
    },
    {
      question: "Le système peut-il gérer plusieurs campus ou établissements ?",
      answer: "Absolument ! Notre solution Enterprise permet la gestion multi-campus avec des rapports consolidés, une administration centralisée, et des paramètres spécifiques à chaque établissement. Parfait pour les groupes scolaires et réseaux d'écoles."
    },
    {
      question: "Quels types de rapports peut générer ScolApp ?",
      answer: "ScolApp génère plus de 50 types de rapports : bulletins de notes, rapports de présence, analyses financières, statistiques académiques, rapports de discipline, tableaux de bord en temps réel, exports Excel/PDF personnalisés, et bien plus. Tous les rapports sont configurables selon vos besoins."
    },
    {
      question: "Comment fonctionne le système de communications ?",
      answer: "Notre système inclut des notifications en temps réel, messagerie interne entre utilisateurs, envoi de SMS automatiques aux parents, alertes d'absences, rappels de paiement, et notifications d'événements. Tout est centralisé dans une interface unique."
    },
    {
      question: "ScolApp est-il sécurisé pour les données sensibles ?",
      answer: "La sécurité est notre priorité. ScolApp utilise le cryptage SSL, des sauvegardes automatiques quotidiennes, un contrôle d'accès par rôles stricte, des journaux d'activité complets, et respecte les normes de protection des données. Vos informations sont protégées à 100%."
    },
    {
      question: "Puis-je personnaliser ScolApp selon nos besoins spécifiques ?",
      answer: "Oui, nous proposons des personnalisations complètes : ajout de modules spécifiques, adaptation de l'interface à votre charte graphique, configuration des workflows selon vos procédures, et développement de fonctionnalités sur mesure pour vos besoins particuliers."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-blue-100 rounded-full">
            <Brain className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Questions fréquentes</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text">
            Tout ce que vous devez savoir sur ScolApp
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez les réponses aux questions les plus courantes sur notre plateforme de gestion scolaire
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md"
            >
              <button
                className="flex items-center justify-between w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-2xl"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="pr-4 text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-600 transition-transform duration-200" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 transition-transform duration-200" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div 
                  id={`faq-answer-${index}`}
                  className="px-6 pb-6 animate-fadeIn"
                >
                  <div className="h-px mb-4 bg-gray-200"></div>
                  <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

          
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FAQ;