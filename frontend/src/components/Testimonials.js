import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: 'Marie & Pierre Dubois',
      location: 'Paris, France',
      destination: 'Machu Picchu, Pérou',
      rating: 5,
      comment: 'Jheny a organisé notre voyage de rêve au Pérou. Chaque détail était parfait, des vols aux hébergements en passant par les excursions. Le prix était imbattable comparé à ce que nous avions vu ailleurs.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 2,
      name: 'Sarah & Thomas Martin',
      location: 'Lyon, France',
      destination: 'Buenos Aires, Argentine',
      rating: 5,
      comment: 'Une expérience inoubliable ! Jheny connaît parfaitement l\'Argentine et nous a fait découvrir des lieux authentiques. Son expertise de l\'Amérique latine est remarquable.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9eceaa7?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 3,
      name: 'Antoine & Claire Rousseau',
      location: 'Marseille, France',
      destination: 'Patagonie, Chili',
      rating: 5,
      comment: 'La Patagonie était sur notre liste depuis des années. Jheny a rendu ce rêve accessible avec des prix très compétitifs. Le voyage était magique !',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 4,
      name: 'Julie & Marc Leroy',
      location: 'Toulouse, France',
      destination: 'Carthagène, Colombie',
      rating: 5,
      comment: 'Service exceptionnel ! Jheny est à l\'écoute et très professionnelle. Elle a su adapter le voyage à notre budget sans compromis sur la qualité.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 5,
      name: 'Émilie & David Moreau',
      location: 'Nantes, France',
      destination: 'Rio de Janeiro, Brésil',
      rating: 5,
      comment: 'Rio était absolument fantastique ! Jheny nous a organisé des activités qu\'on n\'aurait jamais trouvées seuls. Rapport qualité-prix excellent.',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=faces'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-gold-500 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-black-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Témoignages <span className="text-gold-500">Clients</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez ce que nos voyageurs pensent de leurs expériences avec Jheny Voyages
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-black-900 rounded-2xl p-8 md:p-12 relative"
          >
            <Quote className="h-12 w-12 text-gold-500/20 absolute top-6 left-6" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover ring-4 ring-gold-500/20"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start space-x-1 mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                
                <p className="text-lg text-gray-300 mb-6 italic">
                  "{testimonials[currentTestimonial].comment}"
                </p>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-400 mb-2">{testimonials[currentTestimonial].location}</p>
                  <p className="text-gold-500 font-medium">
                    Voyage: {testimonials[currentTestimonial].destination}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="bg-black-700 hover:bg-black-600 text-white p-3 rounded-full transition-colors duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-gold-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="bg-black-700 hover:bg-black-600 text-white p-3 rounded-full transition-colors duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-gold-500 mb-2">4.9/5</div>
            <p className="text-gray-300">Note moyenne</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold-500 mb-2">500+</div>
            <p className="text-gray-300">Clients satisfaits</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold-500 mb-2">98%</div>
            <p className="text-gray-300">Recommandations</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;