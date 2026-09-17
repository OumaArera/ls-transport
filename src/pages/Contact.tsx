import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Accent, SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { JourneyPlanner } from '@/components/home/JourneyPlanner';
import { ContactSection } from '@/components/sections/ContactSection';
import { useT } from '@/i18n';
import { contact, phones } from '@/data/site';
import { useSeo } from '@/lib/useSeo';

export default function Contact() {
  const t = useT();
  useSeo({ title: t.pages.contact.seoTitle, description: t.pages.contact.seoDescription });

  const details = [
    {
      icon: MapPin,
      label: t.contact.labels.address,
      value: t.site.address,
      href: contact.mapsUrl,
      external: true,
    },
    {
      icon: Mail,
      label: t.contact.labels.email,
      value: contact.email,
      href: `mailto:${contact.email}`,
      external: false,
    },
    ...phones.map((phone) => ({
      icon: Phone,
      label: t.contact.phoneLabels[phone.labelKey],
      value: phone.display,
      href: phone.href,
      external: false,
    })),
    {
      icon: Clock,
      label: t.contact.labels.hours,
      value: t.site.hours,
      href: undefined,
      external: false,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t.pages.contact.heroEyebrow}
        title={t.pages.contact.heroTitle}
        body={t.pages.contact.heroBody}
        crumbs={[{ label: t.nav.contact }]}
        image="/images/dakar-traffic.jpg"
        imagePosition="50% 45%"
      />

      <section className="py-16 sm:py-20">
        <Container size="wide">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((detail, index) => (
              <Reveal
                key={`${detail.label}-${detail.value}`}
                delay={index * 70}
                className="rounded-sm border border-ink-100 bg-white p-6 shadow-card"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-sm bg-ink-950 text-gold-400">
                  <detail.icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-500">
                  {detail.label}
                </h2>
                {detail.href ? (
                  <a
                    href={detail.href}
                    {...(detail.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="mt-2 block break-words font-semibold text-ink-900 transition hover:text-gold-700"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="mt-2 font-semibold text-ink-900">{detail.value}</p>
                )}
              </Reveal>
            ))}
          </div>

          <div className="mt-14">
            <SectionHeading
              eyebrow={t.contact.quickQuoteEyebrow}
              title={
                <>
                  {t.contact.quickQuoteTitleLead} <Accent>{t.contact.quickQuoteTitleAccent}</Accent>
                </>
              }
              body={t.contact.quickQuoteBody}
            />
            <div className="mt-10">
              <JourneyPlanner tone="light" />
            </div>
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
