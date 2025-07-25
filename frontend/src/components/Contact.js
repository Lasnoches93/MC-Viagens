import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelers: '',
    budget: '',
    dates: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const destinations = t('contact.form.destinations');

  const budgetRanges = t('contact.form.budget_ranges');

  return (
    <section id="contact" className="py-20 bg-black-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {t('contact.title')} <span className="text-gold-500">{t('contact.subtitle')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                {t('contact.info.title')}
              </h3>
              <p className="text-gray-300 mb-8">
                {t('contact.info.description')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gold-500/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Téléphone</h4>
                  <p className="text-gray-300">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gold-500/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">contact@jhenyvoyages.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gold-500/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Localisation</h4>
                  <p className="text-gray-300">France (Consultation en ligne)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gold-500/20 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Horaires</h4>
                  <p className="text-gray-300">Lun-Ven: 9h-18h</p>
                  <p className="text-gray-300">Sam: 10h-16h</p>
                </div>
              </div>
            </div>

            <div className="bg-black-900 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-4">Pourquoi choisir Jheny ?</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                  <span>Expertise exclusive de l'Amérique latine</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                  <span>Recherche de prix compétitifs à l'international</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                  <span>Accompagnement personnalisé 24/7</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                  <span>En cas d'insatisfaction, un avoir de 15% pour une autre destination vous sera proposée</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black-900 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              Demande de devis gratuit
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Nom complet *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black-800 text-white border border-gray-700 focus:outline-none focus:border-gold-500 transition-colors duration-200"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black-800 text-white border border-gray-700 focus:outline-none focus:border-gold-500 transition-colors duration-200"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black-800 text-white border border-gray-700 focus:outline-none focus:border-gold-500 transition-colors duration-200"
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Nombre de voyageurs *</label>
                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black-800 text-white border border-gray-700 focus:outline-none focus:border-gold-500 transition-colors duration-200"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="5+">5+ personnes</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Destination souhaitée *</label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black-800 text-white border border-gray-700 focus:outline-none focus:border-gold-500 transition-colors duration-200"
                  >
                    <option value="">Choisissez une destination</option>
                    {destinations.map((dest) => (
                      <option key={dest} value={dest}>{dest}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Budget approximatif *</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black-800 text-white border border-gray-700 focus:outline-none focus:border-gold-500 transition-colors duration-200"
                  >
                    <option value="">Sélectionnez votre budget</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Dates préférées</label>
                <input
                  type="text"
                  name="dates"
                  value={formData.dates}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black-800 text-white border border-gray-700 focus:outline-none focus:border-gold-500 transition-colors duration-200"
                  placeholder="Ex: Mars 2024, Été 2024, Flexible"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-black-800 text-white border border-gray-700 focus:outline-none focus:border-gold-500 transition-colors duration-200"
                  placeholder="Décrivez-nous votre voyage idéal, vos attentes particulières..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gold-500 text-black py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Envoyer ma demande</span>
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Réponse sous 24h • Devis gratuit et sans engagement
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;