/**
 * English copy for the whole site.
 *
 * This file and `fr.ts` are the two places the client edits text. `fr.ts` is
 * typed against this object, so TypeScript fails the build if a translation is
 * missing or a key is misspelled.
 */
export const en = {
  code: 'en',
  label: 'English',
  short: 'EN',
  htmlLang: 'en',
  ogLocale: 'en_GB',

  common: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toggleSubmenu: 'Toggle {label} submenu',
    breadcrumb: 'Breadcrumb',
    showImage: 'Show image {number}',
    home: 'Home',
    mainNav: 'Main',
    mobileNav: 'Mobile',
    siteMenu: 'Site menu',
    languageLabel: 'Language',
    switchTo: 'Switch to French',
  },

  site: {
    country: 'Senegal',
    tagline: 'Your Journey. Our Commitment.',
    /** The same promise in the other language — used as a secondary lockup. */
    taglineAlt: 'Votre voyage. Notre engagement.',
    description:
      'LS Transport is a modern, reliable and customer-focused transport company operating across Senegal, specialising in safe passenger mobility, efficient cargo movement and dependable corporate transport solutions.',
    footerBlurb:
      'A Senegal-based transport company delivering safe passenger mobility, efficient cargo movement, and dependable corporate transport solutions nationwide.',
    regionsBadge: 'Operating across all 14 regions of Senegal',
    address: 'Dakar, Senegal',
    hours: '7:00 AM – 9:00 PM, daily',
    hoursShort: 'Daily, 7am–9pm',
    serviceArea: 'Dakar and nationwide across Senegal',
  },

  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    fleet: 'Our Fleet',
    whyChooseUs: 'Why Choose Us',
    leadership: 'Leadership',
    contact: 'Contact',
  },

  actions: {
    getQuote: 'Get a Quote',
    requestQuote: 'Request a Quote',
    exploreServices: 'Explore Our Services',
    learnMore: 'Learn More',
    learnMoreAbout: 'about {title}',
    viewAllServices: 'View All Services',
    seeOurFleet: 'See Our Fleet',
    seeFullFleet: 'See the Full Fleet',
    fullDetails: 'Full Details',
    readProfile: 'Read Full Profile',
    readProfileFor: 'for {name}',
    meetTeam: 'Meet the Leadership Team',
    seeAllReasons: 'See All Six Reasons',
    moreAboutUs: 'More About Us',
    checkAvailability: 'Check Vehicle Availability',
    backHome: 'Back to Home',
    browseServices: 'Browse Services',
    emailUs: 'Email Us',
    call: 'Call',
    email: 'Email',
  },

  hero: {
    slidesLabel: 'Hero highlights',
    slides: [
      {
        eyebrow: 'Passenger Mobility',
        titleLead: 'Every Journey',
        titleAccent: 'Starts With Trust',
        body: 'City-to-city travel, corporate staff transport, and airport transfers across Senegal — moved by trained drivers in vehicles kept ready for the road.',
      },
      {
        eyebrow: 'Cargo & Freight',
        titleLead: 'Your Goods,',
        titleAccent: 'Moved On Time',
        body: 'Nationwide delivery of commercial goods, secure movement of equipment and materials, and freight services on schedule or on demand.',
      },
      {
        eyebrow: 'Corporate & Government',
        titleLead: 'A Fleet That',
        titleAccent: 'Answers To You',
        body: 'Dedicated vehicles, long-term contracts, and customised mobility solutions built around your organisation’s projects and people.',
      },
    ],
    promiseNote: 'Our promise on every route we run — for one traveller or a national contract.',
  },

  planner: {
    title: 'Plan Your Journey',
    service: 'Service',
    pickup: 'Pick-up',
    pickupAria: 'Pick-up location',
    pickupPlaceholder: 'Dakar',
    destination: 'Destination',
    destinationPlaceholder: 'Saint-Louis',
    date: 'Date',
    dateAria: 'Travel date',
    party: 'Passengers / Load',
    partyAria: 'Passengers or load',
    partyPlaceholder: '12 passengers',
    submit: 'Get My Quote',
    note: 'No payment, no account — your details land with our team and we reply with an itemised price.',
  },

  trust: [
    {
      title: 'Nationwide Reach',
      body: 'Headquartered in Dakar, operating across all major regions of Senegal.',
    },
    {
      title: 'Open Every Day',
      body: 'Booking and dispatch from 7:00 AM to 9:00 PM, seven days a week.',
    },
    {
      title: 'Trained Drivers',
      body: 'Professional crews and vehicles maintained to a scheduled standard.',
    },
    {
      title: 'One Partner, Four Services',
      body: 'Passenger, cargo, corporate, and special transport under one contract.',
    },
  ],

  servicesSection: {
    eyebrow: 'What We Do',
    heading: 'Transport Solutions Built Around How Senegal Moves',
    body: 'LS Transport offers a wide range of transport solutions tailored to individuals, companies, and institutions — from a single airport pick-up to a long-term corporate fleet contract.',
    serviceNumber: 'Service 0{number}',
  },

  services: {
    'passenger-transport': {
      title: 'Passenger Transport',
      shortTitle: 'Passenger',
      tagline: 'Safe, comfortable mobility for people — across town or across the country',
      summary:
        'City-to-city travel, daily staff runs, airport transfers, and private hire for events — in vehicles chosen for the distance and the group.',
      imageAlt: 'A modern intercity coach on an open road',
      intro:
        'People are the most demanding cargo there is: they notice the seat, the timing, the driving, and the welcome. Our passenger service is built around those details, whether we are moving one traveller to the airport or a full delegation between regions.',
      listTitle: 'What we cover',
      items: [
        {
          name: 'City-to-city travel',
          detail:
            'Scheduled inter-regional journeys with agreed departure times and comfortable, road-ready coaches.',
        },
        {
          name: 'Corporate staff transport',
          detail:
            'Daily or shift-based staff runs with fixed pick-up points, consistent drivers, and reliable arrival times.',
        },
        {
          name: 'Airport pick-up and drop-off',
          detail:
            'Meet-and-greet transfers timed to the flight, with the driver waiting rather than the passenger.',
        },
        {
          name: 'Private hire for events, conferences, and tours',
          detail:
            'Vehicles and crews reserved for your programme — weddings, conferences, delegations, and group tours.',
        },
      ],
      highlights: ['Trained drivers', 'Timed to your schedule', 'Group or individual', 'Nationwide'],
      steps: [
        {
          title: 'Tell us the journey',
          body: 'Pick-up point, destination, date, time, and how many people are travelling.',
        },
        {
          title: 'We match the vehicle',
          body: 'A coach, minibus, van, or sedan is assigned to the group size and the distance.',
        },
        {
          title: 'Confirmation in writing',
          body: 'You receive the itemised quote, the vehicle class, and the driver arrangement before travel.',
        },
        {
          title: 'We move you',
          body: 'The driver arrives ahead of time and you are kept informed if anything on the road changes.',
        },
      ],
      closing:
        'Every passenger journey is planned against the same standard: the right vehicle, a professional driver, and a clear time commitment made before you travel.',
      ctaLabel: 'Book Passenger Transport',
    },
    'cargo-and-goods-transport': {
      title: 'Cargo & Goods Transport',
      shortTitle: 'Cargo & Goods',
      tagline: 'Efficient, secure movement of commercial goods nationwide',
      summary:
        'Commercial deliveries, equipment and materials, and freight services — scheduled in advance or dispatched on demand.',
      imageAlt: 'A cargo truck travelling along an open highway',
      intro:
        'Goods that arrive late cost more than the freight itself. Our cargo service is organised around handover discipline — what is loaded, who signs for it, and when it lands — so that your supply chain stays predictable.',
      listTitle: 'What we cover',
      items: [
        {
          name: 'Nationwide delivery of commercial goods',
          detail:
            'Distribution runs between Dakar and the regions, with agreed collection and delivery windows.',
        },
        {
          name: 'Secure movement of equipment and materials',
          detail:
            'Careful handling and secured loads for machinery, project materials, and high-value equipment.',
        },
        {
          name: 'Scheduled and on-demand freight services',
          detail:
            'Recurring routes for regular volumes, plus ad-hoc dispatch when a load cannot wait for the next cycle.',
        },
      ],
      highlights: [
        'Secured loads',
        'Agreed delivery windows',
        'Scheduled or on demand',
        'Nationwide',
      ],
      steps: [
        {
          title: 'Describe the load',
          body: 'Weight, dimensions, and any handling requirements, plus collection and delivery points.',
        },
        {
          title: 'We size the vehicle',
          body: 'A box truck or cargo truck is matched to the volume, the route, and the road conditions.',
        },
        {
          title: 'Collection on schedule',
          body: 'The vehicle arrives in the agreed window and the load is secured before departure.',
        },
        {
          title: 'Delivery and handover',
          body: 'The consignment is signed for at destination and you are notified on completion.',
        },
      ],
      closing:
        'From a single pallet to a full project consignment, we treat the delivery window as the commitment — not an estimate.',
      ctaLabel: 'Request Cargo Transport',
    },
    'corporate-and-government': {
      title: 'Corporate & Government Transport Solutions',
      shortTitle: 'Corporate & Government',
      tagline: 'A dedicated fleet, a long-term contract, and one accountable operator',
      summary:
        'Dedicated vehicles for organisations, long-term transport contracts, and mobility built around specific projects.',
      imageAlt: 'A large fleet of vehicles parked in ordered rows',
      intro:
        'Organisations do not need a vehicle — they need transport capacity they can plan against, budget for, and account for. We contract that capacity, staff it, maintain it, and report on it.',
      listTitle: 'What we cover',
      items: [
        {
          name: 'Dedicated fleet for organisations',
          detail:
            'Vehicles assigned to your organisation, available on your schedule rather than shared across a booking pool.',
        },
        {
          name: 'Long-term transport contracts',
          detail:
            'Fixed-term agreements with agreed rates, service levels, and a single point of contact.',
        },
        {
          name: 'Customised mobility solutions for projects',
          detail:
            'Transport designed around a project’s sites, shift patterns, and duration — then stood down cleanly at the end.',
        },
      ],
      highlights: [
        'Dedicated vehicles',
        'Fixed contract rates',
        'Named account contact',
        'Project-based',
      ],
      steps: [
        {
          title: 'Scope the requirement',
          body: 'Sites, headcount, shift patterns, load types, and the period the contract must cover.',
        },
        {
          title: 'Design the solution',
          body: 'We propose the vehicle mix, crewing, and schedule, with rates itemised against each element.',
        },
        {
          title: 'Agree the service level',
          body: 'Availability, response times, and reporting are written into the contract before it starts.',
        },
        {
          title: 'Run and review',
          body: 'The fleet operates under your schedule and performance is reviewed with your named contact.',
        },
      ],
      closing:
        'Institutions, companies, and government bodies work with LS Transport because the accountability stays in one place, for the length of the contract.',
      ctaLabel: 'Discuss a Contract',
    },
    'special-transport': {
      title: 'Special Transport Services',
      shortTitle: 'Special Services',
      tagline: 'VIP movement, guided travel, and humanitarian logistics support',
      summary:
        'Discreet VIP transport, tourism and guided travel, and logistics support for humanitarian and NGO operations.',
      imageAlt: 'An executive stepping into a chauffeur-driven car',
      intro:
        'Some journeys carry more than passengers — a reputation, a delegation, or relief that has to reach a community. These assignments are planned individually and crewed by drivers briefed on the specific requirement.',
      listTitle: 'What we cover',
      items: [
        {
          name: 'VIP transport',
          detail:
            'Discreet, punctual executive movement with presentable vehicles and experienced chauffeurs.',
        },
        {
          name: 'Tourism and guided travel',
          detail:
            'Comfortable touring vehicles for visitors exploring Senegal, with itineraries planned around the group.',
        },
        {
          name: 'Humanitarian and NGO logistics support',
          detail:
            'Transport capacity for field operations, staff movement, and the delivery of relief materials.',
        },
      ],
      highlights: [
        'Discreet VIP service',
        'Tour-ready vehicles',
        'NGO field support',
        'Planned per assignment',
      ],
      steps: [
        {
          title: 'Brief us privately',
          body: 'Share the requirement, the sensitivity, and any protocol the assignment carries.',
        },
        {
          title: 'Plan the assignment',
          body: 'Route, timing, vehicle, and crew are selected specifically for the brief.',
        },
        {
          title: 'Confirm the detail',
          body: 'You approve the plan, including contingency arrangements, before the assignment begins.',
        },
        {
          title: 'Execute discreetly',
          body: 'The assignment runs to plan, with communication limited to the contacts you nominate.',
        },
      ],
      closing:
        'Whether the brief is a state delegation, a touring group, or a field deployment, the planning happens before the wheels turn.',
      ctaLabel: 'Enquire About Special Transport',
    },
  },

  fleetSection: {
    eyebrow: 'Our Fleet',
    titleLead: 'The Right Vehicle For',
    titleAccent: 'The Right Journey',
    body: 'Clean, comfortable, and efficient vehicles — matched to the group size, the distance, and the load.',
  },

  fleet: {
    eyebrow: 'Vehicle Classes',
    heading: 'A Modern Fleet, Matched To The Job',
    intro:
      'Clean, comfortable, and efficient vehicles — selected for the distance, the group, and the load. Every vehicle in service is maintained on a schedule and checked before it is dispatched.',
    filterLabel: 'Filter fleet by category',
    categories: {
      all: 'All',
      passenger: 'Passenger',
      executive: 'Executive',
      cargo: 'Cargo',
    },
    bestFor: 'Best for',
    capacityNote:
      'Capacities shown are typical for each vehicle class. The exact vehicle assigned to your journey is confirmed with your quote.',
    deployEyebrow: 'Vehicles For This Service',
    deployTitleLead: 'What We Typically',
    deployTitleAccent: 'Deploy',
    deployBody:
      'The final vehicle is confirmed with your quote, based on the group size, the distance, and the load.',
    standardsEyebrow: 'Fleet Standards',
    standardsTitleLead: 'A Vehicle Only Leaves The Yard',
    standardsTitleAccent: 'When It Is Ready',
    standardsBody:
      'Comfort is what passengers notice. Maintenance is what keeps the promise underneath it.',
    standards: [
      {
        title: 'Scheduled maintenance',
        body: 'Servicing happens on a calendar, not after a breakdown. Vehicles come off the road for maintenance before they fail on it.',
      },
      {
        title: 'Pre-dispatch checks',
        body: 'Tyres, brakes, lights, and fluids are checked before a vehicle leaves the yard for a journey.',
      },
      {
        title: 'Professional drivers',
        body: 'Crews are trained, briefed on the route, and held to the same conduct standard on every assignment.',
      },
    ],
    vehicles: {
      'executive-coach': {
        name: 'Executive Coach',
        imageAlt: 'A modern executive coach with reclining seats',
        capacity: 'Typically 45–55 seated passengers',
        summary:
          'Our long-distance flagship: high-back reclining seats, luggage capacity underneath, and the comfort a multi-hour journey demands.',
        bestFor: ['City-to-city travel', 'Delegations and conferences', 'Group tours'],
        features: [
          'Reclining seats',
          'Under-floor luggage hold',
          'Air conditioning',
          'Long-haul ready',
        ],
      },
      'intercity-coach': {
        name: 'Intercity Coach',
        imageAlt: 'An intercity coach parked at a terminal',
        capacity: 'Typically 30–45 seated passengers',
        summary:
          'The workhorse of the regional network — efficient, robust, and sized for scheduled routes between Dakar and the regions.',
        bestFor: ['Scheduled regional routes', 'Staff transport at scale', 'Event shuttles'],
        features: ['Forward-facing seating', 'Overhead storage', 'Air conditioning', 'Route-proven'],
      },
      minibus: {
        name: 'Minibus',
        imageAlt: 'A minibus waiting at an airport terminal',
        capacity: 'Typically 12–18 seated passengers',
        summary:
          'Small-group mobility that still fits city streets: ideal for airport runs, site visits, and daily staff shuttles.',
        bestFor: ['Airport transfers', 'Daily staff shuttles', 'Site visits'],
        features: ['Easy kerbside access', 'Luggage space', 'Air conditioning', 'Urban-agile'],
      },
      'passenger-van': {
        name: 'Passenger Van',
        imageAlt: 'A passenger van parked outside a modern building',
        capacity: 'Typically 7–14 seated passengers',
        summary:
          'A flexible van for smaller teams and mixed loads — passengers up front, equipment and baggage behind.',
        bestFor: ['Small teams', 'NGO field movement', 'Passengers plus equipment'],
        features: ['Convertible seating', 'Cargo area', 'Air conditioning', 'All-day range'],
      },
      'executive-van': {
        name: 'Executive Van',
        imageAlt: 'A black executive van parked outside a modern terminal',
        capacity: 'Typically 6–8 passengers',
        summary:
          'A private cabin on wheels: high-spec seating and room to work or talk, for delegations and VIP groups who want a sedan’s discretion with a minibus’s space.',
        bestFor: ['VIP groups', 'Delegations and protocol', 'Executive airport transfers'],
        features: [
          'Premium seating',
          'Privacy glass',
          'Climate control',
          'Experienced chauffeur',
        ],
      },
      'executive-sedan': {
        name: 'Executive Sedan',
        imageAlt: 'A black executive sedan on a city street',
        capacity: 'Typically 3–4 passengers',
        summary:
          'Discreet, presentable, and punctual — for executives, guests, and VIP movement where arrival matters.',
        bestFor: ['VIP transport', 'Executive airport pick-up', 'Protocol and delegations'],
        features: [
          'Experienced chauffeur',
          'Presentable interior',
          'Climate control',
          'Discreet service',
        ],
      },
      'cargo-truck': {
        name: 'Cargo Truck',
        imageAlt: 'A heavy cargo truck ready for a long-haul run',
        capacity: 'Heavy freight — payload confirmed per consignment',
        summary:
          'Heavy freight capacity for long-haul runs between Dakar and the regions, with loads secured before departure.',
        bestFor: ['Long-haul freight', 'Project materials', 'Bulk distribution'],
        features: [
          'Secured load restraint',
          'Long-haul configuration',
          'Scheduled servicing',
          'Nationwide runs',
        ],
      },
      'box-truck': {
        name: 'Box / Delivery Truck',
        imageAlt: 'A box truck loading at a warehouse bay',
        capacity: 'Medium freight — payload confirmed per consignment',
        summary:
          'Enclosed, weather-protected capacity for commercial distribution, equipment moves, and relief consignments.',
        bestFor: ['Commercial distribution', 'Equipment moves', 'Humanitarian consignments'],
        features: [
          'Enclosed body',
          'Weather protection',
          'Kerbside loading',
          'City and regional runs',
        ],
      },
    },
  },

  gallery: {
    eyebrow: 'The Fleet In Pictures',
    titleLead: 'Vehicles Worth',
    titleAccent: 'Arriving In',
    body: 'Coaches, minibuses, executive vans and freight units — the classes we deploy across Senegal.',
    scrollLabel: 'Photographs of the LS Transport fleet',
  },

  company: {
    welcomeEyebrow: 'Welcome to LS Transport',
    welcomeTitleLead: 'Built In Senegal,',
    welcomeTitleAccent: 'For Senegal',
    welcome:
      'LS Transport is a modern, reliable, and customer-focused transport company operating across Senegal. We specialise in safe passenger mobility, efficient cargo movement, and dependable corporate transport solutions designed to support individuals, businesses, and institutions nationwide.',
    promise:
      'With a commitment to professionalism, national development, and service excellence, LS Transport ensures that every journey reflects our core promise.',
    headquartersPlate: { value: 'Dakar', label: 'Headquarters' },
    regionsPlate: { value: '14', label: 'Regions served' },

    whoWeAreEyebrow: 'Who We Are',
    whoWeAreTitleLead: 'Moving People And Goods',
    whoWeAreTitleAccent: 'Across Senegal',
    story: [
      'LS Transport is a Senegal-based transport service provider dedicated to delivering high-quality mobility and logistics solutions. Established with the mission to support Senegal’s growing economic landscape, we combine local expertise with modern transport standards to serve clients across Dakar, and beyond.',
      'We operate with a strong focus on safety, punctuality, and customer satisfaction. Whether transporting people or goods, LS Transport stands as a trusted partner for reliable movement across the country.',
    ],
    storyImageAlt: 'A taxi and a minibus on a Dakar street',

    valuesEyebrow: 'Mission · Vision · Values',
    valuesTitleLead: 'What Keeps Us',
    valuesTitleAccent: 'On Course',
    valuesBody:
      'Our direction is set by three things: where we are going, why it matters, and how we behave getting there.',
    missionTitle: 'Our Mission',
    mission:
      'To provide safe, efficient, and accessible transport solutions that connect communities, empower businesses, and contribute to Senegal’s economic growth.',
    visionTitle: 'Our Vision',
    vision:
      'To become one of Senegal’s leading transport companies — recognised for reliability, innovation, and exceptional customer service.',
    sloganTitle: 'Our Slogan',
    values: [
      {
        title: 'Integrity',
        body: 'Honest, transparent, and ethical operations — on every route, every contract, and every invoice.',
      },
      {
        title: 'Commitment',
        body: 'Dedicated to customer satisfaction and national development, from a single seat to a full corporate fleet.',
      },
      {
        title: 'Innovation',
        body: 'Modern solutions for evolving transport needs, blending local expertise with international standards.',
      },
      {
        title: 'Community',
        body: 'Supporting local employment and economic growth in the regions we move through every day.',
      },
    ],

    commitmentEyebrow: 'Our Commitment',
    commitmentTitleLead: 'Four Promises We Operate',
    commitmentTitleAccent: 'Against',
    commitmentBody:
      'We operate with a strong focus on safety, punctuality, and customer satisfaction — whether we are transporting people or goods.',
    commitments: [
      {
        title: 'Safety',
        body: 'Professionally trained drivers and vehicles maintained on a schedule, not on an exception.',
      },
      {
        title: 'Punctuality',
        body: 'Departure and delivery windows agreed before travel, and honoured on the road.',
      },
      {
        title: 'Customer satisfaction',
        body: 'A named contact, transparent communication, and an honest update when plans change.',
      },
      {
        title: 'National development',
        body: 'Local employment, local expertise, and transport capacity that supports Senegal’s economy.',
      },
    ],

    howWeWorkEyebrow: 'How We Work',
    howWeWorkTitleLead: 'The Standard Is Set',
    howWeWorkTitleAccent: 'Before The Wheels Turn',
    howWeWork: [
      'Every assignment is planned before it is dispatched: the vehicle is matched to the job, the driver is briefed on the route, and the timing is confirmed with you in writing.',
      'That discipline is what lets us make commitments rather than estimates — and it is why organisations across Dakar and the regions keep their contracts with us.',
    ],
    howWeWorkImageAlt: 'A professional driver at the wheel of a coach',
  },

  reasons: {
    eyebrow: 'Why Choose Us',
    homeTitleLead: 'Why Clients Across Senegal',
    homeTitleAccent: 'Choose LS Transport',
    pageEyebrow: 'Our Difference',
    pageTitleLead: 'Built On Commitments,',
    pageTitleAccent: 'Not Estimates',
    intro:
      'Choosing a transport partner is a decision about trust. Our clients stay with LS Transport because every journey is planned, staffed, and maintained to the same standard — whether it carries one executive or twenty tonnes of freight.',
    items: [
      {
        title: 'Reliability',
        body: 'We deliver on time, every time. Departure windows, hand-over points, and delivery schedules are agreed in advance and tracked to completion, so you can plan around us with confidence.',
      },
      {
        title: 'Safety First',
        body: 'Professionally trained drivers and well-maintained vehicles. Our crews are briefed on route conditions and our vehicles are serviced on schedule — never on an exception.',
      },
      {
        title: 'Nationwide Coverage',
        body: 'Serving all major regions of Senegal. From Dakar to the northern, eastern, and southern corridors, one operator covers the whole journey rather than handing you between sub-contractors.',
      },
      {
        title: 'Professional Service',
        body: 'Courteous staff and transparent communication. You get a named contact, a clear confirmation, and an honest update the moment anything on the road changes.',
      },
      {
        title: 'Affordable Pricing',
        body: 'Competitive rates without compromising quality. Quotes are itemised up front — no surprise surcharges once the vehicle is on the road.',
      },
      {
        title: 'Modern Fleet',
        body: 'Clean, comfortable, and efficient vehicles, matched to the job: executive coaches for long distance, minibuses for staff runs, sedans for VIP movement, and trucks for freight.',
      },
    ],
    safetyEyebrow: 'Safety First',
    safetyTitleLead: 'Trained Drivers.',
    safetyTitleAccent: 'Maintained Vehicles.',
    safetyBody: [
      'Safety is not a claim on a website — it is a maintenance calendar, a pre-dispatch check, and a driver who has been briefed on the route before setting off.',
      'Vehicles come off the road for servicing on schedule rather than after a failure, and crews are held to the same conduct standard on every assignment, whether they are carrying a delegation or a pallet of stock.',
    ],
    safetyImageAlt: 'A technician servicing a truck engine in a workshop',
  },

  network: {
    eyebrow: 'Nationwide Coverage',
    titleLead: 'One Operator,',
    titleAccent: 'From Dakar To The Borders',
    body: 'We run the main road corridors of Senegal ourselves rather than handing you between sub-contractors along the way. Hover a corridor to trace it.',
    mapLabel:
      'Schematic map of the road corridors LS Transport operates across Senegal',
    regionsTitle: 'All 14 Regions',
    note: 'Schematic route diagram. Markers show the true relative position of each centre; distances and roads are simplified for clarity.',
    corridors: {
      north: {
        name: 'Northern Corridor',
        description: 'Dakar to the river north — Thiès, Louga, Saint-Louis and on towards Matam.',
      },
      central: {
        name: 'Central & Eastern Corridor',
        description:
          'The trunk route inland through Diourbel, Touba, Kaffrine and Tambacounda to Kédougou.',
      },
      south: {
        name: 'Southern Corridor',
        description: 'Groundnut basin and Casamance — Kaolack, Kolda, Sédhiou and Ziguinchor.',
      },
      coast: {
        name: 'Coastal Route',
        description: 'The Petite Côte run between Dakar, Mbour and the Sine-Saloum.',
      },
      river: {
        name: 'River Route',
        description: 'Saint-Louis along the Senegal River valley to Matam and Tambacounda.',
      },
    },
  },

  leadership: {
    eyebrow: 'Leadership',
    homeTitleLead: 'Experience That Travels',
    homeTitleAccent: 'Well',
    homeBody:
      'LS Transport is led by a team whose careers span healthcare operations, corporate finance, safety services, and clean-energy infrastructure across three continents — applied here to how Senegal moves.',
    pageEyebrow: 'Our Leadership',
    pageTitleLead: 'Global Standards,',
    pageTitleAccent: 'Local Insight',
    pageBody:
      'Three leaders, one operating philosophy: plan the journey properly, then keep the commitment made.',
    people: {
      'abdoulie-lowe': {
        role: 'Chief Executive Officer',
        focus: 'Strategic direction · Growth · Nationwide service delivery',
        bio: [
          'Abdoulie Lowe is the Chief Executive Officer of LS Transport in Senegal, where he leads the company’s strategic direction, growth initiatives, and nationwide service delivery. With a strong background in multi-sector leadership across the United States, West Africa, and The Gambia, Abdoulie brings a blend of international experience and local insight that strengthens LS Transport’s position as a reliable mobility and logistics provider.',
          'His professional journey includes leadership roles in Adult Family Home operations in Washington State, fire safety services through Sound Fire & Safety LLC, clean-energy and EV infrastructure development in The Gambia, and transport and logistics operations across Senegal. This diverse experience allows him to apply global standards to local transport needs, ensuring LS Transport delivers safe, efficient, and customer-focused services.',
          'Abdoulie is recognised for his integrity, operational discipline, and commitment to service excellence. He is driven by a vision to modernise mobility across Senegal, expand access to dependable transport solutions, and support national economic development. Under his leadership, LS Transport continues to grow its fleet, enhance service quality, and build a reputation as one of Senegal’s trusted transport companies.',
        ],
      },
      'haddy-saho': {
        role: 'Chief Operating Officer',
        focus: 'Daily operations · Fleet management · Service quality',
        bio: [
          'Haddy Saho is the Chief Operating Officer of LS Transport in Senegal, where she oversees daily operations, fleet management, staff coordination, and service quality across all transport services. With a background in nursing and extensive experience managing Adult Family Homes in Washington State, USA, Haddy brings a disciplined, detail-oriented, and people-centered approach to operational leadership.',
          'Her career includes roles as a professional nurse, Adult Family Home administrator, and CEO of Bothell Serenity AFH Corp, as well as Group COO of LS Global Holdings. This multi-sector experience strengthens LS Transport’s operational systems, ensuring the company meets both local expectations and international standards.',
          'Haddy is known for her precision, integrity, empathy, and commitment to service excellence. She focuses on building strong teams, maintaining high safety standards, and delivering reliable customer service. Under her leadership, LS Transport continues to expand its capacity, improve efficiency, and support Senegal’s growing mobility needs.',
        ],
      },
      'nixon-duah': {
        role: 'Chief Strategy Officer',
        focus: 'Long-term planning · Market positioning · Expansion',
        bio: [
          'Kwaku Duah Jr serves as the Chief Strategy Officer of LS Transport in Senegal, where he leads the company’s long-term strategic planning, market positioning, and expansion initiatives. With a strong background in development management, corporate finance, and business growth across the United States, Senegal, and The Gambia, Kwaku brings a forward-thinking and analytical approach to shaping LS Transport’s future.',
          'As CSO, Kwaku oversees strategic partnerships, competitive analysis, and organisational development, ensuring LS Transport remains aligned with national mobility needs and emerging market opportunities. His work strengthens the company’s ability to scale operations, diversify services, and maintain a strong presence within Senegal’s evolving transport and logistics sector.',
          'Kwaku’s professional experience spans multiple industries, including Adult Family Home operations in Washington State, fire safety services through Sound Fire & Safety LLC, and clean-energy and EV infrastructure development in The Gambia. This multi-sector exposure allows him to integrate global best practices into LS Transport’s strategic roadmap.',
          'Known for his disciplined execution, strategic insight, and commitment to sustainable growth, Kwaku plays a key role in driving LS Transport’s long-term vision. His leadership supports the company’s mission to deliver safe, reliable, and modern transport solutions across Senegal.',
        ],
      },
    },
  },

  cta: {
    defaultTitle: 'Ready When You Are',
    defaultBody:
      'Tell us the route, the date, and the load. We will confirm the vehicle, the driver, and the price before anything moves.',
    compareTitle: 'Compare Us On The Detail',
    compareBody:
      'Send us a route you already run with someone else. We will quote it honestly, itemised, with the vehicle named.',
    leadershipTitle: 'Talk To The People Who Run It',
    leadershipBody:
      'Contract enquiries, project mobility, and long-term partnerships reach our leadership directly.',
  },

  contact: {
    eyebrow: 'Contact Us',
    titleLead: 'Tell Us Where You Need',
    titleAccent: 'To Go',
    body: 'Send us the journey and we will come back with an itemised quote, the vehicle class, and the crew arrangement.',
    cardBody:
      'Our booking desk is open every day of the week. Reach us by email, or send the form and we will reply with a written quote.',
    labels: {
      address: 'Address',
      email: 'Email',
      phone: 'Phone',
      hours: 'Operating Hours',
    },
    phoneLabels: {
      main: 'Main',
      bookings: 'Bookings',
      freight: 'Freight',
    },
    quickQuoteEyebrow: 'Quick Quote',
    quickQuoteTitleLead: 'Start With The',
    quickQuoteTitleAccent: 'Journey',
    quickQuoteBody:
      'Fill in the five details we always need, and the enquiry form below fills itself in.',
  },

  form: {
    name: 'Your Name',
    email: 'Email Address',
    phone: 'Contact Number',
    service: 'Service',
    message: 'Journey details',
    messagePlaceholder:
      'Where from, where to, when, and how many passengers — or what you need moved.',
    submit: 'Send Enquiry',
    submitting: 'Sending…',
    replyNote: 'We reply during operating hours: {hours}.',
    successTitle: 'Thank You — Message Sent',
    successBody:
      'A member of our team will be in touch during operating hours ({hours}). For anything urgent, please email us directly.',
    sendAnother: 'Send another message',
    errorBanner:
      'Something went wrong sending your message. Please try again, or email us directly at',
    errors: {
      name: 'Please enter your name.',
      emailRequired: 'Please enter your email address.',
      emailInvalid: 'Please enter a valid email address.',
      phone: 'Please enter a valid phone number.',
      message: 'Please tell us a little more (at least 10 characters).',
    },
    extraSubjects: ['Fleet & Vehicle Availability', 'Long-Term Contract', 'General Enquiry'],
    journeyIntro: 'I would like a quote for the following journey:',
    journeyPickup: 'Pick-up',
    journeyDestination: 'Destination',
    journeyDate: 'Date',
    journeyParty: 'Passengers / load',
    journeyExtra: 'Additional details:',
    mailName: 'Name',
    mailEmail: 'Email',
    mailPhone: 'Phone',
    mailSubjectSuffix: 'website enquiry',
  },

  footer: {
    quickLinks: 'Quick Links',
    ourServices: 'Our Services',
    hours: 'Operating Hours',
    getInTouch: 'Get In Touch',
    rights: 'All rights reserved.',
    builtBy: 'Built by',
  },

  pages: {
    home: {
      seoTitle: 'Passenger, Cargo & Corporate Transport in Senegal',
      seoDescription:
        'LS Transport is a modern, reliable and customer-focused transport company operating across Senegal, specialising in safe passenger mobility, efficient cargo movement and dependable corporate transport solutions.',
    },
    about: {
      seoTitle: 'About Us',
      seoDescription:
        'LS Transport is a Senegal-based transport service provider dedicated to delivering high-quality mobility and logistics solutions across Dakar and beyond.',
      heroEyebrow: 'About LS Transport',
      heroTitle: 'A Senegalese Transport Company Built On Local Expertise',
      heroBody:
        'High-quality mobility and logistics solutions, combining local knowledge with modern transport standards.',
    },
    services: {
      seoTitle: 'Our Services',
      seoDescription:
        'Passenger transport, cargo and goods transport, corporate and government solutions, and special transport services across Senegal.',
      heroEyebrow: 'Our Services',
      heroTitle: 'Transport Solutions For Individuals, Companies, And Institutions',
      otherEyebrow: 'Other Services',
      otherTitleLead: 'We Also',
      otherTitleAccent: 'Handle',
      howItWorks: 'How It Works',
    },
    fleet: {
      seoTitle: 'Our Fleet',
      seoDescription:
        'Coaches, minibuses, vans, executive sedans and cargo trucks — the vehicle classes LS Transport operates across Senegal.',
      heroEyebrow: 'Our Fleet',
      heroTitle: 'Clean, Comfortable, And Efficient Vehicles',
    },
    whyChooseUs: {
      seoTitle: 'Why Choose Us',
      seoDescription:
        'Reliability, safety, nationwide coverage, professional service, affordable pricing and a modern fleet — why clients across Senegal choose LS Transport.',
      heroEyebrow: 'Why Choose Us',
      heroTitle: 'Six Reasons Clients Stay With LS Transport',
    },
    leadership: {
      seoTitle: 'Leadership',
      seoDescription:
        'Meet the leadership team behind LS Transport Senegal — strategic direction, daily operations, and long-term growth.',
      heroEyebrow: 'Leadership',
      heroTitle: 'The Team Behind Every Journey',
      heroBody:
        'Multi-sector leadership across the United States, West Africa, and Senegal — applied to safe, reliable, modern transport.',
    },
    contact: {
      seoTitle: 'Contact Us',
      seoDescription:
        'Contact LS Transport in Dakar, Senegal — open daily from 7:00 AM to 9:00 PM for passenger, cargo, corporate and special transport enquiries.',
      heroEyebrow: 'Contact Us',
      heroTitle: 'Let’s Plan Your Next Journey',
      heroBody:
        'Our booking desk is open every day. Send us the route, the date, and what is travelling — we reply with an itemised quote.',
    },
    notFound: {
      seoTitle: 'Page Not Found',
      code: 'Error 404',
      title: 'This Route Doesn’t Exist',
      body: 'The page you were looking for has moved or never existed. Let us get you back on the road.',
    },
  },
};

export type Dictionary = typeof en;
