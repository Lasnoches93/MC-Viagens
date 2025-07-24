import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, ArrowUp, Headphones, UserCheck, Award, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.destinations'), href: '#destinations' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.blog'), href: '#blog' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  const destinations = [
    'Peru - Machu Picchu',
    'Argentina - Buenos Aires',
    'Colombia - Cartagena',
    'Chile - Patagonia',
    'Brasil - Rio de Janeiro',
    'Bolivia - Salar de Uyuni'
  ];

  const services = [
    'Viagens personalizadas',
    'Grupos privados',
    'Viagens de lua de mel',
    'Circuitos organizados',
    'Consultoria de viagem',
    'Assistência 24/7'
  ];

  return (
    <footer className="bg-luxury-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Pre-footer CTA */}
      <div className="border-b border-luxury-gold/20 py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-luxury font-bold mb-4">
              Pronto para descobrir a <span className="bg-gradient-gold bg-clip-text text-transparent">América Latina</span>?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Obtenha um orçamento gratuito e personalizado para sua próxima viagem
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-gold text-luxury-blue px-8 py-4 rounded-full font-semibold text-lg shadow-gold transition-all duration-200"
            >
              Solicitar orçamento
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Points Forts MC Viagens */}
      <div className="py-12 border-b border-luxury-gold/20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-luxury font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
              Por que escolher MC Viagens?
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Support après-vente */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-luxury-blue-light/30 backdrop-blur-sm rounded-xl p-6 text-center border border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors"
            >
              <div className="bg-gradient-gold/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Headphones className="h-8 w-8 text-luxury-gold" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{t('footer.support')}</h4>
              <p className="text-gray-300 text-sm">Suporte completo antes, durante e após sua viagem</p>
            </motion.div>

            {/* Assessoria personalizada */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-luxury-blue-light/30 backdrop-blur-sm rounded-xl p-6 text-center border border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors"
            >
              <div className="bg-gradient-gold/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <UserCheck className="h-8 w-8 text-luxury-gold" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{t('footer.personalizedAdvice')}</h4>
              <p className="text-gray-300 text-sm">Consultoria especializada para cada tipo de viajante</p>
            </motion.div>

            {/* MC Viagens Exclusive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-luxury-blue-light/30 backdrop-blur-sm rounded-xl p-6 text-center border border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors"
            >
              <div className="bg-gradient-gold/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-luxury-gold" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{t('footer.mcViagens')}</h4>
              <p className="text-gray-300 text-sm">Experiência exclusiva com padrão de luxe acessível</p>
            </motion.div>

            {/* Como Funciona */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-luxury-blue-light/30 backdrop-blur-sm rounded-xl p-6 text-center border border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors"
            >
              <div className="bg-gradient-gold/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-luxury-gold" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{t('footer.howItWorks')}</h4>
              <p className="text-gray-300 text-sm">Processo simples e transparente do orçamento à viagem</p>
            </motion.div>
          </div>
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
              {/* Logo MC Viagens */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-10 h-10 relative">
                    <div className="absolute inset-0 bg-gradient-gold rounded-lg transform rotate-45 shadow-gold">
                      <div className="absolute inset-1 bg-luxury-blue rounded-lg">
                        <div className="absolute inset-1 bg-gradient-gold rounded-sm">
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shine"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-luxury font-bold">
                    <span className="bg-gradient-gold bg-clip-text text-transparent">MC</span>
                    <span className="text-white ml-1">Viagens</span>
                  </h3>
                  <span className="text-xs text-luxury-gold-light font-medium tracking-wider">LUXURY TRAVEL</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                Sua especialista em viagens internacionais. Experiências autênticas 
                aos preços mais competitivos do mercado.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-luxury-gold" />
                  <span className="text-gray-300">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-luxury-gold" />
                  <span className="text-gray-300">contact@mcviagens.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-luxury-gold" />
                  <div className="text-gray-300">
                    <p>123 Rue des Voyages</p>
                    <p>75001 Paris, França</p>
                    <p>Atendimento online mundial</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="text-xl font-semibold mb-6 text-luxury-gold">{t('footer.navigation')}</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-luxury-gold transition-colors duration-200"
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
              <h4 className="text-xl font-semibold mb-6 text-luxury-gold">{t('footer.destinations')}</h4>
              <ul className="space-y-3">
                {destinations.map((destination) => (
                  <li key={destination}>
                    <a
                      href="#destinations"
                      className="text-gray-300 hover:text-luxury-gold transition-colors duration-200"
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
              <h4 className="text-xl font-semibold mb-6 text-luxury-gold">{t('footer.services')}</h4>
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
            className="mt-12 pt-8 border-t border-luxury-gold/20"
          >
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4 text-luxury-gold">
                Fique conectado
              </h4>
              <p className="text-gray-300 mb-6">
                Receba nossas últimas ofertas e dicas de viagem
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 px-6 py-3 rounded-full bg-luxury-blue-light/50 text-white placeholder-gray-400 border border-luxury-gold/30 focus:outline-none focus:border-luxury-gold transition-colors duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-gold text-luxury-blue px-8 py-3 rounded-full font-semibold shadow-gold transition-all duration-200"
                >
                  Inscrever-se
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 pt-8 border-t border-luxury-gold/20"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <span className="text-gray-300">{t('footer.followUs')}</span>
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
                <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors duration-200">
                  Termos legais
                </a>
                <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors duration-200">
                  Política de privacidade
                </a>
                <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors duration-200">
                  CGV
                </a>
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-luxury-gold/20 text-center">
            <p className="text-gray-400">
              © 2024 MC Viagens. Todos os direitos reservados. Criado com ❤️ para os amantes de viagens.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, boxShadow: '0 10px 20px rgba(212, 175, 55, 0.3)' }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-gradient-gold text-luxury-blue p-3 rounded-full shadow-gold transition-all duration-200 z-50"
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;