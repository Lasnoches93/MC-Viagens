import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Heart, Globe, Users, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '500+', label: t('about.stats.travelers') },
    { number: '30+', label: t('about.stats.countries') },
    { number: '5', label: t('about.stats.experience') },
    { number: '4.9', label: t('about.stats.rating') }
  ];

  const specialties = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: t('about.specialties.international.title'),
      description: t('about.specialties.international.desc')
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t('about.specialties.couples.title'),
      description: t('about.specialties.couples.desc')
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: t('about.specialties.prices.title'),
      description: t('about.specialties.prices.desc')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('about.specialties.service.title'),
      description: t('about.specialties.service.desc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black-900 to-black-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image and info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2876593/pexels-photo-2876593.jpeg"
                alt="Jheny Mamani"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-black p-4 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Voyageurs</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-black-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gold-500">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Rencontrez <span className="text-gold-500">Jheny Mamani</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Passionnée de voyages depuis toujours, je me spécialise dans la recherche des meilleurs bons plans 
                pour les voyages internationaux, avec une expertise particulière en Amérique latine.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Forte de 5 années d'expérience dans l'industrie du tourisme, je parcours le monde pour vous dénicher 
                les destinations les plus fascinantes aux prix les plus compétitifs. Mon expertise tarifaire couvre 
                l'Amérique du Nord, l'Amérique du Sud, l'Europe, l'Asie, l'Océanie, mais également les îles paradisiaques.
              </p>
            </div>

            {/* Specialties */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black-800 rounded-lg p-6 hover:bg-black-700 transition-colors duration-300"
                >
                  <div className="text-gold-500 mb-3">{specialty.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{specialty.title}</h3>
                  <p className="text-gray-400 text-sm">{specialty.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Instagram Link */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <a
                href="https://www.instagram.com/jheny_mamani/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Suivez mes aventures</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;