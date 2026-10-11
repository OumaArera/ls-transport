import { Bus, Crown, Package, Building2, type LucideIcon } from 'lucide-react';

/** Structure and artwork only — the prose lives in the i18n dictionaries. */
export type ServiceBase = {
  slug: string;
  icon: LucideIcon;
  /** Shown as a rotating carousel on the service cards. */
  images: string[];
  /** Wide image used at the top of the detail page. */
  heroImage: string;
  /** Vehicle slugs from data/fleet.ts that typically cover this service. */
  fleet: string[];
};

export const serviceBases: ServiceBase[] = [
  {
    slug: 'passenger-transport',
    icon: Bus,
    images: [
      '/images/services/passenger-1.jpg',
      '/images/services/passenger-2.jpg',
      '/images/services/passenger-3.jpg',
      '/images/services/passenger-4.jpg',
    ],
    heroImage: '/images/coach-interior.jpg',
    fleet: ['executive-coach', 'intercity-coach', 'minibus', 'executive-sedan'],
  },
  {
    slug: 'cargo-and-goods-transport',
    icon: Package,
    images: [
      '/images/services/cargo-1.jpg',
      '/images/services/cargo-2.jpg',
      '/images/services/cargo-3.jpg',
    ],
    heroImage: '/images/freight-highway.jpg',
    fleet: ['cargo-truck', 'box-truck', 'passenger-van'],
  },
  {
    slug: 'corporate-and-government',
    icon: Building2,
    images: [
      '/images/services/corporate-1.jpg',
      '/images/services/corporate-2.jpg',
      '/images/services/corporate-3.jpg',
    ],
    heroImage: '/images/strategy.jpg',
    fleet: ['executive-van', 'minibus', 'passenger-van', 'intercity-coach'],
  },
  {
    slug: 'special-transport',
    icon: Crown,
    images: [
      '/images/services/special-1.jpg',
      '/images/services/special-2.jpg',
      '/images/services/special-3.jpg',
    ],
    heroImage: '/images/airport-transfer.jpg',
    fleet: ['executive-sedan', 'executive-van', 'executive-coach', 'box-truck'],
  },
];

export const serviceSlugs = serviceBases.map((service) => service.slug);
