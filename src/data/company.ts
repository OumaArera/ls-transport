import {
  BadgeCheck,
  Banknote,
  Bus,
  Clock,
  Handshake,
  HeartHandshake,
  Lightbulb,
  MapPinned,
  Package,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';

/** Icons and artwork only — the prose lives in the i18n dictionaries. */

export const valueIcons: LucideIcon[] = [Handshake, HeartHandshake, Lightbulb, Users];

export const reasonIcons: LucideIcon[] = [
  Clock,
  ShieldCheck,
  MapPinned,
  BadgeCheck,
  Banknote,
  Bus,
];

export const trustIcons: LucideIcon[] = [MapPinned, Clock, ShieldCheck, Sparkles];

export const heroSlideIcons: LucideIcon[] = [Bus, Package, ShieldCheck];

export type LeaderBase = {
  id: string;
  /** Names are not translated. */
  name: string;
  initials: string;
  /** Leaders without a photo render a branded initials plate. */
  photo?: string;
};

export const leaderBases: LeaderBase[] = [
  {
    id: 'abdoulie-lowe',
    name: 'Abdoulie Lowe',
    initials: 'AL',
    photo: '/images/team/abdoulie-lowe.jpeg',
  },
  { id: 'haddy-saho', name: 'Haddy Saho', initials: 'HS' },
  {
    id: 'nixon-duah',
    name: 'Nixon Kwaku Duah Junior',
    initials: 'ND',
    photo: '/images/team/nixon-duah.jpeg',
  },
];
