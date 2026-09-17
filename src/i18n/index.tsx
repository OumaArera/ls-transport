import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { en, type Dictionary } from './en';
import { fr } from './fr';
import { buildContent, type Content } from './content';
import { browserPrefersFrench, detectCountry, languageForCountry, type LanguageCode } from './geo';

export type { LanguageCode } from './geo';
export type { Dictionary } from './en';
export type { Service, Vehicle, Leader, Corridor, IconItem } from './content';

const dictionaries: Record<LanguageCode, Dictionary> = { en, fr };
export const languages: LanguageCode[] = ['en', 'fr'];

const STORAGE_KEY = 'ls-transport:lang';
const QUERY_KEY = 'lang';

const isLanguage = (value: string | null | undefined): value is LanguageCode =>
  value === 'en' || value === 'fr';

const readStoredLanguage = (): LanguageCode | null => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLanguage(stored) ? stored : null;
  } catch {
    return null;
  }
};

const readQueryLanguage = (): LanguageCode | null => {
  if (typeof window === 'undefined') return null;
  const value = new URLSearchParams(window.location.search).get(QUERY_KEY);
  return isLanguage(value) ? value : null;
};

type InitialState = { lang: LanguageCode; chosen: boolean };

/**
 * Synchronous first guess, in order of authority:
 *   1. `?lang=` in the URL — so a shared link always opens in its language
 *   2. a previous choice saved in this browser
 *   3. the browser's own language preference
 * The IP lookup runs afterwards and can only override (3).
 */
const resolveInitial = (): InitialState => {
  if (typeof window === 'undefined') return { lang: 'en', chosen: false };

  const fromQuery = readQueryLanguage();
  if (fromQuery) return { lang: fromQuery, chosen: true };

  const stored = readStoredLanguage();
  if (stored) return { lang: stored, chosen: true };

  return { lang: browserPrefersFrench() ? 'fr' : 'en', chosen: false };
};

type LanguageContextValue = {
  lang: LanguageCode;
  t: Dictionary;
  content: Content;
  setLanguage: (next: LanguageCode) => void;
  /** True once the visitor (or their link) has picked a language explicitly. */
  chosen: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [{ lang, chosen }, setState] = useState<InitialState>(resolveInitial);

  // Keep <html lang> and the Open Graph locale in step with the active language.
  useEffect(() => {
    const dict = dictionaries[lang];
    document.documentElement.lang = dict.htmlLang;

    let meta = document.head.querySelector<HTMLMetaElement>('meta[property="og:locale"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', dict.ogLocale);
  }, [lang]);

  // IP-based default. Only ever applies when the visitor has not chosen for
  // themselves, and failure is silent.
  useEffect(() => {
    if (chosen) return;
    let cancelled = false;

    detectCountry().then((country) => {
      if (cancelled) return;
      const detected = languageForCountry(country);
      if (!detected) return;
      setState((current) => (current.chosen ? current : { lang: detected, chosen: false }));
    });

    return () => {
      cancelled = true;
    };
  }, [chosen]);

  const setLanguage = useCallback((next: LanguageCode) => {
    setState({ lang: next, chosen: true });

    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* Storage blocked — the choice still holds for this page session. */
    }

    // Reflect the choice in the URL so the page stays shareable in-language.
    const url = new URL(window.location.href);
    url.searchParams.set(QUERY_KEY, next);
    window.history.replaceState(window.history.state, '', url);
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const dict = dictionaries[lang];
    return { lang, t: dict, content: buildContent(dict), setLanguage, chosen };
  }, [lang, chosen, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return context;
}

/** The active dictionary. */
export const useT = () => useLanguage().t;

/** Structure joined to the active language's copy. */
export const useContent = () => useLanguage().content;

/** Fills {placeholders} in a dictionary string. */
export const format = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
