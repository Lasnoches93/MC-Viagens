import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Plane, Users, Star, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { isWpConfigured } from '../config/wpConfig';
import { fetchRegions, fetchDestinations } from '../services/wpDestinations';

// Composant optimisé pour les cartes de destination
const DestinationCard = React.memo(({ destination, onClick, delay = 0, t, convertPrice }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  // Préchargement optimisé des images
  React.useEffect(() => {
    const img = new Image();
    img.src = destination.image;
    img.onload = () => setImageLoaded(true);
  }, [destination.image]);

  const priceDisplay = destination.priceEUR !== undefined
    ? convertPrice(`€${destination.priceEUR}`)
    : convertPrice(destination.price);

  const originalDisplay = destination.originalPriceEUR !== undefined
    ? convertPrice(`€${destination.originalPriceEUR}`)
    : convertPrice(destination.originalPrice);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5 }}
      className="bg-luxury-blue/60 rounded-2xl overflow-hidden shadow-2xl border border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300"
    >
      <div className="relative">
        <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
          {imageLoaded ? (
            <img
              src={destination.image}
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
            className="bg-luxury-blue/70 backdrop-blur-sm p-2 rounded-full text-white hover:text-gold-500 transition-colors"
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
            <span className="text-2xl font-bold text-gold-500">{priceDisplay}</span>
            <span className="text-sm text-gray-500 line-through ml-2">{originalDisplay}</span>
          </div>
          <span className="text-sm text-gray-400">{t('destinations.person')}</span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onClick(destination)}
          className="w-full bg-luxury-gold text-luxury-blue py-3 rounded-lg font-semibold hover:bg-luxury-gold-light transition-colors duration-200"
        >
          {t('destinations.details')}
        </motion.button>
      </div>
    </motion.div>
  );
});

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [showAllDestinations, setShowAllDestinations] = useState(false);
  const [destinationsToShow, setDestinationsToShow] = useState(6);
  const { t, convertPrice } = useLanguage();

  // WP integration
  const wpEnabled = isWpConfigured();
  const [wpRegions, setWpRegions] = useState([]);
  const [wpRegionId, setWpRegionId] = useState(null);
  const [wpItems, setWpItems] = useState([]);
  const [wpLoading, setWpLoading] = useState(false);
  const [wpError, setWpError] = useState('');

  React.useEffect(() => {
    let active = true;
    async function load() {
      if (!wpEnabled) return;
      try {
        setWpLoading(true);
        setWpError('');
        const [regions, items] = await Promise.all([
          fetchRegions(),
          fetchDestinations({ perPage: 12 })
        ]);
        if (!active) return;
        setWpRegions(regions);
        setWpItems(items);
      } catch (e) {
        if (!active) return;
        setWpError(e.message || 'Failed to load destinations');
      } finally {
        if (active) setWpLoading(false);
      }
    }
    load();
    return () => { active = false; };
  }, [wpEnabled]);

  React.useEffect(() => {
    let active = true;
    async function loadByRegion() {
      if (!wpEnabled) return;
      try {
        setWpLoading(true);
        const items = await fetchDestinations({ perPage: 12, regionId: wpRegionId });
        if (!active) return;
        setWpItems(items);
      } catch (e) {
        if (!active) return;
        setWpError(e.message || 'Failed to load destinations');
      } finally {
        if (active) setWpLoading(false);
      }
    }
    if (wpEnabled) loadByRegion();
    // eslint-disable-next-line
  }, [wpRegionId]);

  // Fallback static data
  const staticData = useMemo(() => ({
    'Amérique du Nord': [
      {
        id: 101,
        name: 'New York, États-Unis',
        price: '€899',
        originalPrice: '€1,199',
        image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        duration: '6 jours',
        flightTime: '8h',
        stops: 'Direct',
        rating: 4.7,
        reviews: 540,
        description: 'La ville qui ne dort jamais: gratte-ciels, Central Park et Broadway',
        highlights: ['Times Square', 'Central Park', 'Statue de la Liberté'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 102,
        name: 'Toronto, Canada',
        price: '€799',
        originalPrice: '€1,099',
        image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        duration: '6 jours',
        flightTime: '7h',
        stops: 'Direct',
        rating: 4.6,
        reviews: 320,
        description: 'Métropole cosmopolite au bord du lac Ontario',
        highlights: ['CN Tower', 'Quartier Distillery', 'Chutes du Niagara (excursion)'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      }
    ],
    'Amérique Centrale': [
      {
        id: 201,
        name: 'Cancún, Mexique',
        price: '€699',
        originalPrice: '€999',
        image: 'https://images.unsplash.com/photo-1590080876460-95be4f1baf1d?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '7 jours',
        flightTime: '11h',
        stops: '1 escale',
        rating: 4.6,
        reviews: 410,
        description: 'Plages de sable blanc et eaux turquoise de la Riviera Maya',
        highlights: ['Chichén Itzá', 'Cénotes', 'Isla Mujeres'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 202,
        name: 'San José, Costa Rica',
        price: '€749',
        originalPrice: '€1,049',
        image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '8 jours',
        flightTime: '12h',
        stops: '1 escale',
        rating: 4.7,
        reviews: 210,
        description: 'Nature luxuriante: volcans, forêts tropicales et plages',
        highlights: ['Parc National Manuel Antonio', 'Volcan Arenal', 'Monteverde'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      }
    ],
    'Asie': [
      {
        id: 301,
        name: 'Tokyo, Japon',
        price: '€1,099',
        originalPrice: '€1,499',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '8 jours',
        flightTime: '14h',
        stops: '1 escale',
        rating: 4.8,
        reviews: 640,
        description: 'Fusion futuriste et traditions millénaires',
        highlights: ['Shibuya', 'Asakusa', 'Mont Fuji (excursion)'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 302,
        name: 'Bangkok, Thaïlande',
        price: '€899',
        originalPrice: '€1,199',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '8 jours',
        flightTime: '13h',
        stops: '1 escale',
        rating: 4.7,
        reviews: 520,
        description: 'Temples dorés, marchés flottants et street-food incroyable',
        highlights: ['Grand Palais', 'Wat Arun', 'Ayutthaya (excursion)'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 303,
        name: 'Hanoï, Vietnam',
        price: '€799',
        originalPrice: '€1,099',
        image: 'https://images.unsplash.com/photo-1543248939-ff40856f65d0?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '8 jours',
        flightTime: '12h',
        stops: '1 escale',
        rating: 4.6,
        reviews: 410,
        description: 'Vieille ville, lacs et gastronomie vietnamienne',
        highlights: ['Vieille Ville', 'Lac Hoàn Kiếm', 'Baie d’Halong (excursion)'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 304,
        name: 'Pékin, Chine',
        price: '€999',
        originalPrice: '€1,399',
        image: 'https://images.unsplash.com/photo-1518684079-04c1e3743996?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '8 jours',
        flightTime: '10h',
        stops: '1 escale',
        rating: 4.7,
        reviews: 580,
        description: 'Cité interdite, Grande Muraille et hutongs',
        highlights: ['Cité interdite', 'Grande Muraille', 'Temple du Ciel'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      }
    ],
    'Océanie': [
      {
        id: 401,
        name: 'Sydney, Australie',
        price: '€1,399',
        originalPrice: '€1,899',
        image: 'https://images.unsplash.com/photo-1510749041921-69cc20b8d8ee?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '9 jours',
        flightTime: '22h',
        stops: '1-2 escales',
        rating: 4.8,
        reviews: 280,
        description: 'Opéra, Harbour Bridge et plages mythiques',
        highlights: ['Opéra de Sydney', 'Bondi Beach', 'Blue Mountains'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 402,
        name: 'Auckland, Nouvelle-Zélande',
        price: '€1,499',
        originalPrice: '€1,999',
        image: 'https://images.unsplash.com/photo-1502784444185-4809f99c0382?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '10 jours',
        flightTime: '24h',
        stops: '2 escales',
        rating: 4.8,
        reviews: 260,
        description: 'Skytower, ports et nature verdoyante',
        highlights: ['Skytower', 'Waiheke Island', 'Waitakere Ranges'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      }
    ],
    'Îles Paradisiaques': [
      {
        id: 501,
        name: 'Maldives',
        price: '€1,299',
        originalPrice: '€1,799',
        image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '7 jours',
        flightTime: '12h',
        stops: '1 escale',
        rating: 4.9,
        reviews: 190,
        description: 'Lagons turquoise et villas sur l\'eau',
        highlights: ['Snorkeling', 'Resorts sur pilotis', 'Coucher de soleil en dhoni'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 502,
        name: 'Punta Cana, République Dominicaine',
        price: '€899',
        originalPrice: '€1,299',
        image: 'https://images.unsplash.com/photo-1578898887932-49e42abf5dc4?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '7 jours',
        flightTime: '9h',
        stops: '1 escale',
        rating: 4.7,
        reviews: 370,
        description: 'Plages de sable fin et cocotiers à perte de vue',
        highlights: ['Bavaro Beach', 'Isla Saona', 'Cenotes Hoyo Azul'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 503,
        name: 'Île de la Réunion, France',
        price: '€999',
        originalPrice: '€1,399',
        image: 'https://images.unsplash.com/photo-1518544345920-060609d5d835?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '9 jours',
        flightTime: '11h',
        stops: '1 escale',
        rating: 4.8,
        reviews: 210,
        description: 'Cirques, volcans et lagons',
        highlights: ['Piton de la Fournaise', 'Cirque de Mafate', 'Lagons de l’Ouest'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 504,
        name: 'Île Maurice, Maurice',
        price: '€1,099',
        originalPrice: '€1,499',
        image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '8 jours',
        flightTime: '11h',
        stops: '1 escale',
        rating: 4.8,
        reviews: 300,
        description: 'Lagons translucides et hospitalité mauricienne',
        highlights: ['Île aux Cerfs', 'Chamarel', 'Grand Baie'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
    ],
    'Amérique du Sud': [
      {
        id: 1,
        name: 'Machu Picchu, Pérou',
        price: '€899',
        originalPrice: '€1,299',
        image: 'https://images.unsplash.com/photo-1479299784244-c5262363c5df?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '8 jours',
        flightTime: '12h',
        stops: '1 escale',
        rating: 4.9,
        reviews: 245,
        description: 'Découvrez la citadelle inca perchée dans les Andes',
        highlights: ['Citadelle du Machu Picchu', 'Vallée Sacrée', 'Cusco colonial'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 2,
        name: 'Buenos Aires, Argentine',
        price: '€749',
        originalPrice: '€1,099',
        image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '6 jours',
        flightTime: '11h',
        stops: 'Direct',
        rating: 4.8,
        reviews: 189,
        description: 'La capitale du tango et de la passion latino-américaine',
        highlights: ['Quartier de San Telmo', 'Spectacle de tango', 'Gastronomie locale'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 3,
        name: 'Carthagène, Colombie',
        price: '€649',
        originalPrice: '€949',
        image: 'https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '7 jours',
        flightTime: '10h',
        stops: '1 escale',
        rating: 4.7,
        reviews: 156,
        description: 'Ville coloniale des Caraïbes aux mille couleurs',
        highlights: ['Centre historique', 'Plages paradisiaques', 'Architecture coloniale'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 4,
        name: 'Patagonie, Chili',
        price: '€1,199',
        originalPrice: '€1,699',
        image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '10 jours',
        flightTime: '14h',
        stops: '1 escale',
        rating: 4.9,
        reviews: 203,
        description: 'Paysages grandioses aux confins du monde',
        highlights: ['Torres del Paine', 'Glaciers bleus', 'Faune sauvage'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 5,
        name: 'Rio de Janeiro, Brésil',
        price: '€799',
        originalPrice: '€1,199',
        image: 'https://images.unsplash.com/photo-1662504431607-6714410af32f?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '7 jours',
        flightTime: '9h',
        stops: 'Direct',
        rating: 4.8,
        reviews: 278,
        description: 'La ville merveilleuse entre mer et montagne',
        highlights: ['Christ Rédempteur', 'Plages de Copacabana', 'Quartier de Santa Teresa'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 6,
        name: 'Salar de Uyuni, Bolivie',
        price: '€899',
        originalPrice: '€1,299',
        image: 'https://images.unsplash.com/photo-1530812074867-b93347a3bd10?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '9 jours',
        flightTime: '13h',
        stops: '2 escales',
        rating: 4.9,
        reviews: 134,
        description: 'Le plus grand miroir du monde sous les étoiles',
        highlights: ['Désert de sel', 'Lagunes colorées', 'Flamants roses'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      }
    ],
    'Europe': [
      {
        id: 7,
        name: 'Lisbonne, Portugal',
        price: '€699',
        originalPrice: '€859',
        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '5 jours',
        flightTime: '2h',
        stops: 'Direct',
        rating: 4.6,
        reviews: 312,
        description: 'La capitale portugaise aux sept collines',
        highlights: ['Quartier de Alfama', 'Tramway 28', 'Pastéis de nata'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 701,
        name: 'Paris, France',
        price: '€799',
        originalPrice: '€1,099',
        image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '5 jours',
        flightTime: '2h',
        stops: 'Direct',
        rating: 4.8,
        reviews: 820,
        description: 'Ville lumière: Tour Eiffel, Louvre et Seine',
        highlights: ['Tour Eiffel', 'Louvre', 'Croisière sur la Seine'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 702,
        name: 'Rome, Italie',
        price: '€749',
        originalPrice: '€999',
        image: 'https://images.unsplash.com/photo-1549893079-842e6a1609e0?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '5 jours',
        flightTime: '2h',
        stops: 'Direct',
        rating: 4.7,
        reviews: 560,
        description: 'Colisée, Fontaine de Trévi et Vatican',
        highlights: ['Colisée', 'Fontaine de Trévi', 'Vatican'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 703,
        name: 'Athènes, Grèce',
        price: '€699',
        originalPrice: '€999',
        image: 'https://images.unsplash.com/photo-1542314981-1f61a29a5756?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '5 jours',
        flightTime: '3h',
        stops: '1 escale',
        rating: 4.6,
        reviews: 430,
        description: 'Acropole, Plaka et mer Égée',
        highlights: ['Acropole', 'Plaka', 'Cap Sounion'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 704,
        name: 'Londres, Royaume-Uni',
        price: '€899',
        originalPrice: '€1,299',
        image: 'https://images.unsplash.com/photo-1473959383411-c6db0e8e854b?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '5 jours',
        flightTime: '1h30',
        stops: 'Direct',
        rating: 4.7,
        reviews: 760,
        description: 'Big Ben, Tower Bridge et musées gratuits',
        highlights: ['Big Ben', 'Tower Bridge', 'British Museum'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      },
      {
        id: 705,
        name: 'Madrid, Espagne',
        price: '€699',
        originalPrice: '€999',
        image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=600&h=400&fit=crop&auto=format&q=80',
        duration: '5 jours',
        flightTime: '2h',
        stops: 'Direct',
        rating: 4.6,
        reviews: 530,
        description: 'Prado, Plaza Mayor et tapas',
        highlights: ['Musée du Prado', 'Plaza Mayor', 'Parc du Retiro'],
        baggage: { cabin: '1 bagage cabine (8kg)', checked: '1 bagage en soute (23kg)', backpack: 'Sac à dos inclus' }
      }
    ]
  }), []);

  const [selectedRegion, setSelectedRegion] = useState('Amérique du Sud');
  const staticRegions = Object.keys(staticData);
  const itemsToRender = wpEnabled ? wpItems : (showAllDestinations ? staticData[selectedRegion] : staticData[selectedRegion].slice(0, destinationsToShow));

  return (
    <section id="destinations" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
            {t('destinations.title')} <span className="text-gold-500">{t('destinations.subtitle')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('destinations.description')}
          </p>
        </motion.div>

        {/* Regions Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {wpEnabled ? (
            <>
              <button
                key="all"
                onClick={() => setWpRegionId(null)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  wpRegionId === null ? 'bg-gold-500 text-black font-semibold' : 'bg-luxury-blue/60 text-gray-300 hover:bg-luxury-blue/80'
                }`}
              >
                Tous
              </button>
              {wpRegions.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setWpRegionId(r.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-200 ${
                    wpRegionId === r.id ? 'bg-gold-500 text-black font-semibold' : 'bg-luxury-blue/60 text-gray-300 hover:bg-luxury-blue/80'
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </>
          ) : (
            staticRegions.map((region) => (
              <button
                key={region}
                onClick={() => {
                  setSelectedRegion(region);
                  setDestinationsToShow(6);
                  setShowAllDestinations(false);
                }}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  selectedRegion === region ? 'bg-gold-500 text-black font-semibold' : 'bg-luxury-blue/60 text-gray-300 hover:bg-luxury-blue/80'
                }`}
              >
                {region}
              </button>
            ))
          )}
        </div>

        {/* Grid */}
        {wpEnabled ? (
          wpLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-80 bg-luxury-blue/60 rounded-2xl animate-pulse border border-luxury-gold/10" />
              ))}
            </div>
          ) : wpError ? (
            <div className="text-center text-red-400">{wpError}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itemsToRender.map((destination, index) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  onClick={setSelectedDestination}
                  delay={index * 0.05}
                  t={t}
                  convertPrice={convertPrice}
                />
              ))}
            </div>
          )
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itemsToRender.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onClick={setSelectedDestination}
                delay={index * 0.05}
                t={t}
                convertPrice={convertPrice}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Destinations;