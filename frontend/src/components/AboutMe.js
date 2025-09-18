import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, Star, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutMe = () => {
  const { t } = useLanguage();

  const countries = [
    { key: 'brazil', flag: '🌎', name: 'Brasil' },
    { key: 'peru', flag: '🇵🇪', name: 'Peru' },
    { key: 'bolivia', flag: '🇧🇴', name: 'Bolívia' },
    { key: 'argentina', flag: '🇦🇷', name: 'Argentina' },
    { key: 'chile', flag: '🇨🇱', name: 'Chile' },
    { key: 'uruguay', flag: '🇺🇾', name: 'Uruguai' }
  ];

  return (
    <section id="about-me" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {t('aboutMe.title')}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-luxury-blue/70 border border-luxury-gold/20 rounded-2xl p-8 md:p-12 mb-12"
          >
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('aboutMe.content.intro')}
            </p>
            
            <p className="text-lg text-gray-300 mb-8">
              {t('aboutMe.content.journey')}
            </p>

            {/* Countries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {countries.map((country, index) => (
                <motion.div
                  key={country.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-black-800 rounded-lg hover:bg-black-700 transition-colors duration-300"
                >
                  <span className="text-2xl">{country.flag}</span>
                  <p className="text-gray-300 leading-relaxed">
                    {t(`aboutMe.content.countries.${country.key}`)}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('aboutMe.content.reflection')}
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('aboutMe.content.mission')}
              </p>
              
              <div className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 rounded-2xl p-6 border border-gold-500/30">
                <p className="text-xl text-white font-semibold text-center">
                  {t('aboutMe.content.goal')}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center bg-luxury-blue/70 border border-luxury-gold/20 rounded-xl p-6">
              <Globe className="h-8 w-8 text-gold-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gold-500 mb-2">6</div>
              <div className="text-sm text-gray-300">{t('aboutMe.stats.countries')}</div>
            </div>
            <div className="text-center bg-luxury-blue/70 border border-luxury-gold/20 rounded-xl p-6">
              <MapPin className="h-8 w-8 text-gold-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gold-500 mb-2">20+</div>
              <div className="text-sm text-gray-300">{t('aboutMe.stats.cities')}</div>
            </div>
            <div className="text-center bg-luxury-blue/70 border border-luxury-gold/20 rounded-xl p-6">
              <Heart className="h-8 w-8 text-gold-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gold-500 mb-2">500+</div>
              <div className="text-sm text-gray-300">{t('aboutMe.stats.trips')}</div>
            </div>
            <div className="text-center bg-luxury-blue/70 border border-luxury-gold/20 rounded-xl p-6">
              <Star className="h-8 w-8 text-gold-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gold-500 mb-2">5</div>
              <div className="text-sm text-gray-300">{t('aboutMe.stats.experience')}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;