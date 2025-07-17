import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'À propos', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const destinations = [
    'Pérou - Machu Picchu',
    'Argentine - Buenos Aires',
    'Colombie - Carthagène',
    'Chili - Patagonie',
    'Brésil - Rio de Janeiro',
    'Bolivie - Salar de Uyuni'
  ];

  const services = [
    'Voyages sur mesure',
    'Groupes privés',
    'Voyages de noces',
    'Circuits organisés',
    'Conseils voyage',
    'Assistance 24/7'
  ];

  return (
    <footer className="bg-black-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Pre-footer CTA */}
      <div className="border-b border-gray-800 py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Prêt à découvrir l'<span className="text-gold-500">Amérique latine</span> ?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Obtenez un devis gratuit et personnalisé pour votre prochain voyage
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-400 transition-colors duration-200"
            >
              Demander un devis
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <MapPin className="h-8 w-8 text-gold-500" />
                <h3 className="text-2xl font-serif font-bold">
                  Jheny <span className="text-gold-500">Voyages</span>
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Votre spécialiste des voyages en Amérique latine. Des expériences authentiques 
                aux prix les plus compétitifs du marché.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-300">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-300">contact@jhenyvoyages.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-300">France (Service en ligne)</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="text-xl font-semibold mb-6 text-gold-500">Navigation</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-gold-500 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Destinations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold mb-6 text-gold-500">Destinations</h4>
              <ul className="space-y-3">
                {destinations.map((destination) => (
                  <li key={destination}>
                    <a
                      href="#destinations"
                      className="text-gray-300 hover:text-gold-500 transition-colors duration-200"
                    >
                      {destination}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-xl font-semibold mb-6 text-gold-500">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4 text-gold-500">
                Restez connecté
              </h4>
              <p className="text-gray-300 mb-6">
                Recevez nos dernières offres et conseils voyage
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-6 py-3 rounded-full bg-black-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-gold-500 transition-colors duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-gold-400 transition-colors duration-200"
                >
                  S'abonner
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <span className="text-gray-300">Suivez-nous :</span>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.instagram.com/jheny_mamani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Facebook className="h-5 w-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors duration-200"
                  >
                    <Twitter className="h-5 w-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors duration-200"
                  >
                    <Youtube className="h-5 w-5 text-white" />
                  </motion.a>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors duration-200">
                  Mentions légales
                </a>
                <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors duration-200">
                  Politique de confidentialité
                </a>
                <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors duration-200">
                  CGV
                </a>
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © 2024 Jheny Voyages. Tous droits réservés. Créé avec ❤️ pour les amoureux des voyages.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-gold-500 text-black p-3 rounded-full shadow-lg hover:bg-gold-400 transition-colors duration-200 z-50"
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;