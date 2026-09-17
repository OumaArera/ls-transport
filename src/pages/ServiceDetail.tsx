import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Accent, SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { CtaBand } from '@/components/sections/CtaBand';
import { ContactSection } from '@/components/sections/ContactSection';
import { useContent, useT } from '@/i18n';
import { useSeo } from '@/lib/useSeo';

export default function ServiceDetail() {
  const { slug } = useParams();
  const t = useT();
  const { services, getService, getVehicle } = useContent();
  const service = getService(slug);

  useSeo({
    title: service?.title ?? t.nav.services,
    description: service?.summary,
  });

  if (!service) return <Navigate to="/services" replace />;

  const others = services.filter((item) => item.slug !== service.slug);
  const vehicles = service.fleet.map(getVehicle).filter((vehicle) => vehicle !== undefined);

  return (
    <>
      <PageHero
        eyebrow={service.tagline}
        title={service.title}
        body={service.summary}
        crumbs={[{ label: t.nav.services, href: '/services' }, { label: service.shortTitle }]}
        image={service.heroImage}
        imagePosition="50% 45%"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="rule-gold" aria-hidden="true" />
                <p className="mt-5 text-lg leading-relaxed text-ink-700">{service.intro}</p>

                <h2 className="mt-10 display-tight text-3xl font-extrabold">{service.listTitle}</h2>
                <ul className="mt-6 space-y-5">
                  {service.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-start gap-4 rounded-sm border border-ink-100 bg-white p-5 shadow-card"
                    >
                      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-sm bg-gold-500 text-ink-950">
                        <Check className="size-4" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="font-display text-lg font-bold uppercase tracking-[0.02em] text-ink-950">
                          {item.name}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-ink-600">
                          {item.detail}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-10 border-l-2 border-gold-500 pl-5 text-base leading-relaxed text-ink-700">
                  {service.closing}
                </p>
              </Reveal>
            </div>

            <aside className="lg:col-span-5">
              <Reveal delay={110} className="lg:sticky lg:top-40">
                <div className="rounded-sm bg-ink-950 p-7">
                  <h2 className="display-tight text-2xl font-extrabold text-white">
                    {t.pages.services.howItWorks}
                  </h2>
                  <ol className="mt-6 space-y-5">
                    {service.steps.map((step, index) => (
                      <li key={step.title} className="flex gap-4">
                        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-sm border border-gold-500/40 bg-gold-500/10 font-display text-base font-bold text-gold-400">
                          {index + 1}
                        </span>
                        <span>
                          <span className="block font-display text-base font-bold uppercase tracking-[0.06em] text-white">
                            {step.title}
                          </span>
                          <span className="mt-1 block text-sm leading-relaxed text-ink-300">
                            {step.body}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-7 border-t border-ink-800 pt-6">
                    <ul className="flex flex-wrap gap-2">
                      {service.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="rounded-full border border-ink-700 px-3 py-1 text-xs font-medium text-ink-300"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <Button
                      to={`/contact?service=${service.slug}#enquiry`}
                      className="mt-6 w-full"
                      size="lg"
                    >
                      {service.ctaLabel}
                      <ArrowRight className="size-5" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>

      {vehicles.length > 0 && (
        <section className="bg-ink-50/70 py-16 sm:py-20">
          <Container size="wide">
            <SectionHeading
              eyebrow={t.fleet.deployEyebrow}
              title={
                <>
                  {t.fleet.deployTitleLead} <Accent>{t.fleet.deployTitleAccent}</Accent>
                </>
              }
              body={t.fleet.deployBody}
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {vehicles.map((vehicle, index) => (
                <Reveal key={vehicle.slug} delay={index * 70} className="h-full">
                  <Link
                    to="/fleet"
                    className="group flex h-full flex-col overflow-hidden rounded-sm border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div className="aspect-[5/4] overflow-hidden bg-ink-900">
                      <img
                        src={vehicle.image}
                        alt={vehicle.imageAlt}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-lg font-bold uppercase tracking-[0.02em]">
                        {vehicle.name}
                      </h3>
                      <p className="mt-1.5 text-sm text-ink-600">{vehicle.capacity}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 sm:py-20">
        <Container size="wide">
          <SectionHeading
            eyebrow={t.pages.services.otherEyebrow}
            title={
              <>
                {t.pages.services.otherTitleLead} <Accent>{t.pages.services.otherTitleAccent}</Accent>
              </>
            }
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {others.map((other, index) => (
              <Reveal key={other.slug} delay={index * 80}>
                <Link
                  to={`/services/${other.slug}`}
                  className="group flex h-full items-start gap-4 rounded-sm border border-ink-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lift"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm bg-ink-950 text-gold-400 transition group-hover:bg-gold-500 group-hover:text-ink-950">
                    <other.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-bold uppercase tracking-[0.02em] text-ink-950">
                      {other.title}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-ink-600">
                      {other.summary}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
      <ContactSection />
    </>
  );
}
