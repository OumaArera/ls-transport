import { Bus, BusFront, Car, Package, Truck, Users, type LucideIcon } from 'lucide-react';

/**
 * Vehicle CLASSES LS Transport operates. Structure and artwork only — names,
 * capacities and descriptions live in the i18n dictionaries.
 *
 * TODO (client to confirm before launch): the content document did not list the
 * fleet. Confirm the exact models, seat counts and payloads, and swap the
 * photographs for the company's own vehicles when they are available.
 */
export type VehicleCategory = 'passenger' | 'executive' | 'cargo';

export type VehicleBase = {
  slug: string;
  category: VehicleCategory;
  icon: LucideIcon;
  image: string;
};

export const vehicleBases: VehicleBase[] = [
  {
    slug: 'executive-coach',
    category: 'passenger',
    icon: Bus,
    image: '/images/fleet/executive-coach.jpg',
  },
  {
    slug: 'intercity-coach',
    category: 'passenger',
    icon: BusFront,
    image: '/images/fleet/intercity-coach.jpg',
  },
  { slug: 'minibus', category: 'passenger', icon: Users, image: '/images/fleet/minibus.jpg' },
  {
    slug: 'passenger-van',
    category: 'passenger',
    icon: BusFront,
    image: '/images/fleet/passenger-van.jpg',
  },
  {
    slug: 'executive-van',
    category: 'executive',
    icon: BusFront,
    image: '/images/fleet/executive-van.jpg',
  },
  {
    slug: 'executive-sedan',
    category: 'executive',
    icon: Car,
    image: '/images/fleet/executive-sedan.jpg',
  },
  { slug: 'cargo-truck', category: 'cargo', icon: Truck, image: '/images/fleet/cargo-truck.jpg' },
  { slug: 'box-truck', category: 'cargo', icon: Package, image: '/images/fleet/box-truck.jpg' },
];

export const fleetCategories: ('all' | VehicleCategory)[] = [
  'all',
  'passenger',
  'executive',
  'cargo',
];

/**
 * The scrolling vehicle strip on the home page. Ordinary photographs from the
 * fleet and service sets — no extra downloads.
 */
export const galleryImages = [
  '/images/services/passenger-1.jpg',
  '/images/fleet/executive-coach.jpg',
  '/images/services/cargo-1.jpg',
  '/images/fleet/minibus.jpg',
  '/images/gallery/sleeper-coach.jpg',
  '/images/fleet/executive-van.jpg',
  '/images/fleet/cargo-truck.jpg',
  '/images/services/passenger-3.jpg',
  '/images/gallery/coach-side.jpg',
  '/images/services/corporate-1.jpg',
  '/images/fleet/executive-sedan.jpg',
  '/images/fleet/box-truck.jpg',
];

export const fleetStandardImages = [
  '/images/maintenance.jpg',
  '/images/workshop.jpg',
  '/images/driver.jpg',
];
