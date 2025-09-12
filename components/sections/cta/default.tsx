import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Clock, Shield, HeadphonesIcon, Globe } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute w-64 h-64 rounded-full top-1/4 right-1/4 bg-white/10 filter blur-3xl animate-float"></div>
        <div className="absolute rounded-full bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/10 filter blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative max-w-6xl px-4 mx-auto text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm">
          <Clock className="w-4 h-4 mr-2 text-blue-300" />
          <span className="text-sm font-medium text-blue-200">Offre limitée</span>
        </div>

        <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
          Prêt à révolutionner
          <br />
          <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            votre école ?
          </span>
        </h2>

        {/* Uncomment if needed
        <p className="max-w-3xl mx-auto mb-12 text-xl leading-relaxed text-blue-100">
          Rejoignez les 500+ écoles djiboutiennes qui ont déjà fait confiance à ScolApp 
          pour digitaliser leur gestion scolaire
        </p>
        */}

        <div className="flex flex-col items-center justify-center gap-6 mb-16 sm:flex-row">
          <Link href="/contact">
            <button className="flex items-center px-10 py-4 text-lg font-bold text-gray-900 transition-all duration-300 transform bg-white shadow-2xl group rounded-2xl hover:bg-gray-100 hover:-translate-y-1">
              Démarrer l'essai gratuit
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-blue-200">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span>Sécurisé & Conforme</span>
          </div>
          <div className="flex items-center gap-2">
            <HeadphonesIcon className="w-5 h-5" />
            <span>Support 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <span>Interface Bilingue</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;