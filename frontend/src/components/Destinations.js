import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Plane, Users, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const DestinationCard = ({ d, onClick, convertPrice }) => {
  const priceDisplay = convertPrice(d.price);
  const originalDisplay = convertPrice(d.originalPrice);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-luxury-blue/60 rounded-2xl overflow-hidden shadow-2xl border border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300"
    >
      <div className="relative w-full h-48 bg-gray-700">
        <img src={d.image} alt={d.name} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute bottom-3 left-3 flex items-center space-x-1 text-white">
          <Star className="h-4 w-4 text-gold-500" />
          <span className="text-sm font-medium">{d.rating}</span>
          <span className="text-sm text-gray-300">({d.reviews})</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{d.name}</h3>
        <p className="text-gray-400 mb-4">{d.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-gray-300"><Clock className="h-4 w-4 text-gold-500" /><span className="text-sm">{d.duration}</span></div>
          <div className="flex items-center space-x-2 text-gray-300"><Plane className="h-4 w-4 text-gold-500" /><span className="text-sm">{d.flightTime}</span></div>
          <div className="flex items-center space-x-2 text-gray-300"><MapPin className="h-4 w-4 text-gold-500" /><span className="text-sm">{d.stops}</span></div>
          <div className="flex items-center space-x-2 text-gray-300"><Users className="h-4 w-4 text-gold-500" /><span className="text-sm">2-8 pers.</span></div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gold-500">{priceDisplay}</span>
            <span className="text-sm text-gray-500 line-through ml-2">{originalDisplay}</span>
          </div>
          <button onClick={() => onClick(d)} className="text-gold-500 hover:text-gold-400 font-semibold">Détails</button>
        </div>
      </div>
    </motion.div>
  );
};

