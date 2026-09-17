export type LanguageCode = 'en' | 'fr';

/**
 * Countries where French is an official or principal working language, and is
 * therefore the sensible default for a visitor arriving from there.
 */
const FRANCOPHONE = new Set([
  'SN', // Senegal — home market
  'FR',
  'ML',
  'BF',
  'NE',
  'CI',
  'GN',
  'TG',
  'BJ',
  'TD',
  'CF',
  'CG',
  'CD',
  'GA',
  'CM',
  'MR',
  'DJ',
  'KM',
  'MG',
  'GQ',
  'MC',
]);

/**
 * Officially multilingual countries. A visitor from Flanders or Zurich should
 * not be forced into French, so here we defer to the browser's own preference.
 */
const PARTLY_FRANCOPHONE = new Set(['BE', 'CH', 'CA', 'LU', 'HT', 'BI', 'RW', 'VU', 'SC', 'MU']);

/**
 * Where to look up the visitor's country from their IP.
 *
 * The default is a free, key-less, CORS-enabled endpoint. In production on
 * Vercel or Netlify the better answer is a one-line edge function that echoes
 * the platform's own geo header (`x-vercel-ip-country` /
 * `x-nf-geo`) — set VITE_GEO_ENDPOINT to that path and it is used instead.
 * No personal data is stored: only the two-letter country code is cached.
 */
const GEO_ENDPOINT =
  (import.meta.env.VITE_GEO_ENDPOINT as string | undefined) ||
  'https://get.geojs.io/v1/ip/country.json';

const COUNTRY_CACHE_KEY = 'ls-transport:country';
const COUNTRY_CACHE_TTL = 7 * 24 * 60 * 60 * 1000;
const LOOKUP_TIMEOUT_MS = 3500;

const safeStorage = {
  get(key: string) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      /* Private mode or blocked storage — detection just runs again next time. */
    }
  },
};

export function browserPrefersFrench() {
  if (typeof navigator === 'undefined') return false;
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages.some((tag) => tag?.toLowerCase().startsWith('fr'));
}

/** Maps a country code to a language, or null when we have no opinion. */
export function languageForCountry(country: string | null): LanguageCode | null {
  if (!country) return null;
  const code = country.trim().toUpperCase();
  if (FRANCOPHONE.has(code)) return 'fr';
  if (PARTLY_FRANCOPHONE.has(code)) return browserPrefersFrench() ? 'fr' : 'en';
  return 'en';
}

const readCache = () => {
  const raw = safeStorage.get(COUNTRY_CACHE_KEY);
  if (!raw) return null;
  try {
    const { country, at } = JSON.parse(raw) as { country: string; at: number };
    if (!country || Date.now() - at > COUNTRY_CACHE_TTL) return null;
    return country;
  } catch {
    return null;
  }
};

/** Pulls the country code out of whichever shape the endpoint returns. */
const parseCountry = (body: string): string | null => {
  const text = body.trim();
  if (/^[A-Za-z]{2}$/.test(text)) return text.toUpperCase();
  try {
    const data = JSON.parse(text) as Record<string, unknown>;
    const value =
      data.country ?? data.country_code ?? data.countryCode ?? data.country_code_iso3166_alpha2;
    if (typeof value === 'string' && /^[A-Za-z]{2}$/.test(value.trim())) {
      return value.trim().toUpperCase();
    }
  } catch {
    /* Not JSON — fall through. */
  }
  return null;
};

/**
 * Looks up the visitor's country by IP. Resolves to null on any failure —
 * offline, blocked, rate-limited, or slow — so language detection silently
 * falls back to the browser preference rather than blocking the page.
 */
export async function detectCountry(): Promise<string | null> {
  const cached = readCache();
  if (cached) return cached;

  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), LOOKUP_TIMEOUT_MS);

  try {
    const response = await fetch(GEO_ENDPOINT, {
      signal: controller.signal,
      headers: { Accept: 'application/json, text/plain' },
    });
    if (!response.ok) return null;
    const country = parseCountry(await response.text());
    if (country) {
      safeStorage.set(COUNTRY_CACHE_KEY, JSON.stringify({ country, at: Date.now() }));
    }
    return country;
  } catch {
    return null;
  } finally {
    window.clearTimeout(timer);
  }
}
