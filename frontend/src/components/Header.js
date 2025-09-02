import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.destinations'), href: '#destinations' },
    { name: t('nav.blog'), href: '#blog' },
    { name: t('nav.testimonials'), href: '#testimonials' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-luxury-blue/95 backdrop-blur-md shadow-luxury' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo MC Viagens avec effet brillant */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            {/* Logo Diamant Luxueux */}
            <div className="relative">
              <div className="w-12 h-12 relative">
                {/* Diamant principal */}
                <div className="absolute inset-0 bg-gradient-gold rounded-lg transform rotate-45 shadow-gold">
                  <div className="absolute inset-1 bg-luxury-blue rounded-lg">
                    <div className="absolute inset-1 bg-gradient-gold rounded-sm">
                      {/* Effet brillant */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shine"></div>
                    </div>
                  </div>
                </div>
                {/* Éclat doré */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-luxury-gold rounded-full opacity-75 animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-luxury-gold-light rounded-full opacity-50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            {/* Nom MC Viagens */}
            <div className="flex flex-col">
              <h1 className="text-2xl font-luxury font-bold relative">
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  MC
                </span>
                <span className="text-white ml-1">Viagens</span>
                {/* Effet brillant sur le texte */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold-light to-transparent opacity-20 animate-shine"></div>
              </h1>
              <span className="text-xs text-luxury-gold-light font-brand font-medium tracking-wider">LUXURY TRAVEL</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-luxury-gold transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Language Selector & Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Sélecteur de langue */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-2 bg-luxury-blue/50 hover:bg-luxury-blue/70 px-3 py-2 rounded-full border border-luxury-gold/30 transition-all duration-200"
              >
                <Globe className="h-4 w-4 text-luxury-gold" />
                <span className="text-white text-sm font-medium">{currentLanguage?.flag}</span>
                <span className="text-white text-sm">{currentLanguage?.code.toUpperCase()}</span>
              </motion.button>

              {/* Dropdown menu */}
              {isLanguageMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 right-0 bg-luxury-blue/95 backdrop-blur-md rounded-lg shadow-luxury border border-luxury-gold/20 overflow-hidden"
                >
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      whileHover={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLanguageMenuOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full px-4 py-3 text-white hover:text-luxury-gold transition-colors text-sm"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-white">
                <Phone className="h-4 w-4 text-luxury-gold" />
                <span>{t('contact.info.phoneValue')}</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Mail className="h-4 w-4 text-luxury-gold" />
                <span>{t('contact.info.emailValue')}</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-luxury-blue/95 backdrop-blur-md border-t border-luxury-gold/20"
          >
            <nav className="py-4">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-white hover:text-luxury-gold transition-colors duration-200"
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="px-4 py-2 border-t border-luxury-gold/20 mt-2">
                <div className="flex items-center space-x-2 mb-2">
                  <Globe className="h-4 w-4 text-luxury-gold" />
                  <span className="text-white text-sm font-medium">Idioma / Language</span>
                </div>
                <div className="flex space-x-2">
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs transition-all ${
                        language === lang.code 
                          ? 'bg-luxury-gold text-luxury-blue' 
                          : 'bg-luxury-blue/50 text-white hover:bg-luxury-gold/20'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.code.toUpperCase()}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;