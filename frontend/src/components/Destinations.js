import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Plane, Users, Star, Heart } from 'lucide-react';

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
      id: 1,
      name: 'Machu Picchu, Pérou',
      price: '€899',
      originalPrice: '€1,299',
      image: 'https://images.unsplash.com/photo-1530469525856-cf37954301f7',
      duration: '8 jours',
      flightTime: '12h',
      stops: '1 escale',
      rating: 4.9,
      reviews: 245,
      description: 'Découvrez la citadelle inca perchée dans les Andes',
      highlights: ['Citadelle du Machu Picchu', 'Vallée Sacrée', 'Cusco colonial'],
      baggage: {
        cabin: '1 bagage cabine (8kg)',
        checked: '1 bagage en soute (23kg)',
        backpack: 'Sac à dos inclus'
      }
    },
    {
      id: 2,
      name: 'Buenos Aires, Argentine',
      price: '€749',
      originalPrice: '€1,099',
      image: 'https://images.unsplash.com/photo-1509362657489-b9bd8c0089c8',
      duration: '6 jours',
      flightTime: '11h',
      stops: 'Direct',
      rating: 4.8,
      reviews: 189,
      description: 'La capitale du tango et de la passion latino-américaine',
      highlights: ['Quartier de San Telmo', 'Spectacle de tango', 'Gastronomie locale'],
      baggage: {
        cabin: '1 bagage cabine (8kg)',
        checked: '1 bagage en soute (23kg)',
        backpack: 'Sac à dos inclus'
      }
    },
    {
      id: 3,
      name: 'Carthagène, Colombie',
      price: '€649',
      originalPrice: '€949',
      image: 'https://images.unsplash.com/photo-1713561684894-25393bb9594b',
      duration: '7 jours',
      flightTime: '10h',
      stops: '1 escale',
      rating: 4.7,
      reviews: 156,
      description: 'Ville coloniale des Caraïbes aux mille couleurs',
      highlights: ['Centre historique', 'Plages paradisiaques', 'Architecture coloniale'],
      baggage: {
        cabin: '1 bagage cabine (8kg)',
        checked: '1 bagage en soute (23kg)',
        backpack: 'Sac à dos inclus'
      }
    },
    {
      id: 4,
      name: 'Patagonie, Chili',
      price: '€1,199',
      originalPrice: '€1,699',
      image: 'https://images.unsplash.com/flagged/photo-1576636215888-539d692c4136',
      duration: '10 jours',
      flightTime: '14h',
      stops: '1 escale',
      rating: 4.9,
      reviews: 203,
      description: 'Paysages grandioses aux confins du monde',
      highlights: ['Torres del Paine', 'Glaciers bleus', 'Faune sauvage'],
      baggage: {
        cabin: '1 bagage cabine (8kg)',
        checked: '1 bagage en soute (23kg)',
        backpack: 'Sac à dos inclus'
      }
    },
    {
      id: 5,
      name: 'Rio de Janeiro, Brésil',
      price: '€799',
      originalPrice: '€1,199',
      image: 'https://images.unsplash.com/flagged/photo-1575402669213-639549555a2c',
      duration: '7 jours',
      flightTime: '9h',
      stops: 'Direct',
      rating: 4.8,
      reviews: 278,
      description: 'La ville merveilleuse entre mer et montagne',
      highlights: ['Christ Rédempteur', 'Plages de Copacabana', 'Quartier de Santa Teresa'],
      baggage: {
        cabin: '1 bagage cabine (8kg)',
        checked: '1 bagage en soute (23kg)',
        backpack: 'Sac à dos inclus'
      }
    },
    {
      id: 6,
      name: 'Salar de Uyuni, Bolivie',
      price: '€899',
      originalPrice: '€1,299',
      image: 'https://images.pexels.com/photos/6041284/pexels-photo-6041284.jpeg',
      duration: '9 jours',
      flightTime: '13h',
      stops: '2 escales',
      rating: 4.9,
      reviews: 134,
      description: 'Le plus grand miroir du monde sous les étoiles',
      highlights: ['Désert de sel', 'Lagunes colorées', 'Flamants roses'],
      baggage: {
        cabin: '1 bagage cabine (8kg)',
        checked: '1 bagage en soute (23kg)',
        backpack: 'Sac à dos inclus'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="destinations" className="py-20 bg-black-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Destinations <span className="text-gold-500">Exceptionnelles</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez notre sélection exclusive de destinations, choisies par Jheny pour leur authenticité 
            et leurs prix imbattables.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-black-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover:border-gold-500/50 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-black-900/70 backdrop-blur-sm p-2 rounded-full text-white hover:text-gold-500 transition-colors"
                  >
                    <Heart className="h-5 w-5" />
                  </motion.button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-1 text-white">
                    <Star className="h-4 w-4 fill-current text-gold-500" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                    <span className="text-sm text-gray-300">({destination.reviews})</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{destination.name}</h3>
                <p className="text-gray-400 mb-4">{destination.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Clock className="h-4 w-4 text-gold-500" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Plane className="h-4 w-4 text-gold-500" />
                    <span className="text-sm">{destination.flightTime}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <MapPin className="h-4 w-4 text-gold-500" />
                    <span className="text-sm">{destination.stops}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Users className="h-4 w-4 text-gold-500" />
                    <span className="text-sm">2-8 pers.</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gold-500">{destination.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">{destination.originalPrice}</span>
                  </div>
                  <span className="text-sm text-gray-400">par personne</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDestination(destination)}
                  className="w-full bg-gold-500 text-black py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-200"
                >
                  Voir les détails
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for destination details */}
      {selectedDestination && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDestination(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-black-800 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-serif font-bold text-white">{selectedDestination.name}</h3>
              <button
                onClick={() => setSelectedDestination(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>

            <img
              src={selectedDestination.image}
              alt={selectedDestination.name}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Points forts</h4>
                <ul className="space-y-2">
                  {selectedDestination.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-300 flex items-center space-x-2">
                      <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Bagages inclus</h4>
                <ul className="space-y-2">
                  <li className="text-gray-300">{selectedDestination.baggage.cabin}</li>
                  <li className="text-gray-300">{selectedDestination.baggage.checked}</li>
                  <li className="text-gray-300">{selectedDestination.baggage.backpack}</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-gold-500">{selectedDestination.price}</span>
                <span className="text-lg text-gray-500 line-through ml-2">{selectedDestination.originalPrice}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-200"
              >
                Réserver maintenant
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Destinations;