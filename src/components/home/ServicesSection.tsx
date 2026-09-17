import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { format, useContent, useT } from '@/i18n';

export function ServicesSection() {
  const t = useT();
  const { services } = useContent();

  return (
    <section className="bg-ink-50/70 py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow={t.servicesSection.eyebrow}
          title={t.servicesSection.heading}
          body={t.servicesSection.body}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 80} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lift">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/25 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute bottom-4 left-4 inline-flex size-12 items-center justify-center rounded-sm bg-gold-500 text-ink-950 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-ink-950/70 px-2.5 py-1 font-display text-xs font-bold uppercase tracking-[0.18em] text-gold-400 backdrop-blur">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="display-tight text-2xl font-extrabold">{service.title}</h3>
                  <p className="mb-5 mt-3 text-sm leading-relaxed text-ink-600">{service.summary}</p>

                  <ul className="mt-auto space-y-2 border-t border-ink-100 pt-5">
                    {service.items.slice(0, 3).map((item) => (
                      <li key={item.name} className="flex items-start gap-2.5 text-sm text-ink-700">
                        <Check className="mt-0.5 size-4 shrink-0 text-gold-600" aria-hidden="true" />
                        {item.name}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 self-start font-display text-base font-bold uppercase tracking-[0.06em] text-ink-950 transition group-hover:gap-3 group-hover:text-gold-700"
                  >
                    {t.actions.learnMore}
                    <ArrowRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">
                      {format(t.actions.learnMoreAbout, { title: service.title })}
                    </span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button to="/services" variant="secondary" size="lg">
            {t.actions.viewAllServices}
          </Button>
          <Button to="/fleet" variant="ghost" size="lg">
            {t.actions.seeOurFleet}
          </Button>
        </div>
      </Container>
    </section>
  );
}
