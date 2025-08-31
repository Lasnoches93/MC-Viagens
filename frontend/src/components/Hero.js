import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Carousel from './Carousel';

const Hero = () => {
  const { t } = useLanguage();

  // Images pour le carrousel en arrière-plan
  const backgroundImages = [
    {
      url: 'https://images.unsplash.com/photo-1530812074867-b93347a3bd10?w=1920&h=1080&fit=crop&auto=format&q=80',
      alt: 'Salar de Uyuni, Bolívia'
    },
    {
      url: 'https://images.unsplash.com/photo-1479299784244-c5262363c5df?w=1920&h=1080&fit=crop&auto=format&q=80',
      alt: 'Machu Picchu, Peru'
    },
    {
      url: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1920&h=1080&fit=crop&auto=format&q=80',
      alt: 'Buenos Aires, Argentina'
    },
    {
      url: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=1920&h=1080&fit=crop&auto=format&q=80',
      alt: 'Patagônia, Chile'
    },
    {
      url: 'https://images.unsplash.com/photo-1662504431607-6714410af32f?w=1920&h=1080&fit=crop&auto=format&q=80',
      alt: 'Rio de Janeiro, Brasil'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=1920&h=1080&fit=crop&crop=entropy&auto=format&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-luxury-blue/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-blue/40 via-transparent to-luxury-blue/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-brand font-bold mb-6 leading-tight">
            {t('hero.title')}
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent relative">
              {t('hero.subtitle')}
              {/* Effet brillant */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold-light to-transparent opacity-30 animate-shine"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            {t('hero.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-gold text-luxury-blue px-8 py-4 rounded-full font-semibold text-lg shadow-gold transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>{t('hero.cta1')}</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-luxury-blue transition-colors duration-200"
          >
            {t('hero.cta2')}
          </motion.button>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-luxury-gold/20">
              <MapPin className="h-8 w-8 text-luxury-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('hero.features.unique.title')}</h3>
            <p className="text-gray-300">{t('hero.features.unique.desc')}</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-luxury-gold/20">
              <Clock className="h-8 w-8 text-luxury-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('hero.features.optimized.title')}</h3>
            <p className="text-gray-300">{t('hero.features.optimized.desc')}</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-luxury-gold/20">
              <Users className="h-8 w-8 text-luxury-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('hero.features.couples.title')}</h3>
            <p className="text-gray-300">{t('hero.features.couples.desc')}</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white text-center"
        >
          <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;