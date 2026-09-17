import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { LanguageSwitcher } from '@/i18n/LanguageSwitcher';
import { useT } from '@/i18n';
import { contact, phones } from '@/data/site';

export function TopBar() {
  const t = useT();

  return (
    <div className="hidden bg-ink-950 text-ink-300 lg:block">
      <Container size="wide">
        <div className="flex items-center justify-between gap-6 py-2 text-[13px]">
          <ul className="flex items-center gap-6">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-gold-500" aria-hidden="true" />
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {t.site.address}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-gold-500" aria-hidden="true" />
              <span>{t.site.hours}</span>
            </li>
          </ul>

          <ul className="flex items-center gap-5">
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-gold-500" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="transition hover:text-white">
                {contact.email}
              </a>
            </li>
            {phones[0] && (
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-gold-500" aria-hidden="true" />
                <a href={phones[0].href} className="font-semibold transition hover:text-white">
                  {phones[0].display}
                </a>
              </li>
            )}
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
