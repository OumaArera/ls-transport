import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Accent, SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { useT } from '@/i18n';
import { ContactForm } from './ContactForm';
import { contact, phones, site } from '@/data/site';

export function ContactSection() {
  const t = useT();

  return (
    <section id="enquiry" className="scroll-mt-32 bg-ink-50/70 py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={
            <>
              {t.contact.titleLead} <Accent>{t.contact.titleAccent}</Accent>
            </>
          }
          body={t.contact.body}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <div className="h-full rounded-sm bg-ink-950 p-7 text-ink-300 sm:p-8">
              <h3 className="display-tight text-3xl font-extrabold text-white">
                {site.name} {t.site.country}
              </h3>
              <p className="mt-3 text-sm leading-relaxed">{t.contact.cardBody}</p>

              <ul className="mt-8 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-sm bg-gold-500/15 text-gold-400">
                    <MapPin className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-400">
                      {t.contact.labels.address}
                    </span>
                    <a
                      href={contact.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block text-white transition hover:text-gold-400"
                    >
                      {t.site.address}
                    </a>
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-sm bg-gold-500/15 text-gold-400">
                    <Mail className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-400">
                      {t.contact.labels.email}
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="mt-1 block break-all text-white transition hover:text-gold-400"
                    >
                      {contact.email}
                    </a>
                  </span>
                </li>

                {phones.length > 0 && (
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-sm bg-gold-500/15 text-gold-400">
                      <Phone className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-400">
                        {t.contact.labels.phone}
                      </span>
                      {phones.map((phone) => (
                        <a
                          key={phone.href}
                          href={phone.href}
                          className="mt-1 block text-white transition hover:text-gold-400"
                        >
                          {phone.display}{' '}
                          <span className="text-xs text-ink-400">
                            ({t.contact.phoneLabels[phone.labelKey]})
                          </span>
                        </a>
                      ))}
                    </span>
                  </li>
                )}

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-sm bg-gold-500/15 text-gold-400">
                    <Clock className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-400">
                      {t.contact.labels.hours}
                    </span>
                    <span className="mt-1 block text-white">{t.site.hours}</span>
                  </span>
                </li>
              </ul>

              <p className="mt-8 border-t border-ink-800 pt-6 font-display text-sm uppercase tracking-[0.22em] text-gold-400">
                {t.site.tagline}
              </p>
            </div>
          </Reveal>

          <Reveal delay={110} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
