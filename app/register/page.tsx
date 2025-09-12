'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User,
  Mail,
  Phone,
  Building,
  MapPin,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  ArrowRight,
  Shield,
  Users,
  Calendar,
  CreditCard,
  Globe,
  Award,
  Zap,
  Check,
  X
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  organizationType: string;
  organizationName: string;
  organizationSize: string;
  address: string;
  city: string;
  plan: string;
  agreeTerms: boolean;
  agreeMarketing: boolean;
}

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    organizationType: '',
    organizationName: '',
    organizationSize: '',
    address: '',
    city: '',
    plan: 'premium',
    agreeTerms: false,
    agreeMarketing: false
  });

  const totalSteps = 4;

  const organizationTypes = [
    { id: 'school', name: 'École primaire' },
    { id: 'college', name: 'Collège' },
    { id: 'lycee', name: 'Lycée' },
    { id: 'university', name: 'Université' },
    { id: 'training', name: 'Centre de formation' },
    { id: 'other', name: 'Autre' }
  ];

  const organizationSizes = [
    { id: 'small', name: '1-50 étudiants' },
    { id: 'medium', name: '51-200 étudiants' },
    { id: 'large', name: '201-500 étudiants' },
    { id: 'xlarge', name: '500+ étudiants' }
  ];

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '15,000',
      period: 'mois',
      description: 'Parfait pour les petites écoles',
      features: ['100 étudiants max', 'Modules essentiels', 'Support email'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '25,000',
      period: 'mois',
      description: 'Solution complète recommandée',
      features: ['500 étudiants max', 'Tous les modules', 'Support prioritaire', 'Formation incluse'],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '45,000',
      period: 'mois',
      description: 'Pour les grands établissements',
      features: ['Étudiants illimités', 'Personnalisations', 'Support 24/7', 'API complète'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.password && formData.confirmPassword && formData.password === formData.confirmPassword;
      case 3:
        return formData.organizationType && formData.organizationName && formData.organizationSize;
      case 4:
        return formData.agreeTerms;
      default:
        return false;
    }
  };

  const getPasswordStrength = (password: string) => {
    let score = 0;
    const checks = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    Object.values(checks).forEach(check => {
      if (check) score++;
    });

    return { score, checks };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">Informations personnelles</h2>
              <p className="text-gray-600">Commençons par vos coordonnées</p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Prénom *</label>
                <div className="relative">
                  <User className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('firstName', e.target.value)}
                    className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Jean"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Nom *</label>
                <div className="relative">
                  <User className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('lastName', e.target.value)}
                    className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Dupont"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Adresse email *</label>
              <div className="relative">
                <Mail className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('email', e.target.value)}
                  className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="jean.dupont@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Téléphone *</label>
              <div className="relative">
                <Phone className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('phone', e.target.value)}
                  className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+253 XX XX XX XX"
                />
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">Sécurité du compte</h2>
              <p className="text-gray-600">Créez un mot de passe sécurisé</p>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Mot de passe *</label>
              <div className="relative">
                <Lock className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('password', e.target.value)}
                  className="w-full py-3 pl-10 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
              
              {formData.password && (
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Force du mot de passe</span>
                    <span className="text-sm font-medium text-gray-700">
                      {passwordStrength.score < 3 ? 'Faible' : passwordStrength.score < 5 ? 'Moyen' : 'Fort'}
                    </span>
                  </div>
                  <div className="flex mb-3 space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`h-2 flex-1 rounded ${
                          i <= passwordStrength.score
                            ? passwordStrength.score < 3
                              ? 'bg-red-400'
                              : passwordStrength.score < 5
                              ? 'bg-yellow-400'
                              : 'bg-green-400'
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="space-y-1">
                    {Object.entries(passwordStrength.checks).map(([key, valid]) => (
                      <div key={key} className="flex items-center space-x-2 text-xs">
                        {valid ? (
                          <Check className="w-3 h-3 text-green-500" />
                        ) : (
                          <X className="w-3 h-3 text-red-500" />
                        )}
                        <span className={valid ? 'text-green-600' : 'text-red-600'}>
                          {key === 'length' && '8 caractères minimum'}
                          {key === 'uppercase' && 'Une majuscule'}
                          {key === 'lowercase' && 'Une minuscule'}
                          {key === 'number' && 'Un chiffre'}
                          {key === 'special' && 'Un caractère spécial'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Confirmer le mot de passe *</label>
              <div className="relative">
                <Lock className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('confirmPassword', e.target.value)}
                  className="w-full py-3 pl-10 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="mt-2 text-sm text-red-600">Les mots de passe ne correspondent pas</p>
              )}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">Informations établissement</h2>
              <p className="text-gray-600">Parlez-nous de votre établissement</p>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Type d'établissement *</label>
              <select
                value={formData.organizationType}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange('organizationType', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Sélectionnez un type</option>
                {organizationTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Nom de l'établissement *</label>
              <div className="relative">
                <Building className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  value={formData.organizationName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('organizationName', e.target.value)}
                  className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="École Primaire Moderne"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Taille de l'établissement *</label>
              <select
                value={formData.organizationSize}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange('organizationSize', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Sélectionnez une taille</option>
                {organizationSizes.map(size => (
                  <option key={size.id} value={size.id}>{size.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Adresse</label>
              <div className="relative">
                <MapPin className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('address', e.target.value)}
                  className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Avenue Hassan Gouled"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Ville</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('city', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Djibouti-Ville"
              />
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">Choisir votre plan</h2>
              <p className="text-gray-600">Sélectionnez le plan qui correspond à vos besoins</p>
            </div>

            <div className="space-y-4">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => handleInputChange('plan', plan.id)}
                  className={`relative p-6 border-2 rounded-2xl cursor-pointer transition-all ${
                    formData.plan === plan.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
                        Recommandé
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${plan.color} text-white`}>
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                        <p className="text-sm text-gray-600">{plan.description}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        {plan.price} <span className="text-sm text-gray-600">DJF/{plan.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <ul className="space-y-1 text-sm text-gray-600">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-yellow-50 rounded-2xl">
              <div className="flex items-start space-x-3">
                <Zap className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Essai gratuit de 30 jours</h4>
                  <p className="mt-1 text-sm text-yellow-700">
                    Testez toutes les fonctionnalités sans engagement. 
                    Vous pourrez changer de plan à tout moment.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreeTerms}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('agreeTerms', e.target.checked)}
                  className="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  J'accepte les{' '}
                  <a href="/terms" className="text-blue-600 hover:underline">
                    conditions d'utilisation
                  </a>{' '}
                  et la{' '}
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    politique de confidentialité
                  </a>{' '}
                  de SmartAcademie *
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={formData.agreeMarketing}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('agreeMarketing', e.target.checked)}
                  className="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="marketing" className="text-sm text-gray-600">
                  Je souhaite recevoir des informations sur les nouveautés et 
                  conseils SmartAcademie par email
                </label>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white border-b shadow-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-blue-600">SmartAcademie</div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Déjà un compte ?</span>
              <a href="/login" className="px-4 py-2 font-medium text-blue-600 transition-colors hover:text-blue-700">
                Se connecter
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Left Side - Progress & Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex lg:w-5/12 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800"
        >
          <div className="flex flex-col justify-center w-full p-12 text-white">
            <div className="mb-12">
              <h1 className="mb-4 text-4xl font-bold">
                Rejoignez plus de 500 établissements
              </h1>
              <p className="text-xl text-blue-100">
                Transformez votre gestion scolaire avec SmartAcademie, 
                la solution de référence à Djibouti.
              </p>
            </div>

            {/* Progress Steps */}
            <div className="mb-12 space-y-6">
              {[
                { number: 1, title: 'Informations personnelles', desc: 'Vos coordonnées de base' },
                { number: 2, title: 'Sécurité du compte', desc: 'Création du mot de passe' },
                { number: 3, title: 'Votre établissement', desc: 'Informations institutionnelles' },
                { number: 4, title: 'Choix du plan', desc: 'Sélection de votre abonnement' }
              ].map((stepInfo) => (
                <div key={stepInfo.number} className="flex items-center space-x-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepInfo.number
                      ? 'bg-white text-blue-600'
                      : 'bg-blue-500 text-white'
                  }`}>
                    {step > stepInfo.number ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      stepInfo.number
                    )}
                  </div>
                  <div>
                    <div className={`font-medium ${step >= stepInfo.number ? 'text-white' : 'text-blue-200'}`}>
                      {stepInfo.title}
                    </div>
                    <div className="text-sm text-blue-200">{stepInfo.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-green-400" />
                <span>Données sécurisées et conformes RGPD</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-green-400" />
                <span>Essai gratuit de 30 jours</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-green-400" />
                <span>Support technique inclus</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <div className="flex-1 lg:w-7/12">
          <div className="flex items-center justify-center min-h-full p-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-full max-w-md"
            >
              {/* Mobile Progress */}
              <div className="mb-8 lg:hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">
                    Étape {step} sur {totalSteps}
                  </span>
                  <span className="text-sm text-gray-500">
                    {Math.round((step / totalSteps) * 100)}% complété
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 transition-all duration-300 bg-blue-600 rounded-full"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              <div className="p-8 bg-white shadow-xl rounded-3xl">
                {renderStep()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    disabled={step === 1}
                    className={`px-6 py-3 font-medium rounded-xl transition-all ${
                      step === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    Précédent
                  </button>

                  {step < totalSteps ? (
                    <button
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      className={`flex items-center space-x-2 px-6 py-3 font-medium rounded-xl transition-all ${
                        isStepValid()
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <span>Suivant</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      disabled={!isStepValid()}
                      className={`flex items-center space-x-2 px-6 py-3 font-medium rounded-xl transition-all ${
                        isStepValid()
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <span>Créer mon compte</span>
                      <CheckCircle className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  En créant votre compte, vous rejoignez une communauté de 500+ établissements 
                  qui font confiance à SmartAcademie
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;