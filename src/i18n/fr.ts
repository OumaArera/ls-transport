import type { Dictionary } from './en';

/**
 * French copy. Typed against the English dictionary, so the build fails if a
 * key is missing or misspelled here.
 */
export const fr: Dictionary = {
  code: 'fr',
  label: 'Français',
  short: 'FR',
  htmlLang: 'fr',
  ogLocale: 'fr_SN',

  common: {
    skipToContent: 'Aller au contenu',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    toggleSubmenu: 'Afficher le sous-menu {label}',
    breadcrumb: 'Fil d’Ariane',
    showImage: 'Afficher l’image {number}',
    home: 'Accueil',
    mainNav: 'Principale',
    mobileNav: 'Mobile',
    siteMenu: 'Menu du site',
    languageLabel: 'Langue',
    switchTo: 'Passer en anglais',
  },

  site: {
    country: 'Sénégal',
    tagline: 'Votre voyage. Notre engagement.',
    taglineAlt: 'Your Journey. Our Commitment.',
    description:
      'LS Transport est une entreprise de transport moderne, fiable et à l’écoute de ses clients, présente dans tout le Sénégal : mobilité des passagers en toute sécurité, acheminement efficace du fret et solutions de transport d’entreprise sur lesquelles compter.',
    footerBlurb:
      'Une entreprise de transport basée au Sénégal, qui assure la mobilité des passagers en toute sécurité, l’acheminement efficace du fret et des solutions de transport d’entreprise fiables sur tout le territoire.',
    regionsBadge: 'Présents dans les 14 régions du Sénégal',
    address: 'Dakar, Sénégal',
    hours: '7h00 – 21h00, tous les jours',
    hoursShort: 'Tous les jours, 7h–21h',
    serviceArea: 'Dakar et tout le territoire sénégalais',
  },

  nav: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    fleet: 'Notre flotte',
    whyChooseUs: 'Pourquoi nous choisir',
    leadership: 'Direction',
    contact: 'Contact',
  },

  actions: {
    getQuote: 'Demander un devis',
    requestQuote: 'Demander un devis',
    exploreServices: 'Découvrir nos services',
    learnMore: 'En savoir plus',
    learnMoreAbout: 'sur {title}',
    viewAllServices: 'Voir tous les services',
    seeOurFleet: 'Voir notre flotte',
    seeFullFleet: 'Voir toute la flotte',
    fullDetails: 'Détails complets',
    readProfile: 'Lire le profil complet',
    readProfileFor: 'de {name}',
    meetTeam: 'Rencontrer l’équipe de direction',
    seeAllReasons: 'Voir les six raisons',
    moreAboutUs: 'En savoir plus sur nous',
    checkAvailability: 'Vérifier la disponibilité',
    backHome: 'Retour à l’accueil',
    browseServices: 'Parcourir les services',
    emailUs: 'Nous écrire',
    call: 'Appeler',
    email: 'E-mail',
  },

  hero: {
    slidesLabel: 'Points forts',
    slides: [
      {
        eyebrow: 'Mobilité des passagers',
        titleLead: 'Chaque trajet',
        titleAccent: 'Commence par la confiance',
        body: 'Voyages interurbains, transport du personnel d’entreprise et navettes aéroport partout au Sénégal — assurés par des chauffeurs formés, dans des véhicules toujours prêts à prendre la route.',
      },
      {
        eyebrow: 'Fret et marchandises',
        titleLead: 'Vos marchandises,',
        titleAccent: 'Livrées à l’heure',
        body: 'Livraison de marchandises commerciales sur tout le territoire, acheminement sécurisé d’équipements et de matériaux, et services de fret réguliers ou à la demande.',
      },
      {
        eyebrow: 'Entreprises et administrations',
        titleLead: 'Une flotte',
        titleAccent: 'Qui vous répond',
        body: 'Véhicules dédiés, contrats de longue durée et solutions de mobilité sur mesure, conçues autour des projets et des équipes de votre organisation.',
      },
    ],
    promiseNote:
      'Notre promesse sur chaque itinéraire que nous assurons — pour un seul voyageur comme pour un contrat national.',
  },

  planner: {
    title: 'Planifiez votre trajet',
    service: 'Service',
    pickup: 'Départ',
    pickupAria: 'Lieu de départ',
    pickupPlaceholder: 'Dakar',
    destination: 'Destination',
    destinationPlaceholder: 'Saint-Louis',
    date: 'Date',
    dateAria: 'Date du trajet',
    party: 'Passagers / charge',
    partyAria: 'Passagers ou charge',
    partyPlaceholder: '12 passagers',
    submit: 'Obtenir mon devis',
    note: 'Aucun paiement, aucun compte — vos informations parviennent directement à notre équipe et nous répondons avec un prix détaillé.',
  },

  trust: [
    {
      title: 'Couverture nationale',
      body: 'Siège à Dakar, avec des opérations dans toutes les grandes régions du Sénégal.',
    },
    {
      title: 'Ouvert tous les jours',
      body: 'Réservation et affectation des véhicules de 7h00 à 21h00, sept jours sur sept.',
    },
    {
      title: 'Chauffeurs formés',
      body: 'Des équipes professionnelles et des véhicules entretenus selon un calendrier strict.',
    },
    {
      title: 'Un partenaire, quatre services',
      body: 'Transport de passagers, de fret, d’entreprise et spécialisé, sous un même contrat.',
    },
  ],

  servicesSection: {
    eyebrow: 'Ce que nous faisons',
    heading: 'Des solutions de transport pensées pour la mobilité du Sénégal',
    body: 'LS Transport propose une large gamme de solutions de transport adaptées aux particuliers, aux entreprises et aux institutions — d’une simple navette aéroport à un contrat de flotte de longue durée.',
    serviceNumber: 'Service 0{number}',
  },

  services: {
    'passenger-transport': {
      title: 'Transport de passagers',
      shortTitle: 'Passagers',
      tagline: 'Une mobilité sûre et confortable — en ville comme à travers tout le pays',
      summary:
        'Voyages interurbains, navettes quotidiennes du personnel, transferts aéroport et location privée pour vos événements — dans des véhicules choisis selon la distance et la taille du groupe.',
      imageAlt: 'Un autocar interurbain moderne sur une route dégagée',
      intro:
        'Les passagers sont la cargaison la plus exigeante qui soit : ils remarquent le siège, l’horaire, la conduite et l’accueil. Notre service de transport de passagers est construit autour de ces détails, qu’il s’agisse d’emmener un voyageur à l’aéroport ou une délégation entière d’une région à l’autre.',
      listTitle: 'Ce que nous couvrons',
      items: [
        {
          name: 'Voyages interurbains',
          detail:
            'Trajets interrégionaux programmés, avec des horaires de départ convenus et des autocars confortables, prêts pour la route.',
        },
        {
          name: 'Transport du personnel d’entreprise',
          detail:
            'Navettes quotidiennes ou par équipes, avec des points de ramassage fixes, des chauffeurs attitrés et des horaires d’arrivée fiables.',
        },
        {
          name: 'Navettes aéroport, arrivées et départs',
          detail:
            'Transferts calés sur l’horaire du vol, avec un chauffeur qui attend le passager et non l’inverse.',
        },
        {
          name: 'Location privée pour événements, conférences et circuits',
          detail:
            'Véhicules et équipes réservés pour votre programme — mariages, conférences, délégations et circuits de groupe.',
        },
      ],
      highlights: [
        'Chauffeurs formés',
        'Selon votre horaire',
        'En groupe ou individuel',
        'Tout le territoire',
      ],
      steps: [
        {
          title: 'Décrivez le trajet',
          body: 'Lieu de départ, destination, date, heure et nombre de personnes qui voyagent.',
        },
        {
          title: 'Nous choisissons le véhicule',
          body: 'Autocar, minibus, van ou berline : le véhicule est affecté selon la taille du groupe et la distance.',
        },
        {
          title: 'Confirmation par écrit',
          body: 'Vous recevez le devis détaillé, la catégorie de véhicule et les modalités du chauffeur avant le départ.',
        },
        {
          title: 'Nous vous conduisons',
          body: 'Le chauffeur arrive en avance et vous êtes informé dès que quelque chose change sur la route.',
        },
      ],
      closing:
        'Chaque trajet passagers est préparé selon la même exigence : le bon véhicule, un chauffeur professionnel et un engagement horaire clair, pris avant votre départ.',
      ctaLabel: 'Réserver un transport de passagers',
    },
    'cargo-and-goods-transport': {
      title: 'Transport de fret et de marchandises',
      shortTitle: 'Fret et marchandises',
      tagline: 'Un acheminement efficace et sécurisé des marchandises sur tout le territoire',
      summary:
        'Livraisons commerciales, équipements et matériaux, services de fret — programmés à l’avance ou dépêchés à la demande.',
      imageAlt: 'Un camion de fret circulant sur une route nationale',
      intro:
        'Une marchandise livrée en retard coûte plus cher que le transport lui-même. Notre service de fret repose sur la rigueur des remises — ce qui est chargé, qui en signe la réception et à quel moment elle arrive — pour que votre chaîne d’approvisionnement reste prévisible.',
      listTitle: 'Ce que nous couvrons',
      items: [
        {
          name: 'Livraison de marchandises commerciales dans tout le pays',
          detail:
            'Tournées de distribution entre Dakar et les régions, avec des créneaux d’enlèvement et de livraison convenus.',
        },
        {
          name: 'Acheminement sécurisé d’équipements et de matériaux',
          detail:
            'Manutention soignée et chargements arrimés pour les machines, les matériaux de chantier et les équipements de valeur.',
        },
        {
          name: 'Services de fret réguliers ou à la demande',
          detail:
            'Itinéraires récurrents pour les volumes réguliers, et départs ponctuels lorsqu’un chargement ne peut pas attendre la prochaine rotation.',
        },
      ],
      highlights: [
        'Chargements arrimés',
        'Créneaux de livraison convenus',
        'Régulier ou à la demande',
        'Tout le territoire',
      ],
      steps: [
        {
          title: 'Décrivez le chargement',
          body: 'Poids, dimensions et contraintes de manutention, ainsi que les points d’enlèvement et de livraison.',
        },
        {
          title: 'Nous dimensionnons le véhicule',
          body: 'Camion fourgon ou camion de fret : le véhicule correspond au volume, à l’itinéraire et à l’état des routes.',
        },
        {
          title: 'Enlèvement à l’heure',
          body: 'Le véhicule se présente dans le créneau convenu et le chargement est arrimé avant le départ.',
        },
        {
          title: 'Livraison et remise',
          body: 'La marchandise est signée à destination et vous êtes informé dès que la mission est achevée.',
        },
      ],
      closing:
        'D’une simple palette à un chargement complet de chantier, le créneau de livraison est pour nous un engagement — pas une estimation.',
      ctaLabel: 'Demander un transport de fret',
    },
    'corporate-and-government': {
      title: 'Solutions de transport pour entreprises et administrations',
      shortTitle: 'Entreprises et administrations',
      tagline: 'Une flotte dédiée, un contrat de longue durée et un seul opérateur responsable',
      summary:
        'Véhicules dédiés aux organisations, contrats de transport de longue durée et mobilité conçue autour de projets précis.',
      imageAlt: 'Une grande flotte de véhicules stationnés en rangées ordonnées',
      intro:
        'Une organisation n’a pas besoin d’un véhicule : elle a besoin d’une capacité de transport qu’elle peut planifier, budgéter et justifier. Nous mettons cette capacité sous contrat, nous la dotons en personnel, nous l’entretenons et nous en rendons compte.',
      listTitle: 'Ce que nous couvrons',
      items: [
        {
          name: 'Flotte dédiée aux organisations',
          detail:
            'Des véhicules affectés à votre organisation, disponibles selon votre planning et non partagés avec d’autres clients.',
        },
        {
          name: 'Contrats de transport de longue durée',
          detail:
            'Accords à durée déterminée, avec des tarifs convenus, des niveaux de service définis et un interlocuteur unique.',
        },
        {
          name: 'Solutions de mobilité sur mesure pour vos projets',
          detail:
            'Un dispositif conçu autour des sites, des rotations d’équipes et de la durée du projet — puis démonté proprement à son terme.',
        },
      ],
      highlights: [
        'Véhicules dédiés',
        'Tarifs contractuels fixes',
        'Interlocuteur attitré',
        'Adapté au projet',
      ],
      steps: [
        {
          title: 'Cadrer le besoin',
          body: 'Sites, effectifs, rotations d’équipes, types de chargement et durée que le contrat doit couvrir.',
        },
        {
          title: 'Concevoir la solution',
          body: 'Nous proposons la composition de la flotte, les équipages et le planning, avec des tarifs détaillés poste par poste.',
        },
        {
          title: 'Convenir du niveau de service',
          body: 'Disponibilité, délais d’intervention et reporting sont inscrits au contrat avant son démarrage.',
        },
        {
          title: 'Exploiter et suivre',
          body: 'La flotte fonctionne selon votre planning et les performances sont revues avec votre interlocuteur attitré.',
        },
      ],
      closing:
        'Institutions, entreprises et organismes publics travaillent avec LS Transport parce que la responsabilité reste au même endroit, pendant toute la durée du contrat.',
      ctaLabel: 'Discuter d’un contrat',
    },
    'special-transport': {
      title: 'Services de transport spécialisés',
      shortTitle: 'Services spécialisés',
      tagline: 'Transport VIP, voyages guidés et appui logistique humanitaire',
      summary:
        'Transport VIP discret, tourisme et voyages guidés, et appui logistique aux opérations humanitaires et aux ONG.',
      imageAlt: 'Un dirigeant montant dans une voiture avec chauffeur',
      intro:
        'Certains trajets transportent plus que des passagers : une réputation, une délégation, ou une aide qui doit parvenir à une communauté. Ces missions sont préparées une à une et confiées à des chauffeurs briefés sur l’exigence particulière de chacune.',
      listTitle: 'Ce que nous couvrons',
      items: [
        {
          name: 'Transport VIP',
          detail:
            'Déplacements de dirigeants discrets et ponctuels, dans des véhicules soignés et avec des chauffeurs expérimentés.',
        },
        {
          name: 'Tourisme et voyages guidés',
          detail:
            'Véhicules de tourisme confortables pour les visiteurs qui découvrent le Sénégal, avec des itinéraires pensés pour le groupe.',
        },
        {
          name: 'Appui logistique aux ONG et aux opérations humanitaires',
          detail:
            'Capacité de transport pour les opérations de terrain, les déplacements du personnel et l’acheminement du matériel de secours.',
        },
      ],
      highlights: [
        'Service VIP discret',
        'Véhicules prêts pour le tourisme',
        'Appui terrain aux ONG',
        'Préparé mission par mission',
      ],
      steps: [
        {
          title: 'Confiez-nous le cahier des charges',
          body: 'Précisez le besoin, son degré de confidentialité et le protocole éventuel de la mission.',
        },
        {
          title: 'Préparer la mission',
          body: 'Itinéraire, horaires, véhicule et équipage sont choisis spécifiquement pour ce cahier des charges.',
        },
        {
          title: 'Valider les détails',
          body: 'Vous approuvez le dispositif, y compris les solutions de repli, avant le début de la mission.',
        },
        {
          title: 'Exécuter avec discrétion',
          body: 'La mission se déroule comme prévu, avec une communication limitée aux contacts que vous désignez.',
        },
      ],
      closing:
        'Délégation officielle, groupe de touristes ou déploiement sur le terrain : la préparation se fait avant que les roues ne tournent.',
      ctaLabel: 'Demander un transport spécialisé',
    },
  },

  fleetSection: {
    eyebrow: 'Notre flotte',
    titleLead: 'Le bon véhicule pour',
    titleAccent: 'Le bon trajet',
    body: 'Des véhicules propres, confortables et performants — adaptés à la taille du groupe, à la distance et au chargement.',
  },

  fleet: {
    eyebrow: 'Catégories de véhicules',
    heading: 'Une flotte moderne, adaptée à chaque mission',
    intro:
      'Des véhicules propres, confortables et performants — choisis selon la distance, le groupe et le chargement. Chaque véhicule en service est entretenu selon un calendrier et contrôlé avant son départ.',
    filterLabel: 'Filtrer la flotte par catégorie',
    categories: {
      all: 'Tous',
      passenger: 'Passagers',
      executive: 'Direction',
      cargo: 'Fret',
    },
    bestFor: 'Idéal pour',
    capacityNote:
      'Les capacités indiquées sont celles habituellement constatées pour chaque catégorie. Le véhicule exact affecté à votre trajet est confirmé avec votre devis.',
    deployEyebrow: 'Véhicules pour ce service',
    deployTitleLead: 'Ce que nous mobilisons',
    deployTitleAccent: 'Habituellement',
    deployBody:
      'Le véhicule définitif est confirmé avec votre devis, en fonction de la taille du groupe, de la distance et du chargement.',
    standardsEyebrow: 'Nos standards',
    standardsTitleLead: 'Un véhicule ne quitte le dépôt',
    standardsTitleAccent: 'Que lorsqu’il est prêt',
    standardsBody:
      'Le confort, c’est ce que les passagers remarquent. L’entretien, c’est ce qui tient la promesse en dessous.',
    standards: [
      {
        title: 'Entretien programmé',
        body: 'La révision suit un calendrier, pas une panne. Les véhicules sortent du service pour être entretenus avant de tomber en panne sur la route.',
      },
      {
        title: 'Contrôles avant départ',
        body: 'Pneus, freins, éclairage et niveaux sont vérifiés avant qu’un véhicule ne quitte le dépôt pour un trajet.',
      },
      {
        title: 'Chauffeurs professionnels',
        body: 'Les équipes sont formées, briefées sur l’itinéraire et tenues à la même exigence de conduite sur chaque mission.',
      },
    ],
    vehicles: {
      'executive-coach': {
        name: 'Autocar de grand tourisme',
        imageAlt: 'Un autocar de grand tourisme moderne avec sièges inclinables',
        capacity: 'En général 45 à 55 passagers assis',
        summary:
          'Notre navire amiral sur longue distance : sièges inclinables à haut dossier, soute à bagages et le confort qu’exige un trajet de plusieurs heures.',
        bestFor: ['Voyages interurbains', 'Délégations et conférences', 'Circuits de groupe'],
        features: [
          'Sièges inclinables',
          'Soute à bagages',
          'Climatisation',
          'Prêt pour la longue distance',
        ],
      },
      'intercity-coach': {
        name: 'Autocar interurbain',
        imageAlt: 'Un autocar interurbain stationné à une gare routière',
        capacity: 'En général 30 à 45 passagers assis',
        summary:
          'La bête de somme du réseau régional — économe, robuste et dimensionné pour les lignes régulières entre Dakar et les régions.',
        bestFor: [
          'Lignes régionales régulières',
          'Transport du personnel à grande échelle',
          'Navettes d’événements',
        ],
        features: [
          'Sièges face à la route',
          'Rangements en cabine',
          'Climatisation',
          'Éprouvé sur nos lignes',
        ],
      },
      minibus: {
        name: 'Minibus',
        imageAlt: 'Un minibus en attente devant un terminal d’aéroport',
        capacity: 'En général 12 à 18 passagers assis',
        summary:
          'La mobilité des petits groupes sans renoncer à la ville : idéal pour les navettes aéroport, les visites de site et le transport quotidien du personnel.',
        bestFor: ['Navettes aéroport', 'Navettes quotidiennes du personnel', 'Visites de site'],
        features: [
          'Accès facile au trottoir',
          'Espace bagages',
          'Climatisation',
          'À l’aise en ville',
        ],
      },
      'passenger-van': {
        name: 'Van passagers',
        imageAlt: 'Un van de passagers stationné devant un bâtiment moderne',
        capacity: 'En général 7 à 14 passagers assis',
        summary:
          'Un van polyvalent pour les petites équipes et les charges mixtes — les passagers à l’avant, le matériel et les bagages à l’arrière.',
        bestFor: [
          'Petites équipes',
          'Déplacements de terrain des ONG',
          'Passagers et matériel ensemble',
        ],
        features: [
          'Sièges modulables',
          'Espace de chargement',
          'Climatisation',
          'Autonomie sur la journée',
        ],
      },
      'executive-van': {
        name: 'Van de direction',
        imageAlt: 'Un van de direction noir stationné devant un terminal moderne',
        capacity: 'En général 6 à 8 passagers',
        summary:
          'Une cabine privée sur roues : sièges haut de gamme et espace pour travailler ou échanger, pour les délégations et les groupes VIP qui veulent la discrétion d’une berline avec le volume d’un minibus.',
        bestFor: [
          'Groupes VIP',
          'Délégations et protocole',
          'Transferts aéroport des dirigeants',
        ],
        features: [
          'Sièges haut de gamme',
          'Vitres teintées',
          'Climatisation',
          'Chauffeur expérimenté',
        ],
      },
      'executive-sedan': {
        name: 'Berline de direction',
        imageAlt: 'Une berline de direction noire dans une rue de la ville',
        capacity: 'En général 3 à 4 passagers',
        summary:
          'Discrète, soignée et ponctuelle — pour les dirigeants, les invités et les déplacements VIP où l’arrivée compte.',
        bestFor: [
          'Transport VIP',
          'Accueil aéroport des dirigeants',
          'Protocole et délégations',
        ],
        features: [
          'Chauffeur expérimenté',
          'Intérieur soigné',
          'Climatisation',
          'Service discret',
        ],
      },
      'cargo-truck': {
        name: 'Camion de fret',
        imageAlt: 'Un camion de fret lourd prêt pour un trajet longue distance',
        capacity: 'Fret lourd — charge utile confirmée par expédition',
        summary:
          'Capacité de fret lourd pour les trajets longue distance entre Dakar et les régions, avec des chargements arrimés avant le départ.',
        bestFor: ['Fret longue distance', 'Matériaux de chantier', 'Distribution en vrac'],
        features: [
          'Arrimage sécurisé',
          'Configuration longue distance',
          'Entretien programmé',
          'Liaisons nationales',
        ],
      },
      'box-truck': {
        name: 'Camion fourgon / de livraison',
        imageAlt: 'Un camion fourgon en cours de chargement à un quai',
        capacity: 'Fret moyen — charge utile confirmée par expédition',
        summary:
          'Une capacité fermée et protégée des intempéries pour la distribution commerciale, les déménagements d’équipements et les convois humanitaires.',
        bestFor: [
          'Distribution commerciale',
          'Déplacement d’équipements',
          'Convois humanitaires',
        ],
        features: [
          'Caisse fermée',
          'Protection contre les intempéries',
          'Chargement au trottoir',
          'Liaisons urbaines et régionales',
        ],
      },
    },
  },

  gallery: {
    eyebrow: 'La flotte en images',
    titleLead: 'Des véhicules dans lesquels',
    titleAccent: 'Il fait bon arriver',
    body: 'Autocars, minibus, vans de direction et unités de fret — les catégories que nous déployons partout au Sénégal.',
    scrollLabel: 'Photographies de la flotte LS Transport',
  },

  company: {
    welcomeEyebrow: 'Bienvenue chez LS Transport',
    welcomeTitleLead: 'Né au Sénégal,',
    welcomeTitleAccent: 'Pour le Sénégal',
    welcome:
      'LS Transport est une entreprise de transport moderne, fiable et à l’écoute de ses clients, présente dans tout le Sénégal. Nous sommes spécialisés dans la mobilité des passagers en toute sécurité, l’acheminement efficace du fret et des solutions de transport d’entreprise fiables, conçues pour accompagner les particuliers, les entreprises et les institutions sur tout le territoire.',
    promise:
      'Avec un engagement constant envers le professionnalisme, le développement national et l’excellence du service, LS Transport fait en sorte que chaque trajet reflète notre promesse fondamentale.',
    headquartersPlate: { value: 'Dakar', label: 'Siège social' },
    regionsPlate: { value: '14', label: 'Régions desservies' },

    whoWeAreEyebrow: 'Qui nous sommes',
    whoWeAreTitleLead: 'Transporter personnes et biens',
    whoWeAreTitleAccent: 'À travers le Sénégal',
    story: [
      'LS Transport est un prestataire de transport basé au Sénégal, qui s’attache à fournir des solutions de mobilité et de logistique de haute qualité. Créée avec pour mission d’accompagner l’essor économique du Sénégal, l’entreprise associe une expertise locale à des standards de transport modernes pour servir ses clients à Dakar et au-delà.',
      'Nous travaillons avec une exigence forte en matière de sécurité, de ponctualité et de satisfaction client. Qu’il s’agisse de transporter des personnes ou des marchandises, LS Transport est un partenaire de confiance pour se déplacer partout dans le pays.',
    ],
    storyImageAlt: 'Un taxi et un minibus dans une rue de Dakar',

    valuesEyebrow: 'Mission · Vision · Valeurs',
    valuesTitleLead: 'Ce qui nous garde',
    valuesTitleAccent: 'Sur la bonne route',
    valuesBody:
      'Notre cap est fixé par trois choses : où nous allons, pourquoi cela compte, et comment nous nous comportons en chemin.',
    missionTitle: 'Notre mission',
    mission:
      'Offrir des solutions de transport sûres, efficaces et accessibles, qui relient les communautés, soutiennent les entreprises et contribuent à la croissance économique du Sénégal.',
    visionTitle: 'Notre vision',
    vision:
      'Devenir l’une des principales entreprises de transport du Sénégal — reconnue pour sa fiabilité, son innovation et la qualité exceptionnelle de son service client.',
    sloganTitle: 'Notre slogan',
    values: [
      {
        title: 'Intégrité',
        body: 'Des opérations honnêtes, transparentes et éthiques — sur chaque itinéraire, chaque contrat et chaque facture.',
      },
      {
        title: 'Engagement',
        body: 'Au service de la satisfaction client et du développement national, d’une seule place à une flotte d’entreprise complète.',
      },
      {
        title: 'Innovation',
        body: 'Des solutions modernes pour des besoins de transport qui évoluent, alliant expertise locale et standards internationaux.',
      },
      {
        title: 'Communauté',
        body: 'Soutenir l’emploi local et la croissance économique des régions que nous traversons chaque jour.',
      },
    ],

    commitmentEyebrow: 'Notre engagement',
    commitmentTitleLead: 'Quatre promesses qui guident',
    commitmentTitleAccent: 'Nos opérations',
    commitmentBody:
      'Nous travaillons avec une exigence forte en matière de sécurité, de ponctualité et de satisfaction client — que nous transportions des personnes ou des marchandises.',
    commitments: [
      {
        title: 'Sécurité',
        body: 'Des chauffeurs professionnellement formés et des véhicules entretenus selon un calendrier, jamais par exception.',
      },
      {
        title: 'Ponctualité',
        body: 'Des créneaux de départ et de livraison convenus avant le trajet, et tenus sur la route.',
      },
      {
        title: 'Satisfaction client',
        body: 'Un interlocuteur attitré, une communication transparente et une information honnête dès qu’un plan change.',
      },
      {
        title: 'Développement national',
        body: 'De l’emploi local, une expertise locale et une capacité de transport au service de l’économie sénégalaise.',
      },
    ],

    howWeWorkEyebrow: 'Notre méthode',
    howWeWorkTitleLead: 'L’exigence est fixée',
    howWeWorkTitleAccent: 'Avant que les roues ne tournent',
    howWeWork: [
      'Chaque mission est préparée avant d’être lancée : le véhicule est choisi en fonction du travail, le chauffeur est briefé sur l’itinéraire et les horaires vous sont confirmés par écrit.',
      'C’est cette rigueur qui nous permet de prendre des engagements plutôt que de donner des estimations — et c’est pourquoi des organisations de Dakar et des régions nous renouvellent leur confiance.',
    ],
    howWeWorkImageAlt: 'Un chauffeur professionnel au volant d’un autocar',
  },

  reasons: {
    eyebrow: 'Pourquoi nous choisir',
    homeTitleLead: 'Pourquoi nos clients au Sénégal',
    homeTitleAccent: 'Choisissent LS Transport',
    pageEyebrow: 'Notre différence',
    pageTitleLead: 'Des engagements,',
    pageTitleAccent: 'Pas des estimations',
    intro:
      'Choisir un partenaire de transport, c’est une décision de confiance. Nos clients restent avec LS Transport parce que chaque trajet est préparé, encadré et entretenu selon la même exigence — qu’il transporte un dirigeant ou vingt tonnes de fret.',
    items: [
      {
        title: 'Fiabilité',
        body: 'Nous livrons à l’heure, à chaque fois. Créneaux de départ, points de remise et calendriers de livraison sont convenus à l’avance et suivis jusqu’à leur terme, pour que vous puissiez planifier autour de nous en toute confiance.',
      },
      {
        title: 'La sécurité d’abord',
        body: 'Des chauffeurs professionnellement formés et des véhicules bien entretenus. Nos équipes sont briefées sur l’état des routes et nos véhicules sont révisés selon un calendrier — jamais par exception.',
      },
      {
        title: 'Couverture nationale',
        body: 'Nous desservons toutes les grandes régions du Sénégal. De Dakar aux corridors nord, est et sud, un seul opérateur couvre tout le trajet plutôt que de vous faire passer d’un sous-traitant à l’autre.',
      },
      {
        title: 'Service professionnel',
        body: 'Un personnel courtois et une communication transparente. Vous avez un interlocuteur attitré, une confirmation claire et une information honnête dès que quelque chose change sur la route.',
      },
      {
        title: 'Tarifs accessibles',
        body: 'Des tarifs compétitifs sans compromis sur la qualité. Les devis sont détaillés dès le départ — aucun supplément surprise une fois le véhicule en route.',
      },
      {
        title: 'Flotte moderne',
        body: 'Des véhicules propres, confortables et performants, adaptés à chaque mission : autocars de grand tourisme pour la longue distance, minibus pour le personnel, berlines pour les déplacements VIP et camions pour le fret.',
      },
    ],
    safetyEyebrow: 'La sécurité d’abord',
    safetyTitleLead: 'Chauffeurs formés.',
    safetyTitleAccent: 'Véhicules entretenus.',
    safetyBody: [
      'La sécurité n’est pas une formule sur un site internet — c’est un calendrier d’entretien, un contrôle avant départ et un chauffeur briefé sur l’itinéraire avant de prendre la route.',
      'Les véhicules sortent du service pour leur révision selon un calendrier, et non après une panne, et les équipes sont tenues à la même exigence de conduite sur chaque mission, qu’elles transportent une délégation ou une palette de marchandises.',
    ],
    safetyImageAlt: 'Un technicien en train de réviser le moteur d’un camion en atelier',
  },

  network: {
    eyebrow: 'Couverture nationale',
    titleLead: 'Un seul opérateur,',
    titleAccent: 'De Dakar aux frontières',
    body: 'Nous exploitons nous-mêmes les grands corridors routiers du Sénégal, plutôt que de vous faire passer d’un sous-traitant à l’autre en chemin. Survolez un corridor pour le suivre.',
    mapLabel:
      'Carte schématique des corridors routiers exploités par LS Transport au Sénégal',
    regionsTitle: 'Les 14 régions',
    note: 'Schéma de réseau. Les repères indiquent la position relative réelle de chaque ville ; les distances et les routes sont simplifiées par souci de lisibilité.',
    corridors: {
      north: {
        name: 'Corridor Nord',
        description: 'De Dakar vers le fleuve — Thiès, Louga, Saint-Louis, et jusqu’à Matam.',
      },
      central: {
        name: 'Corridor Centre et Est',
        description:
          'La grande route intérieure par Diourbel, Touba, Kaffrine et Tambacounda jusqu’à Kédougou.',
      },
      south: {
        name: 'Corridor Sud',
        description: 'Bassin arachidier et Casamance — Kaolack, Kolda, Sédhiou et Ziguinchor.',
      },
      coast: {
        name: 'Route côtière',
        description: 'La liaison de la Petite Côte entre Dakar, Mbour et le Sine-Saloum.',
      },
      river: {
        name: 'Route du fleuve',
        description: 'De Saint-Louis le long de la vallée du fleuve Sénégal vers Matam et Tambacounda.',
      },
    },
  },

  leadership: {
    eyebrow: 'Direction',
    homeTitleLead: 'Une expérience qui',
    homeTitleAccent: 'Voyage bien',
    homeBody:
      'LS Transport est dirigée par une équipe dont les parcours couvrent la gestion d’établissements de santé, la finance d’entreprise, les services de sécurité incendie et les infrastructures d’énergie propre sur trois continents — mise au service de la mobilité au Sénégal.',
    pageEyebrow: 'Notre direction',
    pageTitleLead: 'Standards internationaux,',
    pageTitleAccent: 'Connaissance du terrain',
    pageBody:
      'Trois dirigeants, une même philosophie : bien préparer le trajet, puis tenir l’engagement pris.',
    people: {
      'abdoulie-lowe': {
        role: 'Directeur Général',
        focus: 'Orientation stratégique · Croissance · Service sur tout le territoire',
        bio: [
          'Abdoulie Lowe est le Directeur Général de LS Transport au Sénégal, où il conduit l’orientation stratégique de l’entreprise, ses initiatives de croissance et la qualité du service sur tout le territoire. Fort d’une expérience de direction multisectorielle aux États-Unis, en Afrique de l’Ouest et en Gambie, Abdoulie apporte un mélange d’expérience internationale et de connaissance du terrain qui renforce la position de LS Transport comme prestataire fiable de mobilité et de logistique.',
          'Son parcours professionnel comprend des fonctions de direction dans la gestion d’Adult Family Homes dans l’État de Washington, des services de sécurité incendie au sein de Sound Fire & Safety LLC, le développement d’infrastructures d’énergie propre et de véhicules électriques en Gambie, ainsi que des opérations de transport et de logistique au Sénégal. Cette diversité lui permet d’appliquer des standards internationaux aux besoins locaux de transport, et d’assurer que LS Transport offre des services sûrs, efficaces et centrés sur le client.',
          'Abdoulie est reconnu pour son intégrité, sa discipline opérationnelle et son attachement à l’excellence du service. Il est animé par la volonté de moderniser la mobilité au Sénégal, d’élargir l’accès à des solutions de transport fiables et de soutenir le développement économique national. Sous sa direction, LS Transport continue d’élargir sa flotte, d’améliorer la qualité de son service et de bâtir sa réputation parmi les entreprises de transport de confiance du Sénégal.',
        ],
      },
      'haddy-saho': {
        role: 'Directrice des Opérations',
        focus: 'Opérations quotidiennes · Gestion de la flotte · Qualité de service',
        bio: [
          'Haddy Saho est la Directrice des Opérations de LS Transport au Sénégal, où elle supervise les opérations quotidiennes, la gestion de la flotte, la coordination des équipes et la qualité de service sur l’ensemble des prestations de transport. Forte d’une formation d’infirmière et d’une longue expérience de gestion d’Adult Family Homes dans l’État de Washington, aux États-Unis, Haddy apporte à la direction des opérations une approche rigoureuse, attentive aux détails et centrée sur les personnes.',
          'Sa carrière comprend des fonctions d’infirmière professionnelle, d’administratrice d’Adult Family Home et de Directrice Générale de Bothell Serenity AFH Corp, ainsi que de Directrice des Opérations du groupe LS Global Holdings. Cette expérience multisectorielle renforce les systèmes opérationnels de LS Transport et garantit que l’entreprise répond aussi bien aux attentes locales qu’aux standards internationaux.',
          'Haddy est reconnue pour sa précision, son intégrité, son empathie et son attachement à l’excellence du service. Elle s’attache à bâtir des équipes solides, à maintenir des standards de sécurité élevés et à offrir un service client fiable. Sous sa direction, LS Transport continue d’accroître sa capacité, d’améliorer son efficacité et de répondre aux besoins croissants de mobilité du Sénégal.',
        ],
      },
      'nixon-duah': {
        role: 'Directeur de la Stratégie',
        focus: 'Planification à long terme · Positionnement · Expansion',
        bio: [
          'Nixon Kwaku Duah Jr est le Directeur de la Stratégie de LS Transport au Sénégal, où il conduit la planification stratégique de long terme, le positionnement sur le marché et les initiatives d’expansion de l’entreprise. Fort d’une solide expérience en gestion de projets de développement, en finance d’entreprise et en croissance des activités aux États-Unis, au Sénégal et en Gambie, Nixon apporte une approche prospective et analytique à la construction de l’avenir de LS Transport.',
          'En tant que Directeur de la Stratégie, Nixon supervise les partenariats stratégiques, l’analyse concurrentielle et le développement de l’organisation, veillant à ce que LS Transport reste en phase avec les besoins nationaux de mobilité et les opportunités émergentes. Son travail renforce la capacité de l’entreprise à développer ses opérations, à diversifier ses services et à conserver une présence solide dans le secteur du transport et de la logistique au Sénégal.',
          'L’expérience professionnelle de Nixon couvre plusieurs secteurs : la gestion d’Adult Family Homes dans l’État de Washington, les services de sécurité incendie au sein de Sound Fire & Safety LLC, et le développement d’infrastructures d’énergie propre et de véhicules électriques en Gambie. Cette exposition multisectorielle lui permet d’intégrer les meilleures pratiques internationales à la feuille de route stratégique de LS Transport.',
          'Reconnu pour sa rigueur d’exécution, sa vision stratégique et son attachement à une croissance durable, Nixon joue un rôle clé dans la vision de long terme de LS Transport. Son leadership soutient la mission de l’entreprise : offrir des solutions de transport sûres, fiables et modernes partout au Sénégal.',
        ],
      },
    },
  },

  cta: {
    defaultTitle: 'Prêts quand vous l’êtes',
    defaultBody:
      'Dites-nous l’itinéraire, la date et le chargement. Nous confirmons le véhicule, le chauffeur et le prix avant que quoi que ce soit ne bouge.',
    compareTitle: 'Comparez-nous sur les détails',
    compareBody:
      'Envoyez-nous un itinéraire que vous confiez déjà à quelqu’un d’autre. Nous le chiffrons honnêtement, poste par poste, véhicule nommé.',
    leadershipTitle: 'Parlez à ceux qui dirigent',
    leadershipBody:
      'Demandes de contrat, mobilité de projet et partenariats de longue durée parviennent directement à notre direction.',
  },

  contact: {
    eyebrow: 'Contact',
    titleLead: 'Dites-nous où vous',
    titleAccent: 'Devez aller',
    body: 'Envoyez-nous le trajet et nous revenons vers vous avec un devis détaillé, la catégorie de véhicule et les modalités d’équipage.',
    cardBody:
      'Notre service réservation est ouvert tous les jours de la semaine. Écrivez-nous par e-mail, ou envoyez le formulaire et nous répondrons avec un devis écrit.',
    labels: {
      address: 'Adresse',
      email: 'E-mail',
      phone: 'Téléphone',
      hours: 'Horaires',
    },
    phoneLabels: {
      main: 'Standard',
      bookings: 'Réservations',
      freight: 'Fret',
    },
    quickQuoteEyebrow: 'Devis rapide',
    quickQuoteTitleLead: 'Commencez par',
    quickQuoteTitleAccent: 'Le trajet',
    quickQuoteBody:
      'Renseignez les cinq informations dont nous avons toujours besoin, et le formulaire ci-dessous se remplit tout seul.',
  },

  form: {
    name: 'Votre nom',
    email: 'Adresse e-mail',
    phone: 'Numéro de téléphone',
    service: 'Service',
    message: 'Détails du trajet',
    messagePlaceholder:
      'D’où, vers où, quand et combien de passagers — ou ce que vous souhaitez faire transporter.',
    submit: 'Envoyer la demande',
    submitting: 'Envoi…',
    replyNote: 'Nous répondons pendant nos horaires d’ouverture : {hours}.',
    successTitle: 'Merci — message envoyé',
    successBody:
      'Un membre de notre équipe vous recontactera pendant nos horaires d’ouverture ({hours}). Pour toute urgence, écrivez-nous directement par e-mail.',
    sendAnother: 'Envoyer un autre message',
    errorBanner:
      'Une erreur est survenue lors de l’envoi de votre message. Réessayez, ou écrivez-nous directement à',
    errors: {
      name: 'Veuillez saisir votre nom.',
      emailRequired: 'Veuillez saisir votre adresse e-mail.',
      emailInvalid: 'Veuillez saisir une adresse e-mail valide.',
      phone: 'Veuillez saisir un numéro de téléphone valide.',
      message: 'Merci de nous en dire un peu plus (au moins 10 caractères).',
    },
    extraSubjects: [
      'Disponibilité des véhicules',
      'Contrat de longue durée',
      'Demande générale',
    ],
    journeyIntro: 'Je souhaite un devis pour le trajet suivant :',
    journeyPickup: 'Départ',
    journeyDestination: 'Destination',
    journeyDate: 'Date',
    journeyParty: 'Passagers / charge',
    journeyExtra: 'Précisions complémentaires :',
    mailName: 'Nom',
    mailEmail: 'E-mail',
    mailPhone: 'Téléphone',
    mailSubjectSuffix: 'demande via le site',
  },

  footer: {
    quickLinks: 'Liens rapides',
    ourServices: 'Nos services',
    hours: 'Horaires',
    getInTouch: 'Nous contacter',
    rights: 'Tous droits réservés.',
    builtBy: 'Réalisé par',
  },

  pages: {
    home: {
      seoTitle: 'Transport de passagers, de fret et d’entreprise au Sénégal',
      seoDescription:
        'LS Transport est une entreprise de transport moderne, fiable et à l’écoute de ses clients, présente dans tout le Sénégal : mobilité des passagers, acheminement du fret et solutions de transport d’entreprise.',
    },
    about: {
      seoTitle: 'À propos',
      seoDescription:
        'LS Transport est un prestataire de transport basé au Sénégal, dédié à des solutions de mobilité et de logistique de haute qualité à Dakar et au-delà.',
      heroEyebrow: 'À propos de LS Transport',
      heroTitle: 'Une entreprise de transport sénégalaise bâtie sur l’expertise locale',
      heroBody:
        'Des solutions de mobilité et de logistique de haute qualité, alliant connaissance du terrain et standards de transport modernes.',
    },
    services: {
      seoTitle: 'Nos services',
      seoDescription:
        'Transport de passagers, transport de fret et de marchandises, solutions pour entreprises et administrations, et services de transport spécialisés au Sénégal.',
      heroEyebrow: 'Nos services',
      heroTitle: 'Des solutions de transport pour les particuliers, les entreprises et les institutions',
      otherEyebrow: 'Autres services',
      otherTitleLead: 'Nous assurons',
      otherTitleAccent: 'Également',
      howItWorks: 'Comment ça marche',
    },
    fleet: {
      seoTitle: 'Notre flotte',
      seoDescription:
        'Autocars, minibus, vans, berlines de direction et camions de fret — les catégories de véhicules exploitées par LS Transport au Sénégal.',
      heroEyebrow: 'Notre flotte',
      heroTitle: 'Des véhicules propres, confortables et performants',
    },
    whyChooseUs: {
      seoTitle: 'Pourquoi nous choisir',
      seoDescription:
        'Fiabilité, sécurité, couverture nationale, service professionnel, tarifs accessibles et flotte moderne — pourquoi les clients du Sénégal choisissent LS Transport.',
      heroEyebrow: 'Pourquoi nous choisir',
      heroTitle: 'Six raisons pour lesquelles nos clients nous restent fidèles',
    },
    leadership: {
      seoTitle: 'Direction',
      seoDescription:
        'Découvrez l’équipe de direction de LS Transport Sénégal — orientation stratégique, opérations quotidiennes et croissance de long terme.',
      heroEyebrow: 'Direction',
      heroTitle: 'L’équipe derrière chaque trajet',
      heroBody:
        'Une direction multisectorielle entre les États-Unis, l’Afrique de l’Ouest et le Sénégal — au service d’un transport sûr, fiable et moderne.',
    },
    contact: {
      seoTitle: 'Contact',
      seoDescription:
        'Contactez LS Transport à Dakar, Sénégal — ouvert tous les jours de 7h00 à 21h00 pour vos demandes de transport de passagers, de fret, d’entreprise et spécialisé.',
      heroEyebrow: 'Contact',
      heroTitle: 'Planifions votre prochain trajet',
      heroBody:
        'Notre service réservation est ouvert tous les jours. Envoyez-nous l’itinéraire, la date et ce qui voyage — nous répondons avec un devis détaillé.',
    },
    notFound: {
      seoTitle: 'Page introuvable',
      code: 'Erreur 404',
      title: 'Cet itinéraire n’existe pas',
      body: 'La page que vous cherchiez a été déplacée ou n’a jamais existé. Reprenons la route ensemble.',
    },
  },
};
