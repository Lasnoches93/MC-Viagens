import React, { useState, useMemo, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Plane, Users, Star, Heart } from 'lucide-react';

// Composant optimisé pour les cartes de destination
const DestinationCard = React.memo(({ destination, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  // Lazy loading pour les images
  React.useEffect(() => {
    const img = new Image();
    img.src = destination.image;
    img.onload = () => {
      setImageSrc(destination.image);
      setImageLoaded(true);
    };
  }, [destination.image]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="bg-black-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover:border-gold-500/50 transition-all duration-300"
    >
      <div className="relative">
        {/* Image placeholder pendant le chargement */}
        <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
          {imageLoaded && imageSrc ? (
            <img
              src={imageSrc}
              alt={destination.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
          ) : (
            <div className="animate-pulse bg-gray-600 w-full h-48 flex items-center justify-center">
              <MapPin className="h-8 w-8 text-gray-400" />
            </div>
          )}
        </div>
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
          onClick={() => onClick(destination)}
          className="w-full bg-gold-500 text-black py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-200"
        >
          Voir les détails
        </motion.button>
      </div>
    </motion.div>
  );
});

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('Amérique du Sud');
  const [showAllDestinations, setShowAllDestinations] = useState(false);
  const [destinationsToShow, setDestinationsToShow] = useState(6);

  const destinationsByRegion = {
    'Amérique du Sud': [
      {
        id: 1,
        name: 'Machu Picchu, Pérou',
        price: '€899',
        originalPrice: '€1,299',
        image: 'https://images.unsplash.com/photo-1530469525856-cf37954301f7?w=600&h=400&fit=crop&auto=format&q=80',
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
        image: 'https://images.unsplash.com/photo-1509362657489-b9bd8c0089c8?w=600&h=400&fit=crop&auto=format&q=80',
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
        image: 'https://images.unsplash.com/photo-1713561684894-25393bb9594b?w=600&h=400&fit=crop&auto=format&q=80',
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
        image: 'https://images.unsplash.com/flagged/photo-1576636215888-539d692c4136?w=600&h=400&fit=crop&auto=format&q=80',
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
        image: 'https://images.unsplash.com/flagged/photo-1575402669213-639549555a2c?w=600&h=400&fit=crop&auto=format&q=80',
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
        image: 'https://images.pexels.com/photos/6041284/pexels-photo-6041284.jpeg?w=600&h=400&fit=crop&auto=format&q=80',
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
    ],
    'Europe': [
      {
        id: 7,
        name: 'Lisbonne, Portugal',
        price: '€699',
        originalPrice: '€859',
        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b',
        duration: '5 jours',
        flightTime: '2h',
        stops: 'Direct',
        rating: 4.6,
        reviews: 312,
        description: 'La capitale portugaise aux sept collines',
        highlights: ['Quartier de Alfama', 'Tramway 28', 'Pastéis de nata'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 8,
        name: 'Madrid, Espagne',
        price: '€749',
        originalPrice: '€980',
        image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4',
        duration: '4 jours',
        flightTime: '1h30',
        stops: 'Direct',
        rating: 4.5,
        reviews: 267,
        description: 'La capitale espagnole dynamique et culturelle',
        highlights: ['Musée du Prado', 'Parc du Retiro', 'Puerta del Sol'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 9,
        name: 'Paris, France',
        price: '€849',
        originalPrice: '€1,099',
        image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52',
        duration: '4 jours',
        flightTime: '1h',
        stops: 'Direct',
        rating: 4.8,
        reviews: 445,
        description: 'La ville lumière et ses monuments iconiques',
        highlights: ['Tour Eiffel', 'Louvre', 'Champs-Élysées'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 10,
        name: 'Athènes, Grèce',
        price: '€1,199',
        originalPrice: '€1,699',
        image: 'https://images.unsplash.com/photo-1555993539-1fb207c5e896',
        duration: '7 jours',
        flightTime: '3h',
        stops: 'Direct',
        rating: 4.7,
        reviews: 198,
        description: 'Berceau de la démocratie et de la philosophie',
        highlights: ['Acropole', 'Parthénon', 'Quartier de Plaka'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 11,
        name: 'Rome, Italie',
        price: '€799',
        originalPrice: '€1,199',
        image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b',
        duration: '5 jours',
        flightTime: '2h',
        stops: 'Direct',
        rating: 4.8,
        reviews: 356,
        description: 'La ville éternelle aux mille merveilles',
        highlights: ['Colisée', 'Vatican', 'Fontaine de Trevi'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 12,
        name: 'Istanbul, Turquie',
        price: '€899',
        originalPrice: '€1,299',
        image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200',
        duration: '6 jours',
        flightTime: '3h30',
        stops: 'Direct',
        rating: 4.6,
        reviews: 287,
        description: 'Pont entre l\'Europe et l\'Asie',
        highlights: ['Sainte-Sophie', 'Grand Bazar', 'Bosphore'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      }
    ],
    'Amérique du Nord': [
      {
        id: 13,
        name: 'New York, USA',
        price: '€899',
        originalPrice: '€1,299',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
        duration: '7 jours',
        flightTime: '8h',
        stops: 'Direct',
        rating: 4.9,
        reviews: 523,
        description: 'La ville qui ne dort jamais',
        highlights: ['Times Square', 'Central Park', 'Statue de la Liberté'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 14,
        name: 'Quebec, Canada',
        price: '€749',
        originalPrice: '€1,099',
        image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225',
        duration: '6 jours',
        flightTime: '7h',
        stops: 'Direct',
        rating: 4.7,
        reviews: 234,
        description: 'Charme français au cœur de l\'Amérique',
        highlights: ['Vieux-Québec', 'Château Frontenac', 'Chutes Montmorency'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 15,
        name: 'Mexico, Mexique',
        price: '€649',
        originalPrice: '€949',
        image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a',
        duration: '8 jours',
        flightTime: '10h',
        stops: '1 escale',
        rating: 4.6,
        reviews: 345,
        description: 'Culture aztèque et cuisine authentique',
        highlights: ['Teotihuacan', 'Frida Kahlo', 'Coyoacan'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      }
    ],
    'Asie': [
      {
        id: 16,
        name: 'Tokyo, Japon',
        price: '€1,199',
        originalPrice: '€1,599',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
        duration: '8 jours',
        flightTime: '11h',
        stops: 'Direct',
        rating: 4.9,
        reviews: 456,
        description: 'Modernité et tradition au pays du soleil levant',
        highlights: ['Temples traditionnels', 'Quartier de Shibuya', 'Mont Fuji'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 17,
        name: 'Bangkok, Thaïlande',
        price: '€649',
        originalPrice: '€899',
        image: 'https://images.unsplash.com/photo-1563492065-1ddc4e96b1b8',
        duration: '7 jours',
        flightTime: '10h',
        stops: '1 escale',
        rating: 4.6,
        reviews: 378,
        description: 'Temples dorés et street food authentique',
        highlights: ['Grand Palais', 'Marchés flottants', 'Temples bouddhistes'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 18,
        name: 'Singapour',
        price: '€899',
        originalPrice: '€1,299',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd',
        duration: '6 jours',
        flightTime: '12h',
        stops: 'Direct',
        rating: 4.8,
        reviews: 289,
        description: 'Cité-État futuriste entre Orient et Occident',
        highlights: ['Marina Bay Sands', 'Gardens by the Bay', 'Chinatown'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 19,
        name: 'Bali, Indonésie',
        price: '€799',
        originalPrice: '€1,199',
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1',
        duration: '9 jours',
        flightTime: '15h',
        stops: '1 escale',
        rating: 4.7,
        reviews: 523,
        description: 'Île des dieux aux paysages enchanteurs',
        highlights: ['Rizières en terrasse', 'Temples hindous', 'Plages paradisiaques'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      }
    ],
    'Océanie': [
      {
        id: 25,
        name: 'Sydney, Australie',
        price: '€1,499',
        originalPrice: '€1,999',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
        duration: '10 jours',
        flightTime: '20h',
        stops: '1 escale',
        rating: 4.9,
        reviews: 445,
        description: 'Métropole cosmopolite aux plages iconiques',
        highlights: ['Opéra de Sydney', 'Harbour Bridge', 'Bondi Beach'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 26,
        name: 'Auckland, Nouvelle-Zélande',
        price: '€1,399',
        originalPrice: '€1,899',
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad',
        duration: '9 jours',
        flightTime: '22h',
        stops: '1 escale',
        rating: 4.8,
        reviews: 267,
        description: 'Paysages grandioses et culture maorie',
        highlights: ['Baie des Îles', 'Milford Sound', 'Rotorua'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      }
    ],
    'Îles Paradisiaques': [
      {
        id: 27,
        name: 'Île de la Réunion',
        price: '€899',
        originalPrice: '€1,299',
        image: 'https://images.unsplash.com/photo-1496281955129-ad3ba33b7591',
        duration: '8 jours',
        flightTime: '11h',
        stops: 'Direct',
        rating: 4.8,
        reviews: 234,
        description: 'Île intense aux paysages volcaniques',
        highlights: ['Piton de la Fournaise', 'Cirques naturels', 'Plages de sable noir'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 28,
        name: 'Punta Cana, République Dominicaine',
        price: '€699',
        originalPrice: '€999',
        image: 'https://images.unsplash.com/photo-1496281955129-ad3ba33b7591',
        duration: '7 jours',
        flightTime: '8h',
        stops: 'Direct',
        rating: 4.6,
        reviews: 456,
        description: 'Plages de sable blanc et eaux cristallines',
        highlights: ['Plages paradisiaques', 'Récifs coralliens', 'Cenotes naturels'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 29,
        name: 'Zanzibar, Tanzanie',
        price: '€799',
        originalPrice: '€1,199',
        image: 'https://images.unsplash.com/photo-1496281955129-ad3ba33b7591',
        duration: '8 jours',
        flightTime: '8h',
        stops: '1 escale',
        rating: 4.7,
        reviews: 289,
        description: 'Île aux épices de l\'océan Indien',
        highlights: ['Stone Town', 'Plages de Nungwi', 'Épices locales'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 30,
        name: 'Maldives',
        price: '€1,299',
        originalPrice: '€1,799',
        image: 'https://images.unsplash.com/photo-1496281955129-ad3ba33b7591',
        duration: '7 jours',
        flightTime: '9h',
        stops: '1 escale',
        rating: 4.9,
        reviews: 367,
        description: 'Paradis tropical sur pilotis',
        highlights: ['Bungalows sur pilotis', 'Récifs coralliens', 'Plongée sous-marine'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 31,
        name: 'Seychelles',
        price: '€1,199',
        originalPrice: '€1,699',
        image: 'https://images.unsplash.com/photo-1496281955129-ad3ba33b7591',
        duration: '8 jours',
        flightTime: '9h',
        stops: '1 escale',
        rating: 4.8,
        reviews: 234,
        description: 'Archipel de rêve aux plages immaculées',
        highlights: ['Anse Source d\'Argent', 'Tortues géantes', 'Forêt primaire'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      }
    ],
    'Asie': [
      {
        id: 16,
        name: 'Tokyo, Japon',
        price: '€1,199',
        originalPrice: '€1,599',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
        duration: '8 jours',
        flightTime: '11h',
        stops: 'Direct',
        rating: 4.9,
        reviews: 456,
        description: 'Modernité et tradition au pays du soleil levant',
        highlights: ['Temples traditionnels', 'Quartier de Shibuya', 'Mont Fuji'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 17,
        name: 'Bangkok, Thaïlande',
        price: '€649',
        originalPrice: '€899',
        image: 'https://images.unsplash.com/photo-1563492065-1ddc4e96b1b8',
        duration: '7 jours',
        flightTime: '10h',
        stops: '1 escale',
        rating: 4.6,
        reviews: 378,
        description: 'Temples dorés et street food authentique',
        highlights: ['Grand Palais', 'Marchés flottants', 'Temples bouddhistes'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 18,
        name: 'Singapour',
        price: '€899',
        originalPrice: '€1,299',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd',
        duration: '6 jours',
        flightTime: '12h',
        stops: 'Direct',
        rating: 4.8,
        reviews: 289,
        description: 'Cité-État futuriste entre Orient et Occident',
        highlights: ['Marina Bay Sands', 'Gardens by the Bay', 'Chinatown'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      },
      {
        id: 19,
        name: 'Bali, Indonésie',
        price: '€799',
        originalPrice: '€1,199',
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1',
        duration: '9 jours',
        flightTime: '15h',
        stops: '1 escale',
        rating: 4.7,
        reviews: 523,
        description: 'Île des dieux aux paysages enchanteurs',
        highlights: ['Rizières en terrasse', 'Temples hindous', 'Plages paradisiaques'],
        baggage: {
          cabin: '1 bagage cabine (8kg)',
          checked: '1 bagage en soute (23kg)',
          backpack: 'Sac à dos inclus'
        }
      }
    ]
  };

  const regions = Object.keys(destinationsByRegion);
  
  // Logique simple et robuste pour la pagination
  const allDestinations = destinationsByRegion[selectedRegion] || [];
  const displayedDestinations = showAllDestinations ? allDestinations : allDestinations.slice(0, destinationsToShow);
  const hasMoreDestinations = allDestinations.length > destinationsToShow;
  const remainingCount = allDestinations.length - destinationsToShow;

  // Reset lors du changement de région
  React.useEffect(() => {
    setShowAllDestinations(false);
  }, [selectedRegion]);

  console.log('Debug:', {
    selectedRegion,
    totalDestinations: allDestinations.length,
    displayedCount: displayedDestinations.length,
    showAllDestinations,
    hasMoreDestinations
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05 // Réduit le délai entre les animations
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 } // Réduit la durée des animations
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
            Nos Voyages <span className="text-gold-500">Internationaux</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez notre sélection exclusive de destinations internationales, choisies par Jheny pour leur authenticité 
            et leurs prix imbattables.
          </p>
        </motion.div>

        {/* Region Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => {
                setSelectedRegion(region);
                setShowAllDestinations(false);
              }}
              className={`px-6 py-3 rounded-full transition-all duration-200 font-semibold ${
                selectedRegion === region
                  ? 'bg-gold-500 text-black'
                  : 'bg-black-800 text-gray-300 hover:bg-black-700 hover:text-white'
              }`}
            >
              {region}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedDestinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onClick={setSelectedDestination}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Bouton "Voir plus" si il y a plus de 6 destinations */}
        {hasMoreDestinations && !showAllDestinations && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllDestinations(true)}
              className="bg-gold-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-gold-400 transition-colors duration-200"
            >
              Voir toutes les destinations ({allDestinations.length})
            </motion.button>
          </motion.div>
        )}

        {/* Bouton "Voir moins" si on affiche toutes les destinations */}
        {showAllDestinations && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllDestinations(false)}
              className="bg-black-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-black-600 transition-colors duration-200"
            >
              Voir moins
            </motion.button>
          </motion.div>
        )}
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