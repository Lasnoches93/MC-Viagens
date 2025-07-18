import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const Hero = () => {
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
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Découvrez le Monde
            <br />
            <span className="text-gold-500">à Prix Accessible</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Explorez les destinations les plus fascinantes avec Jheny Mamani, 
            spécialiste des voyages en Amérique latine et dans le monde entier.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-400 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <span>Découvrir nos Destinations</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-colors duration-200"
          >
            Devis Personnalisé
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
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="h-8 w-8 text-gold-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Destinations Uniques</h3>
            <p className="text-gray-300">Découvrez des lieux exceptionnels sélectionnés par notre experte</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Clock className="h-8 w-8 text-gold-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Voyages Optimisés</h3>
            <p className="text-gray-300">Temps de vol réduits et escales minimales pour plus de confort</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-gold-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Couples & Familles</h3>
            <p className="text-gray-300">Expériences personnalisées pour tous les types de voyageurs</p>
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
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;