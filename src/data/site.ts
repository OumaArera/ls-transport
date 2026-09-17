/**
 * Non-translatable company facts. All prose lives in src/i18n/en.ts and
 * src/i18n/fr.ts, keyed by the identifiers used here.
 *
 * TODO (client to confirm before launch):
 *  - `phones` is intentionally EMPTY. The content document left the phone
 *    number blank, so rather than publish a placeholder number the UI degrades
 *    gracefully to email-only contact everywhere. Add the real numbers below
 *    and every phone CTA (top bar, header, footer, contact page) switches on.
 *  - `email` and `url` are placeholders built from the company name — confirm
 *    the real mailbox and domain.
 */

export const site = {
  name: 'LS Transport',
  shortName: 'LS Transport',
  logo: '/images/logo.png',
  url: 'https://www.lstransport.sn',
} as const;

export type PhoneNumber = {
  /** Dictionary key under `contact.phoneLabels`. */
  labelKey: 'main' | 'bookings' | 'freight';
  display: string;
  href: string;
};

/**
 * Example once the client confirms their numbers:
 *   { labelKey: 'bookings', display: '+221 77 000 00 00', href: 'tel:+221770000000' }
 */
export const phones: PhoneNumber[] = [];

export const contact = {
  email: 'info@lstransport.sn',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Dakar%2C+Senegal',
} as const;

export type NavKey =
  | 'home'
  | 'about'
  | 'services'
  | 'fleet'
  | 'whyChooseUs'
  | 'leadership'
  | 'contact';

export type NavItem = {
  key: NavKey;
  href: string;
  /** Service slugs shown in the Services dropdown. */
  children?: string[];
};

export const navigation: NavItem[] = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  {
    key: 'services',
    href: '/services',
    children: [
      'passenger-transport',
      'cargo-and-goods-transport',
      'corporate-and-government',
      'special-transport',
    ],
  },
  { key: 'fleet', href: '/fleet' },
  { key: 'whyChooseUs', href: '/why-choose-us' },
  { key: 'leadership', href: '/leadership' },
  { key: 'contact', href: '/contact' },
];
