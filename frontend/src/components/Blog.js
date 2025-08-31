import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, MapPin, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Blog = () => {
  const { t } = useLanguage();
  const blogPosts = [
    {
      id: 'about-me',
      title: 'Sobre Mim',
      excerpt: 'Conheça minha jornada pelos 6 países da América do Sul e como transformei minha paixão por viagens em profissão.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&auto=format&q=80',
      author: 'MC Viagens',
      date: '20 Janeiro 2025',
      readTime: '5 min',
      category: 'Sobre Mim',
      featured: true,
      isAbout: true,
      aboutType: 'aboutMe'
    },
    {
      id: 'about-company',
      title: 'Sobre a MC Viagens',
      excerpt: 'Descubra nossa expertise em viagens internacionais e nosso compromisso com experiências únicas e preços competitivos.',
      image: 'https://images.unsplash.com/photo-2544005313-94ddf0286df2?w=600&h=400&fit=crop&auto=format&q=80',
      author: 'MC Viagens',
      date: '18 Janeiro 2025',
      readTime: '4 min',
      category: 'Sobre Nós',
      featured: false,
      isAbout: true,
      aboutType: 'about'
    },
    {
      id: 1,
      title: 'Salar de Uyuni: O Maior Espelho do Mundo',
      excerpt: 'Descubra a magia do Salar de Uyuni na Bolívia, onde o céu se encontra com a terra em uma experiência única no mundo.',
      image: 'https://images.unsplash.com/photo-1530812074867-b93347a3bd10?w=600&h=400&fit=crop&auto=format&q=80',
      author: 'MC Viagens',
      date: '15 Janeiro 2025',
      readTime: '8 min',
      category: 'Destinos',
      featured: false,
      destination: 'bolivia',
      link: '#destinations'
    },
    {
      id: 2,
      title: 'Machu Picchu: Guia Completo da Cidadela Inca',
      excerpt: 'Tudo o que você precisa saber para visitar esta maravilha do mundo no Peru.',
      image: 'https://images.unsplash.com/photo-1479299784244-c5262363c5df?w=600&h=400&fit=crop&auto=format&q=80',
      author: 'MC Viagens',
      date: '10 Janeiro 2025',
      readTime: '10 min',
      category: 'Destinos',
      featured: false,
      destination: 'peru',
      link: '#destinations'
    },
    {
      id: 3,
      title: 'Buenos Aires: Tango, Gastronomia e Cultura',
      excerpt: 'A capital argentina oferece uma mistura única de tradição e modernidade.',
      image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600&h=400&fit=crop&auto=format&q=80',
      author: 'MC Viagens',
      date: '5 Janeiro 2025',
      readTime: '7 min',
      category: 'Destinos',
      featured: false,
      destination: 'argentina',
      link: '#destinations'
    },
    {
      id: 4,
      title: 'Patagônia Chilena: Paisagens de Tirar o Fôlego',
      excerpt: 'Explore as paisagens mais dramáticas da América do Sul na Patagônia chilena.',
      image: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?w=600&h=400&fit=crop&auto=format&q=80',
      author: 'MC Viagens',
      date: '1 Janeiro 2025',
      readTime: '9 min',
      category: 'Destinos',
      featured: false,
      destination: 'chile',
      link: '#destinations'
    },
    {
      id: 5,
      title: 'Rio de Janeiro: Entre Montanhas e Praias',
      excerpt: 'A cidade maravilhosa oferece o melhor do Brasil: cultura, natureza e hospitalidade.',
      image: 'https://images.unsplash.com/photo-1662504431607-6714410af32f?w=600&h=400&fit=crop&auto=format&q=80',
      author: 'MC Viagens',
      date: '28 Dezembro 2024',
      readTime: '6 min',
      category: 'Destinos',
      featured: false,
      destination: 'brazil',
      link: '#destinations'
    },
    {
      id: 6,
      title: 'Uruguai: Charme e Tranquilidade em Punta del Este',
      excerpt: 'Descubra o lado sofisticado e relaxante do Uruguai.',
      image: 'https://images.unsplash.com/photo-1583402809788-3d0444e0ffd8?w=600&h=400&fit=crop&auto=format&q=80',
      author: 'MC Viagens',
      date: '25 Dezembro 2024',
      readTime: '5 min',
      category: 'Destinos',
      featured: false,
      destination: 'uruguay',
      link: '#destinations'
    }
  ];

  const categories = [t('blog.categories.all'), t('blog.categories.destinations'), t('blog.categories.tips'), t('blog.categories.guides'), t('blog.categories.culture'), t('blog.categories.couples')];
  const [selectedCategory, setSelectedCategory] = React.useState(t('blog.categories.all'));

  const filteredPosts = selectedCategory === t('blog.categories.all') 
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
            {t('blog.title')} <span className="text-gold-500">{t('blog.subtitle')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('blog.description')}
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
        {featuredPost && selectedCategory === t('blog.categories.all') && (
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
                      {t('blog.featuredArticle')}
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
                      onClick={() => {
                        if (featuredPost.link) {
                          const element = document.querySelector(featuredPost.link);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                      className="bg-gold-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-gold-400 transition-colors duration-200 flex items-center space-x-2"
                    >
                      <span>{t('blog.readArticle')}</span>
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
          {(selectedCategory === t('blog.categories.all') ? regularPosts : filteredPosts).map((post, index) => (
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
                  onClick={() => {
                    if (post.link) {
                      const element = document.querySelector(post.link);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="text-gold-500 hover:text-gold-400 font-semibold flex items-center space-x-2 transition-colors duration-200"
                >
                  <span>{t('blog.readMore')}</span>
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
              {t('blog.newsletter.title')}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {t('blog.newsletter.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('blog.newsletter.placeholder')}
                className="flex-1 px-6 py-3 rounded-full bg-black-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-gold-500 transition-colors duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-gold-400 transition-colors duration-200"
              >
                {t('blog.newsletter.subscribe')}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;