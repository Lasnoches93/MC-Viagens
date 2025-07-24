import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  pt: {
    // Header
    nav: {
      home: 'Início',
      destinations: 'Destinos',
      about: 'Sobre',
      blog: 'Blog',
      testimonials: 'Depoimentos',
      contact: 'Contato'
    },
    // Hero
    hero: {
      title: 'Descubra o Mundo',
      subtitle: 'com Preços Acessíveis',
      description: 'Explore os destinos mais fascinantes com MC Viagens, especialista em viagens internacionais com os melhores preços competitivos.',
      cta1: 'Descobrir Destinos',
      cta2: 'Orçamento Personalizado'
    },
    // About
    about: {
      title: 'Conheça MC Viagens',
      intro: 'Apaixonada por viagens desde sempre, me especializo na busca dos melhores preços para viagens internacionais, com expertise particular na América Latina.',
      description: 'Com 5 anos de experiência na indústria do turismo, percorro o mundo para encontrar os destinos mais fascinantes aos preços mais competitivos. Minha expertise tarifária cobre América do Norte, América do Sul, Europa, Ásia, Oceania e ilhas paradisíacas.',
      stats: {
        travelers: 'Viajantes satisfeitos',
        countries: 'Países explorados',
        experience: 'Anos de experiência',
        rating: 'Nota média'
      },
      specialties: {
        international: 'Viagens Internacionais',
        couples: 'Viagens de Casal',
        prices: 'Melhores Preços',
        service: 'Serviço Personalizado'
      }
    },
    // Destinations
    destinations: {
      title: 'Nossas Viagens',
      subtitle: 'Internacionais',
      description: 'Descubra nossa seleção exclusiva de destinos internacionais, escolhidos pela MC Viagens por sua autenticidade e preços imbatíveis.',
      regions: {
        'Amérique du Sud': 'América do Sul',
        'Europe': 'Europa',
        'Amérique du Nord': 'América do Norte',
        'Asie': 'Ásia',
        'Océanie': 'Oceania',
        'Îles Paradisiaques': 'Ilhas Paradisíacas'
      },
      details: 'Ver detalhes',
      book: 'Reservar agora',
      person: 'por pessoa'
    },
    // Contact
    contact: {
      title: 'Entre em Contato',
      subtitle: 'conosco',
      description: 'Pronto para partir na aventura? Obtenha um orçamento personalizado para sua próxima viagem',
      whyChoose: 'Por que escolher MC Viagens?',
      advantages: [
        'Expertise exclusiva da América Latina',
        'Busca de preços competitivos internacionalmente',
        'Acompanhamento personalizado 24/7',
        'Em caso de insatisfação, um crédito de 15% para outro destino será oferecido'
      ]
    },
    // Footer
    footer: {
      navigation: 'Navegação',
      destinations: 'Destinos',
      services: 'Serviços',
      followUs: 'Siga-nos:',
      personalizedAdvice: 'Conte com uma assessoria personalizada',
      support: 'Suporte pós-venda',
      mcViagens: 'MC Viagens',
      howItWorks: 'Como Funciona'
    }
  },
  fr: {
    // Header
    nav: {
      home: 'Accueil',
      destinations: 'Destinations',
      about: 'À propos',
      blog: 'Blog',
      testimonials: 'Témoignages',
      contact: 'Contact'
    },
    // Hero
    hero: {
      title: 'Découvrez le Monde',
      subtitle: 'à Prix Accessible',
      description: 'Explorez les destinations les plus fascinantes avec MC Viagens, spécialiste des voyages internationaux aux meilleurs prix compétitifs.',
      cta1: 'Découvrir nos Destinations',
      cta2: 'Devis Personnalisé'
    },
    // About
    about: {
      title: 'Rencontrez MC Viagens',
      intro: 'Passionnée de voyages depuis toujours, je me spécialise dans la recherche des meilleurs bons plans pour les voyages internationaux, avec une expertise particulière en Amérique latine.',
      description: 'Forte de 5 années d\'expérience dans l\'industrie du tourisme, je parcours le monde pour vous dénicher les destinations les plus fascinantes aux prix les plus compétitifs. Mon expertise tarifaire couvre l\'Amérique du Nord, l\'Amérique du Sud, l\'Europe, l\'Asie, l\'Océanie, mais également les îles paradisiaques.',
      stats: {
        travelers: 'Voyageurs satisfaits',
        countries: 'Pays explorés',
        experience: 'Années d\'expérience',
        rating: 'Note moyenne'
      },
      specialties: {
        international: 'Voyages Internationaux',
        couples: 'Voyages de Couple',
        prices: 'Meilleurs Prix',
        service: 'Service Personnalisé'
      }
    },
    // Destinations
    destinations: {
      title: 'Nos Voyages',
      subtitle: 'Internationaux',
      description: 'Découvrez notre sélection exclusive de destinations internationales, choisies par MC Viagens pour leur authenticité et leurs prix imbattables.',
      regions: {
        'Amérique du Sud': 'Amérique du Sud',
        'Europe': 'Europe',
        'Amérique du Nord': 'Amérique du Nord',
        'Asie': 'Asie',
        'Océanie': 'Océanie',
        'Îles Paradisiaques': 'Îles Paradisiaques'
      },
      details: 'Voir les détails',
      book: 'Réserver maintenant',
      person: 'par personne'
    },
    // Contact
    contact: {
      title: 'Contactez',
      subtitle: 'MC Viagens',
      description: 'Prêt à partir à l\'aventure ? Obtenez un devis personnalisé pour votre prochain voyage',
      whyChoose: 'Pourquoi choisir MC Viagens ?',
      advantages: [
        'Expertise exclusive de l\'Amérique latine',
        'Recherche de prix compétitifs à l\'international',
        'Accompagnement personnalisé 24/7',
        'En cas d\'insatisfaction, un avoir de 15% pour une autre destination vous sera proposée'
      ]
    },
    // Footer
    footer: {
      navigation: 'Navigation',
      destinations: 'Destinations',
      services: 'Services',
      followUs: 'Suivez-nous :',
      personalizedAdvice: 'Comptez sur un conseil personnalisé',
      support: 'Support après-vente',
      mcViagens: 'MC Viagens',
      howItWorks: 'Comment ça marche'
    }
  },
  en: {
    // Header
    nav: {
      home: 'Home',
      destinations: 'Destinations',
      about: 'About',
      blog: 'Blog',
      testimonials: 'Testimonials',
      contact: 'Contact'
    },
    // Hero
    hero: {
      title: 'Discover the World',
      subtitle: 'at Affordable Prices',
      description: 'Explore the most fascinating destinations with MC Viagens, specialist in international travel at the most competitive prices.',
      cta1: 'Discover our Destinations',
      cta2: 'Custom Quote'
    },
    // About
    about: {
      title: 'Meet MC Viagens',
      intro: 'Passionate about travel since always, I specialize in finding the best deals for international travel, with particular expertise in Latin America.',
      description: 'With 5 years of experience in the tourism industry, I travel the world to find you the most fascinating destinations at the most competitive prices. My pricing expertise covers North America, South America, Europe, Asia, Oceania, as well as paradise islands.',
      stats: {
        travelers: 'Satisfied travelers',
        countries: 'Countries explored',
        experience: 'Years of experience',
        rating: 'Average rating'
      },
      specialties: {
        international: 'International Travel',
        couples: 'Couple Travel',
        prices: 'Best Prices',
        service: 'Personalized Service'
      }
    },
    // Destinations
    destinations: {
      title: 'Our International',
      subtitle: 'Journeys',
      description: 'Discover our exclusive selection of international destinations, chosen by MC Viagens for their authenticity and unbeatable prices.',
      regions: {
        'Amérique du Sud': 'South America',
        'Europe': 'Europe',
        'Amérique du Nord': 'North America',
        'Asie': 'Asia',
        'Océanie': 'Oceania',
        'Îles Paradisiaques': 'Paradise Islands'
      },
      details: 'View details',
      book: 'Book now',
      person: 'per person'
    },
    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'MC Viagens',
      description: 'Ready to embark on an adventure? Get a personalized quote for your next trip',
      whyChoose: 'Why choose MC Viagens?',
      advantages: [
        'Exclusive expertise in Latin America',
        'Competitive price search internationally',
        'Personalized 24/7 support',
        'In case of dissatisfaction, a 15% credit for another destination will be offered'
      ]
    },
    // Footer
    footer: {
      navigation: 'Navigation',
      destinations: 'Destinations',
      services: 'Services',
      followUs: 'Follow us:',
      personalizedAdvice: 'Count on personalized advice',
      support: 'After-sales support',
      mcViagens: 'MC Viagens',
      howItWorks: 'How it Works'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};