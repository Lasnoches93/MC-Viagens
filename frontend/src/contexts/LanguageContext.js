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
      aboutMe: 'Sobre Mim',
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
        aboutMe: 'Sobre Mim',
        about: 'Sobre Nós', 
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
        aboutMe: 'Sobre Mim',
        about: 'Sobre Nós', 
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
    // About Me - Sobre mim
    aboutMe: {
      title: 'Sobre Mim',
      content: {
        intro: 'Viajar sempre foi mais do que um simples sonho — é a forma que encontrei de me conectar com o mundo, conhecer culturas e transformar cada experiência em aprendizado.',
        journey: 'Ao longo da minha jornada, já explorei seis países da América do Sul:',
        countries: {
          brazil: '🌎 Brasil, ponto de partida onde aprendi a valorizar a diversidade e as riquezas do nosso próprio país.',
          peru: '🇵🇪 Peru, com a grandiosidade de Machu Picchu e os encantos dos Andes.',
          bolivia: '🇧🇴 Bolívia, onde vivi momentos únicos no Salar de Uyuni e nas montanhas nevadas.',
          argentina: '🇦🇷 Argentina, com sua energia vibrante e arquitetura imponente em Buenos Aires.',
          chile: '🇨🇱 Chile, que me presenteou com paisagens deslumbrantes, desde o Deserto do Atacama até a neve da Cordilheira.',
          uruguay: '🇺🇾 Uruguai, um país acolhedor que mistura charme, tranquilidade e arte, como em Punta del Este e Casapueblo.'
        },
        reflection: 'Cada viagem marcou não apenas um destino no mapa, mas também uma parte da minha história. Conheci desde a vida urbana das grandes capitais até a serenidade das paisagens naturais. Estive em cassinos coloridos, explorei neve pela primeira vez, construí bonecos de gelo e vivi momentos de pura contemplação diante de lagos cristalinos e montanhas nevadas.',
        mission: 'Essas vivências despertaram em mim a certeza de que viajar é um investimento em memórias, emoções e descobertas. Por isso, transformei essa paixão em profissão: hoje atuo como agente de turismo, ajudando pessoas a viverem as mesmas emoções que marcaram minha vida.',
        goal: 'Meu objetivo é simples: planejar viagens que sejam únicas, inesquecíveis e cheias de significado — porque cada cliente merece viver o mundo da forma mais especial possível.'
      },
      stats: {
        countries: 'Países Visitados',
        cities: 'Cidades Exploradas',
        trips: 'Viagens Organizadas',
        experience: 'Anos de Experiência'
      }
    },
    // My Journey - Minha Trajetória
    myJourney: {
      title: 'Minha Trajetória',
      content: {
        intro: 'Viajar sempre foi mais do que um simples hobby para mim: é a forma que encontrei de me conectar com culturas, histórias e pessoas ao redor do mundo. Ao longo da minha jornada, tive a oportunidade de conhecer seis países da América do Sul — experiências que transformaram não apenas a minha visão de mundo, mas também a maneira como escolhi trabalhar com turismo.',
        brazil: 'Comecei pelo Brasil, país de cores, sabores e diversidade que me ensinou a valorizar cada detalhe de uma viagem.',
        peru: 'Depois, atravessei fronteiras e vivi momentos únicos no Peru, onde me encantei com a grandiosidade de Machu Picchu e com a riqueza da cultura inca.',
        bolivia: 'Na Bolívia, fui surpreendida pela beleza surreal do Salar de Uyuni e pela força de um povo cheio de tradições.',
        argentina: 'A Argentina me recebeu com sua energia vibrante, de Buenos Aires até as paisagens exuberantes da Patagônia.',
        chile: 'No Chile, descobri desde o charme de Santiago até cenários deslumbrantes como o Deserto do Atacama.',
        uruguay: 'E no Uruguai, mergulhei na tranquilidade de Montevidéu e no charme sofisticado de Punta del Este.',
        reflection: 'Essas experiências me mostraram que cada destino é único e que cada viajante merece viver momentos inesquecíveis. Por isso, escolhi transformar minha paixão em profissão: hoje ajudo pessoas a realizarem o sonho de viajar, oferecendo roteiros personalizados, suporte completo e, principalmente, a garantia de uma viagem cheia de significado.',
        commitment: 'Meu compromisso é compartilhar com você tudo o que aprendi ao longo do caminho, para que sua experiência de viagem seja tão marcante quanto foi para mim.'
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
      aboutMe: 'À propos de Moi',
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
        aboutMe: 'À propos de Moi',
        about: 'À propos de Nous',
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
    // About Me - À propos de moi
    aboutMe: {
      title: 'À propos de Moi',
      content: {
        intro: 'Voyager a toujours été plus qu\'un simple rêve — c\'est la façon que j\'ai trouvée de me connecter au monde, de découvrir des cultures et de transformer chaque expérience en apprentissage.',
        journey: 'Au cours de mon voyage, j\'ai déjà exploré six pays d\'Amérique du Sud :',
        countries: {
          brazil: '🌎 Brésil, point de départ où j\'ai appris à valoriser la diversité et les richesses de notre propre pays.',
          peru: '🇵🇪 Pérou, avec la grandeur du Machu Picchu et les charmes des Andes.',
          bolivia: '🇧🇴 Bolivie, où j\'ai vécu des moments uniques au Salar de Uyuni et dans les montagnes enneigées.',
          argentina: '🇦🇷 Argentine, avec son énergie vibrante et son architecture imposante à Buenos Aires.',
          chile: '🇨🇱 Chili, qui m\'a offert des paysages éblouissants, du désert d\'Atacama à la neige de la Cordillère.',
          uruguay: '🇺🇾 Uruguay, un pays accueillant qui mélange charme, tranquillité et art, comme à Punta del Este et Casapueblo.'
        },
        reflection: 'Chaque voyage a marqué non seulement une destination sur la carte, mais aussi une partie de mon histoire. J\'ai connu depuis la vie urbaine des grandes capitales jusqu\'à la sérénité des paysages naturels. J\'ai été dans des casinos colorés, exploré la neige pour la première fois, construit des bonhommes de glace et vécu des moments de pure contemplation devant des lacs cristallins et des montagnes enneigées.',
        mission: 'Ces expériences ont éveillé en moi la certitude que voyager est un investissement en souvenirs, émotions et découvertes. C\'est pourquoi j\'ai transformé cette passion en profession : aujourd\'hui j\'agis comme agent de tourisme, aidant les gens à vivre les mêmes émotions qui ont marqué ma vie.',
        goal: 'Mon objectif est simple : planifier des voyages uniques, inoubliables et pleins de sens — parce que chaque client mérite de vivre le monde de la façon la plus spéciale possible.'
      },
      stats: {
        countries: 'Pays Visités',
        cities: 'Villes Explorées',
        trips: 'Voyages Organisés',
        experience: 'Années d\'Expérience'
      }
    },
    // My Journey - Ma Trajectoire
    myJourney: {
      title: 'Ma Trajectoire',
      content: {
        intro: 'Voyager a toujours été plus qu\'un simple hobby pour moi : c\'est la façon que j\'ai trouvée de me connecter avec les cultures, les histoires et les gens du monde entier. Au cours de mon voyage, j\'ai eu l\'opportunité de connaître six pays d\'Amérique du Sud — des expériences qui ont transformé non seulement ma vision du monde, mais aussi la façon dont j\'ai choisi de travailler dans le tourisme.',
        brazil: 'J\'ai commencé par le Brésil, pays de couleurs, de saveurs et de diversité qui m\'a appris à valoriser chaque détail d\'un voyage.',
        peru: 'Ensuite, j\'ai traversé les frontières et vécu des moments uniques au Pérou, où j\'ai été enchantée par la grandeur du Machu Picchu et la richesse de la culture inca.',
        bolivia: 'En Bolivie, j\'ai été surprise par la beauté surréaliste du Salar de Uyuni et la force d\'un peuple plein de traditions.',
        argentina: 'L\'Argentine m\'a accueillie avec son énergie vibrante, de Buenos Aires aux paysages exubérants de la Patagonie.',
        chile: 'Au Chili, j\'ai découvert depuis le charme de Santiago jusqu\'aux paysages éblouissants comme le désert d\'Atacama.',
        uruguay: 'Et en Uruguay, j\'ai plongé dans la tranquillité de Montevideo et le charme sophistiqué de Punta del Este.',
        reflection: 'Ces expériences m\'ont montré que chaque destination est unique et que chaque voyageur mérite de vivre des moments inoubliables. C\'est pourquoi j\'ai choisi de transformer ma passion en profession : aujourd\'hui j\'aide les gens à réaliser leur rêve de voyager, en offrant des itinéraires personnalisés, un support complet et, surtout, la garantie d\'un voyage plein de sens.',
        commitment: 'Mon engagement est de partager avec vous tout ce que j\'ai appris en cours de route, pour que votre expérience de voyage soit aussi marquante qu\'elle l\'a été pour moi.'
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
      aboutMe: 'About Me',
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
        aboutMe: 'About Me',
        about: 'About Us',
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
    // About Me
    aboutMe: {
      title: 'About Me',
      content: {
        intro: 'Traveling has always been more than just a dream — it\'s the way I found to connect with the world, discover cultures, and transform each experience into learning.',
        journey: 'Throughout my journey, I have already explored six countries in South America:',
        countries: {
          brazil: '🌎 Brazil, the starting point where I learned to value the diversity and riches of our own country.',
          peru: '🇵🇪 Peru, with the grandeur of Machu Picchu and the charms of the Andes.',
          bolivia: '🇧🇴 Bolivia, where I lived unique moments at Salar de Uyuni and in the snowy mountains.',
          argentina: '🇦🇷 Argentina, with its vibrant energy and imposing architecture in Buenos Aires.',
          chile: '🇨🇱 Chile, which gifted me with stunning landscapes, from the Atacama Desert to the snow of the Cordillera.',
          uruguay: '🇺🇾 Uruguay, a welcoming country that mixes charm, tranquility and art, like in Punta del Este and Casapueblo.'
        },
        reflection: 'Each trip marked not only a destination on the map, but also a part of my history. I experienced everything from urban life in major capitals to the serenity of natural landscapes. I\'ve been to colorful casinos, explored snow for the first time, built ice sculptures, and lived moments of pure contemplation in front of crystalline lakes and snowy mountains.',
        mission: 'These experiences awakened in me the certainty that traveling is an investment in memories, emotions and discoveries. That\'s why I transformed this passion into a profession: today I work as a tourism agent, helping people live the same emotions that marked my life.',
        goal: 'My goal is simple: to plan trips that are unique, unforgettable and full of meaning — because every client deserves to experience the world in the most special way possible.'
      },
      stats: {
        countries: 'Countries Visited',
        cities: 'Cities Explored',
        trips: 'Trips Organized',
        experience: 'Years of Experience'
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