import { Languages } from 'lucide-react';
import { languages, useLanguage } from '@/i18n';
import { cn } from '@/lib/cn';

type Props = {
  tone?: 'light' | 'dark';
  className?: string;
};

/**
 * EN / FR toggle. The active language is announced with aria-pressed so the
 * control is usable without seeing the highlight.
 */
export function LanguageSwitcher({ tone = 'dark', className }: Props) {
  const { lang, setLanguage, t } = useLanguage();
  const dark = tone === 'dark';

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 rounded-sm border p-0.5',
        dark ? 'border-white/15 bg-white/5' : 'border-ink-200 bg-white',
        className,
      )}
    >
      <Languages
        className={cn('mx-1.5 size-4 shrink-0', dark ? 'text-gold-500' : 'text-ink-500')}
        aria-hidden="true"
      />
      <span className="sr-only">{t.common.languageLabel}</span>
      {languages.map((code) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code)}
            aria-pressed={active}
            lang={code}
            className={cn(
              'rounded-[2px] px-2 py-1 font-display text-xs font-bold uppercase tracking-[0.14em] transition',
              active
                ? 'bg-gold-500 text-ink-950'
                : dark
                  ? 'text-ink-300 hover:text-white'
                  : 'text-ink-600 hover:text-ink-950',
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