const Destinations = () => {
  const { t, convertPrice } = useLanguage();
  const [region, setRegion] = useState('Europe');
  const [detail, setDetail] = useState(null);

  // Static preview data (always visible even without WP)
  const data = useMemo(() => ({
    'Amérique du Nord': [
      { id: 101, name: 'New York, États-Unis', price: '€899', originalPrice: '€1199', image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', duration: '6 jours', flightTime: '8h', stops: 'Direct', rating: 4.7, reviews: 540, description: 'La ville qui ne dort jamais.' },
      { id: 102, name: 'Toronto, Canada', price: '€799', originalPrice: '€1099', image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', duration: '6 jours', flightTime: '7h', stops: 'Direct', rating: 4.6, reviews: 320, description: 'Métropole cosmopolite au bord du lac Ontario.' }
    ],
    'Amérique Centrale': [
      { id: 201, name: 'Cancún, Mexique', price: '€699', originalPrice: '€999', image: 'https://images.unsplash.com/photo-1509818139432-c67e4197a914?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxDYW5jdW4lMjBiZWFjaHxlbnwwfHx8fDE3NTgzMDA1NDZ8MA&ixlib=rb-4.1.0&q=85', duration: '7 jours', flightTime: '11h', stops: '1 escale', rating: 4.6, reviews: 410, description: 'Plages de sable blanc et eaux turquoise.' },
      { id: 202, name: 'San José, Costa Rica', price: '€749', originalPrice: '€1049', image: 'https://images.unsplash.com/photo-1684383311007-7baa94be7951?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxDb3N0YSUyMFJpY2ElMjB2b2xjYW5vfGVufDB8fHx8MTc1ODMwMDU1MXww&ixlib=rb-4.1.0&q=85', duration: '8 jours', flightTime: '12h', stops: '1 escale', rating: 4.7, reviews: 210, description: 'Volcans, forêts tropicales et plages.' }
    ],
    'Amérique du Sud': [
      { id: 301, name: 'Machu Picchu, Pérou', price: '€899', originalPrice: '€1299', image: 'https://images.unsplash.com/photo-1479299784244-c5262363c5df?w=600&h=400&fit=crop&auto=format&q=80', duration: '8 jours', flightTime: '12h', stops: '1 escale', rating: 4.9, reviews: 245, description: 'Citadelle inca perchée dans les Andes.' },
      { id: 302, name: 'Patagonie, Chili', price: '€1199', originalPrice: '€1699', image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=600&h=400&fit=crop&auto=format&q=80', duration: '10 jours', flightTime: '14h', stops: '1 escale', rating: 4.9, reviews: 203, description: 'Paysages grandioses aux confins du monde.' },
      { id: 303, name: 'La Paz, Bolivie', price: '€749', originalPrice: '€1099', image: 'https://images.unsplash.com/photo-1596118769843-08e9ad381ab0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxMYSUyMFBheiUyMEJvbGl2aWF8ZW58MHx8fHwxNzU4MzAxNDYyfDA&ixlib=rb-4.1.0&q=85', duration: '7 jours', flightTime: '15h', stops: '1 escale', rating: 4.7, reviews: 180, description: 'Capitale la plus haute du monde et téléphériques.' },
      { id: 304, name: 'Rio de Janeiro, Brésil', price: '€999', originalPrice: '€1399', image: 'https://images.unsplash.com/photo-1653863878915-8a0a03c1b5ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxSaW8lMjBkZSUyMEphbmVpcm8lMjBDaHJpc3QlMjBzdGF0dWV8ZW58MHx8fHwxNzU4MzAxNDY5fDA&ixlib=rb-4.1.0&q=85', duration: '8 jours', flightTime: '11h', stops: '1 escale', rating: 4.8, reviews: 520, description: 'Christ Rédempteur, Copacabana et Carnaval.' },
      { id: 305, name: 'Buenos Aires, Argentine', price: '€899', originalPrice: '€1299', image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxCdWVub3MlMjBBaXJlcyUyMEFyZ2VudGluYXxlbnwwfHx8fDE3NTgzMDE0NzV8MA&ixlib=rb-4.1.0&q=85', duration: '7 jours', flightTime: '13h', stops: '1 escale', rating: 4.7, reviews: 350, description: 'Tango, Obélisque et quartier de La Boca.' },
      { id: 306, name: 'Montevideo, Uruguay', price: '€699', originalPrice: '€999', image: 'https://images.unsplash.com/photo-1649950304911-47208d37aa0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxVcnVndWF5JTIwYmVhY2h8ZW58MHx8fHwxNzU4MzAxOTI5fDA&ixlib=rb-4.1.0&q=85', duration: '5 jours', flightTime: '13h', stops: '1 escale', rating: 4.5, reviews: 120, description: 'Plages magnifiques, Rambla et côte atlantique.' }
    ],
    'Europe': [
      { id: 401, name: 'Lisbonne, Portugal', price: '€699', originalPrice: '€859', image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&h=400&fit=crop&auto=format&q=80', duration: '5 jours', flightTime: '2h', stops: 'Direct', rating: 4.6, reviews: 312, description: 'La capitale portugaise aux sept collines.' },
      { id: 402, name: 'Paris, France', price: '€799', originalPrice: '€1099', image: 'https://images.unsplash.com/photo-1570097703229-b195d6dd291f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxFaWZmZWwlMjBUb3dlcnxlbnwwfHx8fDE3NTgzMDAwNTl8MA&ixlib=rb-4.1.0&q=85', duration: '5 jours', flightTime: '2h', stops: 'Direct', rating: 4.8, reviews: 820, description: 'Tour Eiffel, Louvre et Seine.' },
      { id: 403, name: 'Rome, Italie', price: '€749', originalPrice: '€999', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxDb2xvc3NldW18ZW58MHx8fHwxNzU4MzAwMDY1fDA&ixlib=rb-4.1.0&q=85', duration: '5 jours', flightTime: '2h', stops: 'Direct', rating: 4.7, reviews: 560, description: 'Colisée, Fontaine de Trévi et Vatican.' },
      { id: 404, name: 'Athènes, Grèce', price: '€699', originalPrice: '€999', image: 'https://images.unsplash.com/photo-1531816458010-fb7685eecbcb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxHcmVlayUyMHRlbXBsZXxlbnwwfHx8fDE3NTgzMDAwNzF8MA&ixlib=rb-4.1.0&q=85', duration: '5 jours', flightTime: '3h', stops: '1 escale', rating: 4.6, reviews: 430, description: 'Acropole, Plaka et mer Égée.' },
      { id: 405, name: 'Londres, Royaume-Uni', price: '€899', originalPrice: '€1299', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop&auto=format&q=80', duration: '5 jours', flightTime: '1h30', stops: 'Direct', rating: 4.7, reviews: 760, description: 'Big Ben, Tower Bridge et musées gratuits.' },
      { id: 406, name: 'Madrid, Espagne', price: '€699', originalPrice: '€999', image: 'https://images.unsplash.com/photo-1463003416389-296a1ad37ca0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxTcGFpbiUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3NTgzMDAwNzd8MA&ixlib=rb-4.1.0&q=85', duration: '5 jours', flightTime: '2h', stops: 'Direct', rating: 4.6, reviews: 530, description: 'Prado, Plaza Mayor et tapas.' },
      { id: 407, name: 'Genève, Suisse', price: '€799', originalPrice: '€1099', image: 'https://images.unsplash.com/photo-1521292270410-a8c4d716d518?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxTd2lzcyUyMEFscHN8ZW58MHx8fHwxNzU4MzAwMDg0fDA&ixlib=rb-4.1.0&q=85', duration: '5 jours', flightTime: '2h', stops: 'Direct', rating: 4.7, reviews: 420, description: 'Jet d’eau, Vieille Ville et Lac Léman.' }
    ],
    'Asie': [
      { id: 501, name: 'Tokyo, Japon', price: '€1099', originalPrice: '€1499', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&auto=format&q=80', duration: '8 jours', flightTime: '14h', stops: '1 escale', rating: 4.8, reviews: 640, description: 'Futur et traditions millénaires.' },
      { id: 502, name: 'Bangkok, Thaïlande', price: '€899', originalPrice: '€1199', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop&auto=format&q=80', duration: '8 jours', flightTime: '13h', stops: '1 escale', rating: 4.7, reviews: 520, description: 'Temples dorés et marchés flottants.' },
      { id: 503, name: 'Hanoï, Vietnam', price: '€799', originalPrice: '€1099', image: 'https://images.unsplash.com/photo-1553851919-596510268b99?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwdGVtcGxlfGVufDB8fHx8MTc1ODMwMDU1N3ww&ixlib=rb-4.1.0&q=85', duration: '8 jours', flightTime: '12h', stops: '1 escale', rating: 4.6, reviews: 410, description: 'Vieille ville, lacs et gastronomie.' },
      { id: 504, name: 'Pékin, Chine', price: '€999', originalPrice: '€1399', image: 'https://images.unsplash.com/photo-1652949485345-d4af1952e7f8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxCZWlqaW5nJTIwZm9yYmlkZGVuJTIwY2l0eXxlbnwwfHx8fDE3NTgzMDA1NjN8MA&ixlib=rb-4.1.0&q=85', duration: '8 jours', flightTime: '10h', stops: '1 escale', rating: 4.7, reviews: 580, description: 'Cité interdite et Grande Muraille.' }
    ],
    'Océanie': [
      { id: 601, name: 'Sydney, Australie', price: '€1399', originalPrice: '€1899', image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxTeWRuZXklMjBvcGVyYSUyMGhvdXNlfGVufDB8fHx8MTc1ODMwMDU2OXww&ixlib=rb-4.1.0&q=85', duration: '9 jours', flightTime: '22h', stops: '1-2 escales', rating: 4.8, reviews: 280, description: 'Opéra, Harbour Bridge et plages.' },
      { id: 602, name: 'Auckland, Nouvelle-Zélande', price: '€1499', originalPrice: '€1999', image: 'https://images.unsplash.com/photo-1677557769755-875d8141c0c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxBdWNrbGFuZCUyMGhhcmJvcnxlbnwwfHx8fDE3NTgzMDA1NzV8MA&ixlib=rb-4.1.0&q=85', duration: '10 jours', flightTime: '24h', stops: '2 escales', rating: 4.8, reviews: 260, description: 'Skytower, ports et nature verdoyante.' }
    ],
    'Îles Paradisiaques': [
      { id: 701, name: 'Maldives', price: '€1299', originalPrice: '€1799', image: 'https://images.unsplash.com/photo-1703337419592-c0caade6af83?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxNYWxkaXZlcyUyMGxhZ29vbnxlbnwwfHx8fDE3NTgzMDA1ODF8MA&ixlib=rb-4.1.0&q=85', duration: '7 jours', flightTime: '12h', stops: '1 escale', rating: 4.9, reviews: 190, description: 'Lagons turquoise et villas sur l\'eau.' },
      { id: 702, name: 'Punta Cana, Rép. Dominicaine', price: '€899', originalPrice: '€1299', image: 'https://images.unsplash.com/photo-1650492892615-b3127011ec40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxQdW50YSUyMENhbmElMjBiZWFjaHxlbnwwfHx8fDE3NTgzMDA1ODh8MA&ixlib=rb-4.1.0&q=85', duration: '7 jours', flightTime: '9h', stops: '1 escale', rating: 4.7, reviews: 370, description: 'Plages et cocotiers à perte de vue.' },
      { id: 703, name: 'Île de la Réunion, France', price: '€999', originalPrice: '€1399', image: 'https://images.unsplash.com/photo-1566324641238-74b06f690664?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxSZXVuaW9uJTIwdm9sY2Fub3xlbnwwfHx8fDE3NTgzMDA1OTV8MA&ixlib=rb-4.1.0&q=85', duration: '9 jours', flightTime: '11h', stops: '1 escale', rating: 4.8, reviews: 210, description: 'Cirques, volcans et lagons.' },
      { id: 704, name: 'Île Maurice, Maurice', price: '€1099', originalPrice: '€1499', image: 'https://images.unsplash.com/photo-1678376789557-db5dc3992327?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxNYXVyaXRpdXMlMjBsYWdvb258ZW58MHx8fHwxNzU4MzAwNjAxfDA&ixlib=rb-4.1.0&q=85', duration: '8 jours', flightTime: '11h', stops: '1 escale', rating: 4.8, reviews: 300, description: 'Lagons translucides et hospitalité mauricienne.' }
    ]
  }), []);

  const regions = Object.keys(data);
  const items = data[region] || [];

  return (
    <section id="destinations" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
            {t('destinations.title')} <span className="text-gold-500">{t('destinations.subtitle')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('destinations.description')}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {regions.map((r) => (
            <button key={r} onClick={() => setRegion(r)} className={`px-6 py-2 rounded-full transition-all duration-200 ${region === r ? 'bg-gold-500 text-black font-semibold' : 'bg-luxury-blue/60 text-gray-300 hover:bg-luxury-blue/80'}`}>{r}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((d) => (
            <DestinationCard key={d.id} d={d} onClick={setDetail} convertPrice={convertPrice} />)
          )}
        </div>

        {detail && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setDetail(null)}>
            <div className="bg-luxury-blue/70 border border-luxury-gold/20 rounded-2xl max-w-2xl w-full p-6" onClick={(e) => e.stopPropagation()}>
              <div className="w-full h-56 rounded-xl overflow-hidden mb-4 bg-gray-700">
                <img src={detail.image} alt={detail.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">{detail.name}</h3>
              <p className="text-gray-300 mb-4">{detail.description}</p>
              <button className="mt-2 text-gold-500 hover:text-gold-400 font-semibold" onClick={() => setDetail(null)}>Fermer</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Destinations;