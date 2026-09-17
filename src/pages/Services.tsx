import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { FleetPreview } from '@/components/sections/FleetPreview';
import { CtaBand } from '@/components/sections/CtaBand';
import { ContactSection } from '@/components/sections/ContactSection';
import { format, useContent, useT } from '@/i18n';
import { useSeo } from '@/lib/useSeo';

export default function Services() {
  const t = useT();
  const { services } = useContent();
  useSeo({ title: t.pages.services.seoTitle, description: t.pages.services.seoDescription });

  return (
    <>
      <PageHero
        eyebrow={t.pages.services.heroEyebrow}
        title={t.pages.services.heroTitle}
        body={t.servicesSection.body}
        crumbs={[{ label: t.nav.services }]}
        image="/images/services/corporate.jpg"
        imagePosition="50% 40%"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <SectionHeading eyebrow={t.servicesSection.eyebrow} title={t.servicesSection.heading} />

          <div className="mt-14 space-y-14 lg:space-y-20">
            {services.map((service, index) => (
              <Reveal key={service.slug}>
                <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div className={index % 2 === 1 ? 'lg:order-2' : undefined}>
                    <div className="relative overflow-hidden rounded-sm">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="aspect-[4/3] w-full object-cover"
                        loading="lazy"
                      />
                      <span
                        className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent"
                        aria-hidden="true"
                      />
                      <span className="absolute bottom-5 left-5 inline-flex size-14 items-center justify-center rounded-sm bg-gold-500 text-ink-950">
                        <service.icon className="size-7" aria-hidden="true" />
                      </span>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : undefined}>
                    <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-gold-700">
                      {format(t.servicesSection.serviceNumber, { number: index + 1 })}
                    </span>
                    <h3 className="mt-2 display-tight text-3xl font-extrabold sm:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base font-semibold text-ink-800">{service.tagline}</p>
                    <p className="mt-4 text-base leading-relaxed text-ink-600">{service.summary}</p>

                    <ul className="mt-6 space-y-3 border-t border-ink-100 pt-6">
                      {service.items.map((item) => (
                        <li key={item.name} className="flex items-start gap-3">
                          <Check
                            className="mt-0.5 size-5 shrink-0 text-gold-600"
                            aria-hidden="true"
                          />
                          <span>
                            <span className="font-semibold text-ink-900">{item.name}</span>
                            <span className="mt-0.5 block text-sm leading-relaxed text-ink-600">
                              {item.detail}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <Button to={`/services/${service.slug}`}>
                        {t.actions.fullDetails}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Button>
                      <Link
                        to={`/contact?service=${service.slug}#enquiry`}
                        className="inline-flex items-center gap-2 font-display text-base font-bold uppercase tracking-[0.06em] text-ink-950 transition hover:gap-3 hover:text-gold-700"
                      >
                        {service.ctaLabel}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FleetPreview />
      <CtaBand />
      <ContactSection />
    </>
  );
}
