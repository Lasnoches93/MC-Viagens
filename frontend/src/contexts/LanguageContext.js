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
      about: 'Sobre Nós',
      blog: 'Blog',
      testimonials: 'Depoimentos',
      contact: 'Contato'
    },
    // Hero
    hero: {
      title: 'Descubra o Mundo',
      subtitle: 'com Preços Exclusivos',
      description: 'Explore os destinos mais fascinantes com MC Viagens, especialista em viagens internacionais com os melhores preços competitivos do mercado.',
      cta1: 'Descobrir Nossos Destinos',
      cta2: 'Orçamento Personalizado',
      features: {
        unique: {
          title: 'Destinos Únicos',
          desc: 'Descubra lugares excepcionais selecionados por nossa equipe especializada'
        },
        optimized: {
          title: 'Viagens Otimizadas',
          desc: 'Tempo de voo reduzido e escalas mínimas para máximo conforto'
        },
        couples: {
          title: 'Casais & Famílias',
          desc: 'Experiências personalizadas para todos os tipos de viajantes'
        }
      }
    },
    // About
    about: {
      title: 'Conheça a MC Viagens',
      subtitle: 'Sua Especialista em Viagens de Luxo',
      intro: 'Apaixonados por viagens desde sempre, nos especializamos na busca dos melhores preços para viagens internacionais, com expertise particular na América Latina.',
      description: 'Com 5 anos de experiência na indústria do turismo, percorremos o mundo para encontrar os destinos mais fascinantes aos preços mais competitivos. Nossa expertise tarifária cobre América do Norte, América do Sul, Europa, Ásia, Oceania e ilhas paradisíacas.',
      stats: {
        travelers: 'Viajantes Satisfeitos',
        countries: 'Países Explorados',
        experience: 'Anos de Experiência',
        rating: 'Nota Média'
      },
      specialties: {
        international: {
          title: 'Viagens Internacionais',
          desc: 'Especialista em viagens internacionais com expertise em América Latina, Europa, Ásia e ilhas paradisíacas.'
        },
        couples: {
          title: 'Viagens de Casal',
          desc: 'Criamos momentos inesquecíveis para casais com experiências românticas únicas.'
        },
        prices: {
          title: 'Melhores Preços',
          desc: 'Negociação direta com parceiros locais para oferecer as tarifas mais competitivas.'
        },
        service: {
          title: 'Serviço Personalizado',
          desc: 'Cada viagem é projetada sob medida conforme seus desejos e orçamento.'
        }
      },
      instagram: 'Acompanhe nossas aventuras'
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
      details: 'Ver Detalhes',
      book: 'Reservar Agora',
      person: 'por pessoa',
      seeAll: 'Ver Todas as Destinações',
      seeLess: 'Ver Menos',
      duration: 'Duração',
      flightTime: 'Tempo de Voo',
      stops: 'Escalas',
      travelers: 'Pessoas'
    },
    // Testimonials
    testimonials: {
      title: 'Depoimentos de',
      subtitle: 'Nossos Clientes',
      description: 'Descubra o que nossos viajantes pensam sobre suas experiências com MC Viagens',
      stats: {
        rating: 'Nota Média',
        clients: 'Clientes Satisfeitos',
        recommendations: 'Recomendações'
      }
    },
    // Blog
    blog: {
      title: 'Blog de',
      subtitle: 'Viagem',
      description: 'Conselhos de especialista, guias de viagem e inspirações para suas próximas aventuras',
      categories: {
        all: 'Todos',
        destinations: 'Destinos',
        tips: 'Dicas',
        guides: 'Guias',
        culture: 'Cultura',
        couples: 'Casais'
      },
      readMore: 'Ler Mais',
      readArticle: 'Ler Artigo',
      newsletter: {
        title: 'Fique informado sobre nossos últimos artigos',
        description: 'Receba minhas dicas de viagem, descobertas e ofertas especiais diretamente em seu email.',
        placeholder: 'Seu endereço de email',
        subscribe: 'Inscrever-se'
      }
    },
    // Contact
    contact: {
      title: 'Entre em Contato',
      subtitle: 'com a MC Viagens',
      description: 'Pronto para partir na aventura? Obtenha um orçamento personalizado para sua próxima viagem',
      whyChoose: 'Por que escolher MC Viagens?',
      advantages: [
        'Expertise exclusiva da América Latina',
        'Busca de preços competitivos internacionalmente',
        'Acompanhamento personalizado 24/7',
        'Em caso de insatisfação, um crédito de 15% para outro destino será oferecido'
      ],
      info: {
        title: 'Vamos falar sobre sua viagem dos sonhos',
        description: 'Cada viagem é única, por isso dedicamos tempo para entender seus desejos, restrições e orçamento para criar a experiência perfeita.',
        phone: 'Telefone',
        email: 'Email',
        location: 'Localização',
        hours: 'Horários',
        schedule: {
          weekdays: 'Seg-Sex: 9h-18h',
          saturday: 'Sáb: 10h-16h'
        }
      },
      form: {
        title: 'Solicitação de orçamento gratuito',
        fullName: 'Nome completo',
        email: 'Email',
        phone: 'Telefone',
        travelers: 'Número de viajantes',
        destination: 'Destino desejado',
        budget: 'Orçamento aproximado',
        dates: 'Datas preferidas',
        message: 'Mensagem',
        placeholders: {
          name: 'Seu nome',
          email: 'seu@email.com',
          phone: '+55 11 99999-9999',
          dates: 'Ex: Março 2024, Verão 2024, Flexível',
          message: 'Descreva sua viagem ideal, suas expectativas particulares...'
        },
        travelers_options: {
          select: 'Selecione',
          one: '1 pessoa',
          two: '2 pessoas',
          three: '3 pessoas',
          four: '4 pessoas',
          five: '5+ pessoas'
        },
        destinations: [
          'Peru (Machu Picchu)',
          'Argentina (Buenos Aires)',
          'Colômbia (Cartagena)',
          'Chile (Patagônia)',
          'Brasil (Rio de Janeiro)',
          'Bolívia (Salar de Uyuni)',
          'Equador (Quito)',
          'Outro destino'
        ],
        budget_ranges: [
          'Menos de R$ 5.000',
          'R$ 5.000 - R$ 10.000',
          'R$ 10.000 - R$ 15.000',
          'R$ 15.000 - R$ 25.000',
          'Mais de R$ 25.000'
        ],
        submit: 'Enviar Minha Solicitação',
        guarantee: 'Resposta em 24h • Orçamento gratuito e sem compromisso'
      }
    },
    // Testimonials
    testimonials: {
      title: 'Depoimentos de',
      subtitle: 'Nossos Clientes',
      description: 'Descubra o que nossos viajantes pensam sobre suas experiências com MC Viagens',
      voyage: 'Viagem',
      stats: {
        rating: 'Nota Média',
        clients: 'Clientes Satisfeitos',
        recommendations: 'Recomendações'
      }
    },
    // Blog
    blog: {
      title: 'Blog de',
      subtitle: 'Viagem',
      description: 'Conselhos de especialista, guias de viagem e inspirações para suas próximas aventuras',
      categories: {
        all: 'Todos',
        destinations: 'Destinos',
        tips: 'Dicas',
        guides: 'Guias',
        culture: 'Cultura',
        couples: 'Casais'
      },
      readMore: 'Ler Mais',
      readArticle: 'Ler Artigo',
      featuredArticle: 'Artigo em destaque',
      newsletter: {
        title: 'Fique informado sobre nossos últimos artigos',
        description: 'Receba minhas dicas de viagem, descobertas e ofertas especiais diretamente em seu email.',
        placeholder: 'Seu endereço de email',
        subscribe: 'Inscrever-se'
      }
    },
    // Contact
    contact: {
      title: 'Entre em Contato',
      subtitle: 'com a MC Viagens',
      description: 'Pronto para partir na aventura? Obtenha um orçamento personalizado para sua próxima viagem',
      whyChoose: 'Por que escolher MC Viagens?',
      advantages: [
        'Expertise exclusiva da América Latina',
        'Busca de preços competitivos internacionalmente',
        'Acompanhamento personalizado 24/7',
        'Em caso de insatisfação, um crédito de 15% para outro destino será oferecido'
      ],
      info: {
        title: 'Vamos falar sobre sua viagem dos sonhos',
        description: 'Cada viagem é única, por isso dedicamos tempo para entender seus desejos, restrições e orçamento para criar a experiência perfeita.',
        phone: 'Telefone',
        email: 'Email',
        location: 'Localização',
        hours: 'Horários',
        schedule: {
          weekdays: 'Seg-Sex: 9h-18h',
          saturday: 'Sáb: 10h-16h'
        }
      },
      form: {
        title: 'Solicitação de orçamento gratuito',
        fullName: 'Nome completo',
        email: 'Email',
        phone: 'Telefone',
        travelers: 'Número de viajantes',
        destination: 'Destino desejado',
        budget: 'Orçamento aproximado',
        dates: 'Datas preferidas',
        message: 'Mensagem',
        placeholders: {
          name: 'Seu nome',
          email: 'seu@email.com',
          phone: '+55 11 99999-9999',
          dates: 'Ex: Março 2024, Verão 2024, Flexível',
          message: 'Descreva sua viagem ideal, suas expectativas particulares...'
        },
        travelers_options: {
          select: 'Selecione',
          one: '1 pessoa',
          two: '2 pessoas',
          three: '3 pessoas',
          four: '4 pessoas',
          five: '5+ pessoas'
        },
        destinations: [
          'Peru (Machu Picchu)',
          'Argentina (Buenos Aires)',
          'Colômbia (Cartagena)',
          'Chile (Patagônia)',
          'Brasil (Rio de Janeiro)',
          'Bolívia (Salar de Uyuni)',
          'Equador (Quito)',
          'Outro destino'
        ],
        budget_ranges: [
          'Menos de R$ 5.000',
          'R$ 5.000 - R$ 10.000',
          'R$ 10.000 - R$ 15.000',
          'R$ 15.000 - R$ 25.000',
          'Mais de R$ 25.000'
        ],
        submit: 'Enviar Minha Solicitação',
        guarantee: 'Resposta em 24h • Orçamento gratuito e sem compromisso'
      }
    },
    // Footer
    footer: {
      cta: {
        title: 'Pronto para descobrir a América Latina?',
        description: 'Obtenha um orçamento gratuito e personalizado para sua próxima viagem',
        button: 'Solicitar Orçamento'
      },
      whyChoose: 'Por que escolher MC Viagens?',
      navigation: 'Navegação',
      destinations: 'Destinos',
      services: 'Serviços',
      followUs: 'Siga-nos:',
      personalizedAdvice: 'Conte com uma assessoria personalizada',
      support: 'Suporte pós-venda',
      mcViagens: 'MC Viagens Exclusivo',
      howItWorks: 'Como Funciona',
      pointsForts: {
        support: {
          title: 'Suporte Pós-Venda',
          desc: 'Suporte completo antes, durante e após sua viagem'
        },
        advice: {
          title: 'Assessoria Personalizada',
          desc: 'Consultoria especializada para cada tipo de viajante'
        },
        exclusive: {
          title: 'MC Viagens Exclusivo',
          desc: 'Experiência exclusiva com padrão de luxo acessível'
        },
        howWorks: {
          title: 'Como Funciona',
          desc: 'Processo simples e transparente do orçamento à viagem'
        }
      },
      company: {
        description: 'Sua especialista em viagens internacionais. Experiências autênticas aos preços mais competitivos do mercado.',
        address: {
          street: '123 Rue des Voyages',
          city: '75001 Paris, França',
          service: 'Atendimento online mundial'
        }
      },
      destinations_list: [
        'Peru - Machu Picchu',
        'Argentina - Buenos Aires',
        'Colômbia - Cartagena',
        'Chile - Patagônia',
        'Brasil - Rio de Janeiro',
        'Bolívia - Salar de Uyuni'
      ],
      services_list: [
        'Viagens personalizadas',
        'Grupos privados',
        'Viagens de lua de mel',
        'Circuitos organizados',
        'Consultoria de viagem',
        'Assistência 24/7'
      ],
      newsletter: {
        title: 'Fique Conectado',
        description: 'Receba nossas últimas ofertas e dicas de viagem',
        placeholder: 'Seu email',
        subscribe: 'Inscrever-se'
      },
      legal: {
        terms: 'Termos Legais',
        privacy: 'Política de Privacidade',
        conditions: 'Condições Gerais'
      },
      copyright: '© 2024 MC Viagens. Todos os direitos reservados. Criado com ❤️ para os amantes de viagens.'
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
      subtitle: 'à Prix Exclusifs',
      description: 'Explorez les destinations les plus fascinantes avec MC Viagens, spécialiste des voyages internationaux aux meilleurs prix compétitifs.',
      cta1: 'Découvrir nos Destinations',
      cta2: 'Devis Personnalisé',
      features: {
        unique: {
          title: 'Destinations Uniques',
          desc: 'Découvrez des lieux exceptionnels sélectionnés par notre équipe experte'
        },
        optimized: {
          title: 'Voyages Optimisés',
          desc: 'Temps de vol réduits et escales minimales pour plus de confort'
        },
        couples: {
          title: 'Couples & Familles',
          desc: 'Expériences personnalisées pour tous les types de voyageurs'
        }
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
    // Testimonials
    testimonials: {
      title: 'Témoignages',
      subtitle: 'Clients',
      description: 'Découvrez ce que nos voyageurs pensent de leurs expériences avec MC Viagens',
      voyage: 'Voyage',
      stats: {
        rating: 'Note moyenne',
        clients: 'Clients satisfaits',
        recommendations: 'Recommandations'
      }
    },
    // Blog
    blog: {
      title: 'Blog',
      subtitle: 'Voyage',
      description: 'Conseils d\'experte, guides de voyage et inspirations pour vos prochaines aventures',
      categories: {
        all: 'Tous',
        destinations: 'Destinations',
        tips: 'Conseils',
        guides: 'Guides',
        culture: 'Culture',
        couples: 'Couples'
      },
      readMore: 'Lire plus',
      readArticle: 'Lire l\'article',
      featuredArticle: 'Article vedette',
      newsletter: {
        title: 'Restez informé de mes derniers articles',
        description: 'Recevez mes conseils de voyage, mes découvertes et mes offres spéciales directement dans votre boîte mail.',
        placeholder: 'Votre adresse email',
        subscribe: 'S\'abonner'
      }
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
      ],
      info: {
        title: 'Parlons de votre voyage de rêve',
        description: 'Chaque voyage est unique, c\'est pourquoi je prends le temps de comprendre vos envies, vos contraintes et votre budget pour créer l\'expérience parfaite.',
        phone: 'Téléphone',
        email: 'Email',
        location: 'Localisation',
        hours: 'Horaires',
        schedule: {
          weekdays: 'Lun-Ven: 9h-18h',
          saturday: 'Sam: 10h-16h'
        }
      },
      form: {
        title: 'Demande de devis gratuit',
        fullName: 'Nom complet',
        email: 'Email',
        phone: 'Téléphone',
        travelers: 'Nombre de voyageurs',
        destination: 'Destination souhaitée',
        budget: 'Budget approximatif',
        dates: 'Dates préférées',
        message: 'Message',
        placeholders: {
          name: 'Votre nom',
          email: 'votre@email.com',
          phone: '+33 1 23 45 67 89',
          dates: 'Ex: Mars 2024, Été 2024, Flexible',
          message: 'Décrivez-nous votre voyage idéal, vos attentes particulières...'
        },
        travelers_options: {
          select: 'Sélectionnez',
          one: '1 personne',
          two: '2 personnes',
          three: '3 personnes',
          four: '4 personnes',
          five: '5+ personnes'
        },
        destinations: [
          'Pérou (Machu Picchu)',
          'Argentine (Buenos Aires)',
          'Colombie (Carthagène)',
          'Chili (Patagonie)',
          'Brésil (Rio de Janeiro)',
          'Bolivie (Salar de Uyuni)',
          'Équateur (Quito)',
          'Autre destination'
        ],
        budget_ranges: [
          'Moins de 1000€',
          '1000€ - 2000€',
          '2000€ - 3000€',
          '3000€ - 5000€',
          'Plus de 5000€'
        ],
        submit: 'Envoyer ma demande',
        guarantee: 'Réponse sous 24h • Devis gratuit et sans engagement'
      }
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
      subtitle: 'at Exclusive Prices',
      description: 'Explore the most fascinating destinations with MC Viagens, specialist in international travel at the most competitive prices.',
      cta1: 'Discover our Destinations',
      cta2: 'Custom Quote',
      features: {
        unique: {
          title: 'Unique Destinations',
          desc: 'Discover exceptional places selected by our expert team'
        },
        optimized: {
          title: 'Optimized Travel',
          desc: 'Reduced flight time and minimal stopovers for maximum comfort'
        },
        couples: {
          title: 'Couples & Families',
          desc: 'Personalized experiences for all types of travelers'
        }
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
    // Testimonials
    testimonials: {
      title: 'Testimonials from',
      subtitle: 'Our Clients',
      description: 'Discover what our travelers think about their experiences with MC Viagens',
      voyage: 'Trip',
      stats: {
        rating: 'Average Rating',
        clients: 'Satisfied Clients',
        recommendations: 'Recommendations'
      }
    },
    // Blog
    blog: {
      title: 'Travel',
      subtitle: 'Blog',
      description: 'Expert advice, travel guides and inspiration for your next adventures',
      categories: {
        all: 'All',
        destinations: 'Destinations',
        tips: 'Tips',
        guides: 'Guides',
        culture: 'Culture',
        couples: 'Couples'
      },
      readMore: 'Read More',
      readArticle: 'Read Article',
      featuredArticle: 'Featured Article',
      newsletter: {
        title: 'Stay updated on our latest articles',
        description: 'Receive my travel tips, discoveries and special offers directly in your email.',
        placeholder: 'Your email address',
        subscribe: 'Subscribe'
      }
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
      ],
      info: {
        title: 'Let\'s talk about your dream trip',
        description: 'Each trip is unique, so we take the time to understand your desires, constraints and budget to create the perfect experience.',
        phone: 'Phone',
        email: 'Email',
        location: 'Location',
        hours: 'Hours',
        schedule: {
          weekdays: 'Mon-Fri: 9am-6pm',
          saturday: 'Sat: 10am-4pm'
        }
      },
      form: {
        title: 'Free quote request',
        fullName: 'Full name',
        email: 'Email',
        phone: 'Phone',
        travelers: 'Number of travelers',
        destination: 'Desired destination',
        budget: 'Approximate budget',
        dates: 'Preferred dates',
        message: 'Message',
        placeholders: {
          name: 'Your name',
          email: 'your@email.com',
          phone: '+1 555-123-4567',
          dates: 'Ex: March 2024, Summer 2024, Flexible',
          message: 'Describe your ideal trip, your specific expectations...'
        },
        travelers_options: {
          select: 'Select',
          one: '1 person',
          two: '2 people',
          three: '3 people',
          four: '4 people',
          five: '5+ people'
        },
        destinations: [
          'Peru (Machu Picchu)',
          'Argentina (Buenos Aires)',
          'Colombia (Cartagena)',
          'Chile (Patagonia)',
          'Brazil (Rio de Janeiro)',
          'Bolivia (Salar de Uyuni)',
          'Ecuador (Quito)',
          'Other destination'
        ],
        budget_ranges: [
          'Less than $2,000',
          '$2,000 - $4,000',
          '$4,000 - $6,000',
          '$6,000 - $10,000',
          'More than $10,000'
        ],
        submit: 'Send My Request',
        guarantee: 'Response within 24h • Free quote with no commitment'
      }
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