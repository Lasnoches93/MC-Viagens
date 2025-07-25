import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, MapPin, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Blog = () => {
  const { t } = useLanguage();
  const blogPosts = [
    {
      id: 1,
      title: 'Les 10 destinations incontournables d\'Amérique latine en 2024',
      excerpt: 'Découvrez les joyaux cachés de l\'Amérique latine, des plages paradisiaques aux sommets andins.',
      image: 'https://images.unsplash.com/photo-1517051436577-ecefc47f36a6',
      author: 'Jheny Mamani',
      date: '15 Mars 2024',
      readTime: '8 min',
      category: 'Destinations',
      featured: true
    },
    {
      id: 2,
      title: 'Comment voyager en Amérique latine avec un petit budget',
      excerpt: 'Mes conseils d\'experte pour explorer l\'Amérique latine sans se ruiner.',
      image: 'https://images.unsplash.com/photo-1530469525856-cf37954301f7',
      author: 'Jheny Mamani',
      date: '8 Mars 2024',
      readTime: '6 min',
      category: 'Conseils',
      featured: false
    },
    {
      id: 3,
      title: 'Machu Picchu : Guide complet pour une visite réussie',
      excerpt: 'Tout ce que vous devez savoir pour visiter cette merveille du monde.',
      image: 'https://images.unsplash.com/photo-1509362657489-b9bd8c0089c8',
      author: 'Jheny Mamani',
      date: '1 Mars 2024',
      readTime: '10 min',
      category: 'Guides',
      featured: false
    },
    {
      id: 4,
      title: 'Patagonie : Quand partir et que voir ?',
      excerpt: 'La Patagonie révèle ses secrets selon les saisons. Découvrez le meilleur moment pour partir.',
      image: 'https://images.unsplash.com/photo-1713561684894-25393bb9594b',
      author: 'Jheny Mamani',
      date: '22 Février 2024',
      readTime: '7 min',
      category: 'Destinations',
      featured: false
    },
    {
      id: 5,
      title: 'Street food en Amérique latine : Un voyage culinaire',
      excerpt: 'Explorez les saveurs authentiques des marchés et stands de rue latino-américains.',
      image: 'https://images.unsplash.com/flagged/photo-1575402669213-639549555a2c',
      author: 'Jheny Mamani',
      date: '15 Février 2024',
      readTime: '5 min',
      category: 'Culture',
      featured: false
    },
    {
      id: 6,
      title: 'Organiser un voyage de noces en Amérique latine',
      excerpt: 'Conseils pour créer le voyage de rêve parfait pour les couples.',
      image: 'https://images.unsplash.com/flagged/photo-1576636215888-539d692c4136',
      author: 'Jheny Mamani',
      date: '8 Février 2024',
      readTime: '9 min',
      category: 'Couples',
      featured: false
    }
  ];

  const categories = ['Tous', 'Destinations', 'Conseils', 'Guides', 'Culture', 'Couples'];
  const [selectedCategory, setSelectedCategory] = React.useState('Tous');

  const filteredPosts = selectedCategory === 'Tous' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-black-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Blog <span className="text-gold-500">Voyage</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conseils d'experte, guides de voyage et inspirations pour vos prochaines aventures
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gold-500 text-black font-semibold'
                  : 'bg-black-800 text-gray-300 hover:bg-black-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'Tous' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <div className="bg-black-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Article vedette
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gold-500/20 text-gold-500 px-3 py-1 rounded-full text-sm">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-gold-500" />
                      <div>
                        <p className="text-white font-medium">{featuredPost.author}</p>
                        <p className="text-gray-400 text-sm">{featuredPost.date}</p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gold-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-gold-400 transition-colors duration-200 flex items-center space-x-2"
                    >
                      <span>Lire l'article</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {(selectedCategory === 'Tous' ? regularPosts : filteredPosts).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-black-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-gold-500/10 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black-900/80 backdrop-blur-sm text-gold-500 px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gold-500 hover:text-gold-400 font-semibold flex items-center space-x-2 transition-colors duration-200"
                >
                  <span>Lire plus</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-serif font-bold text-white mb-4">
              Restez informé de mes derniers articles
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Recevez mes conseils de voyage, mes découvertes et mes offres spéciales directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-3 rounded-full bg-black-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-gold-500 transition-colors duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-gold-400 transition-colors duration-200"
              >
                S'abonner
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;