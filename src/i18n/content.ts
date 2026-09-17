import type { Dictionary } from './en';
import { serviceBases, type ServiceBase } from '@/data/services';
import { vehicleBases, fleetStandardImages, type VehicleBase } from '@/data/fleet';
import { corridorBases, type CorridorBase } from '@/data/network';
import {
  heroSlideIcons,
  leaderBases,
  reasonIcons,
  trustIcons,
  valueIcons,
  type LeaderBase,
} from '@/data/company';
import type { LucideIcon } from 'lucide-react';

type ServiceCopy = Dictionary['services']['passenger-transport'];
type VehicleCopy = Dictionary['fleet']['vehicles']['executive-coach'];
type LeaderCopy = Dictionary['leadership']['people']['abdoulie-lowe'];
type CorridorCopy = Dictionary['network']['corridors']['north'];

export type Service = ServiceBase & ServiceCopy;
export type Vehicle = VehicleBase & VehicleCopy;
export type Leader = LeaderBase & LeaderCopy;
export type Corridor = CorridorBase & CorridorCopy;
export type IconItem = { icon: LucideIcon; title: string; body: string };

export type Content = ReturnType<typeof buildContent>;

/**
 * Joins the language-independent structure in `src/data` (slugs, icons,
 * photographs, map coordinates) to the translated copy in the active
 * dictionary. Called once per language change, not once per render.
 */
export function buildContent(dict: Dictionary) {
  const serviceCopy = dict.services as Record<string, ServiceCopy>;
  const vehicleCopy = dict.fleet.vehicles as Record<string, VehicleCopy>;
  const leaderCopy = dict.leadership.people as Record<string, LeaderCopy>;
  const corridorCopy = dict.network.corridors as Record<string, CorridorCopy>;

  const services: Service[] = serviceBases.map((base) => ({ ...base, ...serviceCopy[base.slug] }));
  const fleet: Vehicle[] = vehicleBases.map((base) => ({ ...base, ...vehicleCopy[base.slug] }));
  const leadership: Leader[] = leaderBases.map((base) => ({ ...base, ...leaderCopy[base.id] }));
  const corridors: Corridor[] = corridorBases.map((base) => ({
    ...base,
    ...corridorCopy[base.id],
  }));

  const zip = (icons: LucideIcon[], copy: { title: string; body: string }[]): IconItem[] =>
    copy.map((item, index) => ({ ...item, icon: icons[index] }));

  return {
    services,
    getService: (slug?: string) => services.find((service) => service.slug === slug),
    fleet,
    getVehicle: (slug: string) => fleet.find((vehicle) => vehicle.slug === slug),
    fleetStandards: dict.fleet.standards.map((standard, index) => ({
      ...standard,
      image: fleetStandardImages[index],
    })),
    corridors,
    leadership,
    values: zip(valueIcons, dict.company.values),
    reasons: zip(reasonIcons, dict.reasons.items),
    trustFacts: zip(trustIcons, dict.trust),
    heroSlides: dict.hero.slides.map((slide, index) => ({
      ...slide,
      icon: heroSlideIcons[index],
    })),
  };
}
