import { Bus, Crown, Package, Building2, type LucideIcon } from 'lucide-react';

/** Structure and artwork only — the prose lives in the i18n dictionaries. */
export type ServiceBase = {
  slug: string;
  icon: LucideIcon;
  image: string;
  /** Wide image used at the top of the detail page. */
  heroImage: string;
  /** Vehicle slugs from data/fleet.ts that typically cover this service. */
  fleet: string[];
};

export const serviceBases: ServiceBase[] = [
  {
    slug: 'passenger-transport',
    icon: Bus,
    image: '/images/services/passenger.jpg',
    heroImage: '/images/coach-interior.jpg',
    fleet: ['executive-coach', 'intercity-coach', 'minibus', 'executive-sedan'],
  },
  {
    slug: 'cargo-and-goods-transport',
    icon: Package,
    image: '/images/services/cargo.jpg',
    heroImage: '/images/freight-highway.jpg',
    fleet: ['cargo-truck', 'box-truck', 'passenger-van'],
  },
  {
    slug: 'corporate-and-government',
    icon: Building2,
    image: '/images/services/corporate.jpg',
    heroImage: '/images/strategy.jpg',
    fleet: ['minibus', 'passenger-van', 'executive-sedan', 'intercity-coach'],
  },
  {
    slug: 'special-transport',
    icon: Crown,
    image: '/images/services/special.jpg',
    heroImage: '/images/airport-transfer.jpg',
    fleet: ['executive-sedan', 'executive-coach', 'minibus', 'box-truck'],
  },
];

export const serviceSlugs = serviceBases.map((service) => service.slug);
