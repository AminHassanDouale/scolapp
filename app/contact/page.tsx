'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  User,
  Building,
  MessageSquare,
  Calendar,
  Headphones,
  Globe,
  ArrowRight,
  Shield
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  subject: string;
  message: string;
  type: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    type: 'demo'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adresse',
      details: ['Avenue Hassan Gouled', 'Djibouti-Ville, Djibouti'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      details: [ '+253 77 04 94 95'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['contact@ScolApp.com', 'support@ScolApp.com'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horaires',
      details: ['DIM - JEU: 8h00 - 17h00', 'SAM: 8h00 - 12h00'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Demande de démonstration',
      description: 'Découvrez ScolApp en action avec une démo personnalisée',
      features: ['Présentation complète', 'Session personnalisée', 'Q&A en direct'],
      cta: 'Réserver une démo'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Support technique',
      description: 'Notre équipe technique est là pour vous accompagner',
      features: ['Support réactif', 'Formation incluse', 'Documentation complète'],
      cta: 'Contacter le support'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Solutions enterprise',
      description: 'Solutions personnalisées pour les grands établissements',
      features: ['Analyse des besoins', 'Solution sur mesure', 'Accompagnement dédié'],
      cta: 'Discuter du projet'
    }
  ];

  const faq = [
   {
  question: "Comment puis-je obtenir une démonstration ?",
  answer: "Nous vous enverrons un accès (email et mot de passe) afin de tester la démonstration et découvrir la solution en détail."
},
    {
      question: "Quel est le délai de mise en œuvre ?",
      answer: "La mise en œuvre standard prend entre 48h à 1 semaine selon la complexité de votre établissement. Nous vous accompagnons à chaque étape."
    },
    {
      question: "Proposez-vous une formation ?",
      answer: "Oui, nous offrons une formation complète à votre équipe, incluant des sessions en présentiel et un accès à notre centre de ressources en ligne."
    },
    {
      question: "Quels sont vos horaires de support ?",
      answer: "Notre support technique est disponible au bureau du Dimanche au Jeudi de 8h à 17h. En dehors de ces horaires, un support en ligne reste disponible 24h/24 et 7j/7, avec une assistance prioritaire pour nos clients Premium."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      

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
            <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Parlons de votre projet</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text"
          >
            Contactez-nous
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto mb-12 text-xl text-gray-600"
          >
            Notre équipe d&apos;experts est là pour répondre à toutes vos questions et vous accompagner 
            dans votre projet de transformation numérique.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${info.gradient} text-white mb-4`}>
                  {info.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="text-sm text-gray-600">{detail}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="p-8 bg-white shadow-xl rounded-3xl">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Envoyez-nous un message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Type */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Type de demande
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="demo">Demande de démonstration</option>
                      <option value="support">Support technique</option>
                      <option value="sales">Information commerciale</option>
                      <option value="partnership">Partenariat</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <User className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone and Organization */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Téléphone
                      </label>
                      <div className="relative">
                        <Phone className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+253 XX XX XX XX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Établissement
                      </label>
                      <div className="relative">
                        <Building className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Nom de votre école"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Objet de votre message"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 resize-none rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Décrivez votre besoin ou votre question..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center w-full px-6 py-4 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Message envoyé!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="p-4 mt-6 bg-blue-50 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-700">
                      <div className="mb-1 font-medium">Vos données sont protégées</div>
                      <div>Nous respectons votre confidentialité et ne partageons jamais vos informations.</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Services & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Comment pouvons-nous vous aider ?</h2>
                
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <div key={index} className="p-6 transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-3 text-blue-600 bg-blue-100 rounded-xl">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2 text-lg font-bold text-gray-900">{service.title}</h3>
                          <p className="mb-3 text-sm text-gray-600">{service.description}</p>
                          <ul className="mb-4 space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                                <CheckCircle className="flex-shrink-0 w-4 h-4 text-green-500" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <button className="flex items-center space-x-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700">
                            <span>{service.cta}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="p-6 bg-white shadow-lg rounded-2xl">
                <h3 className="mb-6 text-xl font-bold text-gray-900">Questions fréquentes</h3>
                <div className="space-y-4">
                  {faq.map((item, index) => (
                    <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0">
                      <h4 className="mb-2 font-semibold text-gray-900">{item.question}</h4>
                      <p className="text-sm text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
     

      {/* Footer */}
      <footer className="py-16 text-white bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 text-2xl font-bold text-blue-400">ScolApp</div>
            <p className="max-w-2xl mx-auto text-gray-400">
              La solution de gestion scolaire moderne adaptée aux établissements djiboutiens.
            </p>
            <div className="pt-8 mt-8 border-t border-gray-800">
              <p className="text-gray-500">&copy; 2025 ScolApp. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;