import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useT } from '@/i18n';
import { Container } from './Container';
import { AsphaltTexture } from './Texture';

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  crumbs?: Crumb[];
  /** Optional photographic backdrop; heavily darkened behind the copy. */
  image?: string;
  /** Tune the focal point of the backdrop, e.g. "50% 30%". */
  imagePosition?: string;
};

export function PageHero({
  eyebrow,
  title,
  body,
  crumbs = [],
  image,
  imagePosition = '50% 50%',
}: PageHeroProps) {
  const t = useT();

  return (
    <section className="relative overflow-hidden bg-ink-950 pb-16 pt-28 sm:pb-20 sm:pt-32">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover opacity-40"
            style={{ objectPosition: imagePosition }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/92 to-ink-950/55"
            aria-hidden="true"
          />
        </>
      )}
      <AsphaltTexture />
      <div
        className="absolute -right-20 top-1/2 hidden size-[420px] -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl lg:block"
        aria-hidden="true"
      />

      <Container className="relative">
        {crumbs.length > 0 && (
          <nav aria-label={t.common.breadcrumb} className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-xs font-medium text-ink-400">
              <li>
                <Link to="/" className="transition hover:text-white">
                  {t.common.home}
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1">
                  <ChevronRight className="size-3.5 text-ink-600" aria-hidden="true" />
                  {crumb.href ? (
                    <Link to={crumb.href} className="transition hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <div className="mb-4 flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.28em] text-gold-400">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            {eyebrow}
          </div>
        )}

        <h1 className="display-tight max-w-4xl text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {body && <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-200">{body}</p>}
      </Container>
    </section>
  );
}
