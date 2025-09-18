import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Heart, Star, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutModal = ({ isOpen, onClose, type }) => {
  const { t } = useLanguage();

  const countries = [
    { key: 'brazil', flag: '🌎', name: 'Brasil' },
    { key: 'peru', flag: '🇵🇪', name: 'Peru' },
    { key: 'bolivia', flag: '🇧🇴', name: 'Bolívia' },
    { key: 'argentina', flag: '🇦🇷', name: 'Argentina' },
    { key: 'chile', flag: '🇨🇱', name: 'Chile' },
    { key: 'uruguay', flag: '🇺🇾', name: 'Uruguai' }
  ];

  const renderMyJourneyContent = () => (
    <div className="space-y-6">
      <p className="text-lg text-gray-300 leading-relaxed">
        {t('myJourney.content.intro')}
      </p>
      
      <div className="space-y-4">
        <div className="p-4 bg-luxury-blue/60 rounded-lg border-l-4 border-gold-500">
          <p className="text-gray-300 leading-relaxed">🇧🇷 {t('myJourney.content.brazil')}</p>
        </div>
        <div className="p-4 bg-luxury-blue/60 rounded-lg border-l-4 border-gold-500">
          <p className="text-gray-300 leading-relaxed">🇵🇪 {t('myJourney.content.peru')}</p>
        </div>
        <div className="p-4 bg-luxury-blue/60 rounded-lg border-l-4 border-gold-500">
          <p className="text-gray-300 leading-relaxed">🇧🇴 {t('myJourney.content.bolivia')}</p>
        </div>
        <div className="p-4 bg-luxury-blue/60 rounded-lg border-l-4 border-gold-500">
          <p className="text-gray-300 leading-relaxed">🇦🇷 {t('myJourney.content.argentina')}</p>
        </div>
        <div className="p-4 bg-luxury-blue/60 rounded-lg border-l-4 border-gold-500">
          <p className="text-gray-300 leading-relaxed">🇨🇱 {t('myJourney.content.chile')}</p>
        </div>
        <div className="p-4 bg-luxury-blue/60 rounded-lg border-l-4 border-gold-500">
          <p className="text-gray-300 leading-relaxed">🇺🇾 {t('myJourney.content.uruguay')}</p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          {t('myJourney.content.reflection')}
        </p>
        
        <div className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 rounded-xl p-4 border border-gold-500/30">
          <p className="text-white font-semibold text-center">
            {t('myJourney.content.commitment')}
          </p>
        </div>
      </div>
    </div>
  );

  const renderAboutMeContent = () => (
    <div className="space-y-6">
      <p className="text-lg text-gray-300 leading-relaxed">
        {t('aboutMe.content.intro')}
      </p>
      
      <p className="text-gray-300">
        {t('aboutMe.content.journey')}
      </p>

      {/* Countries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {countries.map((country, index) => (
          <motion.div
            key={country.key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start space-x-3 p-4 bg-luxury-blue/60 rounded-lg"
          >
            <span className="text-xl">{country.flag}</span>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t(`aboutMe.content.countries.${country.key}`)}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          {t('aboutMe.content.reflection')}
        </p>
        
        <p className="text-gray-300 leading-relaxed">
          {t('aboutMe.content.mission')}
        </p>
        
        <div className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 rounded-xl p-4 border border-gold-500/30">
          <p className="text-white font-semibold text-center">
            {t('aboutMe.content.goal')}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="text-center bg-luxury-blue/60 rounded-lg p-4">
          <Globe className="h-6 w-6 text-gold-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-gold-500">6</div>
          <div className="text-xs text-gray-300">{t('aboutMe.stats.countries')}</div>
        </div>
        <div className="text-center bg-luxury-blue/60 rounded-lg p-4">
          <MapPin className="h-6 w-6 text-gold-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-gold-500">20+</div>
          <div className="text-xs text-gray-300">{t('aboutMe.stats.cities')}</div>
        </div>
        <div className="text-center bg-luxury-blue/60 rounded-lg p-4">
          <Heart className="h-6 w-6 text-gold-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-gold-500">500+</div>
          <div className="text-xs text-gray-300">{t('aboutMe.stats.trips')}</div>
        </div>
        <div className="text-center bg-luxury-blue/60 rounded-lg p-4">
          <Star className="h-6 w-6 text-gold-500 mx-auto mb-2" />
          <div className="text-xl font-bold text-gold-500">5</div>
          <div className="text-xs text-gray-300">{t('aboutMe.stats.experience')}</div>
        </div>
      </div>
    </div>
  );

  const renderAboutContent = () => (
    <div className="space-y-6">
      <p className="text-lg text-gray-300 leading-relaxed">
        {t('about.intro')}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center bg-luxury-blue/60 rounded-xl p-6">
          <div className="text-3xl font-bold text-gold-500 mb-2">5+</div>
          <div className="text-sm text-gray-300">{t('about.stats.experience')}</div>
        </div>
        <div className="text-center bg-black-800 rounded-xl p-6">
          <div className="text-3xl font-bold text-gold-500 mb-2">30+</div>
          <div className="text-sm text-gray-300">{t('about.stats.countries')}</div>
        </div>
        <div className="text-center bg-black-800 rounded-xl p-6">
          <div className="text-3xl font-bold text-gold-500 mb-2">500+</div>
          <div className="text-sm text-gray-300">{t('about.stats.travelers')}</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">{t('about.expertise.title')}</h3>
        <p className="text-gray-300">{t('about.expertise.description')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t('about.services').map((service, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-black-800 rounded-lg">
              <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
              <span className="text-gray-300">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-luxury-blue/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-black-800 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="pr-12">
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                {type === 'aboutMe' ? t('aboutMe.title') : 
                 type === 'myJourney' ? t('myJourney.title') : 
                 t('about.title')}
              </h2>
              
              {type === 'aboutMe' ? renderAboutMeContent() : 
               type === 'myJourney' ? renderMyJourneyContent() :
               renderAboutContent()}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AboutModal;