import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone, Route } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { AsphaltTexture } from '@/components/ui/Texture';
import { LanguageSwitcher } from '@/i18n/LanguageSwitcher';
import { useContent, useT } from '@/i18n';
import { contact, navigation, phones, site } from '@/data/site';

export function Footer() {
  const t = useT();
  const { services } = useContent();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <AsphaltTexture />
      <div className="h-1 w-full bg-gradient-to-r from-gold-500 via-gold-400 to-ink-800" />

      <Container size="wide" className="relative">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
          <div>
            <Link to="/" className="inline-block rounded-sm bg-white p-3">
              <img src={site.logo} alt={site.name} className="h-12 w-auto" width={520} height={287} />
            </Link>
            <p className="mt-5 text-sm leading-relaxed">{t.site.footerBlurb}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-sm border border-ink-800 bg-ink-900/70 px-3 py-2 text-xs font-semibold text-ink-200">
              <Route className="size-4 text-gold-500" aria-hidden="true" />
              {t.site.regionsBadge}
            </div>
            <div className="mt-5">
              <LanguageSwitcher />
            </div>
          </div>

          <nav aria-labelledby="footer-links">
            <h3
              id="footer-links"
              className="font-display text-base font-bold uppercase tracking-[0.22em] text-white"
            >
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-2 transition hover:text-gold-400"
                  >
                    <span className="h-px w-3 bg-gold-500" aria-hidden="true" />
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services">
            <h3
              id="footer-services"
              className="font-display text-base font-bold uppercase tracking-[0.22em] text-white"
            >
              {t.footer.ourServices}
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-start gap-2 transition hover:text-gold-400"
                  >
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-gold-500" aria-hidden="true" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-base font-bold uppercase tracking-[0.22em] text-white">
              {t.footer.hours}
            </h3>
            <p className="mt-3 flex items-start gap-2 text-sm">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden="true" />
              {t.site.hours}
            </p>
          </nav>

          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-[0.22em] text-white">
              {t.footer.getInTouch}
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden="true" />
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-gold-400"
                >
                  {t.site.address}
                </a>
              </li>
              {phones.length > 0 && (
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden="true" />
                  <span className="flex flex-col gap-1">
                    {phones.map((phone) => (
                      <a
                        key={phone.href}
                        href={phone.href}
                        className="transition hover:text-gold-400"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </span>
                </li>
              )}
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden="true" />
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all transition hover:text-gold-400"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-ink-800 py-6 text-center text-xs text-ink-400 sm:flex-row sm:text-left">
          <p>
            © {year} {site.name} {t.site.country}. {t.footer.rights}
          </p>
          <p className="font-display text-sm uppercase tracking-[0.22em] text-ink-300">
            {t.site.tagline}
          </p>
          <p>
            {t.footer.builtBy}{' '}
            <a
              href="https://zafrika.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-ink-200 underline-offset-4 transition hover:text-gold-400 hover:underline"
            >
              Zafrika
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
